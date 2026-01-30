import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-[#0b0b1a] min-h-screen overflow-x-hidden">
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
    </div>
  )
}

export default App