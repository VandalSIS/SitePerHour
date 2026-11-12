"use client";

import dynamic from "next/dynamic";
import NavbarNext from "@/components/NavbarNext";
import HeroSection2 from "@/components/HeroSection2";
import CapabilityStrip from "@/components/CapabilityStrip";
import SectionLayout from "@/components/SectionLayout";
import type { Locale } from "@/lib/i18n/config";
import { LocaleHtmlLang } from "@/components/LocaleHtmlLang";
import { Toaster } from "@/components/ui/toaster";
import CacheCleanup from "@/components/CacheCleanup";

/** Below-fold sections — code-split so mobile first paint stays light */
const AboutSection = dynamic(() => import("@/components/AboutSection"), {
  loading: () => <SectionSkeleton />,
});
const ServicesSection = dynamic(() => import("@/components/ServicesSection"), {
  loading: () => <SectionSkeleton />,
});
const MidCTASection = dynamic(() => import("@/components/MidCTASection"));
const ProjectsSection = dynamic(() => import("@/components/ProjectsSection"), {
  loading: () => <SectionSkeleton />,
});
const TechStackSection = dynamic(() => import("@/components/TechStackSection"));
const ProcessSection = dynamic(() => import("@/components/ProcessSection"), {
  loading: () => <SectionSkeleton />,
});
const TestimonialsSection = dynamic(
  () => import("@/components/TestimonialsSection")
);
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const CTABanner = dynamic(() => import("@/components/CTABanner"));
const ContactSection = dynamic(() => import("@/components/ContactSection"), {
  loading: () => <SectionSkeleton />,
});
const Footer = dynamic(() => import("@/components/Footer"));

function SectionSkeleton() {
  return (
    <div className="section-spacing container-custom" aria-hidden>
      <div className="h-8 w-48 bg-white/5 rounded mb-6 animate-pulse" />
      <div className="h-12 w-full max-w-xl bg-white/5 rounded mb-4 animate-pulse" />
      <div className="h-4 w-2/3 bg-white/5 rounded animate-pulse" />
    </div>
  );
}

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
