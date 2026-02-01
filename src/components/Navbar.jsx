import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

/**
 * Navbar Component
 * Sticky navigation with glassmorphism effect and mobile hamburger menu
 */
const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' }
  ];

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 w-full px-[9%] py-6 backdrop-blur-lg z-[1000] flex justify-between items-center transition-all duration-300 ${
          scrolled ? 'bg-[#0b0b1a]/80 shadow-[0_8px_32px_rgba(99,102,241,0.1)]' : 'bg-[#0b0b1a]/60'
        } border-b border-white/5`}
      >
        {/* Logo on the left */}
        <a href="#home" onClick={() => setActiveLink('#home')}>
          <span className="text-[2.8rem] font-[800] bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer transition-all duration-300 hover:scale-105">
            Dex
          </span>
        </a>

        {/* Centered navigation links - Desktop */}
        <nav className="hidden md:flex gap-12 items-center absolute left-1/2 transform -translate-x-1/2">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setActiveLink(link.href)}
              className={`text-[1.5rem] font-[500] transition-all duration-300 relative ${
                activeLink === link.href ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeLink === link.href && (
                <motion.span 
                  layoutId="activeLink"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-500"
                />
              )}
            </a>
          ))}
        </nav>

        {/* Contact me button on the right - Desktop */}
        <a 
          href="#contact"
          onClick={() => setActiveLink('#contact')}
          className="hidden md:block px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[1.4rem] font-[600] rounded-full hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-105"
        >
          Contact me
        </a>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white z-[1001] relative min-w-[44px] min-h-[44px] flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </motion.header>

      {/* Mobile Navigation Drawer - Slide from Right */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[998] md:hidden"
            />
            
            {/* Side Drawer */}
            <motion.nav 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="md:hidden fixed top-0 right-0 h-full w-[75%] max-w-[320px] bg-[#0b0b1a]/98 backdrop-blur-xl border-l border-indigo-500/20 z-[999] shadow-[-10px_0_50px_rgba(99,102,241,0.3)] overflow-y-auto"
            >
              <div className="p-8 pt-24">
                {/* Mobile Navigation Links */}
                <div className="space-y-2 mb-12">
                  {navLinks.map((link, index) => (
                    <motion.a 
                      key={link.href}
                      href={link.href} 
                      onClick={() => { setActiveLink(link.href); setIsOpen(false); }}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="block py-4 px-6 text-[1.8rem] text-gray-300 hover:text-white hover:bg-indigo-600/10 rounded-xl transition-all duration-300 min-h-[56px] flex items-center"
                    >
                      {link.name}
                    </motion.a>
                  ))}
                </div>
                
                {/* Contact Button in Mobile Menu */}
                <motion.a 
                  href="#contact"
                  onClick={() => { setActiveLink('#contact'); setIsOpen(false); }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[1.6rem] font-[600] rounded-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] transition-all duration-300 text-center min-h-[56px] flex items-center justify-center"
                >
                  Contact Me
                </motion.a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;

