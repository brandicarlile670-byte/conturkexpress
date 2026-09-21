import TopBar from "./TopBar";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  return (
    <header className="w-full fixed top-0 inset-x-0 z-50">
      <TopBar />
      <DesktopNav />
      <MobileNav />
    </header>
  );
}
