import fs from "node:fs";
import path from "node:path";
import type { TrackingEvent, TrackingRecord, TrackingParty } from "./tracking-types";

const dataPath = path.join(process.cwd(), "src", "data", "tracking.json");
const tableName = "tracking_records";

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL?.trim().replace(/\/+$/, "");
  const secretKey = process.env.SUPABASE_SECRET_KEY?.trim();

  if (url && secretKey) return { url, secretKey };
  if (process.env.NODE_ENV === "production") {
    throw new Error("SUPABASE_URL and SUPABASE_SECRET_KEY must be configured in production.");
  }

  return null;
}

async function supabaseRequest<T>(pathName: string, init?: RequestInit): Promise<T> {
  const config = getSupabaseConfig();
  if (!config) throw new Error("Supabase is not configured.");

  const response = await fetch(`${config.url}/rest/v1/${pathName}`, {
    ...init,
    cache: "no-store",
    headers: {
      apikey: config.secretKey,
      Authorization: `Bearer ${config.secretKey}`,
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Supabase request failed (${response.status}): ${body || response.statusText}`);
  }

  const text = await response.text();
  return (text ? JSON.parse(text) : null) as T;
}

function ensureStore() {
  if (!fs.existsSync(dataPath)) {
    fs.mkdirSync(path.dirname(dataPath), { recursive: true });
    fs.writeFileSync(dataPath, "[]\n", "utf8");
  }
}

function getAllJson() {
  ensureStore();
  return JSON.parse(fs.readFileSync(dataPath, "utf8")) as TrackingRecord[];
}

function getJsonByNo(no: string) {
  const normalized = no.trim().toUpperCase();
  return getAllJson().find((record) => record.trackingNo.trim().toUpperCase() === normalized) ?? null;
}

function saveAllJson(records: TrackingRecord[]) {
  ensureStore();
  fs.writeFileSync(dataPath, `${JSON.stringify(records, null, 2)}\n`, "utf8");
}

type TrackingRow = {
  id: number;
  tracking_no: string;
  current_status: string;
  booking_mode: string;
  scheduled_delivery: string;
  customer_first_name: string;
  customer_last_name: string;
  origin: string;
  destination: string;
  services: string;
  type: string;
  weight: string;
  pickup_date_time: string;
  description: string;
  shipper: TrackingParty;
  consignee: TrackingParty;
  travel_history: TrackingEvent[];
  created_at: string;
  updated_at: string;
};

function rowToRecord(row: TrackingRow): TrackingRecord {
  return {
    id: Number(row.id),
    trackingNo: row.tracking_no,
    currentStatus: row.current_status,
    bookingMode: row.booking_mode,
    scheduledDelivery: row.scheduled_delivery ?? "",
    customerFirstName: row.customer_first_name ?? "",
    customerLastName: row.customer_last_name ?? "",
    origin: row.origin ?? "",
    destination: row.destination ?? "",
    services: row.services ?? "",
    type: row.type ?? "",
    weight: row.weight ?? "",
    pickupDateTime: row.pickup_date_time ?? "",
    description: row.description ?? "",
    shipper: row.shipper ?? { name: "", phone: "", address: "" },
    consignee: row.consignee ?? { name: "", phone: "", address: "" },
    travelHistory: row.travel_history ?? [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function recordToRow(record: TrackingRecord) {
  return {
    tracking_no: record.trackingNo,
    current_status: record.currentStatus,
    booking_mode: record.bookingMode,
    scheduled_delivery: record.scheduledDelivery,
    customer_first_name: record.customerFirstName,
    customer_last_name: record.customerLastName,
    origin: record.origin,
    destination: record.destination,
    services: record.services,
    type: record.type,
    weight: record.weight,
    pickup_date_time: record.pickupDateTime,
    description: record.description,
    shipper: record.shipper,
    consignee: record.consignee,
    travel_history: record.travelHistory,
  };
}

function mergeRecord(existing: TrackingRecord, patch: Partial<TrackingRecord>): TrackingRecord {
  const normalizedNo = existing.trackingNo.trim().toUpperCase();
  const incomingTrackingNo = patch.trackingNo?.trim();
  if (incomingTrackingNo && incomingTrackingNo.toUpperCase() !== normalizedNo) {
    throw new Error("Tracking number cannot be changed after the record is created.");
  }

  return {
    ...existing,
    ...patch,
    trackingNo: existing.trackingNo,
    id: existing.id,
    createdAt: existing.createdAt,
    updatedAt: new Date().toISOString(),
    shipper: patch.shipper ? { ...existing.shipper, ...patch.shipper } : existing.shipper,
    consignee: patch.consignee ? { ...existing.consignee, ...patch.consignee } : existing.consignee,
    travelHistory: patch.travelHistory
      ? patch.travelHistory.map((event: TrackingEvent) => ({ ...event }))
      : existing.travelHistory,
  };
}

async function getAllSupabase() {
  const rows = await supabaseRequest<TrackingRow[]>(`${tableName}?select=*&order=id.asc`);
  return rows.map(rowToRecord);
}

async function getOneSupabase(no: string) {
  const normalized = no.trim().toUpperCase();
  const rows = await supabaseRequest<TrackingRow[]>(
    `${tableName}?tracking_no=eq.${encodeURIComponent(normalized)}&select=*&limit=1`,
  );
  return rows[0] ? rowToRecord(rows[0]) : null;
}

export async function getAllTrackings() {
  return getSupabaseConfig() ? getAllSupabase() : getAllJson();
}

export async function getTrackingByNo(no: string) {
  return getSupabaseConfig() ? getOneSupabase(no) : getJsonByNo(no);
}

export async function createTracking(input: Omit<TrackingRecord, "id" | "createdAt" | "updatedAt">) {
  const trackingNo = input.trackingNo.trim().toUpperCase();
  if (!trackingNo) throw new Error("Tracking number is required.");

  const config = getSupabaseConfig();
  if (!config) {
    const records = getAllJson();
    if (records.some((record) => record.trackingNo.trim().toUpperCase() === trackingNo)) {
      throw new Error("A tracking record with that tracking number already exists.");
    }

    const now = new Date().toISOString();
    const id = records.length ? Math.max(...records.map((record) => record.id)) + 1 : 1;
    const record: TrackingRecord = { ...input, trackingNo, id, createdAt: now, updatedAt: now };
    records.push(record);
    saveAllJson(records);
    return record;
  }

  const now = new Date().toISOString();
  const rows = await supabaseRequest<TrackingRow[]>(tableName, {
    method: "POST",
    headers: { Prefer: "return=representation" },
    body: JSON.stringify({
      ...recordToRow({ ...input, trackingNo, id: 0, createdAt: now, updatedAt: now }),
      created_at: now,
      updated_at: now,
    }),
  });

  if (!rows[0]) throw new Error("The tracking record was not created.");
  return rowToRecord(rows[0]);
}

export async function updateTracking(no: string, patch: Partial<Omit<TrackingRecord, "id" | "createdAt" | "updatedAt">>) {
  const existing = await getTrackingByNo(no);
  if (!existing) return null;

  const updated = mergeRecord(existing, patch as Partial<TrackingRecord>);
  const config = getSupabaseConfig();

  if (!config) {
    const records = getAllJson();
    const index = records.findIndex(
      (record) => record.trackingNo.trim().toUpperCase() === existing.trackingNo.trim().toUpperCase(),
    );
    if (index < 0) return null;
    records[index] = updated;
    saveAllJson(records);
    return updated;
  }

  const rows = await supabaseRequest<TrackingRow[]>(
    `${tableName}?tracking_no=eq.${encodeURIComponent(existing.trackingNo)}`,
    {
      method: "PATCH",
      headers: { Prefer: "return=representation" },
      body: JSON.stringify({ ...recordToRow(updated), updated_at: updated.updatedAt }),
    },
  );

  if (!rows[0]) return null;
  return rowToRecord(rows[0]);
}

export async function deleteTracking(no: string) {
  const existing = await getTrackingByNo(no);
  if (!existing) return false;

  const config = getSupabaseConfig();
  if (!config) {
    const records = getAllJson();
    const next = records.filter(
      (record) => record.trackingNo.trim().toUpperCase() !== existing.trackingNo.trim().toUpperCase(),
    );
    saveAllJson(next);
    return true;
  }

  await supabaseRequest<null>(
    `${tableName}?tracking_no=eq.${encodeURIComponent(existing.trackingNo)}`,
    { method: "DELETE", headers: { Prefer: "return=minimal" } },
  );
  return true;
}
