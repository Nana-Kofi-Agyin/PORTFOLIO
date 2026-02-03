import { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Rocket, Wrench, Database } from 'lucide-react';
import { fadeUpVariants, staggerContainerVariants, scaleInVariants } from '../utils/animationVariants';
import SkeletonLoader from './SkeletonLoader';
import Accordion from './Accordion';

const Services = () => {
  const [loading, setLoading] = useState(true);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and modern web applications using the latest technologies and best practices."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Creating cross-platform mobile applications with seamless user experiences."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive interfaces that users love to interact with."
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and scalability."
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Providing ongoing support and updates to keep your applications running smoothly."
    },
    {
      icon: Database,
      title: "Cloud Services",
      description: "Deploying and managing applications on cloud platforms for maximum reliability."
    }
  ];

  // Simulate loading delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      id="services" 
      className="min-h-screen px-[5%] sm:px-[7%] md:px-[9%] py-12 md:py-16 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[120px]"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <h2 className="text-center text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-[800] mb-4 md:mb-6">
          My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-center text-[1.4rem] sm:text-[1.6rem] text-gray-400 mb-8 md:mb-10 max-w-[60rem] mx-auto px-4">
          Comprehensive solutions tailored to bring your digital vision to life
        </p>
      </motion.div>
      
      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <SkeletonLoader variant="service" count={6} />
        </div>
      ) : (
        <motion.div 
          className="space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainerVariants}
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={scaleInVariants}
              >
                <Accordion 
                  title={service.title} 
                  icon={IconComponent}
                  defaultOpen={index === 0}
                >
                  <p className="text-[1.3rem] sm:text-[1.4rem] md:text-[1.5rem] leading-relaxed text-gray-400">
                    {service.description}
                  </p>
                </Accordion>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </section>
  );
};

export default Services;

