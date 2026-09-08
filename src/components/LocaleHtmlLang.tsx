"use client";

import { useEffect } from "react";
import type { Locale } from "@/lib/i18n/config";

const htmlLang: Record<Locale, string> = {
  en: "en",
  ro: "ro",
  ru: "ru",
};

export function LocaleHtmlLang({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = htmlLang[locale];
  }, [locale]);

  return null;
}
