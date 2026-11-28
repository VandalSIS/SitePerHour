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
    title: "Get More Clients Online — Websites, Ads & Growth Help",
    description:
      "I help businesses look trustworthy online, attract the right people, and turn interest into real inquiries. Websites, Google & Meta Ads, SEO and support — focused on what you gain.",
    keywords:
      "get more clients online, website that converts, Google Ads help, Meta Ads for business, hire web developer Moldova, digital growth partner",
  },
  ro: {
    title: "Mai Mulți Clienți Online — Site-uri, Reclame & Creștere",
    description:
      "Te ajut să arăți serios online, să atragi oamenii potriviți și să transformi interesul în solicitări reale. Site-uri, Google & Meta Ads, SEO și suport — axat pe ce câștigi tu.",
    keywords:
      "mai mulți clienți online, site care convertește, Google Ads Moldova, reclame Facebook, creare site Chișinău, partener digital",
  },
  ru: {
    title: "Больше Клиентов Онлайн — Сайты, Реклама и Рост",
    description:
      "Помогаю бизнесу выглядеть надёжно онлайн, привлекать нужных людей и превращать интерес в заявки. Сайты, Google & Meta Ads, SEO и поддержка — с фокусом на вашу выгоду.",
    keywords:
      "больше клиентов онлайн, сайт который продаёт, Google Ads, реклама Facebook, создание сайтов Молдова, цифровой партнёр",
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
        "x-default": "https://siteperhour.com/en",
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
