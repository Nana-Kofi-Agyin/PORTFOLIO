import Hero from '../components/sections/Hero';
import Work from '../components/sections/Projects';
import Services from '../components/sections/Services';
import Skills from '../components/sections/Skills';
import { AiWorkflowSection, CollaborationSection, NowSection } from '../components/sections/HiringSignals';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';

const Home = () => (
  <>
    <Hero />
    <Work />
    <Services />
    <Skills />
    <AiWorkflowSection />
    <CollaborationSection />
    <About />
    <NowSection />
    <Contact />
  </>
);

export default Home;
