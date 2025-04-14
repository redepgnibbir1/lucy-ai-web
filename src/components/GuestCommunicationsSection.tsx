
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const GuestCommunicationsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-lucy-blue-green" id="guest-communications">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">LUCY GUEST COMMUNICATIONS</h2>
          <p className="text-xl md:text-2xl font-medium mb-4">När gästen får ett personligt meddelande – och bokar mer.</p>
          <p className="max-w-3xl mx-auto text-lg">
            AI-baserad gästkommunikation via e-post, sms och WhatsApp som inte bara ökar servicekänslan – utan även försäljningen.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div className="bg-white rounded-lg p-6 h-72 flex items-center justify-center order-last md:order-first">
            <p className="text-center font-medium text-lg">Produktskärmbild</p>
          </div>
          <div>
            <h3 className="text-2xl font-medium mb-6">Fördelar:</h3>
            <ul className="space-y-4">
              <FeatureItem text="Personaliserade meddelanden som ökar merförsäljning och gästnöjdhet." />
              <FeatureItem text="Automatiserad kommunikation som sparar tid och säkerställer konsekvent service." />
              <FeatureItem text="Mångsidiga kommunikationskanaler: e-post, SMS och WhatsApp i ett enda verktyg." />
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-medium mb-8 text-center">Exempel på funktioner:</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FunctionCard 
              title="Personaliserade välkomstmeddelanden" 
              description="Automatiska hälsningar som anpassas efter gästinformation och tidigare bokningar."
            />
            <FunctionCard 
              title="Pre-arrival upsell" 
              description="Smarta erbjudanden som ökar RevPAR genom att sälja uppgraderingar före ankomst."
            />
            <FunctionCard 
              title="Gästenkäter & feedback" 
              description="Automatiserad insamling av gästrecensioner med åtgärdbara insikter."
            />
            <FunctionCard 
              title="AI-assistans" 
              description="Lucy skriver och översätter meddelanden, skapar mallar och analyserar svar automatiskt."
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium px-8">
              Utforska Lucy Guest Communications
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ text }: { text: string }) => {
  return (
    <li className="flex items-start gap-3">
      <Check className="h-5 w-5 text-lucy-neon-yellow mt-0.5 flex-shrink-0" />
      <span>{text}</span>
    </li>
  );
};

interface FunctionCardProps {
  title: string;
  description: string;
}

const FunctionCard = ({ title, description }: FunctionCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default GuestCommunicationsSection;
