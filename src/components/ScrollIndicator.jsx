// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

/**
 * ScrollIndicator Component
 * Bouncing scroll down indicator for Hero section
 * Scrolls to next section (About) when clicked
 */
const ScrollIndicator = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
      onClick={scrollToNextSection}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-[1.2rem] text-gray-400 font-[500]">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-10 h-10 rounded-full border-2 border-indigo-400/50 flex items-center justify-center hover:border-indigo-400 transition-colors"
        >
          <ChevronDown className="w-5 h-5 text-indigo-400" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
