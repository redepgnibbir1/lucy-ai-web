import { Button } from '@/components/ui/button';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const Products = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 md:py-24 bg-lucy-black text-lucy-white" id="products">
      <div className="container">
        <div className="text-center mb-16">
          <Animate variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">{t('products.title')}</h2>
          </Animate>
          <Animate variants={slideInLeft}>
            <p className="text-xl md:text-2xl font-medium mb-4">{t('products.subtitle')}</p>
          </Animate>
          
          <Animate variants={slideInRight}>
            <p className="max-w-3xl mx-auto text-lg">
              {t('products.description')}
            </p>
          </Animate>
          <Animate variants={slideInLeft}>
            <p className="max-w-3xl mx-auto text-lg mt-4">
              {t('products.additionalInfo')}
            </p>
          </Animate>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
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
  const handleClick = () => {
    console.log(`Product card clicked: ${title}`);
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <div className="bg-lucy-dark-gray-new p-8 rounded-lg flex flex-col h-full text-lucy-white">
      <h3 className="text-lg font-medium text-lucy-light-gray-new mb-4">{title}</h3>
      <h4 className="text-xl font-medium mb-4">{description}</h4>
      <p className="text-lucy-light-gray-new mb-6 flex-grow">{subtext}</p>
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
