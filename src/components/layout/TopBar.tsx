export default function TopBar() {
  return (
<div className="hidden overflow-hidden border-b border-neutral-200/70 bg-white/85 backdrop-blur lg:block dark:border-neutral-800/70 dark:bg-neutral-950/85" style={{height: "auto", opacity: "1"}}>
  <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-4 py-1.5 text-xs">
    <div className="flex items-center gap-5">
      <a href="tel:+902163252299" className="group inline-flex items-center gap-1.5 font-semibold text-neutral-800 transition-colors hover:text-red-600 dark:text-neutral-100 dark:hover:text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-3.5 w-3.5 text-red-600 dark:text-red-400" aria-hidden="true">
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
        </svg>
        <span className="text-neutral-500 dark:text-neutral-400">Call us</span>
        <span className="tracking-tight">+90 216 325 22 99</span>
      </a>
      <a href="mailto:contact@conturk.com" className="inline-flex items-center gap-1.5 text-neutral-600 transition-colors hover:text-red-600 dark:text-neutral-300 dark:hover:text-red-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail h-3.5 w-3.5" aria-hidden="true">
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
          <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        </svg>
        contact@conturk.com
      </a>
    </div>
    <div className="flex items-center gap-5 text-neutral-600 dark:text-neutral-300">
      <span className="hidden items-center gap-1.5 text-neutral-500 xl:inline-flex dark:text-neutral-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-3.5 w-3.5" aria-hidden="true">
          <path d="M12 6v6l4 2"></path>
          <circle cx="12" cy="12" r="10"></circle>
        </svg>
        Mon–Fri 08:30–17:30 (GMT+3)
      </span>
      <a className="inline-flex items-center gap-1.5 transition-colors hover:text-red-600 dark:hover:text-red-400" href="/contact-us#offices">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-3.5 w-3.5" aria-hidden="true">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
        Offices & Addresses
      </a>
      <a className="inline-flex items-center gap-1.5 transition-colors hover:text-red-600 dark:hover:text-red-400" href="/contact-us#bank-details">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark h-3.5 w-3.5" aria-hidden="true">
          <path d="M10 18v-7"></path>
          <path d="M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z"></path>
          <path d="M14 18v-7"></path>
          <path d="M18 18v-7"></path>
          <path d="M3 22h18"></path>
          <path d="M6 18v-7"></path>
        </svg>
        Bank Details
      </a>
    </div>
  </div>
</div>
  );
}
