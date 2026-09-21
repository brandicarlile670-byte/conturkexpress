import { Icon, type IconName } from "@/components/ui/Icons";

export default function InsurancePanel({ title, intro, icon, items, id }: { title: string; intro: string; icon: IconName; items: { title: string; text: string }[]; id?: string }) {
  return (
    <section id={id} className="scroll-mt-28">
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-linear-to-b from-gray-50 to-gray-100 p-6 md:p-10 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950">
        <div className="flex items-center gap-3"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-red-600 ring-1 ring-neutral-200 dark:bg-neutral-950 dark:text-red-400 dark:ring-neutral-800"><Icon name={icon} className="h-5 w-5" /></span><h2 className="bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-neutral-100 dark:to-neutral-400">{title}</h2></div>
        <p className="mt-5 max-w-3xl text-base leading-relaxed text-neutral-600 dark:text-gray-300">{intro}</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {items.map((item) => <div key={item.title} className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-950"><h3 className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-gray-400">{item.text}</p></div>)}
        </div>
      </div>
    </section>
  );
}
