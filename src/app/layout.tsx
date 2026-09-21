import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConTurk Shipping",
  description: "FCL and LCL services from China, Korea, Vietnam, Thailand, Indonesia and Japan to Turkish ports — and legal, door-to-door transit through Mersin and Istanbul to East Europe, the Middle East and surrounding countries, Azerbaijan and the Arab states.",
  alternates: { canonical: "https://www.conturk.com/", languages: { en: "https://www.conturk.com/", tr: "https://www.conturk.com/tr", "x-default": "https://www.conturk.com/" } },
  openGraph: { title: "ConTurk Shipping", description: "FCL and LCL services from China, Korea, Vietnam, Thailand, Indonesia and Japan to Turkish ports — and legal, door-to-door transit through Mersin and Istanbul to East Europe, the Middle East and surrounding countries, Azerbaijan and the Arab states.", url: "https://www.conturk.com", siteName: "ConTurk Shipping", locale: "en_US", type: "website" },
  twitter: { card: "summary", title: "ConTurk Shipping", description: "FCL and LCL services from China, Korea, Vietnam, Thailand, Indonesia and Japan to Turkish ports — and legal, door-to-door transit through Mersin and Istanbul to East Europe, the Middle East and surrounding countries, Azerbaijan and the Arab states." },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className="dark" style={{ colorScheme: "dark" }}><body>{children}</body></html>;
}
