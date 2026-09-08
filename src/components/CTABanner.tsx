import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";
import DisplayHeading from "@/components/motion/DisplayHeading";

const CTABanner = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary/20 via-purple-600/10 to-primary/20 border border-white/10 rounded-3xl p-8 md:p-14 overflow-hidden text-left"
        >
          {/* Decorative blobs — animated on desktop, static on mobile */}
          {isMobile ? (
            <>
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/30 rounded-full blur-[100px]" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px]" />
            </>
          ) : (
            <>
              <motion.div
                animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-20 -left-20 w-80 h-80 bg-primary/30 rounded-full blur-[100px]"
              />
              <motion.div
                animate={{ scale: [1, 1.3, 1], rotate: [0, -30, 0] }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-500/30 rounded-full blur-[100px]"
              />
            </>
          )}

          <div className="relative z-10 max-w-3xl">
            <DisplayHeading as="h2" size="section" className="text-white mb-4">
              {t("cta.title")}
            </DisplayHeading>
            <p className="body-lead mb-8 max-w-xl">
              {t("cta.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
              <a href="#contact">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-base rounded-full shadow-[0_0_40px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_0_60px_-5px_rgba(59,130,246,0.9)] transition-all"
                >
                  <MessageCircle size={18} className="mr-2" />
                  {t("cta.primary")}
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="mailto:mihail.mihai2001@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-base rounded-full border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white"
                >
                  <Calendar size={18} className="mr-2" />
                  {t("cta.secondary")}
                </Button>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t("cta.available")}
              </span>
              <span>·</span>
              <span>{t("cta.response")}</span>
              <span>·</span>
              <span>{t("cta.free")}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
