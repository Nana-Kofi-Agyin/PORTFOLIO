const Services = () => {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      description: "Building responsive and modern web applications using the latest technologies and best practices."
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Creating cross-platform mobile applications with seamless user experiences."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Designing beautiful and intuitive interfaces that users love to interact with."
    },
    {
      icon: "🚀",
      title: "Performance",
      description: "Optimizing applications for speed, efficiency, and scalability."
    },
    {
      icon: "🔧",
      title: "Maintenance",
      description: "Providing ongoing support and updates to keep your applications running smoothly."
    },
    {
      icon: "☁️",
      title: "Cloud Services",
      description: "Deploying and managing applications on cloud platforms for maximum reliability."
    }
  ];

  return (
    <section id="services" className="min-h-screen px-[9%] py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full filter blur-[120px]"></div>
      
      <h2 className="text-center text-[4.5rem] font-[800] mb-6">
        My <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Services</span>
      </h2>
      <p className="text-center text-[1.6rem] text-gray-400 mb-20 max-w-[70rem] mx-auto">
        Comprehensive solutions tailored to bring your digital vision to life
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm p-12 rounded-2xl text-center border border-white/10 transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/10 hover:-translate-y-2 group"
            style={{boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'}}
          >
            <div className="text-[5rem] mb-6 transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
            <h3 className="text-[2.2rem] font-[700] mb-6 text-white">{service.title}</h3>
            <p className="text-[1.5rem] leading-[1.8] text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
