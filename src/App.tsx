
import React, { useEffect, useRef } from "react";
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

// Create a queryClient instance
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
  const cleanupIntervalRef = useRef<number | null>(null);
  const observerRef = useRef<MutationObserver | null>(null);

  // Add this useEffect to ensure the badge is removed after component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Set global variables to disable the badge
      // @ts-ignore
      window.__LOVABLE_BADGE__ = false;
      // @ts-ignore
      window.__LOVABLE_BADGE_DISABLED__ = true;
      
      // Enhanced badge removal function
      const removeExistingBadge = () => {
        const selectors = [
          '[data-testid="lovable-badge"]',
          '[class*="lovable-badge"]',
          '[id*="lovable-badge"]',
          '[class*="lovable"]',
          '[id*="lovable"]',
          'a[href*="lovable"]',
          'div[style*="position: fixed"][style*="bottom"][style*="right"]',
          'a[style*="position: fixed"][style*="bottom"][style*="right"]',
          'iframe[src*="lovable"]',
          // Extremely precise targeting for known badge locations
          'div[style*="z-index: 9999"][style*="position: fixed"]',
          'div[style*="bottom: 16px"][style*="right: 16px"]',
          'div[style*="bottom: 1rem"][style*="right: 1rem"]'
        ];
        
        selectors.forEach(selector => {
          try {
            const elements = document.querySelectorAll(selector);
            elements.forEach(el => {
              const text = el.textContent?.toLowerCase() || '';
              const href = (el as HTMLAnchorElement).href || '';
              const className = el.className || '';
              const style = el.getAttribute('style') || '';
              
              // Check if it might be the badge
              if (text.includes('lovable') || 
                  text.includes('edit') || 
                  href.includes('lovable') || 
                  className.includes('lovable') ||
                  style.includes('position: fixed') && 
                  (style.includes('bottom') || style.includes('right'))) {
                el.remove();
              }
            });
          } catch (e) {
            // Silently continue if any error occurs when removing elements
          }
        });
        
        // Create a white overlay for the bottom right corner
        const existingOverlay = document.getElementById('lovable-badge-overlay');
        if (!existingOverlay) {
          const overlay = document.createElement('div');
          overlay.id = 'lovable-badge-overlay';
          overlay.style.cssText = `
            position: fixed;
            bottom: 0;
            right: 0;
            width: 200px;
            height: 100px;
            background-color: white;
            z-index: 99999;
            pointer-events: none;
          `;
          document.body.appendChild(overlay);
        }
      };
      
      // Setup mutation observer to detect and remove dynamically added badges
      if (!observerRef.current) {
        observerRef.current = new MutationObserver((mutations) => {
          // Check if any of the mutations might be adding the badge
          const shouldRemoveBadge = mutations.some(mutation => {
            if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
              return Array.from(mutation.addedNodes).some((node: any) => {
                if (node.nodeType === 1) { // Element node
                  const el = node as HTMLElement;
                  const innerHTML = el.innerHTML?.toLowerCase() || '';
                  const outerHTML = el.outerHTML?.toLowerCase() || '';
                  const className = el.className || '';
                  const id = el.id || '';
                  
                  return innerHTML.includes('lovable') || 
                         outerHTML.includes('lovable') || 
                         className.includes('lovable') || 
                         id.includes('lovable') ||
                         (el.style?.position === 'fixed' && 
                          (el.style?.bottom || el.style?.right));
                }
                return false;
              });
            }
            return false;
          });
          
          if (shouldRemoveBadge) {
            removeExistingBadge();
          }
        });
        
        observerRef.current.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true,
          characterData: false
        });
      }
      
      // Run immediately and then at a more frequent interval
      removeExistingBadge();
      if (cleanupIntervalRef.current) {
        clearInterval(cleanupIntervalRef.current);
      }
      cleanupIntervalRef.current = window.setInterval(removeExistingBadge, 100);
      
      // Cleanup function when component unmounts
      return () => {
        if (cleanupIntervalRef.current) {
          clearInterval(cleanupIntervalRef.current);
        }
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, []);

  // CSS to hide Lovable badge via styles
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const existingStyle = document.getElementById('badge-removal-style');
      if (!existingStyle) {
        const style = document.createElement('style');
        style.id = 'badge-removal-style';
        style.innerHTML = `
          [data-testid="lovable-badge"],
          [class*="lovable-badge"],
          [id*="lovable-badge"],
          [class*="lovable"]:not(.lovable-exclude),
          [id*="lovable"]:not(.lovable-exclude),
          a[href*="lovable"],
          div[style*="position: fixed"][style*="bottom: 16px"][style*="right: 16px"],
          div[style*="position: fixed"][style*="bottom: 1rem"][style*="right: 1rem"],
          a[style*="position: fixed"][style*="bottom"][style*="right"],
          div[style*="position: fixed"][style*="bottom"][style*="right"],
          div[style*="z-index: 9999"][style*="position: fixed"],
          div[style*="z-index: 999"][style*="position: fixed"],
          iframe[src*="lovable"] {
            display: none !important;
            visibility: hidden !important;
            opacity: 0 !important;
            pointer-events: none !important;
            width: 0 !important;
            height: 0 !important;
            overflow: hidden !important;
            position: absolute !important;
            top: -9999px !important;
            left: -9999px !important;
          }
          
          /* Target any fixed position elements in the bottom right corner specifically */
          body::after {
            content: "";
            position: fixed;
            bottom: 0;
            right: 0;
            width: 200px;
            height: 100px;
            background-color: white;
            z-index: 99999;
            pointer-events: none;
          }
        `;
        document.head.appendChild(style);
      }
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
