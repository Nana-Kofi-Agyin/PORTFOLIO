import ecommerceImg from '../assets/ecommerce.png';

// Only projects with a real repo and a real live site are published.
// Task Management App, Social Media Dashboard, Weather App, Portfolio Website
// and Chat Application were removed because their links were placeholders
// (github.com and demo.com). Re-add them here once real links exist.

export const projects = [
  {
    title: 'Sanich Farms e-commerce platform',
    description:
      'Full stack MERN store with payment integration and an admin dashboard.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Redux'],
    image: ecommerceImg,
    imageAlt: 'Screenshot of the Sanich Farms storefront home page',
    githubLink: 'https://github.com/Sprint-Force/Sanich-Farms.git',
    viewSite: 'https://sanich-farms.vercel.app/',
    role: '[PLACEHOLDER: your role and what you built]',
    outcome: '[PLACEHOLDER: real outcome, or remove this line]',
  },
];

export default projects;
