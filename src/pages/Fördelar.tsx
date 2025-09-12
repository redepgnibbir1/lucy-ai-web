
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";
import CalendlyWidget from "@/components/CalendlyWidget";
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/utils';
import { useLanguage } from "@/contexts/LanguageContext";

const Fördelar = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const { t } = useLanguage();

  const handleDemoClick = () => {
    console.log('Demo button clicked from Fördelar page');
    setIsCalendlyOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16 md:py-24">
        <Animate variants={staggerContainer}>
          <Animate variants={fadeInUp}>
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl font-medium mb-6">{t('benefits.title')}</h1>
              <p className="text-xl max-w-3xl mx-auto">
                {t('benefits.subtitle')}
              </p>
            </div>
          </Animate>

          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <Animate variants={slideInLeft}>
              <div>
                <h2 className="text-2xl font-medium mb-8">{t('benefits.operational.title')}</h2>
                <ul className="space-y-4">
                  <FeatureItem text={t('benefits.operational.item1')} />
                  <FeatureItem text={t('benefits.operational.item2')} />
                  <FeatureItem text={t('benefits.operational.item3')} />
                </ul>
              </div>
            </Animate>
            <Animate variants={slideInRight}>
              <div>
                <h2 className="text-2xl font-medium mb-8">{t('benefits.consistency.title')}</h2>
                <ul className="space-y-4">
                  <FeatureItem text={t('benefits.consistency.item1')} />
                  <FeatureItem text={t('benefits.consistency.item2')} />
                  <FeatureItem text={t('benefits.consistency.item3')} />
                </ul>
              </div>
            </Animate>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <Animate variants={slideInLeft} transition={{ delay: 0.2 }}>
              <div>
                <h2 className="text-2xl font-medium mb-8">{t('benefits.employee.title')}</h2>
                <ul className="space-y-4">
                  <FeatureItem text={t('benefits.employee.item1')} />
                  <FeatureItem text={t('benefits.employee.item2')} />
                  <FeatureItem text={t('benefits.employee.item3')} />
                </ul>
              </div>
            </Animate>
            <Animate variants={slideInRight} transition={{ delay: 0.2 }}>
              <div>
                <h2 className="text-2xl font-medium mb-8">{t('benefits.customer.title')}</h2>
                <ul className="space-y-4">
                  <FeatureItem text={t('benefits.customer.item1')} />
                  <FeatureItem text={t('benefits.customer.item2')} />
                  <FeatureItem text={t('benefits.customer.item3')} />
                </ul>
              </div>
            </Animate>
          </div>

          <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
            <div className="mt-16 text-center">
              <Button 
                className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium px-8"
                onClick={handleDemoClick}
              >
                {t('benefits.bookDemo')}
              </Button>
            </div>
          </Animate>
        </Animate>
      </div>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </div>
  );
};

const FeatureItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-3">
      <Check className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
};

export default Fördelar;
