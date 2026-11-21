import sanichHome from '../assets/sanich-home.jpg';

/*
  A project is published only when it has at least one real screenshot
  AND a live link. Anything else is hidden and listed under `todo`
  (shown in development only on the All projects page).

  Rules for this file: never invent metrics, clients or quotes.
  Use "[PLACEHOLDER: ...]" for anything you have not supplied.
*/

const raw = [
  {
    slug: 'sanich-farms',
    title: 'Sanich Farms online store',
    summary: 'A full stack MERN store with payments and an admin dashboard.',
    role: '[PLACEHOLDER: your role on this project]',
    timeline: '[PLACEHOLDER: dates or duration]',
    stack: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    problem: '[PLACEHOLDER: 2 to 3 sentences. Who is the store for and what was not working before?]',
    built: '[PLACEHOLDER: what you built, in plain language]',
    decisions: [
      {
        decision: '[PLACEHOLDER: key technical decision, for example why Redux or how payments are handled]',
        tradeoff: '[PLACEHOLDER: what you gave up or what it cost]',
      },
      {
        decision: '[PLACEHOLDER: second decision]',
        tradeoff: '[PLACEHOLDER: its trade-off]',
      },
    ],
    debuggingStory:
      '[PLACEHOLDER: one real bug you hit in this project, how you diagnosed it, and how you fixed it]',
    notBuilt:
      '[PLACEHOLDER: one feature or abstraction you intentionally left out of scope, and why]',
    outcome: '[PLACEHOLDER: a real metric, or what you learned. Do not guess a number.]',
    screenshots: [
      {
        src: sanichHome,
        width: 1600,
        height: 803,
        alt: 'Home page of the Sanich Farms online store',
        caption: 'Store home page',
      },
      // TODO: add 1 to 3 more real screenshots (product page, checkout, admin dashboard).
    ],
    diagram: 'mern',
    live: 'https://sanich-farms.vercel.app/',
    github: 'https://github.com/Sprint-Force/Sanich-Farms.git',
  },

  // Hidden until each has a real screenshot and a live link.
  { slug: 'task-management-app', title: 'Task Management App', stack: ['React', 'Firebase', 'Tailwind CSS'], screenshots: [], live: '', github: '' },
  { slug: 'social-media-dashboard', title: 'Social Media Dashboard', stack: ['Next.js', 'PostgreSQL', 'Prisma', 'TypeScript'], screenshots: [], live: '', github: '' },
  { slug: 'weather-app', title: 'Weather App', stack: ['React', 'CSS'], screenshots: [], live: '', github: '' },
  { slug: 'portfolio-website', title: 'Portfolio Website', stack: ['React', 'Tailwind CSS', 'Vite'], screenshots: [], live: '', github: '' },
  { slug: 'chat-application', title: 'Chat Application', stack: ['React', 'Socket.io', 'Node.js', 'MongoDB'], screenshots: [], live: '', github: '' },
];

const todoFor = (p) => {
  const todo = [];
  if (!p.screenshots.length) todo.push('TODO: add at least one real screenshot');
  if (!p.live) todo.push('TODO: add a real live link');
  if (!p.github) todo.push('TODO: add a real GitHub link');
  return todo;
};

export const projects = raw.map((p) => ({ ...p, todo: todoFor(p) }));

const isPublished = (p) => p.screenshots.length > 0 && Boolean(p.live);

export const publishedProjects = projects.filter(isPublished);
export const hiddenProjects = projects.filter((p) => !isPublished(p));

// Home page shows at most three, in the order listed above.
export const featuredProjects = publishedProjects.slice(0, 3);

export const getProject = (slug) => publishedProjects.find((p) => p.slug === slug);

export const allStacks = [...new Set(publishedProjects.flatMap((p) => p.stack))].sort();
