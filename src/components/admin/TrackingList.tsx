"use client";

import Link from "next/link";
import { useState } from "react";
import type { TrackingRecord } from "@/lib/tracking-types";

export default function TrackingList({ initialRecords }: { initialRecords: TrackingRecord[] }) {
  const [records, setRecords] = useState(initialRecords);

  async function deleteRecord(trackingNo: string) {
    if (!window.confirm(`Delete tracking record ${trackingNo}?`)) return;

    const response = await fetch(`/api/tracking/${encodeURIComponent(trackingNo)}`, {
      method: "DELETE",
    });

    if (!response.ok) return;

    setRecords((current) => current.filter((record) => record.trackingNo !== trackingNo));
  }

  return (
    <div className="ct-admin-list">
      <header className="header">
        <div className="header-container">
          <div className="brand">
            <svg className="logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
        <div className="panel">
          <div className="section-header">
            <h2 className="section-title">Tracking List</h2>
            <Link href="/admin/tracking/add" className="btn btn-blue">
              Add Tracking
            </Link>
          </div>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th className="sn-col">S/N</th>
                  <th>Tracking No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th style={{ width: 140 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {records.length ? (
                  records.map((record, index) => (
                    <tr key={record.id}>
                      <td className="sn-col">{index + 1}</td>
                      <td className="tracking-col">{record.trackingNo}</td>
                      <td>{record.customerFirstName}</td>
                      <td>{record.customerLastName}</td>
                      <td>
                        <div className="action-group">
                          <Link
                            href={`/admin/tracking/${encodeURIComponent(record.trackingNo)}`}
                            className="btn btn-outline btn-sm"
                          >
                            Edit
                          </Link>
                          <button
                            type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => void deleteRecord(record.trackingNo)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center", color: "var(--text-muted)", padding: 30 }}>
                      No tracking records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
