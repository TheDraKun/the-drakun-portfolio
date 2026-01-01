import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';

const App: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formState.name.trim()) {
      newErrors.name = 'Name is required.';
      isValid = false;
    }

    if (!formState.email.trim()) {
      newErrors.email = 'Email is required.';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email address.';
      isValid = false;
    }

    if (!formState.message.trim()) {
      newErrors.message = 'Message cannot be empty.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setSubmitStatus('submitting');
    
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwC--wSJGrTtTU3Wzmd1ef1zd9KuunKf1NhGU7ShnoeMQx9000K0Esm_u_3l7S-lI-nRQ/exec';

    const formData = new FormData();
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('subject', formState.subject);
    formData.append('message', formState.message);

    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error("Submission error:", error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderFormContent = () => {
    switch (submitStatus) {
      case 'success':
        return (
          <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-[#03E883]/10 text-[#03E883] rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(3,232,131,0.2)]">
              <i className="fas fa-check"></i>
            </div>
            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Message Sent!</h3>
            <p className="text-white/50 text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="mt-8 text-[#E80368] font-black uppercase text-[10px] tracking-widest hover:underline"
            >
              Send Another Message
            </button>
          </div>
        );
      case 'error':
        return (
           <div className="h-[400px] flex flex-col items-center justify-center text-center animate-in zoom-in duration-500">
            <div className="w-20 h-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center text-4xl mb-6 shadow-[0_0_30px_rgba(239,68,68,0.2)]">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">Submission Failed</h3>
            <p className="text-white/50 text-sm max-w-xs">Something went wrong. Please try again or contact me directly via email.</p>
            <button
              onClick={() => setSubmitStatus('idle')}
              className="mt-8 text-[#E80368] font-black uppercase text-[10px] tracking-widest hover:underline"
            >
              Try Again
            </button>
          </div>
        );
      default: // 'idle' or 'submitting'
        return (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">Your Name</label>
                <input
                  name="name"
                  value={formState.name}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Your Name"
                  className={`w-full px-6 py-4 bg-white/[0.03] border rounded-2xl outline-none transition-all text-white placeholder:text-white/10 ${errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#E80368] focus:bg-white/[0.05]'}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                 {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1 ml-1 animate-in fade-in duration-300">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">Email Address</label>
                <input
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="name@domain.com"
                  className={`w-full px-6 py-4 bg-white/[0.03] border rounded-2xl outline-none transition-all text-white placeholder:text-white/10 ${errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#E80368] focus:bg-white/[0.05]'}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1 ml-1 animate-in fade-in duration-300">{errors.email}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">Subject</label>
              <input
                name="subject"
                value={formState.subject}
                onChange={handleInputChange}
                type="text"
                placeholder="Game Development Inquiry"
                className="w-full px-6 py-4 bg-white/[0.03] border border-white/5 rounded-2xl focus:border-[#E80368] focus:bg-white/[0.05] outline-none transition-all text-white placeholder:text-white/10"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black text-white/30 uppercase tracking-widest ml-1">Your Message</label>
              <textarea
                name="message"
                value={formState.message}
                onChange={handleInputChange}
                placeholder="How can I help you today?"
                rows={5}
                className={`w-full px-6 py-4 bg-white/[0.03] border rounded-2xl outline-none transition-all text-white placeholder:text-white/10 resize-none ${errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#E80368] focus:bg-white/[0.05]'}`}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              ></textarea>
              {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1 ml-1 animate-in fade-in duration-300">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="group relative w-full h-16 bg-[#E80368] hover:bg-[#ff006e] rounded-2xl font-black text-white text-xs uppercase tracking-[0.3em] shadow-[0_15px_40px_rgba(232,3,104,0.3)] transition-all overflow-hidden flex items-center justify-center disabled:opacity-50"
            >
              {submitStatus === 'submitting' ? (
                <i className="fas fa-circle-notch fa-spin text-lg"></i>
              ) : (
                <>
                  <span className="relative z-10">Send Message</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </>
              )}
            </button>
          </form>
        );
    }
  };


  return (
    <div className="min-h-screen selection:bg-[#E80368]/30 bg-[#0a0a0a] relative isolate">
      {/* Background Image Overlay - Reduced opacity to 20% */}
      <div 
        className="fixed inset-0 z-[-1] opacity-20 pointer-events-none"
        style={{
          backgroundImage: "url('https://raw.githubusercontent.com/TheDraKun/the-drakun-portfolio/main/images/bg2.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed'
        }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        
        {/* Contact Section - Added dark semi-transparent bg */}
        <section id="contact" className="relative py-32 bg-[#0a0a0a]/80 backdrop-blur-sm scroll-mt-24 overflow-hidden">
          {/* Background Decorative Elements */}
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#E80368]/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-[#03E883]/5 blur-[120px] rounded-full pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold relative inline-block text-white">
                Contact
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#E80368] rounded-full" />
              </h2>
              <p className="text-white/60 mt-6 uppercase text-[10px] tracking-[0.3em] font-bold">Open to collaborations and creative ideas</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Contact Info Cards */}
              <div className="lg:col-span-5 space-y-6">
                {[
                  { 
                    icon: 'fas fa-map-marker-alt', 
                    title: 'Location', 
                    desc: 'Bengaluru, India',
                    link: null 
                  },
                  { 
                    icon: 'fas fa-envelope', 
                    title: 'Email Address', 
                    desc: 'deepaknelson.dev@gmail.com',
                    link: 'mailto:deepaknelson.dev@gmail.com'
                  },
                  { 
                    icon: 'fas fa-phone', 
                    title: 'Phone Number', 
                    desc: '+91 9108731706',
                    link: 'tel:+919108731706'
                  }
                ].map((item, i) => {
                  const isLink = !!item.link;
                  const Wrapper = isLink ? 'a' : 'div';
                  
                  return (
                    <Wrapper 
                      key={i} 
                      {...(isLink ? {
                        href: item.link as string,
                        target: "_blank",
                        rel: "noopener noreferrer"
                      } : {})}
                      className={`flex items-center gap-6 p-6 bg-[#0d0d0d]/40 border border-white/5 rounded-2xl ${isLink ? 'hover:border-[#E80368]/40 hover:bg-white/[0.04] cursor-pointer transition-all' : 'cursor-default'} group backdrop-blur-md`}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-[#E80368] to-[#880E4F] flex items-center justify-center rounded-2xl text-white text-xl shadow-[0_10px_20px_rgba(232,3,104,0.2)] group-hover:scale-110 transition-transform">
                        <i className={item.icon}></i>
                      </div>
                      <div>
                        <h4 className="text-[10px] font-black text-[#E80368] uppercase tracking-[0.2em] mb-1">{item.title}</h4>
                        <p className={`text-white/80 font-bold ${isLink ? 'group-hover:text-white' : ''} transition-colors`}>{item.desc}</p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Functional Contact Form */}
              <div className="lg:col-span-7">
                <div className="relative p-1 bg-gradient-to-br from-white/10 to-transparent rounded-[2.5rem]">
                  <div className="bg-[#0d0d0d]/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.2rem] shadow-2xl border border-white/5">
                    {renderFormContent()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-16 bg-[#0a0a0a]/60 backdrop-blur-md border-t border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <a
            href="#home"
            onClick={scrollToTop}
            className="text-xl font-bold flex items-center gap-2 group uppercase"
          >
            <span className="text-white transition-colors">Deepak</span>
            <span className="text-white group-hover:text-[#E80368] transition-colors">Nelson</span>
          </a>
          <p className="text-white/30 text-[10px] font-black uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Designed by <a href="https://www.linkedin.com/in/thedrakun/" className="text-white/60 hover:text-[#E80368] transition-colors">The Drakun</a>
          </p>
          <div className="flex gap-6">
            <a href="https://github.com/DeepakNelsonX" className="text-white/40 hover:text-white transition-colors"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/thedrakun" className="text-white/40 hover:text-white transition-colors"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;