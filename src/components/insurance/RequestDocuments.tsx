import { Icon } from "@/components/ui/Icons";

export default function RequestDocuments() {
  return (
    <section id="request" className="scroll-mt-28">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-neutral-900 to-neutral-950 p-8 text-center md:p-14">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white md:text-3xl">Request the documents</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-neutral-400">Agents, principals and compliance teams can request the insurance certificate and the full Standard Trading Conditions from the overseas desk. We answer within one business day.</p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"><a className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-sm font-medium text-primary-foreground shadow-xs hover:bg-primary/90" href="mailto:overseas@conturk.com"><Icon name="mail" className="h-4 w-4" />Email the overseas desk</a><a className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/5 px-8 text-sm font-medium text-white shadow-xs hover:bg-white/10" href="/contact-us">Contact us<Icon name="arrow-right" className="h-4 w-4" /></a></div>
          <p className="mx-auto mt-6 max-w-2xl text-xs leading-relaxed text-neutral-500">Documents are issued as signed PDFs on ConTurk letterhead. If your compliance process needs a specific format or additional wording, tell us in the request and we will accommodate it where we can.</p>
        </div>
      </div>
    </section>
  );
}
