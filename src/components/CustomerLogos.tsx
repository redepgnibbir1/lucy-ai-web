
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

// Import logos
import logo1 from "../assets/customer-logo-1.png";
import logo2 from "../assets/customer-logo-2.png";
import logo3 from "../assets/customer-logo-3.png";
import logo4 from "../assets/customer-logo-4.png";
import logo5 from "../assets/customer-logo-5.png";
import logo6 from "../assets/customer-logo-6.png";

const logos = [
  { src: logo1, alt: "Customer Logo 1" },
  { src: logo2, alt: "Customer Logo 2" },
  { src: logo3, alt: "Customer Logo 3" },
  { src: logo4, alt: "Customer Logo 4" },
  { src: logo5, alt: "Customer Logo 5" },
  { src: logo6, alt: "Customer Logo 6" },
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
