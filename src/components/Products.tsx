
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-white text-lucy-black">
      <div className="container text-center max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-medium mb-4">{t('products.title')}</h2>
        {/* Combined subtitle, description, and additionalInfo into one paragraph */}
        <p className="text-lg font-normal whitespace-pre-line max-w-3xl mx-auto">
          {`${t('products.subtitle')}\n\n${t('products.description')}\n\n${t('products.additionalInfo')}`}
        </p>
      </div>
    </section>
  );
};

export default Products;
