import SourceMarkup from "@/components/ui/SourceMarkup";
import ContactInstantChannels from "./ContactInstantChannels";

export default function ContactIntroSection() {
  return (
    <section>
      <SourceMarkup file="contact/intro-hero.html" />
      <SourceMarkup file="contact/company-grid.html" />

      {/* Optional: uncomment to restore the WeChat / WhatsApp / App Store / Google Play block. */}
      {/* <ContactInstantChannels /> */}
    </section>
  );
}
