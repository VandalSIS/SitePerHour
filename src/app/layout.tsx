import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin", "latin-ext"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

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
    <html
      lang="ro"
      className={`dark ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-sans">
        <div className="grain-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
