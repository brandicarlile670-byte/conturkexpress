"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon, PackageSearchIcon, PhoneIcon } from "./icons";

export default function AboutUtilities() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 280);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-10 right-10 z-50 rounded-full border border-white bg-black p-3 text-white shadow-lg transition-opacity duration-300 ${visible ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <ArrowUpIcon className="h-6 w-6" />
      </button>
      <button type="button" aria-label="Open quick access" className="fixed top-1/2 right-0 z-40 hidden -translate-y-1/2 items-center gap-2 rounded-l-xl border border-r-0 border-neutral-200 bg-white/90 py-3 pr-2 pl-2.5 shadow-lg backdrop-blur-xl sm:flex dark:border-white/10 dark:bg-neutral-900/90">
        <span className="text-red-600 dark:text-red-400">⚡</span>
        <span className="text-[10px] font-semibold tracking-widest text-neutral-600 uppercase [writing-mode:vertical-rl] dark:text-neutral-300">Quick Access</span>
      </button>
      <div className="fixed right-4 bottom-24 z-40 flex flex-col items-center gap-2.5 sm:hidden">
        <a aria-label="Track Shipment" className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white/90 text-neutral-700 shadow-lg backdrop-blur dark:border-white/10 dark:bg-neutral-900/90 dark:text-neutral-200" href="/tracking">
          <PackageSearchIcon className="h-5 w-5" />
        </a>
        <a aria-label="Call the ConTurk operations desk" className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30" href="tel:+902163252299">
          <PhoneIcon className="h-5 w-5" />
        </a>
      </div>
    </>
  );
}
