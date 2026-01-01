import React from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-[#0a0a0a]/80 backdrop-blur-sm scroll-mt-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block text-white">
            Professional Skills
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#E80368] rounded-full" />
          </h2>
          <p className="text-white/60 mt-6 uppercase text-[10px] tracking-[0.3em] font-bold">Bridging technical precision with gameplay vision</p>
        </div>

        {/* Skill Cards Grid - Matching the provided image layout exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div 
              key={i} 
              className="bg-[#111827]/40 border border-[#1e293b] rounded-2xl p-8 shadow-sm hover:border-[#E80368]/40 transition-colors"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="text-[#E80368] text-xl">
                  <i className={cat.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{cat.category}</h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3.5 py-1.5 bg-[#0f172a] border border-[#1e293b] rounded-md text-[13px] font-medium text-white/80 transition-all hover:border-[#E80368]/50 hover:text-white cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;