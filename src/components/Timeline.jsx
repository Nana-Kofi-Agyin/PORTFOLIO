import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const timelineData = [
  {
    year: '2024',
    company: 'Acme Corp',
    role: 'Senior Engineer',
    details: 'Led frontend architecture and performance improvements.',
    tech: ['React', 'TypeScript', 'Vite']
  },
  {
    year: '2022',
    company: 'Startup X',
    role: 'Full Stack Developer',
    details: 'Built core platform features and CI pipelines.',
    tech: ['Node.js', 'React', 'Postgres']
  },
  {
    year: '2020',
    company: 'Agency Y',
    role: 'Frontend Developer',
    details: 'Delivered multiple client projects and design systems.',
    tech: ['HTML', 'CSS', 'JavaScript']
  }
];

const Timeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="px-[9%] py-16 min-h-[60vh]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1 flex flex-col gap-4">
          {timelineData.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => setActiveIndex(idx)}
              className={`text-left p-4 rounded-lg transition-colors duration-200 ${activeIndex === idx ? 'bg-indigo-600/20 border-l-4 border-indigo-500 text-white' : 'bg-white/3 text-gray-300'}`}
            >
              <div className="text-[1.6rem] font-[700]">{item.year}</div>
              <div className="text-[1.2rem] text-gray-400">{item.company}</div>
            </button>
          ))}
        </div>

        <div className="md:col-span-3 bg-white/5 p-8 rounded-2xl border border-white/10">
          <motion.div key={activeIndex} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
            <h4 className="text-[2rem] font-[800] mb-2">{timelineData[activeIndex].role} — {timelineData[activeIndex].company}</h4>
            <p className="text-gray-400 mb-4">{timelineData[activeIndex].details}</p>
            <div className="flex gap-2 flex-wrap">
              {timelineData[activeIndex].tech.map((t) => (
                <span key={t} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-[1.2rem] border border-indigo-500/30">{t}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
