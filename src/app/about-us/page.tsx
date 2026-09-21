import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AboutUsPage from "@/components/about/AboutUsPage";

export const metadata: Metadata = {
  title: "About Us | ConTurk Shipping",
  description: "Learn who ConTurk Shipping is, how the company approaches international logistics, and the networks and memberships presented on its About Us page.",
  alternates: { canonical: "https://www.conturk.com/about-us" },
  openGraph: { title: "About Us | ConTurk Shipping", description: "Learn who ConTurk Shipping is and how its international logistics service is presented.", url: "https://www.conturk.com/about-us", siteName: "ConTurk Shipping", locale: "en_US", type: "website" },
};

export default function AboutUsRoute() {
  return (
    <div className="size-full flex flex-col justify-between min-h-screen">
      <SiteHeader />
      <AboutUsPage />
      <SiteFooter />
    </div>
  );
}
