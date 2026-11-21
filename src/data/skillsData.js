import { publishedProjects } from './projectsData';

/*
  Skills are grouped three ways. Rules:
  - "Used in projects" is built automatically from the stack of published
    projects, so every item there has project evidence and a link to it.
  - "Use daily" must only contain names that appear in a published project's
    stack. A name with no project evidence is dropped from the page.
  - "Learning" is free text because it needs no project. Keep it short and honest.

  Fill the two arrays below. Until you do, the page shows a visible placeholder.
  (The old site listed Three.js, WebGL, GraphQL and Rust under learning. Add them
  back only if that is still true.)
*/

export const dailySkills = []; // e.g. ['React', 'Node.js']
export const learningSkills = []; // e.g. ['GraphQL']

const firstProjectUsing = (name) => publishedProjects.find((p) => p.stack.includes(name));

const toItem = (name) => {
  const project = firstProjectUsing(name);
  return project ? { name, slug: project.slug, projectTitle: project.title } : null;
};

export const daily = dailySkills.map(toItem).filter(Boolean);

export const usedInProjects = [...new Set(publishedProjects.flatMap((p) => p.stack))]
  .filter((name) => !dailySkills.includes(name))
  .map(toItem)
  .filter(Boolean);

export const learning = learningSkills;
