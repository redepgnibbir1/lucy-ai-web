
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 font-martina">
            Latest insights. Greatest stays.
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-lucy-dark-gray/80 max-w-3xl mx-auto">
            Lucy brings together a powerful team of AI agents to streamline operations and boost efficiency for your hotel — all within one seamless, user-friendly platform.
          </p>
          
          <div className="mt-16 mb-10">
            <p className="text-sm uppercase tracking-wider mb-8 text-gray-500">Trusted by quality hotels</p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              <div className="w-20 h-12 flex items-center justify-center opacity-70">
                <span className="text-lg font-medium">CONVENDIUM</span>
              </div>
              <div className="w-20 h-12 flex items-center justify-center opacity-70">
                <span className="text-lg font-medium">Vår Gård</span>
              </div>
              <div className="w-20 h-12 flex items-center justify-center opacity-70">
                <span className="text-lg font-medium">VILLA DAHLIA</span>
              </div>
              <div className="w-20 h-12 flex items-center justify-center opacity-70">
                <span className="text-lg font-medium">VILLA DAGMAR</span>
              </div>
              <div className="w-20 h-12 flex items-center justify-center opacity-70">
                <span className="text-lg font-medium">DIPLOMAT</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
