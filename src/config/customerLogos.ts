
// Define the type for a customer logo
export interface CustomerLogo {
  src: string;
  alt: string;
  scale?: number;
}

// Define customer logo URLs with proper hotel names and increased scales
export const customerLogos: CustomerLogo[] = [
  { 
    src: "/lovable-uploads/dd89fa85-37ce-44d0-b98a-e97291ad5dca.png", 
    alt: "Convendum",
    scale: 1.3 
  },
  { 
    src: "/lovable-uploads/579b972c-d18d-4c9b-b746-d83156364992.png", 
    alt: "Villa Dahlia",
    scale: 1.95 // Increased from 1.5 by 30%
  },
  { 
    src: "/lovable-uploads/6d274ded-05e0-4608-99c6-5691eab77943.png", 
    alt: "Elite Hotels of Sweden",
    scale: 1.3 
  },
  { 
    src: "/lovable-uploads/2d2aa760-9e24-49e2-8d80-713e80c1e0ff.png", 
    alt: "Hotel Diplomat Stockholm",
    scale: 1.3 
  },
  { 
    src: "/lovable-uploads/e61dd769-5f53-41fd-a879-e81ba4e21e2c.png", 
    alt: "Vår Gård Hotel",
    scale: 1.3 
  },
  { 
    src: "/lovable-uploads/84444c96-9dbd-4859-898d-19327cfe74fc.png", 
    alt: "Villa Dagmar",
    scale: 1.56 // Increased from 1.2 by 30%
  },
  { 
    src: "/lovable-uploads/efa7d032-e77a-4a96-b162-3230fb174ee9.png", 
    alt: "Marholmen",
    scale: 1.3 
  },
  { 
    src: "/lovable-uploads/260e1d44-6dbe-4878-b03e-e9ea90bf85e1.png", 
    alt: "New Hotel Logo",
    scale: 1.3 
  },
  { 
    src: "/lovable-uploads/sanga-logo.jpg", 
    alt: "Sånga",
    scale: 1.4 
  },
  { 
    src: "/lovable-uploads/tvaskyttlar-logo.jpg", 
    alt: "Två Skyttlar",
    scale: 1.4 
  },
  { 
    src: "/lovable-uploads/ronneberga-logo.png", 
    alt: "Rönneberga Lidingö",
    scale: 1.3 
  },
  { 
    src: "/lovable-uploads/nofo-hotel-logo.png", 
    alt: "NOFO Hotel & Wine Bar",
    scale: 1.3 
  }
];
