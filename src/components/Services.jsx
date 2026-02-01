import { motion } from 'framer-motion';
import { Code, Smartphone, Palette, Rocket, Wrench, Database } from 'lucide-react';
import { fadeUpVariants, staggerContainerVariants, scaleInVariants } from '../utils/animationVariants';

const Services = () => {

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

  return (
    <section 
      id="services" 
      className="min-h-screen px-[9%] py-16 flex flex-col justify-center relative overflow-hidden"
    >
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[120px]"></div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariants}
      >
        <h2 className="text-center text-[4.5rem] font-[800] mb-6">
          My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-center text-[1.6rem] text-gray-400 mb-10 max-w-[60rem] mx-auto">
          Comprehensive solutions tailored to bring your digital vision to life
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
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
            whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
            className="bg-white/5 backdrop-blur-sm p-12 rounded-2xl text-center border border-white/10 transition-colors duration-300 hover:border-indigo-500/50 hover:bg-white/10 group"
            style={{boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'}}
          >
            <div className="text-indigo-400 mb-6 transition-transform duration-300 group-hover:scale-110 flex justify-center">
              <IconComponent className="w-20 h-20" />
            </div>
            <h3 className="text-[2.2rem] font-[700] mb-6 text-white">{service.title}</h3>
            <p className="text-[1.5rem] leading-[1.8] text-gray-400">{service.description}</p>
          </motion.div>
        );
        })}
      </motion.div>
    </section>
  );
};

export default Services;
