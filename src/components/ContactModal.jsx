import React, { useContext } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { UIContext } from '../context/UIContext';
import { FiX, FiSend } from 'react-icons/fi';

const overlay = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
const modal = { hidden: { y: 40, opacity: 0 }, visible: { y: 0, opacity: 1 }, exit: { y: 40, opacity: 0 } };

const ContactModal = () => {
  const { isModalOpen, closeModal } = useContext(UIContext);

  if (!isModalOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[2000] flex items-center justify-center"
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        className="absolute inset-0 bg-black/60"
        variants={overlay}
        onClick={closeModal}
      />

      <motion.div
        variants={modal}
        className="relative z-[2001] w-full max-w-3xl mx-4 bg-[#0f1724] p-8 rounded-2xl border border-white/10 backdrop-blur-md shadow-2xl"
      >
        <button onClick={closeModal} className="absolute top-4 right-4 text-gray-300">
          <FiX className="w-6 h-6" />
        </button>

        <h3 className="text-[2.2rem] font-[800] mb-2 text-white">Contact Me</h3>
        <p className="text-gray-400 mb-6">Got a project or just want to say hi? Send me a message.</p>

        <form className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input placeholder="Your name" className="px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white" />
            <input placeholder="Email" className="px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white" />
          </div>
          <input placeholder="Subject" className="px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white" />
          <textarea placeholder="Message" rows={6} className="px-4 py-3 rounded-md bg-white/5 border border-white/10 text-white" />

          <div className="flex justify-end mt-2">
            <button type="button" className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg flex items-center gap-2" onClick={closeModal}>
              <span>Send</span>
              <FiSend />
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default ContactModal;
