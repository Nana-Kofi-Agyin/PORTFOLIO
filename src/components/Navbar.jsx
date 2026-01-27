import { useState, useEffect } from 'react';
import { FiHome } from 'react-icons/fi';

/**
 * Navbar Component
 * A responsive navigation bar with centered navigation links and active state indicators
 */
const Navbar = () => {
  // State management
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [activeLink, setActiveLink] = useState('#home'); // Track active section
  const [scrolled, setScrolled] = useState(false); // Track scroll state for styling

  // Detect scroll position to apply navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation links array
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: '', href: '' }
  ];

  return (
    <header className={`fixed top-0 left-0 mx-auto w-full px-[9%] py-8 backdrop-blur-xl z-[1000] flex justify-between items-center transition-all duration-300 ${
      scrolled ? 'bg-[#0f0f23]/90 shadow-2xl' : 'bg-[#0f0f23]/70'
    }`}>

      
      {/* Logo on the left */}
      <a href="#home" className="flex items-center gap-3">
        <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-3xl">
          D
        </div>
        <div className="text-[3.1rem] font-[700] text-white cursor-pointer transition-all duration-300 hover:text-indigo-400">
          Dex
        </div>
      </a>

      {/* Centered navigation container */}
      <div className="flex items-center gap-16 px-10 py-4 rounded-full bg-[#0f0f23]/50 backdrop-blur-sm border-2 border-white/10 absolute left-1/2 transform -translate-x-1/2">
        {/* Home icon button */}
        <a 
          href="#home" 
          onClick={() => setActiveLink('#home')}
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300">
          <FiHome className="w-6 h-6 text-white" />
        </a>
        
        {/* Main navigation links */}
        <nav className="hidden md:flex gap-10 items-center pr-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setActiveLink(link.href)}
              className={`text-[1.6rem] font-[400] transition-all duration-300 relative inline-block pb-2 group ${
                activeLink === link.href ? 'text-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
              {/* Animated underline indicator */}
              <span className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 transition-all duration-300 ${
                activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </a>
          ))}
        </nav>
      </div>

      {/* Contact me button on the right */}
      <a 
        href="#contact"
        onClick={() => setActiveLink('#contact')}
        className={`hidden md:block text-[1.6rem] font-[400] transition-all duration-300 relative z-10 ${
          activeLink === '#contact' ? 'text-white' : 'text-gray-300 hover:text-white'
        }`}
      >
        Contact me
      </a>

      {/* Mobile menu toggle button */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '☰'}
      </button>

      {/* Mobile navigation menu */}
      {isOpen && (
        <nav className="md:hidden absolute top-full left-0 w-full px-[9%] py-4 bg-[#0f0f23]/95 backdrop-blur-xl border-t border-indigo-500/20">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => { setActiveLink(link.href); setIsOpen(false); }}
              className="block text-[2rem] my-12 text-gray-300 hover:text-indigo-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block text-[2rem] my-12 text-indigo-400 hover:text-indigo-300 transition-colors font-[600]"
          >
            Contact Me
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
