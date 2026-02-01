import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Download, Sparkles } from 'lucide-react';
import profileImage from '../assets/My Image.jpg';

/**
 * Hero Component
 * Two-column split layout with text content and image
 */
const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const titles = ['Software Engineer', 'Full Stack Developer', 'UI/UX Designer', 'Problem Solver'];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullText = titles[i];

      setText(isDeleting 
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center px-[5%] md:px-[9%] pt-24 md:pt-20 pb-12 relative overflow-hidden bg-[#0b0b1a]">
      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Mobile-first: Flex column reverse, Desktop: Two-column grid */}
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full relative z-10">
        
        {/* Text Content - Mobile: Below image, Desktop: Left column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start"
        >

          {/* H1 Heading - Responsive font sizes */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[3rem] sm:text-[4rem] md:text-[5rem] lg:text-[6rem] font-[800] leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nana Kofi Agyin
            </span>
          </motion.h1>

          {/* Typing Effect Sub-headline - Responsive font */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[1.6rem] sm:text-[1.8rem] md:text-[2.2rem] font-mono text-indigo-400"
          >
            &lt;{text}
            <span className="animate-pulse">|</span>
            /&gt;
          </motion.div>

          {/* Bio - Centered on mobile */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[1.4rem] md:text-[1.6rem] text-gray-400 leading-relaxed max-w-[600px] px-4 md:px-0"
          >
            Passionate about creating elegant solutions to complex problems. 
            I build modern, scalable web applications with a focus on user experience and clean code.
          </motion.p>

          {/* Social Icons Row - Enhanced touch targets */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-3 md:gap-4 justify-center lg:justify-start"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[44px] min-h-[44px] w-14 h-14 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300 active:scale-95"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6 md:w-5 md:h-5 text-gray-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[44px] min-h-[44px] w-14 h-14 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300 active:scale-95"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6 md:w-5 md:h-5 text-gray-300" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="min-w-[44px] min-h-[44px] w-14 h-14 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300 active:scale-95"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6 md:w-5 md:h-5 text-gray-300" />
            </a>
          </motion.div>

          {/* Buttons - Improved touch targets and full-width on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <a 
              href="#contact"
              className="px-8 py-4 min-h-[56px] bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[1.5rem] font-[600] rounded-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              Let's Talk
            </a>
            <a 
              href="#"
              className="px-8 py-4 min-h-[56px] bg-white/5 border border-white/10 text-white text-[1.5rem] font-[600] rounded-2xl hover:bg-white/10 transition-all duration-300 active:scale-95 flex items-center justify-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Image Container - Mobile: Top, Desktop: Right column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-[280px] h-[350px] sm:w-[320px] sm:h-[400px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[550px]">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-[2rem] blur-2xl"></div>
            
            {/* Image container - Maintains aspect ratio and glow on mobile */}
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(99,102,241,0.3)]">
              <img 
                src={profileImage} 
                alt="Nana Kofi Agyin" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
