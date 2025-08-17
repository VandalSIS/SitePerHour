import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Smartphone, Zap, Shield, Globe, BarChart, Users, Rocket } from "lucide-react";

const ServiceWebDevelopment = () => {
  const technologies = [
    {
      category: "Frontend",
      icon: <Code className="h-6 w-6 text-primary" />,
      techs: ["React", "Vue.js", "Angular", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      icon: <Shield className="h-6 w-6 text-primary" />,
      techs: ["Node.js", "Python", "PHP", "Express", "Django", "Laravel"]
    },
    {
      category: "Database",
      icon: <BarChart className="h-6 w-6 text-primary" />,
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase", "Redis"]
    },
    {
      category: "Cloud & DevOps",
      icon: <Globe className="h-6 w-6 text-primary" />,
      techs: ["AWS", "Vercel", "Docker", "GitHub Actions", "Netlify", "DigitalOcean"]
    }
  ];

  const services = [
    {
      icon: <Smartphone className="h-6 w-6 text-primary" />,
      title: "Responsive Web Applications",
      description: "Modern, mobile-first web applications that work perfectly on all devices and screen sizes.",
      features: ["Mobile-first design", "Cross-browser compatibility", "Touch-friendly interfaces", "Progressive Web App features"]
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Performance Optimization",
      description: "Lightning-fast websites with optimized loading times and exceptional user experience.",
      features: ["Code splitting", "Image optimization", "Caching strategies", "CDN integration"]
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Security & Reliability",
      description: "Secure, reliable applications with industry-standard security practices and monitoring.",
      features: ["SSL certificates", "Data encryption", "Security audits", "Backup systems"]
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "User Experience Focus",
      description: "Intuitive interfaces designed with your users in mind for maximum engagement and conversion.",
      features: ["User research", "A/B testing", "Accessibility compliance", "Conversion optimization"]
    }
  ];

  const projectTypes = [
    {
      title: "Business Websites",
      description: "Professional corporate websites that establish credibility and drive growth",
      price: "From $1,497",
      timeline: "2-3 weeks"
    },
    {
      title: "E-commerce Platforms",
      description: "Powerful online stores with payment processing and inventory management",
      price: "From $2,997",
      timeline: "4-6 weeks"
    },
    {
      title: "Web Applications",
      description: "Custom web applications with complex functionality and user management",
      price: "From $4,997",
      timeline: "6-12 weeks"
    },
    {
      title: "SaaS Platforms",
      description: "Scalable software-as-a-service platforms with subscription management",
      price: "From $9,997",
      timeline: "12-20 weeks"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development Services",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Professional custom web development services using modern technologies like React, Node.js, and cloud platforms",
    "serviceType": "Web Development",
    "areaServed": "Worldwide"
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Custom Web Development Services - Modern React, Node.js & Cloud Solutions"
        description="Professional custom web development with React, Node.js, Python, and modern cloud technologies. Build scalable, secure, and high-performance web applications."
        keywords="web development, custom web applications, React development, Node.js development, modern web technologies, full-stack development, responsive web design"
        canonicalUrl="/services/web-development"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">WEB DEVELOPMENT</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Custom Web
              <span className="text-primary block">Development</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Build powerful, scalable web applications with modern technologies. From simple websites 
              to complex SaaS platforms, we create digital solutions that drive your business forward.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Code className="h-5 w-5 text-primary" />
                <span>Modern Tech Stack</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Smartphone className="h-5 w-5 text-primary" />
                <span>Mobile-First</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Zap className="h-5 w-5 text-primary" />
                <span>High Performance</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Shield className="h-5 w-5 text-primary" />
                <span>Enterprise Security</span>
              </div>
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <a href="#contact">Start Your Project</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Approach</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine cutting-edge technologies with proven methodologies to deliver exceptional web solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    {service.icon}
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm">
                        <span className="text-primary">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Technology Stack</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use the latest and most reliable technologies to build robust, scalable applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-2">{tech.icon}</div>
                  <CardTitle className="text-lg">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {tech.techs.map((technology, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {technology}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Types of Projects We Build</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From simple websites to complex enterprise applications, we handle projects of all sizes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectTypes.map((project, index) => (
              <Card key={index} className="transition-all hover:scale-105">
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{project.price}</div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <Badge variant="outline" className="text-xs">{project.timeline}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Our Development Team?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Modern Development Practices</h3>
                    <p className="text-muted-foreground">We follow industry best practices including clean code, testing, and continuous integration.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Scalable Architecture</h3>
                    <p className="text-muted-foreground">Built to grow with your business using cloud-native technologies and microservices.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Performance Optimized</h3>
                    <p className="text-muted-foreground">Fast loading times and smooth user experiences through performance optimization.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Ongoing Support</h3>
                    <p className="text-muted-foreground">Comprehensive support and maintenance to keep your application running smoothly.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <p className="text-muted-foreground text-sm">Projects Delivered</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
                  <p className="text-muted-foreground text-sm">Uptime Achieved</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                  <p className="text-muted-foreground text-sm">Support Available</p>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-muted-foreground text-sm">Client Satisfaction</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Agile development methodology ensuring quality, transparency, and timely delivery
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Discovery & Planning</h3>
              <p className="text-muted-foreground text-sm">
                Requirements analysis, technical planning, and project roadmap creation.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Design & Architecture</h3>
              <p className="text-muted-foreground text-sm">
                UI/UX design, system architecture, and database design planning.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Development & Testing</h3>
              <p className="text-muted-foreground text-sm">
                Agile development with continuous testing and client feedback loops.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Deployment & Support</h3>
              <p className="text-muted-foreground text-sm">
                Production deployment, monitoring setup, and ongoing maintenance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Transform your ideas into powerful web applications. Let's discuss your project and 
            create a solution that drives your business success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Code className="h-4 w-4 mr-2" />
              <a href="#contact">Start Your Project</a>
            </Button>
            <Button size="lg" variant="outline">
              <a href="/pricing/custom">Get Technical Consultation</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServiceWebDevelopment;
