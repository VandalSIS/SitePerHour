import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calculator, Clock, CheckCircle, MessageSquare, Phone, Rocket } from "lucide-react";
import { useState } from "react";

import { useToast } from "@/hooks/use-toast";

const PricingCustom = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [estimatedCost, setEstimatedCost] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    timeline: '',
    budget: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const services = [
    { id: "web-design", name: "Custom Web Design", price: 500, description: "Unique design tailored to your brand" },
    { id: "web-dev", name: "Web Development", price: 800, description: "Custom functionality and features" },
    { id: "ecommerce", name: "E-commerce Store", price: 1200, description: "Full online store setup" },
    { id: "cms", name: "Content Management", price: 400, description: "Easy-to-use CMS integration" },
    { id: "seo", name: "SEO Optimization", price: 600, description: "Comprehensive search optimization" },
    { id: "mobile-app", name: "Mobile App", price: 2000, description: "Native or hybrid mobile application" },
    { id: "api", name: "API Integration", price: 800, description: "Third-party service connections" },
    { id: "database", name: "Database Design", price: 700, description: "Custom database architecture" },
    { id: "hosting", name: "Premium Hosting", price: 200, description: "High-performance hosting setup" },
    { id: "maintenance", name: "Ongoing Maintenance", price: 300, description: "Monthly maintenance package" }
  ];

  const handleServiceToggle = (serviceId: string, price: number) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
      setEstimatedCost(estimatedCost - price);
    } else {
      setSelectedServices([...selectedServices, serviceId]);
      setEstimatedCost(estimatedCost + price);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.description) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields (Name, Email, Project Description).",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedServiceNames = services
        .filter(service => selectedServices.includes(service.id))
        .map(service => service.name);

      // Simulate quote submission (replace with your actual quote form logic)
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Optional: Analytics tracking
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'quote_requested', {
          event_category: 'Quote',
          event_label: 'Custom Quote',
          value: estimatedCost
        });
      }

      toast({
        title: "Quote Request Sent!",
        description: "We'll review your requirements and send you a detailed proposal within 24 hours.",
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        timeline: '',
        budget: '',
        description: ''
      });
      setSelectedServices([]);
      setEstimatedCost(0);

    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Custom Web Development Quote",
    "provider": {
      "@type": "Organization",
      "name": "SitePerHour"
    },
    "description": "Get a custom quote for your unique web development project with tailored pricing and features",
    "offers": {
      "@type": "Offer",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "priceCurrency": "USD",
        "price": "Custom Quote"
      },
      "availability": "https://schema.org/InStock"
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEOHead
        title="Custom Web Development Quote - Tailored Solutions for Your Business"
        description="Get a personalized quote for your unique web development project. Custom pricing for custom solutions including web design, development, e-commerce, and more."
        keywords="custom web development quote, personalized pricing, web development consultation, custom website cost, tailored web solutions"
        canonicalUrl="/pricing/custom"
        structuredData={structuredData}
      />
      
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-4 bg-primary/10 text-primary">CUSTOM QUOTE</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Get Your
              <span className="text-primary block">Custom Quote</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every business is unique, and so are its needs. Get a personalized quote tailored 
              specifically to your requirements, timeline, and budget.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calculator className="h-5 w-5 text-primary" />
                <span>Instant Estimate</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <span>24h Response</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>No Obligation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Calculator Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Service Selection */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Select Your Services</h2>
              <p className="text-muted-foreground mb-8">
                Choose the services you need for your project. You can always adjust these during our consultation.
              </p>
              
              <div className="space-y-4">
                {services.map((service) => (
                  <Card key={service.id} className="cursor-pointer transition-all hover:shadow-md">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={service.id}
                          checked={selectedServices.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id, service.price)}
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-center">
                            <Label htmlFor={service.id} className="font-semibold cursor-pointer">
                              {service.name}
                            </Label>
                            <span className="text-primary font-bold">${service.price}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="h-5 w-5 text-primary" />
                    Your Custom Quote
                  </CardTitle>
                  {estimatedCost > 0 && (
                    <div className="text-3xl font-bold text-primary">
                      Estimated: ${estimatedCost.toLocaleString()}
                    </div>
                  )}
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name" 
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        placeholder="Your company (optional)" 
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        placeholder="+1 (555) 123-4567" 
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="timeline">Project Timeline</Label>
                      <Input 
                        id="timeline" 
                        placeholder="e.g., 2-4 weeks, ASAP, Flexible" 
                        value={formData.timeline}
                        onChange={(e) => handleInputChange('timeline', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="budget">Budget Range</Label>
                      <Input 
                        id="budget" 
                        placeholder="e.g., $1,000 - $5,000" 
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="description">Project Description *</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={4}
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      <MessageSquare className="h-4 w-4 mr-2" />
                      {isSubmitting ? 'Sending...' : 'Get My Custom Quote'}
                    </Button>
                  </form>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    We'll respond within 24 hours with a detailed proposal
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Custom Section */}
      <section className="py-16 bg-secondary/20">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Custom Development?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              When off-the-shelf solutions don't fit your unique needs, custom development is the answer
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-primary" />
                  Tailored Solutions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Every feature is designed specifically for your business processes, 
                  ensuring perfect alignment with your goals and workflow.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Scalable Architecture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Built to grow with your business, our custom solutions can easily adapt 
                  and expand as your needs evolve over time.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Dedicated Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Get personalized support from the team that built your solution. 
                  We understand your system inside and out.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Custom Development Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From initial consultation to final delivery, we ensure transparency and quality every step of the way
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground text-sm">
                We discuss your needs, goals, and requirements in detail
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-semibold mb-2">Planning</h3>
              <p className="text-muted-foreground text-sm">
                Detailed project plan with timeline and milestones
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-semibold mb-2">Development</h3>
              <p className="text-muted-foreground text-sm">
                Agile development with regular updates and feedback
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Testing, launch, and ongoing support for your success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Custom Project?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Don't settle for one-size-fits-all solutions. Get exactly what your business needs 
            with our custom development services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              <Calculator className="h-4 w-4 mr-2" />
              <a href="#quote-form">Get Your Quote Now</a>
            </Button>
            <Button size="lg" variant="outline">
              <Phone className="h-4 w-4 mr-2" />
              <a href="tel:+1234567890">Schedule a Call</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingCustom;
