import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";

const TECH_GROUPS = [
  {
    title: "Frontend",
    techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "CMS & Platforms",
    techs: ["WordPress", "WooCommerce", "Shopify", "Webflow", "Tilda"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Backend & Cloud",
    techs: ["Node.js", "Vercel", "Supabase", "PostgreSQL", "MongoDB"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    title: "Marketing & SEO",
    techs: ["Google Ads", "Meta Ads", "Google Analytics 4", "Tag Manager", "Search Console", "Schema.org"],
    color: "from-orange-500 to-rose-500",
  },
];

const TechStackSection = () => {
  const { t } = useTranslation();

  return (
    <section id="stack" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-primary font-medium">{t("stack.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.15] pb-1">
            {t("stack.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("stack.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECH_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 overflow-hidden group hover:border-primary/40 transition-colors"
            >
              <div
                className={`absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br ${group.color} opacity-20 blur-3xl group-hover:opacity-40 transition-opacity`}
              />
              <h3 className="relative z-10 text-xl font-bold text-white mb-4">{group.title}</h3>
              <div className="relative z-10 flex flex-wrap gap-2">
                {group.techs.map((tech, j) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: j * 0.04 }}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/90 hover:bg-primary/20 hover:border-primary/40 transition-colors cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
