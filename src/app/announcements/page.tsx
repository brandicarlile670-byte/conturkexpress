import type { Metadata } from "next";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import AnnouncementsPage from "@/components/announcements/AnnouncementsPage";

export const metadata: Metadata = {
  title: "Announcements | ConTurk Shipping",
  description: "The latest news, updates and announcements from ConTurk Shipping.",
  alternates: { canonical: "https://www.conturk.com/announcements" },
  openGraph: { title: "Announcements | ConTurk Shipping", description: "The latest news, updates and announcements from ConTurk Shipping.", url: "https://www.conturk.com/announcements", siteName: "ConTurk Shipping", locale: "en_US", type: "website" },
};

export default function AnnouncementsRoute() {
  return <div className="size-full flex flex-col justify-between min-h-screen"><SiteHeader /><AnnouncementsPage /><SiteFooter /></div>;
}
