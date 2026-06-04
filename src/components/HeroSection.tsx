import { ArrowRight, Sparkles, MousePointer2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import ParticlesBackground from "./ParticlesBackground";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Tailwind", "WordPress",
  "Shopify", "Webflow", "Tilda", "Node.js", "Vite",
  "Google Ads", "Meta Ads", "SEO", "Framer Motion",
];

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center bg-background overflow-hidden pt-20 pb-12"
      >
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
        <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover bg-center opacity-30" />

        {/* Animated blobs */}
        <motion.div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[120px]"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-500/30 rounded-full blur-[120px]"
          animate={{ x: [0, -60, 0], y: [0, -40, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        <ParticlesBackground />

        <div className="container-custom relative z-10 text-center max-w-5xl mx-auto px-4 flex-1 flex flex-col justify-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm self-center"
          >
            <Sparkles size={14} className="text-primary" />
            <span className="text-xs md:text-sm text-primary font-medium tracking-wide">
              {t("hero.badge")}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.15] tracking-tight"
          >
            <span className="block text-white pb-1">{t("hero.title1")}</span>
            <span className="block bg-gradient-to-r from-primary via-purple-400 to-primary bg-clip-text text-transparent pb-2">
              {t("hero.title2")}
            </span>
            <span className="block text-white pb-1">{t("hero.title3")}</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            {t("hero.description")}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-10"
          >
            <a href="#contact">
              <Button
                size="lg"
                className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full shadow-[0_0_40px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_60px_-5px_rgba(59,130,246,0.9)] transition-all duration-300"
              >
                {t("hero.cta")}
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#projects">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base rounded-full border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white transition-all duration-300"
              >
                {t("hero.portfolio")}
              </Button>
            </a>
          </motion.div>

          {/* Trust badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-2 text-muted-foreground text-sm"
          >
            <div className="flex -space-x-2">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <span>{t("hero.trustedBy")}</span>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.6 },
            y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
          className="flex flex-col items-center gap-1 text-white/60 hover:text-white transition-colors z-10 mt-4 relative"
        >
          <MousePointer2 size={16} className="rotate-180" />
          <span className="text-xs">{t("hero.scrollDown")}</span>
        </motion.a>
      </section>

      {/* Tech stack marquee — standalone section, no overlap */}
      <section className="relative overflow-hidden border-y border-white/10 bg-black/40 backdrop-blur-md py-5 z-10">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <span
              key={i}
              className="text-muted-foreground text-sm md:text-base font-medium flex items-center gap-3"
            >
              {tech}
              <span className="text-primary/40">•</span>
            </span>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default HeroSection;
