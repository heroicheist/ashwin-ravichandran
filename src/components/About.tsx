
const About = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <p className="text-lg text-white/90 leading-relaxed mb-6">
                I have 3+ years of product management experience with expertise in AI tools, 
                ServiceNow, and web development. I specialize in transforming complex business 
                requirements into scalable technical solutions.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Location</h4>
                  <p className="text-white/80">Buffalo, NY</p>
                </div>
                <div className="bg-gradient-to-r from-purple-500/20 to-blue-600/20 rounded-lg p-4">
                  <h4 className="font-semibold text-white mb-2">Experience</h4>
                  <p className="text-white/80">3+ Years</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-pink-500/10 to-purple-600/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                An exceptional product manager and developer!
              </h3>
              <p className="text-white/80 text-lg">
                Passionate about creating user-centric products that solve real-world problems 
                through innovative technology and seamless user experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-pink-400 mb-2">25%</div>
                <div className="text-white/80 text-sm">Faster Decisions</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-3xl font-bold text-purple-400 mb-2">90%</div>
                <div className="text-white/80 text-sm">Process Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
