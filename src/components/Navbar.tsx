import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'ro', label: 'RO', name: 'Română' },
  { code: 'ru', label: 'RU', name: 'Русский' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [pricingDropdownOpen, setPricingDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleLangEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
    setLangDropdownOpen(true);
  };
  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => setLangDropdownOpen(false), 300);
  };
  const changeLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
  };
  
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
    { nameKey: 'nav.home', href: '#home' },
    { nameKey: 'nav.about', href: '#about' },
    { nameKey: 'nav.projects', href: '#projects' },
    { nameKey: 'nav.blog', href: '/blog' },
    { nameKey: 'nav.contact', href: '#contact' },
  ];

  const servicesLinks = [
    { nameKey: 'nav.allServices', href: '#services' },
    { nameKey: 'nav.webDevelopment', href: '/services/web-development' },
    { nameKey: 'nav.shopifyDevelopment', href: '/services/shopify' },
    { nameKey: 'nav.wordPressDevelopment', href: '/services/wordpress' },
    { nameKey: 'nav.cmsSolutions', href: '/services/cms' },
    { nameKey: 'nav.websiteMaintenance', href: '/services/maintenance' },
  ];

  const pricingLinks = [
    { nameKey: 'nav.basicPackage', href: '/pricing/basic' },
    { nameKey: 'nav.mediumPackage', href: '/pricing/medium' },
    { nameKey: 'nav.premiumPackage', href: '/pricing/premium' },
    { nameKey: 'nav.customQuote', href: '/pricing/custom' },
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
          Site<span className="text-primary">PerHour</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith('#') ? (
              <button
                key={link.nameKey}
                onClick={() => handleNavigation(link.href)}
                className="text-muted-foreground hover:text-white transition-colors font-medium"
              >
                {t(link.nameKey)}
              </button>
            ) : (
              <Link
                key={link.nameKey}
                to={link.href}
                className="text-muted-foreground hover:text-white transition-colors font-medium"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setServicesDropdownOpen(false);
                  setPricingDropdownOpen(false);
                }}
              >
                {t(link.nameKey)}
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
              {t('nav.services')} <ChevronDown className="h-4 w-4" />
            </button>
            {servicesDropdownOpen && (
              <>
                {/* Invisible bridge for easier mouse navigation */}
                <div 
                  className="absolute top-full left-0 w-56 h-2 z-40"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                ></div>
                <div 
                  className="absolute top-full left-0 mt-1 w-56 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                >
                {servicesLinks.map((link) => (
                  link.href.startsWith('#') ? (
                    <button
                      key={link.nameKey}
                      onClick={() => handleNavigation(link.href)}
                      className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                    >
                      {t(link.nameKey)}
                    </button>
                  ) : (
                    <Link
                      key={link.nameKey}
                      to={link.href}
                      className="block px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                      onClick={() => {
                        setServicesDropdownOpen(false);
                        setPricingDropdownOpen(false);
                      }}
                    >
                      {t(link.nameKey)}
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
              {t('nav.pricing')} <ChevronDown className="h-4 w-4" />
            </button>
            {pricingDropdownOpen && (
              <>
                {/* Invisible bridge for easier mouse navigation */}
                <div 
                  className="absolute top-full left-0 w-48 h-2 z-40"
                  onMouseEnter={handlePricingEnter}
                  onMouseLeave={handlePricingLeave}
                ></div>
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={handlePricingEnter}
                  onMouseLeave={handlePricingLeave}
                >
                {pricingLinks.map((link) => (
                  <Link
                    key={link.nameKey}
                    to={link.href}
                    className="block px-4 py-2 text-muted-foreground hover:text-white hover:bg-primary/10 transition-colors"
                    onClick={() => {
                      setPricingDropdownOpen(false);
                      setServicesDropdownOpen(false);
                    }}
                  >
                    {t(link.nameKey)}
                  </Link>
                ))}
                </div>
              </>
            )}
          </div>

          {/* Language Switcher */}
          <div
            className="relative"
            onMouseEnter={handleLangEnter}
            onMouseLeave={handleLangLeave}
          >
            <button className="text-muted-foreground hover:text-white transition-colors font-medium flex items-center gap-1">
              <Globe className="h-4 w-4" />
              {i18n.language?.toUpperCase().slice(0, 2) || 'EN'}
              <ChevronDown className="h-3 w-3" />
            </button>
            {langDropdownOpen && (
              <>
                <div className="absolute top-full left-0 w-28 h-2 z-40" onMouseEnter={handleLangEnter} onMouseLeave={handleLangLeave} />
                <div
                  className="absolute top-full left-0 mt-1 w-28 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={handleLangEnter}
                  onMouseLeave={handleLangLeave}
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-primary/10 ${i18n.language === lang.code ? 'text-primary font-semibold' : 'text-muted-foreground hover:text-white'}`}
                    >
                      {lang.label} – {lang.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Button 
            className="bg-primary hover:bg-primary/80"
            onClick={() => handleNavigation('#contact')}
          >
            {t('nav.getInTouch')}
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
                  key={link.nameKey}
                  onClick={() => handleNavigation(link.href)}
                  className="text-muted-foreground hover:text-white py-2 transition-colors w-full text-left"
                >
                  {t(link.nameKey)}
                </button>
              ) : (
                <Link
                  key={link.nameKey}
                  to={link.href}
                  className="text-muted-foreground hover:text-white py-2 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setServicesDropdownOpen(false);
                    setPricingDropdownOpen(false);
                  }}
                >
                  {t(link.nameKey)}
                </Link>
              )
            ))}
            
            {/* Mobile Services Section */}
            <div className="border-t border-border pt-4">
              <p className="text-white font-semibold mb-2">{t('nav.services')}</p>
              {servicesLinks.map((link) => (
                link.href.startsWith('#') ? (
                  <button
                    key={link.nameKey}
                    onClick={() => handleNavigation(link.href)}
                    className="block w-full text-left text-muted-foreground hover:text-white py-1 pl-4 transition-colors"
                  >
                    {t(link.nameKey)}
                  </button>
                ) : (
                  <Link
                    key={link.nameKey}
                    to={link.href}
                    className="block text-muted-foreground hover:text-white py-1 pl-4 transition-colors"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setServicesDropdownOpen(false);
                      setPricingDropdownOpen(false);
                    }}
                  >
                    {t(link.nameKey)}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile Pricing Section */}
            <div className="border-t border-border pt-4">
              <p className="text-white font-semibold mb-2">{t('nav.pricing')}</p>
              {pricingLinks.map((link) => (
                <Link
                  key={link.nameKey}
                  to={link.href}
                  className="block text-muted-foreground hover:text-white py-1 pl-4 transition-colors"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setServicesDropdownOpen(false);
                    setPricingDropdownOpen(false);
                  }}
                >
                  {t(link.nameKey)}
                </Link>
              ))}
            </div>

            {/* Mobile Language Switcher */}
            <div className="border-t border-border pt-4">
              <p className="text-white font-semibold mb-2 flex items-center gap-2"><Globe className="h-4 w-4" /> Language</p>
              <div className="flex gap-3 pl-4">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`text-sm font-medium px-3 py-1 rounded transition-colors ${i18n.language === lang.code ? 'bg-primary text-white' : 'text-muted-foreground hover:text-white'}`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <Button 
              className="bg-primary hover:bg-primary/80 w-full"
              onClick={() => handleNavigation('#contact')}
            >
              {t('nav.getInTouch')}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
