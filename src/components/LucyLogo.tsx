
import React from 'react';

interface LucyLogoProps {
  variant?: 'light' | 'dark';
}

const LucyLogo = ({ variant = 'dark' }: LucyLogoProps) => {
  return (
    <div className="flex items-center">
      <img 
        src={variant === 'light' 
          ? "/lovable-uploads/e1779f5b-a41c-4b4c-b029-8ad3d17f110b.png" 
          : "/lovable-uploads/dd89fa85-37ce-44d0-b98a-e97291ad5dca.png"}
        alt={`Lucy Logo (${variant === 'light' ? 'White' : 'Black'})`} 
        className="h-8 w-auto" 
      />
    </div>
  );
};

export default LucyLogo;
