import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const fullText = "DEEPAK NELSON";
  const [displayedText, setDisplayedText] = useState("");
  const typingSpeed = 100; // ms per character

  useEffect(() => {
    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const renderTypingText = () => {
    const parts = fullText.split(' ');
    const firstPart = parts[0] + ' '; // "DEEPAK "
    const splitPoint = firstPart.length;

    if (displayedText.length <= splitPoint) {
      return <span className="text-white">{displayedText}</span>;
    } else {
      const secondPartTyped = displayedText.slice(splitPoint);
      return (
        <>
          <span className="text-white">{firstPart}</span>
          <span className="text-[#E80368]">{secondPartTyped}</span>
        </>
      );
    }
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-transparent">
      <style>
        {`
          @keyframes blink {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }
          .cursor-blink {
            display: inline-block;
            width: 4px;
            height: 0.9em;
            background-color: #E80368;
            margin-left: 8px;
            vertical-align: middle;
            animation: blink 1s step-end infinite;
            box-shadow: 0 0 12px rgba(232, 3, 104, 0.8);
            border-radius: 2px;
          }
        `}
      </style>

      {/* Background Overlay Image */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('/images/hero-bg.png')] bg-no-repeat bg-right-top bg-contain hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-[2.1rem] sm:text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase leading-tight min-h-[1.2em] flex items-center break-word whitespace-pre-wrap">
            {renderTypingText()}
            <span className="cursor-blink"></span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed font-medium max-w-xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500 fill-mode-both">
            Game Developer turning wild ideas into polished and fun adventures — one level at a time.
          </p>

          <div className="flex gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-700 fill-mode-both">
            {[
              { icon: 'fab fa-twitter', url: 'https://twitter.com/thedrakun' },
              { icon: 'fab fa-instagram', url: 'https://www.instagram.com/thedrakun/' },
              { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/thedrakun/' },
              { icon: 'fab fa-github', url: 'https://github.com/DeepakNelsonX' }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white hover:bg-[#E80368] hover:border-[#E80368] transition-all transform hover:-translate-y-1 shadow-lg"
              >
                <i className={`${social.icon} text-sm`}></i>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-1000 fill-mode-both">
            <a 
              href="#portfolio" 
              onClick={(e) => scrollToSection(e, 'portfolio')}
              className="px-10 py-4 bg-[#E80368] hover:bg-[#ff006e] text-white font-black rounded-xl text-[11px] uppercase tracking-[0.2em] transition-all shadow-[0_10px_30px_rgba(232,3,104,0.3)] active:scale-95"
            >
              View Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="px-10 py-4 border-2 border-white/10 text-white font-black rounded-xl text-[11px] uppercase tracking-[0.2em] hover:bg-white/5 hover:border-white/20 transition-all active:scale-95"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;