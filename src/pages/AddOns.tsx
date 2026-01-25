import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ContactForm from '@/components/ContactForm';

interface AddOnCardProps {
  title: string;
  description: string;
}

const AddOnCard: React.FC<AddOnCardProps> = ({ 
  title, 
  description
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

const AddOns = () => {
  const { t } = useLanguage();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const handleContactClick = () => {
    console.log('Contact button clicked from Add-ons page');
    setIsContactFormOpen(true);
  };

  const addOns = [
    {
      title: t('addons.reviewFlow.title'),
      description: t('addons.reviewFlow.description')
    },
    {
      title: t('addons.reputation.title'),
      description: t('addons.reputation.description')
    },
    {
      title: t('addons.customAI.title'),
      description: t('addons.customAI.description')
    },
    {
      title: t('addons.incident.title'),
      description: t('addons.incident.description')
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-martina mb-4">{t('addons.pageTitle')}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">{t('addons.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {addOns.map((addon, index) => (
            <AddOnCard
              key={index}
              title={addon.title}
              description={addon.description}
            />
          ))}
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

export default AddOns;