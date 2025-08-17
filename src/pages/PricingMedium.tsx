import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Code, Smartphone, Zap, Mail, Phone, Shield, Database } from "lucide-react";

const PricingMedium = () => {
  const mediumFeatures = [
    "Everything from Basic Package",
    "Up to 10 Pages",
    "Advanced SEO Optimization",
    "Content Management System (CMS)",
    "E-commerce Ready (Basic Store)",
    "Advanced Contact Forms",
    "Social Media Integration",
    "Blog Setup & Management",
    "Google My Business Setup",
    "2 Months Free Support",
    "Performance Optimization",
    "Security Features",
    "Backup System",
    "Custom Graphics & Icons"
  ];

  const comparisonFeatures = [
    { feature: "Number of Pages", basic: "5 Pages", medium: "10 Pages", premium: "Unlimited" },
    { feature: "SEO Optimization", basic: "Basic", medium: "Advanced", premium: "Enterprise" },
    { feature: "E-commerce", basic: "Not Included", medium: "Basic Store", premium: "Advanced Store" },
    { feature: "CMS Access", basic: "No", medium: "Yes", premium: "Yes + Training" },
    { feature: "Support Duration", basic: "1 Month", medium: "2 Months", premium: "3 Months" },
    { feature: "Blog Setup", basic: "No", medium: "Yes", premium: "Yes + Content" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Medium Web Development Package",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Comprehensive medium website development package with CMS, e-commerce, and advanced features",
    "offers": {
      "@type": "Offer",
      "price": "997",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Medium Website Package - Advanced Web Development Solutions"
        description="Upgrade to our Medium package for advanced features including CMS, e-commerce, blog setup, and enhanced SEO. Perfect for growing businesses."
        keywords="medium website package, advanced web development, CMS website, e-commerce website, business website, blog setup, professional web design"
        canonicalUrl="/pricing/medium"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0001_2_seo-growth-poster-vintage-gig-poster-dig_RDd2FWM7Tx6TUpDWC1hEQw_Rd-c5ybsRD2rQFytjm4nwg.jpeg')`,
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
            <Badge className="mb-6 bg-primary/20 text-primary border border-primary/30 text-sm px-4 py-2">MEDIUM PACKAGE - MOST POPULAR</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white drop-shadow-2xl">Advanced Business</span>
              <span className="text-primary block drop-shadow-2xl">Website Solution</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Perfect for growing businesses that need advanced features like CMS, e-commerce capabilities, 
              and comprehensive SEO optimization. Everything you need to scale your online presence.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>10-14 Days Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Database className="h-5 w-5 text-primary" />
                <span>CMS Included</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>E-commerce Ready</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-5 w-5 text-primary" />
                <span>Advanced SEO</span>
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
              title="Medium Package"
              description="Advanced features for growing businesses"
              price="$997"
              originalPrice="$1,497"
              features={mediumFeatures}
              highlighted={true}
              badge="MOST POPULAR"
              buttonText="Choose Medium Package"
              onSelect={() => window.location.href = '#contact'}
            />
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Advanced Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Take your online presence to the next level with these powerful features
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Content Management System
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Easy-to-use CMS that allows you to update your website content, add new pages, 
                  and manage your site without technical knowledge.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  E-commerce Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Basic online store setup with product catalog, shopping cart, and payment processing. 
                  Start selling your products or services online immediately.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  Advanced SEO
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive SEO optimization including keyword research, meta tags, 
                  schema markup, and Google My Business setup for better search rankings.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Blog Platform
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Professional blog setup with categories, tags, and SEO optimization. 
                  Share your expertise and improve your search engine visibility.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Advanced Forms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Custom contact forms, booking systems, and lead capture forms with 
                  advanced validation and email automation capabilities.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Social Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete social media integration with sharing buttons, feeds, 
                  and automated posting capabilities to grow your social presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Package Comparison</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our Medium package compares to other options
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold">Basic</th>
                        <th className="text-center p-4 font-semibold bg-primary/5">Medium</th>
                        <th className="text-center p-4 font-semibold">Premium</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((item, index) => (
                        <tr key={index} className="border-b">
                          <td className="p-4 font-medium">{item.feature}</td>
                          <td className="text-center p-4 text-muted-foreground">{item.basic}</td>
                          <td className="text-center p-4 bg-primary/5 font-semibold text-primary">{item.medium}</td>
                          <td className="text-center p-4 text-muted-foreground">{item.premium}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Business?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            The Medium package is perfect for businesses ready to take their online presence seriously. 
            Get advanced features and comprehensive support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Start Your Medium Project</a>
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+1234567890">Discuss Your Needs</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingMedium;
