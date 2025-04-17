import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface PricingCardProps {
  title: string;
  price: string;
  priceInfo: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, priceInfo, features, buttonText, popular }) => {
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
      <button className="w-full py-2 px-4 bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 transition-colors rounded font-medium">
        {buttonText}
      </button>
    </div>
  );
};

const Pricing = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-martina mb-4">{t('pricing.title', 'Simple Pricing for Powerful Tools')}</h1>
          <p className="text-lg text-gray-700">{t('pricing.subtitle', 'Choose the plan that fits your needs.')}</p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {/* Standard Plan */}
          <PricingCard
            title={t('pricing.standardTitle', 'Standard')}
            price={t('pricing.standardPrice', '595')}
            priceInfo={t('pricing.perRoom', '/room/month')}
            features={t('pricing.standardFeatures', [
              'Guest communications',
              'Team communications',
              'Basic analytics',
              'Email support'
            ]) as string[]}
            buttonText={t('pricing.getStarted', 'Get Started')}
            popular={false}
          />

          {/* Premium Plan */}
          <PricingCard
            title={t('pricing.premiumTitle', 'Premium')}
            price={t('pricing.premiumPrice', '895')}
            priceInfo={t('pricing.perRoom', '/room/month')}
            features={t('pricing.premiumFeatures', [
              'All Standard features',
              'Premium analytics',
              'Custom integrations',
              'Priority support',
              'Dedicated account manager'
            ]) as string[]}
            buttonText={t('pricing.contactSales', 'Contact Sales')}
            popular={true}
          />
        </div>

        {/* Add-ons Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-martina text-center mb-12">{t('pricing.staffSurvey', 'Staff Satisfaction Survey')}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Basic */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-xl font-medium mb-4">{t('pricing.basicTitle', 'Basic')}</h3>
              <p className="text-2xl font-bold mb-8">
                {t('pricing.basicSurveyPrice', '10 000')} <span className="text-sm font-normal text-gray-500">{t('pricing.perYear', '/year')}</span>
              </p>
              <ul className="space-y-2 mb-8">
                {(t('pricing.basicSurveyFeatures', [
                  'Quarterly survey',
                  'Basic reporting',
                  'Department level insights',
                  'Year over year comparison'
                ]) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 transition-colors rounded font-medium">
                {t('pricing.getStarted', 'Get Started')}
              </button>
            </div>
            
            {/* Premium */}
            <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
              <h3 className="text-xl font-medium mb-4">{t('pricing.advancedTitle', 'Advanced')}</h3>
              <p className="text-2xl font-bold mb-8">
                {t('pricing.advancedSurveyPrice', '25 000')} <span className="text-sm font-normal text-gray-500">{t('pricing.perYear', '/year')}</span>
              </p>
              <ul className="space-y-2 mb-8">
                {(t('pricing.advancedSurveyFeatures', [
                  'Monthly survey',
                  'Advanced reporting & dashboards',
                  'Individual level insights',
                  'Custom questions',
                  'Dedicated support'
                ]) as string[]).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2 px-4 bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 transition-colors rounded font-medium">
                {t('pricing.contactSales', 'Contact Sales')}
              </button>
            </div>
          </div>
        </div>
        
        {/* FAQ Section (Example) */}
        {/* <div className="mt-20">
          <h2 className="text-3xl font-martina text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-2">What is included in the Standard plan?</h3>
              <p className="text-gray-700">The Standard plan includes guest communications, team communications, basic analytics, and email support.</p>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">What is included in the Premium plan?</h3>
              <p className="text-gray-700">The Premium plan includes all Standard features, premium analytics, custom integrations, priority support, and a dedicated account manager.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Pricing;
