
const Experience = () => {
  const experiences = [
    {
      company: "QuSocial (University at Buffalo)",
      role: "Technical Product Manager",
      period: "Feb 2025 - May 2025",
      location: "Buffalo, NY"
    },
    {
      company: "CDW Corporation",
      role: "Product Manager",
      period: "Oct 2022 - May 2024",
      location: "Vernon Hills, IL (Remote)"
    },
    {
      company: "Infosys Limited",
      role: "Product Manager",
      period: "May 2021 - Oct 2022",
      location: "India"
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
