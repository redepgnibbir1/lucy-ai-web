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

  const renderTitle = () => {
    if (language === 'en') {
      return (
        <>
          <span className="text-black">AI-powered Communication Tools </span>
          <span className="text-[#777777]">for Non-Desk Teams</span>
        </>
      );
    }
    // Swedish text - keep as one piece
    return t('hero.title');
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
