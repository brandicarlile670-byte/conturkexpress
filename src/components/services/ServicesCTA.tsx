import { Icon } from "@/components/ui/Icons";

export default function ServicesCTA() {
  return (
    <section id="contact-strip">
      <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-neutral-900 to-neutral-950 p-8 text-center md:p-14">
        <div className="pointer-events-none absolute -top-20 left-1/2 h-60 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-red-500/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]" />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-2xl font-bold text-white md:text-3xl">Let&apos;s plan the right solution for your cargo together</h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-neutral-400">Our expert team is by your side at every stage of your shipment.</p>
          <a className="mt-7 inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground shadow-xs transition-all hover:bg-primary/90" href="/contact-us">
            Contact us <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
