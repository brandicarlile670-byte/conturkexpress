"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { TrackingEvent, TrackingRecord } from "@/lib/tracking-types";

type EditableTrackingRecord = Omit<TrackingRecord, "id" | "createdAt" | "updatedAt">;
type EditableField = Exclude<keyof EditableTrackingRecord, "shipper" | "consignee" | "travelHistory">;

type EventForm = Omit<TrackingEvent, "id">;

function blank(): EditableTrackingRecord {
  return {
    trackingNo: "",
    currentStatus: "Processing",
    bookingMode: "Paid",
    scheduledDelivery: "",
    customerFirstName: "",
    customerLastName: "",
    origin: "",
    destination: "",
    services: "",
    type: "Consignment",
    weight: "",
    pickupDateTime: "",
    description: "",
    shipper: { name: "", phone: "", address: "" },
    consignee: { name: "", phone: "", address: "" },
    travelHistory: [],
  };
}

function toEditable(record: TrackingRecord): EditableTrackingRecord {
  return {
    trackingNo: record.trackingNo,
    currentStatus: record.currentStatus,
    bookingMode: record.bookingMode,
    scheduledDelivery: record.scheduledDelivery,
    customerFirstName: record.customerFirstName,
    customerLastName: record.customerLastName,
    origin: record.origin,
    destination: record.destination,
    services: record.services,
    type: record.type,
    weight: record.weight,
    pickupDateTime: record.pickupDateTime,
    description: record.description,
    shipper: { ...record.shipper },
    consignee: { ...record.consignee },
    travelHistory: record.travelHistory.map((event) => ({ ...event })),
  };
}

function createEventForm(): EventForm {
  return {
    location: "",
    status: "",
    dateTime: new Date().toISOString().slice(0, 19).replace("T", " "),
    remarks: "",
  };
}

export default function TrackingEditor({
  initialRecord,
  createMode,
}: {
  initialRecord?: TrackingRecord | null;
  createMode: boolean;
}) {
  const router = useRouter();

  const seed = useMemo(
    () => (initialRecord ? toEditable(initialRecord) : blank()),
    [initialRecord],
  );
  const [form, setForm] = useState<EditableTrackingRecord>(seed);
  const [events, setEvents] = useState<TrackingEvent[]>(seed.travelHistory ?? []);
  const [editing, setEditing] = useState<number | null>(null);
  const [eventForm, setEventForm] = useState<EventForm>(createEventForm());
  const [message, setMessage] = useState("");

  const setField = (key: EditableField, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const setParty = (
    party: "shipper" | "consignee",
    key: "name" | "phone" | "address",
    value: string,
  ) => {
    setForm((current) => ({
      ...current,
      [party]: { ...current[party], [key]: value },
    }));
  };

  function saveEvent() {
    if (
      !eventForm.location.trim() ||
      !eventForm.status.trim() ||
      !eventForm.dateTime.trim()
    ) {
      setMessage("Please fill in Location, Status, and Date.");
      return;
    }

    if (editing !== null) {
      setEvents((current) =>
        current.map((event, index) =>
          index === editing ? { ...event, ...eventForm } : event,
        ),
      );
    } else {
      setEvents((current) => [
        ...current,
        { ...eventForm, id: `evt-${Date.now()}` },
      ]);
    }

    setEditing(null);
    setEventForm(createEventForm());
  }

  function editEvent(index: number) {
    const event = events[index];
    if (!event) return;

    setEditing(index);
    setEventForm({
      location: event.location,
      status: event.status,
      dateTime: event.dateTime,
      remarks: event.remarks,
    });
  }

  function deleteEvent(index: number) {
    if (confirm("Are you sure you want to delete this travel event?")) {
      setEvents((current) => current.filter((_, eventIndex) => eventIndex !== index));
    }
  }

  async function save() {
    setMessage("");

    if (!form.trackingNo.trim()) {
      setMessage("Tracking Number is required.");
      return;
    }

    const payload = { ...form, travelHistory: events };
    const response = await fetch(
      createMode
        ? "/api/tracking"
        : `/api/tracking/${encodeURIComponent(initialRecord!.trackingNo)}`,
      {
        method: createMode ? "POST" : "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      },
    );
    const body = await response.json().catch(() => null);

    if (!response.ok) {
      setMessage(body?.error || "Unable to save tracking record.");
      return;
    }

    if (createMode && body?.trackingNo) {
      router.push(`/admin/tracking/${encodeURIComponent(body.trackingNo)}`);
      return;
    }

    setMessage("Parcel details saved successfully.");
  }

  async function deleteParcel() {
    if (createMode || !initialRecord) return;
    if (!confirm("Are you sure you want to delete this parcel?")) return;

    const response = await fetch(
      `/api/tracking/${encodeURIComponent(initialRecord.trackingNo)}`,
      { method: "DELETE" },
    );

    if (response.ok) {
      router.push("/admin/tracking");
    }
  }

  return (
    <div className="ct-admin-editor">
      <header className="header">
        <div className="header-container">
          <div className="brand">
            <svg
              className="logo-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="45" cy="45" r="25" stroke="var(--brand-color)" strokeWidth="8" fill="none" />
              <line x1="62" y1="62" x2="85" y2="85" stroke="var(--brand-color)" strokeWidth="8" strokeLinecap="round" />
              <circle cx="45" cy="45" r="10" fill="var(--brand-color)" />
              <path d="M20,60 L10,70" stroke="var(--brand-color)" strokeWidth="4" strokeLinecap="round" />
            </svg>
            <h1>
              PARCEL TRACKING <span className="admin-tag">Admin</span>
            </h1>
          </div>
        </div>
      </header>

      <main className="container">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            void save();
          }}
        >
          <div className="panel">
            <h2 className="section-title">General Information</h2>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="trackingNo">Tracking Number</label>
                <input
                  id="trackingNo"
                  className="highlight-input"
                  value={form.trackingNo}
                  onChange={(event) => setField("trackingNo", event.target.value)}
                  required
                  disabled={!createMode}
                />
              </div>
              <div className="form-group">
                <label htmlFor="currentStatus">Current Status</label>
                <select
                  id="currentStatus"
                  value={form.currentStatus}
                  onChange={(event) => setField("currentStatus", event.target.value)}
                >
                  <option>Processing</option>
                  <option>Dispatched</option>
                  <option>Custom Unit</option>
                  <option>Departed</option>
                  <option>Arrived</option>
                  <option>Delivered</option>
                  <option>Awaiting-Departure</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="bookingMode">Booking Mode</label>
                <select
                  id="bookingMode"
                  value={form.bookingMode}
                  onChange={(event) => setField("bookingMode", event.target.value)}
                >
                  <option>Paid</option>
                  <option>To Pay</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="scheduledDelivery">Schedule Delivery</label>
                <input
                  id="scheduledDelivery"
                  value={form.scheduledDelivery}
                  onChange={(event) => setField("scheduledDelivery", event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerFirstName">Customer First Name</label>
                <input
                  id="customerFirstName"
                  value={form.customerFirstName}
                  onChange={(event) => setField("customerFirstName", event.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="customerLastName">Customer Last Name</label>
                <input
                  id="customerLastName"
                  value={form.customerLastName}
                  onChange={(event) => setField("customerLastName", event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="panel">
            <h2 className="section-title">Logistics &amp; Additional Details</h2>
            <div className="form-grid" style={{ marginBottom: 30 }}>
              {(
                [
                  ["Origin", "origin"],
                  ["Destination", "destination"],
                  ["Services", "services"],
                  ["Type", "type"],
                  ["Weight", "weight"],
                  ["Pickup Date/Time", "pickupDateTime"],
                ] as const
              ).map(([label, key]) => (
                <div className="form-group" key={key}>
                  <label htmlFor={key}>{label}</label>
                  <input
                    id={key}
                    value={form[key]}
                    onChange={(event) => setField(key, event.target.value)}
                  />
                </div>
              ))}
              <div className="form-group full-width">
                <label htmlFor="description">Description</label>
                <input
                  id="description"
                  value={form.description}
                  onChange={(event) => setField("description", event.target.value)}
                />
              </div>
            </div>

            <div className="form-grid">
              <div className="info-box">
                <h3>Shipper Info</h3>
                <div className="form-group">
                  <label htmlFor="shipperName">Name</label>
                  <input
                    id="shipperName"
                    value={form.shipper.name}
                    onChange={(event) => setParty("shipper", "name", event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="shipperPhone">Phone</label>
                  <input
                    id="shipperPhone"
                    value={form.shipper.phone}
                    onChange={(event) => setParty("shipper", "phone", event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="shipperAddress">Address</label>
                  <textarea
                    id="shipperAddress"
                    rows={3}
                    value={form.shipper.address}
                    onChange={(event) => setParty("shipper", "address", event.target.value)}
                  />
                </div>
              </div>

              <div className="info-box">
                <h3>Consignee Information</h3>
                <div className="form-group">
                  <label htmlFor="consigneeName">Name</label>
                  <input
                    id="consigneeName"
                    value={form.consignee.name}
                    onChange={(event) => setParty("consignee", "name", event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="consigneePhone">Phone</label>
                  <input
                    id="consigneePhone"
                    value={form.consignee.phone}
                    onChange={(event) => setParty("consignee", "phone", event.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="consigneeAddress">Address</label>
                  <textarea
                    id="consigneeAddress"
                    rows={3}
                    value={form.consignee.address}
                    onChange={(event) => setParty("consignee", "address", event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="panel">
            <h2 className="section-title">Travel History</h2>
            <div className="event-form">
              <h3 style={{ fontSize: 15, marginBottom: 15, color: "var(--text-main)" }}>
                {editing === null ? "Add New Event" : "Edit Event"}
              </h3>
              <div className="form-grid" style={{ alignItems: "end" }}>
                <div className="form-group">
                  <label htmlFor="eventLocation">Location</label>
                  <input
                    id="eventLocation"
                    placeholder="e.g. Turkey"
                    value={eventForm.location}
                    onChange={(event) => setEventForm({ ...eventForm, location: event.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventStatus">Status</label>
                  <input
                    id="eventStatus"
                    placeholder="e.g. Processing"
                    value={eventForm.status}
                    onChange={(event) => setEventForm({ ...eventForm, status: event.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventDateTime">Date / Time</label>
                  <input
                    id="eventDateTime"
                    placeholder="YYYY-MM-DD HH:MM:SS"
                    value={eventForm.dateTime}
                    onChange={(event) => setEventForm({ ...eventForm, dateTime: event.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="eventRemarks">Remarks</label>
                  <input
                    id="eventRemarks"
                    placeholder="Enter remarks"
                    value={eventForm.remarks}
                    onChange={(event) => setEventForm({ ...eventForm, remarks: event.target.value })}
                  />
                </div>
                <div className="form-group action-group">
                  <button type="button" className="btn btn-primary" onClick={saveEvent}>
                    {editing === null ? "Add Event" : "Update Event"}
                  </button>
                  {editing !== null ? (
                    <button type="button" className="btn btn-outline" onClick={() => setEditing(null)}>
                      Cancel
                    </button>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Status</th>
                    <th>Date / Time</th>
                    <th>Remarks</th>
                    <th style={{ width: 140, textAlign: "center" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {events.length ? (
                    events.map((event, index) => (
                      <tr key={event.id}>
                        <td>{event.location}</td>
                        <td>{event.status}</td>
                        <td>{event.dateTime}</td>
                        <td>{event.remarks}</td>
                        <td>
                          <div className="action-group" style={{ justifyContent: "center" }}>
                            <button type="button" className="btn btn-outline btn-sm" onClick={() => editEvent(index)}>
                              Edit
                            </button>
                            <button type="button" className="btn btn-danger btn-sm" onClick={() => deleteEvent(index)}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} style={{ textAlign: "center", color: "var(--text-muted)", padding: 30 }}>
                        No travel events yet.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {message ? <div className="editor-message">{message}</div> : null}

          <div className="bottom-bar">
            {!createMode ? (
              <button type="button" className="btn btn-outline delete-parcel" onClick={deleteParcel}>
                Delete Entire Parcel
              </button>
            ) : null}
            <Link href="/admin/tracking" className="btn btn-outline">
              Back to List
            </Link>
            <button type="submit" className="btn btn-primary">
              Save All Changes
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
