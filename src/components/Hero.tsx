
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import CalendlyWidget from './CalendlyWidget';

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
    <section className="py-12 md:py-20 w-full">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-7xl mx-auto text-center transition-opacity duration-300 ${
            contentVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 font-martina">
            Den nya kommunikationsplattformen för Hotell
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-lucy-dark-gray/80 max-w-4xl mx-auto font-lab-grotesque">
            Kraftigt ökad merförsäljning, färre fel och nöjdare gäster. Lucys AI-agenter gör jobbet bakom kulisserna.
          </p>
          
          <Button 
            className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium text-lg px-8 py-6 h-auto"
            onClick={handleDemoClick}
          >
            Boka en demo
          </Button>
        </div>
      </div>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </section>
  );
};

export default Hero;
