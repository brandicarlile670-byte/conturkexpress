import AnnouncementsHero from "./AnnouncementsHero";
import FeaturedAnnouncement from "./FeaturedAnnouncement";
import BackToTop from "@/components/ui/BackToTop";

export default function AnnouncementsPage() {
  return (
    <main>
      <div className="w-full p-4 mx-auto flex max-w-7xl flex-col items-center px-4 pt-28 pb-16 md:px-6 md:pt-32 md:pb-24">
        <AnnouncementsHero />
        <div className="mt-14 w-full space-y-12">
          <FeaturedAnnouncement />
        </div>
      </div>
      <BackToTop />
    </main>
  );
}
