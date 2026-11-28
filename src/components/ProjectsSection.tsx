"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useIsMobile } from "@/hooks/use-mobile";
import SectionHeader from "@/components/motion/SectionHeader";
import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";

type Project = {
  title: string;
  url: string;
  domain: string;
  catKey: string;
  desc: string;
  gradient: string;
  /** Local screenshot in /public/projects — omit if site is offline */
  image?: string;
};

const PROJECTS: Project[] = [
  {
    title: "Hire AI Leaders",
    url: "https://www.hireaileaders.com",
    domain: "hireaileaders.com",
    catKey: "webflow",
    desc: "Research hub for CEOs and CHROs hiring AI leadership — role library, hiring playbooks, weekly brief and interview kits.",
    gradient: "from-zinc-900 via-slate-700 to-sky-600",
    image: "/projects/hireaileaders.png",
  },
  {
    title: "Data Center Leadership",
    url: "https://www.datacenterleadership.com",
    domain: "datacenterleadership.com",
    catKey: "webflow",
    desc: "Talent intelligence for data center hiring — pay benchmarks, demand indexes, workforce trends and recruiter data.",
    gradient: "from-slate-950 via-blue-900 to-cyan-600",
    image: "/projects/datacenterleadership.png",
  },
  {
    title: "CFO Recruiting Firm",
    url: "https://www.cforecruitingfirm.com",
    domain: "cforecruitingfirm.com",
    catKey: "webflow",
    desc: "Data-backed CFO hiring guidance — market pulse, finance leader finder, industry playbooks and search insights.",
    gradient: "from-emerald-950 via-teal-800 to-lime-500",
    image: "/projects/cforecruitingfirm.png",
  },
  {
    title: "RadioADS",
    url: "https://radioads.md",
    domain: "radioads.md",
    catKey: "react",
    desc: "Online radio advertising platform for Moldova — live price calculator, packages, voice demos, ratings and blog.",
    gradient: "from-rose-700 via-red-600 to-orange-500",
    image: "/projects/radioads.png",
  },
  {
    title: "Sălcuța Wine",
    url: "https://salcutawine.md",
    domain: "salcutawine.md",
    catKey: "wordpress",
    desc: "Winery website for three generations of Moldovan wine — collections, story, vineyards and Wine Club.",
    gradient: "from-amber-950 via-yellow-800 to-stone-600",
    image: "/projects/salcutawine.png",
  },
  {
    title: "CT Labs",
    url: "https://ctlabs.ai",
    domain: "ctlabs.ai",
    catKey: "webflow",
    desc: "AI consulting platform on Webflow with CMS on Insight, FAQ and Team pages.",
    gradient: "from-purple-600 via-blue-600 to-cyan-500",
    image: "/projects/ctlabs.png",
  },
  {
    title: "Top Executive Recruiting",
    url: "https://www.topexecrecruiting.com",
    domain: "topexecrecruiting.com",
    catKey: "webflow",
    desc: "Premium executive recruiting site on Webflow with CMS for News and Insights pages.",
    gradient: "from-slate-800 via-blue-700 to-indigo-600",
    image: "/projects/topexecrecruiting.png",
  },
  {
    title: "Christian & Timbers",
    url: "https://www.christianandtimbers.com",
    domain: "christianandtimbers.com",
    catKey: "maintenance",
    desc: "Webflow site under ongoing maintenance — collect forms and CMS implementation.",
    gradient: "from-amber-700 via-orange-600 to-red-600",
    image: "/projects/christianandtimbers.png",
  },
  {
    title: "Pasat Elena",
    url: "https://www.pasatelena.com",
    domain: "pasatelena.com",
    catKey: "tilda",
    desc: "Online psychology platform on Tilda with CMS-managed blog for clients.",
    gradient: "from-pink-500 via-rose-500 to-orange-400",
    image: "/projects/pasatelena.png",
  },
  {
    title: "Cartek",
    url: "https://www.cartek.ro",
    domain: "cartek.ro",
    catKey: "woocommerce",
    desc: "WordPress + WooCommerce automotive e-commerce with BT Transilvania payment integration.",
    gradient: "from-red-600 via-rose-600 to-pink-700",
    // cartek.ro is currently suspended — gradient fallback until a real screen is available
  },
  {
    title: "Cricova Restaurant",
    url: "https://restaurant.cricova.md",
    domain: "restaurant.cricova.md",
    catKey: "wordpress",
    desc: "WordPress + custom HTML/CSS/JS for the famous Cricova winery restaurant.",
    gradient: "from-amber-800 via-yellow-700 to-orange-700",
    image: "/projects/cricova.png",
  },
  {
    title: "Financial Agent UK",
    url: "https://financialagent.co.uk",
    domain: "financialagent.co.uk",
    catKey: "wordpress",
    desc: "UK financial services site on WordPress — blog posts and e-signature integration.",
    gradient: "from-emerald-700 via-teal-600 to-cyan-700",
    image: "/projects/financialagent.png",
  },
  {
    title: "Pop Iulia Portfolio",
    url: "https://popaiulia.com",
    domain: "popaiulia.com",
    catKey: "react",
    desc: "Personal portfolio built with React, TypeScript and Vite. Fully custom, blazing fast.",
    gradient: "from-violet-600 via-fuchsia-600 to-pink-600",
    image: "/projects/popaiulia.png",
  },
];

const ProjectThumbnail = ({ project }: { project: Project }) => {
  const [ok, setOk] = useState(Boolean(project.image));
  const showImg = Boolean(project.image) && ok;

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`} />

      {!showImg && (
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

      {showImg && (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width={800}
          height={600}
          onError={() => setOk(false)}
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-[2] pointer-events-none" />
    </div>
  );
};

const ProjectsSection = () => {
  const { t } = useTranslation();
  const isMobile = useIsMobile();
  const [showAll, setShowAll] = useState(!isMobile);

  useEffect(() => {
    if (!isMobile) setShowAll(true);
  }, [isMobile]);

  const visible = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <section id="projects" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge={t("projects.badge")}
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {visible.map((project, i) => (
            <Reveal key={project.url} delay={Math.min(i * 0.05, 0.3)} y={16}>
              <TiltCard>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block bg-card/50 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors contain-paint motion-zoom"
                >
                  <ProjectThumbnail project={project} />

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
                        className="text-muted-foreground shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
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
              </TiltCard>
            </Reveal>
          ))}
        </div>

        {isMobile && !showAll && PROJECTS.length > 4 && (
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="rounded-full border border-white/15 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/5"
            >
              {t("projects.viewAll")} ({PROJECTS.length - 4}+)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
