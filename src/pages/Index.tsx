
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import CopilotSection from '@/components/CopilotSection';
import CustomerLogos from '@/components/CustomerLogos';

const Index = () => {
  return (
    <div className="min-h-screen bg-lucy-light-gray">
      <Navbar />
      <Hero />
      <Products />
      <CustomerLogos />
      <CopilotSection />
    </div>
  );
};

export default Index;
