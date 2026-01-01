import React from 'react';

const About: React.FC = () => {
  const infoItems = [
    { 
      icon: 'fas fa-briefcase', 
      title: 'Experience', 
      value: '4+ Years', 
      sub: 'Building mobile games, end to end' 
    },
    { 
      icon: 'fas fa-graduation-cap', 
      title: 'Qualification', 
      value: 'MSc Game Tech', 
      sub: 'ICAT Design & Media College' 
    },
    { 
      icon: 'fas fa-wand-magic-sparkles', 
      title: 'Specialization', 
      value: 'Systems & Tech-Art', 
      sub: 'Solid architecture, refined visuals' 
    },
    { 
      icon: 'fas fa-rocket', 
      title: 'Success', 
      value: '70K+ Downloads & 4.9 Rating', 
      sub: 'Candy World Solitaire' 
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#0a0a0a]/80 backdrop-blur-sm scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block text-white">
            Profile
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#E80368] rounded-full" />
          </h2>
          <p className="text-white/60 mt-6 uppercase text-[10px] tracking-[0.3em] font-bold">Turning creative ideas into smooth, engaging gameplay</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Bio */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-3xl font-bold text-[#E80368]">Unity Game Developer</h3>
            <div className="space-y-6 text-white/70 leading-relaxed text-lg">
              <p>
                I am a Unity Game Developer with over 4 years of experience specializing in the architecture of high-performance F2P mobile titles. With a core mastery of C# and modular systems, I bring extensive hands-on expertise in building sophisticated gameplay loops, progression frameworks, and performance-tuned solutions.
              </p>
              <p>
                I specialize in bridging the gap between technical art and optimized engineering, ensuring that every visual flourish—from complex particle systems to real-time physics—enhances the player experience without compromising on mobile hardware constraints.
              </p>
            </div>
          </div>

          {/* Right Column: Info Cards */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infoItems.map((item, i) => (
                <div 
                  key={i} 
                  className="p-4 bg-[#111827]/40 border border-[#1e293b] rounded-2xl hover:border-[#E80368]/40 transition-all group shadow-xl flex flex-col gap-3 justify-center"
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#E80368]/10 text-[#E80368] group-hover:bg-[#E80368] group-hover:text-white transition-all">
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#E80368] mb-1 transition-colors">{item.title}</h4>
                    <p className="text-sm font-bold text-white mb-0.5 leading-tight">{item.value}</p>
                    <p className="text-[10px] text-white/50 font-medium italic leading-tight">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;