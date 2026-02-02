/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '../utils/animationVariants';
import { ArrowRight } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';
import { services } from '../data/servicesData';

const Skills = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-[#1a1a2e] px-[9%] py-16 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]"></div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <h2 className="text-center text-[4.5rem] font-[800] mb-6">
          My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-[1.6rem] text-gray-400 mb-10 max-w-[60rem] mx-auto">
          High-level services and the tools I use to deliver them
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto w-full">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkeletonLoader variant="skill" count={3} />
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={idx}
                  variants={staggerItemVariants}
                  whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
                  className="relative group w-full bg-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-[0_10px_40px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-purple-400/50 hover:bg-slate-900/70 flex flex-col h-full"
                >
                  <div className="absolute top-8 left-8 z-20">
                    <div className="bg-slate-800/60 p-2 rounded-md z-20">
                      <Icon className="w-5 h-5 text-purple-300" />
                    </div>
                  </div>

                  <div className="absolute top-8 right-8 z-20">
                    <div className="px-3 py-1 rounded-full bg-slate-800/60 border border-white/10 text-sm font-bold text-gray-200 z-20">{idx + 1}</div>
                  </div>

                  <div className="mt-12">
                    <h3 className="text-xl font-bold tracking-tight text-white mb-4 leading-tight">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {service.tools.map((tool, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-mono font-medium px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 border border-slate-700 hover:border-purple-500/50 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6">
                    <a href="#" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-purple-400 hover:text-purple-300 transition-all duration-300 group">
                      <span className="inline-block transform transition-all duration-300 group-hover:tracking-[0.2em]">Get Started</span>
                      <ArrowRight className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-all duration-300 transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
