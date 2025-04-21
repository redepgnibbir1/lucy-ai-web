
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Font loading detection for smoother transitions
document.documentElement.classList.add('font-loading');

// Function to check if fonts are loaded
const checkFontsLoaded = () => {
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      document.documentElement.classList.remove('font-loading');
      document.documentElement.classList.add('font-loaded');
    });
  } else {
    // Fallback for browsers that don't support document.fonts
    // Remove delay and set loaded immediately
    document.documentElement.classList.remove('font-loading');
    document.documentElement.classList.add('font-loaded');
  }
};

// Check fonts on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', checkFontsLoaded);
} else {
  checkFontsLoaded();
}

createRoot(document.getElementById("root")!).render(<App />);
