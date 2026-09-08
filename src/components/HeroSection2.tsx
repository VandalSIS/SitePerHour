"use client";

import { ArrowRight, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "WordPress", "Shopify",
  "Webflow", "Google Ads", "Meta Ads", "HubSpot", "SEO",
];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: 0.15 + i * 0.08, duration: 0.5, ease: "easeOut" as const },
  }),
};

const HeroSection = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  const titleLine1 = t("hero.title1");
  const titleLine2 = t("hero.title2");
  const titleLine3 = t("hero.title3");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 pb-8 mesh-gradient dot-grid"
      >
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-20" />

        {isMobile ? (
          <>
            <div className="absolute top-1/4 -left-32 w-80 h-80 bg-primary/25 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-accent/25 rounded-full blur-[100px]" />
          </>
        ) : (
          <>
            <motion.div
              className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/25 rounded-full blur-[120px]"
              animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/25 rounded-full blur-[120px]"
              animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <div className="container-custom relative z-10 text-center max-w-5xl mx-auto px-4 flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm self-center"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium tracking-wide">
              {t("hero.badge")}
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold mb-6 leading-[1.1] pb-2">
            <span className="block overflow-hidden">
              {titleLine1.split(" ").map((word, i) => (
                <motion.span
                  key={`l1-${word}-${i}`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block overflow-hidden mt-1">
              <motion.span
                custom={0}
                initial="hidden"
                animate="visible"
                variants={wordVariants}
                className="text-gradient inline-block"
              >
                {titleLine2}
              </motion.span>
            </span>
            <span className="block overflow-hidden mt-1">
              {titleLine3.split(" ").map((word, i) => (
                <motion.span
                  key={`l3-${word}-${i}`}
                  custom={i + 4}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.25em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25 group"
              onClick={() => scrollTo("contact")}
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base border-white/20 hover:bg-white/5"
              onClick={() => scrollTo("projects")}
            >
              {t("hero.portfolio")}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-xs md:text-sm text-muted-foreground font-mono"
          >
            {t("hero.trustedBy")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-12 flex flex-col items-center gap-2 text-muted-foreground/60"
          >
            <MousePointer2 size={16} className="animate-bounce" />
            <span className="text-xs">{t("hero.scrollDown")}</span>
          </motion.div>
        </div>
      </section>

      <section className="relative bg-secondary/30 border-y border-white/5 py-4 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="mx-6 text-sm font-mono text-muted-foreground/70 flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {tech}
            </span>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
