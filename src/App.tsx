import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { initPerformanceOptimizations, addResourceHints } from "@/utils/performance";
import Index from "./vite-pages/Index";
import NotFound from "./vite-pages/NotFound";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";
import ContactSection from "./components/ContactSection";
import PricingBasic from "./vite-pages/PricingBasic";
import PricingMedium from "./vite-pages/PricingMedium";
import PricingPremium from "./vite-pages/PricingPremium";
import PricingCustom from "./vite-pages/PricingCustom";
import ServiceShopify from "./vite-pages/ServiceShopify";
import ServiceWordPress from "./vite-pages/ServiceWordPress";
import ServiceCMS from "./vite-pages/ServiceCMS";
import ServiceMaintenance from "./vite-pages/ServiceMaintenance";
import ServiceWebDevelopment from "./vite-pages/ServiceWebDevelopment";
import Blog from "./vite-pages/Blog";
import { Analytics } from '@vercel/analytics/react';
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
});

const App = () => {
  useEffect(() => {
    // Initialize performance optimizations
    initPerformanceOptimizations();
    addResourceHints();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          
          {/* Pricing Pages */}
          <Route path="/pricing/basic" element={<PricingBasic />} />
          <Route path="/pricing/medium" element={<PricingMedium />} />
          <Route path="/pricing/premium" element={<PricingPremium />} />
          <Route path="/pricing/custom" element={<PricingCustom />} />
          
          {/* Service Pages */}
          <Route path="/services/web-development" element={<ServiceWebDevelopment />} />
          <Route path="/services/shopify" element={<ServiceShopify />} />
          <Route path="/services/wordpress" element={<ServiceWordPress />} />
          <Route path="/services/cms" element={<ServiceCMS />} />
          <Route path="/services/maintenance" element={<ServiceMaintenance />} />
          
          {/* Blog */}
          <Route path="/blog" element={<Blog />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
