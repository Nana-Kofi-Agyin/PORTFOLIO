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
    <section id="home" className="min-h-screen flex items-center px-[9%] pt-20 relative overflow-hidden bg-[#0b0b1a]">
      {/* Radial gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-indigo-600/20 via-purple-600/10 to-transparent rounded-full blur-3xl"></div>
      
      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full relative z-10">
        
        {/* Left Column - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Welcome Tag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600/20 border border-indigo-500/30 rounded-full"
          >
            <Sparkles className="w-4 h-4 text-indigo-300" />
            <span className="text-[1.3rem] text-indigo-300 font-[500]">Welcome to my portfolio</span>
          </motion.div>

          {/* H1 Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-[5rem] md:text-[6rem] font-[800] leading-tight"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Nana Kofi Agyin
            </span>
          </motion.h1>

          {/* Typing Effect Sub-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-[2.2rem] font-mono text-indigo-400"
          >
            &lt;{text}
            <span className="animate-pulse">|</span>
            /&gt;
          </motion.div>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[1.6rem] text-gray-400 leading-relaxed max-w-[600px]"
          >
            Passionate about creating elegant solutions to complex problems. 
            I build modern, scalable web applications with a focus on user experience and clean code.
          </motion.p>

          {/* Social Icons Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-600/20 hover:border-indigo-500/50 transition-all duration-300"
            >
              <Twitter className="w-5 h-5 text-gray-300" />
            </a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex gap-4 flex-wrap"
          >
            <a 
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[1.5rem] font-[600] rounded-2xl hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all duration-300 hover:scale-105"
            >
              Let's Talk
            </a>
            <a 
              href="#"
              className="px-8 py-4 bg-white/5 border border-white/10 text-white text-[1.5rem] font-[600] rounded-2xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column - Image Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-[400px] h-[500px] md:w-[450px] md:h-[550px]">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-[2rem] blur-2xl"></div>
            
            {/* Image container */}
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
