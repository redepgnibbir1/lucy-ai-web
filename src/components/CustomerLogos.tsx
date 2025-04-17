
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useLanguage } from '@/contexts/LanguageContext';
import { customerLogos, CustomerLogo } from '@/config/customerLogos';

// Double the logos array for seamless scrolling
const duplicatedLogos = [...customerLogos, ...customerLogos];

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
              {customerLogos.map((logo, index) => (
                <CarouselItem key={index} className="basis-1/2 sm:basis-1/3">
                  <div className="p-4">
                    <LogoCard logo={logo} />
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
              <LogoCard key={index} logo={logo} className="flex-shrink-0 w-48 h-24" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Extracted LogoCard component for reusability
interface LogoCardProps {
  logo: CustomerLogo;
  className?: string;
}

const LogoCard = ({ logo, className = '' }: LogoCardProps) => {
  return (
    <Card
      className={`border-none shadow-sm p-6 flex items-center justify-center bg-white ${className}`}
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
  );
};

export default CustomerLogos;
