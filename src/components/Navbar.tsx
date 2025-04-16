
import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import LucyLogo from './LucyLogo';
import { Link, useLocation } from 'react-router-dom';
import CalendlyWidget from './CalendlyWidget';
import { Animate } from '@/components/ui/animate';
import { fadeIn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDemoClick = () => {
    console.log('Demo button clicked from navbar');
    setIsCalendlyOpen(true);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'sv' ? 'en' : 'sv');
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white text-lucy-black shadow-md py-4' : 'bg-white text-lucy-black py-6'
    }`}>
      <Animate variants={fadeIn}>
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <LucyLogo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-lucy-black hover:text-lucy-dark-gray-new">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('sv')} className={language === 'sv' ? 'font-medium' : ''}>
                  Svenska
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'font-medium' : ''}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              className="bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 font-medium"
              onClick={handleDemoClick}
            >
              {t('nav.bookDemo')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="text-lucy-black hover:text-lucy-dark-gray-new">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('sv')} className={language === 'sv' ? 'font-medium' : ''}>
                  Svenska
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('en')} className={language === 'en' ? 'font-medium' : ''}>
                  English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-lucy-black" />
              ) : (
                <Menu className="h-6 w-6 text-lucy-black" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden container mt-4 pb-4 bg-white">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile />
              <Button 
                className="bg-lucy-neon-yellow text-lucy-black hover:bg-opacity-90 w-full font-medium"
                onClick={handleDemoClick}
              >
                {t('nav.bookDemo')}
              </Button>
            </div>
          </div>
        )}
      </Animate>
      <CalendlyWidget isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </nav>
  );
};

const NavLinks = ({ mobile = false }: { mobile?: boolean }) => {
  const location = useLocation();
  const { t } = useLanguage();
  
  const navItems = [
    { label: t('nav.products'), href: '/#products' },
    { label: t('nav.benefits'), href: '/fördelar' },
    { label: t('nav.pricing'), href: '/pricing' },
    { label: t('nav.getStarted'), href: '/kom-igang' },
    { label: t('nav.aboutUs'), href: '/about' },
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
            className={`text-lucy-white hover:text-lucy-light-gray-new transition-opacity ${
              mobile ? 'block py-2' : ''
            }`}
          >
            {item.label}
          </a>
        ) : (
          <Link
            key={item.label}
            to={item.href}
            className={`text-lucy-white hover:text-lucy-light-gray-new transition-opacity ${
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
