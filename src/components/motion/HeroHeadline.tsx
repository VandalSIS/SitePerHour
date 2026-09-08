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
  hidden: { opacity: 0, y: 56 },
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
    <h1 className="display-hero text-white">
      {lines.map((line, i) => (
        <motion.span
          key={`${line.text}-${i}`}
          custom={i}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className={`block overflow-visible ${
            line.gradient ? "text-gradient" : ""
          }`}
        >
          {line.text}
        </motion.span>
      ))}
    </h1>
  );
}
