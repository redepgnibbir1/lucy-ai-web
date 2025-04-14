
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              AI för hotell som vill mer – med mindre ansträngning.
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-lucy-dark-gray/90">
              Lucy är en ny generation AI-drivna verktyg för hotell. Vi hjälper hotellteam att kommunicera smartare, effektivisera arbetsflöden och sälja mer – samtidigt som både medarbetare och gäster får en bättre upplevelse.
            </p>
            
            <div className="flex flex-col md:flex-row justify-start gap-4 mb-10">
              <div className="flex items-center gap-2">
                <span>Utvecklat tillsammans med hotellchefer.</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Bevisad effekt på lönsamhet, arbetsro och gästnöjdhet.</span>
              </div>
            </div>
            
            <Button className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium text-lg px-8 py-6 h-auto">
              Boka en demo
            </Button>
          </div>
          
          <div className="order-1 md:order-2 bg-white rounded-lg shadow-md p-4 overflow-hidden">
            <img 
              src="/lovable-uploads/9edf9ed8-677a-485a-a1e9-adf4bac89b2f.png" 
              alt="Lucy Guest Communications Interface" 
              className="w-full h-auto rounded"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
