
import React from 'react';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, staggerContainer } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { t, language } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <div className="container py-12 md:py-24">
        <Animate variants={staggerContainer}>
          <div className="flex flex-col items-center mb-24">
            <Animate variants={fadeInUp}>
              <div>
                <h1 className="text-3xl md:text-5xl font-medium mb-6">
                  {t('about.ourStory.title')}
                </h1>
                <p className="text-lg text-gray-600 whitespace-pre-line">
                  {t('about.ourStory.text')}
                </p>
              </div>
            </Animate>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default AboutUs;
