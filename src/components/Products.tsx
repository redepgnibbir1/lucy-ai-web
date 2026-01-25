
import { Button } from '@/components/ui/button';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-white text-lucy-black overflow-x-hidden" id="products">
      <div className="container px-3 sm:px-4">
        <div className="text-center mb-16 max-w-full">
          <Animate variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">{t('products.title')}</h2>
          </Animate>
          
          <Animate variants={slideInLeft}>
            <p className="max-w-3xl mx-auto text-lg whitespace-pre-line">
              {`${t('products.subtitle')}\n\n${t('products.description')}\n\n${t('products.additionalInfo')}`}
            </p>
          </Animate>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Animate variants={fadeInUp} transition={{ delay: 0.2 }}>
            <ProductCard 
              title={t('products.team.title')} 
              description={t('products.team.description')}
              subtext={t('products.team.subtext')}
              ctaText={t('products.team.cta')}
              href="#team-communications"
            />
          </Animate>
          
          <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
            <ProductCard 
              title={t('products.conference.title')} 
              description={t('products.conference.description')}
              subtext={t('products.conference.subtext')}
              ctaText={t('products.conference.cta')}
              href="/conference-planner"
            />
          </Animate>
          
          <Animate variants={fadeInUp} transition={{ delay: 0.6 }}>
            <ProductCard 
              title={t('products.guest.title')} 
              description={t('products.guest.description')}
              subtext={t('products.guest.subtext')}
              ctaText={t('products.guest.cta')}
              href="#guest-communications"
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
  ctaText: string;
  href: string;
}

const ProductCard = ({ title, description, subtext, ctaText, href }: ProductCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    if (href && href.startsWith('#')) {
      const targetElement = document.getElementById(href.substring(1));
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href && href.startsWith('/')) {
      navigate(href);
    }
  };

  return (
    <div className="bg-white p-4 sm:p-8 rounded-lg flex flex-col h-full text-lucy-black w-full shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-gray-100">
      <h3 className="text-lg font-medium text-gray-600 mb-4">{title}</h3>
      <h4 className="text-xl font-medium mb-4 break-words text-lucy-black">{description}</h4>
      <p className="text-gray-600 mb-6 flex-grow break-words">{subtext}</p>
      <Button 
        variant="link" 
        className="text-lucy-neon-yellow p-0 justify-start font-medium"
        onClick={handleClick}
      >
        {ctaText} →
      </Button>
    </div>
  );
};

export default Products;
