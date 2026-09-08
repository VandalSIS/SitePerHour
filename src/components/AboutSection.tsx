import { CheckCircle, Code2, Users2, Globe2, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/motion/SectionHeader";

const AboutSection = () => {
  const { t } = useTranslation();

  const skills = [
    t("about.skills.react"),
    t("about.skills.ecommerce"),
    t("about.skills.wordpress"),
    t("about.skills.ai"),
    t("about.skills.seo"),
    t("about.skills.web3"),
  ];

  const stats = [
    { value: "50+", label: t("about.stats.projects"), icon: Code2 },
    { value: "30+", label: t("about.stats.clients"), icon: Users2 },
    { value: "8+", label: t("about.stats.countries"), icon: Globe2 },
    { value: "5+", label: t("about.stats.years"), icon: Clock },
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge={t("about.badge")}
          title={t("about.title")}
          subtitle={t("about.subtitle")}
        />

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {t("about.heading")}
            </h3>
            <p className="text-muted-foreground text-base md:text-lg mb-5 leading-relaxed">
              {t("about.desc1")}
            </p>
            <p className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed">
              {t("about.desc2")}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 group"
                >
                  <CheckCircle size={18} className="text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 text-sm md:text-base">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Abstract code/terminal visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-purple-500/30 to-primary/30 rounded-3xl blur-2xl opacity-50" />

            {/* Terminal card */}
            <div className="relative bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              {/* Window header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/70" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                  <div className="w-3 h-3 rounded-full bg-green-500/70" />
                </div>
                <span className="text-xs text-white/50 ml-2 font-mono">~/siteperhour</span>
              </div>

              {/* Code */}
              <div className="p-6 font-mono text-sm leading-relaxed">
                <div className="text-purple-400">const <span className="text-blue-300">developer</span> = {`{`}</div>
                <div className="pl-4">
                  <span className="text-yellow-300">name</span>: <span className="text-green-300">"Mihail Mihail"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-yellow-300">role</span>: <span className="text-green-300">"Full-Stack Developer"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-yellow-300">location</span>: <span className="text-green-300">"Chișinău, MD"</span>,
                </div>
                <div className="pl-4">
                  <span className="text-yellow-300">stack</span>: [
                </div>
                <div className="pl-8 text-green-300">
                  <div>"React",</div>
                  <div>"Next.js",</div>
                  <div>"WordPress",</div>
                  <div>"Shopify",</div>
                </div>
                <div className="pl-4">],</div>
                <div className="pl-4">
                  <span className="text-yellow-300">available</span>: <span className="text-orange-300">true</span>,
                </div>
                <div className="text-purple-400">{`};`}</div>
                <div className="mt-4 flex items-center gap-2 text-white/40 text-xs">
                  <span className="inline-block w-2 h-4 bg-primary animate-pulse" />
                  <span>ready to ship</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center overflow-hidden hover:border-primary/40 transition-colors"
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/40 transition-colors" />
                <Icon className="mx-auto mb-3 text-primary" size={28} />
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
