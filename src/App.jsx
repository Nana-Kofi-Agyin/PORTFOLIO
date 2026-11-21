import './App.css';
import { useContext, useEffect } from 'react';
import Navbar from './components/Layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Contact from './components/sections/Contact';
import Footer from './components/Layout/Footer';
import useSectionObserver from './hooks/useSectionObserver';
import { UIContext } from './context/UIContext';

const SECTION_IDS = ['home', 'about', 'services', 'skills', 'projects', 'contact'];

function App() {
  const { setCurrentSection } = useContext(UIContext);

  useSectionObserver(SECTION_IDS, setCurrentSection);

  // In-page anchors: offset for the fixed header, honour reduced motion,
  // and move keyboard focus to the target section.
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;
      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();

      const header = document.querySelector('header');
      const offset = (header ? header.offsetHeight : 80) + 20;
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({
        top: target.getBoundingClientRect().top + window.scrollY - offset,
        behavior: reduce ? 'auto' : 'smooth',
      });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
      window.history.pushState(null, '', href);
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-[#0b0b1a] min-h-screen">
      <a href="#main" className="skip-link">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
