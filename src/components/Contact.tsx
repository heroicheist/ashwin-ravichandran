
import { Mail, Phone, Linkedin, Download, Award } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Email</p>
                    <p className="text-white font-medium">ashwinthemechon@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">Phone</p>
                    <p className="text-white font-medium">(716) 612-0408</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/70 text-sm">LinkedIn</p>
                    <a 
                      href="https://www.linkedin.com/in/ashwin-ravi-chandran/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      /in/ashwin-ravi-chandran
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Awards Section */}
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-8 h-8 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Awards & Recognition</h3>
              </div>
              
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Recognized by VP at CDW Hackathon for developing a cost-effective ServiceNow module</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>CDW Spot Award for managing multiple deliverables simultaneously with high quality</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Resume Download */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">Download Resume</h3>
              <p className="text-white/80 mb-8">
                Get a detailed overview of my experience, skills, and achievements in product management.
              </p>
              
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-pink-500/25 w-full">
                Download Resume
              </button>
            </div>

            {/* Education */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">Master of Science</h4>
                  <p className="text-purple-400">Management Information Systems – Product Management Stream</p>
                  <p className="text-white/70">University at Buffalo, SUNY</p>
                  <p className="text-white/60 text-sm">Expected May 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center">
          <p className="text-white/60">
            © 2025 Ashwin Ravichandran. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
