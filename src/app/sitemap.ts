import type { MetadataRoute } from "next";

const baseUrl = "https://www.conturk.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: `${baseUrl}/`, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/about-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/insurance-and-terms`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/announcements`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${baseUrl}/announcements/1`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${baseUrl}/tracking`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/contact-us`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];
}
