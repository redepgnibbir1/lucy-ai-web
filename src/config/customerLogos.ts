
// Define the type for a customer logo
export interface CustomerLogo {
  src: string;
  alt: string;
  scale?: number;
}

// Define customer logo URLs with proper hotel names
export const customerLogos: CustomerLogo[] = [
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
  { 
    src: "/lovable-uploads/260e1d44-6dbe-4878-b03e-e9ea90bf85e1.png", 
    alt: "New Hotel Logo" 
  }
];
