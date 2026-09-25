export default function ContactStrip() {
  return (
<section id="contact-strip" className="scroll-mt-28">
  <div className="mx-auto max-w-3xl text-center" style={{opacity: "1", transform: "none"}}><span data-slot="badge" className="inline-flex items-center justify-center border text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 rounded-full px-3 py-1">Contact & Payment</span><h2 className="mt-4 bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-neutral-100 dark:to-neutral-400">Addresses, phones and bank details</h2><p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-gray-400">Everything you need to open a file with us, on one screen.</p></div>
  <div className="mt-10 grid gap-5 lg:grid-cols-[1.5fr_1fr]">
    <div className="grid gap-5 sm:grid-cols-2">
      <div className="flex flex-col rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-neutral-900 border-red-500/40 ring-1 ring-red-500/20 dark:border-red-400/40 dark:ring-red-400/20" style={{opacity: "1", transform: "none"}}>
        <div className="flex items-start justify-between gap-3"><p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">ConTurk Shipping — Istanbul</p><span data-slot="badge" className="inline-flex items-center justify-center border w-fit whitespace-nowrap [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden [a&]:hover:bg-secondary/90 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold border-red-500/30 bg-red-50 text-red-700 dark:border-red-400/30 dark:bg-red-400/10 dark:text-red-400">Headquarters</span></div>
        <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-neutral-600 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          General Asim Gunduz Cad. No:73 Floor:1 Kadikoy - Istanbul
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href="tel:+902163252299" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-lg px-2 gap-1.5 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3.5 w-3.5 text-red-600 dark:text-red-400" aria-hidden="true">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            Call
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=General%20Asim%20Gunduz%20Cad.%20No%3A73%20Floor%3A1%20Kadikoy%20-%20Istanbul" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-lg px-2 gap-1.5 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-navigation h-3.5 w-3.5" aria-hidden="true">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            Directions
          </a>
        </div>
        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">0216 325 22 99 pbx</p>
      </div>
      <div className="flex flex-col rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg dark:bg-neutral-900 border-neutral-200 dark:border-neutral-800" style={{opacity: "1", transform: "none"}}>
        <div className="flex items-start justify-between gap-3"><p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">ConTurk Shipping — Mersin</p><span data-slot="badge" className="inline-flex items-center justify-center border w-fit whitespace-nowrap [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90 shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold">Branch</span></div>
        <p className="mt-3 flex items-start gap-2 text-xs leading-relaxed text-neutral-600 dark:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          Ihsaniye Mah. 4903 Sok. Profit Business Center No:23 Floor:6 D:59 Akdeniz - Mersin
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <a href="tel:+903243365551" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-lg px-2 gap-1.5 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3.5 w-3.5 text-red-600 dark:text-red-400" aria-hidden="true">
              <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
            </svg>
            Call
          </a>
          <a href="https://www.google.com/maps/search/?api=1&query=Ihsaniye%20Mah.%204903%20Sok.%20Profit%20Business%20Center%20No%3A23%20Floor%3A6%20D%3A59%20Akdeniz%20-%20Mersin" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 rounded-lg px-2 gap-1.5 text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-navigation h-3.5 w-3.5" aria-hidden="true">
              <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
            </svg>
            Directions
          </a>
        </div>
        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">0090 324 336 55 51 / 0090 324 336 55 57</p>
      </div>
      <a href="mailto:contact@conturk.com" className="group flex items-center gap-3 rounded-2xl border border-neutral-200 bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-red-500/40 hover:shadow-lg sm:col-span-2 dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40" style={{opacity: "1", transform: "none"}}>
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-50 text-red-600 dark:bg-red-950/50 dark:text-red-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-5 w-5" aria-hidden="true">
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
          </svg>
        </span>
        <span className="min-w-0"><span className="block text-xs font-medium tracking-wide text-neutral-500 uppercase dark:text-neutral-400">Email</span><span className="block truncate text-sm font-semibold text-neutral-800 dark:text-neutral-100">contact@conturk.com</span></span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-auto h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
    </div>
    <div className="flex flex-col rounded-2xl border border-neutral-200 bg-linear-to-b from-gray-50 to-gray-100 p-5 dark:border-neutral-800 dark:from-neutral-900 dark:to-neutral-950" style={{opacity: "1", transform: "none"}}>
      <div className="flex items-center gap-2">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-red-600 ring-1 ring-neutral-200 dark:bg-neutral-950 dark:text-red-400 dark:ring-neutral-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark h-4.5 w-4.5" aria-hidden="true">
            <path d="M10 18v-7"></path>
            <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path>
            <path d="M14 18v-7"></path>
            <path d="M18 18v-7"></path>
            <path d="M3 22h18"></path>
            <path d="M6 18v-7"></path>
          </svg>
        </span>
        <div><p className="text-sm font-semibold text-neutral-800 dark:text-neutral-100">Bank details</p><p className="text-[11px] text-neutral-500 dark:text-neutral-400">TURKIYE GARANTI BANKASI A.S.</p></div>
      </div>
      <dl className="mt-4 space-y-2"><div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950"><dt className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">USD</dt><dd className="min-w-0 truncate text-[11px] text-neutral-700 dark:text-neutral-300">TR63 0006 2000 0880 0009 0569 10</dd></div><div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950"><dt className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">EUR</dt><dd className="min-w-0 truncate text-[11px] text-neutral-700 dark:text-neutral-300">TR90 0006 2000 0880 0009 0569 09</dd></div><div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950"><dt className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">GBP</dt><dd className="min-w-0 truncate text-[11px] text-neutral-700 dark:text-neutral-300">TR20 0006 2000 0880 0009 0569 08</dd></div><div className="flex items-center justify-between gap-3 rounded-lg border border-neutral-200 bg-white px-3 py-2 dark:border-neutral-800 dark:bg-neutral-950"><dt className="shrink-0 rounded bg-neutral-100 px-1.5 py-0.5 text-[10px] font-bold tracking-wider text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">TL</dt><dd className="min-w-0 truncate text-[11px] text-neutral-700 dark:text-neutral-300">TR38 0006 2000 0880 0006 2898 53</dd></div></dl>
      <p className="mt-3 text-[11px] text-neutral-500 dark:text-neutral-400">USD, EUR, GBP and TRY accounts · SWIFT TGBATRIS</p>
      <a className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 rounded-lg px-3 mt-4 w-full gap-1.5" href="/contact-us#bank-details">
        View full bank details
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right h-4 w-4" aria-hidden="true">
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</section>
  );
}
