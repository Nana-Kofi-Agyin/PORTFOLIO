import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import Accordion from './Accordion';

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
  return (
    <section id="experience" className="px-[5%] sm:px-[7%] md:px-[9%] py-12 md:py-16 min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-[900px] mx-auto"
      >
        <h2 className="text-center text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-[800] mb-4 md:mb-6">
          Work <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Experience</span>
        </h2>
        <p className="text-center text-[1.4rem] sm:text-[1.6rem] text-gray-400 mb-8 md:mb-10">
          My professional journey and career milestones
        </p>

        <div className="space-y-4">
          {timelineData.map((item, idx) => (
            <Accordion
              key={item.year}
              title={`${item.role} at ${item.company}`}
              icon={Briefcase}
              defaultOpen={idx === 0}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-[1.2rem] text-purple-400 font-semibold">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                    {item.year}
                  </span>
                </div>
                <p className="text-[1.3rem] sm:text-[1.4rem] text-gray-400 leading-relaxed">
                  {item.details}
                </p>
                <div className="flex gap-2 flex-wrap pt-2">
                  {item.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-[1.1rem] sm:text-[1.2rem] border border-indigo-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Accordion>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;
