import Link from "next/link";

export default function DesktopNav() {
  return (
<div className="hidden lg:flex flex-row self-start bg-transparent dark:bg-transparent items-center justify-between py-2 max-w-7xl mx-auto px-4 rounded-full relative z-[60] w-full" style={{minWidth: "940px", transform: "none", backdropFilter: "blur(0px)", boxShadow: "rgba(34, 42, 53, 0) 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px, rgba(34, 42, 53, 0) 0px 0px 0px 0px, rgba(34, 42, 53, 0) 0px 0px 0px, rgba(47, 48, 55, 0) 0px 0px 0px, rgba(255, 255, 255, 0) 0px 0px 0px inset", width: "100%"}}>
  <Link aria-label="ConTurk Shipping home" className="shrink-0 cursor-pointer z-50" href="/"><span className="inline-flex shrink-0 items-center"><img alt="ConTurk Shipping" width="147" height="30" decoding="async" data-nimg="1" className="w-auto select-none block dark:hidden" style={{color: "transparent", height: "30px", width: "auto"}} src="/images/conturk-logo-dark-text.png" /><img alt="" aria-hidden="true" width="147" height="30" decoding="async" data-nimg="1" className="w-auto select-none hidden dark:block" style={{color: "transparent", height: "30px", width: "auto"}} src="/images/conturk-logo-light-text.png" /></span></Link>
  <div className="lg:flex flex-row flex-1 hidden items-center justify-center space-x-1 xl:space-x-2 text-sm text-zinc-600 font-medium hover:text-zinc-800 transition duration-200"><Link className="relative shrink-0 whitespace-nowrap px-2.5 py-2 transition-colors xl:px-3 text-neutral-600 dark:text-neutral-300" href="/about-us"><span className="relative z-20">About Us</span></Link><Link className="relative shrink-0 whitespace-nowrap px-2.5 py-2 transition-colors xl:px-3 text-neutral-600 dark:text-neutral-300" href="/services"><span className="relative z-20">Services</span></Link><Link className="relative shrink-0 whitespace-nowrap px-2.5 py-2 transition-colors xl:px-3 text-neutral-600 dark:text-neutral-300" href="/insurance-and-terms"><span className="relative z-20">Insurance & Terms</span></Link><Link className="relative shrink-0 whitespace-nowrap px-2.5 py-2 transition-colors xl:px-3 text-neutral-600 dark:text-neutral-300" href="/announcements"><span className="relative z-20">Announcements</span></Link><Link className="relative shrink-0 whitespace-nowrap px-2.5 py-2 transition-colors xl:px-3 text-neutral-600 dark:text-neutral-300" href="/contact-us"><span className="relative z-20">Contact Us</span></Link></div>
  <div className="flex shrink-0 items-center gap-3">
    <button data-slot="dialog-trigger" className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50 py-2 rounded-lg h-9 gap-2 px-3 z-50" type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-_R_ukpfjb_" data-state="closed"><img alt="English flag" loading="lazy" width="40" height="21" decoding="async" data-nimg="1" className="h-3.5 w-auto object-contain" style={{color: "transparent"}} src="/images/flag-en.png" /><span className="uppercase">en</span></button>
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
  </div>
</div>
  );
}
