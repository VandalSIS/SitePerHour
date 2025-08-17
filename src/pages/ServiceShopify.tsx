import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingCart, Palette, Zap, CreditCard, BarChart, Users, Shield, Smartphone } from "lucide-react";

const ServiceShopify = () => {
  const features = [
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "Custom Store Design",
      description: "Beautiful, conversion-optimized Shopify themes tailored to your brand identity."
    },
    {
      icon: <CreditCard className="h-6 w-6 text-primary" />,
      title: "Payment Integration",
      description: "Secure payment processing with multiple gateways including Stripe, PayPal, and Shopify Payments."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Mobile Optimization",
      description: "Fully responsive design ensuring perfect shopping experience on all devices."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Analytics & Reporting",
      description: "Advanced analytics setup to track sales, customer behavior, and store performance."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Customer Management",
      description: "Complete customer portal with order tracking, wishlist, and account management."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Security & Compliance",
      description: "SSL certificates, PCI compliance, and advanced security features for safe transactions."
    }
  ];

  const packages = [
    {
      name: "Shopify Starter",
      price: "$1,497",
      features: [
        "Custom theme design",
        "Up to 50 products",
        "Payment gateway setup",
        "Mobile optimization",
        "Basic SEO setup",
        "Social media integration",
        "30 days support"
      ]
    },
    {
      name: "Shopify Business",
      price: "$2,497",
      features: [
        "Everything in Starter",
        "Unlimited products",
        "Advanced customizations",
        "Multi-language support",
        "Advanced analytics",
        "Email marketing setup",
        "60 days support"
      ],
      featured: true
    },
    {
      name: "Shopify Enterprise",
      price: "$3,997",
      features: [
        "Everything in Business",
        "Custom app development",
        "API integrations",
        "Advanced automations",
        "Priority support",
        "Training & documentation",
        "90 days support"
      ]
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify Development Services",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Professional Shopify store development with custom design, payment integration, and e-commerce optimization",
    "serviceType": "E-commerce Development",
    "areaServed": "Worldwide"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Professional Shopify Development Services - Custom E-commerce Solutions"
        description="Expert Shopify store development with custom themes, payment integration, mobile optimization, and advanced e-commerce features. Transform your business with professional online stores."
        keywords="Shopify development, e-commerce website, online store development, Shopify themes, Shopify customization, e-commerce solutions, online shopping, Shopify experts"
        canonicalUrl="/services/shopify"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0002_3_a-psychedelic-retro-poster-design-showca_LhVZLQB_QB6tBYCGaSg1qg_bqBxMixBQBqAS26DXoEZ9A.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">SHOPIFY DEVELOPMENT</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional
              <span className="text-primary block">Shopify Stores</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your business with a custom Shopify store designed to convert visitors into customers. 
              We create beautiful, fast, and optimized e-commerce experiences that drive sales.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <ShoppingCart className="h-5 w-5 text-primary" />
                <span>Conversion Optimized</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Palette className="h-5 w-5 text-primary" />
                <span>Custom Design</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-5 w-5 text-primary" />
                <span>Fast Performance</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Secure Payments</span>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Start Your Shopify Store</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shopify Development Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to create a successful online store that drives sales and grows your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
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

      {/* Why Shopify Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Shopify?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Trusted by 2M+ Businesses</h3>
                    <p className="text-muted-foreground">Join millions of successful businesses worldwide using Shopify to sell online.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Built-in Payment Processing</h3>
                    <p className="text-muted-foreground">Accept payments from over 100 gateways with secure, PCI-compliant processing.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">99.9% Uptime Guarantee</h3>
                    <p className="text-muted-foreground">Enterprise-level hosting with automatic updates and 24/7 monitoring.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Extensive App Ecosystem</h3>
                    <p className="text-muted-foreground">Access thousands of apps to extend your store's functionality as you grow.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">2M+</div>
                  <p className="text-muted-foreground">Active Stores</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">$496B+</div>
                  <p className="text-muted-foreground">Sales Generated</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-muted-foreground">Uptime</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-2xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Payment Gateways</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shopify Development Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your business needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`transition-all hover:scale-105 ${pkg.featured ? 'border-primary shadow-xl' : ''}`}>
                {pkg.featured && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    MOST POPULAR
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="text-primary">✓</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full mt-6 ${pkg.featured ? 'bg-primary hover:bg-primary/90' : ''}`}>
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From concept to launch, we follow a proven process to ensure your Shopify store succeeds
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Discovery & Planning</h3>
              <p className="text-muted-foreground text-sm">
                We understand your business, target audience, and goals to create the perfect strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Design & Development</h3>
              <p className="text-muted-foreground text-sm">
                Custom theme development with your brand identity and conversion optimization in mind.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Testing & Optimization</h3>
              <p className="text-muted-foreground text-sm">
                Thorough testing across devices and browsers, plus performance optimization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Launch & Support</h3>
              <p className="text-muted-foreground text-sm">
                Store launch with training, documentation, and ongoing support for your success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Selling Online?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of successful businesses using Shopify to grow their online presence. 
            Let's build your professional e-commerce store today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <ShoppingCart className="h-4 w-4 mr-2" />
              <a href="#contact">Start Your Store Now</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="/pricing/custom">Get Custom Quote</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceShopify;
