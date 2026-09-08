import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/motion/SectionHeader";

type Testimonial = {
  name: string;
  role: string;
  company: string;
  project: string;
  initials: string;
  color: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Christian Timbers",
    role: "Founder",
    company: "Christian & Timbers",
    project: "Webflow + CMS + Forms",
    initials: "CT",
    color: "from-amber-500 to-orange-600",
  },
  {
    name: "CT Labs Team",
    role: "AI Consulting",
    company: "ctlabs.ai",
    project: "Webflow CMS Platform",
    initials: "AI",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Cartek Auto",
    role: "E-commerce Manager",
    company: "cartek.ro",
    project: "WooCommerce + BT Pay",
    initials: "CA",
    color: "from-red-500 to-rose-600",
  },
  {
    name: "Pasat Elena",
    role: "Psychologist",
    company: "pasatelena.com",
    project: "Tilda Platform + CMS",
    initials: "PE",
    color: "from-pink-500 to-fuchsia-500",
  },
];

const TestimonialsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20" />
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge={t("testimonials.badge")}
          title={t("testimonials.title")}
          subtitle={t("testimonials.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {TESTIMONIALS.map((tst, i) => (
            <motion.div
              key={tst.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/40 transition-colors group"
            >
              <Quote
                size={32}
                className="absolute top-4 right-4 text-primary/20 group-hover:text-primary/40 transition-colors"
              />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-white/80 leading-relaxed mb-6">
                {t(`testimonials.t${i + 1}`)}
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${tst.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {tst.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-white text-sm truncate">{tst.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {tst.role} · {tst.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
