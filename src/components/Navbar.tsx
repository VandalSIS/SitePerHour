import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToElement = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
  ];

  const servicesLinks = [
    { name: 'All Services', href: '#services' },
    { name: 'Web Development', href: '/services/web-development' },
    { name: 'Shopify Development', href: '/services/shopify' },
    { name: 'WordPress Development', href: '/services/wordpress' },
    { name: 'CMS Solutions', href: '/services/cms' },
    { name: 'Website Maintenance', href: '/services/maintenance' },
  ];

  const pricingLinks = [
    { name: 'Basic Package', href: '/pricing/basic' },
    { name: 'Medium Package', href: '/pricing/medium' },
    { name: 'Premium Package', href: '/pricing/premium' },
    { name: 'Custom Quote', href: '/pricing/custom' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', id: 'privacy-policy-section' },
    { name: 'Terms & Conditions', id: 'terms-section' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <a href="#home" className="text-2xl font-heading font-bold text-white">
          Your<span className="text-primary">Name</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <a 
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-white transition-colors font-medium"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-white transition-colors font-medium"
              >
                {link.name}
              </Link>
            )
          ))}
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="text-muted-foreground hover:text-white transition-colors font-medium flex items-center gap-1">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50">
                {servicesLinks.map((link) => (
                  link.href.startsWith('#') ? (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                    >
                      {link.name}
                    </Link>
                  )
                ))}
              </div>
            )}
          </div>

          {/* Pricing Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setPricingDropdownOpen(true)}
            onMouseLeave={() => setPricingDropdownOpen(false)}
          >
            <button className="text-muted-foreground hover:text-white transition-colors font-medium flex items-center gap-1">
              Pricing <ChevronDown className="h-4 w-4" />
            </button>
            {pricingDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50">
                {pricingLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Button className="bg-primary hover:bg-primary/80">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              link.href.startsWith('#') ? (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-white py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-white py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            ))}
            
            {/* Mobile Services Section */}
            <div className="border-t border-border pt-4">
              <p className="text-white font-semibold mb-2">Services</p>
              {servicesLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-muted-foreground hover:text-white py-1 pl-4 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-muted-foreground hover:text-white py-1 pl-4 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Pricing Section */}
            <div className="border-t border-border pt-4">
              <p className="text-white font-semibold mb-2">Pricing</p>
              {pricingLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-muted-foreground hover:text-white py-1 pl-4 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/80 w-full">
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                Get in Touch
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
