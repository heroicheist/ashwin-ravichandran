
import { BarChart, Users, Settings } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Qu Pulse",
      description: "Analytics tool using LLM, APIs, and web scraping",
      outcome: "Enabled 25% faster decisions and 50% better targeting",
      tech: ["React", "Node.js", "APIs", "LLM"],
      icon: <BarChart className="w-8 h-8" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "HR Automation",
      description: "Custom automation tool reducing manual processes",
      outcome: "Cut HR processing time from 5 hours to under 15 minutes",
      tech: ["ServiceNow", "Automation", "Workflows"],
      icon: <Users className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Custom ServiceNow Apps",
      description: "Enterprise workflow automation solutions",
      outcome: "Optimized business processes with AI integration",
      tech: ["ServiceNow", "JavaScript", "AI", "Workflows"],
      icon: <Settings className="w-8 h-8" />,
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {project.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
              
              <p className="text-white/80 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg p-3 mb-6">
                <p className="text-green-300 font-medium text-sm">
                  {project.outcome}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-white/20 text-white text-sm rounded-full border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
