export default function MobileNav() {
  return (
<div className="flex relative flex-col lg:hidden w-full justify-between items-center bg-transparent max-w-[calc(100vw-2rem)] mx-auto px-0 py-2 z-50" style={{transform: "none", backdropFilter: "blur(0px)", boxShadow: "rgba(34, 42, 53, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px, rgba(34, 42, 53, 0) 0px 0px 0px 0px, rgba(34, 42, 53, 0) 0px 0px 0px, rgba(47, 48, 55, 0) 0px 0px 0px, rgba(255, 255, 255, 0) 0px 0px 0px inset", width: "100%", borderRadius: "2rem", paddingRight: "0px", paddingLeft: "0px"}}>
  <div className="flex flex-row justify-between items-center w-full">
    <a aria-label="ConTurk Shipping home" className="shrink-0 cursor-pointer z-50" href="/"><span className="inline-flex shrink-0 items-center"><img alt="ConTurk Shipping" width="108" height="22" decoding="async" data-nimg="1" className="w-auto select-none block dark:hidden" style={{color: "transparent", height: "22px", width: "auto"}} src="/images/conturk-logo-dark-text.png" /><img alt="" aria-hidden="true" width="108" height="22" decoding="async" data-nimg="1" className="w-auto select-none hidden dark:block" style={{color: "transparent", height: "22px", width: "auto"}} src="/images/conturk-logo-light-text.png" /></span></a>
    <div className="flex shrink-0 items-center gap-2">
      <a href="tel:+902163252299" aria-label="Call the ConTurk operations desk" className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 rounded-lg h-9 w-9">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone h-4 w-4 text-red-600 dark:text-red-400" aria-hidden="true">
          <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path>
        </svg>
      </a>
      <button className="hover:shadow-input relative flex cursor-pointer items-center justify-center rounded-xl p-2 text-gray-600 dark:text-gray-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="size-4 scale-100 rotate-0 text-gray-600 transition-all dark:scale-0 dark:-rotate-90 dark:text-gray-400">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 19a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"></path>
          <path d="M18.313 16.91l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.218 -1.567l.102 .07z"></path>
          <path d="M7.007 16.993a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"></path>
          <path d="M4 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"></path>
          <path d="M21 11a1 1 0 0 1 .117 1.993l-.117 .007h-1a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"></path>
          <path d="M6.213 4.81l.094 .083l.7 .7a1 1 0 0 1 -1.32 1.497l-.094 -.083l-.7 -.7a1 1 0 0 1 1.217 -1.567l.102 .07z"></path>
          <path d="M19.107 4.893a1 1 0 0 1 .083 1.32l-.083 .094l-.7 .7a1 1 0 0 1 -1.497 -1.32l.083 -.094l.7 -.7a1 1 0 0 1 1.414 0z"></path>
          <path d="M12 2a1 1 0 0 1 .993 .883l.007 .117v1a1 1 0 0 1 -1.993 .117l-.007 -.117v-1a1 1 0 0 1 1 -1z"></path>
          <path d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="absolute size-4 scale-0 rotate-90 text-gray-600 transition-all dark:scale-100 dark:rotate-0 dark:text-gray-400">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M12 1.992a10 10 0 1 0 9.236 13.838c.341 -.82 -.476 -1.644 -1.298 -1.31a6.5 6.5 0 0 1 -6.864 -10.787l.077 -.08c.551 -.63 .113 -1.653 -.758 -1.653h-.266l-.068 -.006l-.06 -.002z"></path>
        </svg>
        <span className="sr-only">Toggle theme</span>
      </button>
      <button data-slot="dialog-trigger" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 py-2 rounded-lg h-9 gap-2 px-3 z-50" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_76spfjb_" data-state="closed"><img alt="English flag" loading="lazy" width="40" height="21" decoding="async" data-nimg="1" className="h-3.5 w-auto object-contain" style={{color: "transparent"}} src="/images/flag-en.png" /><span className="uppercase">en</span></button>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu text-black dark:text-white" aria-hidden="true">
        <path d="M4 12h16"></path>
        <path d="M4 18h16"></path>
        <path d="M4 6h16"></path>
      </svg>
    </div>
  </div>
</div>
  );
}
