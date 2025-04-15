import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Pricing = () => {
  const handleDemoClick = () => {
    console.log('Demo button clicked from pricing page');
    window.open('mailto:contact@lucy.ai?subject=Demo Request', '_blank');
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container py-12 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl font-medium mb-6">Prisplaner för alla behov</h1>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            Tydlig, enkel och skalbar prismodell för alla våra produkter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard 
            title="Lucy Copilot"
            price="6-12€"
            period="rum/månad"
            description="Optimera ditt hotells verksamhet med vår AI-drivna copilot."
            features={[
              "Uppkoppling mot PMS",
              "Insikter baserade på AI",
              "Automatiserade arbetsflöden",
              "24/7 tillgänglig digital assistent",
              "Anpassad för hotellbranschen"
            ]}
            buttonText="Kontakta säljare"
            isPopular={true}
          />
          
          <PricingCard 
            title="Lucy Guest Communications"
            price="200€"
            period="månad + 15% av merförsäljning"
            description="Maximera intäkter och gästnöjdhet med automatiserad kommunikation."
            features={[
              "Automatiserade gästmeddelanden",
              "Merförsäljning av tjänster",
              "Uppgradering av rum",
              "Förbättrad gästnöjdhet",
              "Enkla upp- och nedsäljningar"
            ]}
            buttonText="Kontakta säljare"
            isPopular={false}
          />
        </div>

        <div className="mt-16 p-8 bg-gray-50 rounded-xl max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-medium mb-2">Medarbetarundersökning</h2>
            <p className="text-gray-600">Ett tillägg till Lucy Copilot för endast <span className="font-bold">+1€ per rum och månad</span></p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3">Fördelar för dig</h3>
              <ul className="space-y-2">
                {[
                  "Förbättrad personalengagemang",
                  "Minskad personalomsättning",
                  "Identifiera problem tidigt",
                  "Datadriven personalutveckling",
                  "Bättre teamsamarbete"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-medium mb-3">Inkluderade funktioner</h3>
              <ul className="space-y-2">
                {[
                  "Regelbundna anonyma undersökningar",
                  "Automatiserad rapportering",
                  "Trendanalys över tid",
                  "Insikter genom AI-analys",
                  "Anpassade frågeuppsättningar"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  isPopular: boolean;
  isAdditional?: boolean;
}

const PricingCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  buttonText, 
  isPopular,
  isAdditional = false
}: PricingCardProps) => {
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
      
      {isAdditional && (
        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit px-3 py-1 bg-gray-200 text-gray-700 text-sm font-medium rounded-full">
          Tillägg
        </div>
      )}
      
      <div className="mb-5">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <div className="flex items-end gap-1 mb-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-gray-600">{period}</span>
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
