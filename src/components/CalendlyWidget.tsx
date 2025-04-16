
import { useEffect, useRef } from 'react';

interface CalendlyWidgetProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyWidget = ({ isOpen, onClose }: CalendlyWidgetProps) => {
  const calendlyWidgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // First, check if the script is already added to avoid duplicates
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      // Load Calendly script when component mounts if it's not already there
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Initialize Calendly when the widget becomes visible
    if (isOpen && typeof window !== 'undefined' && window.Calendly) {
      // Force Calendly to initialize again when the modal opens
      const initTimer = setTimeout(() => {
        if (window.Calendly && calendlyWidgetRef.current) {
          window.Calendly.initInlineWidget({
            url: 'https://calendly.com/peder-ribbing-lucyanalytics/30min',
            parentElement: calendlyWidgetRef.current,
            prefill: {},
            utm: {}
          });
        }
      }, 100);
      
      return () => clearTimeout(initTimer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg w-full max-w-4xl max-h-screen overflow-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div 
          ref={calendlyWidgetRef}
          className="calendly-inline-widget"
          data-url="https://calendly.com/peder-ribbing-lucyanalytics/30min" 
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
      </div>
    </div>
  );
};

// Add a global type declaration for the Calendly object
declare global {
  interface Window {
    Calendly?: any;
  }
}

export default CalendlyWidget;
