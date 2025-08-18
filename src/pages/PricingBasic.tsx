import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Code, Smartphone, Zap, Mail, Phone } from "lucide-react";

const PricingBasic = () => {
  const basicFeatures = [
    "Responsive Design (Mobile & Desktop)",
    "Up to 5 Pages",
    "Contact Form Integration",
    "Basic SEO Optimization",
    "Social Media Links",
    "1 Month Free Support",
    "Fast Loading Speed",
    "SSL Certificate Setup",
    "Google Analytics Integration",
    "Cross-Browser Compatibility"
  ];

  const addOnServices = [
    { name: "Extra Page", price: "$50", description: "Additional custom page" },
    { name: "Advanced SEO", price: "$150", description: "Comprehensive SEO optimization" },
    { name: "E-commerce Integration", price: "$200", description: "Basic online store setup" },
    { name: "Custom Forms", price: "$75", description: "Advanced contact/booking forms" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Basic Web Development Package",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Professional basic website development package with responsive design and essential features",
    "offers": {
      "@type": "Offer",
      "price": "497",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Basic Website Package - Affordable Professional Web Development"
        description="Get a professional responsive website with our Basic package. Includes 5 pages, SEO optimization, contact forms, and 1 month support. Perfect for small businesses and startups."
        keywords="basic website package, affordable web development, small business website, responsive design, professional website, web development services, website design"
        canonicalUrl="/pricing/basic"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0005_3_full-service-psychedelic-illustrated-fes_ScSqOHueQD6606GBpdHbDA_4fFsKLR4RrSArj5GnsbR5A.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Professional overlay for better readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/65 to-black/75"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Banner visibility enhancement */}
            <div className="absolute -inset-8 bg-black/25 rounded-3xl backdrop-blur-sm border border-white/10"></div>
            <div className="relative z-10">
            <Badge className="mb-6 bg-primary/20 text-primary border border-primary/30 text-sm px-4 py-2">BASIC PACKAGE</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white drop-shadow-2xl">Professional Website</span>
              <span className="text-primary block drop-shadow-2xl">Starting Package</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Perfect for small businesses, startups, and personal brands. Get a beautiful, 
              responsive website with all the essential features you need to succeed online.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>7-10 Days Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code className="h-5 w-5 text-primary" />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Smartphone className="h-5 w-5 text-primary" />
                <span>Mobile Responsive</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-5 w-5 text-primary" />
                <span>Fast Loading</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Card Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <PricingCard
              title="Basic Package"
              description="Everything you need to get started online"
              price="$497"
              originalPrice="$697"
              features={basicFeatures}
              buttonText="Start Your Project"
              onSelect={() => window.location.href = '#contact'}
            />
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Basic package includes everything you need for a professional online presence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Responsive Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your website will look perfect on all devices - desktop, tablet, and mobile. 
                  We ensure optimal user experience across all screen sizes.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Performance Optimized
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fast loading speeds and optimized code ensure your visitors don't wait. 
                  We implement best practices for web performance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Contact Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Fully functional contact forms that deliver messages directly to your email. 
                  Stay connected with your potential customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Optional Add-Ons</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Enhance your basic package with these additional services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOnServices.map((addon, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-xl">{addon.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{addon.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who have launched their online presence with our Basic package.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Start Your Project Now</a>
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+1234567890">Call for Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingBasic;
