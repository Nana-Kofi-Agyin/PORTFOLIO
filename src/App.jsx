import './App.css'
import Layout from './components/Layout'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default App