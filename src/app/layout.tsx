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
    canonical: "https://siteperhour.com/en",
    languages: {
      en: "https://siteperhour.com/en",
      ro: "https://siteperhour.com/ro",
      ru: "https://siteperhour.com/ru",
      "x-default": "https://siteperhour.com/en",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="min-h-screen font-sans">
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
