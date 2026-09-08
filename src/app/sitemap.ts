import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://siteperhour.com";
  const now = new Date();

  return locales.map((locale) => ({
    url: `${base}/${locale}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${base}/en`,
        ro: `${base}/ro`,
        ru: `${base}/ru`,
      },
    },
  }));
}
