
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import CalendlyWidget from '@/components/CalendlyWidget';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const KomIgang = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { t } = useLanguage();

  const handleContactClick = () => {
    console.log('Contact button clicked from KomIgang page');
    setIsCalendlyOpen(true);
  };

  return (
    <div className="min-h-screen bg-lucy-light-gray">
      <div className="container py-16 md:py-24">
        <Animate variants={staggerContainer}>
          <div className="max-w-4xl mx-auto">
            <Animate variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-medium mb-8 font-martina">
                {t('getStarted.title')}
              </h1>
            </Animate>
            
            <Animate variants={slideInLeft}>
              <p className="text-lg mb-8 text-lucy-dark-gray/80">
                {t('getStarted.intro')}
              </p>
            </Animate>

            <Animate variants={slideInRight}>
              <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
                <h2 className="text-2xl font-medium mb-6 font-martina">
                  {t('getStarted.onboarding.title')}
                </h2>
                
                <p className="mb-6">
                  {t('getStarted.onboarding.intro')}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    t('getStarted.onboarding.item1'),
                    t('getStarted.onboarding.item2'),
                    t('getStarted.onboarding.item3'),
                    t('getStarted.onboarding.item4'),
                    t('getStarted.onboarding.item5'),
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 font-martina">{t('getStarted.process.title')}</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>{t('getStarted.process.step1')}</li>
                    <li>{t('getStarted.process.step2')}</li>
                    <li>{t('getStarted.process.step3')}</li>
                    <li>{t('getStarted.process.step4')}</li>
                    <li>{t('getStarted.process.step5')}</li>
                  </ol>
                </div>
              </div>
            </Animate>

            <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 font-martina">
                  {t('getStarted.cta.title')}
                </h2>
                <p className="mb-6">
                  {t('getStarted.cta.text')}
                </p>
                <Button 
                  className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium text-lg px-8 py-6 h-auto"
                  onClick={handleContactClick}
                >
                  {t('getStarted.cta.button')}
                </Button>
              </div>
            </Animate>
          </div>
        </Animate>
      </div>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
};

export default KomIgang;
