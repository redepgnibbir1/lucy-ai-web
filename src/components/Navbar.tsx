
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LucyLogo from './LucyLogo';
import { Link, useLocation } from 'react-router-dom';
import CalendlyWidget from './CalendlyWidget';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleDemoClick = () => {
    console.log('Demo button clicked from navbar');
    setIsCalendlyOpen(true);
  };

  return (
    <nav className="py-6">
      <div className="container flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <LucyLogo />
          </Link>
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
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  const navItems = [
    { label: 'Produkter', href: '/#products' },
    { label: 'Fördelar', href: '/fördelar' },
    { label: 'Priser', href: '/pricing' },
    { label: 'Kom igång', href: '/kom-igang' },
    { label: 'Om oss', href: '/about' },
  ];

  const handleHashLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // If we're already on the homepage, just scroll to the section
    if (location.pathname === '/') {
      const targetId = href.substring(href.indexOf('#') + 1);
      const element = document.getElementById(targetId);
      
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // If we're on another page, navigate to homepage with the hash
      window.location.href = href;
    }
  };

  return (
    <>
      {navItems.map((item) => (
        item.href.includes('#') ? (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleHashLinkClick(e, item.href)}
            className={`text-lucy-dark-gray hover:opacity-80 transition-opacity ${
              mobile ? 'block py-2' : ''
            }`}
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.label}
            to={item.href}
            className={`text-lucy-dark-gray hover:opacity-80 transition-opacity ${
              mobile ? 'block py-2' : ''
            }`}
          >
            {item.label}
          </Link>
        )
      ))}
    </>
  );
};

export default Navbar;
