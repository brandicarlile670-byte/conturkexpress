import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ContactUsPage from "@/components/contact/ContactUsPage";

export const metadata: Metadata = {
  title: "Contact Us | ConTurk Shipping",
  description: "Contact ConTurk Shipping for ocean freight, import-export and logistics operations.",
  alternates: { canonical: "https://www.conturk.com/contact-us" },
  openGraph: { title: "Contact Us | ConTurk Shipping", description: "Contact ConTurk Shipping for ocean freight, import-export and logistics operations.", url: "https://www.conturk.com/contact-us", siteName: "ConTurk Shipping", locale: "en_US", type: "website" },
};

export default function ContactUsRoute() {
  return <div className="size-full flex flex-col justify-between min-h-screen"><SiteHeader /><ContactUsPage /><SiteFooter /></div>;
}
