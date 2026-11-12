"use client";

import { useTranslation } from "react-i18next";

const CAPABILITIES = [
  { key: "web" },
  { key: "apps" },
  { key: "googleAds" },
  { key: "metaAds" },
  { key: "crm" },
  { key: "seo" },
  { key: "marketing" },
] as const;

const CapabilityStrip = () => {
  const { t } = useTranslation();

  return (
    <section className="relative z-20 border-y border-white/5 bg-background/80">
      <div className="container-custom py-3 md:py-4">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {CAPABILITIES.map((item) => (
            <span
              key={item.key}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-xs md:text-sm font-medium text-muted-foreground bg-white/5 border border-white/10"
            >
              {t(`capabilities.${item.key}`)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilityStrip;
