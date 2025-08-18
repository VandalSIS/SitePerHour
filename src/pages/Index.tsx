import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";
import SplineSection from "@/components/SplineSection";
import SEOHead from "@/components/SEOHead";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SitePerHour - Professional Web Development Services",
    "description": "Expert web development services including custom websites, e-commerce stores, Shopify development, WordPress solutions, and ongoing maintenance.",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour",
      "url": "https://siteperhour.vercel.app"
    },
    "areaServed": "Worldwide",
    "serviceType": "Web Development"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="SitePerHour - Professional Web Development Services | Custom Websites & E-commerce"
        description="Expert web development services including custom websites, Shopify stores, WordPress development, CMS solutions, and ongoing maintenance. Transform your business with professional web solutions."
        keywords="web development, custom websites, e-commerce development, Shopify development, WordPress development, CMS solutions, website maintenance, professional web design"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Navbar />
      <HeroSection />
      <SplineSection />
      <SectionLayout>
        <AboutSection />
      </SectionLayout>
      <SectionLayout>
        <ServicesSection />
      </SectionLayout>
      <SectionLayout>
        <ProjectsSection />
      </SectionLayout>
      <SectionLayout>
        <ContactSection />
      </SectionLayout>
      <Footer />
    </div>
  );
};

export default Index;
