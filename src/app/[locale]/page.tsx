import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/views/HomePage";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";
import { getOrganizationSchema } from "@/lib/schema";

const seo: Record<
  Locale,
  { title: string; description: string; keywords: string }
> = {
  en: {
    title: "Web Development, Digital Ads & Marketing | Moldova-Based, Global Clients",
    description:
      "Full-service digital agency: web development (React, WordPress, Webflow, Shopify), mobile apps, Google & Meta Ads, CRM, SEO. Based in Chișinău, serving clients in 8+ countries.",
    keywords:
      "web development Moldova, hire remote web developer, Google Ads Moldova, Meta Ads agency, Shopify development, CRM automation, digital marketing agency",
  },
  ro: {
    title: "Dezvoltare Web, Reclame Digitale & Marketing | Moldova & România",
    description:
      "Agenție digitală full-service: dezvoltare web, aplicații mobile, Google & Meta Ads, CRM, SEO. Din Chișinău, clienți în 8+ țări.",
    keywords:
      "dezvoltare web Moldova, creare site Chișinău, Google Ads Moldova, reclame Facebook, magazin online, CRM automatizare, marketing digital",
  },
  ru: {
    title: "Веб-разработка, Реклама и Маркетинг | Молдова, Клиенты по Всему Миру",
    description:
      "Цифровое агентство полного цикла: сайты, приложения, Google & Meta Ads, CRM, SEO. Кишинёв, клиенты в 8+ странах.",
    keywords:
      "создание сайтов Молдова, разработка сайтов Кишинёв, Google Ads, реклама Facebook, CRM автоматизация, цифровой маркетинг",
  },
};

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const lang = isValidLocale(locale) ? locale : "en";
  const meta = seo[lang];

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: `https://siteperhour.com/${lang}`,
      languages: {
        ro: "https://siteperhour.com/ro",
        en: "https://siteperhour.com/en",
        ru: "https://siteperhour.com/ru",
        "x-default": "https://siteperhour.com/ro",
      },
    },
    openGraph: {
      title: `SitePerHour — ${meta.title}`,
      description: meta.description,
      url: `https://siteperhour.com/${lang}`,
      siteName: "SitePerHour",
      locale: lang === "en" ? "en_US" : lang === "ro" ? "ro_RO" : "ru_RU",
      type: "website",
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const structuredData = getOrganizationSchema(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePage locale={locale} />
    </>
  );
}
