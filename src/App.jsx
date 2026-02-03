import './App.css'
import { useContext, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import ContactModal from './components/ContactModal'
import useSectionObserver from './hooks/useSectionObserver'
import { UIContext } from './context/UIContext'

function App() {
  const { setCurrentSection } = useContext(UIContext);

  useSectionObserver(['home', 'about', 'services', 'skills', 'projects', 'contact'], setCurrentSection);

  // Universal smooth scroll handler for all internal anchor links
  useEffect(() => {
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || href === '#') return;

      e.preventDefault();

      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Calculate navbar height for offset
        const navbar = document.querySelector('header');
        const navbarHeight = navbar ? navbar.offsetHeight : 80;
        
        // Get element position
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navbarHeight - 20;

        // Smooth scroll with offset
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Update URL hash
        window.history.pushState(null, '', href);
      }
    };

    // Add event listener to document
    document.addEventListener('click', handleAnchorClick);

    // Cleanup
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="bg-[#0b0b1a] min-h-screen overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <ScrollProgress />
      
      {/* Radial gradient background */}
      <div className="fixed inset-0 bg-gradient-radial from-indigo-900/20 via-[#0b0b1a] to-[#0b0b1a] pointer-events-none"></div>
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <ContactModal />
      <ScrollToTop />
    </div>
  )
}

export default App