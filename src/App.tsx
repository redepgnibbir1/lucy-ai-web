
import React from "react";
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

const App = () => (
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

export default App;
