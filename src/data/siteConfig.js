// Single source of truth for personal facts.
// Any value that starts with the placeholder prefix is shown on the page as visible
// placeholder text in dev and blocks production builds.

export const site = {
  name: 'Nana Kofi Agyin',
  role: 'Full-Stack Software Engineer',
  location: 'Accra, Ghana (GMT)',
  availability: 'Open to remote roles, international teams, and open-source collaboration',
  availabilityUpdated: 'November 2026',
  responseTime: '[PLACEHOLDER: typical response time, e.g. within 24 hours on weekdays]',
  experience: 'Computer Science student at the University of Ghana (Legon) with IT internship and full-stack project experience.',
  email: 'malvinamoah059@gmail.com',
  github: 'https://github.com/Nana-Kofi-Agyin',
  linkedin: 'https://www.linkedin.com/in/nana-kofi-agyin',
  x: '',
  cv: '/Nana_Kofi_Agyin_CV.pdf',
};

const PLACEHOLDER_PREFIX = '[' + 'PLACEHOLDER';

export const isPlaceholder = (value) =>
  typeof value === 'string' && value.startsWith(PLACEHOLDER_PREFIX);
