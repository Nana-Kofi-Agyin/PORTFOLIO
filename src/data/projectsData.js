import { ShoppingCart, CheckSquare, BarChart3, Cloud, Briefcase, MessageCircle } from 'lucide-react';

export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack MERN e-commerce application with payment integration and admin dashboard.",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux", "JavaScript", "HTML5"],
    skillTags: {
      frontend: ["React", "Redux", "JavaScript", "HTML5"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Git", "Docker"]
    },
    image: ShoppingCart,
    githubLink: "https://github.com/Nana-Kofi-Agyin/E-COMMERCE.git",
    liveDemo: "https://demo.com"
  },
  {
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team features.",
    tags: ["React", "Firebase", "Tailwind CSS", "JavaScript"],
    skillTags: {
      frontend: ["React", "Tailwind CSS", "JavaScript"],
      backend: ["Firebase"],
      tools: ["Git", "Figma"]
    },
    image: CheckSquare,
    githubLink: "https://github.com",
    liveDemo: "https://demo.com"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for tracking social media metrics across multiple platforms.",
    tags: ["Next.js", "PostgreSQL", "Prisma", "TypeScript"],
    skillTags: {
      frontend: ["Next.js", "TypeScript"],
      backend: ["PostgreSQL", "Prisma"],
      tools: ["Git", "Vercel"]
    },
    image: BarChart3,
    githubLink: "https://github.com",
    liveDemo: "https://demo.com"
  },
  {
    title: "Weather App",
    description: "Real-time weather application with location-based forecasts and interactive maps.",
    tags: ["React", "CSS3", "JavaScript"],
    skillTags: {
      frontend: ["React", "CSS3", "JavaScript"],
      backend: [],
      tools: ["Git", "Vite"]
    },
    image: Cloud,
    githubLink: "https://github.com",
    liveDemo: "https://demo.com"
  },
  {
    title: "Portfolio Website",
    description: "Modern portfolio website with animations and responsive design.",
    tags: ["React", "Framer Motion", "Tailwind CSS", "JavaScript", "HTML5"],
    skillTags: {
      frontend: ["React", "Framer Motion", "Tailwind CSS", "JavaScript", "HTML5"],
      backend: [],
      tools: ["Git", "Vite", "Vercel", "Figma"]
    },
    image: Briefcase,
    githubLink: "https://github.com",
    liveDemo: "https://demo.com"
  },
  {
    title: "Chat Application",
    description: "Real-time chat app with user authentication and message history.",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "JavaScript"],
    skillTags: {
      frontend: ["React", "JavaScript"],
      backend: ["Node.js", "Express", "MongoDB"],
      tools: ["Git", "Docker"]
    },
    image: MessageCircle,
    githubLink: "https://github.com",
    liveDemo: "https://demo.com"
  }
];
