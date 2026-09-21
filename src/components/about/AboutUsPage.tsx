import AboutAtmosphere from "./AboutAtmosphere";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import GlobalReach from "./GlobalReach";
import Memberships from "./Memberships";
import OrbitCTA from "./OrbitCTA";
import AboutUtilities from "./AboutUtilities";

export default function AboutUsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-neutral-950">
      <AboutAtmosphere />
      <main className="relative z-0">
        <div className="mx-auto w-full max-w-7xl space-y-20 px-4 pt-28 pb-16 md:space-y-24 md:px-6 md:pt-32 md:pb-24">
          <AboutHero />
          <AboutStory />
          <GlobalReach />
          <Memberships />
        </div>
        <OrbitCTA />
      </main>
      <AboutUtilities />
    </div>
  );
}
