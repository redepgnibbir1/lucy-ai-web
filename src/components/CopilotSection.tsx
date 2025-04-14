
import { Button } from '@/components/ui/button';

const CopilotSection = () => {
  return (
    <section className="py-16 md:py-24" id="copilot">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-2xl">🧑‍🤝‍🧑</span>
          <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">LUCY COPILOT</h2>
          <p className="text-xl md:text-2xl font-medium mb-4">Få hotellet att fungera som ett team.</p>
          <p className="max-w-3xl mx-auto text-lg">
            Ett kommunikationsverktyg som är byggt specifikt för hotell – med allt ni behöver, samlat på ett ställe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h3 className="text-2xl font-medium mb-6">Fördelar:</h3>
            <ul className="space-y-4">
              <FeatureItem text="Bygger bort silos – all intern kommunikation i en kanal." />
              <FeatureItem text="Sparar tid – AI hjälper till med rapporter, översättningar och arbetsordrar." />
              <FeatureItem text="Gör vardagen enklare – onboarding, instruktioner och rutiner alltid nära till hands." />
            </ul>
          </div>
          <div className="bg-lucy-blue-green rounded-lg p-6 h-72 flex items-center justify-center">
            <p className="text-center font-medium text-lg">Produktskärmbild</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-medium mb-8 text-center">Exempel på funktioner:</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <FunctionCard 
              emoji="📝" 
              title="Skiftrapporter" 
              description="Medarbetare rapporterar sina skift → Lucy sammanställer automatiskt och skickar en överblick varje morgon."
            />
            <FunctionCard 
              emoji="🌍" 
              title="Automatisk översättning" 
              description="Alla meddelanden och rapporter översätts till medarbetarens modersmål."
            />
            <FunctionCard 
              emoji="🎓" 
              title="Onboarding & utbildning" 
              description="Skapa och skicka onboardingmaterial direkt via Lucy. Anpassa per roll och avdelning."
            />
            <FunctionCard 
              emoji="🔧" 
              title="Work orders" 
              description="Enkla felanmälningar och uppföljning. Med realtidsnotiser i mobilen eller på klockan."
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium px-8">
              Läs mer om Lucy Copilot
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
      <span className="text-lucy-neon-yellow font-bold text-xl">✅</span>
      <span>{text}</span>
    </li>
  );
};

interface FunctionCardProps {
  emoji: string;
  title: string;
  description: string;
}

const FunctionCard = ({ emoji, title, description }: FunctionCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="text-2xl mb-3">{emoji}</div>
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default CopilotSection;
