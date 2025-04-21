
import React from 'react';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, staggerContainer } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutUs = () => {
  const { t } = useLanguage();
  
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
                <p className="text-lg text-gray-600 whitespace-pre-line mb-10">
                  {t('about.ourStory.text')}
                </p>
                {/* Updated yellow-green box with our values to match demo button color */}
                <div className="bg-lucy-neon-yellow border border-lucy-neon-yellow rounded-lg px-6 py-8 shadow mb-6">
                  <h2 className="text-2xl md:text-3xl font-semibold text-lucy-dark-gray mb-3">
                    {t('about.values.title')}
                  </h2>
                  <ul className="list-disc ml-5 text-lucy-dark-gray font-medium space-y-1">
                    <li>{t('about.values.item1')}</li>
                    <li>{t('about.values.item2')}</li>
                    <li>{t('about.values.item3')}</li>
                    <li>{t('about.values.item4')}</li>
                  </ul>
                </div>
              </div>
            </Animate>
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default AboutUs;

