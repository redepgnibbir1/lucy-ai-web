
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import CalendlyWidget from './CalendlyWidget';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInRight } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { t, language } = useLanguage();

  const handleDemoClick = () => {
    console.log('Demo button clicked');
    setIsCalendlyOpen(true);
  };

  // Use translations depending on the language
  const renderTitle = () => {
    if (language === 'en') {
      const firstPart = 'The new communications platform for hotels.';
      const secondPart = ' Increase upsell, improve team collaboration and boost guest satisfaction.';
      return (
        <>
          <span className="text-black">{firstPart}</span>
          <span className="text-[#777777]">{secondPart}</span>
        </>
      );
    }
    // Default to Swedish
    const firstPart = 'Den nya kommunikationsplattformen för hotell.';
    const secondPart = ' Öka merförsäljningen, förbättra teamsamarbetet och höj gästnöjdheten.';
    return (
      <>
        <span className="text-black">{firstPart}</span>
        <span className="text-[#777777]">{secondPart}</span>
      </>
    );
  };

  return (
    <section className="py-16 md:py-24 lg:py-28 w-full bg-white text-lucy-black">
      <div className="container">
        <div className="w-full">
          <Animate variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight md:leading-[1.15] lg:leading-[1.15] mb-8">
              {renderTitle()}
            </h1>
          </Animate>

          <Animate variants={slideInRight} transition={{ delay: 0.8 }}>
            <div className="flex justify-center">
              <Button 
                className="bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 font-medium text-lg px-10 py-7 h-auto"
                onClick={handleDemoClick}
              >
                {t('hero.button')}
              </Button>
            </div>
          </Animate>
        </div>
      </div>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </section>
  );
};

export default Hero;    
