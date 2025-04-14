
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import GuestCommunicationsSection from '@/components/GuestCommunicationsSection';
import CopilotSection from '@/components/CopilotSection';
import CustomerLogos from '@/components/CustomerLogos';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Products />
      <GuestCommunicationsSection />
      <CopilotSection />
    </div>
  );
};

export default Index;
