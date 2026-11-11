"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Search, Pencil, Code, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/motion/SectionHeader";

const STEP_ICONS = [Search, Pencil, Code, Rocket] as const;
const STEP_KEYS = [
  { titleKey: "process.s1Title", descKey: "process.s1Desc", num: "01" },
  { titleKey: "process.s2Title", descKey: "process.s2Desc", num: "02" },
  { titleKey: "process.s3Title", descKey: "process.s3Desc", num: "03" },
  { titleKey: "process.s4Title", descKey: "process.s4Desc", num: "04" },
] as const;

const ProcessSection = () => {
  const { t } = useTranslation();
  /** null = unknown (SSR / first paint) → always render light layout first */
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

    const apply = () => {
      setIsDesktop(mq.matches && !reduced.matches);
    };
    apply();
    mq.addEventListener("change", apply);
    reduced.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      reduced.removeEventListener("change", apply);
    };
  }, []);

  // Lightweight sticky scrub via IntersectionObserver — no GSAP pin / no 500vh page
  useEffect(() => {
    if (!isDesktop || !sectionRef.current) return;

    const panels = sectionRef.current.querySelectorAll<HTMLElement>("[data-step]");
    if (!panels.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const idx = Number((visible.target as HTMLElement).dataset.step);
        if (!Number.isNaN(idx)) setActive(idx);
      },
      { rootMargin: "-35% 0px -35% 0px", threshold: [0.25, 0.5, 0.75] }
    );

    panels.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [isDesktop]);

  const steps = STEP_KEYS.map((s, i) => ({
    ...s,
    icon: STEP_ICONS[i],
  }));

  // Mobile + tablet + first paint: simple cards (no pin, no tall spacer)
  if (!isDesktop) {
    return (
      <section id="process" className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
        <div className="container-custom relative z-10">
          <SectionHeader
            badge={t("process.badge")}
            title={t("process.title")}
            subtitle={t("process.subtitle")}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: Math.min(i * 0.06, 0.24) }}
                  className="bg-card/40 border border-white/10 rounded-2xl p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-primary/15 border border-primary/25">
                      <Icon size={20} className="text-primary" />
                    </div>
                    <span className="label-mono text-primary/70">{step.num}</span>
                  </div>
                  <h3 className="font-heading font-bold text-lg mb-2">
                    {t(step.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(step.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  const ActiveIcon = steps[active].icon;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative section-spacing overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container-custom relative z-10">
        <div className="mb-12 max-w-3xl">
          <p className="label-mono mb-4">{t("process.badge")}</p>
          <h2 className="display-section text-white">{t("process.title")}</h2>
          <p className="body-lead mt-4 max-w-xl">{t("process.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-24 py-8">
            {steps.map((step, i) => (
              <div
                key={step.num}
                data-step={i}
                className={`transition-opacity duration-300 ${
                  i === active ? "opacity-100" : "opacity-40"
                }`}
              >
                <p className="label-mono text-primary mb-3">
                  {step.num} / 0{STEP_KEYS.length}
                </p>
                <h3 className="font-heading font-bold uppercase tracking-[-0.04em] text-3xl lg:text-4xl leading-[1.15] text-white mb-3">
                  {t(step.titleKey)}
                </h3>
                <p className="body-lead max-w-md">{t(step.descKey)}</p>
              </div>
            ))}
          </div>

          <div className="lg:col-span-6 sticky top-28 hidden lg:flex items-center justify-center min-h-[50vh]">
            <div className="relative w-full max-w-sm aspect-square flex items-center justify-center">
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading font-bold text-[8rem] leading-none tracking-[-0.06em] text-white/[0.06] select-none">
                  {steps[active].num}
                </span>
              </div>
              <div className="relative z-10 p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm">
                <ActiveIcon size={64} className="text-primary" strokeWidth={1.25} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
