import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/homepage/Hero";
import CoreServices from "@/components/homepage/CoreServices";
import Assurance from "@/components/homepage/Assurance";
import Coverage from "@/components/homepage/Coverage";
import ContactStrip from "@/components/homepage/ContactStrip";
import Numbers from "@/components/homepage/Numbers";
import Services from "@/components/homepage/Services";
import Journey from "@/components/homepage/Journey";
import MobileApp from "@/components/homepage/MobileApp";
import FinalCTA from "@/components/homepage/FinalCTA";

export default function Home() {
  return (
    <div className="size-full flex flex-col justify-between min-h-screen">
      <SiteHeader />
      <main>
        <div className="relative w-full overflow-hidden">
          <Hero />
          <div className="mx-auto w-full max-w-7xl space-y-20 px-4 pb-16 md:space-y-28 md:px-6 md:pb-24">
            <CoreServices />
            <Assurance />
            <Coverage />
            <ContactStrip />
            <Numbers />
            <Services />
            <Journey />
            {/* Optional: uncomment to restore the Mobile App section. */}
            {/* <MobileApp /> */}
            <FinalCTA />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
