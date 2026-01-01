import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'Profile', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' }
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-[#0a0a0a]/95 backdrop-blur-md py-4 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a 
            href="#home" 
            className="text-2xl font-bold flex items-center gap-2 group uppercase" 
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <span className="text-white transition-colors">Deepak</span>
            <span className="text-white group-hover:text-[#E80368] transition-colors">Nelson</span>
          </a>
          
          <div className="hidden lg:flex gap-8 items-center text-sm font-medium">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={`#${item.id}`} 
                onClick={(e) => scrollToSection(e, item.id)}
                className="text-white/80 hover:text-[#E80368] transition-colors relative group font-bold uppercase tracking-wider text-[11px]"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#E80368] transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/Resume_DeepakNelson_2025.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2 bg-[#E80368] hover:bg-[#ff006e] rounded-lg text-white font-black text-xs uppercase tracking-widest transition-all shadow-[0_0_20px_rgba(232,3,104,0.3)]"
            >
              Download CV
            </a>
          </div>

          <button 
            className="lg:hidden text-white text-2xl w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10"
            onClick={toggleMobileMenu}
            aria-label="Toggle Menu"
          >
            <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : 'rotate-0'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Speed increased from duration-500 to duration-250 */}
      <div className={`fixed inset-0 z-[90] lg:hidden transition-all duration-250 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/98 backdrop-blur-2xl"></div>
        <div className="relative h-full flex flex-col items-center justify-center gap-8 p-6">
          {navItems.map((item, idx) => (
            <a 
              key={item.label} 
              href={`#${item.id}`} 
              onClick={(e) => scrollToSection(e, item.id)}
              className={`text-2xl font-black text-white hover:text-[#E80368] transition-all transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${idx * 40}ms` }}
            >
              {item.label.toUpperCase()}
            </a>
          ))}
          <a 
            href="https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/Resume_DeepakNelson_2025.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-4 px-10 py-4 bg-[#E80368] rounded-full text-white font-black text-sm uppercase tracking-[0.2em] shadow-2xl transition-all transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
            style={{ transitionDelay: `${navItems.length * 40}ms` }}
          >
            Download CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;