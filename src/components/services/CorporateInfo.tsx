import { Icon } from "@/components/ui/Icons";

export default function CorporateInfo() {
  return (
    <section>
      <div className="relative overflow-hidden rounded-3xl border border-neutral-200 bg-linear-to-b from-gray-50 to-gray-100 p-6 md:p-10 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950">
        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-red-600 dark:text-red-400">ConTurk SHIPPING</span>
            <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-gray-300">
              Conturk Shipping operates mainly in the field of container shipping while also being able to provide services in other transport modes. Our headquarters are located in Istanbul. In addition, we are able to serve at all customs offices and ports across Turkey. While our company is one of the youngest agencies in Turkey, it is also among the most reliable firms. With WCA World (since 2012), JC Trans Elite and WIFFA memberships, Conturk provides its services working under global liability.
            </p>
          </div>
          <div className="rounded-2xl border border-neutral-200 bg-white p-6 dark:border-neutral-800 dark:bg-neutral-950">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/40 dark:bg-neutral-800"><Icon name="building" className="h-5 w-5 text-red-500" /></div>
              <h2 className="text-base font-semibold text-neutral-800 dark:text-neutral-100">Corporate Information</h2>
            </div>
            <div className="space-y-4">
              <div><p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Company Name (TR)</p><p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">ConTurk SHIPPING LOJISTIK HIZMETLERI LTD STI</p></div>
              <div className="h-px w-full bg-neutral-200 dark:bg-neutral-800" />
              <div><p className="text-xs font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">Company Name (EN)</p><p className="mt-1 text-sm font-medium text-neutral-800 dark:text-neutral-200">ConTurk SHIPPING</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
