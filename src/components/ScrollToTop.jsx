import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

/**
 * ScrollToTop Component
 * Floating button that appears after scrolling 400px down
 * Smoothly scrolls to top when clicked
 */
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Add small hysteresis to avoid jitter when near threshold
      if (window.scrollY > 420) {
        setIsVisible(true);
      } else if (window.scrollY < 380) {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 18, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.9 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[999] w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-transform duration-200 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Scroll to top"
          whileHover={{ y: -4 }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
