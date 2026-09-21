import ContactIntroSection from "./ContactIntroSection";
import ContactAnchorNav from "./ContactAnchorNav";
import ContactFormSection from "./ContactFormSection";
import Offices from "./Offices";
import BankDetails from "./BankDetails";
import DeleteAccount from "./DeleteAccount";
import QuickAccess from "./QuickAccess";
import BackToTop from "@/components/ui/BackToTop";

export default function ContactUsPage() {
  return (
    <main>
      <div className="mx-auto w-full max-w-7xl space-y-20 px-4 pt-28 pb-16 md:px-6 md:pt-32 md:pb-24">
        <ContactIntroSection />
        <ContactAnchorNav />
        <ContactFormSection />
        <Offices />
        <BankDetails />
        <DeleteAccount />
      </div>
      <QuickAccess />
      <BackToTop />
    </main>
  );
}
