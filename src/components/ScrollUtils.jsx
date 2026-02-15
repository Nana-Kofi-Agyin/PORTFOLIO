import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp, ChevronDown } from 'lucide-react';
import useScrollMotion from '../hooks/useScrollMotion';

export const ScrollToTop = () => {
  const { isVisible, scrollToTop } = useScrollMotion();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[999] w-14 h-14 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          aria-label="Scroll to top"
          whileHover={{ y: -4 }}
        >
          <ArrowUp className="w-6 h-6 text-white" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export const ScrollProgress = () => {
  const { scaleX } = useScrollMotion();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export const ScrollIndicator = () => {
  const { scrollToNextSection } = useScrollMotion();

  const handleClick = () => scrollToNextSection('about');

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.9, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
    >
      <button
        onClick={handleClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleClick();
          }
        }}
        aria-label="Scroll to next section"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-white/4 border border-white/8 shadow-sm hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
      >
        <span className="sr-only">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          className="text-indigo-400"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </button>
    </motion.div>
  );
};

export default {
  ScrollToTop,
  ScrollProgress,
  ScrollIndicator,
};
