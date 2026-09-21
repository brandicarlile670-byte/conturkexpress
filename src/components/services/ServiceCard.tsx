import { Icon, type ServiceIconName } from "@/components/ui/Icons";

export default function ServiceCard({ number, title, description, icon }: { number: string; title: string; description: string; icon: ServiceIconName }) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40">
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-red-400/10" />
      <span className="absolute top-5 right-5 text-xs font-semibold text-neutral-300 dark:text-neutral-700">{number}</span>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 transition-transform duration-300 group-hover:scale-105 dark:text-red-400 dark:ring-red-400/20">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100">{title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600 dark:text-gray-400">{description}</p>
      <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent" />
    </article>
  );
}
