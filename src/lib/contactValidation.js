// Shared by the browser form and the /api/contact function so both
// apply exactly the same rules.

export const LIMITS = { name: 100, email: 254, subject: 150, messageMin: 10, message: 5000 };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LINE_BREAK = /[\r\n]/;

export function validateContact(values) {
  const v = {
    name: String(values.name ?? '').trim(),
    email: String(values.email ?? '').trim(),
    subject: String(values.subject ?? '').trim(),
    message: String(values.message ?? '').trim(),
  };
  const errors = {};

  if (!v.name) errors.name = 'Enter your name.';
  else if (v.name.length > LIMITS.name) errors.name = `Use ${LIMITS.name} characters or fewer.`;
  else if (LINE_BREAK.test(v.name)) errors.name = 'Remove the line break.';

  if (!v.email) errors.email = 'Enter your email address.';
  else if (v.email.length > LIMITS.email || !EMAIL.test(v.email) || LINE_BREAK.test(v.email))
    errors.email = 'Enter an email address like name@example.com.';

  if (!v.subject) errors.subject = 'Add a short subject.';
  else if (v.subject.length < 3) errors.subject = 'Use at least 3 characters.';
  else if (v.subject.length > LIMITS.subject) errors.subject = `Use ${LIMITS.subject} characters or fewer.`;
  else if (LINE_BREAK.test(v.subject)) errors.subject = 'Remove the line break.';

  if (!v.message) errors.message = 'Write a message.';
  else if (v.message.length < LIMITS.messageMin)
    errors.message = `Write at least ${LIMITS.messageMin} characters so I know what you need.`;
  else if (v.message.length > LIMITS.message) errors.message = `Use ${LIMITS.message} characters or fewer.`;

  return { values: v, errors, ok: Object.keys(errors).length === 0 };
}
