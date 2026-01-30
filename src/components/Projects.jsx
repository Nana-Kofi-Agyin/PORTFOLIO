import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ShoppingCart, MessageSquare, CheckSquare, Cloud, Calendar, Briefcase, Github, Pen } from 'lucide-react';

const Projects = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce with payment integration and admin dashboard",
      icon: ShoppingCart,
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Social Media App",
      description: "Real-time social platform with messaging and notifications",
      icon: MessageSquare,
      tags: ["React", "Socket.io", "Express"]
    },
    {
      title: "Task Manager",
      description: "Collaborative task management with team features",
      icon: CheckSquare,
      tags: ["Vue", "Firebase", "Tailwind"]
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather app with beautiful data visualizations",
      icon: Cloud,
      tags: ["React", "Chart.js", "API"]
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support",
      icon: Pen,
      tags: ["Next.js", "MDX", "Vercel"]
    },
    {
      title: "Portfolio Generator",
      description: "Tool to create stunning portfolios in minutes",
      icon: Briefcase,
      tags: ["React", "TypeScript", "Vite"]
    }
  ];

  return (
    <section 
      ref={ref}
      id="projects" 
      className={`min-h-screen px-[9%] py-16 flex flex-col justify-center relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
      <div className="absolute bottom-0 right-1/4 w-[50rem] h-[50rem] bg-purple-500/10 rounded-full filter blur-[150px]"></div>
      
      <h2 className="text-center text-[4.5rem] font-[800] mb-6">
        Featured <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
      </h2>
      <p className="text-center text-[1.6rem] text-gray-400 mb-10 max-w-[60rem] mx-auto">
        Showcasing my recent work and creative solutions
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
          <div
            key={index}
            className="relative rounded-2xl overflow-hidden group cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:border-indigo-500/50 transition-all duration-300 hover:-translate-y-2"
            style={{boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'}}
          >
            <div className="w-full h-[28rem] bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-transparent flex items-center justify-center text-indigo-400 transition-transform duration-500 group-hover:scale-110">
              <IconComponent className="w-32 h-32" />
            </div>
            <div className="p-8">
              <h4 className="text-[2.2rem] font-[700] mb-3 text-white">{project.title}</h4>
              <p className="text-[1.4rem] mb-6 text-gray-400">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-[1.2rem] border border-indigo-500/30">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a href="#" className="flex-1 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg text-white text-[1.4rem] font-[600] text-center transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50">
                  View Project
                </a>
                <a href="#" className="inline-flex justify-center items-center w-[4.5rem] bg-white/5 border border-white/10 rounded-lg text-gray-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all duration-300">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        );
        })}
      </div>
    </section>
  );
};

export default Projects;
