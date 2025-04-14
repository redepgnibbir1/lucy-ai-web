
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import CopilotSection from '@/components/CopilotSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-lucy-light-gray">
      <Navbar />
      <Hero />
      <Products />
      <CopilotSection />
    </div>
  );
};

export default Index;
