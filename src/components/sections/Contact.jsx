import { useRef, useState } from 'react';
import { site, isPlaceholder } from '../../data/siteConfig';
import { validateContact, LIMITS } from '../../lib/contactValidation';
import Val from '../Val';

const baseField =
  'block w-full min-h-[44px] px-3 py-2 rounded-md bg-transparent border text-fg';

const Field = ({ id, label, error, children }) => (
  <div>
    <label htmlFor={id} className="block mb-1 text-[0.9375rem] text-muted">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1 text-[0.875rem] text-danger">
        {error}
      </p>
    )}
  </div>
);

const ContactForm = () => {
  const openedAt = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '', website: '' });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    if (openedAt.current === null) openedAt.current = Date.now();
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    const result = validateContact(form);
    if (!result.ok) {
      setErrors(result.errors);
      const firstKey = Object.keys(result.errors)[0];
      document.getElementById(`contact-${firstKey}`)?.focus();
      return;
    }

    setSending(true);
    try {
      const elapsed = openedAt.current ? Date.now() - openedAt.current : 0;
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...result.values,
          website: form.website,
          elapsed,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (res.status === 422 && data.errors) {
        setErrors(data.errors);
        const firstKey = Object.keys(data.errors)[0];
        document.getElementById(`contact-${firstKey}`)?.focus();
        return;
      }

      if (!res.ok) {
        setSubmitError(data.error || 'Could not send your message. Please email me directly.');
        return;
      }

      setForm({ name: '', email: '', subject: '', message: '', website: '' });
      setErrors({});
      setSent(true);
    } catch {
      setSubmitError('Could not reach the server. Please email me directly.');
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="mt-6 max-w-[34rem] p-5 rounded-md border border-accent bg-surface space-y-3"
      >
        <p className="font-semibold">Message sent.</p>
        <p className="text-muted text-[0.9375rem]">
          Thanks for reaching out. Response time: <Val v={site.responseTime} />.
        </p>
        <button
          type="button"
          onClick={() => {
            openedAt.current = Date.now();
            setSent(false);
          }}
          className="min-h-[44px] px-4 rounded-md border border-line cursor-pointer hover:border-accent"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5 max-w-[34rem]">
      <Field id="contact-name" label="Name" error={errors.name}>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          maxLength={LIMITS.name}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          value={form.name}
          onChange={handleChange}
          className={`${baseField} ${errors.name ? 'border-danger' : 'border-line'}`}
        />
      </Field>

      <Field id="contact-email" label="Email" error={errors.email}>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          maxLength={LIMITS.email}
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          value={form.email}
          onChange={handleChange}
          className={`${baseField} ${errors.email ? 'border-danger' : 'border-line'}`}
        />
      </Field>

      <Field id="contact-subject" label="Subject" error={errors.subject}>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          maxLength={LIMITS.subject}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
          value={form.subject}
          onChange={handleChange}
          className={`${baseField} ${errors.subject ? 'border-danger' : 'border-line'}`}
        />
      </Field>

      <Field id="contact-message" label="Message" error={errors.message}>
        <textarea
          id="contact-message"
          name="message"
          rows="6"
          required
          maxLength={LIMITS.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          value={form.message}
          onChange={handleChange}
          className={`${baseField} resize-y ${errors.message ? 'border-danger' : 'border-line'}`}
        />
      </Field>

      {/* Honeypot: hidden from people and screen readers */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input
          id="contact-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={form.website}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={sending}
        className="min-h-[44px] px-5 rounded-md bg-accent text-on-accent font-semibold cursor-pointer hover:opacity-90 disabled:opacity-60"
      >
        {sending ? 'Sending...' : 'Send message'}
      </button>

      {submitError && (
        <p role="alert" aria-live="assertive" className="text-danger text-[0.9375rem]">
          {submitError}
        </p>
      )}
    </form>
  );
};

const Contact = () => (
  <section id="contact" aria-labelledby="contact-title" className="border-t border-line">
    <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
      <h2 id="contact-title">Contact</h2>

      <dl className="mt-6 m-0 max-w-[65ch] border-b border-line">
        <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-3 border-t border-line">
          <dt className="text-muted text-[0.9375rem]">Direct email</dt>
          <dd className="m-0">
            {isPlaceholder(site.email) ? (
              <Val v={site.email} />
            ) : (
              <a href={`mailto:${site.email}`}>{site.email}</a>
            )}
          </dd>
        </div>
        <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-3 border-t border-line">
          <dt className="text-muted text-[0.9375rem]">Response time</dt>
          <dd className="m-0"><Val v={site.responseTime} /></dd>
        </div>
        <div className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-3 border-t border-line">
          <dt className="text-muted text-[0.9375rem]">Location</dt>
          <dd className="m-0">{site.location}</dd>
        </div>
      </dl>

      <h3 className="mt-12 text-[1.25rem]">Send a message</h3>
      <ContactForm />
    </div>
  </section>
);

export default Contact;
