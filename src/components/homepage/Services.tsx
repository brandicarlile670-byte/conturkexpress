export default function Services() {
  return (
<section>
  <div className="mb-10 text-center" style={{opacity: "1", transform: "none"}}>
    <span data-slot="badge" className="inline-flex items-center justify-center border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 rounded-full px-3 py-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ship mr-1.5 h-3.5 w-3.5 text-red-500" aria-hidden="true">
        <path d="M12 10.189V14"></path>
        <path d="M12 2v3"></path>
        <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6"></path>
        <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-8.188-3.639a2 2 0 0 0-1.624 0L3 14a11.6 11.6 0 0 0 2.81 7.76"></path>
        <path d="M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1s1.2 1 2.5 1c2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"></path>
      </svg>
      Our Services
    </span>
    <h2 className="mt-4 bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-neutral-100 dark:to-neutral-400">End-to-end logistics solutions</h2>
    <p className="mx-auto mt-3 max-w-xl text-base text-neutral-600 dark:text-gray-400">From container shipping to customs clearance, all your transport needs under one roof.</p>
  </div>
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40" style={{opacity: "1", transform: "none"}}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(239,68,68,0.12), transparent 70%)"}}></div>
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-red-400/10"></div>
      <span className="absolute top-5 right-5 text-xs font-semibold text-neutral-300 dark:text-neutral-700">01</span>
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:text-red-400 dark:ring-red-400/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-container h-6 w-6" aria-hidden="true">
          <path d="M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z"></path>
          <path d="M10 21.9V14L2.1 9.1"></path>
          <path d="m10 14 11.9-6.9"></path>
          <path d="M14 19.8v-8.1"></path>
          <path d="M18 17.5V9.4"></path>
        </svg>
      </div>
      <h3 className="relative mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100">Container Shipping</h3>
      <p className="relative text-sm leading-relaxed text-neutral-600 dark:text-gray-400">Fast, secure and competitive FCL and LCL container shipping worldwide.</p>
      <div className="relative mt-5 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-red-400/40"></div>
    </div>
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40" style={{opacity: "1", transform: "none"}}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(239,68,68,0.12), transparent 70%)"}}></div>
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-red-400/10"></div>
      <span className="absolute top-5 right-5 text-xs font-semibold text-neutral-300 dark:text-neutral-700">02</span>
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:text-red-400 dark:ring-red-400/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane h-6 w-6" aria-hidden="true">
          <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path>
        </svg>
      </div>
      <h3 className="relative mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100">Air Freight</h3>
      <p className="relative text-sm leading-relaxed text-neutral-600 dark:text-gray-400">Global air freight services for your urgent and time-sensitive shipments.</p>
      <div className="relative mt-5 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-red-400/40"></div>
    </div>
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40" style={{opacity: "1", transform: "none"}}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(239,68,68,0.12), transparent 70%)"}}></div>
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-red-400/10"></div>
      <span className="absolute top-5 right-5 text-xs font-semibold text-neutral-300 dark:text-neutral-700">03</span>
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:text-red-400 dark:ring-red-400/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-truck h-6 w-6" aria-hidden="true">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path>
          <path d="M15 18H9"></path>
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path>
          <circle cx="17" cy="18" r="2"></circle>
          <circle cx="7" cy="18" r="2"></circle>
        </svg>
      </div>
      <h3 className="relative mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100">Pre / On / Inland Carriage</h3>
      <p className="relative text-sm leading-relaxed text-neutral-600 dark:text-gray-400">Pre-carriage, on-carriage and inland haulage as legs of a container move, so the box travels door to door.</p>
      <div className="relative mt-5 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-red-400/40"></div>
    </div>
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40" style={{opacity: "1", transform: "none"}}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(239,68,68,0.12), transparent 70%)"}}></div>
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-red-400/10"></div>
      <span className="absolute top-5 right-5 text-xs font-semibold text-neutral-300 dark:text-neutral-700">04</span>
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:text-red-400 dark:ring-red-400/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-route h-6 w-6" aria-hidden="true">
          <circle cx="6" cy="19" r="3"></circle>
          <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path>
          <circle cx="18" cy="5" r="3"></circle>
        </svg>
      </div>
      <h3 className="relative mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100">Transit Transport</h3>
      <p className="relative text-sm leading-relaxed text-neutral-600 dark:text-gray-400">Regular door-to-door transit services through Mersin and Istanbul to East Europe, the Middle East and surrounding countries, Azerbaijan, Iraq and the Arab states.</p>
      <div className="relative mt-5 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-red-400/40"></div>
    </div>
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40" style={{opacity: "1", transform: "none"}}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(239,68,68,0.12), transparent 70%)"}}></div>
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-red-400/10"></div>
      <span className="absolute top-5 right-5 text-xs font-semibold text-neutral-300 dark:text-neutral-700">05</span>
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:text-red-400 dark:ring-red-400/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-boxes h-6 w-6" aria-hidden="true">
          <path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z"></path>
          <path d="m7 16.5-4.74-2.85"></path>
          <path d="m7 16.5 5-3"></path>
          <path d="M7 16.5v5.17"></path>
          <path d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z"></path>
          <path d="m17 16.5-5-3"></path>
          <path d="m17 16.5 4.74-2.85"></path>
          <path d="M17 16.5v5.17"></path>
          <path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z"></path>
          <path d="M12 8 7.26 5.15"></path>
          <path d="m12 8 4.74-2.85"></path>
          <path d="M12 13.5V8"></path>
        </svg>
      </div>
      <h3 className="relative mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100">Project / Out-of-Gauge Cargo</h3>
      <p className="relative text-sm leading-relaxed text-neutral-600 dark:text-gray-400">Project and out-of-gauge cargo including Open Top, Flatrack, Platform and dry cargo.</p>
      <div className="relative mt-5 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-red-400/40"></div>
    </div>
    <div className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40" style={{opacity: "1", transform: "none"}}>
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{background: "radial-gradient(220px circle at var(--mx, 50%) var(--my, 50%), rgba(239,68,68,0.12), transparent 70%)"}}></div>
      <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-red-400/10"></div>
      <span className="absolute top-5 right-5 text-xs font-semibold text-neutral-300 dark:text-neutral-700">06</span>
      <div className="relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 dark:text-red-400 dark:ring-red-400/20">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-snowflake h-6 w-6" aria-hidden="true">
          <path d="m10 20-1.25-2.5L6 18"></path>
          <path d="M10 4 8.75 6.5 6 6"></path>
          <path d="m14 20 1.25-2.5L18 18"></path>
          <path d="m14 4 1.25 2.5L18 6"></path>
          <path d="m17 21-3-6h-4"></path>
          <path d="m17 3-3 6 1.5 3"></path>
          <path d="M2 12h6.5L10 9"></path>
          <path d="m20 10-1.5 2 1.5 2"></path>
          <path d="M22 12h-6.5L14 15"></path>
          <path d="m4 10 1.5 2L4 14"></path>
          <path d="m7 21 3-6-1.5-3"></path>
          <path d="m7 3 3 6h4"></path>
        </svg>
      </div>
      <h3 className="relative mb-2 text-lg font-semibold text-neutral-800 dark:text-neutral-100">Reefer Shipping</h3>
      <p className="relative text-sm leading-relaxed text-neutral-600 dark:text-gray-400">Temperature-controlled reefer container shipping for cold-chain cargo.</p>
      <div className="relative mt-5 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-red-400/40"></div>
    </div>
  </div>
  <div className="mt-10 flex justify-center">
    <a className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-11 rounded-lg px-8 group gap-2" href="https://conturk.com/services">
      All Services
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true">
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </a>
  </div>
</section>
  );
}
