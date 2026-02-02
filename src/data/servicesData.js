import { Code2, Server, Zap, Database } from 'lucide-react';

export const services = [
  {
    title: 'Frontend Development',
    description: 'Building modern, responsive user interfaces and component-driven experiences.',
    icon: Code2,
    tools: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion']
  },
  {
    title: 'Backend & APIs',
    description: 'Designing scalable server-side architectures and REST/GraphQL APIs.',
    icon: Server,
    tools: ['Node.js', 'Express', 'NestJS', 'JWT']
  },
  {
    title: 'DevOps & Databases',
    description: 'Deployment, CI/CD, and reliable data storage solutions.',
    icon: Database,
    tools: ['PostgreSQL', 'MongoDB', 'Docker', 'AWS']
  },
  {
    title: 'Realtime & Integrations',
    description: 'Realtime features, web sockets and third-party integrations.',
    icon: Zap,
    tools: ['Socket.io', 'Webhooks', 'OAuth', 'APIs']
  }
];

export default services;
