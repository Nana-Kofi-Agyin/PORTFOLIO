// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * ScrollProgress Component
 * Displays a progress bar at the top of the page that fills as user scrolls
 */
const ScrollProgress = () => {
  // Track scroll progress (0 to 1)
  const { scrollYProgress } = useScroll();
  
  // Add spring physics for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left z-50"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
