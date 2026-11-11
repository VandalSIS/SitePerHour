import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";

// Self-hosted fonts — no Google Fonts fetch at build time (fixes Vercel build failures)
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

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
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
