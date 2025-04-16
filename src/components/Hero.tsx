
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import CalendlyWidget from './CalendlyWidget';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';

const Hero = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setContentVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleDemoClick = () => {
    console.log('Demo button clicked');
    setIsCalendlyOpen(true);
  };

  return (
    <section className="py-12 md:py-20 w-full bg-lucy-black text-lucy-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Animate variants={fadeInUp}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Den nya kommunikationsplattformen för Hotell
            </h1>
          </Animate>
          
          <Animate variants={slideInLeft} transition={{ delay: 0.4 }}>
            <p className="text-lg md:text-xl mb-12 text-lucy-light-gray-new max-w-4xl mx-auto font-lab-grotesque">
              Kraftigt ökad merförsäljning, färre fel och nöjdare gäster. Lucys AI-agenter gör jobbet bakom kulisserna.
            </p>
          </Animate>
          
          <Animate variants={slideInRight} transition={{ delay: 0.8 }}>
            <Button 
              className="bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 font-medium text-lg px-8 py-6 h-auto"
              onClick={handleDemoClick}
            >
              Boka en demo
            </Button>
          </Animate>
        </div>
      </div>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </section>
  );
};

export default Hero;
