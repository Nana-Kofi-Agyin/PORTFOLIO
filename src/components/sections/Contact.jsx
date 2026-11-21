import { useState } from 'react';
import { site, isPlaceholder } from '../../data/siteConfig';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  'w-full px-4 py-3 min-h-[48px] text-[1.5rem] text-white bg-[#14142a] rounded-lg border border-white/30';

const Field = ({ id, label, children }) => (
  <div>
    <label htmlFor={id} className="block mb-2 text-[1.4rem] text-gray-200">
      {label}
    </label>
    {children}
  </div>
);

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', website: '' });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.website.trim()) return;
    if (!emailRegex.test(form.email)) {
      setStatus({ type: 'error', message: 'Enter a valid email address.' });
      return;
    }
    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message: 'The form is not available right now. Please use the email address above.',
      });
      return;
    }

    setSending(true);
    setStatus({ type: '', message: '' });
    try {
      const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
          },
        }),
      });
      if (!res.ok) throw new Error('Email API error');
      setForm({ name: '', email: '', subject: '', message: '', website: '' });
      setStatus({ type: 'success', message: 'Message sent. I will reply soon.' });
    } catch {
      setStatus({ type: 'error', message: 'Message not sent. Please try again or use the email address above.' });
    } finally {
      setSending(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-[60rem]">
      <Field id="contact-name" label="Name">
        <input id="contact-name" name="name" type="text" required autoComplete="name"
          value={form.name} onChange={handleChange} className={fieldClass} />
      </Field>
      <Field id="contact-email" label="Email">
        <input id="contact-email" name="email" type="email" required autoComplete="email"
          value={form.email} onChange={handleChange} className={fieldClass} />
      </Field>
      <Field id="contact-subject" label="Subject">
        <input id="contact-subject" name="subject" type="text" required
          value={form.subject} onChange={handleChange} className={fieldClass} />
      </Field>
      <Field id="contact-message" label="Message">
        <textarea id="contact-message" name="message" rows="6" required
          value={form.message} onChange={handleChange} className={`${fieldClass} resize-y`} />
      </Field>

      {/* Honeypot: hidden from people and screen readers */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off"
          value={form.website} onChange={handleChange} />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="px-8 py-3.5 min-h-[48px] bg-white text-black text-[1.5rem] font-[600] rounded-lg disabled:opacity-60"
      >
        {sending ? 'Sending...' : 'Send message'}
      </button>

      <p
        role={status.type === 'error' ? 'alert' : 'status'}
        aria-live="polite"
        className={`text-[1.5rem] min-h-[2.4rem] ${status.type === 'error' ? 'text-red-300' : 'text-green-300'}`}
      >
        {status.message}
      </p>
    </form>
  );
};

const Contact = () => (
  <section
    id="contact"
    className="bg-[#0b0b1a] px-[5%] sm:px-[7%] md:px-[9%] py-16 md:py-24"
  >
    <h2 className="text-[3rem] sm:text-[3.5rem] md:text-[4rem] font-[800] mb-4">Contact</h2>
    <p className="text-[1.6rem] text-gray-300 mb-2">
      Email:{' '}
      {isPlaceholder(site.email) ? (
        <span className="text-amber-300">{site.email}</span>
      ) : (
        <a href={`mailto:${site.email}`} className="underline underline-offset-4 text-white">
          {site.email}
        </a>
      )}
    </p>
    <p className="text-[1.6rem] text-gray-300 mb-8">Based in {site.location}.</p>
    <ContactForm />
  </section>
);

export default Contact;
