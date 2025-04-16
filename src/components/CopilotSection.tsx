
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Animate } from '@/components/ui/animate';
import { fadeInUp, slideInLeft, slideInRight } from '@/lib/utils';

const CopilotSection = () => {
  const handleLearnMoreClick = () => {
    console.log('Learn more about Lucy Team Communications clicked');
    window.open('mailto:contact@lucy.ai?subject=Lucy Team Communications Inquiry', '_blank');
  };

  return (
    <section className="py-16 md:py-24 bg-lucy-dark-gray-new text-lucy-white" id="team-communications">
      <div className="container">
        <div className="text-center mb-16">
          <Animate variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-medium mt-4 mb-6">Lucy Team Communications</h2>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.2 }}>
            <p className="text-xl md:text-2xl font-medium mb-4">Få hotellet att fungera som ett team.</p>
          </Animate>
          <Animate variants={fadeInUp} transition={{ delay: 0.4 }}>
            <p className="max-w-3xl mx-auto text-lg text-lucy-light-gray-new">
              Ett kommunikationsverktyg som är byggt specifikt för hotell – med allt ni behöver, samlat på ett ställe.
            </p>
          </Animate>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <Animate variants={slideInLeft}>
              <h3 className="text-2xl font-medium mb-6">Fördelar:</h3>
              <ul className="space-y-4 text-lucy-light-gray-new">
                <FeatureItem text="Bygger bort silos – all intern kommunikation i en kanal." />
                <FeatureItem text="Sparar tid – AI hjälper till med rapporter, översättningar och arbetsordrar." />
                <FeatureItem text="Gör vardagen enklare – onboarding, instruktioner och rutiner alltid nära till hands." />
              </ul>
            </Animate>
          </div>
          <div className="flex items-center justify-center">
            <Animate variants={slideInRight}>
              <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
                <div className="h-full w-full rounded-[2rem] overflow-hidden bg-white">
                  <img 
                    src="/lovable-uploads/2f76131d-b075-4d0f-bac6-c17281009a9b.png" 
                    alt="Lucy Copilot app screenshot" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Animate>
          </div>
        </div>
        
        <div>
          <Animate variants={fadeInUp} transition={{ delay: 0.6 }}>
            <h3 className="text-2xl font-medium mb-8 text-center">Exempel på funktioner:</h3>
          </Animate>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Animate variants={fadeInUp} transition={{ delay: 0.8 }}>
              <FunctionCard 
                title="Skiftrapporter" 
                description="Medarbetare rapporterar sina skift → Lucy sammanställer automatiskt och skickar en överblick varje morgon."
              />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.0 }}>
              <FunctionCard 
                title="Automatisk översättning" 
                description="Alla meddelanden och rapporter översätts till medarbetarens modersmål."
              />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.2 }}>
              <FunctionCard 
                title="Onboarding & utbildning" 
                description="Skapa och skicka onboardingmaterial direkt via Lucy. Anpassa per roll och avdelning."
              />
            </Animate>
            <Animate variants={fadeInUp} transition={{ delay: 1.4 }}>
              <FunctionCard 
                title="Work orders" 
                description="Enkla felanmälningar och uppföljning. Med realtidsnotiser i mobilen eller på klockan."
              />
            </Animate>
          </div>
          
          <div className="mt-12 text-center">
            <Animate variants={fadeInUp} transition={{ delay: 1.6 }}>
              <Button 
                className="bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 font-medium px-8"
                onClick={handleLearnMoreClick}
              >
                Läs mer om Lucy Team Communications
              </Button>
            </Animate>
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
    <div className="bg-lucy-black p-6 rounded-lg shadow-sm">
      <h4 className="text-lg font-medium mb-2 text-lucy-white">{title}</h4>
      <p className="text-sm text-lucy-light-gray-new">{description}</p>
    </div>
  );
};

export default CopilotSection;
