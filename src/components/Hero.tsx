
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { useState, useEffect } from 'react';

const Hero = () => {
  const isMobile = useIsMobile();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  
  useEffect(() => {
    // Improved font loading detection
    const checkFontsLoaded = () => {
      // Initial quick check - use requestAnimationFrame for better performance
      requestAnimationFrame(() => {
        // First attempt with document.fonts API (modern browsers)
        if ("fonts" in document) {
          document.fonts.ready.then(() => {
            setFontsLoaded(true);
          }).catch(err => {
            console.warn("Font loading error:", err);
            // Fallback - set loaded after a delay
            setTimeout(() => setFontsLoaded(true), 500);
          });
        } else {
          // Fallback for older browsers
          setTimeout(() => setFontsLoaded(true), 500);
        }
      });
    };
    
    // Check if the fonts are already loaded
    checkFontsLoaded();
    
    // Also set a timeout to ensure content displays even if font loading fails
    const fallbackTimer = setTimeout(() => {
      if (!fontsLoaded) {
        console.log("Using fallback font loading timeout");
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
            Större intäkter. Mindre friktion.
          </h1>
          
          <p className="text-lg md:text-xl mb-12 text-lucy-dark-gray/80 max-w-4xl mx-auto">
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
