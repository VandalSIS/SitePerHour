"use client";

import { ArrowRight, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef } from "react";
import HeroHeadline from "@/components/motion/HeroHeadline";

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "WordPress", "Shopify",
  "Webflow", "Google Ads", "Meta Ads", "HubSpot", "SEO",
];

const HeroSection = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -60 : -180]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -30 : -100]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const headlineLines = [
    { text: t("hero.title1") },
    { text: t("hero.title2"), gradient: true },
    { text: t("hero.title3") },
  ];

  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className="relative min-h-[100svh] flex flex-col justify-center overflow-x-hidden pt-24 pb-10 md:pb-14"
      >
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 mesh-gradient opacity-40" />
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-[0.07]" />

        {isMobile ? (
          <>
            <div className="absolute top-1/3 -left-40 w-72 h-72 bg-primary/15 rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 -right-40 w-72 h-72 bg-accent/10 rounded-full blur-[120px]" />
          </>
        ) : (
          <>
            <motion.div
              className="absolute top-1/3 -left-48 w-[28rem] h-[28rem] bg-primary/12 rounded-full blur-[140px]"
              animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 -right-48 w-[28rem] h-[28rem] bg-accent/10 rounded-full blur-[140px]"
              animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative z-10 w-full max-w-[min(100%,1280px)] mx-auto px-5 sm:px-8 lg:px-10 flex-1 flex flex-col justify-center will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 md:mb-10 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm self-start"
          >
            <Sparkles size={12} className="text-primary" />
            <span className="label-mono text-primary/80">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.div style={{ y: headlineY }} className="will-change-transform">
            <HeroHeadline lines={headlineLines} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="body-lead max-w-xl mt-8 md:mt-10 mb-8 md:mb-10"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-10"
          >
            <Button
              size="lg"
              className="bg-white text-background hover:bg-white/90 rounded-full px-7 h-11 text-sm shadow-none group font-semibold"
              onClick={() => scrollTo("contact")}
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-7 h-11 text-sm border-white/15 hover:bg-white/5 font-semibold"
              onClick={() => scrollTo("projects")}
            >
              {t("hero.portfolio")}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-[11px] md:text-xs text-muted-foreground/70 font-mono tracking-wide uppercase"
          >
            {t("hero.trustedBy")}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-5 sm:left-8 lg:left-12 z-10 flex items-center gap-2 text-muted-foreground/50"
        >
          <MousePointer2 size={14} className="animate-bounce" />
          <span className="text-[10px] uppercase tracking-[0.2em]">{t("hero.scrollDown")}</span>
        </motion.div>
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
