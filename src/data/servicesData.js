import { getProject } from './projectsData';

/*
  Only offers with a published project (`evidence` matching a project slug)
  are shown on the site. Fill in `title`, `forWhom`, `youGet`, `timeline`
  and `evidence` to publish the second and third offers.
*/

const rawServices = [
  {
    title: 'Online store with an admin dashboard',
    forWhom: '[PLACEHOLDER: who this is for, for example small shops selling in Ghana]',
    youGet:
      'A React storefront, a Node.js and Express API, a MongoDB database, online payments and an admin dashboard to manage products and orders.',
    timeline: '[PLACEHOLDER: typical timeline in weeks]',
    evidence: 'sanich-farms',
  },
  // Offer 2: uncomment and fill with a published project slug in `evidence`
  // { title: '', forWhom: '', youGet: '', timeline: '', evidence: null },
  // Offer 3: uncomment and fill with a published project slug in `evidence`
  // { title: '', forWhom: '', youGet: '', timeline: '', evidence: null },
];

export const services = rawServices
  .map((s) => ({ ...s, project: s.evidence ? getProject(s.evidence) : null }))
  .filter((s) => Boolean(s.project));
