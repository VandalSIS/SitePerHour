import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/motion/SectionHeader";

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
        <SectionHeader
          badge={t("stack.badge")}
          title={t("stack.title")}
          subtitle={t("stack.subtitle")}
        />

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
