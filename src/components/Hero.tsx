
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    // Simplified font loading detection that works better on mobile
    if (document.fonts && document.fonts.ready) {
      // Modern browsers with FontFace API
      document.fonts.ready
        .then(() => {
          console.log('Fonts loaded via document.fonts.ready');
          setFontsLoaded(true);
        })
        .catch(() => {
          // Fallback if fonts fail to load
          setTimeout(() => setFontsLoaded(true), 600);
        });
    } else {
      // Older browsers without FontFace API
      setTimeout(() => setFontsLoaded(true), 800);
    }
    
    // Safety fallback timer - ensures content shows even if font detection fails
    const fallbackTimer = setTimeout(() => {
      if (!fontsLoaded) {
        console.log('Using ultimate fallback for font loading');
        setFontsLoaded(true);
      }
    }, 1000);
    
    return () => clearTimeout(fallbackTimer);
  }, []);
  
  const handleDemoClick = () => {
    console.log('Demo button clicked');
    window.open('mailto:contact@lucy.ai?subject=Demo Request', '_blank');
  };

  return (
    <section className="py-12 md:py-20 w-full">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div 
          className={`max-w-7xl mx-auto text-center transition-opacity duration-300 ${
            fontsLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ fontFamily: "'Lab Grotesque', 'Inter', sans-serif" }}
        >
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6" 
            style={{ fontFamily: "'Martina Plantijn', serif" }}
          >
            AI som syns i både bokningar och bottom line.
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-lucy-dark-gray/80 max-w-4xl mx-auto">
            Kraftigt ökad merförsäljning, färre fel och nöjdare gäster. Lucys AI-agenter gör jobbet bakom kulisserna.
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
