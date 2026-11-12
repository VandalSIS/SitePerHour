import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en";
import ro from "./ro";
import ru from "./ru";

// Locale comes from Next.js /[locale] — no browser LanguageDetector (saves work on mobile)
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ro: { translation: ro },
      ru: { translation: ru },
    },
    lng: "ro",
    fallbackLng: "ro",
    supportedLngs: ["en", "ro", "ru"],
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
}

export default i18n;
