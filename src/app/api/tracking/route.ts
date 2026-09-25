import { NextResponse } from "next/server";
import { createTracking, getAllTrackings } from "@/lib/tracking-repository";
import type { TrackingRecord } from "@/lib/tracking-types";
import { isAdminAuthenticated } from "@/lib/admin-auth";

export const runtime = "nodejs";

export async function GET() {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await getAllTrackings());
}

export async function POST(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = (await request.json()) as Omit<TrackingRecord, "id" | "createdAt" | "updatedAt">;

  try {
    return NextResponse.json(await createTracking(body), { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to create tracking record.";
    const conflict = /already exists|duplicate|23505/i.test(message);
    return NextResponse.json({ error: message }, { status: conflict ? 409 : 500 });
  }
}
