import { motion } from "framer-motion";
import { Search, Pencil, Code, Rocket, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    { icon: Search, titleKey: "process.s1Title", descKey: "process.s1Desc", num: "01" },
    { icon: Pencil, titleKey: "process.s2Title", descKey: "process.s2Desc", num: "02" },
    { icon: Code, titleKey: "process.s3Title", descKey: "process.s3Desc", num: "03" },
    { icon: Rocket, titleKey: "process.s4Title", descKey: "process.s4Desc", num: "04" },
  ];

  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-primary font-medium">{t("process.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.15] pb-1">
            {t("process.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("process.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" style={{ marginLeft: "12.5%", marginRight: "12.5%" }} />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full hover:border-primary/50 transition-colors group">
                  <div className="flex items-center justify-between mb-5">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <span className="text-4xl font-bold text-white/10 group-hover:text-primary/30 transition-colors">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{t(step.titleKey)}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t(step.descKey)}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
