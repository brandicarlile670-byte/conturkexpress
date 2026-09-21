import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import InsurancePage from "@/components/insurance/InsurancePage";

export const metadata: Metadata = {
  title: "Insurance & Terms | ConTurk Shipping",
  description: "Insurance cover and the Standard Trading Conditions presented by ConTurk Shipping.",
  alternates: { canonical: "https://www.conturk.com/insurance-and-terms" },
  openGraph: { title: "Insurance & Terms | ConTurk Shipping", description: "Insurance cover and the Standard Trading Conditions presented by ConTurk Shipping.", url: "https://www.conturk.com/insurance-and-terms", siteName: "ConTurk Shipping", locale: "en_US", type: "website" },
};

export default function InsuranceTermsRoute() {
  return <div className="size-full flex flex-col justify-between min-h-screen"><SiteHeader /><InsurancePage /><SiteFooter /></div>;
}
