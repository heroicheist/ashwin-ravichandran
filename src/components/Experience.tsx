
const Experience = () => {
  const experiences = [
    {
      company: "QuSocial (University at Buffalo)",
      role: "Technical Product Manager",
      period: "Feb 2025 - May 2025",
      location: "Buffalo, NY",
      achievements: [
        "Led Qu Pulse, a 0-to-1 analytics tool, from scratch to launch in 4 months",
        "Delivered real-time news insights, enhancing decision-making speed by 25%",
        "Organized Agile sprints with clear sprint goals and maintained a 3-sprint refined backlog"
      ]
    },
    {
      company: "CDW Corporation",
      role: "Product Manager",
      period: "Oct 2022 - May 2024",
      location: "Vernon Hills, IL (Remote)",
      achievements: [
        "Owned ServiceNow product roadmap for two large enterprise clients",
        "Developed HR automation tool reducing manual processes by 90%",
        "Enhanced ITSM and VRM modules, improving performance by 25%",
        "Mentored 8+ interns and led recruitment interviews"
      ]
    },
    {
      company: "Infosys Limited",
      role: "Product Manager",
      period: "May 2021 - Oct 2022",
      location: "India",
      achievements: [
        "Developed customer onboarding platforms using React.js and REST APIs",
        "Released 10+ new features, improving engagement by 20% and form accuracy by 70%",
        "Reduced API integration errors by 30% through validation strategies"
      ]
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full border-4 border-white z-10"></div>

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <h4 className="text-lg text-pink-400 font-semibold">{exp.company}</h4>
                    <div className="flex flex-col sm:flex-row sm:justify-between text-white/70 text-sm mt-2">
                      <span>{exp.period}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-white/80 flex items-start">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
