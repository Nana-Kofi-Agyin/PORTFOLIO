import { publishedProjects } from './projectsData';

/*
  Every skill shown on the site is derived from published projects so it
  always has project evidence and a link. Add items to `learningSkills`
  only if you want a "Learning" row shown.
*/

export const learningSkills = ['AI agents', 'Kubernetes'];

export const skills = [...new Set(publishedProjects.flatMap((p) => p.stack))]
  .map((name) => {
    const project = publishedProjects.find((p) => p.stack.includes(name));
    return project ? { name, slug: project.slug, projectTitle: project.title } : null;
  })
  .filter(Boolean);

export const learning = learningSkills.filter((s) => typeof s === 'string' && s.trim().length > 0);
