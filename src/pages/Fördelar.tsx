
import Navbar from "@/components/Navbar";
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

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
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
                <h2 className="text-2xl font-medium mb-8">{t('benefits.efficiency.title')}</h2>
                <ul className="space-y-4">
                  <FeatureItem text={t('benefits.efficiency.item1')} />
                  <FeatureItem text={t('benefits.efficiency.item2')} />
                  <FeatureItem text={t('benefits.efficiency.item3')} />
                  <FeatureItem text={t('benefits.efficiency.item4')} />
                </ul>
              </div>
            </Animate>
            <Animate variants={slideInRight}>
              <div>
                <h2 className="text-2xl font-medium mb-8">{t('benefits.economic.title')}</h2>
                <ul className="space-y-4">
                  <FeatureItem text={t('benefits.economic.item1')} />
                  <FeatureItem text={t('benefits.economic.item2')} />
                  <FeatureItem text={t('benefits.economic.item3')} />
                  <FeatureItem text={t('benefits.economic.item4')} />
                </ul>
              </div>
            </Animate>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            <Animate variants={slideInLeft} transition={{ delay: 0.2 }}>
              <div>
                <h2 className="text-2xl font-medium mb-8">{t('benefits.guest.title')}</h2>
                <ul className="space-y-4">
                  <FeatureItem text={t('benefits.guest.item1')} />
                  <FeatureItem text={t('benefits.guest.item2')} />
                  <FeatureItem text={t('benefits.guest.item3')} />
                  <FeatureItem text={t('benefits.guest.item4')} />
                </ul>
              </div>
            </Animate>
            <Animate variants={slideInRight} transition={{ delay: 0.2 }}>
              <div>
                <h2 className="text-2xl font-medium mb-8">{t('benefits.team.title')}</h2>
                <ul className="space-y-4">
                  <FeatureItem text={t('benefits.team.item1')} />
                  <FeatureItem text={t('benefits.team.item2')} />
                  <FeatureItem text={t('benefits.team.item3')} />
                  <FeatureItem text={t('benefits.team.item4')} />
                </ul>
              </div>
            </Animate>
          </div>

          <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
            <div className="mt-16 text-center">
              <Button 
                className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium px-8"
                onClick={() => window.open('mailto:contact@lucy.ai?subject=Demo Request', '_blank')}
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
