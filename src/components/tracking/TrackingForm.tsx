"use client";

import { useState, type FormEvent } from "react";
import { getTrackingUrl, isValidTrackingId, normalizeTrackingId } from "@/lib/tracking";

export default function TrackingForm() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const id = normalizeTrackingId(value);

    if (!isValidTrackingId(id)) {
      setError("Enter a Bill of Lading or container number.");
      return;
    }

    const target = getTrackingUrl(id);
    if (!target) {
      setError("Tracking is not connected yet.");
      return;
    }

    setError("");
    window.location.assign(target);
  }

  return (
<form noValidate={true} className="w-full">
  <div className="group relative flex flex-col gap-2 rounded-2xl border p-2 shadow-sm transition-all duration-300 sm:flex-row sm:items-center border-neutral-200/80 bg-white/80 hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-950/50 focus-within:border-red-400/60 focus-within:shadow-[0_0_0_3px_rgba(248,113,113,0.18)] dark:focus-within:border-red-400/50">
    <div aria-hidden="true" className="pointer-events-none absolute -inset-1 -z-10 rounded-2xl bg-linear-to-r from-red-400/30 via-red-500/25 to-[#f17463]/20 opacity-0 blur-md transition-opacity duration-300 group-focus-within:opacity-100 group-hover:opacity-60"></div>
    <div className="relative flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-package-search pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400 transition-colors group-focus-within:text-red-500 dark:text-neutral-500" aria-hidden="true">
        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
        <path d="m7.5 4.27 9 5.15"></path>
        <polyline points="3.29 7 12 12 20.71 7"></polyline>
        <line x1="12" x2="12" y1="22" y2="12"></line>
        <circle cx="18.5" cy="15.5" r="2.5"></circle>
        <path d="M20.27 17.27 22 19"></path>
      </svg>
      <input type="text" data-slot="input" className="file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border-input flex w-full min-w-0 rounded-md px-3 py-1 transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-12 border-0 bg-transparent pl-10 text-base shadow-none focus-visible:ring-0 dark:bg-transparent" placeholder="Enter your Bill of Lading or container number" aria-label="Bill of Lading / Container No" aria-invalid="false" autoComplete="off" value={value} onChange={(event) => setValue(event.target.value)} />
    </div>
    <button type="submit" className="relative inline-flex h-12 shrink-0 items-center justify-center gap-2 overflow-hidden rounded-xl px-6 text-base font-semibold text-white shadow-sm transition-all duration-300 bg-linear-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-neutral-950 w-full sm:w-auto">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ship h-4 w-4" aria-hidden="true">
        <path d="M12 10.189V14"></path>
        <path d="M12 2v3"></path>
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path>
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
      </svg>
      Track
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-xl"><span className="absolute inset-y-0 -left-3/4 w-1/2 skew-x-[-20deg] bg-linear-to-r from-transparent via-white/30 to-transparent" style={{transform: "translateX(350%)"}}></span></span>
    </button>
  </div>
{error ? <p className="mt-2 text-xs text-red-500">{error}</p> : null}
</form>
  );
}
