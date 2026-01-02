import React, { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import * as analytics from '../utils/analytics';

const isVideoUrl = (url: string | undefined) => {
  if (!url) return false;
  const lower = url.toLowerCase();
  return lower.endsWith('.mp4') || lower.endsWith('.mov');
};

const SolitaireMetrics: React.FC<{ isGrid?: boolean }> = ({ isGrid }) => {
  const metrics = [
    { value: '42%', label: 'D1 RETENTION' },
    { value: '17%', label: 'D7 RETENTION' },
    { value: '35m', label: 'AVG PLAYTIME' },
    { value: '70K+', label: 'INSTALLS' }
  ];

  return (
    <div className={`w-full bg-[#0d1014] border border-white/5 rounded-2xl shadow-inner ${isGrid ? 'p-4 mt-4' : 'p-6 mb-10'}`}>
      <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center text-center`}>
        {metrics.map((m, i) => (
          <div key={i} className="flex flex-col gap-0.5 md:gap-1">
            <span className={`${isGrid ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-black text-[#03E883] tracking-tight`}>
              {m.value}
            </span>
            <span className="text-[7px] md:text-[8px] font-black text-white/30 uppercase tracking-[0.2em]">
              {m.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CustomVideoPlayer: React.FC<{ src: string }> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);

  useEffect(() => {
    setIsPlaying(true);
    setProgress(0);
    setCurrentTime(0);
    if (videoRef.current) {
      videoRef.current.volume = 0.2;
      videoRef.current.currentTime = 0;
      // Attempt autoplay, handle browser policies
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [src]);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const curr = videoRef.current.currentTime;
      const dur = videoRef.current.duration;
      setCurrentTime(curr);
      setDuration(dur);
      if (dur > 0) setProgress((curr / dur) * 100);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (videoRef.current && duration > 0) {
      const time = (val / 100) * duration;
      videoRef.current.currentTime = time;
      setProgress(val);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen().catch(err => console.error(err));
    } else if (document.exitFullscreen) {
      document.exitFullscreen().catch(err => console.error(err));
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center group select-none rounded-2xl overflow-hidden bg-black shadow-2xl"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onClick={togglePlay}
    >
      <video 
        ref={videoRef}
        src={src}
        className="max-w-full max-h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
        playsInline
        muted={isMuted}
      />

      {/* Big Center Play Button (Visible when paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-[1px] z-10 transition-all">
          <button 
            onClick={togglePlay}
            className="w-20 h-20 bg-[#03E883] rounded-full flex items-center justify-center text-[#0a0a0a] shadow-[0_0_40px_rgba(3,232,131,0.6)] hover:scale-110 transition-transform duration-200 group/btn"
          >
            <i className="fas fa-play text-3xl ml-2 group-hover/btn:text-white transition-colors"></i>
          </button>
        </div>
      )}

      {/* Custom Controls Bar */}
      <div 
        className={`absolute bottom-0 left-0 right-0 p-6 pt-16 bg-gradient-to-t from-black/90 via-black/60 to-transparent transition-opacity duration-300 z-20 ${showControls ? 'opacity-100' : 'opacity-0'}`}
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex flex-col gap-3">
          {/* Custom Styled Progress Bar */}
          <div className="relative group/slider w-full h-1.5 hover:h-2.5 transition-all bg-white/20 rounded-full cursor-pointer flex items-center">
             <div 
                className="absolute left-0 top-0 bottom-0 bg-[#03E883] rounded-full pointer-events-none transition-all" 
                style={{ width: `${progress}%` }} 
             />
             {/* Thumb Indicator */}
             <div 
                className="absolute w-3 h-3 bg-white rounded-full shadow-lg pointer-events-none opacity-0 group-hover/slider:opacity-100 transition-opacity"
                style={{ left: `calc(${progress}% - 6px)` }}
             />
             <input 
              type="range" 
              min="0" 
              max="100" 
              step="0.1"
              value={progress} 
              onChange={handleSeek}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>

          <div className="flex items-center justify-between mt-1">
            <div className="flex items-center gap-5 text-white">
              <button onClick={togglePlay} className="hover:text-[#03E883] transition-colors w-5 flex justify-center">
                <i className={`fas ${isPlaying ? 'fa-pause' : 'fa-play'} text-lg`}></i>
              </button>
              
              <div className="flex items-center gap-3 group/vol">
                <button onClick={toggleMute} className="hover:text-[#03E883] transition-colors w-5 flex justify-center">
                  <i className={`fas ${isMuted ? 'fa-volume-mute' : 'fa-volume-up'} text-sm`}></i>
                </button>
              </div>

              <div className="text-[10px] font-bold font-mono tracking-widest text-white/70">
                {formatTime(currentTime)} <span className="mx-1 text-white/30">/</span> {formatTime(duration)}
              </div>
            </div>

            <button onClick={toggleFullscreen} className="text-white hover:text-[#03E883] transition-colors">
              <i className="fas fa-expand"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  const PRIMARY_CATEGORIES = ['all', 'Action', 'Casual', 'Racing', 'Puzzle'];
  
  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()));

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setActiveMediaIndex(0);
    document.body.style.overflow = 'hidden';
    
    // Track modal open event
    analytics.event({
      action: 'view_project',
      category: 'Projects',
      label: project.title
    });
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const getGridSpanClass = (projectId: string, currentFilter: string) => {
    if (currentFilter !== 'all') {
      return 'lg:col-span-2 sm:col-span-1';
    }

    if (projectId === 'candy-world-sol') {
      return 'lg:col-span-6 sm:col-span-2';
    }
    if (projectId === 'cat-wool' || projectId === 'shootopia') {
      return 'lg:col-span-3 sm:col-span-1';
    }
    return 'lg:col-span-2 sm:col-span-1';
  };

  const ModalPortal = ({ project }: { project: Project }) => {
    const isKeyTitle = project.tags.includes('Key Title');
    const isLinkUnavailable = !project.link || project.link === '#' || project.id === 'cube-survivor' || project.id === 'mega-suv';

    return createPortal(
      <div 
        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
        onClick={closeModal}
      >
        <button 
          onClick={closeModal}
          className="fixed top-4 right-4 md:top-6 md:right-6 z-[100001] w-10 h-10 bg-white/10 hover:bg-[#E80368] text-white rounded-full flex items-center justify-center transition-all shadow-xl backdrop-blur-md border border-white/10 group active:scale-90"
        >
          <i className="fas fa-times group-hover:rotate-90 transition-transform"></i>
        </button>

        <div 
          className="relative w-full h-full md:w-[92vw] md:max-w-6xl md:h-auto md:max-h-[90vh] bg-[#0a0a0a] md:rounded-[2rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row border border-white/10 animate-in zoom-in-95 duration-200"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="w-full lg:w-[55%] h-[40vh] md:h-[50vh] lg:h-auto bg-black flex flex-col relative border-b lg:border-b-0 lg:border-r border-white/5 overflow-hidden">
            <div className="flex-1 flex items-center justify-center p-4 md:p-6 lg:p-10 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />
              
              {isKeyTitle && (
                <div className="absolute top-6 left-6 z-30 bg-[#03E883] text-[#0a0a0a] font-black text-[10px] px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(3,232,131,0.4)]">
                  Highlighted Project
                </div>
              )}

              {isVideoUrl(project.screenshots[activeMediaIndex]) ? (
                // Check if it's the specific demo video that should just autoplay without controls
                project.screenshots[activeMediaIndex].includes('Sol-demo.mp4') ? (
                   <video 
                      src={project.screenshots[activeMediaIndex]} 
                      autoPlay 
                      muted 
                      loop
                      playsInline 
                      className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl relative z-0"
                    />
                ) : (
                  <CustomVideoPlayer 
                    key={project.screenshots[activeMediaIndex]}
                    src={project.screenshots[activeMediaIndex]} 
                  />
                )
              ) : (
                <img 
                  key={project.screenshots[activeMediaIndex]}
                  src={project.screenshots[activeMediaIndex]} 
                  alt={project.title} 
                  className="max-w-full max-h-full rounded-2xl object-contain shadow-2xl relative z-0"
                />
              )}
            </div>
            
            <div className="p-4 bg-[#0a0a0a]/80 backdrop-blur-md border-t border-white/5 flex gap-3 overflow-x-auto scrollbar-hide justify-center relative z-20">
              {project.screenshots.map((shot, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveMediaIndex(idx)}
                  className={`w-12 h-12 md:w-16 md:h-16 rounded-xl overflow-hidden shrink-0 border-2 transition-all transform active:scale-95 ${activeMediaIndex === idx ? 'border-[#E80368] scale-105 shadow-[0_0_15px_rgba(232,3,104,0.4)] opacity-100' : 'border-transparent opacity-40 hover:opacity-100'}`}
                >
                  {isVideoUrl(shot) ? (
                    <div className="relative w-full h-full bg-black">
                      <video 
                        src={`${shot}#t=0.1`} 
                        className="w-full h-full object-cover opacity-80"
                        muted
                        preload="metadata"
                        playsInline
                      />
                      {/* Only show play icon if it's NOT the demo video, or keep consistent style */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-5 h-5 rounded-full bg-black/60 flex items-center justify-center backdrop-blur-sm border border-white/10">
                          <i className="fas fa-play text-[6px] text-white ml-0.5"></i>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <img 
                      src={shot} 
                      className="w-full h-full object-cover" 
                      alt={`thumb-${idx}`} 
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-[45%] flex flex-col h-[60vh] md:h-[40vh] lg:h-auto overflow-y-auto bg-[#0d1014] scrollbar-hide relative">
            <div className="p-8 md:p-10 lg:p-12 space-y-10">
              <header className="relative">
                <div className="flex items-center gap-2.5 mb-4">
                  <span className="h-[2px] w-8 bg-[#E80368] rounded-full"></span>
                  <span className="text-[#E80368] font-black uppercase tracking-[0.3em] text-[9px]">{project.category}</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-8 leading-tight tracking-tighter">
                  {project.title}
                </h1>
                
                <div className="grid grid-cols-2 gap-6 border-y border-white/5 py-6 mb-8">
                  <div className="space-y-1">
                    <p className="text-white/30 text-[8px] font-black uppercase tracking-widest">Studio</p>
                    <div className="text-white font-bold text-xs flex items-center gap-2">
                      <i className="fas fa-gamepad text-[#E80368] text-[10px]"></i> {project.organization}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <p className="text-white/30 text-[8px] font-black uppercase tracking-widest">Release</p>
                    <div className="text-white font-bold text-xs flex items-center gap-2">
                      <i className="fas fa-calendar-alt text-[#E80368] text-[10px]"></i> {project.date}
                    </div>
                  </div>
                </div>

                <div className="pb-4">
                  {!isLinkUnavailable ? (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group relative w-full max-w-[240px] h-[48px] rounded-[24px] overflow-hidden flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-[0_10px_30px_rgba(232,3,104,0.3)]"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#880E4F] via-[#C2185B] to-[#E91E63] group-hover:brightness-110 transition-all" />
                      <div className="relative z-10 flex items-center gap-3 text-white">
                        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.61 3 21.09 3 20.5ZM14.4 12.71L17.5 15.81L4.54 23.3C4.38 23.39 4.19 23.44 4 23.44C3.89 23.44 3.79 23.42 3.69 23.39L14.4 12.71ZM18.21 15.1L21.46 13.21C22.39 12.67 22.39 11.33 21.46 10.79L18.21 8.9L15.11 12L18.21 15.1ZM14.4 11.29L3.69 0.58C3.79 0.55 3.89 0.53 4 0.53C4.19 0.53 4.38 0.58 4.54 0.67L17.5 8.16L14.4 11.29Z" />
                        </svg>
                        <span className="font-black text-[10px] uppercase tracking-[0.35em]">Play Store</span>
                      </div>
                    </a>
                  ) : (
                    <div className="w-full max-w-[240px] h-[48px] bg-white/5 border border-white/10 text-white/20 font-black rounded-[24px] text-center text-[9px] uppercase tracking-[0.3em] flex items-center justify-center gap-2.5">
                      <i className="fas fa-info-circle text-xs"></i> Unavailable Currently
                    </div>
                  )}
                </div>
              </header>

              <div className="space-y-12">
                {/* Special Stats Dashboard for Solitaire */}
                {project.id === 'candy-world-sol' && <SolitaireMetrics />}

                <section className="space-y-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2 h-2 rounded-full bg-[#E80368]" />
                    <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Background</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed text-sm md:text-base font-normal">
                    {project.description}
                  </p>
                </section>

                {project.rolesContributions && (
                  <section className="space-y-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-2 h-2 rounded-full bg-[#E80368]" />
                      <h3 className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em]">Impact</h3>
                    </div>
                    <div className="bg-white/[0.03] border-l-4 border-[#E80368] rounded-r-2xl p-6 md:p-8 text-white/90 leading-relaxed text-sm md:text-base font-medium shadow-inner">
                      {project.rolesContributions}
                    </div>
                  </section>
                )}
              </div>

              <footer className="pt-20 pb-4 text-center opacity-10">
                <p className="text-[9px] font-black uppercase tracking-[1em] text-white">THE DRAKUN</p>
              </footer>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  };

  return (
    <section id="portfolio" className="py-20 bg-[#0a0a0a]/80 backdrop-blur-sm scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block text-white">
            Portfolio
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#E80368] rounded-full" />
          </h2>
          <p className="text-white/60 mt-6 uppercase text-[10px] tracking-[0.3em] font-bold">Featured games and development work</p>
        </div>

        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {PRIMARY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold text-[10px] border transition-all uppercase tracking-widest ${
                filter.toLowerCase() === cat.toLowerCase() 
                  ? 'bg-[#E80368] border-[#E80368] text-white shadow-lg' 
                  : 'border-white/10 text-white/40 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
          {filteredProjects.map((project) => {
            const isKeyTitle = project.tags.includes('Key Title');
            
            const displayTags = project.tags
              .filter(tag => tag !== 'Key Title')
              .slice(0, 4);

            return (
              <div 
                key={project.id} 
                onClick={() => openModal(project)}
                className={`group bg-[#111418] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E80368]/50 transition-all cursor-pointer ${getGridSpanClass(project.id, filter)}`}
              >
                <div className={`${project.id === 'candy-world-sol' && filter === 'all' ? 'h-64 md:h-96 lg:h-[32rem]' : 'h-44 md:h-56 lg:h-64'} overflow-hidden relative`}>
                  {isKeyTitle && (
                    <div className="absolute top-4 left-4 z-20 bg-[#03E883] text-[#0a0a0a] font-black text-[8px] px-3 py-1 rounded-full uppercase tracking-widest shadow-[0_5px_15px_rgba(3,232,131,0.3)] pointer-events-none">
                      Highlighted Project
                    </div>
                  )}
                  {isVideoUrl(project.imageUrl) ? (
                    <video 
                      src={project.imageUrl} 
                      autoPlay 
                      muted 
                      loop
                      playsInline 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
                    />
                  ) : (
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none" 
                    />
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center pointer-events-none">
                     <span className="bg-white text-black px-5 py-2 rounded-full font-bold text-[9px] uppercase tracking-widest shadow-xl">Details</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h4 className="text-base font-bold text-white group-hover:text-[#E80368] transition-colors">{project.title}</h4>
                      <p className="text-[8px] text-[#E80368] font-bold uppercase tracking-widest mt-0.5">{project.category.split(',')[0]}</p>
                    </div>
                    {project.metrics && project.metrics.length > 0 && (
                       <span className="text-[8px] font-bold text-white/40 border border-white/10 px-2 py-0.5 rounded uppercase">
                         {project.metrics[0]}
                       </span>
                    )}
                  </div>
                  
                  <p className="text-[11px] text-white/50 mb-4 line-clamp-2 leading-relaxed">{project.description}</p>
                  
                  {/* Solitaire Specific Stats on Grid Card */}
                  {project.id === 'candy-world-sol' && filter === 'all' && (
                    <SolitaireMetrics isGrid={true} />
                  )}

                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {displayTags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[8px] px-2 py-1 rounded uppercase font-bold transition-all bg-white/5 text-white/30 border border-transparent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedProject && <ModalPortal project={selectedProject} />}
    </section>
  );
};

export default Projects;