import { BadgeCheckIcon, ExternalLinkIcon } from "./icons";

type Membership = {
  title: string;
  details: string[];
  href?: string;
  domain?: string;
};

const memberships: Membership[] = [
  { title: "Istanbul Chamber of Commerce", details: ["Registry No: 299668-5"], href: "http://www.ito.org.tr/", domain: "ito.org.tr" },
  { title: "Chamber of Shipping", details: ["Registry No: 120758"], href: "http://www.denizticaretodasi.org.tr/", domain: "denizticaretodasi.org.tr" },
  { title: "Ministry of Transport — TIO Certificate", details: ["Certificate No: ST.U-NET.TİO.34.10200"] },
  { title: "JC Trans Elite", details: ["Member since 2010"], href: "https://www.jctrans.net/", domain: "jctrans.net" },
  { title: "WCA World", details: ["Member No: 69746", "Member since 2012"], href: "https://www.wcaworld.com/", domain: "wcaworld.com" },
  { title: "WIFFA", details: [], href: "https://en.wiffa.net/", domain: "wiffa.net" },
];

export default function Memberships() {
  return (
    <section>
      <div className="mb-10 text-center">
        <h2 className="bg-linear-to-b from-neutral-800 to-neutral-900 bg-clip-text text-2xl font-bold text-transparent md:text-3xl dark:from-neutral-100 dark:to-neutral-400">
          Our Memberships
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-base text-neutral-600 dark:text-gray-400">
          Through our memberships in national and international organizations — including VIP membership of the WCA World (since 2012), JC Trans Elite and WIFFA networks — we deliver reliable, transparent service, working under global liability.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {memberships.map((item) => (
          <div key={item.title} className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-red-400/40">
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-red-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100 dark:bg-red-400/10" />
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-red-500/10 to-rose-500/10 text-red-600 ring-1 ring-red-500/20 transition-transform duration-300 group-hover:scale-105 dark:text-red-400 dark:ring-red-400/20">
              <BadgeCheckIcon className="h-6 w-6" />
            </div>
            <h3 className="mb-1 text-base font-semibold text-neutral-800 dark:text-neutral-100">{item.title}</h3>
            {item.details.map((detail) => <p key={detail} className="text-sm text-neutral-600 dark:text-gray-400">{detail}</p>)}
            {item.href && item.domain && (
              <a className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-red-600 transition-colors hover:text-red-700 dark:text-red-400 dark:hover:text-red-300" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.title} website`}>
                {item.domain}
                <ExternalLinkIcon className="h-3.5 w-3.5" />
              </a>
            )}
            <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-red-500/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:via-red-400/40" />
          </div>
        ))}
      </div>
    </section>
  );
}
