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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://siteperhour.com/#organization",
      "name": "SitePerHour",
      "alternateName": ["Site Per Hour", "SitePerHour Web Development"],
      "description": "Professional web development agency based in Chisinau, Moldova. We build custom websites, Shopify stores, WordPress solutions, and web applications for clients worldwide.",
      "url": "https://siteperhour.com",
      "logo": "https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0005_4_a-vibrant-psychedelic-illustrated-festiv_D5lOUmxbTqKV5GydP5fB0w_4fFsKLR4RrSArj5GnsbR5A.jpeg",
      "image": "https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0005_4_a-vibrant-psychedelic-illustrated-festiv_D5lOUmxbTqKV5GydP5fB0w_4fFsKLR4RrSArj5GnsbR5A.jpeg",
      "founder": {
        "@type": "Person",
        "name": "Mihail Mihail",
        "jobTitle": "Full-Stack Web Developer & Founder"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chisinau",
        "addressCountry": "MD"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+37379331104",
          "email": "mihail.mihai2001@gmail.com",
          "contactType": "customer service",
          "availableLanguage": ["English", "Romanian", "Russian"]
        }
      ],
      "areaServed": "Worldwide",
      "serviceType": ["Web Development", "Shopify Development", "WordPress Development", "CMS Development", "Website Maintenance"],
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Web Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Basic Website Package",
            "price": "497",
            "priceCurrency": "USD",
            "url": "https://siteperhour.com/pricing/basic"
          },
          {
            "@type": "Offer",
            "name": "Medium Website Package",
            "price": "997",
            "priceCurrency": "USD",
            "url": "https://siteperhour.com/pricing/medium"
          },
          {
            "@type": "Offer",
            "name": "Premium Website Package",
            "price": "1997",
            "priceCurrency": "USD",
            "url": "https://siteperhour.com/pricing/premium"
          }
        ]
      },
      "sameAs": [
        "https://github.com/JeremyHustlin"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who makes good websites in Moldova?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SitePerHour, founded by Mihail Mihail in Chisinau, Moldova, is a professional web development agency that creates high-quality custom websites, Shopify stores, WordPress solutions, and web applications for businesses worldwide."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a professional website cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SitePerHour offers web development packages starting from $497 for a basic 5-page website, $997 for a medium package with CMS and e-commerce, and $1,997 for a premium enterprise package with unlimited pages. Custom quotes are also available."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "At SitePerHour, basic websites are delivered in 7-10 days, medium packages in 10-14 days, and premium projects in 14-21 days. Custom projects have flexible timelines based on requirements."
          }
        },
        {
          "@type": "Question",
          "name": "Do you build Shopify stores?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SitePerHour specializes in Shopify store development including custom themes, payment integration, mobile optimization, and e-commerce features. Packages start from $1,497."
          }
        },
        {
          "@type": "Question",
          "name": "Can you build a WordPress website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SitePerHour offers full WordPress development services including custom themes, plugin development, WooCommerce integration, and performance optimization. Business websites start from $1,297."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer website maintenance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, SitePerHour offers monthly website maintenance plans starting from $97/month, including security monitoring, updates, backups, and performance optimization."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="SitePerHour - Professional Web Development Services | Custom Websites & E-commerce"
        description="Expert web development agency in Moldova. Custom websites, Shopify stores, WordPress development, CMS solutions, and maintenance. Fast delivery, modern tech stack, worldwide clients."
        keywords="web development Moldova, custom websites, e-commerce development, Shopify development, WordPress development, CMS solutions, website maintenance, professional web design, web developer Chisinau, site development"
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
