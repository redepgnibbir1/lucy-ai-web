import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail } from 'lucide-react';
import LucyLogo from './LucyLogo';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-lucy-dark-gray text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <LucyLogo variant="light" />
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              {t('footer.tagline')}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4 pt-2">
              <a href="https://www.linkedin.com/company/lucy-analytics/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-lucy-neon-yellow transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@lucyanalytics.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="text-gray-300 hover:text-lucy-neon-yellow transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-martina text-lg mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/fördelar" className="text-gray-300 hover:text-lucy-neon-yellow transition-colors">
                  {t('nav.benefits')}
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-lucy-neon-yellow transition-colors">
                  {t('nav.pricing')}
                </Link>
              </li>
              <li>
                <Link to="/kom-igang" className="text-gray-300 hover:text-lucy-neon-yellow transition-colors">
                  {t('nav.getStarted')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-lucy-neon-yellow transition-colors">
                  {t('nav.aboutUs')}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-martina text-lg mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                {t('footer.email')}: <a href="mailto:contact@lucyanalytics.com" className="hover:text-lucy-neon-yellow transition-colors">contact@lucyanalytics.com</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter - Hidden on mobile */}
          <div className="hidden lg:block">
            <h3 className="font-martina text-lg mb-4">{t('footer.newsletter')}</h3>
            <p className="text-sm text-gray-300 mb-4">{t('footer.newsletterDesc')}</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')} 
                className="bg-white bg-opacity-10 text-white px-3 py-2 rounded-l text-sm focus:outline-none focus:ring-1 focus:ring-lucy-neon-yellow"
              />
              <button className="bg-lucy-neon-yellow text-lucy-black px-3 py-2 rounded-r text-sm font-medium hover:bg-opacity-90 transition-colors">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {currentYear} Lucy. {t('footer.allRightsReserved')}
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-lucy-neon-yellow transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/gdpr" className="text-sm text-gray-400 hover:text-lucy-neon-yellow transition-colors">
              GDPR
            </Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-lucy-neon-yellow transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
