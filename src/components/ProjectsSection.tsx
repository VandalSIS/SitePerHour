import { ArrowRight } from "lucide-react";
import ProjectCard3D from "./ProjectCard3D";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Website",
      category: "Web Development",
      image: "https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0002_2_website-builder-poster-psychedelic-retro_THwcgJBjSyafiagtGoEoow_bqBxMixBQBqAS26DXoEZ9A.jpeg",
      description: "A fully responsive e-commerce platform built with React and Node.js.",
      url: "https://haskelshop.com/"
    },
    {
      title: "Corporate Rebrand",
      category: "UI/UX Design",
      image: "https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0001_3_a-vibrant-vintage-gig-poster-digital-pai_V9dDfs_DTnKXAQlXcuI72A_Rd-c5ybsRD2rQFytjm4nwg.jpeg",
      description: "Complete visual identity redesign for a services company.",
      url: "https://perhour.great-site.net/"
    },
    {
      title: "Mobile App",
      category: "App Development",
      image: "https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0003_2_maintenance-poster-bold-illustrated-post_a0BHHD5vS9G9Ym_Bk2jOXw_v6c7ShXzToCLCQ528Px0BQ.jpeg",
      description: "A cross-platform mobile application for tracking fitness goals.",
      url: "https://your-app-site.com",
      buttonText: "In Progress"
    },
    {
      title: "Marketing Website",
      category: "Web Design",
      image: "https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0001_4_a-vintage-gig-poster-style-digital-paint_yWsNaephQmOYiqKwzF_25Q_Rd-c5ybsRD2rQFytjm4nwg.jpeg",
      description: "SEO-optimized landing pages for a SaaS product launch.",
      url: "http://www.vanellaromedomus.com/en/home-page-eng/"
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold">Recent Work</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each represents my commitment to quality and attention to detail.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard3D
              key={index}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
              url={project.url}
              buttonText={project.buttonText}
            />
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <Button variant="outline" className="border-white/20 hover:bg-white/10">
            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
