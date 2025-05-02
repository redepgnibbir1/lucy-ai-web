import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fördelar from "./pages/Fördelar";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/AboutUs";
import KomIgang from "./pages/KomIgang";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GDPR from "./pages/GDPR";

// Create a global window object property to disable the Lovable badge
if (typeof window !== 'undefined') {
  // @ts-ignore
  window.__LOVABLE_BADGE__ = false;
  
  // Also try removing any existing badge elements that might be in the DOM
  document.addEventListener('DOMContentLoaded', () => {
    const removeExistingBadge = () => {
      // Try various selectors that might match the badge
      const selectors = [
        '[data-testid="lovable-badge"]',
        '[class*="lovable-badge"]',
        '[id*="lovable-badge"]',
        '[class*="lovable"]',
        '[id*="lovable"]'
      ];
      
      selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => el.remove());
      });
    };
    
    // Run immediately and then periodically to catch dynamically added badges
    removeExistingBadge();
    const interval = setInterval(removeExistingBadge, 1000);
    
    // Clear after some time to not keep running forever
    setTimeout(() => clearInterval(interval), 10000);
  });
}

const queryClient = new QueryClient();

// Layout component to wrap all pages with Navbar and Footer
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <Navbar />
    <div className="flex-grow">
      {children}
    </div>
    <Footer />
  </div>
);

const App = () => {
  // Add this useEffect to ensure the badge is removed after component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // @ts-ignore
      window.__LOVABLE_BADGE__ = false;
      
      // Enhanced badge removal in React context
      const removeExistingBadge = () => {
        // Try various selectors that might match the badge
        const selectors = [
          '[data-testid="lovable-badge"]',
          '[class*="lovable-badge"]',
          '[id*="lovable-badge"]',
          '[class*="lovable"]',
          '[id*="lovable"]'
        ];
        
        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          elements.forEach(el => el.remove());
        });
      };
      
      // Run immediately and then after a short delay to catch any dynamically added badges
      removeExistingBadge();
      const cleanupInterval = setInterval(removeExistingBadge, 500);
      
      // Cleanup the interval when component unmounts
      return () => clearInterval(cleanupInterval);
    }
  }, []);

  // CSS to hide Lovable badge via styles
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const style = document.createElement('style');
      style.innerHTML = `
        [data-testid="lovable-badge"],
        [class*="lovable-badge"],
        [id*="lovable-badge"],
        [class*="lovable"]:not(.lovable-exclude),
        [id*="lovable"]:not(.lovable-exclude) {
          display: none !important;
          visibility: hidden !important;
          opacity: 0 !important;
          pointer-events: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fördelar" element={
                <Layout>
                  <Fördelar />
                </Layout>
              } />
              <Route path="/pricing" element={
                <Layout>
                  <Pricing />
                </Layout>
              } />
              <Route path="/about" element={
                <Layout>
                  <AboutUs />
                </Layout>
              } />
              <Route path="/kom-igang" element={
                <Layout>
                  <KomIgang />
                </Layout>
              } />
              <Route path="/privacy" element={
                <Layout>
                  <PrivacyPolicy />
                </Layout>
              } />
              <Route path="/gdpr" element={
                <Layout>
                  <GDPR />
                </Layout>
              } />
              <Route path="/terms" element={
                <Layout>
                  <TermsOfService />
                </Layout>
              } />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={
                <Layout>
                  <NotFound />
                </Layout>
              } />
            </Routes>
          </BrowserRouter>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
