import { notFound } from "next/navigation";
import { I18nProvider } from "@/providers/I18nProvider";
import { isValidLocale, locales, type Locale } from "@/lib/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  return <I18nProvider locale={locale as Locale}>{children}</I18nProvider>;
}
