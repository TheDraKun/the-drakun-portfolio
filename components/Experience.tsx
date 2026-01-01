import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  const formatAchievement = (text: string) => {
    // Check if the bullet is a project heading
    if (text.startsWith('PROJECT: ')) {
      return (
        <span className="text-[#E80368] font-black uppercase tracking-widest text-xs">
          {text.replace('PROJECT: ', '')}
        </span>
      );
    }
    
    const parts = text.split(': ');
    if (parts.length > 1) {
      return (
        <>
          <span className="text-white font-bold">{parts[0]}:</span> {parts.slice(1).join(': ')}
        </>
      );
    }
    return text;
  };

  return (
    <section id="experience" className="py-24 bg-[#0a0a0a]/80 backdrop-blur-sm scroll-mt-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block text-white">
            Experience
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#E80368] rounded-full" />
          </h2>
          <p className="text-white/60 mt-6 uppercase text-[10px] tracking-[0.3em] font-bold">Concept → Prototype → Live</p>
        </div>

        {/* Reworked Timeline Structure */}
        <div className="relative">
          {/* Vertical Timeline Line with Gradient */}
          <div className="absolute left-4 top-11 bottom-11 w-[1px] bg-gradient-to-b from-transparent via-[#E80368]/40 to-transparent" />
          
          <div className="space-y-16">
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative pl-12 group">
                {/* New Animated Marker */}
                <div className="absolute left-4 top-11 -translate-x-1/2">
                  <div className="h-3 w-3 rounded-full bg-[#E80368] shadow-[0_0_15px_rgba(232,3,104,0.7)] group-hover:scale-125 transition-transform duration-300" />
                  <div className="absolute inset-0 rounded-full border-2 border-[#E80368] opacity-0 scale-75 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500" />
                </div>
                
                <div className="bg-[#111827]/40 border border-[#1e293b] p-8 md:p-10 rounded-[2rem] hover:border-[#E80368]/30 transition-all shadow-xl group-hover:bg-[#111827]/60">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-[#E80368] transition-colors">{exp.role}</h4>
                      <h5 className="text-[#E80368] font-bold text-sm uppercase tracking-widest">{exp.company}</h5>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] font-black text-white/70 uppercase tracking-widest">
                        {exp.period}
                      </span>
                      <p className="text-[10px] text-white/40 mt-2 font-bold uppercase tracking-widest">{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-4">
                    {exp.achievements.map((ach, i) => {
                      const isProject = ach.startsWith('PROJECT: ');
                      return (
                        <li key={i} className={`flex gap-4 group/item ${isProject ? 'mt-8 mb-2' : ''}`}>
                          {!isProject && (
                            <span className="text-[#E80368] font-black mt-1 group-hover/item:translate-x-1 transition-transform">▶</span>
                          )}
                          <span className={`text-sm md:text-base leading-relaxed transition-colors ${isProject ? 'text-white font-bold' : 'text-white/60 group-hover/item:text-white/90'}`}>
                            {formatAchievement(ach)}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;