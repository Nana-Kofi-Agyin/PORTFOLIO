import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * Navbar Component
 * Sticky navigation with glassmorphism effect
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
          className="md:hidden text-white text-3xl z-50"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </motion.header>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden fixed top-[80px] left-0 w-full px-[9%] py-8 bg-[#0b0b1a]/95 backdrop-blur-xl border-b border-indigo-500/20 z-[999]"
        >
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => { setActiveLink(link.href); setIsOpen(false); }}
              className="block text-[2rem] my-6 text-gray-300 hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => { setActiveLink('#contact'); setIsOpen(false); }}
            className="block mt-6 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[1.6rem] font-[600] rounded-full text-center"
          >
            Contact me
          </a>
        </motion.nav>
      )}
    </>
  );
};

export default Navbar;

