
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fördelar from "./pages/Fördelar";
import AddOns from "./pages/AddOns";
import AboutUs from "./pages/AboutUs";
import KomIgang from "./pages/KomIgang";
import ConferencePlanner from "./pages/ConferencePlanner";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import GDPR from "./pages/GDPR";
import PrivacyPolicyConferencePlanner from "./pages/PrivacyPolicyConferencePlanner";
import Articles from "./pages/Articles";
import IntroducingLucyAnalytics from "./pages/articles/IntroducingLucyAnalytics";
import EmployeeSurveysHotelIndustry from "./pages/articles/EmployeeSurveysHotelIndustry";
import HowToChooseHotelManagementSoftware from "./pages/articles/HowToChooseHotelManagementSoftware";
import HotelCommunicationSlackTeams from "./pages/articles/HotelCommunicationSlackTeams";
import DataDrivenHotelOperations from "./pages/articles/DataDrivenHotelOperations";
import HotelReviewManagement from "./pages/articles/HotelReviewManagement";
import MultilingualHotelStaff from "./pages/articles/MultilingualHotelStaff";
import HotelSoftwareImplementation from "./pages/articles/HotelSoftwareImplementation";
import HousekeepingEfficiency from "./pages/articles/HousekeepingEfficiency";
import HotelCommunicationGuide from "./pages/articles/HotelCommunicationGuide";
import LucyVsTraditionalHotelCommunication from "./pages/articles/LucyVsTraditionalHotelCommunication";
import HotelStaffOnboarding from "./pages/articles/HotelStaffOnboarding";
import HotelIncidentManagement from "./pages/articles/HotelIncidentManagement";
import WhatIsHotelSoftware from "./pages/articles/WhatIsHotelSoftware";
import WhatsAppForHotels from "./pages/articles/WhatsAppForHotels";
import AutomateHotelGuestCommunication from "./pages/articles/AutomateHotelGuestCommunication";
import HotelSoftwareCost from "./pages/articles/HotelSoftwareCost";
import HotelShiftHandovers from "./pages/articles/HotelShiftHandovers";
import AIGuestExperience from "./pages/articles/AIGuestExperience";
import HotelSoftwareTrends2026 from "./pages/articles/HotelSoftwareTrends2026";
import ConferencePlanningAI from "./pages/articles/ConferencePlanningAI";

// Create a global window object property to disable the Lovable badge
if (typeof window !== 'undefined') {
  // @ts-expect-error - Custom property on window for Lovable badge control
  window.__LOVABLE_BADGE__ = false;
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
            <Route path="/addons" element={
              <Layout>
                <AddOns />
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
            <Route path="/conference-planner" element={
              <Layout>
                <ConferencePlanner />
              </Layout>
            } />
            <Route path="/privacy-policy-conferenceplanner" element={
              <Layout>
                <PrivacyPolicyConferencePlanner />
              </Layout>
            } />
            <Route path="/articles" element={
              <Layout>
                <Articles />
              </Layout>
            } />
            <Route path="/articles/introducing-lucy-analytics" element={
              <IntroducingLucyAnalytics />
            } />
            <Route path="/articles/hotel-employee-surveys" element={
              <EmployeeSurveysHotelIndustry />
            } />
            <Route path="/articles/choose-hotel-management-software" element={
              <HowToChooseHotelManagementSoftware />
            } />
            <Route path="/articles/hotel-communication-slack-teams" element={
              <HotelCommunicationSlackTeams />
            } />
            <Route path="/articles/data-driven-hotel-operations" element={
              <DataDrivenHotelOperations />
            } />
            <Route path="/articles/hotel-review-management" element={
              <HotelReviewManagement />
            } />
            <Route path="/articles/multilingual-hotel-staff" element={
              <MultilingualHotelStaff />
            } />
            <Route path="/articles/hotel-software-implementation" element={
              <HotelSoftwareImplementation />
            } />
            <Route path="/articles/housekeeping-efficiency" element={
              <HousekeepingEfficiency />
            } />
            <Route path="/articles/hotel-communication-guide" element={
              <HotelCommunicationGuide />
            } />
            <Route path="/articles/hotel-communication-software-comparison" element={
              <LucyVsTraditionalHotelCommunication />
            } />
            <Route path="/articles/hotel-incident-management" element={
              <HotelIncidentManagement />
            } />
            <Route path="/articles/automate-hotel-guest-communication" element={
              <AutomateHotelGuestCommunication />
            } />
            <Route path="/articles/what-is-hotel-software" element={
              <WhatIsHotelSoftware />
            } />
            <Route path="/articles/hotel-staff-onboarding" element={
              <HotelStaffOnboarding />
            } />
            <Route path="/articles/whatsapp-for-hotels" element={
              <WhatsAppForHotels />
            } />
            <Route path="/articles/hotel-software-cost" element={
              <HotelSoftwareCost />
            } />
            <Route path="/articles/hotel-shift-handovers" element={
              <HotelShiftHandovers />
            } />
            <Route path="/articles/ai-guest-experience" element={
              <AIGuestExperience />
            } />
            <Route path="/articles/hotel-software-trends-2026" element={
              <HotelSoftwareTrends2026 />
            } />
            <Route path="/articles/ai-conference-planning-hotels" element={
              <ConferencePlanningAI />
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
