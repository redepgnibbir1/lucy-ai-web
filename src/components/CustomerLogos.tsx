
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

// Define placeholder image URLs instead of importing non-existent files
const logos = [
  { 
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=200&h=100", 
    alt: "Customer Logo 1" 
  },
  { 
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=200&h=100", 
    alt: "Customer Logo 2" 
  },
  { 
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=200&h=100", 
    alt: "Customer Logo 3" 
  },
  { 
    src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=200&h=100", 
    alt: "Customer Logo 4" 
  },
  { 
    src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=200&h=100", 
    alt: "Customer Logo 5" 
  },
  { 
    src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=200&h=100", 
    alt: "Customer Logo 6" 
  },
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
                      />
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
        
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
          {logos.map((logo, index) => (
            <Card
              key={index}
              className="border-none shadow-sm p-8 flex items-center justify-center h-32"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-14 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerLogos;
