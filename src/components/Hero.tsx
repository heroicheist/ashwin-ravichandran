
import { useState, useEffect } from 'react';
import { ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Product Manager | SaaS | AI | Workflow Automation';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-48 h-48 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-600 p-1 animate-pulse">
              <img
                src="/lovable-uploads/432be41e-7804-4e96-8993-a8e212825155.png"
                alt="Ashwin Ravichandran"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500/20 to-purple-600/20 animate-ping"></div>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Ashwin
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Ravichandran
            </span>
          </h1>
          
          <div className="h-8 mb-6">
            <p className="text-xl md:text-2xl text-white/90 font-medium">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Product leader with 3+ years of experience building enterprise software, AI tools, 
            and workflow automation solutions. Proven success in leading cross-functional teams 
            and delivering 0-to-1 products.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-pink-500/25"
            >
              View My Work
            </button>
            
            <button className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button onClick={scrollToAbout} className="text-white/60 hover:text-white transition-colors">
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
