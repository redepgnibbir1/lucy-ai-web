
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LucyLogo from './LucyLogo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleDemoClick = () => {
    console.log('Demo button clicked from navbar');
    // In a real implementation, this would navigate to a booking page or open a form
    window.open('mailto:contact@lucy.ai?subject=Demo Request', '_blank');
  };

  return (
    <nav className="py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <LucyLogo />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <Button 
            className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 font-medium"
            onClick={handleDemoClick}
          >
            Boka en demo
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden container mt-4 pb-4">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile />
            <Button 
              className="bg-lucy-neon-yellow text-lucy-dark-gray hover:bg-opacity-90 w-full font-medium"
              onClick={handleDemoClick}
            >
              Boka en demo
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const navItems = [
    { label: 'Produkter', href: '#products' },
    { label: 'Fördelar', href: '#benefits' },
    { label: 'Priser', href: '#pricing' },
    { label: 'Om oss', href: '#about' },
  ];

  return (
    <>
      {navItems.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`text-lucy-dark-gray hover:opacity-80 transition-opacity ${
            mobile ? 'block py-2' : ''
          }`}
        >
          {item.label}
        </a>
      ))}
    </>
  );
};

export default Navbar;
