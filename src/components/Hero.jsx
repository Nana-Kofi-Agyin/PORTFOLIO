import { useState, useEffect } from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowRight, FiDownload } from 'react-icons/fi';
import logo from '../assets/logo.jpeg';

const Hero = () => {
  const [text, setText] = useState('');
  const [titleIndex, setTitleIndex] = useState(0);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const titles = ['Full Stack Developer', 'UI/UX Designer', 'Software Engineer', 'Web Developer'];
    const fullText = titles[titleIndex];
    
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setIndex(0);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [index, titleIndex]);

  return (
    <section id="home" className="min-h-screen flex justify-center items-center gap-20 px-[9%] pt-32 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-indigo-500/30 rounded-full filter blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full filter blur-[100px] animate-pulse"></div>
      
      <div className="max-w-[60rem] z-10">
        <div className="inline-block px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
          <span className="text-[1.3rem] text-indigo-400 font-[500]">Welcome to my portfolio</span>
        </div>
        <h1 className="text-[5.6rem] font-[800] leading-[1.2] mb-6 bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent">
          Hi, I'm Nana Kofi Agyin
        </h1>
        <h3 className="text-[3rem] my-6 text-gray-300">
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-[600] font-mono">&lt;{text}/&gt;<span className="text-indigo-400">|</span></span>
        </h3>
        <p className="text-[1.7rem] leading-[1.9] my-8 text-gray-400 max-w-[55rem]">
          Crafting exceptional digital experiences through innovative web solutions. 
          Specialized in full-stack development with a passion for clean code and user-centric design.
        </p>
        
        <div className="flex gap-4 my-10">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
             className="inline-flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1">
            <FiGithub className="w-6 h-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="inline-flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1">
            <FiLinkedin className="w-6 h-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
             className="inline-flex justify-center items-center w-[4.5rem] h-[4.5rem] bg-white/5 border border-white/10 rounded-xl text-gray-400 transition-all duration-300 hover:bg-indigo-500/20 hover:text-indigo-400 hover:border-indigo-500/30 hover:-translate-y-1">
            <FiTwitter className="w-6 h-6" />
          </a>
        </div>
        
        <div className="flex flex-col gap-5 mt-12">
          <a href="#contact" 
             className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-[1.5rem] font-[600]">
            <span>Let's Talk</span>
            <FiArrowRight className="w-5 h-5" />
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
             className="border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-white px-10 py-4 rounded-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-[1.5rem] font-[600]">
            <FiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>
        </div>
      </div>
      
      <div className="w-[40rem] h-[40rem] relative z-10 animate-float hidden lg:block">
        <div className="w-full h-full rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-transparent backdrop-blur-sm border border-white/10 overflow-hidden shadow-2xl"
             style={{boxShadow: '0 20px 60px rgba(99, 102, 241, 0.3)'}}>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 blur-3xl opacity-30 animate-pulse"></div>
            <img src={logo} alt="Nana Kofi Agyin" className="relative w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
