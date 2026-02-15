// eslint-disable-next-line no-unused-vars
import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';
import { fadeUpVariants, scaleInVariants } from '../../utils/animationVariants';

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
        
        <motion.div 
          className="w-full bg-white/5 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl border border-white/10" 
          style={{boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={scaleInVariants}
        >
          {/* Form state and handler implementation */}
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

const ContactForm = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    website: '' // honeypot
  });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, type: 'success', message: '' });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY; // used as user_id for EmailJS REST API

  useEffect(() => {
    if (import.meta.env.DEV) {
      console.log('EmailJS env presence:', {
        service: !!serviceId,
        template: !!templateId,
        publicKey: !!publicKey
      });
    }
  }, []);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const showToast = (type, message) => {
    setToast({ show: true, type, message });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 4500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (form.website && form.website.trim() !== '') return { ok: false, msg: 'Detected bot.' };
    if (!form.name.trim()) return { ok: false, msg: 'Please enter your full name.' };
    if (!form.email.trim() || !emailRegex.test(form.email)) return { ok: false, msg: 'Please enter a valid email.' };
    if (!form.subject.trim()) return { ok: false, msg: 'Please enter a subject.' };
    if (!form.message.trim()) return { ok: false, msg: 'Please enter a message.' };
    return { ok: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (!v.ok) {
      showToast('error', v.msg);
      return;
    }
    if (!serviceId || !templateId || !publicKey) {
      showToast('error', 'Email service not configured. Check env variables.');
      return;
    }

    setSending(true);
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      subject: form.subject,
      message: form.message
    };

    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      if (!res.ok) throw new Error('Email API error');

      setForm({ name: '', email: '', subject: '', message: '', website: '' });
      showToast('success', 'Message sent — I will reply shortly!');
    } catch (err) {
      showToast('error', 'Failed to send message. Please try again later.');
    } finally {
      setSending(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-5 sm:mb-6 md:mb-8">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Full Name"
          className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[48px] text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none placeholder-gray-500"
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Email Address"
          className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[48px] text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none placeholder-gray-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8 mb-5 sm:mb-6 md:mb-8">
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
          className="w-full px-5 sm:px-6 py-4 sm:py-5 min-h-[48px] text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none placeholder-gray-500"
        />
        {/* Honeypot - hidden from users but bots may fill */}
        <input
          name="website"
          value={form.website}
          onChange={handleChange}
          type="text"
          placeholder="Your website"
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />
      </div>

      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        rows="6"
        placeholder="Message"
        className="w-full px-5 sm:px-6 py-4 sm:py-5 text-[1.4rem] sm:text-[1.5rem] text-white bg-white/5 rounded-xl border border-white/10 transition-all duration-300 focus:border-indigo-500/50 focus:bg-white/10 focus:outline-none resize-none mb-6 sm:mb-8 md:mb-10 placeholder-gray-500"
      />

      <button
        type="submit"
        disabled={sending}
        className={`w-full px-8 sm:px-10 md:px-12 py-4 sm:py-4.5 md:py-5 min-h-[52px] rounded-xl text-[1.4rem] sm:text-[1.5rem] md:text-[1.6rem] text-white font-[600] cursor-pointer transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 ${sending ? 'bg-indigo-400/60' : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:shadow-2xl hover:shadow-indigo-500/50 hover:scale-[1.02] active:scale-95'}`}>
        <span>{sending ? 'Sending...' : 'Send Message'}</span>
        <FiSend className={`w-4 h-4 sm:w-5 sm:h-5 ${sending ? 'animate-spin' : ''}`} />
      </button>

      {/* Toast notification */}
      {toast.show && (
        <div className={`fixed right-6 bottom-6 z-50 max-w-sm w-full p-4 rounded-lg text-white ${toast.type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'} shadow-lg`}> 
          {toast.message}
        </div>
      )}
    </form>
  );
};
