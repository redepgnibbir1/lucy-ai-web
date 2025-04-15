
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const handleDemoClick = () => {
    console.log('Demo button clicked from pricing page');
    window.open('mailto:contact@lucy.ai?subject=Demo Request', '_blank');
  };

  return (
    <div className="min-h-screen">
      <div className="container py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-medium mb-6">Prisplaner för alla behov</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Oavsett om du driver ett litet hotell eller en stor hotellkedja har vi en prisplan som passar dig.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Starter"
            price="2 900"
            description="Perfekt för små hotell som vill komma igång med Lucy."
            features={[
              "Lucy Guest Communications",
              "Upp till 30 rum",
              "E-post support",
              "Begränsade AI-funktioner"
            ]}
            buttonText="Kontakta säljare"
            isPopular={false}
          />
          
          <PricingCard 
            title="Professional"
            price="5 900"
            description="För medelstora hotell som vill få ut maximalt av Lucy."
            features={[
              "Alla Starter-funktioner",
              "Lucy Guest Communications",
              "Lucy Reputation Dashboard",
              "Upp till 100 rum",
              "Prioriterad support",
              "Fullständiga AI-funktioner"
            ]}
            buttonText="Kontakta säljare"
            isPopular={true}
          />
          
          <PricingCard 
            title="Enterprise"
            price="Kontakta oss"
            description="Skräddarsydda lösningar för större hotellkedjor."
            features={[
              "Alla Professional-funktioner",
              "Lucy Copilot",
              "Obegränsat antal rum",
              "Dedikerad kundansvarig",
              "24/7 support",
              "Skräddarsydda integrationer"
            ]}
            buttonText="Kontakta säljare"
            isPopular={false}
          />
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">Har du frågor om våra prisplaner?</h2>
          <Button 
            className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium px-8"
            onClick={handleDemoClick}
          >
            Boka en demo
          </Button>
        </div>
      </div>
    </div>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
}

const PricingCard = ({ title, price, description, features, buttonText, isPopular }: PricingCardProps) => {
  const handleClick = () => {
    console.log(`${title} plan button clicked`);
    window.open('mailto:contact@lucy.ai?subject=Pricing Inquiry - ' + title, '_blank');
  };

  return (
    <div className={`relative rounded-xl border shadow-sm p-6 flex flex-col ${
      isPopular ? 'border-lucy-neon-yellow shadow-lg' : 'border-gray-200'
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-lucy-neon-yellow text-lucy-dark-gray text-sm font-medium rounded-full">
          Populärast
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="flex items-end gap-1 mb-2">
          <span className="text-3xl font-bold">{price}</span>
          {price !== "Kontakta oss" && <span className="text-gray-600">kr/mån</span>}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Button 
        className={`w-full ${
          isPopular 
            ? 'bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90' 
            : 'bg-white text-gray-800 border border-gray-300 hover:bg-gray-50'
        }`}
        onClick={handleClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default Pricing;
