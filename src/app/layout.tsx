import type { Metadata } from "next";
import DeferredAnalytics from "@/components/DeferredAnalytics";

// Minimal fonts: latin + latin-ext (RO diacritics). Cyrillic loaded in [locale] for /ru only.
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-ext-400.css";
import "@fontsource/inter/cyrillic-400.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@fontsource/space-grotesk/latin-ext-700.css";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://siteperhour.com"),
  title: {
    default: "SitePerHour — Web Development, Ads & Digital Marketing",
    template: "%s | SitePerHour",
  },
  description:
    "Full-service digital agency: web development, Google & Meta Ads, CRM, SEO. Based in Chișinău, serving clients worldwide.",
  alternates: {
    canonical: "https://siteperhour.com/ro",
    languages: {
      ro: "https://siteperhour.com/ro",
      en: "https://siteperhour.com/en",
      ru: "https://siteperhour.com/ru",
      "x-default": "https://siteperhour.com/ro",
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" className="dark" suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
