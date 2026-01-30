import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      id="about" 
      className={`min-h-screen bg-[#1a1a2e] px-[9%] py-32 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]"></div>
      
      <h2 className="text-center text-[4.5rem] font-[800] mb-24">
        About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
      </h2>
      
      <div className="flex justify-center items-center gap-16 flex-wrap">
        <div className="hidden md:block">
          <div className="w-[32rem] h-[40rem] rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent backdrop-blur-sm border border-white/10 overflow-hidden relative group"
               style={{boxShadow: '0 20px 60px rgba(99, 102, 241, 0.2)'}}>
            <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-[10rem] transition-transform duration-500 group-hover:scale-110">
              🚀
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
          </div>
        </div>
        
        <div className="max-w-[60rem]">
          <div className="inline-block px-4 py-2 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
            <span className="text-[1.3rem] text-indigo-400 font-[500]">👋 Get to know me</span>
          </div>
          <h3 className="text-[2.8rem] mb-6 font-[700] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Full Stack Developer & Creative Thinker</h3>
          <p className="text-[1.6rem] leading-[1.9] mb-6 text-gray-400">
            I'm a passionate full stack developer with expertise in building scalable, modern web applications. 
            I thrive on transforming complex problems into elegant solutions that create meaningful impact.
          </p>
          <p className="text-[1.6rem] leading-[1.9] mb-8 text-gray-400">
            With comprehensive experience across the full development stack, I specialize in crafting 
            seamless user experiences powered by robust, efficient backend architectures.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
              <h4 className="text-[3.5rem] font-[800] bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">3+</h4>
              <span className="text-[1.3rem] text-gray-400 font-[500] block">Years Experience</span>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
              <h4 className="text-[3.5rem] font-[800] bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</h4>
              <span className="text-[1.3rem] text-gray-400 font-[500] block">Projects Completed</span>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-1">
              <h4 className="text-[3.5rem] font-[800] bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">30+</h4>
              <span className="text-[1.3rem] text-gray-400 font-[500] block">Happy Clients</span>
            </div>
          </div>
          
          <a href="#contact" 
             className="block mt-12 px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-[1.5rem] text-white font-[600] transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 text-center">
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
