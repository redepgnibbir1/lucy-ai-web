import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import CalendlyWidget from '@/components/CalendlyWidget';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from '@/lib/utils';

const KomIgang = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleContactClick = () => {
    console.log('Contact button clicked from KomIgang page');
    setIsCalendlyOpen(true);
  };

  return (
    <div className="min-h-screen bg-lucy-light-gray">
      <Navbar />
      
      <div className="container py-16 md:py-24">
        <Animate variants={staggerContainer}>
          <div className="max-w-4xl mx-auto">
            <Animate variants={fadeInUp}>
              <h1 className="text-4xl md:text-5xl font-medium mb-8 font-martina">
                Kom igång med Lucy
              </h1>
            </Animate>
            
            <Animate variants={slideInLeft}>
              <p className="text-lg mb-8 text-lucy-dark-gray/80">
                Vi på Lucy gör det enkelt för er att komma igång med våra AI-lösningar. 
                Vi erbjuder en smidig och professionell implementeringsprocess för att säkerställa att ert hotell får maximal nytta av vår plattform.
              </p>
            </Animate>

            <Animate variants={slideInRight}>
              <div className="bg-white rounded-lg p-8 mb-12 shadow-sm">
                <h2 className="text-2xl font-medium mb-6 font-martina">
                  Gratis onboarding för hotell med över 50 rum
                </h2>
                
                <p className="mb-6">
                  Vi investerar i er framgång. Därför erbjuder vi hotell med över 50 rum gratis onboarding, vilket inkluderar:
                </p>
                
                <ul className="space-y-3 mb-8">
                  {[
                    'Personlig implementeringsplan',
                    'Skräddarsydd konfiguration av Lucy-plattformen',
                    'Fysiska utbildningsmöten med ert team',
                    'Kontinuerligt stöd under uppstartsperioden',
                    'Uppföljningsmöten för att optimera användningen',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-gray-50 p-6 rounded-md border border-gray-100">
                  <h3 className="text-xl font-medium mb-3 font-martina">Vår process</h3>
                  <ol className="list-decimal list-inside space-y-2 ml-2">
                    <li>Inledande konsultation för att förstå era behov</li>
                    <li>Skräddarsydd implementeringsplan</li>
                    <li>Teknisk installation och konfiguration</li>
                    <li>Fysiska utbildningssessioner med personalen</li>
                    <li>Uppföljning och optimering</li>
                  </ol>
                </div>
              </div>
            </Animate>

            <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 font-martina">
                  Redo att ta nästa steg?
                </h2>
                <p className="mb-6">
                  Kontakta oss idag för att diskutera hur vi kan hjälpa ert hotell att öka intäkterna och effektivisera arbetsflödena.
                </p>
                <Button 
                  className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium text-lg px-8 py-6 h-auto"
                  onClick={handleContactClick}
                >
                  Kontakta oss
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
