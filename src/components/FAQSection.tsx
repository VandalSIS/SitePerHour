import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Plus } from "lucide-react";
import { useTranslation } from "react-i18next";

const FAQ_COUNT = 6;

const FAQSection = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[400px] bg-purple-500/10 rounded-full blur-[180px]" />

      <div className="container-custom relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-primary font-medium">{t("faq.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.15] pb-1">
            {t("faq.title")}
          </h2>
          <p className="text-muted-foreground text-lg">{t("faq.subtitle")}</p>
        </motion.div>

        <div className="space-y-3">
          {[...Array(FAQ_COUNT)].map((_, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`bg-card/40 backdrop-blur-sm border rounded-2xl overflow-hidden transition-colors ${
                  isOpen ? "border-primary/50" : "border-white/10 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="text-base md:text-lg font-semibold text-white">
                    {t(`faq.q${i + 1}`)}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 p-1.5 rounded-full bg-primary/10 text-primary"
                  >
                    <Plus size={16} />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-muted-foreground leading-relaxed">
                        {t(`faq.a${i + 1}`)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
