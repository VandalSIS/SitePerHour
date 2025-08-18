import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PricingCard from "@/components/PricingCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Code, Smartphone, Zap, Mail, Phone, Shield, Database, Crown, Rocket } from "lucide-react";

const PricingPremium = () => {
  const premiumFeatures = [
    "Everything from Medium Package",
    "Unlimited Pages",
    "Enterprise SEO Optimization",
    "Advanced E-commerce Store",
    "Custom Payment Integration",
    "Multi-language Support",
    "Advanced Analytics Dashboard",
    "Customer Support Portal",
    "Automated Email Marketing",
    "API Integrations",
    "Advanced Security Features",
    "Priority Support (24/7)",
    "3 Months Free Support",
    "Performance Monitoring",
    "Custom Development",
    "White-label Solutions",
    "Database Management",
    "Advanced Backup & Recovery"
  ];

  const exclusiveFeatures = [
    {
      icon: <Crown className="h-6 w-6 text-primary" />,
      title: "White-label Solution",
      description: "Complete branding customization with your company logo and colors throughout the entire platform."
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Custom Development",
      description: "Bespoke features and functionality tailored specifically to your business requirements and workflow."
    },
    {
      icon: <Database className="h-6 w-6 text-primary" />,
      title: "Advanced Database Management",
      description: "Complex data structures, reporting systems, and advanced database optimization for enterprise needs."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Enterprise Security",
      description: "Advanced security protocols, SSL certificates, firewall protection, and regular security audits."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premium Web Development Package",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Premium enterprise website development package with unlimited pages, advanced e-commerce, and custom development",
    "offers": {
      "@type": "Offer",
      "price": "1997",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Premium Website Package - Enterprise Web Development Solutions"
        description="Our Premium package offers unlimited pages, advanced e-commerce, custom development, and enterprise features. Perfect for large businesses and organizations."
        keywords="premium website package, enterprise web development, custom web applications, advanced e-commerce, unlimited pages, white-label solutions"
        canonicalUrl="/pricing/premium"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0005_1_a-psychedelic-illustrated-festival-poste_HmtKUl2mQYWoTIcyOPpIGQ_4fFsKLR4RrSArj5GnsbR5A.jpeg')`,
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
            <Badge className="mb-6 bg-gradient-to-r from-primary/20 to-primary/30 text-primary border border-primary/30 text-sm px-4 py-2">PREMIUM PACKAGE - ENTERPRISE SOLUTION</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white drop-shadow-2xl">Enterprise-Grade</span>
              <span className="text-primary block drop-shadow-2xl">Web Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              The ultimate package for businesses that demand the best. Unlimited pages, custom development, 
              advanced e-commerce, and enterprise-level features with priority support.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>14-21 Days Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Crown className="h-5 w-5 text-primary" />
                <span>Unlimited Pages</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Rocket className="h-5 w-5 text-primary" />
                <span>Custom Development</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>24/7 Priority Support</span>
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
              title="Premium Package"
              description="Enterprise-grade solution with unlimited possibilities"
              price="$1,997"
              originalPrice="$2,997"
              features={premiumFeatures}
              highlighted={true}
              badge="ENTERPRISE"
              buttonText="Get Premium Package"
              onSelect={() => window.location.href = '#contact'}
            />
          </div>
        </div>
      </section>

      {/* Exclusive Features Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Exclusive Premium Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Access enterprise-level features designed for large-scale businesses and organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {exclusiveFeatures.map((feature, index) => (
              <Card key={index} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {feature.icon}
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Features Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Capabilities</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive features for businesses that need advanced functionality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5 text-primary" />
                  Advanced E-commerce
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Full-featured online store with inventory management, multi-currency support, 
                  advanced shipping options, and comprehensive reporting.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  API Integrations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Connect with third-party services, CRM systems, payment gateways, 
                  and any external APIs your business relies on.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Advanced Analytics
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Comprehensive analytics dashboard with custom reporting, user behavior tracking, 
                  and business intelligence insights.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-5 w-5 text-primary" />
                  Multi-language Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Reach global audiences with full multi-language support, 
                  localized content management, and currency conversion.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  Marketing Automation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Automated email campaigns, lead nurturing sequences, 
                  and customer relationship management tools.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="h-5 w-5 text-primary" />
                  Customer Portal
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Dedicated customer support portal with ticket system, 
                  knowledge base, and self-service capabilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-16 bg-gradient-to-r from-primary/5 to-transparent">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Investment That Pays Off</h2>
            <p className="text-muted-foreground mb-8">
              Our Premium package isn't just a website—it's a complete business solution that drives results.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">300%</div>
                <p className="text-muted-foreground">Average ROI increase for our Premium clients</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Priority support with dedicated account manager</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                <p className="text-muted-foreground">Uptime guarantee with enterprise hosting</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for Enterprise Success?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join industry leaders who trust our Premium package for their most critical web projects. 
            Get unlimited possibilities with enterprise-grade support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Crown className="h-4 w-4 mr-2" />
              <a href="#contact">Start Premium Project</a>
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+1234567890">Schedule Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingPremium;
