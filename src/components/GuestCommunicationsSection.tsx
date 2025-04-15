import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const GuestCommunicationsSection = () => {
  const handleExploreClick = () => {
    console.log('Explore Lucy Guest Communications clicked');
    // In a real implementation, this might navigate to a product page
    window.open('mailto:contact@lucy.ai?subject=Guest Communications Inquiry', '_blank');
  };

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
          <div className="order-last md:order-first flex justify-center items-center">
            {/* Mac screen mockup */}
            <div className="relative mx-auto">
              {/* Mac screen frame */}
              <div className="relative mx-auto bg-gray-800 rounded-t-lg w-[640px] h-[400px] pt-6 pb-4 px-4">
                {/* Screen top bar with camera */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mr-1"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                
                {/* Screen content */}
                <div className="h-full w-full bg-white rounded overflow-hidden">
                  <img 
                    src="/lovable-uploads/b90b9d31-7d0a-4002-aa07-5aacc9705e0b.png" 
                    alt="Lucy Guest Communications interface" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Mac stand */}
              <div className="w-32 h-3 bg-gray-800 mx-auto rounded-b-lg"></div>
              <div className="w-48 h-1 bg-gray-700 mx-auto rounded-b-lg"></div>
              <div className="w-16 h-8 bg-gray-700 mx-auto rounded-b"></div>
            </div>
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
            <Button 
              className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium px-8"
              onClick={handleExploreClick}
            >
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
      <Check className="h-5 w-5 text-black mt-0.5 flex-shrink-0" />
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
