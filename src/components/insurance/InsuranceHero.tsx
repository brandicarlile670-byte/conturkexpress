import { Icon } from "@/components/ui/Icons";

export default function InsuranceHero() {
  return (
    <section className="relative flex flex-col items-center text-center">
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-red-500/10 blur-3xl" />
      <div className="relative flex flex-col items-center">
        <div className="flex flex-col items-center text-center animate-fade-in">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-neutral-900 text-red-500 shadow-xl ring-1 ring-neutral-800 dark:bg-neutral-900">
            <Icon name="shield-check" className="h-7 w-7" />
          </div>
          <div className="mt-5"><span className="inline-flex w-fit items-center justify-center rounded-full border border-transparent bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">Liability &amp; Standard Trading Conditions</span></div>
          <h1 className="mt-5 max-w-3xl bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-4xl lg:text-5xl dark:from-neutral-100 dark:to-neutral-400">Insurance cover and the terms we trade on</h1>
          <p className="mt-4 max-w-2xl text-base text-neutral-600 md:text-lg dark:text-gray-400">Everything an overseas agent needs to complete its counterparty check on ConTurk Shipping — liability cover, the conditions that govern each booking, and who to ask for the paperwork.</p>
        </div>
      </div>
    </section>
  );
}
