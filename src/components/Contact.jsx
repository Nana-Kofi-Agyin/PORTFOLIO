// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { fadeUpVariants, scaleInVariants } from '../utils/animationVariants';

const Contact = () => {

  return (
    <section 
      id="contact" 
      className="min-h-screen bg-[#1a1a2e] px-[5%] sm:px-[7%] md:px-[9%] py-12 md:py-16 flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 w-[40rem] h-[40rem] bg-indigo-500/20 rounded-full filter blur-[150px]"></div>
      
      <div className="w-full max-w-[75rem] relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariants}
        >
          <h2 className="text-center text-[3rem] sm:text-[3.5rem] md:text-[4.5rem] font-[800] mb-4 md:mb-6 px-4">
            Get In <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-center text-[1.4rem] sm:text-[1.6rem] text-gray-400 mb-8 md:mb-10 px-4">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </motion.div>
        
        <motion.form 
          className="w-full bg-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-white/10" 
          style={{boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleInVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-5 sm:mb-6 md:mb-8">
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[48px] text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none placeholder-gray-500"
            />
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[48px] text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none placeholder-gray-500"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-5 sm:mb-6 md:mb-8">
            <input 
              type="tel" 
              placeholder="Phone Number"
              className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[48px] text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none placeholder-gray-500"
            />
            <input 
              type="text" 
              placeholder="Subject"
              className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[48px] text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none placeholder-gray-500"
            />
          </div>
          <textarea 
            rows="6"
            placeholder="Your Message"
            className="w-full px-5 sm:px-6 py-4 sm:py-5 text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none resize-none mb-6 sm:mb-8 md:mb-10 placeholder-gray-500"
          ></textarea>
          <button 
            type="submit"
            className="w-full px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 min-h-[52px] bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-white font-[600] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 sm:gap-3"
          >
            <span>Send Message</span>
            <FiSend className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
