import { useState, useEffect, useContext } from 'react';
import { Menu, X } from 'lucide-react';
import { UIContext } from '../../context/UIContext';
import { site } from '../../data/siteConfig';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const { currentSection } = useContext(UIContext);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 w-full px-[5%] md:px-[9%] py-4 z-[1000] flex justify-between items-center bg-[#0b0b1a] border-b border-white/10">
      <a href="#home" className="text-[1.8rem] font-[700] text-white">
        {site.name}
      </a>

      <nav aria-label="Main" className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => {
          const isActive = currentSection === link.href.slice(1);
          return (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive ? 'true' : undefined}
              className={`text-[1.5rem] py-1 ${
                isActive ? 'text-white border-b-2 border-white' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X className="w-7 h-7" aria-hidden="true" /> : <Menu className="w-7 h-7" aria-hidden="true" />}
      </button>

      {isOpen && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="md:hidden fixed top-[64px] left-0 w-full bg-[#0b0b1a] border-b border-white/10 p-5 space-y-1"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 px-3 text-[1.8rem] text-gray-100 min-h-[48px]"
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
