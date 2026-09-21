import type { CSSProperties } from "react";
import { OrbitIcon, type OrbitIconName } from "./icons";

const outer: OrbitIconName[] = ["globe", "phone", "clock", "check", "receipt", "gift", "send", "bell"];
const middle: OrbitIconName[] = ["users", "message", "chart", "shield"];
const inner: OrbitIconName[] = ["calendar", "package"];

function OrbitRing({ icons, size, duration, reverse = false }: { icons: OrbitIconName[]; size: number; duration: number; reverse?: boolean }) {
  const step = 360 / icons.length;
  return (
    <div className={`absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full ${reverse ? "animate-counter-orbit" : "animate-orbit"}`} style={{ width: size, height: size, "--duration": `${duration}s` } as CSSProperties}>
      <div className="relative h-full w-full">
        {icons.map((icon, index) => {
          const angle = index * step;
          const radius = size / 2;
          return (
            <div key={`${icon}-${angle}`} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `rotate(${angle}deg) translateX(${radius}px)` }}>
              <div style={{ transform: `rotate(${reverse ? angle : -angle}deg)` }}>
                <div className={`shadow-aceternity flex size-14 items-center justify-center rounded-md bg-white dark:bg-neutral-950 ${reverse ? "animate-counter-orbit" : "animate-orbit"}`} style={{ "--duration": `${duration}s` } as CSSProperties}>
                  <OrbitIcon name={icon} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function OrbitCTA() {
  return (
    <div className="relative flex min-h-60 w-full max-w-7xl flex-col items-center justify-center overflow-hidden border-none px-4 py-4 md:min-h-120">
      <div className="mx-auto absolute inset-x-0 -top-120 flex items-center justify-center [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]" style={{ width: 800, height: 800 }} aria-hidden="true">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-inner bg-neutral-100 dark:bg-neutral-700" style={{ width: 752, height: 752 }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-inner bg-neutral-200 dark:bg-neutral-600" style={{ width: 544, height: 544 }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-inner bg-neutral-300 dark:bg-neutral-500" style={{ width: 336, height: 336 }} />
        </div>
        <OrbitRing icons={outer} size={752} duration={34} />
        <OrbitRing icons={middle} size={544} duration={26} reverse />
        <OrbitRing icons={inner} size={336} duration={18} />
      </div>
      <h2 className="relative z-10 text-center text-2xl font-medium tracking-tight text-charcoal-700 dark:text-neutral-100 md:text-3xl lg:text-6xl">
        Ready to move your first container?
        <br />
        Let&apos;s get started.
      </h2>
      <a href="/contact-us" className="relative z-10 mt-8 flex min-w-[240px] items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90">
        Contact Us
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
          <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
        </svg>
      </a>
    </div>
  );
}
