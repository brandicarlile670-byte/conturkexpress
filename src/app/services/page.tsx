import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import ServicesPage from "@/components/services/ServicesPage";

export const metadata: Metadata = {
  title: "Services | ConTurk Shipping",
  description: "International logistics and shipping services from ConTurk Shipping.",
  alternates: { canonical: "https://www.conturk.com/services" },
  openGraph: { title: "Services | ConTurk Shipping", description: "International logistics and shipping services from ConTurk Shipping.", url: "https://www.conturk.com/services", siteName: "ConTurk Shipping", locale: "en_US", type: "website" },
};

export default function ServicesRoute() {
  return <div className="size-full flex flex-col justify-between min-h-screen"><SiteHeader /><ServicesPage /><SiteFooter /></div>;
}
