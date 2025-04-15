
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import GuestCommunicationsSection from '@/components/GuestCommunicationsSection';
import CopilotSection from '@/components/CopilotSection';
import CustomerLogos from '@/components/CustomerLogos';
import ReputationDashboardSection from '@/components/ReputationDashboardSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CustomerLogos />
      <Products />
      <GuestCommunicationsSection />
      <CopilotSection />
      <ReputationDashboardSection />
    </div>
  );
};

export default Index;
