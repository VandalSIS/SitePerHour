import type { Locale } from "./config";
import en from "@/i18n/en";
import ro from "@/i18n/ro";
import ru from "@/i18n/ru";

const dictionaries = { en, ro, ru };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
