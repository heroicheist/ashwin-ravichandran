// src/components/Hero.tsx
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
    <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative bg-gradient-to-br from-[#0b001a] via-[#0e1a2f] to-[#140024]">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <div className="w-64 h-64 mx-auto mb-8 relative rounded-3xl p-[3px] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 shadow-2xl animate-gradient-spin bg-[length:200%_200%] overflow-hidden">
            <div className="relative w-full h-full rounded-3xl bg-gradient-to-b from-[#10002B] to-[#240046] p-1 overflow-hidden">
              <img
                src="/lovable-uploads/a9568c1c-7d5a-48a5-8935-1045a4d43cef.png"
                alt="Ashwin Ravichandran"
                className="w-full h-full rounded-3xl object-cover shadow-lg"
              />
              <div className="absolute inset-0 rounded-3xl pointer-events-none before:content-[''] before:absolute before:inset-y-0 before:left-[-50%] before:w-[150%] before:transform-gpu before:rotate-12 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:animate-light-sweep" />
            </div>
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
            I obsess over problems because customers never ask for features — they ask for value.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-pink-500/25"
            >
              View My Work
            </button>

            <a href='https://drive.google.com/file/d/1m_5AmzkiKNkumSlqA86860n0txB5A-Zm/view?usp=sharing' className="px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 border border-white/20 flex items-center gap-2">
              <Download size={20} />
              Download Resume
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={scrollToAbout} className="text-white/60 hover:text-white transition-colors">
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
