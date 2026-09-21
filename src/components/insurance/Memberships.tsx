import { memberships } from "@/lib/insurance";

export default function Memberships() {
  return (
    <section id="networks" className="scroll-mt-28">
      <div className="text-center"><h2 className="bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-neutral-100 dark:to-neutral-400">Network memberships</h2><p className="mx-auto mt-3 max-w-2xl text-base text-neutral-600 dark:text-gray-400">Our network memberships add a second layer of protection: vetted counterparties at the far end of each shipment and, where the programme provides it, financial protection between members.</p></div>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {memberships.map((m) => <div key={m.name} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40"><div className="flex items-center justify-between gap-3"><p className="text-base font-semibold text-neutral-800 dark:text-neutral-100">{m.name}</p><span className="rounded bg-red-50 px-2 py-0.5 text-[10px] font-bold tracking-wider text-red-700 uppercase dark:bg-red-400/10 dark:text-red-400">VIP</span></div><p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-gray-400">{m.detail}</p>{m.since && <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{m.since}</p>}{m.memberNo && <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">Member no: <span className="font-semibold text-neutral-700 dark:text-neutral-200">{m.memberNo}</span></p>}</div>)}
      </div>
    </section>
  );
}
