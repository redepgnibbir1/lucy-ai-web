
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import CalendlyWidget from './CalendlyWidget';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInRight } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const [contentVisible, setContentVisible] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { t, language } = useLanguage();
  
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

  const renderTitle = () => {
    const title = t('hero.title');
    const isSv = language === 'sv';
    
    // More specific split pattern to ensure we don't lose any text
    const firstPart = isSv 
      ? 'Den nya kommunikationsplattformen för hotell' 
      : 'The new communications platform for hotels';
    
    const titleParts = isSv 
      ? [firstPart, title.substring(firstPart.length)]
      : [firstPart, title.substring(firstPart.length)];

    return (
      <>
        <span className="text-black">{titleParts[0]}</span>
        <span className="text-[#777777]">{titleParts[1]}</span>
      </>
    );
  };

  return (
    <section className="py-16 md:py-24 lg:py-28 w-full bg-white text-lucy-black">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Animate variants={fadeInUp}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-8 max-w-4xl mx-auto">
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
