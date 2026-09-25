export default function FinalCTA() {
  return (
<section>
  <div className="relative overflow-hidden rounded-3xl p-[1.5px]" style={{opacity: "1", transform: "none"}}>
    <div aria-hidden="true" className="absolute left-1/2 top-1/2 aspect-square w-[160%] -translate-x-1/2 -translate-y-1/2" style={{background: "conic-gradient(transparent 0deg, rgba(241, 116, 99, 0) 40deg, rgba(241, 116, 99, 0.95) 120deg, rgba(255, 255, 255, 0.7) 165deg, rgba(241, 116, 99, 0.7) 230deg, rgba(241, 116, 99, 0) 320deg, transparent 360deg)", transform: "rotate(225.76deg)"}}></div>
    <div className="relative overflow-hidden rounded-[calc(1.5rem-1.5px)] bg-linear-to-br from-neutral-900 to-neutral-950 px-6 py-9 md:px-12 md:py-11">
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-brand/25 blur-3xl" style={{transform: "scale(1.10062)"}}></div>
      <div className="pointer-events-none absolute inset-0 opacity-15 [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] [background-size:24px_24px]"></div>
      <div className="relative flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:gap-8 md:text-left">
        <div className="md:max-w-2xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#f8a99c] backdrop-blur">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ship h-3.5 w-3.5" aria-hidden="true">
              <path d="M12 10.189V14"></path>
              <path d="M12 2v3"></path>
              <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
              <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path>
              <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
            </svg>
            ConTurk
          </div>
          <h2 className="text-2xl font-bold text-white md:text-3xl">Let&apos;s plan the right solution for your cargo together</h2>
          <p className="mt-3 text-base text-neutral-400">Our expert team is by your side at every stage of your shipment.</p>
        </div>
        <div className="group relative shrink-0">
          <a data-slot="button" className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-11 rounded-lg border-transparent bg-brand px-8 text-base text-white hover:bg-brand/90" href="/contact-us">
            <span className="inline-flex items-center gap-2">
              Contact Us
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </span>
          </a>
          <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-md opacity-0 transition-opacity duration-300 group-hover:opacity-100"><span className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-linear-to-r from-transparent via-white/40 to-transparent" style={{transform: "translateX(-99.2324%)"}}></span></span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}
