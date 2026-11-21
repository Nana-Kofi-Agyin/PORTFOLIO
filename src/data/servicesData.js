import { getProject } from './projectsData';

/*
  Offers must be things you have shipped. Each offer lists who it is for,
  what the client gets and a typical timeline. Never add an offer you
  cannot point to a project for. `evidence` is a project slug.
*/

export const services = [
  {
    title: 'Online store with an admin dashboard',
    forWhom: '[PLACEHOLDER: who this is for, for example small shops selling in Ghana]',
    youGet:
      'A React storefront, a Node.js and Express API, a MongoDB database, online payments and an admin dashboard to manage products and orders.',
    timeline: '[PLACEHOLDER: typical timeline in weeks]',
    evidence: 'sanich-farms',
  },
  {
    title: '[PLACEHOLDER: second offer you have shipped]',
    forWhom: '[PLACEHOLDER: who it is for]',
    youGet: '[PLACEHOLDER: what they get]',
    timeline: '[PLACEHOLDER: typical timeline]',
    evidence: null,
  },
  {
    title: '[PLACEHOLDER: third offer you have shipped]',
    forWhom: '[PLACEHOLDER: who it is for]',
    youGet: '[PLACEHOLDER: what they get]',
    timeline: '[PLACEHOLDER: typical timeline]',
    evidence: null,
  },
].map((s) => ({ ...s, project: s.evidence ? getProject(s.evidence) : null }));
