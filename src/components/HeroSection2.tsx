"use client";

import { ArrowRight, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";
import { useRef } from "react";
import DisplayHeading from "@/components/motion/DisplayHeading";

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

  const contentY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -40 : -140]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.55], [1, 0.96]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="home"
        className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-8 mesh-gradient dot-grid"
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

        <motion.div
          style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
          className="container-custom relative z-10 text-center max-w-6xl mx-auto px-4 flex-1 flex flex-col justify-center will-change-transform"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-10 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm self-center"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium tracking-wide">
              {t("hero.badge")}
            </span>
          </motion.div>

          <div className="mb-8">
            <DisplayHeading as="h1" size="hero" revealOnScroll={false} className="mb-2">
              {t("hero.title1")}
            </DisplayHeading>
            <DisplayHeading
              as="h1"
              size="hero"
              revealOnScroll={false}
              gradient
              className="mb-2"
            >
              {t("hero.title2")}
            </DisplayHeading>
            <DisplayHeading as="h1" size="hero" revealOnScroll={false}>
              {t("hero.title3")}
            </DisplayHeading>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
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
              className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-12 text-base shadow-lg shadow-primary/25 group font-semibold"
              onClick={() => scrollTo("contact")}
            >
              {t("hero.cta")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 h-12 text-base border-white/20 hover:bg-white/5 font-semibold"
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
