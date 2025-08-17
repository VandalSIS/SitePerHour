import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Zap, BarChart, RefreshCw, AlertTriangle, CheckCircle, Clock, Phone } from "lucide-react";

const ServiceMaintenance = () => {
  const maintenanceServices = [
    {
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
      title: "Regular Updates",
      description: "Keep your website secure and up-to-date with the latest software versions, plugins, and security patches."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Security Monitoring",
      description: "24/7 security monitoring with malware scanning, firewall management, and threat detection."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Performance Optimization",
      description: "Regular performance checks and optimizations to ensure fast loading times and smooth user experience."
    },
    {
      icon: <BarChart className="h-6 w-6 text-primary" />,
      title: "Analytics & Reporting",
      description: "Monthly reports on website performance, traffic analytics, and security status with recommendations."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-primary" />,
      title: "Backup & Recovery",
      description: "Automated daily backups with quick recovery options to protect your website data and content."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-primary" />,
      title: "Uptime Monitoring",
      description: "24/7 uptime monitoring with instant alerts and quick response to any downtime issues."
    }
  ];

  const maintenancePlans = [
    {
      name: "Basic Maintenance",
      price: "$97/month",
      description: "Essential maintenance for small websites",
      features: [
        "Monthly WordPress/CMS updates",
        "Weekly security scans",
        "Monthly backups",
        "Basic uptime monitoring",
        "Email support",
        "Performance monitoring",
        "Monthly reports"
      ],
      ideal: "Perfect for small business websites and blogs"
    },
    {
      name: "Professional Maintenance",
      price: "$197/month",
      description: "Comprehensive maintenance for business websites",
      features: [
        "Everything in Basic",
        "Weekly CMS updates",
        "Daily security monitoring",
        "Weekly backups",
        "Advanced uptime monitoring",
        "Priority support",
        "Performance optimization",
        "Plugin/theme updates",
        "Content updates (2 hours/month)"
      ],
      ideal: "Ideal for growing businesses and e-commerce sites",
      featured: true
    },
    {
      name: "Enterprise Maintenance",
      price: "$397/month",
      description: "Complete maintenance for mission-critical websites",
      features: [
        "Everything in Professional",
        "Daily CMS updates",
        "Real-time security monitoring",
        "Daily backups + offsite storage",
        "Advanced performance monitoring",
        "24/7 phone support",
        "Emergency response",
        "Unlimited content updates",
        "SEO monitoring",
        "Custom development (4 hours/month)"
      ],
      ideal: "Best for large businesses and high-traffic websites"
    }
  ];

  const whyMaintenance = [
    { stat: "43%", label: "Of cyber attacks target small businesses" },
    { stat: "47%", label: "Of users won't wait more than 2 seconds for a page to load" },
    { stat: "94%", label: "Of first impressions are design-related" },
    { stat: "75%", label: "Of users judge credibility based on website design" }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Maintenance Services",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Professional website maintenance services including security monitoring, updates, backups, and performance optimization",
    "serviceType": "Website Maintenance",
    "areaServed": "Worldwide"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Professional Website Maintenance Services - Keep Your Site Secure & Updated"
        description="Reliable website maintenance services including security monitoring, regular updates, backups, performance optimization, and 24/7 support. Keep your website running smoothly."
        keywords="website maintenance, website support, security monitoring, website updates, website backup, performance optimization, uptime monitoring"
        canonicalUrl="/services/maintenance"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">WEBSITE MAINTENANCE</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Keep Your Website
              <span className="text-primary block">Running Perfectly</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Focus on your business while we handle the technical details. Our comprehensive maintenance 
              services ensure your website stays secure, fast, and up-to-date 24/7.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>24/7 Security</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-5 w-5 text-primary" />
                <span>Peak Performance</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>Regular Updates</span>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Protect Your Website Today</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Complete Website Care</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive maintenance services to keep your website secure, fast, and functioning optimally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {service.icon}
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Website Maintenance Matters</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Security Vulnerabilities</h3>
                    <p className="text-muted-foreground">Websites face over 30,000 security attacks daily. Regular updates and monitoring prevent breaches.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Performance Degradation</h3>
                    <p className="text-muted-foreground">Without maintenance, websites slow down over time, affecting user experience and SEO rankings.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Outdated Software</h3>
                    <p className="text-muted-foreground">CMS platforms, plugins, and themes need regular updates for security and compatibility.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Data Loss Risk</h3>
                    <p className="text-muted-foreground">Without proper backups, you risk losing all your website data and content permanently.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {whyMaintenance.map((item, index) => (
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

      {/* Maintenance Plans */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Maintenance Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible maintenance plans designed to fit your website's needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {maintenancePlans.map((plan, index) => (
              <Card key={index} className={`transition-all hover:scale-105 ${plan.featured ? 'border-primary shadow-xl' : ''}`}>
                {plan.featured && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    MOST POPULAR
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{plan.price}</div>
                  <p className="text-muted-foreground text-sm">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-muted-foreground mb-4 p-3 bg-secondary/50 rounded">
                    {plan.ideal}
                  </div>
                  <Button className={`w-full ${plan.featured ? 'bg-primary hover:bg-primary/90' : ''}`}>
                    Choose {plan.name}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included in Every Plan</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Essential maintenance services that every website needs to stay healthy and secure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <RefreshCw className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Regular Updates</h3>
                <p className="text-muted-foreground text-sm">Core, plugin, and theme updates to keep your site current</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Security Monitoring</h3>
                <p className="text-muted-foreground text-sm">Continuous monitoring for threats and vulnerabilities</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Performance Checks</h3>
                <p className="text-muted-foreground text-sm">Regular speed and performance optimization</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Backup & Recovery</h3>
                <p className="text-muted-foreground text-sm">Automated backups with quick recovery options</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Emergency Support When You Need It</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Website issues don't wait for business hours. Our emergency support ensures your site is back online fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Site Down?</h3>
                <p className="text-muted-foreground mb-4">We'll get your website back online as quickly as possible with our emergency response team.</p>
                <Badge variant="secondary">2-hour response</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Security Breach?</h3>
                <p className="text-muted-foreground mb-4">Immediate malware removal and security hardening to protect your site and data.</p>
                <Badge variant="secondary">1-hour response</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <RefreshCw className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Data Recovery?</h3>
                <p className="text-muted-foreground mb-4">Quick restoration from our secure backups to minimize downtime and data loss.</p>
                <Badge variant="secondary">30-min response</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Wait for Problems to Start</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Prevent issues before they happen with proactive website maintenance. Your website is your digital storefront - 
            keep it in perfect condition with our expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Shield className="h-4 w-4 mr-2" />
              <a href="#contact">Start Maintenance Today</a>
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+1234567890">Emergency Support</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceMaintenance;
