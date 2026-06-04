import {
  Code2, ShoppingBag, Smartphone, Megaphone, Target,
  Search, Palette, Wrench, Sparkles, ArrowUpRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    { icon: Code2, key: "webDev", color: "from-blue-500 to-cyan-500" },
    { icon: ShoppingBag, key: "ecommerce", color: "from-emerald-500 to-teal-500" },
    { icon: Smartphone, key: "mobileApps", color: "from-violet-500 to-purple-500" },
    { icon: Megaphone, key: "googleAds", color: "from-orange-500 to-amber-500" },
    { icon: Target, key: "metaAds", color: "from-pink-500 to-rose-500" },
    { icon: Search, key: "seo", color: "from-green-500 to-lime-500" },
    { icon: Palette, key: "branding", color: "from-fuchsia-500 to-pink-500" },
    { icon: Wrench, key: "maintenance", color: "from-slate-500 to-zinc-500" },
  ];

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[200px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-primary/30 bg-primary/10">
            <Sparkles size={14} className="text-primary" />
            <span className="text-sm text-primary font-medium">{t("services.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-[1.15] pb-1">
            {t("services.title")}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t("services.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient glow on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />

                <div className="relative z-10">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} className="text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white flex items-center justify-between">
                    {t(`services.${service.key}`)}
                    <ArrowUpRight
                      size={18}
                      className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                    />
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {t(`services.${service.key}Desc`)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
