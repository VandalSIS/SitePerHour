"use client";

import NavbarNext from "@/components/NavbarNext";
import HeroSection2 from "@/components/HeroSection2";
import CapabilityStrip from "@/components/CapabilityStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTABanner from "@/components/CTABanner";
import MidCTASection from "@/components/MidCTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionLayout from "@/components/SectionLayout";
import type { Locale } from "@/lib/i18n/config";
import { LocaleHtmlLang } from "@/components/LocaleHtmlLang";
import { Toaster } from "@/components/ui/toaster";
import CacheCleanup from "@/components/CacheCleanup";

export default function HomePage({ locale }: { locale: Locale }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LocaleHtmlLang locale={locale} />
      <CacheCleanup />
      <Toaster />
      <NavbarNext locale={locale} />
      <HeroSection2 />
      <CapabilityStrip />
      <SectionLayout>
        <AboutSection />
      </SectionLayout>
      <SectionLayout>
        <ServicesSection />
      </SectionLayout>
      <MidCTASection />
      <SectionLayout>
        <ProjectsSection />
      </SectionLayout>
      <SectionLayout>
        <TechStackSection />
      </SectionLayout>
      <ProcessSection />
      <SectionLayout>
        <TestimonialsSection />
      </SectionLayout>
      <SectionLayout>
        <FAQSection />
      </SectionLayout>
      <SectionLayout>
        <CTABanner />
      </SectionLayout>
      <SectionLayout>
        <ContactSection />
      </SectionLayout>
      <Footer />
    </div>
  );
}
