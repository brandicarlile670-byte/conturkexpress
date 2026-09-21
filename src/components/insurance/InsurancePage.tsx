import InsuranceHero from "./InsuranceHero";
import InsurancePanel from "./InsurancePanel";
import Memberships from "./Memberships";
import RequestDocuments from "./RequestDocuments";
import AboutUtilities from "@/components/about/AboutUtilities";
import { coverItems, insuranceIntro, tradingItems } from "@/lib/insurance";

export default function InsurancePage() {
  return (
    <div id="top" className="relative min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      <main className="relative z-0">
        <div className="mx-auto w-full max-w-7xl space-y-20 px-4 pt-28 pb-16 md:px-6">
          <InsuranceHero />
          <InsurancePanel id="insurance" title="Global liability — freight-forwarder liability cover" intro={insuranceIntro} icon="shield-check" items={coverItems} />
          <InsurancePanel id="stc" title="Standard Trading Conditions" intro="Every quotation, booking and bill of lading we issue is subject to our Standard Trading Conditions. They set out the basis on which we contract, the limits of our liability, and the obligations of both sides — so there is no ambiguity when something goes wrong." icon="scroll-text" items={tradingItems} />
          <Memberships />
          <RequestDocuments />
        </div>
      </main>
      <AboutUtilities />
    </div>
  );
}
