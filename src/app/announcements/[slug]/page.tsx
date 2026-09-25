import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import BackToTop from "@/components/ui/BackToTop";

const announcement = {
  slug: "1",
  title: "NEXT EVENT WE ARE ATTENTING IS FREIGHT SUMMIT IN BANGKOK",
  excerpt: "Conturk Shipping, will be there to attend Freight summit in Bangkok during 28.09.2026 - 01.10.2026",
  date: "Sep 01, 2026",
  eventPeriod: "28.09.2026 - 01.10.2026",
  readingTime: "1 min read",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== announcement.slug) {
    return {
      title: "Announcement | ConTurk Shipping",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: `${announcement.title} | ConTurk Shipping`,
    description: announcement.excerpt,
    alternates: { canonical: `https://www.conturk.com/announcements/${announcement.slug}` },
    openGraph: {
      title: announcement.title,
      description: announcement.excerpt,
      url: `https://www.conturk.com/announcements/${announcement.slug}`,
      siteName: "ConTurk Shipping",
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function AnnouncementDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== announcement.slug) {
    return (
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <SiteHeader />
        <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
          <span className="rounded-full border border-red-400/20 bg-red-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-red-300">
            Announcement
          </span>
          <h1 className="mt-5 text-3xl font-bold">Announcement not found</h1>
          <p className="mt-3 max-w-xl text-neutral-400">
            The requested announcement is not available in the current approved content set.
          </p>
          <Link
            href="/announcements"
            className="mt-7 rounded-xl bg-red-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-500"
          >
            Back to announcements
          </Link>
        </main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
      <SiteHeader />
      <main className="mx-auto w-full max-w-4xl px-4 pb-20 pt-28 md:px-6 md:pt-32 md:pb-24">
        <article className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
          <div className="border-l-4 border-red-500 p-6 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#f17463]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#f17463] ring-1 ring-inset ring-[#f17463]/30">
                Featured
              </span>
              <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-600 ring-1 ring-inset ring-neutral-500/20 dark:bg-neutral-800 dark:text-neutral-300 dark:ring-neutral-600/30">
                News
              </span>
            </div>

            <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-neutral-900 md:text-5xl dark:text-neutral-50">
              {announcement.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
              <span>{announcement.date}</span>
              <span>{announcement.readingTime}</span>
            </div>

            <p className="mt-8 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
              {announcement.excerpt}
            </p>

            <div className="mt-10 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 dark:border-neutral-800 dark:bg-neutral-950/50">
              <p className="text-xs font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Event period
              </p>
              <p className="mt-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {announcement.eventPeriod}
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/announcements"
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-5 py-3 text-sm font-semibold text-neutral-800 transition hover:border-red-400 hover:text-red-600 dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-red-400 dark:hover:text-red-400"
              >
                ← Back to announcements
              </Link>
            </div>
          </div>
        </article>
      </main>
      <BackToTop />
      <SiteFooter />
    </div>
  );
}
