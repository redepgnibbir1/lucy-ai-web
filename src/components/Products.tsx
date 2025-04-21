
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white text-lucy-black">
      <div className="container text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">{t('products.title')}</h2>
        {/* Adjusted subtitle font size and weight to match products.description and products.additionalInfo */}
        <p className="text-lg font-normal mb-6">{t('products.subtitle')}</p>
        <p className="text-lg font-normal mb-6">{t('products.description')}</p>
        <p className="text-lg font-normal">{t('products.additionalInfo')}</p>
      </div>
    </section>
  );
};

export default Products;

