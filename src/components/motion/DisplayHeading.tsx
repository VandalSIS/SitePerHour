"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type DisplayHeadingProps = {
  children: string;
  as?: "h1" | "h2" | "h3";
  size?: "hero" | "section" | "card";
  className?: string;
  gradient?: boolean;
  /** Animate on scroll into view (section titles) */
  revealOnScroll?: boolean;
};

const sizeClasses = {
  hero: "text-[2.75rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] leading-[1.15] sm:leading-[1.1]",
  section:
    "text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-[1.12]",
  card: "text-2xl sm:text-3xl leading-[1.2]",
};

const wordVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function DisplayHeading({
  children,
  as = "h2",
  size = "section",
  className = "",
  gradient = false,
  revealOnScroll = true,
}: DisplayHeadingProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const words = children.split(" ");

  const Tag = as;

  return (
    <div ref={ref} className={className}>
      <Tag
        className={`font-heading font-bold tracking-[-0.04em] text-balance py-1 ${sizeClasses[size]}`}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            custom={i}
            initial="hidden"
            animate={revealOnScroll ? (isInView ? "visible" : "hidden") : "visible"}
            variants={wordVariants}
            className={`inline-block mr-[0.28em] last:mr-0 pb-1 ${
              gradient ? "text-gradient-vivid" : ""
            }`}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </div>
  );
}
