"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { localeNames, locales, type Locale } from "@/lib/i18n/config";

const Navbar = ({ locale }: { locale: Locale }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const langTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();

  const handleLangEnter = () => {
    if (langTimeoutRef.current) clearTimeout(langTimeoutRef.current);
    setLangDropdownOpen(true);
  };
  const handleLangLeave = () => {
    langTimeoutRef.current = setTimeout(() => setLangDropdownOpen(false), 300);
  };

  const changeLanguage = (code: Locale) => {
    setLangDropdownOpen(false);
    setMobileMenuOpen(false);
    const newPath = pathname.replace(`/${locale}`, `/${code}`) || `/${code}`;
    router.push(newPath);
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith("#")) {
      const el = document.getElementById(href.substring(1));
      if (el) el.scrollIntoView({ behavior: "smooth" });
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
        isScrolled
          ? "bg-background/90 backdrop-blur-md shadow-lg shadow-black/10 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <Link href={`/${locale}`} className="text-2xl font-heading font-bold text-white">
          Site<span className="text-primary">PerHour</span>
        </Link>

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

          <div
            className="relative"
            onMouseEnter={handleLangEnter}
            onMouseLeave={handleLangLeave}
          >
            <button className="text-muted-foreground hover:text-white transition-colors font-medium flex items-center gap-1 text-sm">
              <Globe className="h-4 w-4" />
              {locale.toUpperCase()}
              <ChevronDown className="h-3 w-3" />
            </button>
            {langDropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-36 bg-background/95 backdrop-blur-md border border-border rounded-lg shadow-lg py-2 z-50"
                onMouseEnter={handleLangEnter}
                onMouseLeave={handleLangLeave}
              >
                {locales.map((code) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`block w-full text-left px-4 py-2 text-sm transition-colors hover:bg-primary/10 ${
                      locale === code
                        ? "text-primary font-semibold"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {code.toUpperCase()} – {localeNames[code]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            className="bg-primary hover:bg-primary/90 rounded-full px-5 shadow-lg shadow-primary/20"
            onClick={() => handleNavigation("#contact")}
          >
            {t("nav.getInTouch")}
          </Button>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
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

            <div className="border-t border-border pt-4">
              <p className="text-white font-semibold mb-2 flex items-center gap-2">
                <Globe className="h-4 w-4" /> Language
              </p>
              <div className="flex gap-3 pl-4">
                {locales.map((code) => (
                  <button
                    key={code}
                    onClick={() => changeLanguage(code)}
                    className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                      locale === code
                        ? "bg-primary text-white"
                        : "text-muted-foreground hover:text-white"
                    }`}
                  >
                    {code.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <Button
              className="bg-primary hover:bg-primary/90 w-full mt-2"
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
