import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
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
      "alternateName": ["Site Per Hour", "SitePerHour Web Development & Digital Marketing"],
      "description": "Full-service digital agency in Chișinău, Moldova. Web development, mobile apps, Google & Meta Ads, SEO and digital marketing. We deliver websites, e-commerce stores and ad campaigns that convert.",
      "url": "https://siteperhour.com",
      "logo": "https://siteperhour.com/favicon.ico",
      "image": "https://siteperhour.com/hero-bg.svg",
      "founder": {
        "@type": "Person",
        "name": "Mihail Mihail",
        "jobTitle": "Full-Stack Web Developer & Digital Marketing Specialist",
        "sameAs": [
          "https://www.facebook.com/profile.php?id=100005960117941",
          "https://github.com/JeremyHustlin"
        ]
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chișinău",
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
      "serviceType": [
        "Web Development", "Shopify Development", "WordPress Development",
        "Webflow Development", "Tilda Development", "Mobile App Development",
        "Google Ads", "Meta Ads (Facebook & Instagram)", "SEO Optimization",
        "Digital Marketing", "CMS Development", "Website Maintenance",
        "E-commerce Development", "Branding & UI/UX Design"
      ],
      "priceRange": "$$",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital Services Catalog",
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
          },
          {
            "@type": "Offer",
            "name": "Custom Quote (Web, Apps, Ads, SEO)",
            "url": "https://siteperhour.com/pricing/custom"
          }
        ]
      },
      "sameAs": [
        "https://github.com/JeremyHustlin",
        "https://www.facebook.com/profile.php?id=100005960117941"
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
            "text": "SitePerHour, founded by Mihail Mihail in Chișinău, Moldova, is a full-service digital agency that builds high-quality websites, mobile applications, and digital ad campaigns (Google Ads, Meta Ads) for clients in 8+ countries."
          }
        },
        {
          "@type": "Question",
          "name": "What services does SitePerHour offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SitePerHour offers full-service digital solutions: web development (React, Next.js, WordPress, Webflow, Shopify, Tilda), mobile and web apps, Google Ads, Meta Ads (Facebook & Instagram), SEO, branding, and ongoing website maintenance."
          }
        },
        {
          "@type": "Question",
          "name": "How much does a professional website cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SitePerHour offers transparent pricing: $497 for a basic 5-page website, $997 for a medium CMS/e-commerce package, $1,997 for a premium enterprise build. Custom quotes available for mobile apps, ad campaigns and complex projects."
          }
        },
        {
          "@type": "Question",
          "name": "Do you run Google Ads and Meta Ads campaigns?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. SitePerHour manages full Google Ads campaigns (Search, Display, YouTube, Shopping) and Meta Ads (Facebook & Instagram) with creative production, audience targeting and ongoing ROAS optimization."
          }
        },
        {
          "@type": "Question",
          "name": "What platforms do you build on?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We build on React/Next.js, WordPress, WooCommerce, Webflow, Tilda and Shopify — depending on what fits your business best. We've shipped projects on all these stacks for international clients."
          }
        },
        {
          "@type": "Question",
          "name": "How long does it take to build a website?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Basic websites in 7-10 days, medium projects in 10-14 days, premium builds in 14-21 days. Mobile apps and complex web apps have flexible timelines based on scope."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="SitePerHour — Web Development, Digital Ads & Marketing | Moldova-Based, Global Clients"
        description="Full-service digital agency: web development (React, WordPress, Webflow, Shopify), mobile apps, Google & Meta Ads, SEO. Based in Chișinău, serving clients in 8+ countries."
        keywords="web development Moldova, Chisinau web developer, Google Ads Moldova, Meta Ads agency, Facebook Ads, Shopify development, WordPress development, Webflow developer, mobile app development, SEO Moldova, digital marketing, full-stack developer Chisinau, react developer, ecommerce development"
        canonicalUrl="/"
        structuredData={structuredData}
      />
      <Navbar />
      <HeroSection />
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
        <TechStackSection />
      </SectionLayout>
      <SectionLayout>
        <ProcessSection />
      </SectionLayout>
      <SectionLayout>
        <TestimonialsSection />
      </SectionLayout>
      <SectionLayout>
        <SplineSection />
      </SectionLayout>
      <SectionLayout>
        <FAQSection />
      </SectionLayout>
      <SectionLayout>
        <CTABanner />
      </SectionLayout>
      <SectionLayout>
        <ContactSection />
      </SectionLayout>
      <Footer />
    </div>
  );
};

export default Index;
