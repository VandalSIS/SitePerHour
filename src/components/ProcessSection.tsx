"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const STEP_ACCENTS = [
  "from-sky-500 to-blue-600",
  "from-violet-500 to-purple-600",
  "from-cyan-400 to-teal-500",
  "from-amber-400 to-orange-500",
] as const;

const ProcessSection = () => {
  const { t } = useTranslation();
  const [isDesktop, setIsDesktop] = useState(false);
  const [active, setActive] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setIsDesktop(mq.matches && !reduced.matches);
    apply();
    mq.addEventListener("change", apply);
    reduced.addEventListener("change", apply);
    return () => {
      mq.removeEventListener("change", apply);
      reduced.removeEventListener("change", apply);
    };
  }, []);

  // Pick the step whose center is closest to viewport center — reliable scroll sync
  useEffect(() => {
    if (!isDesktop) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const mid = window.innerHeight * 0.42;
      let best = 0;
      let bestDist = Infinity;

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        const dist = Math.abs(center - mid);
        if (dist < bestDist) {
          bestDist = dist;
          best = i;
        }
      });

      setActive((prev) => (prev === best ? prev : best));
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isDesktop]);

  const steps = STEP_KEYS.map((s, i) => ({
    ...s,
    icon: STEP_ICONS[i],
    accent: STEP_ACCENTS[i],
  }));

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
  const progress = ((active + 1) / steps.length) * 100;
  const circumference = 2 * Math.PI * 46; // viewBox circle r=46
  const dashOffset = circumference - (circumference * progress) / 100;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative overflow-hidden pb-8"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container-custom relative z-10 pt-20 md:pt-28">
        <div className="mb-10 max-w-3xl">
          <p className="label-mono mb-4">{t("process.badge")}</p>
          <h2 className="display-section text-white">{t("process.title")}</h2>
          <p className="body-lead mt-4 max-w-xl">{t("process.subtitle")}</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Steps — tall panels so only one sits near viewport center */}
          <div className="lg:col-span-5">
            {steps.map((step, i) => (
              <div
                key={step.num}
                ref={(el) => {
                  stepRefs.current[i] = el;
                }}
                data-step={i}
                className="min-h-[70vh] flex flex-col justify-center py-10"
              >
                <button
                  type="button"
                  onClick={() => {
                    stepRefs.current[i]?.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }}
                  className={`text-left transition-all duration-400 ${
                    i === active
                      ? "opacity-100 translate-x-0"
                      : "opacity-30 hover:opacity-50"
                  }`}
                >
                  <p
                    className={`label-mono mb-3 ${
                      i === active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {step.num} / 0{steps.length}
                  </p>
                  <h3
                    className={`font-heading font-bold uppercase tracking-[-0.04em] text-3xl xl:text-4xl leading-[1.15] mb-4 ${
                      i === active ? "text-white" : "text-white/70"
                    }`}
                  >
                    {t(step.titleKey)}
                  </h3>
                  <p
                    className={`body-lead max-w-md transition-opacity duration-400 ${
                      i === active ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {t(step.descKey)}
                  </p>
                </button>
              </div>
            ))}
          </div>

          {/* Sticky visual — larger + more interesting */}
          <div className="lg:col-span-7 sticky top-24 hidden lg:flex items-center justify-center h-[calc(100vh-8rem)] pointer-events-none">
            <div className="relative w-[min(100%,34rem)] aspect-square">
              {/* Soft glow */}
              <div
                className={`absolute inset-[12%] rounded-full bg-gradient-to-br ${steps[active].accent} opacity-20 blur-[60px] transition-colors duration-700`}
              />

              {/* Outer dashed ring */}
              <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />

              {/* Mid ring */}
              <div className="absolute inset-[6%] rounded-full border border-white/[0.07]" />

              {/* Progress SVG ring */}
              <svg
                className="absolute inset-[3%] w-[94%] h-[94%] -rotate-90"
                viewBox="0 0 100 100"
                aria-hidden
              >
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="0.8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  stroke="url(#processGrad)"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={dashOffset}
                  className="transition-[stroke-dashoffset] duration-500 ease-out"
                />
                <defs>
                  <linearGradient id="processGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(217 91% 60%)" />
                    <stop offset="100%" stopColor="hsl(263 70% 58%)" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Step dots on ring */}
              {steps.map((step, i) => {
                const angle = -90 + (i / steps.length) * 360;
                const rad = (angle * Math.PI) / 180;
                const r = 47; // % of half size roughly via left/top
                const x = 50 + r * Math.cos(rad);
                const y = 50 + r * Math.sin(rad);
                return (
                  <div
                    key={step.num}
                    className={`absolute w-3 h-3 -ml-1.5 -mt-1.5 rounded-full border transition-all duration-400 ${
                      i <= active
                        ? "bg-primary border-primary scale-125 shadow-[0_0_12px_hsl(var(--primary)/0.8)]"
                        : "bg-background border-white/25"
                    }`}
                    style={{ left: `${x}%`, top: `${y}%` }}
                  />
                );
              })}

              {/* Giant number */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={steps[active].num}
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.35 }}
                    className="font-heading font-bold text-[11rem] xl:text-[13rem] leading-none tracking-[-0.07em] text-white/[0.05] select-none"
                  >
                    {steps[active].num}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Center icon card */}
              <div className="absolute inset-0 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active}
                    initial={{ opacity: 0, y: 12, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                  >
                    <div
                      className={`absolute -inset-6 rounded-full bg-gradient-to-br ${steps[active].accent} opacity-30 blur-2xl`}
                    />
                    <div className="relative p-10 xl:p-12 rounded-[2rem] border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-[0_0_80px_-20px_hsl(var(--primary)/0.55)]">
                      <ActiveIcon
                        size={88}
                        className="text-primary"
                        strokeWidth={1.15}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Active label under visual */}
              <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                <p className="label-mono text-primary/80 bg-background/80 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                  {steps[active].num} — {t(steps[active].titleKey)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
