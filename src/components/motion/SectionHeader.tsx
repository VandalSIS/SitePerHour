"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import DisplayHeading from "./DisplayHeading";

type SectionHeaderProps = {
  badge: string;
  title: string;
  subtitle?: string;
  titleGradient?: boolean;
};

export default function SectionHeader({
  badge,
  title,
  subtitle,
  titleGradient = false,
}: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
        className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/10"
      >
        <Sparkles size={14} className="text-primary" />
        <span className="text-sm text-primary font-medium tracking-wide">{badge}</span>
      </motion.div>

      <DisplayHeading as="h2" size="section" gradient={titleGradient}>
        {title}
      </DisplayHeading>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
