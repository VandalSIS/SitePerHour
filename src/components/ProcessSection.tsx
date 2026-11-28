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
  const [progress, setProgress] = useState(0);
  const pinRef = useRef<HTMLElement>(null);

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

  // Scrub progress while the tall pin section is on screen (Lenis-safe rAF)
  useEffect(() => {
    if (!isDesktop) return;
    const section = pinRef.current;
    if (!section) return;

    let running = false;
    let rafId = 0;

    const update = () => {
      const rect = section.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight, 1);
      const scrolled = Math.min(Math.max(-rect.top, 0), total);
      const p = scrolled / total;
      setProgress(p);

      const idx = Math.min(
        STEP_KEYS.length - 1,
        Math.max(0, Math.floor(p * STEP_KEYS.length + 0.001))
      );
      setActive((prev) => (prev === idx ? prev : idx));
    };

    const loop = () => {
      update();
      if (running) rafId = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!running) {
            running = true;
            rafId = requestAnimationFrame(loop);
          }
        } else if (running) {
          running = false;
          cancelAnimationFrame(rafId);
        }
      },
      { threshold: 0, rootMargin: "10% 0px 10% 0px" }
    );

    io.observe(section);
    update();

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      io.disconnect();
    };
  }, [isDesktop]);

  const steps = STEP_KEYS.map((s, i) => ({
    ...s,
    icon: STEP_ICONS[i],
    accent: STEP_ACCENTS[i],
  }));

  if (!isDesktop) {
    return (
      <section id="process" className="section-spacing relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 pointer-events-none" />
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
  const circumference = 2 * Math.PI * 46;
  const ringProgress = (active + 1) / steps.length;
  const dashOffset = circumference - circumference * ringProgress;
  // Tall track: sticky panel stays put, text/circle update as you scroll
  const trackVh = steps.length * 90;

  return (
    <section id="process" className="relative">
      <div className="container-custom relative z-10 pt-20 md:pt-28 pb-6">
        <div className="mb-6 max-w-3xl">
          <p className="label-mono mb-4">{t("process.badge")}</p>
          <h2 className="display-section text-white">{t("process.title")}</h2>
          <p className="body-lead mt-4 max-w-xl">{t("process.subtitle")}</p>
        </div>
      </div>

      <section
        ref={pinRef}
        className="relative"
        style={{ height: `${trackVh}vh` }}
        aria-label={t("process.title")}
      >
        {/* Sticky stage — stays in viewport; content crossfades */}
        <div className="sticky top-0 h-screen flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background pointer-events-none" />

          <div className="container-custom relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Text — changes with scroll */}
              <div className="lg:col-span-5 min-h-[14rem]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={steps[active].num}
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <p className="label-mono text-primary mb-3">
                      {steps[active].num} / 0{steps.length}
                    </p>
                    <h3 className="font-heading font-bold uppercase tracking-[-0.04em] text-3xl xl:text-5xl leading-[1.12] text-white mb-5">
                      {t(steps[active].titleKey)}
                    </h3>
                    <p className="body-lead max-w-md text-white/75">
                      {t(steps[active].descKey)}
                    </p>
                  </motion.div>
                </AnimatePresence>

                {/* Step dots */}
                <div className="flex items-center gap-2 mt-10">
                  {steps.map((step, i) => (
                    <button
                      key={step.num}
                      type="button"
                      aria-label={t(step.titleKey)}
                      onClick={() => {
                        const section = pinRef.current;
                        if (!section) return;
                        const rect = section.getBoundingClientRect();
                        const absoluteTop = window.scrollY + rect.top;
                        const total = Math.max(
                          section.offsetHeight - window.innerHeight,
                          1
                        );
                        const target =
                          absoluteTop +
                          (i / steps.length) * total +
                          total / (steps.length * 2);
                        window.scrollTo({ top: target, behavior: "smooth" });
                      }}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active
                          ? "w-8 bg-primary"
                          : i < active
                            ? "w-4 bg-primary/50"
                            : "w-4 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Circle — stays with sticky stage */}
              <div className="lg:col-span-7 flex items-center justify-center">
                <div className="relative w-[min(100%,30rem)] aspect-square">
                  <div
                    className={`absolute inset-[12%] rounded-full bg-gradient-to-br ${steps[active].accent} opacity-25 blur-[60px] transition-colors duration-700`}
                  />

                  <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />
                  <div className="absolute inset-[6%] rounded-full border border-white/[0.07]" />

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
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={dashOffset}
                      className="transition-[stroke-dashoffset] duration-500 ease-out"
                    />
                    <defs>
                      <linearGradient
                        id="processGrad"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="0%"
                      >
                        <stop offset="0%" stopColor="hsl(217 91% 60%)" />
                        <stop offset="100%" stopColor="hsl(263 70% 58%)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {steps.map((step, i) => {
                    const a = -90 + (i / steps.length) * 360;
                    const rad = (a * Math.PI) / 180;
                    const r = 47;
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

                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={steps[active].num}
                        initial={{ opacity: 0, scale: 0.92 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.04 }}
                        transition={{ duration: 0.3 }}
                        className="font-heading font-bold text-[10rem] xl:text-[12rem] leading-none tracking-[-0.07em] text-white/[0.05] select-none"
                      >
                        {steps[active].num}
                      </motion.span>
                    </AnimatePresence>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={active}
                        initial={{ opacity: 0, y: 12, scale: 0.94 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.96 }}
                        transition={{
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative"
                      >
                        <div
                          className={`absolute -inset-6 rounded-full bg-gradient-to-br ${steps[active].accent} opacity-30 blur-2xl`}
                        />
                        <div className="relative p-9 xl:p-11 rounded-[2rem] border border-white/15 bg-white/[0.04] backdrop-blur-md shadow-[0_0_80px_-20px_hsl(var(--primary)/0.55)]">
                          <ActiveIcon
                            size={80}
                            className="text-primary"
                            strokeWidth={1.15}
                          />
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <div className="absolute -bottom-1 left-0 right-0 flex justify-center">
                    <p className="label-mono text-primary/80 bg-background/85 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                      {steps[active].num} — {t(steps[active].titleKey)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll hint progress bar */}
            <div className="mt-12 h-0.5 w-full max-w-md mx-auto bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary/80 rounded-full transition-[width] duration-75"
                style={{ width: `${Math.min(progress * 100, 100)}%` }}
              />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ProcessSection;
