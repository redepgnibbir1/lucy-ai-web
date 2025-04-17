
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from '@/contexts/LanguageContext';

// Define customer logo URLs with proper hotel names
const logos = [
  { 
    src: "/lovable-uploads/dd89fa85-37ce-44d0-b98a-e97291ad5dca.png", 
    alt: "Convendum" 
  },
  { 
    src: "/lovable-uploads/579b972c-d18d-4c9b-b746-d83156364992.png", 
    alt: "Villa Dahlia",
    scale: 1.5 // Increase the scale for this specific logo
  },
  { 
    src: "/lovable-uploads/6d274ded-05e0-4608-99c6-5691eab77943.png", 
    alt: "Elite Hotels of Sweden" 
  },
  { 
    src: "/lovable-uploads/2d2aa760-9e24-49e2-8d80-713e80c1e0ff.png", 
    alt: "Hotel Diplomat Stockholm" 
  },
  { 
    src: "/lovable-uploads/e61dd769-5f53-41fd-a879-e81ba4e21e2c.png", 
    alt: "Vår Gård Hotel" 
  },
  { 
    src: "/lovable-uploads/c72583e4-9056-46d6-921a-fa64e31fa9fe.png", 
    alt: "Villa Dagmar" 
  },
  { 
    src: "/lovable-uploads/efa7d032-e77a-4a96-b162-3230fb174ee9.png", 
    alt: "Marholmen" 
  },
  // Add the new logo here
  { 
    src: "/lovable-uploads/260e1d44-6dbe-4878-b03e-e9ea90bf85e1.png", 
    alt: "New Hotel Logo" 
  }
];

// Double the logos array for seamless scrolling
const duplicatedLogos = [...logos, ...logos];

const CustomerLogos = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-lucy-white text-lucy-black overflow-hidden">
      <div className="container">
        {/* Mobile carousel with auto-scroll */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            autoplay={true}
            interval={2000}
          >
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
                  <div className="p-4">
                    <Card 
                      className="border-none shadow-sm p-6 flex items-center justify-center h-24 bg-white"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        style={{ transform: `scale(${logo.scale || 1})` }}
                        className="max-h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            const skeleton = document.createElement('div');
                            skeleton.className = 'w-full h-12 rounded-md bg-gray-200 animate-pulse';
                            parent.appendChild(skeleton);
                          }
                        }}
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Desktop horizontal scrolling animation */}
        <div 
          className="hidden md:block relative overflow-hidden"
        >
          <div className="flex gap-8 animate-marquee">
            {duplicatedLogos.map((logo, index) => (
              <Card
                key={index}
                className="border-none shadow-sm p-6 flex-shrink-0 w-48 h-24 flex items-center justify-center bg-white"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{ transform: `scale(${logo.scale || 1})` }}
                  className="max-h-12 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const skeleton = document.createElement('div');
                      skeleton.className = 'w-full h-12 rounded-md bg-gray-200 animate-pulse';
                      parent.appendChild(skeleton);
                    }
                  }}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
