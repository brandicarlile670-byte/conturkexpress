import { BadgeCheckIcon, ShipIcon } from "./icons";

const badges = ["WCA World, since 2012", "JC Trans Elite", "WIFFA"];

export default function AboutHero() {
  return (
    <section className="relative flex flex-col items-center text-center">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl dark:bg-red-500/10" />
      <div className="relative flex flex-col items-center">
        <div className="flex flex-col items-center text-center">
          <div className="[perspective:400px] [transform-style:preserve-3d]">
            <div className="relative mx-auto h-14 w-14 rounded-md bg-gradient-to-b from-neutral-800 to-neutral-950 p-[4px] [transform:rotateX(25deg)] [transform-origin:center_center]">
              <div className="relative z-20 flex h-full w-full items-center justify-center rounded-[5px] bg-charcoal">
                <ShipIcon className="h-5 w-5 text-red-500" />
              </div>
              <div className="absolute inset-x-0 bottom-0 z-30 mx-auto h-4 w-full rounded-full bg-neutral-600 opacity-50 blur-lg" />
              <div className="absolute inset-x-0 bottom-0 mx-auto h-px w-[60%] bg-gradient-to-r from-transparent via-red-500 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 mx-auto h-[8px] w-[60%] bg-gradient-to-r from-transparent via-red-600 to-transparent blur-sm" />
            </div>
          </div>
          <div className="mt-5">
            <span className="inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-full border border-transparent bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              About Us
            </span>
          </div>
          <h1 className="mt-5 max-w-3xl bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl dark:from-neutral-100 dark:to-neutral-400">
            Who We Are
          </h1>
          <p className="mt-4 max-w-2xl text-base text-neutral-600 md:text-lg dark:text-gray-400">
            Conturk Shipping is a transport company providing international logistics services as a freight forwarder / NVOCC, alongside its ship agency operations. Headquartered in Istanbul, we are able to serve at every customs office and port across Türkiye.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {badges.map((badge) => (
            <span key={badge} className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 bg-white/60 px-3 py-1.5 text-xs font-semibold text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-300">
              <BadgeCheckIcon className="h-3.5 w-3.5 text-red-500" />
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
