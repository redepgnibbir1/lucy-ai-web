
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDemoClick = () => {
    console.log('Demo button clicked');
    // In a real implementation, this would navigate to a booking page or open a form
    window.open('mailto:contact@lucy.ai?subject=Demo Request', '_blank');
  };

  return (
    <section className="py-16 md:py-32">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6 font-martina">
            Större intäkter. Mindre friktion.
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-lucy-dark-gray/80 max-w-3xl mx-auto">
            Lucy samlar ett kraftfullt team av AI-agenter som effektiviserar arbetet och minskar den administrativa bördan för ditt hotell — allt i en sömlös och användarvänlig plattform.
          </p>
          
          <Button 
            className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium text-lg px-8 py-6 h-auto"
            onClick={handleDemoClick}
          >
            Boka en demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
