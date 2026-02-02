/**
 * Skills Data - Categorized for Recruiter Readability
 * Each skill includes project connections for credibility
 */

export const skillCategories = {
  languages: {
    title: "Languages",
    skills: [
      {
        name: "JavaScript",
        level: "ES6+",
        icon: "javascript",
        projects: ["E-Commerce Platform", "Task Management App", "Chat Application"],
        description: "Advanced async/await, closures, and modern ES6+ features"
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        icon: "typescript",
        projects: ["Social Media Dashboard"],
        description: "Type-safe development with interfaces and generics"
      },
      {
        name: "Python",
        level: "Intermediate",
        icon: "python",
        projects: [],
        description: "Scripting, automation, and backend development"
      },
      {
        name: "HTML5",
        level: "Expert",
        icon: "html5",
        projects: ["Portfolio Website", "E-Commerce Platform"],
        description: "Semantic markup and accessibility best practices"
      },
      {
        name: "CSS3",
        level: "Expert",
        icon: "css3",
        projects: ["Portfolio Website", "Weather App"],
        description: "Flexbox, Grid, animations, and responsive design"
      }
    ]
  },
  
  frontend: {
    title: "Frontend",
    skills: [
      {
        name: "React",
        level: "Expert",
        icon: "react",
        projects: ["E-Commerce Platform", "Task Management App", "Weather App", "Portfolio Website", "Chat Application"],
        description: "Complex state management, custom hooks, and performance optimization"
      },
      {
        name: "Next.js",
        level: "Advanced",
        icon: "nextdotjs",
        projects: ["Social Media Dashboard"],
        description: "SSR, SSG, API routes, and App Router patterns"
      },
      {
        name: "Tailwind CSS",
        level: "Expert",
        icon: "tailwindcss",
        projects: ["Task Management App", "Portfolio Website"],
        description: "Custom configurations and utility-first design systems"
      },
      {
        name: "Framer Motion",
        level: "Advanced",
        icon: "framer",
        projects: ["Portfolio Website"],
        description: "Complex animations, gestures, and layout transitions"
      },
      {
        name: "Redux",
        level: "Intermediate",
        icon: "redux",
        projects: ["E-Commerce Platform"],
        description: "Global state management with Redux Toolkit"
      }
    ]
  },
  
  backend: {
    title: "Backend & Databases",
    skills: [
      {
        name: "Node.js",
        level: "Advanced",
        icon: "nodedotjs",
        projects: ["E-Commerce Platform", "Chat Application"],
        description: "RESTful APIs, middleware, and async processing"
      },
      {
        name: "Express",
        level: "Advanced",
        icon: "express",
        projects: ["E-Commerce Platform", "Chat Application"],
        description: "Route handling, authentication, and error management"
      },
      {
        name: "PostgreSQL",
        level: "Intermediate",
        icon: "postgresql",
        projects: ["Social Media Dashboard"],
        description: "Complex queries, joins, and database design"
      },
      {
        name: "MongoDB",
        level: "Advanced",
        icon: "mongodb",
        projects: ["E-Commerce Platform", "Chat Application"],
        description: "Document modeling, aggregation pipelines, and indexing"
      },
      {
        name: "Prisma",
        level: "Intermediate",
        icon: "prisma",
        projects: ["Social Media Dashboard"],
        description: "Type-safe ORM with migrations and schema management"
      },
      {
        name: "Firebase",
        level: "Intermediate",
        icon: "firebase",
        projects: ["Task Management App"],
        description: "Real-time database, authentication, and cloud functions"
      }
    ]
  },
  
  tools: {
    title: "Tools & DevOps",
    skills: [
      {
        name: "Git",
        level: "Advanced",
        icon: "git",
        projects: ["All Projects"],
        description: "Branching strategies, conflict resolution, and collaboration"
      },
      {
        name: "GitHub",
        level: "Advanced",
        icon: "github",
        projects: ["All Projects"],
        description: "Actions, CI/CD pipelines, and project management"
      },
      {
        name: "Docker",
        level: "Intermediate",
        icon: "docker",
        projects: ["E-Commerce Platform"],
        description: "Containerization and multi-stage builds"
      },
      {
        name: "AWS",
        level: "Beginner",
        icon: "amazonaws",
        projects: [],
        description: "EC2, S3, and basic cloud deployment"
      },
      {
        name: "Vercel",
        level: "Advanced",
        icon: "vercel",
        projects: ["Portfolio Website", "Social Media Dashboard"],
        description: "Deployment, environment variables, and edge functions"
      },
      {
        name: "Figma",
        level: "Intermediate",
        icon: "figma",
        projects: ["Portfolio Website", "Task Management App"],
        description: "Design systems, prototyping, and developer handoff"
      },
      {
        name: "Vite",
        level: "Advanced",
        icon: "vite",
        projects: ["Portfolio Website", "Weather App"],
        description: "Fast build tooling and HMR configuration"
      }
    ]
  }
};

export const softSkills = [
  {
    name: "Agile Methodology",
    description: "Sprint planning, stand-ups, and iterative development"
  },
  {
    name: "Technical Writing",
    description: "Clear documentation, README files, and API documentation"
  },
  {
    name: "UI/UX Design Principles",
    description: "User-centered design, accessibility, and responsive patterns"
  },
  {
    name: "Code Review",
    description: "Providing constructive feedback and maintaining code quality"
  },
  {
    name: "Problem Solving",
    description: "Debugging complex issues and algorithmic thinking"
  }
];

export const currentlyLearning = [
  {
    name: "Three.js",
    icon: "threedotjs",
    reason: "Creating immersive 3D web experiences",
    progress: 40
  },
  {
    name: "WebGL",
    icon: "webgl",
    reason: "Low-level graphics programming for the web",
    progress: 25
  },
  {
    name: "GraphQL",
    icon: "graphql",
    reason: "Efficient API queries and modern data fetching",
    progress: 60
  },
  {
    name: "Rust",
    icon: "rust",
    reason: "Systems programming and WebAssembly",
    progress: 15
  }
];

export default skillCategories;
