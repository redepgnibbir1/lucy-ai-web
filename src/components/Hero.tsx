
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';

const Hero = () => {
  const isMobile = useIsMobile();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    // Font loading detection with better mobile support
    const checkFontsLoaded = () => {
      // First attempt: Use the FontFace API if available
      if (typeof document !== 'undefined' && 'fonts' in document) {
        document.fonts.ready.then(() => {
          console.log('Fonts loaded via document.fonts.ready');
          setFontsLoaded(true);
        }).catch(err => {
          console.warn("Font loading error:", err);
          // Fall back to timeout on error
          setTimeout(() => setFontsLoaded(true), 500);
        });
      } else {
        // Fallback for browsers that don't support the FontFace API
        console.log('FontFace API not supported, using fallback');
        setTimeout(() => setFontsLoaded(true), 800);
      }
    };
    
    checkFontsLoaded();
    
    // Additional safety fallback timer for mobile
    const fallbackTimer = setTimeout(() => {
      if (!fontsLoaded) {
        console.log("Using fallback font loading timeout for mobile");
        setFontsLoaded(true);
      }
    }, 1200);
    
    return () => clearTimeout(fallbackTimer);
  }, []);
  
  const handleDemoClick = () => {
    console.log('Demo button clicked');
    window.open('mailto:contact@lucy.ai?subject=Demo Request', '_blank');
  };

  return (
    <section className="py-12 md:py-20 w-full">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className={`max-w-7xl mx-auto text-center transition-opacity duration-300 ${fontsLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6 font-martina">
            AI som syns i både bokningar och bottom line.
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-lucy-dark-gray/80 max-w-4xl mx-auto font-lab-grotesque">
            Kraftigt ökad merförsäljning, färre fel och nöjdare gäster. Lucys AI-agenter gör jobbet bakom kulisserna.
          </p>
          
          <Button 
            className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium text-lg px-8 py-6 h-auto font-lab-grotesque"
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
