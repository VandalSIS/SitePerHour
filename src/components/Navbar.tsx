import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Timeout refs for delayed dropdown closing
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pricingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) {
        clearTimeout(servicesTimeoutRef.current);
      }
      if (pricingTimeoutRef.current) {
        clearTimeout(pricingTimeoutRef.current);
      }
    };
  }, []);

  // Helper functions for dropdown management with delays
  const handleServicesEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

  const handlePricingEnter = () => {
    if (pricingTimeoutRef.current) {
      clearTimeout(pricingTimeoutRef.current);
    }
    setPricingDropdownOpen(true);
  };

  const handlePricingLeave = () => {
    pricingTimeoutRef.current = setTimeout(() => {
      setPricingDropdownOpen(false);
    }, 300); // 300ms delay before closing
  };

    const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPricingDropdownOpen(false);
    
    if (href.startsWith('#')) {
      // If we're on a different page, navigate to home first, then scroll
      if (location.pathname !== '/') {
        // First scroll to top, then navigate
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        navigate('/');
        // Wait for navigation to complete, then scroll to section
        setTimeout(() => {
          const elementId = href.substring(1);
          const element = document.getElementById(elementId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      } else {
        // We're already on home page, just scroll to section
        const elementId = href.substring(1);
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
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
        <Link to="/" className="text-2xl font-heading font-bold text-white">
          Your<span className="text-primary">Name</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href)}
                className="text-muted-foreground hover:text-white transition-colors font-medium"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-muted-foreground hover:text-white transition-colors font-medium"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setServicesDropdownOpen(false);
                  setPricingDropdownOpen(false);
                }}
              >
                {link.name}
              </Link>
            )
          ))}
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handleServicesEnter}
            onMouseLeave={handleServicesLeave}
          >
            <button className="text-muted-foreground hover:text-white transition-colors font-medium flex items-center gap-1">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            {servicesDropdownOpen && (
              <>
                {/* Invisible bridge for easier mouse navigation */}
                <div className="absolute top-full left-0 w-56 h-2 z-40"></div>
                <div className="absolute top-full left-0 mt-1 w-56 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50">
                {servicesLinks.map((link) => (
                  link.href.startsWith('#') ? (
                    <button
                      key={link.name}
                      onClick={() => handleNavigation(link.href)}
                      className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                    >
                      {link.name}
                    </button>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        setPricingDropdownOpen(false);
                      }}
                    >
                      {link.name}
                    </Link>
                  )
                ))}
                </div>
              </>
            )}
          </div>

          {/* Pricing Dropdown */}
          <div 
            className="relative"
            onMouseEnter={handlePricingEnter}
            onMouseLeave={handlePricingLeave}
          >
            <button className="text-muted-foreground hover:text-white transition-colors font-medium flex items-center gap-1">
              Pricing <ChevronDown className="h-4 w-4" />
            </button>
            {pricingDropdownOpen && (
              <>
                {/* Invisible bridge for easier mouse navigation */}
                <div className="absolute top-full left-0 w-48 h-2 z-40"></div>
                <div className="absolute top-full left-0 mt-1 w-48 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50">
                {pricingLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                    onClick={() => {
                      setPricingDropdownOpen(false);
                      setServicesDropdownOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
                </div>
              </>
            )}
          </div>

          <Button 
            className="bg-primary hover:bg-primary/80"
            onClick={() => handleNavigation('#contact')}
          >
            Get in Touch
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
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="text-muted-foreground hover:text-white py-2 transition-colors w-full text-left"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-muted-foreground hover:text-white py-2 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setServicesDropdownOpen(false);
                    setPricingDropdownOpen(false);
                  }}
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
                  <button
                    key={link.name}
                    onClick={() => handleNavigation(link.href)}
                    className="block w-full text-left text-muted-foreground hover:text-white py-1 pl-4 transition-colors"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="block text-muted-foreground hover:text-white py-1 pl-4 transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setServicesDropdownOpen(false);
                      setPricingDropdownOpen(false);
                    }}
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
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setServicesDropdownOpen(false);
                    setPricingDropdownOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <Button 
              className="bg-primary hover:bg-primary/80 w-full"
              onClick={() => handleNavigation('#contact')}
            >
                Get in Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
