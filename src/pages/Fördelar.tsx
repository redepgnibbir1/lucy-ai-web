
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Fördelar = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-medium mb-6">FÖRDELAR MED LUCY</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Genom att välja Lucy får hotell en rad fördelar som förbättrar kommunikation, ökar effektiviteten och förbättrar gästupplevelsen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-medium mb-8">Effektivitetsfördelar</h2>
            <ul className="space-y-4">
              <FeatureItem text="Spara upp till 30 min per person och dag av personalens tid genom automatiserade processer" />
              <FeatureItem text="All information på ditt modersmål minskar risken för missförstånd" />
              <FeatureItem text="Centraliserad kommunikation ger överblick över informationsflödet" />
              <FeatureItem text="AI-assistans med rutinmässiga uppgifter frigör tid för personlig service" />
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-8">Ekonomiska fördelar</h2>
            <ul className="space-y-4">
              <FeatureItem text="Ökad merförsäljning genom personanpassad kommunikation" />
              <FeatureItem text="Högre gästnöjdhet leder till fler återkommande gäster" />
              <FeatureItem text="Lägre personalomsättning genom bättre arbetsmiljö" />
              <FeatureItem text="ROI inom 2 månader för de flesta hotell" />
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-medium mb-8">Gästupplevelse</h2>
            <ul className="space-y-4">
              <FeatureItem text="Personlig kommunikation på gästens eget språk" />
              <FeatureItem text="Snabbare responstid på förfrågningar och behov" />
              <FeatureItem text="Konsekvent servicenivå oavsett tid på dygnet" />
              <FeatureItem text="Sömlös digital upplevelse från bokning till utcheckning" />
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium mb-8">Teamfördelar</h2>
            <ul className="space-y-4">
              <FeatureItem text="Bättre intern kommunikation mellan avdelningar" />
              <FeatureItem text="Snabb onboarding av ny personal gör nya medarbetare produktiva snabbt" />
              <FeatureItem text="Tydlig uppföljning och rapportering" />
              <FeatureItem text="Minskad stress genom tydliga rutiner och instruktioner" />
            </ul>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button 
            className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium px-8"
            onClick={() => window.open('mailto:contact@lucy.ai?subject=Demo Request', '_blank')}
          >
            Boka en demo
          </Button>
        </div>
      </div>
    </div>
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

export default Fördelar;
