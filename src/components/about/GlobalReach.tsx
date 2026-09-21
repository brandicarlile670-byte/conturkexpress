import { GlobeIcon } from "./icons";

export default function GlobalReach() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-linear-to-br from-gray-50 to-gray-100 p-8 md:p-14 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-red-500/15 blur-3xl" />
        <div className="relative flex flex-col items-center text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 dark:text-red-400 dark:ring-red-400/20">
            <GlobeIcon className="h-7 w-7" />
          </div>
          <h2 className="max-w-2xl bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-2xl font-bold tracking-tight text-transparent md:text-3xl dark:from-neutral-100 dark:to-neutral-400">
            Serving Every Corner of the World
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-gray-400">
            Although our target market is predominantly Asian countries, we are able to serve all around the world. For shipments from any country, we provide you with real-time information about your cargo and its status.
          </p>
        </div>
      </div>
    </section>
  );
}
