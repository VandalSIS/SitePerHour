import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Database, Edit, Users, Shield, Zap, Globe, BarChart, Smartphone } from "lucide-react";

const ServiceCMS = () => {
  const cmsOptions = [
    {
      name: "WordPress",
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: "World's most popular CMS with extensive customization options",
      features: ["60K+ plugins", "SEO-friendly", "E-commerce ready", "User-friendly"],
      price: "From $897"
    },
    {
      name: "Drupal",
      icon: <Shield className="h-8 w-8 text-primary" />,
      description: "Enterprise-grade CMS for complex, high-traffic websites",
      features: ["High security", "Scalable", "Multilingual", "API-first"],
      price: "From $1,497"
    },
    {
      name: "Joomla",
      icon: <Users className="h-8 w-8 text-primary" />,
      description: "Flexible CMS perfect for community and membership sites",
      features: ["User management", "Multilingual", "Flexible", "Extensions"],
      price: "From $1,197"
    },
    {
      name: "Strapi",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "Modern headless CMS for API-driven applications",
      features: ["Headless", "API-first", "Developer-friendly", "Modern"],
      price: "From $1,797"
    },
    {
      name: "Contentful",
      icon: <Zap className="h-8 w-8 text-primary" />,
      description: "Cloud-based headless CMS for omnichannel content delivery",
      features: ["Cloud-based", "Scalable", "API-driven", "Multi-platform"],
      price: "From $1,597"
    },
    {
      name: "Custom CMS",
      icon: <Edit className="h-8 w-8 text-primary" />,
      description: "Tailored content management solution for unique requirements",
      features: ["Fully custom", "Tailored workflow", "Unlimited features", "Your brand"],
      price: "Custom Quote"
    }
  ];

  const benefits = [
    {
      icon: <Edit className="h-6 w-6 text-primary" />,
      title: "Easy Content Management",
      description: "Intuitive interfaces that make updating your website content simple and efficient."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Multi-User Access",
      description: "Role-based permissions allowing multiple team members to contribute safely."
    },
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Mobile-Friendly Admin",
      description: "Manage your content on-the-go with responsive admin interfaces."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "SEO Optimization",
      description: "Built-in SEO tools to help your content rank higher in search engines."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Security Features",
      description: "Advanced security measures to protect your content and user data."
    },
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Scalable Solutions",
      description: "CMS solutions that grow with your business and content needs."
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Content Management System Development",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Professional CMS development and integration services for easy content management and website administration",
    "serviceType": "Web Development",
    "areaServed": "Worldwide"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Content Management System (CMS) Development Services"
        description="Professional CMS development and integration services. WordPress, Drupal, Joomla, and custom CMS solutions for easy content management and website administration."
        keywords="CMS development, content management system, WordPress CMS, Drupal development, custom CMS, website management, content administration"
        canonicalUrl="/services/cms"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="pt-32 pb-16 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://aixtitpk7yzp6scq.public.blob.vercel-storage.com/0004_1_a-retro-style-concert-poster-featuring-t_inzSp_Z_QCmB9lDW5uPRng_IFHLfrBcR-Sbv90Kp4xeYA.jpeg')`,
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
            <Badge className="mb-6 bg-primary/20 text-primary border border-primary/30 text-sm px-4 py-2">CMS DEVELOPMENT</Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              <span className="text-white drop-shadow-2xl">Content Management</span>
              <span className="text-primary block drop-shadow-2xl">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
              Take control of your website content with powerful, user-friendly content management systems. 
              We implement and customize CMS solutions that make updating your site effortless.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Edit className="h-5 w-5 text-primary" />
                <span>Easy Editing</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="h-5 w-5 text-primary" />
                <span>Multi-User Access</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <BarChart className="h-5 w-5 text-primary" />
                <span>SEO Optimized</span>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Get Your CMS Solution</a>
            </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CMS Options Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Perfect CMS</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work with all major content management systems to find the perfect fit for your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cmsOptions.map((cms, index) => (
              <Card key={index} className="transition-all hover:scale-105 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4">{cms.icon}</div>
                  <CardTitle className="text-xl">{cms.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{cms.price}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">{cms.description}</p>
                  <ul className="space-y-2 mb-6">
                    {cms.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Choose {cms.name}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why You Need a CMS</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empower your team to manage content efficiently while maintaining design consistency
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {benefit.icon}
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">CMS Comparison Guide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Not sure which CMS is right for you? Here's a quick comparison to help you decide
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Traditional CMS</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-primary">WordPress</h4>
                    <p className="text-muted-foreground text-sm">Best for: Blogs, business websites, e-commerce stores</p>
                    <p className="text-muted-foreground text-sm">Pros: Easy to use, huge community, extensive plugins</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-primary">Drupal</h4>
                    <p className="text-muted-foreground text-sm">Best for: Enterprise websites, complex data structures</p>
                    <p className="text-muted-foreground text-sm">Pros: Highly secure, scalable, powerful content modeling</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-primary">Joomla</h4>
                    <p className="text-muted-foreground text-sm">Best for: Community sites, membership platforms</p>
                    <p className="text-muted-foreground text-sm">Pros: Built-in user management, multilingual support</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Headless CMS</h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-primary">Strapi</h4>
                    <p className="text-muted-foreground text-sm">Best for: API-driven applications, modern web apps</p>
                    <p className="text-muted-foreground text-sm">Pros: Developer-friendly, self-hosted, highly customizable</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-primary">Contentful</h4>
                    <p className="text-muted-foreground text-sm">Best for: Multi-platform content, mobile apps</p>
                    <p className="text-muted-foreground text-sm">Pros: Cloud-based, excellent API, global CDN</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-semibold mb-2 text-primary">Custom CMS</h4>
                    <p className="text-muted-foreground text-sm">Best for: Unique workflows, specific requirements</p>
                    <p className="text-muted-foreground text-sm">Pros: Completely tailored, perfect fit, full control</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our CMS Implementation Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Streamlined process to get your content management system up and running efficiently
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Requirements Analysis</h3>
              <p className="text-muted-foreground text-sm">
                Understanding your content needs, workflow, and technical requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">CMS Selection & Setup</h3>
              <p className="text-muted-foreground text-sm">
                Choosing the right CMS platform and configuring it for your specific needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Customization & Integration</h3>
              <p className="text-muted-foreground text-sm">
                Customizing the CMS interface and integrating with your existing systems.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Training & Launch</h3>
              <p className="text-muted-foreground text-sm">
                Team training, documentation, and ongoing support for successful adoption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Take Control of Your Content?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Stop depending on developers for every content update. Get a powerful CMS that puts you in control 
            while maintaining the professional look and feel of your website.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Database className="h-4 w-4 mr-2" />
              <a href="#contact">Get Your CMS Solution</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="/pricing/custom">Compare CMS Options</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceCMS;
