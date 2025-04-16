import { Button } from '@/components/ui/button';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';

const Products = () => {
  return (
    <section className="py-16 md:py-24 bg-lucy-medium-gray text-lucy-white" id="products">
      <div className="container">
        <div className="text-center mb-16">
          <Animate variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">Detta är Lucy</h2>
          </Animate>
          <Animate variants={slideInLeft}>
            <p className="text-xl md:text-2xl font-medium mb-4">En plattform. Två kraftfulla produkter.</p>
          </Animate>
          
          <Animate variants={slideInRight}>
            <p className="max-w-3xl mx-auto text-lg">
              Lucy består av två AI-drivna verktyg som gör hotellen bättre på det som spelar mest roll – samarbete i teamet och smart kommunikation med gäster.
            </p>
          </Animate>
          <Animate variants={slideInLeft}>
            <p className="max-w-3xl mx-auto text-lg mt-4">
              Produkter som fungerar var för sig. Men tillsammans blir de ett oslagbart system.
            </p>
          </Animate>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Animate variants={fadeInUp} transition={{ delay: 0.2 }}>
            <ProductCard 
              title="LUCY TEAM COMMUNICATIONS" 
              description="Få hotellet att fungera som ett team."
              subtext="Ett kommunikationsverktyg som är byggt specifikt för hotell – med allt ni behöver, samlat på ett ställe."
              ctaText="Läs mer om Lucy Team Communications"
              href="#team-communications"
            />
          </Animate>
          
          <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
            <ProductCard 
              title="LUCY GUEST COMMUNICATIONS" 
              description="När gästen får ett personligt meddelande – och bokar mer."
              subtext="AI-baserad gästkommunikation via e-post, sms och WhatsApp som inte bara ökar servicekänslan – utan även försäljningen."
              ctaText="Utforska Lucy Guest Communications"
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
