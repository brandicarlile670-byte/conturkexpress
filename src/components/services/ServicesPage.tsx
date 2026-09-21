import ServicesHero from "./ServicesHero";
import CorporateInfo from "./CorporateInfo";
import ServicesGrid from "./ServicesGrid";
import ServicesCTA from "./ServicesCTA";
import AboutUtilities from "@/components/about/AboutUtilities";

export default function ServicesPage() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      <main className="relative z-0">
        <div className="mx-auto w-full max-w-7xl space-y-20 px-4 pt-28 pb-16 md:px-6">
          <ServicesHero />
          <CorporateInfo />
          <ServicesGrid />
          <ServicesCTA />
        </div>
      </main>
      <AboutUtilities />
    </div>
  );
}
