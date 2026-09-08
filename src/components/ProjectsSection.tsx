import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";
import SectionHeader from "@/components/motion/SectionHeader";

type Project = {
  title: string;
  url: string;
  domain: string;
  catKey: string;
  desc: string;
  gradient: string;
};

const PROJECTS: Project[] = [
  {
    title: "CT Labs",
    url: "https://ctlabs.ai",
    domain: "ctlabs.ai",
    catKey: "webflow",
    desc: "AI consulting platform on Webflow with CMS on Insight, FAQ and Team pages.",
    gradient: "from-purple-600 via-blue-600 to-cyan-500",
  },
  {
    title: "Top Executive Recruiting",
    url: "https://www.topexecrecruiting.com",
    domain: "topexecrecruiting.com",
    catKey: "webflow",
    desc: "Premium executive recruiting site on Webflow with CMS for News and Insights pages.",
    gradient: "from-slate-800 via-blue-700 to-indigo-600",
  },
  {
    title: "Christian & Timbers",
    url: "https://www.christianandtimbers.com",
    domain: "christianandtimbers.com",
    catKey: "maintenance",
    desc: "Webflow site under ongoing maintenance — collect forms and CMS implementation.",
    gradient: "from-amber-700 via-orange-600 to-red-600",
  },
  {
    title: "Pasat Elena",
    url: "https://www.pasatelena.com",
    domain: "pasatelena.com",
    catKey: "tilda",
    desc: "Online psychology platform on Tilda with CMS-managed blog for clients.",
    gradient: "from-pink-500 via-rose-500 to-orange-400",
  },
  {
    title: "Cartek",
    url: "https://www.cartek.ro",
    domain: "cartek.ro",
    catKey: "woocommerce",
    desc: "WordPress + WooCommerce automotive e-commerce with BT Transilvania payment integration.",
    gradient: "from-red-600 via-rose-600 to-pink-700",
  },
  {
    title: "Cricova Restaurant",
    url: "https://restaurant.cricova.md",
    domain: "restaurant.cricova.md",
    catKey: "wordpress",
    desc: "WordPress + custom HTML/CSS/JS for the famous Cricova winery restaurant.",
    gradient: "from-amber-800 via-yellow-700 to-orange-700",
  },
  {
    title: "Financial Agent UK",
    url: "https://financialagent.co.uk",
    domain: "financialagent.co.uk",
    catKey: "wordpress",
    desc: "UK financial services site on WordPress — blog posts and e-signature integration.",
    gradient: "from-emerald-700 via-teal-600 to-cyan-700",
  },
  {
    title: "Pop Iulia Portfolio",
    url: "https://popaiulia.com",
    domain: "popaiulia.com",
    catKey: "react",
    desc: "Personal portfolio built with React, TypeScript and Vite. Fully custom, blazing fast.",
    gradient: "from-violet-600 via-fuchsia-600 to-pink-600",
  },
];

// WordPress mShots — free, no auth, cached server-side
const screenshotUrl = (url: string, width: number) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${Math.round(width * 0.75)}`;

const ProjectThumbnail = ({ project }: { project: Project }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const isMobile = useIsMobile();
  const width = isMobile ? 480 : 900;

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
      {/* Always-on gradient fallback (visible while loading too) */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />
      <div className="absolute inset-0 bg-[url('/hero-bg.svg')] bg-cover opacity-20 mix-blend-overlay" />

      {/* Project title overlay on the gradient (always visible if image fails) */}
      {(!imgLoaded || imgError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-[1]">
          <div className="text-5xl md:text-6xl font-black text-white/95 drop-shadow-lg tracking-tighter mb-2">
            {project.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}
          </div>
          <div className="text-white/80 text-sm font-medium">{project.domain}</div>
        </div>
      )}

      {/* Live screenshot via mShots */}
      {!imgError && (
        <img
          src={screenshotUrl(project.url, width)}
          alt={project.title}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-500 ${
            imgLoaded ? "opacity-100" : "opacity-0"
          } group-hover:scale-105 transition-transform`}
        />
      )}

      {/* Gradient bottom overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent z-[2]" />
    </div>
  );
};

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div className="absolute top-1/4 right-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[180px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge={t("projects.badge")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative bg-card/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <ProjectThumbnail project={project} />

              {/* Category badge */}
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-medium text-primary border border-primary/30 z-[3]">
                {t(`projects.cats.${project.catKey}`)}
              </div>

              {project.catKey === "maintenance" && (
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500/90 backdrop-blur-md text-xs font-medium text-white z-[3]">
                  {t("projects.inProgress")}
                </div>
              )}

              {/* Content */}
              <div className="p-5 relative z-[3]">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-3 flex items-center gap-1">
                  <ExternalLink size={11} />
                  {project.domain}
                </p>
                <p className="text-sm text-white/70 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
