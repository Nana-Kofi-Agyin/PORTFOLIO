import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  const skills = [
    { name: "HTML & CSS", level: 95, color: "from-orange-500 to-red-500" },
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "React", level: 88, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 85, color: "from-green-400 to-emerald-600" },
    { name: "MongoDB", level: 82, color: "from-green-500 to-teal-600" },
    { name: "Tailwind CSS", level: 90, color: "from-sky-400 to-blue-500" }
  ];

  return (
    <section 
      ref={ref}
      id="skills" 
      className={`min-h-screen bg-[#1a1a2e] px-[9%] py-32 flex flex-col justify-center relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full filter blur-[120px]"></div>
      
      <h2 className="text-center text-[4.5rem] font-[800] mb-6">
        My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
      </h2>
      <p className="text-center text-[1.6rem] text-gray-400 mb-20 max-w-[60rem] mx-auto">
        Technologies and tools I use to bring ideas to life
      </p>
      
      <div className="max-w-[80rem] mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex justify-between mb-4 text-[1.6rem]">
                <span className="font-[600] text-white">{skill.name}</span>
                <span className="text-indigo-400 font-[700]">{skill.level}%</span>
              </div>
              <div className="bg-white/5 h-[1.2rem] rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: `${skill.level}%`,
                    boxShadow: '0 0 20px rgba(99, 102, 241, 0.5)'
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
