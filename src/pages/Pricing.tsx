
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';

interface PricingCardProps {
  title: string;
  price: string;
  priceInfo: string;
  features: string[];
  buttonText: string;
  popular: boolean;
  onContactClick: () => void;
}

const PricingCard: React.FC<PricingCardProps> = ({ 
  title, 
  price, 
  priceInfo, 
  features, 
  buttonText, 
  popular,
  onContactClick 
}) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-8 border border-gray-200 ${popular ? 'border-2 border-lucy-neon-yellow' : ''}`}>
      <h3 className="text-2xl font-martina mb-4">{title}</h3>
      <p className="text-4xl font-bold mb-4">
        {price} <span className="text-sm font-normal text-gray-500">{priceInfo}</span>
      </p>
      <ul className="space-y-2 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <button 
        className="w-full py-2 px-4 bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 transition-colors rounded font-medium"
        onClick={onContactClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  // Properly handle casting with a safeguard approach
  const getStringArray = (key: string): string[] => {
    const value = t(key);
    return Array.isArray(value) ? value : [];
  };

  const teamFeatures = getStringArray('pricing.teamCommunications.features');
  const guestFeatures = getStringArray('pricing.guestCommunications.features');
  const benefitsItems = getStringArray('pricing.staffSurvey.benefits.items');
  const featuresItems = getStringArray('pricing.staffSurvey.features.items');

  const handleContactClick = () => {
    console.log('Contact button clicked from Pricing page');
    setIsContactFormOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-martina mb-4">{t('pricing.pageTitle')}</h1>
          <p className="text-lg text-gray-700">{t('pricing.subtitle')}</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Team Communications */}
          <PricingCard
            title={t('pricing.teamCommunications.title')}
            price={t('pricing.teamCommunications.price')}
            priceInfo={t('pricing.teamCommunications.period')}
            features={teamFeatures}
            buttonText={t('pricing.teamCommunications.buttonText')}
            popular={false}
            onContactClick={handleContactClick}
          />

          {/* Guest Communications */}
          <PricingCard
            title={t('pricing.guestCommunications.title')}
            price={t('pricing.guestCommunications.price')}
            priceInfo={t('pricing.guestCommunications.period')}
            features={guestFeatures}
            buttonText={t('pricing.guestCommunications.buttonText')}
            popular={true}
            onContactClick={handleContactClick}
          />
        </div>

        {/* Add-ons Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-martina text-center mb-12">{t('pricing.staffSurvey.title')}</h2>
          <p className="text-center text-lg mb-8">{t('pricing.staffSurvey.subtitle')}</p>
          <p className="text-center text-2xl font-bold mb-12">{t('pricing.staffSurvey.price')}</p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-xl font-medium mb-4">{t('pricing.staffSurvey.benefits.title')}</h3>
              <ul className="space-y-2 mb-8">
                {benefitsItems.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Features */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-xl font-medium mb-4">{t('pricing.staffSurvey.features.title')}</h3>
              <ul className="space-y-2 mb-8">
                {featuresItems.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 text-center">
          <h2 className="text-3xl font-martina mb-6">{t('pricing.questions.title')}</h2>
          <button 
            className="px-8 py-3 bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 transition-colors rounded-md font-medium"
            onClick={handleContactClick}
          >
            {t('pricing.questions.buttonText')}
          </button>
        </div>
      </div>
      
      {isContactFormOpen && (
        <ContactForm 
          isOpen={isContactFormOpen} 
          onClose={() => setIsContactFormOpen(false)} 
        />
      )}
    </div>
  );
};

export default Pricing;
