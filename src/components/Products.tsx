
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';

const Products = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-24 bg-lucy-black text-lucy-white" id="products">
      <div className="container">
        <div className="text-center mb-16">
          <Animate variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">{t('products.title')}</h2>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.2 }}>
            <p className="text-xl md:text-2xl font-medium mb-4">{t('products.subtitle')}</p>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
            <p className="max-w-3xl mx-auto text-lg">{t('products.description')}</p>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.6 }}>
            <p className="max-w-3xl mx-auto text-base mt-4 italic">{t('products.additionalInfo')}</p>
          </Animate>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Animate variants={slideInLeft}>
            <ProductCard 
              title={t('products.team.title')} 
              description={t('products.team.description')}
              subtext={t('products.team.subtext')}
              cta={t('products.team.cta')}
              imageSrc="/lovable-uploads/260e1d44-6dbe-4878-b03e-e9ea90bf85e1.png"
              bgColor="bg-lucy-dark-gray-new"
            />
          </Animate>
          <Animate variants={slideInRight}>
            <ProductCard 
              title={t('products.guest.title')} 
              description={t('products.guest.description')}
              subtext={t('products.guest.subtext')}
              cta={t('products.guest.cta')}
              imageSrc="/lovable-uploads/579b972c-d18d-4c9b-b746-d83156364992.png"
              bgColor="bg-lucy-dark-gray-new"
            />
          </Animate>
        </div>
      </div>
    </section>
  );
};

interface ProductCardProps {
  title: string;
  description: string;
  subtext: string;
  cta: string;
  imageSrc: string;
  bgColor: string;
}

const ProductCard = ({ 
  title, 
  description, 
  subtext, 
  cta, 
  imageSrc,
  bgColor 
}: ProductCardProps) => {
  return (
    <div className={`${bgColor} rounded-xl p-8 flex flex-col justify-between h-full`}>
      <div>
        <h3 className="text-2xl font-medium mb-4">{title}</h3>
        <p className="text-xl mb-4">{description}</p>
        <p className="mb-6">{subtext}</p>
      </div>
      <div className="mt-6">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-auto object-contain mb-6" 
        />
        <a 
          href="#" 
          className="inline-block px-6 py-3 bg-lucy-neon-yellow text-lucy-black rounded-lg hover:bg-opacity-90 transition-colors"
        >
          {cta}
        </a>
      </div>
    </div>
  );
};

export default Products;

