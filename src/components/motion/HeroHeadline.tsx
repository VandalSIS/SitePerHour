"use client";

import { motion } from "framer-motion";

type HeroLine = {
  text: string;
  gradient?: boolean;
};

type HeroHeadlineProps = {
  lines: HeroLine[];
};

const lineVariants = {
  hidden: { opacity: 0, y: 72 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 + i * 0.14,
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function HeroHeadline({ lines }: HeroHeadlineProps) {
  return (
    <h1
      className="font-heading font-bold uppercase tracking-[-0.05em] text-[clamp(2.65rem,11.5vw,10.5rem)] leading-[0.9] sm:leading-[0.88] text-white"
      style={{ fontFeatureSettings: '"case" 1' }}
    >
      {lines.map((line, i) => (
        <motion.span
          key={`${line.text}-${i}`}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className={`block overflow-visible pb-[0.06em] ${
            line.gradient ? "text-gradient" : ""
          }`}
        >
          {line.text}
        </motion.span>
      ))}
    </h1>
  );
}
