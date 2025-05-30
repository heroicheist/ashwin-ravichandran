
const Skills = () => {
  const skillCategories = [
    {
      title: "Product Management",
      skills: ["Product Strategy", "Roadmapping", "Agile & Scrum", "Stakeholder Management", "User Stories", "A/B Testing", "Go-To-Market Strategy"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Platform Development",
      skills: ["ServiceNow ITSM", "React.js", "Node.js", "TypeScript", "JavaScript", "REST APIs", "SQL"],
      color: "from-purple-500 to-pink-600"
    },
    {
      title: "Tools & Technologies",
      skills: ["Tableau", "Figma", "JIRA", "Confluence", "ProductBoard", "Notion", "Grafana"],
      color: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-4 py-2 bg-gradient-to-r ${category.color} bg-opacity-20 text-white text-sm rounded-full border border-white/30 hover:scale-105 transition-transform duration-200 cursor-default`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Certifications</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-semibold">
                Certified Scrum Product Owner (CSPO)
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold">
                ServiceNow CSA
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
