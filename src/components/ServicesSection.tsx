"use client";

import {
  Code2, ShoppingBag, Smartphone, Megaphone, Target,
  Search, Wrench, ArrowUpRight, Workflow, LineChart,
} from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import SectionHeader from "@/components/motion/SectionHeader";

type ServiceKey =
  | "webDev"
  | "ecommerce"
  | "mobileApps"
  | "googleAds"
  | "metaAds"
  | "seo"
  | "crm"
  | "digitalMarketing"
  | "branding"
  | "maintenance";

const services: {
  icon: typeof Code2;
  key: ServiceKey;
  color: string;
  className: string;
}[] = [
  {
    icon: Code2,
    key: "webDev",
    color: "from-blue-500 to-cyan-500",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    icon: Megaphone,
    key: "googleAds",
    color: "from-orange-500 to-amber-500",
    className: "",
  },
  {
    icon: Target,
    key: "metaAds",
    color: "from-pink-500 to-rose-500",
    className: "",
  },
  {
    icon: Workflow,
    key: "crm",
    color: "from-violet-500 to-purple-500",
    className: "md:col-span-2",
  },
  {
    icon: ShoppingBag,
    key: "ecommerce",
    color: "from-emerald-500 to-teal-500",
    className: "",
  },
  {
    icon: Smartphone,
    key: "mobileApps",
    color: "from-indigo-500 to-blue-500",
    className: "",
  },
  {
    icon: LineChart,
    key: "digitalMarketing",
    color: "from-highlight/80 to-cyan-400",
    className: "md:col-span-2",
  },
  {
    icon: Search,
    key: "seo",
    color: "from-green-500 to-lime-500",
    className: "",
  },
  {
    icon: Wrench,
    key: "maintenance",
    color: "from-slate-500 to-zinc-500",
    className: "",
  },
];

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 mesh-gradient opacity-50" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge={t("services.badge")}
          title={t("services.title")}
          subtitle={t("services.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[minmax(140px,auto)]">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isLarge = service.className.includes("row-span-2");

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -6 }}
                className={`group relative border-gradient rounded-2xl p-6 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 overflow-hidden ${service.className}`}
              >
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-500`}
                />

                <div className="relative z-10 h-full flex flex-col">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 w-fit`}
                  >
                    <Icon size={isLarge ? 28 : 22} className="text-white" />
                  </div>

                  <h3
                    className={`font-heading font-bold mb-2 text-white flex items-center justify-between gap-2 ${
                      isLarge ? "text-2xl" : "text-lg"
                    }`}
                  >
                    {t(`services.${service.key}`)}
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
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
