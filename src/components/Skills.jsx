/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '../utils/animationVariants';
import { Server, Zap, Code2, Plug } from 'lucide-react';
import SkeletonLoader from './SkeletonLoader';

const Skills = () => {
  const [loading, setLoading] = useState(true);

  // Frontend skills with progress bars
  const frontendSkills = [
    { name: "React", level: 92, color: "bg-cyan-500" },
    { name: "Next.js", level: 88, color: "bg-blue-500" },
    { name: "Tailwind CSS", level: 95, color: "bg-blue-400" }
  ];

  // Backend skills (icon grid)
  const backendSkills = [
    { name: "Node.js", icon: Server },
    { name: "Express", icon: Zap },
    { name: "Python", icon: Code2 },
    { name: "REST APIs", icon: Plug }
  ];

  // Database skills (circular progress)
  const databaseSkills = [
    { name: "MongoDB", level: 88, color: "text-green-500" },
    { name: "PostgreSQL", level: 82, color: "text-blue-400" },
    { name: "Redis", level: 75, color: "text-red-400" }
  ];

  // Tools (tag cloud)
  const tools = [
    "Git", "GitHub", "Docker", "AWS", "Figma", 
    "Postman", "VS Code", "npm", "Vite", "Webpack"
  ];

  // Custom variant for progress bar animation
  const progressBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.2
      }
    })
  };

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
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
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>
      
      <div className="max-w-[80rem] mx-auto w-full">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <SkeletonLoader variant="skill" count={1} />
            </div>
            <div className="flex flex-col gap-6">
              <SkeletonLoader variant="skill" count={2} />
            </div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
          {/* FRONTEND CARD - Spans 2 columns */}
          <motion.div
            variants={staggerItemVariants}
            className="md:col-span-2 bg-slate-900/40 backdrop-blur-md p-12 rounded-2xl border border-white/10 hover:scale-[1.01] hover:border-purple-500/30 transition-all duration-300"
          >
            <h3 className="text-[2.2rem] font-[700] mb-4 text-white">Frontend Development</h3>
            <p className="text-[1.5rem] leading-[1.8] text-gray-400 mb-8">Building modern user interfaces</p>
            
            <div className="space-y-5">
              {frontendSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-base font-semibold text-white">{skill.name}</span>
                    <span className="text-base text-indigo-400 font-bold">{skill.level}%</span>
                  </div>
                  <div className="bg-white/5 h-[1.2rem] rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full rounded-full ${skill.color}`}
                      style={{
                        boxShadow: `0 0 20px ${skill.color.includes('cyan') ? 'rgba(6, 182, 212, 0.5)' : skill.color.includes('blue-5') ? 'rgba(59, 130, 246, 0.5)' : 'rgba(96, 165, 250, 0.5)'}`
                      }}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                      variants={progressBarVariants}
                      custom={skill.level}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT COLUMN - Backend & Database stacked */}
          <div className="flex flex-col gap-6">
            {/* BACKEND CARD */}
            <motion.div
              variants={staggerItemVariants}
              className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-[1.01] hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-[2.2rem] font-[700] mb-4 text-white">Backend</h3>
              <p className="text-[1.5rem] leading-[1.8] text-gray-400 mb-6">Server-side logic</p>
              
              <div className="grid grid-cols-2 gap-3">
                {backendSkills.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3 text-center hover:border-purple-500/50 transition-colors"
                    >
                      <div className="flex justify-center mb-1">
                        <IconComponent className="w-6 h-6 text-purple-400" />
                      </div>
                      <div className="text-xs text-gray-300 font-medium">{skill.name}</div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* DATABASE CARD */}
            <motion.div
              variants={staggerItemVariants}
              className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:scale-[1.01] hover:border-purple-500/30 transition-all duration-300"
            >
              <h3 className="text-[2.2rem] font-[700] mb-4 text-white">Database</h3>
              <p className="text-[1.5rem] leading-[1.8] text-gray-400 mb-6">Data management</p>
              
              <div className="space-y-3">
                {databaseSkills.map((skill, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-white text-sm font-medium">{skill.name}</span>
                    <div className="relative w-12 h-12">
                      <svg className="w-12 h-12 transform -rotate-90">
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          className="text-slate-700"
                        />
                        <circle
                          cx="24"
                          cy="24"
                          r="20"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 20}`}
                          strokeDashoffset={`${2 * Math.PI * 20 * (1 - skill.level / 100)}`}
                          className={skill.color}
                          strokeLinecap="round"
                        />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* TOOLS CARD - Full width */}
          <motion.div
            variants={staggerItemVariants}
            className="md:col-span-3 bg-slate-900/40 backdrop-blur-md p-12 rounded-2xl border border-white/10 hover:scale-[1.01] hover:border-purple-500/30 transition-all duration-300"
          >
            <h3 className="text-[2.2rem] font-[700] mb-4 text-white">Tools & Technologies</h3>
            <p className="text-[1.5rem] leading-[1.8] text-gray-400 mb-6">Development ecosystem</p>
            
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-slate-800/40 border border-slate-700/50 rounded-full text-sm text-gray-300 hover:border-purple-500/50 hover:text-white transition-all cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
