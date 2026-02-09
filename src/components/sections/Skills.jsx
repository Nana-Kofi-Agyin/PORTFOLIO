/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeUpVariants, staggerContainerVariants, staggerItemVariants } from '../../utils/animationVariants';
import { Code2, Server, Database, Wrench, Lightbulb, Sparkles } from 'lucide-react';
import SkeletonLoader from '../SkeletonLoader';
import { skillCategories, softSkills, currentlyLearning } from '../../data/skillsData';
import * as SimpleIcons from 'simple-icons';

// Helper function to get icon from simple-icons
const getSimpleIcon = (iconName) => {
  const icon = SimpleIcons[`si${iconName.charAt(0).toUpperCase()}${iconName.slice(1)}`];
  return icon;
};

// Skill Icon Component with SVG rendering
const SkillIcon = ({ iconName, className = "w-8 h-8" }) => {
  const icon = getSimpleIcon(iconName);
  
  if (!icon) {
    return <Code2 className={className} />;
  }

  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
      style={{ fill: `#${icon.hex}` }}
    />
  );
};

// Interactive Tooltip Component
const SkillTooltip = ({ skill, isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 z-50 pointer-events-none"
        >
          <div className="bg-slate-900 border border-purple-500/50 rounded-lg p-4 shadow-2xl min-w-[280px] max-w-[320px]">
            <div className="text-white font-bold text-sm mb-2">{skill.name}</div>
            <div className="text-gray-300 text-xs mb-3">{skill.description}</div>
            {skill.projects && skill.projects.length > 0 && (
              <div className="border-t border-slate-700 pt-2">
                <div className="text-purple-400 text-xs font-semibold mb-1">Used in:</div>
                <div className="flex flex-wrap gap-1">
                  {skill.projects.slice(0, 3).map((project, idx) => (
                    <span 
                      key={idx}
                      className="text-[10px] px-2 py-1 bg-purple-500/20 text-purple-300 rounded-full"
                    >
                      {project}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skill.level && (
              <div className="mt-2 text-[10px] text-gray-400">
                Level: <span className="text-purple-400 font-semibold">{skill.level}</span>
              </div>
            )}
          </div>
          {/* Tooltip arrow */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-[1px]">
            <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-purple-500/50"></div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Bento Box Skill Card Component
const SkillCard = ({ skill, size = "normal" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const sizeClasses = {
    small: "col-span-1 row-span-1 p-3 sm:p-4",
    normal: "col-span-1 row-span-1 p-3 sm:p-4 md:p-5",
    large: "col-span-1 sm:col-span-2 row-span-1 p-4 sm:p-5 md:p-6"
  };

  return (
    <motion.div
      variants={staggerItemVariants}
      whileHover={{ y: -4, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative group bg-slate-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-white/10 
        shadow-lg transition-all duration-300 hover:border-purple-400/50 hover:bg-slate-900/70 
        hover:shadow-purple-500/20 hover:shadow-2xl cursor-pointer min-h-[120px] sm:min-h-[140px] md:min-h-[150px] ${sizeClasses[size]}`}
      tabIndex={0}
      role="button"
      onClick={() => {
        // Dispatch a global event to filter projects by this skill
        window.dispatchEvent(new CustomEvent('filterProjects', { detail: { skill: skill.name } }));
        // Also navigate to projects section
        const el = document.getElementById('projects');
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          window.dispatchEvent(new CustomEvent('filterProjects', { detail: { skill: skill.name } }));
          const el = document.getElementById('projects');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }}
    >
      {/* Only show tooltip on larger screens to avoid mobile clutter */}
      {typeof window !== 'undefined' && window.innerWidth > 768 && (
        <SkillTooltip skill={skill} isHovered={isHovered} />
      )}
      
      <div className="flex flex-col items-center justify-center h-full text-center space-y-2 sm:space-y-3">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-500/20 blur-xl rounded-full scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <SkillIcon iconName={skill.icon} className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 relative z-10 transition-transform duration-300 group-hover:scale-110" />
        </div>
        
        <div>
          <h4 className="text-white font-bold text-xs sm:text-sm md:text-base mb-1">{skill.name}</h4>
          {size === "large" && (
            <p className="text-gray-400 text-[10px] sm:text-xs max-w-[400px] hidden sm:block">{skill.description}</p>
          )}
        </div>

        {skill.projects && skill.projects.length > 0 && (
          <div className="flex items-center gap-1 text-[9px] sm:text-[10px] text-purple-400">
            <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="hidden sm:inline">{skill.projects.length} project{skill.projects.length > 1 ? 's' : ''}</span>
            <span className="sm:hidden">{skill.projects.length}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// Category Section Component
const CategorySection = ({ category, categoryKey, icon: Icon, showAll, onToggleShowAll }) => {
  // Limit skills to first 8 items if not showing all
  const displayedSkills = showAll ? category.skills : category.skills.slice(0, 8);
  const hasMore = category.skills.length > 8;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUpVariants}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-purple-500/20 to-indigo-500/20 p-3 rounded-xl border border-purple-500/30">
          <Icon className="w-6 h-6 text-purple-400" />
        </div>
        <h3 className="text-3xl font-bold text-white">{category.title}</h3>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-purple-500/50 to-transparent"></div>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-6"
        variants={staggerContainerVariants}
      >
        {displayedSkills.map((skill, idx) => {
          // Make the first skill in each category large for visual hierarchy on desktop only
          const size = idx === 0 && window.innerWidth > 768 ? "large" : "normal";
          return <SkillCard key={idx} skill={skill} size={size} />;
        })}
      </motion.div>

      {/* Show More Button */}
      {hasMore && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mt-6"
        >
          <button
            onClick={onToggleShowAll}
            className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-indigo-500/30 hover:border-purple-400/50 transition-all duration-300 text-sm font-semibold"
          >
            {showAll ? 'Show Less' : `Show All ${category.skills.length} Skills`}
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

// Currently Learning Marquee Component
const LearningMarquee = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={fadeUpVariants}
      className="mb-16 overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-gradient-to-br from-indigo-500/20 to-blue-500/20 p-3 rounded-xl border border-indigo-500/30">
          <Lightbulb className="w-6 h-6 text-indigo-400" />
        </div>
        <h3 className="text-3xl font-bold text-white">Currently Learning</h3>
        <div className="flex-1 h-[2px] bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-6"
        >
          {[...currentlyLearning, ...currentlyLearning, ...currentlyLearning].map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-xl p-6 min-w-[280px] hover:border-indigo-400/50 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-3">
                <SkillIcon iconName={item.icon} className="w-10 h-10" />
                <div>
                  <h4 className="text-white font-bold text-base">{item.name}</h4>
                  <p className="text-gray-400 text-xs">{item.reason}</p>
                </div>
              </div>
              <div className="relative w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"
                />
              </div>
              <div className="text-right text-[10px] text-indigo-400 mt-1">{item.progress}%</div>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};



// Main Skills Component
const Skills = () => {
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('frontend');
  const [showAllByCategory, setShowAllByCategory] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  const toggleShowAll = (categoryKey) => {
    setShowAllByCategory(prev => ({
      ...prev,
      [categoryKey]: !prev[categoryKey]
    }));
  };

  const categoryIcons = {
    languages: Code2,
    frontend: Code2,
    backend: Server,
    tools: Wrench
  };

  // Tab configuration combining related categories
  const tabs = [
    { 
      id: 'frontend', 
      label: 'Frontend', 
      icon: Code2,
      categories: ['languages', 'frontend']
    },
    { 
      id: 'backend', 
      label: 'Backend', 
      icon: Server,
      categories: ['backend']
    },
    { 
      id: 'tools', 
      label: 'Tools & DevOps', 
      icon: Wrench,
      categories: ['tools']
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-[85vh] bg-[#1a1a2e] px-[5%] sm:px-[7%] md:px-[9%] py-12 md:py-16 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[120px]"></div>

      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-center text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-[800] mb-4 md:mb-6">
          My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-center text-[1.4rem] sm:text-[1.6rem] text-gray-400 mb-3 md:mb-4 max-w-[60rem] mx-auto px-4">
          A comprehensive overview of my technical capabilities
        </p>
        <p className="text-center text-xs sm:text-sm text-purple-400 italic px-4">
          💡 Hover over any skill to see which projects I&apos;ve used it in
        </p>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SkeletonLoader variant="skill" count={6} />
          </div>
        ) : (
          <>
            {/* Tab Navigation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariants}
              className="mb-8 md:mb-12"
            >
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 min-h-[44px] rounded-xl font-bold text-sm sm:text-base transition-all duration-300 ${
                        activeTab === tab.id
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg shadow-purple-500/50'
                          : 'bg-slate-900/50 text-gray-400 border border-white/10 hover:border-purple-400/50 hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="hidden xs:inline sm:inline">{tab.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>

            {/* Technical Skills Categories - Tab Content */}
            <div className="relative mb-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  {tabs
                    .find(tab => tab.id === activeTab)
                    ?.categories.map((categoryKey) => (
                      <CategorySection
                        key={categoryKey}
                        category={skillCategories[categoryKey]}
                        categoryKey={categoryKey}
                        icon={categoryIcons[categoryKey]}
                        showAll={showAllByCategory[categoryKey] || false}
                        onToggleShowAll={() => toggleShowAll(categoryKey)}
                      />
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Currently Learning Marquee */}
            <LearningMarquee />
          </>
        )}
      </div>
    </section>
  );
};

export default Skills;
