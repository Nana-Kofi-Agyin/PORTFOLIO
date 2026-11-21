// Single source of truth for personal facts.
// Any value that starts with "[PLACEHOLDER" is shown on the page as visible
// placeholder text and is never rendered as a link.

export const site = {
  name: 'Nana Kofi Agyin',
  role: 'Full stack developer',
  location: 'Accra, Ghana (GMT)',
  availability: '[PLACEHOLDER: availability, e.g. open to remote roles or freelance]',
  experience: '[PLACEHOLDER: years of experience, or remove this line]',
  email: '[PLACEHOLDER: public email]',
  github: '[PLACEHOLDER: GitHub URL]',
  linkedin: '[PLACEHOLDER: LinkedIn URL]',
  x: '[PLACEHOLDER: X URL, or remove]',
  cv: '/Nana_Kofi_Agyin_CV.pdf',
};

export const isPlaceholder = (value) =>
  typeof value === 'string' && value.startsWith('[PLACEHOLDER');
