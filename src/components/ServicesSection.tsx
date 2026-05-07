import { Code, Layout, BarChart, Rocket } from "lucide-react";
import ServiceCard3D from "./ServiceCard3D";
import { useTranslation } from "react-i18next";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Layout className="h-10 w-10 text-primary" />,
      title: t('services.webDesign'),
      description: t('services.webDesignDesc'),
    },
    {
      icon: <Code className="h-10 w-10 text-primary" />,
      title: t('services.webDev'),
      description: t('services.webDevDesc'),
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: t('services.seo'),
      description: t('services.seoDesc'),
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: t('services.performance'),
      description: t('services.performanceDesc'),
    },
  ];

  return (
    <section id="services" className="section-spacing">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">{t('services.badge')}</p>
          <h2 className="text-3xl md:text-4xl font-bold">{t('services.title')}</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('services.subtitle')}
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
