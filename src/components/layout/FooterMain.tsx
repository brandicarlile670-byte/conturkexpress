import FooterOptionalChannels from "./FooterOptionalChannels";

export default function FooterMain() {
  return (
    <div className="max-w-7xl mx-auto text-sm text-gray-600 flex sm:flex-row flex-col justify-between items-start md:px-8">
      <div>
        <a href="/" aria-label="ConTurk Shipping home" className="inline-flex shrink-0 items-center mb-4">
          <img
            alt="ConTurk Shipping"
            loading="lazy"
            width="158"
            height="44"
            decoding="async"
            className="w-auto select-none block dark:hidden"
            style={{ color: "transparent", height: "44px", width: "auto" }}
            src="/images/conturk-logo-footer-dark-text.png"
          />
          <img
            alt=""
            aria-hidden="true"
            loading="lazy"
            width="158"
            height="44"
            decoding="async"
            className="w-auto select-none hidden dark:block"
            style={{ color: "transparent", height: "44px", width: "auto" }}
            src="/images/conturk-logo-footer-light-text.png"
          />
        </a>
        <div className="mt-2">© 2026 ConTurk. All rights reserved.</div>
        <div className="mt-6 flex max-w-xs flex-col gap-2 text-neutral-600 dark:text-neutral-300">
          <a href="tel:+902163252299" className="inline-flex items-center gap-2 font-semibold text-neutral-800 transition-colors hover:text-red-600 dark:text-neutral-100 dark:hover:text-red-400">
            <span aria-hidden="true" className="h-4 w-4 shrink-0 text-red-600 dark:text-red-400">☎</span>
            +90 216 325 22 99
          </a>
          <a href="mailto:contact@conturk.com" className="inline-flex items-center gap-2 transition-colors hover:text-neutral-800 dark:hover:text-white">
            <span aria-hidden="true" className="h-4 w-4 shrink-0">✉</span>
            contact@conturk.com
          </a>
          <a className="inline-flex items-start gap-2 transition-colors hover:text-neutral-800 dark:hover:text-white" href="/contact-us#offices">
            <span aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0">⌖</span>
            <span>General Asim Gunduz Cad. No:73 Floor:1, Caferaga Mah. Kadikoy, Istanbul / Turkey</span>
          </a>
        </div>

        {/* Optional: uncomment to restore Mobile App, WeChat and WhatsApp containers. */}
        {/* <FooterOptionalChannels /> */}
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
        <div className="flex justify-center space-y-4 flex-col w-full">
          <p className="transition-colors hover:text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">ConTurk</p>
          <ul className="transition-colors text-neutral-600 dark:text-neutral-300 list-none space-y-4">
            <li><a className="hover:text-neutral-800" href="/careers">Careers</a></li>
            <li><a className="hover:text-neutral-800" href="/contact-us">Contact</a></li>
          </ul>
        </div>
        <div className="flex justify-center space-y-4 flex-col w-full">
          <p className="transition-colors hover:text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">Solutions</p>
          <ul className="transition-colors text-neutral-600 dark:text-neutral-300 list-none space-y-4">
            <li><a className="hover:text-neutral-800" href="/services">Services</a></li>
            <li><a className="hover:text-neutral-800" href="/about-us">About Us</a></li>
          </ul>
        </div>
        <div className="flex justify-center space-y-4 flex-col w-full">
          <p className="transition-colors hover:text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">Resources</p>
          <ul className="transition-colors text-neutral-600 dark:text-neutral-300 list-none space-y-4">
            <li><a className="hover:text-neutral-800" href="/announcements">Announcements</a></li>
            <li><a className="hover:text-neutral-800" href="/insurance-and-terms">Insurance &amp; Terms</a></li>
            <li><a className="hover:text-neutral-800" href="/contact-us#bank-details">Bank Details</a></li>
          </ul>
        </div>
        <div className="flex justify-center space-y-4 flex-col w-full">
          <p className="transition-colors hover:text-neutral-800 text-neutral-600 dark:text-neutral-300 font-bold">Legal</p>
          <ul className="transition-colors text-neutral-600 dark:text-neutral-300 list-none space-y-4">
            <li><a className="hover:text-neutral-800" href="/privacy-policy">Privacy Policy</a></li>
            <li><a className="hover:text-neutral-800" href="/privacy-policy#cookies">Cookie Policy</a></li>
            <li><a className="hover:text-neutral-800" href="/contact-us#delete-account">Delete account</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
