"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const MidCTASection = () => {
  const { t } = useTranslation();

  const goContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-10 md:py-14 relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45 }}
          className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-primary/15 via-card/60 to-accent/10 px-6 py-8 md:px-10 md:py-10"
        >
          <div className="absolute -right-16 -top-16 w-48 h-48 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="label-mono text-primary mb-3">{t("midCta.badge")}</p>
              <h2 className="font-heading font-bold text-2xl md:text-3xl tracking-[-0.03em] text-white leading-[1.15] mb-2">
                {t("midCta.title")}
              </h2>
              <p className="body-lead text-sm md:text-base">{t("midCta.subtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Button
                size="lg"
                onClick={goContact}
                className="bg-white text-background hover:bg-white/90 rounded-full px-7 h-11 font-semibold group"
              >
                <MessageCircle size={16} className="mr-2" />
                {t("midCta.primary")}
                <ArrowRight
                  size={16}
                  className="ml-2 group-hover:translate-x-0.5 transition-transform"
                />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={goContact}
                className="rounded-full px-7 h-11 border-white/20 hover:bg-white/5 font-semibold"
              >
                {t("midCta.secondary")}
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MidCTASection;
