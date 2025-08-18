import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Code, Zap, Shield, Users, Globe, BarChart, Smartphone } from "lucide-react";

const ServiceWordPress = () => {
  const features = [
    {
      icon: <Palette className="h-6 w-6 text-primary" />,
      title: "Custom Theme Development",
      description: "Bespoke WordPress themes designed specifically for your brand and business needs."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Plugin Development",
      description: "Custom plugins and functionality to extend your WordPress site's capabilities."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Responsive Design",
      description: "Mobile-first approach ensuring perfect display across all devices and screen sizes."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your site rank higher in search engines."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Security Hardening",
      description: "Advanced security measures to protect your site from threats and vulnerabilities."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Performance Optimization",
      description: "Speed optimization techniques for faster loading times and better user experience."
    }
  ];

  const services = [
    {
      title: "Business Websites",
      description: "Professional corporate websites with custom design and functionality",
      price: "From $1,297"
    },
    {
      title: "E-commerce Stores",
      description: "WooCommerce integration for online selling capabilities",
      price: "From $1,997"
    },
    {
      title: "Blog Platforms",
      description: "Content-rich blogging platforms with advanced publishing features",
      price: "From $897"
    },
    {
      title: "Membership Sites",
      description: "User registration, login, and premium content access systems",
      price: "From $2,497"
    },
    {
      title: "Multi-site Networks",
      description: "WordPress multisite setup for managing multiple websites",
      price: "From $1,797"
    },
    {
      title: "Custom Applications",
      description: "Complex web applications built on WordPress framework",
      price: "Custom Quote"
    }
  ];

  const whyWordPress = [
    { stat: "43%", label: "Of all websites use WordPress" },
    { stat: "60K+", label: "Free plugins available" },
    { stat: "11K+", label: "Free themes available" },
    { stat: "500+", label: "New WordPress sites daily" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "WordPress Development Services",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Professional WordPress development with custom themes, plugins, and optimized solutions for business websites",
    "serviceType": "Web Development",
    "areaServed": "Worldwide"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Expert WordPress Development Services - Custom Themes & Plugins"
        description="Professional WordPress development with custom themes, plugin development, WooCommerce integration, and performance optimization. Transform your business with powerful WordPress solutions."
        keywords="WordPress development, custom WordPress themes, WordPress plugins, WooCommerce development, WordPress optimization, business websites, content management system"
        canonicalUrl="/services/wordpress"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0002_4_a-psychedelic-retro-poster-showcasing-a-_6muHnJF_QVi-4oMDI7d7Dg_bqBxMixBQBqAS26DXoEZ9A.jpeg')`,
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
            <Badge className="mb-6 bg-primary/20 text-primary border border-primary/30 text-sm px-4 py-2">WORDPRESS DEVELOPMENT</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white drop-shadow-2xl">Professional</span>
              <span className="text-primary block drop-shadow-2xl">WordPress Solutions</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Harness the power of WordPress with custom themes, plugins, and optimized solutions. 
              We create scalable, secure, and SEO-friendly websites that grow with your business.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="h-5 w-5 text-primary" />
                <span>43% of Web</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>Easy to Manage</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-5 w-5 text-primary" />
                <span>High Performance</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Secure & Reliable</span>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Start Your WordPress Project</a>
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WordPress Development Expertise</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive WordPress solutions tailored to your business needs and goals
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

      {/* Services Grid */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WordPress Services We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From simple blogs to complex web applications, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{service.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <Button className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why WordPress Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose WordPress?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">User-Friendly Content Management</h3>
                    <p className="text-muted-foreground">Intuitive admin interface that makes updating your website easy, even for non-technical users.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">SEO-Friendly by Design</h3>
                    <p className="text-muted-foreground">Built-in SEO features and compatibility with top SEO plugins for better search rankings.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Extensive Plugin Ecosystem</h3>
                    <p className="text-muted-foreground">Over 60,000 plugins available to extend functionality without custom development.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scalable & Flexible</h3>
                    <p className="text-muted-foreground">Grows with your business from simple blogs to complex enterprise websites.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {whyWordPress.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-primary mb-2">{item.stat}</div>
                    <p className="text-muted-foreground text-sm">{item.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Work With</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Modern tools and frameworks for cutting-edge WordPress development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <Code className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">PHP & MySQL</h3>
                <p className="text-muted-foreground text-sm">Core WordPress technologies for robust backend development</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Palette className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Custom Themes</h3>
                <p className="text-muted-foreground text-sm">Tailored designs built from scratch or customized existing themes</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">WooCommerce</h3>
                <p className="text-muted-foreground text-sm">E-commerce integration for online stores and digital products</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">REST API</h3>
                <p className="text-muted-foreground text-sm">Modern API integration for headless and hybrid solutions</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our WordPress Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Systematic approach ensuring quality, security, and performance in every project
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Analysis & Planning</h3>
              <p className="text-muted-foreground text-sm">
                Requirements gathering, site architecture planning, and technology selection.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Design & Development</h3>
              <p className="text-muted-foreground text-sm">
                Custom theme creation, plugin development, and functionality implementation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Testing & Optimization</h3>
              <p className="text-muted-foreground text-sm">
                Performance optimization, security hardening, and cross-browser testing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Launch & Maintenance</h3>
              <p className="text-muted-foreground text-sm">
                Site deployment, training, documentation, and ongoing support services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Power Your Business with WordPress?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join millions of businesses worldwide who trust WordPress to power their online presence. 
            Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Globe className="h-4 w-4 mr-2" />
              <a href="#contact">Start Your WordPress Project</a>
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

export default ServiceWordPress;
