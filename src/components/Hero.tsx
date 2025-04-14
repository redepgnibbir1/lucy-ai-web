
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
          
          <Button className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium text-lg px-8 py-6 h-auto">
            Book a demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
