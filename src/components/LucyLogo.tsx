
import React from 'react';

interface LucyLogoProps {
  variant?: 'light' | 'dark';
}

const LucyLogo = ({ variant = 'dark' }: LucyLogoProps) => {
  const imagePath = variant === 'light' 
    ? "/lovable-uploads/e1779f5b-a41c-4b4c-b029-8ad3d17f110b.png"
    : "/lovable-uploads/acd8022d-67d1-4889-a32a-c2568fdba92a.png";

  return (
    <div className="flex items-center">
      <img 
        src={imagePath}
        alt={`Lucy Logo (${variant === 'light' ? 'White' : 'Black'})`} 
        className="h-8 w-auto" 
        loading="eager"
        onError={(e) => {
          console.error(`Failed to load logo image: ${imagePath}`);
          e.currentTarget.style.opacity = '0.5';
        }}
      />
    </div>
  );
};

export default LucyLogo;
