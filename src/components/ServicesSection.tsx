import { Code, Layout, BarChart, Rocket } from "lucide-react";
import ServiceCard3D from "./ServiceCard3D";

const ServicesSection = () => {
  const services = [
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: "Web Design",
      description: "Beautiful, modern designs that capture your brand's essence and engage your visitors."
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: "Web Development",
      description: "Custom-built websites and web applications with clean, efficient, and maintainable code."
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "SEO Optimization",
      description: "Improve your site's visibility and rankings with effective search engine optimization strategies."
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Performance Optimization",
      description: "Speed up your website for better user experience and improved search rankings."
    }
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">My Services</p>
          <h2 className="text-3xl md:text-4xl font-bold">What I Offer</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I provide comprehensive web development services to help you establish a strong online presence.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard3D
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
