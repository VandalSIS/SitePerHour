import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const skills = [
    "React & TypeScript Development",
    "E-commerce & Shopify Solutions",
    "WordPress & CMS Development",
    "AI-Powered Web Applications",
    "SEO & Performance Optimization",
    "Web3 & Blockchain Integration"
  ];

  return (
    <section id="about" className="section-spacing bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <p className="text-primary font-medium mb-2">About SitePerHour</p>
          <h2 className="text-3xl md:text-4xl font-bold">Expert Web Development & Digital Solutions</h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Transforming businesses with cutting-edge web technologies, AI integration, and modern development practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-bold mb-4">Leading Web Development Agency</h3>
            <p className="text-muted-foreground mb-6">
              With extensive experience in modern web development, we specialize in creating high-performance 
              websites, e-commerce platforms, and web applications using cutting-edge technologies like React, 
              Node.js, AI, and Web3. Our solutions drive business growth and deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              We serve businesses worldwide, from startups to enterprises, providing custom web development, 
              Shopify stores, WordPress solutions, CMS implementations, and ongoing maintenance. Our expertise 
              spans across modern frameworks, AI integration, and blockchain technologies.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-primary" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2 aspect-square bg-muted rounded-2xl overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-accent/30 mix-blend-overlay"></div>
            <div className="w-full h-full relative">
                <img
                    src="/images/software-development-programming-coding-vector-29570719.jpg"
                    alt="Coding illustration"
                    className="w-full h-full object-cover"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
