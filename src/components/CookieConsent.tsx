import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Cookie } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Slight delay to prevent flash on page load
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-4xl mx-auto bg-lucy-dark-gray backdrop-blur-sm rounded-lg shadow-xl border border-lucy-medium-gray/20">
            <div className="p-4 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
              {/* Icon and text */}
              <div className="flex items-start gap-3 flex-1">
                <Cookie className="w-6 h-6 text-lucy-neon-yellow flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-lucy-white font-medium mb-1">
                    {t('cookies.title')}
                  </h3>
                  <p className="text-lucy-light-gray-new text-sm leading-relaxed">
                    {t('cookies.description')}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-3 w-full md:w-auto">
                <Link
                  to="/cookies"
                  className="text-lucy-light-gray-new hover:text-lucy-white text-sm underline underline-offset-2 transition-colors"
                >
                  {t('cookies.readMore')}
                </Link>
                <button
                  onClick={handleAccept}
                  className="bg-lucy-neon-yellow text-lucy-black font-medium px-6 py-2 rounded-md hover:bg-lucy-neon-yellow/90 transition-colors flex-shrink-0"
                >
                  {t('cookies.accept')}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
