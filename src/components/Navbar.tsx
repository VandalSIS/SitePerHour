import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "EN", name: "English" },
  { code: "ro", label: "RO", name: "Română" },
  { code: "ru", label: "RU", name: "Русский" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      if (location.pathname !== "/") {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        navigate("/");
        setTimeout(() => {
          const el = document.getElementById(href.substring(1));
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 300);
      } else {
        const el = document.getElementById(href.substring(1));
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { nameKey: "nav.home", href: "#home" },
    { nameKey: "nav.about", href: "#about" },
    { nameKey: "nav.services", href: "#services" },
    { nameKey: "nav.projects", href: "#projects" },
    { nameKey: "nav.contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-heading font-bold text-white">
          Site<span className="text-primary">PerHour</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.nameKey}
              onClick={() => handleNavigation(link.href)}
              className="text-muted-foreground hover:text-white transition-colors font-medium text-sm"
            >
              {t(link.nameKey)}
            </button>
          ))}

          {/* Language Switcher */}
          <div
            className="relative"
            onMouseEnter={handleLangEnter}
            onMouseLeave={handleLangLeave}
          >
            <button className="text-muted-foreground hover:text-white transition-colors font-medium flex items-center gap-1 text-sm">
              <Globe className="h-4 w-4" />
              {i18n.language?.toUpperCase().slice(0, 2) || "EN"}
              <ChevronDown className="h-3 w-3" />
            </button>
            {langDropdownOpen && (
              <>
                <div
                  className="absolute top-full left-0 w-28 h-2 z-40"
                  onMouseEnter={handleLangEnter}
                  onMouseLeave={handleLangLeave}
                />
                <div
                  className="absolute top-full left-0 mt-1 w-32 bg-background/95 backdrop-blur-sm border border-border rounded-lg shadow-lg py-2 z-50"
                  onMouseEnter={handleLangEnter}
                  onMouseLeave={handleLangLeave}
                >
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-primary/10 ${
                        i18n.language === lang.code
                          ? "text-primary font-semibold"
                          : "text-muted-foreground hover:text-white"
                      }`}
                    >
                      {lang.label} – {lang.name}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          <Button
            className="bg-primary hover:bg-primary/80 rounded-full px-5"
            onClick={() => handleNavigation("#contact")}
          >
            {t("nav.getInTouch")}
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border animate-fade-in">
          <div className="container-custom py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.nameKey}
                onClick={() => handleNavigation(link.href)}
                className="text-muted-foreground hover:text-white py-2 transition-colors w-full text-left"
              >
                {t(link.nameKey)}
              </button>
            ))}

            {/* Mobile Language Switcher */}
            <div className="border-t border-border pt-4">
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4" /> Language
              </p>
              <div className="flex gap-3 pl-4">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                      i18n.language === lang.code
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <Button
              className="bg-primary hover:bg-primary/80 w-full mt-2"
              onClick={() => handleNavigation("#contact")}
            >
              {t("nav.getInTouch")}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
