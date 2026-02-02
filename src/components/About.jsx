import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';
import { fadeUpVariants, slideLeftVariants, slideRightVariants, staggerContainerVariants, staggerItemVariants } from '../utils/animationVariants';
import SkeletonLoader from './SkeletonLoader';

const About = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="about" 
      className="min-h-screen bg-[#1a1a2e] px-[9%] py-16 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]"></div>
      
      <motion.h2 
        className="text-center text-[4.5rem] font-[800] mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        About <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Me</span>
      </motion.h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
        <motion.div 
          className="hidden lg:flex justify-center lg:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideLeftVariants}
        >
          <div className="relative w-[400px] h-[500px] md:w-[450px] md:h-[550px]">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-purple-600/30 rounded-[2rem] blur-2xl"></div>
            
            {/* Icon container */}
            <div className="relative w-full h-full rounded-[2rem] bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-transparent backdrop-blur-sm border border-white/10 overflow-hidden group shadow-[0_20px_60px_rgba(99,102,241,0.3)]">
              <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <Rocket className="w-40 h-40 text-indigo-400" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="max-w-[60rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={slideRightVariants}
        >

          <h3 className="text-[2.8rem] mb-6 font-[700] bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Full Stack Developer & Software Engineer</h3>
          <p className="text-[1.6rem] leading-[1.9] mb-6 text-gray-400">
            My journey in software engineering led me to discover my true passion: Full Stack development. I've transitioned from a general software engineer to a specialist who thrives on building end-to-end scalable applications. There's something deeply satisfying about architecting a complete solution—from database design to the final pixel on screen—ensuring every layer works harmoniously to deliver exceptional user experiences.
          </p>
          <p className="text-[1.6rem] leading-[1.9] mb-6 text-gray-400">
            I don't just write code—I architect user-centric solutions. My problem-solving mindset drives me to look beyond immediate requirements and understand the bigger picture. Whether it's optimizing database queries for performance, designing intuitive APIs, or crafting responsive interfaces, I approach every challenge with the end user in mind, ensuring that technical excellence translates into meaningful value.
          </p>

          
          {loading ? (
            <div className="grid grid-cols-3 gap-6 mt-12">
              <SkeletonLoader variant="stats" count={3} />
            </div>
          ) : (
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainerVariants}
            >
            <motion.div 
              variants={staggerItemVariants}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <h4 className="text-[3.5rem] font-[800] bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">3+</h4>
              <span className="text-[1.3rem] text-gray-400 font-[500] block">Years Experience</span>
            </motion.div>
            <motion.div 
              variants={staggerItemVariants}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <h4 className="text-[3.5rem] font-[800] bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">50+</h4>
              <span className="text-[1.3rem] text-gray-400 font-[500] block">Projects Completed</span>
            </motion.div>
            <motion.div 
              variants={staggerItemVariants}
              className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all duration-300 hover:transform hover:-translate-y-1"
            >
              <h4 className="text-[3.5rem] font-[800] bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-2">30+</h4>
              <span className="text-[1.3rem] text-gray-400 font-[500] block">Happy Clients</span>
            </motion.div>
          </motion.div>
          )}
          
          <a href="#contact" 
             className="block mt-12 px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-[1.5rem] text-white font-[600] transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-105 text-center">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
