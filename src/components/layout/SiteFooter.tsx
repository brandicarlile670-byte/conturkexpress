import FooterMain from "./FooterMain";
import FooterWordmark from "./FooterWordmark";

export default function SiteFooter() {
  return (
    <footer className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-full relative overflow-hidden">
      <FooterMain />
      <FooterWordmark />
    </footer>
  );
}
