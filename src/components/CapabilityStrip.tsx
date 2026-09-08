"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const CAPABILITIES = [
  { key: "web", icon: "🌐" },
  { key: "apps", icon: "📱" },
  { key: "googleAds", icon: "📊" },
  { key: "metaAds", icon: "📣" },
  { key: "crm", icon: "🔧" },
  { key: "seo", icon: "📈" },
  { key: "marketing", icon: "🚀" },
] as const;

const CapabilityStrip = () => {
  const { t } = useTranslation();

  return (
    <section className="relative z-20 border-y border-white/5 bg-background/80 backdrop-blur-md">
      <div className="container-custom py-4">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-2 md:gap-3"
        >
          {CAPABILITIES.map((item, i) => (
            <motion.span
              key={item.key}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.05 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs md:text-sm font-medium text-muted-foreground bg-white/5 border border-white/10 hover:border-primary/40 hover:text-white transition-colors"
            >
              <span aria-hidden="true">{item.icon}</span>
              {t(`capabilities.${item.key}`)}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CapabilityStrip;
