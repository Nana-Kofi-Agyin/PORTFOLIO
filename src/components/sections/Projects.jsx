import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Tag } from 'lucide-react';
import { fadeUpVariants, staggerContainerVariants } from '../../utils/animationVariants';
import SkeletonLoader from '../SkeletonLoader';
import { projects } from '../../data/projectsData';

const Projects = () => {
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);

  const categories = ['All', ...Array.from(new Set(projects.flatMap(p => 
    Object.values(p.skillTags || {}).flat()
  )))];
  
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' 
    ? projects 
    : projects.filter(p => 
        Object.values(p.skillTags || {}).flat().includes(filter)
      );

  // Toggle between showing 3 projects and all projects
  const displayedProjects = isExpanded ? filtered : filtered.slice(0, 3);

  // Simulate loading delay for demonstration
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="projects" 
      className="min-h-screen px-[5%] sm:px-[7%] md:px-[9%] py-12 md:py-16 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute bottom-0 right-1/4 w-[50rem] h-[50rem] bg-purple-500/10 rounded-full filter blur-[150px]"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <h2 className="text-center text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-[800] mb-4 md:mb-6">
          Featured <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-center text-[1.4rem] sm:text-[1.6rem] text-gray-400 mb-3 md:mb-4 max-w-[60rem] mx-auto px-4">
          Showcasing my recent work and creative solutions
        </p>
        <p className="text-center text-xs sm:text-sm text-purple-400 italic mb-8 md:mb-10">
          🔖 Click on a skill tag from the Skills section to filter projects
        </p>
      </motion.div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <SkeletonLoader variant="card" count={3} />
        </div>
      ) : (
        <>
          {/* Desktop: Grid Layout, Mobile: Horizontal Scroll */}
          <div className="block md:hidden">
            {/* Mobile Horizontal Swiper */}
            <div className="relative -mx-[5%] px-[5%] overflow-hidden">
              <div 
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide"
                style={{
                  scrollbarWidth: 'none',
                  msOverflowStyle: 'none',
                  WebkitOverflowScrolling: 'touch'
                }}
              >
                <style jsx>{`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}</style>
                {filtered.map((project, index) => {
                  const IconComponent = project.image;
                  return (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="relative rounded-2xl overflow-hidden group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 snap-start flex-shrink-0"
                      style={{
                        width: 'calc(85vw)',
                        maxWidth: '380px',
                        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Maintain 16:9 aspect ratio for images */}
                      <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-transparent flex items-center justify-center text-indigo-400 transition-transform duration-500 group-hover:scale-110">
                          <IconComponent className="w-24 h-24" />
                        </div>
                      </div>
                      <div className="p-5">
                        <h4 className="text-[1.8rem] font-[700] mb-2 text-white line-clamp-1">{project.title}</h4>
                        <p className="text-[1.3rem] mb-4 text-gray-400 line-clamp-2">{project.description}</p>
                        
                        {/* Skill Tags */}
                        <div className="mb-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Tag className="w-3 h-3 text-purple-400" />
                            <span className="text-[10px] text-purple-400 font-semibold uppercase tracking-wide">
                              Technologies
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {project.tags.slice(0, 3).map((tag, idx) => (
                              <span 
                                key={idx} 
                                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full text-[1.1rem] border border-purple-500/30"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Touch-friendly buttons */}
                        <div className="flex gap-3">
                          <a 
                            href={project.liveDemo} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 py-3 min-h-[44px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-[1.3rem] font-[600] text-center transition-all duration-300 flex items-center justify-center gap-2 active:scale-95"
                          >
                            View
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                          <a 
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="inline-flex justify-center items-center min-w-[44px] min-h-[44px] w-[4.5rem] bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 active:scale-95"
                            aria-label="View on GitHub"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                {/* Spacer to show partial next card */}
                <div className="flex-shrink-0 w-8"></div>
              </div>
            </div>
            
            {/* Scroll indicator on mobile */}
            <div className="flex justify-center items-center gap-2 mt-4 text-sm text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
              <span>Swipe to explore more projects</span>
            </div>
          </div>

          {/* Desktop Grid */}
          <motion.div
            className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainerVariants}
          >
            <AnimatePresence>
              {displayedProjects.map((project) => {
                const IconComponent = project.image;
                return (
                  <motion.div
                    key={project.title}
                    layout
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    whileHover={{ y: -8, transition: { duration: 0.25 } }}
                    className="relative rounded-2xl overflow-hidden group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-colors duration-300"
                    style={{boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'}}
                  >
                    {/* Maintain 16:9 aspect ratio for images */}
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-transparent flex items-center justify-center text-indigo-400 transition-transform duration-500 group-hover:scale-110">
                        <IconComponent className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32" />
                      </div>
                    </div>
                    <div className="p-5 sm:p-6 md:p-8">
                      <h4 className="text-[1.8rem] sm:text-[2rem] md:text-[2.2rem] font-[700] mb-2 md:mb-3 text-white line-clamp-1">{project.title}</h4>
                      {/* Truncate description on mobile - max 3 lines */}
                      <p className="text-[1.3rem] sm:text-[1.4rem] mb-4 md:mb-6 text-gray-400 line-clamp-3">{project.description}</p>
                      
                      {/* Skill Tags with visual connection to Skills section */}
                      <div className="mb-4 md:mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Tag className="w-3 h-3 sm:w-4 sm:h-4 text-purple-400" />
                          <span className="text-[10px] sm:text-xs text-purple-400 font-semibold uppercase tracking-wide">
                            Technologies
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, idx) => (
                            <span 
                              key={idx} 
                              className="px-2 sm:px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-[1.1rem] sm:text-[1.2rem] border border-purple-500/30 hover:border-purple-400 hover:bg-purple-500/30 transition-all cursor-pointer"
                              title={`Used in this project - see Skills section`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Touch-friendly buttons with minimum 44x44px hit area */}
                      <div className="flex gap-3 md:gap-4">
                        <a 
                          href={project.liveDemo} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-3 sm:py-3.5 min-h-[44px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-[1.3rem] sm:text-[1.4rem] font-[600] text-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 flex items-center justify-center gap-2 active:scale-95"
                        >
                          View Project
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </a>
                        <a 
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer" 
                          className="inline-flex justify-center items-center min-w-[44px] min-h-[44px] w-[4.5rem] bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300 active:scale-95"
                          aria-label="View on GitHub"
                        >
                          <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* View All / Show Less Toggle Button for Desktop */}
          {filtered.length > 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="hidden md:flex justify-center mt-8"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[1.4rem] font-[600] rounded-xl hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                {isExpanded ? 'Show Less' : `View All ${filtered.length} Projects`}
              </button>
            </motion.div>
          )}
        </>
      )}
    </section>
  );
};

export default Projects;

