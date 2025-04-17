
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import GuestCommunicationsSection from '@/components/GuestCommunicationsSection';
import CopilotSection from '@/components/CopilotSection';
import CustomerLogos from '@/components/CustomerLogos';
import Footer from '@/components/Footer';
import { Animate } from '@/components/ui/animate';
import { fadeIn, staggerContainer } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Animate variants={staggerContainer}>
          <Animate variants={fadeIn}>
            <Hero />
          </Animate>
          <Animate variants={fadeIn}>
            <CustomerLogos />
          </Animate>
          <Animate variants={fadeIn}>
            <Products />
          </Animate>
          <Animate variants={fadeIn}>
            <GuestCommunicationsSection />
          </Animate>
          <Animate variants={fadeIn}>
            <CopilotSection />
          </Animate>
        </Animate>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
