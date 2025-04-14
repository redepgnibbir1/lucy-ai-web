
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Define customer logo URLs with proper hotel names
const logos = [
  { 
    src: "/lovable-uploads/35d86a2c-4e9a-4053-afbf-ffbb04ad24d8.png", 
    alt: "Convendum" 
  },
  { 
    src: "/lovable-uploads/8cbaba59-9c0d-4cb3-a328-867b274405db.png", 
    alt: "Villa Dahlia" 
  },
  { 
    src: "/lovable-uploads/260e1d44-6dbe-4878-b03e-e9ea90bf85e1.png", 
    alt: "Hotel Diplomat Stockholm" 
  },
  { 
    src: "/lovable-uploads/fd14d7ff-0213-4b18-857c-a752e470ef81.png", 
    alt: "Marholmen" 
  },
  { 
    src: "/lovable-uploads/e0e4f956-6c39-4a86-a90e-fa0eea98b223.png", 
    alt: "Vår Gård Hotel" 
  },
  { 
    src: "/lovable-uploads/77b801fb-cbf5-4a88-b4c6-58a006ee5ce4.png", 
    alt: "Grand Hotel" 
  },
  { 
    src: "/lovable-uploads/8569993f-c6d9-4080-bdd3-51485132b0de.png", 
    alt: "Elite Hotels of Sweden" 
  }
];

const CustomerLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <h2 className="text-center font-martina text-3xl md:text-4xl mb-12">
          Trusted by leading hotels
        </h2>
        
        {/* Mobile and tablet carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {logos.map((logo, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="border-none shadow-sm p-6 flex items-center justify-center h-24">
                      <img
                        src={logo.src}
                        alt={logo.alt}
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
        
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {logos.map((logo, index) => (
            <Card
              key={index}
              className="border-none shadow-sm p-8 flex items-center justify-center h-32"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    const skeleton = document.createElement('div');
                    skeleton.className = 'w-full h-14 rounded-md bg-gray-200 animate-pulse';
                    parent.appendChild(skeleton);
                  }
                }}
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
