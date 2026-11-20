"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";
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
    title: "Hire AI Leaders",
    url: "https://www.hireaileaders.com",
    domain: "hireaileaders.com",
    catKey: "webflow",
    desc: "Research hub for CEOs and CHROs hiring AI leadership — role library, hiring playbooks, weekly brief and interview kits.",
    gradient: "from-zinc-900 via-slate-700 to-sky-600",
  },
  {
    title: "Data Center Leadership",
    url: "https://www.datacenterleadership.com",
    domain: "datacenterleadership.com",
    catKey: "webflow",
    desc: "Talent intelligence for data center hiring — pay benchmarks, demand indexes, workforce trends and recruiter data.",
    gradient: "from-slate-950 via-blue-900 to-cyan-600",
  },
  {
    title: "CFO Recruiting Firm",
    url: "https://www.cforecruitingfirm.com",
    domain: "cforecruitingfirm.com",
    catKey: "webflow",
    desc: "Data-backed CFO hiring guidance — market pulse, finance leader finder, industry playbooks and search insights.",
    gradient: "from-emerald-950 via-teal-800 to-lime-500",
  },
  {
    title: "RadioADS",
    url: "https://radioads.md",
    domain: "radioads.md",
    catKey: "react",
    desc: "Online radio advertising platform for Moldova — live price calculator, packages, voice demos, ratings and blog.",
    gradient: "from-rose-700 via-red-600 to-orange-500",
  },
  {
    title: "Sălcuța Wine",
    url: "https://salcutawine.md",
    domain: "salcutawine.md",
    catKey: "wordpress",
    desc: "Winery website for three generations of Moldovan wine — collections, story, vineyards and Wine Club.",
    gradient: "from-amber-950 via-yellow-800 to-stone-600",
  },
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

const screenshotUrl = (url: string, width: number) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=${width}&h=${Math.round(width * 0.75)}`;

/** Load image only when near viewport — keeps scroll smooth on mobile */
const ProjectThumbnail = ({
  project,
  width,
}: {
  project: Project;
  width: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px 0px", threshold: 0.01 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative aspect-[4/3] overflow-hidden bg-secondary">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

      {(!imgLoaded || imgError) && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-[1]">
          <div className="text-4xl sm:text-5xl font-heading font-black text-white/95 tracking-tighter mb-2">
            {project.title
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 3)}
          </div>
          <div className="text-white/80 text-sm font-medium">{project.domain}</div>
        </div>
      )}

      {shouldLoad && !imgError && (
        <img
          src={screenshotUrl(project.url, width)}
          alt=""
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          sizes="(max-width: 768px) 100vw, 33vw"
          onLoad={() => setImgLoaded(true)}
          onError={() => setImgError(true)}
          className={`absolute inset-0 w-full h-full object-cover object-top ${
            imgLoaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ contentVisibility: "auto" }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-transparent z-[2] pointer-events-none" />
    </div>
  );
};

const ProjectsSection = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const shotWidth = isMobile ? 400 : 720;

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
      {/* Heavy blur only on desktop — kills mobile scroll FPS */}
      <div className="hidden md:block absolute top-1/4 right-0 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[180px]" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge={t("projects.badge")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {PROJECTS.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block bg-card/50 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors contain-paint"
            >
              <ProjectThumbnail project={project} width={shotWidth} />

              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 text-xs font-medium text-primary border border-primary/30 z-[3]">
                {t(`projects.cats.${project.catKey}`)}
              </div>

              {project.catKey === "maintenance" && (
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500/90 text-xs font-medium text-white z-[3]">
                  {t("projects.inProgress")}
                </div>
              )}

              <div className="p-4 md:p-5 relative z-[3]">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h3 className="text-lg font-heading font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className="text-muted-foreground shrink-0"
                  />
                </div>
                <p className="text-xs text-muted-foreground mb-2 flex items-center gap-1">
                  <ExternalLink size={11} />
                  {project.domain}
                </p>
                <p className="text-sm text-white/70 leading-relaxed line-clamp-2 md:line-clamp-3">
                  {project.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
