import { Button } from '@/components/ui/button';

const Products = () => {
  return (
    <section className="py-16 md:py-24 bg-lucy-beige" id="products">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">DETTA ÄR LUCY</h2>
          <p className="text-xl md:text-2xl font-medium mb-4">En plattform. Tre kraftfulla produkter.</p>
          
          <p className="max-w-3xl mx-auto text-lg">
            Lucy består av tre AI-drivna verktyg som gör hotellen bättre på det som spelar mest roll – samarbete i teamet, smart kommunikation med gäster och datadrivna beslut baserade på vad gästerna faktiskt tycker.
          </p>
          <p className="max-w-3xl mx-auto text-lg mt-4">
            Produkter som fungerar var för sig. Men tillsammans blir de ett oslagbart system.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard 
            title="LUCY COPILOT" 
            description="Få hotellet att fungera som ett team."
            subtext="Ett kommunikationsverktyg som är byggt specifikt för hotell – med allt ni behöver, samlat på ett ställe."
            ctaText="Läs mer om Lucy Copilot"
            href="#copilot"
          />
          
          <ProductCard 
            title="LUCY GUEST COMMUNICATIONS" 
            description="När gästen får ett personligt meddelande – och bokar mer."
            subtext="AI-baserad gästkommunikation via e-post, sms och WhatsApp som inte bara ökar servicekänslan – utan även försäljningen."
            ctaText="Utforska Lucy Guest Communications"
            href="#guest-communications"
          />
          
          <ProductCard 
            title="REPUTATION & COMPETITION DASHBOARD" 
            description="Vad säger gästerna – egentligen?"
            subtext="Få full koll på hur dina gäster upplever varje avdelning – och hur du ligger till jämfört med dina konkurrenter."
            ctaText="Se hur ni ligger till"
            href="#reputation-dashboard"
          />
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
    <div className="bg-white p-8 rounded-lg flex flex-col h-full">
      <h3 className="text-lg font-medium text-gray-500 mb-4">{title}</h3>
      <h4 className="text-xl font-medium mb-4">{description}</h4>
      <p className="text-gray-700 mb-6 flex-grow">{subtext}</p>
      <Button 
        variant="link" 
        className="text-lucy-dark-gray p-0 justify-start font-medium"
        onClick={handleClick}
      >
        {ctaText} →
      </Button>
    </div>
  );
};

export default Products;
