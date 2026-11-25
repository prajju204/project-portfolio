import React, { useState, useEffect } from 'react';
import { 
  Download, 
  Send, 
  ArrowRight, 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  Sparkles, 
  Code, 
  Layers, 
  Briefcase, 
  GraduationCap,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { personalDetails } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const [currentTaglineIndex, setCurrentTaglineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTaglineIndex((prev) => (prev + 1) % personalDetails.taglines.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner mb-6 backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-medium text-slate-300">
                {personalDetails.availability}
              </span>
              <span className="text-slate-600">|</span>
              <span className="text-xs text-indigo-400 font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                MCA 2026
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                {personalDetails.name}
              </span>
            </h1>

            {/* Animated Rotating Subtitle */}
            <div className="h-10 sm:h-12 flex items-center mb-5">
              <span className="text-xl sm:text-2xl font-semibold text-slate-300">
                I am a{' '}
              </span>
              <span className="ml-2 font-mono text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent border-b-2 border-indigo-500/50 pb-0.5">
                {personalDetails.taglines[currentTaglineIndex]}
              </span>
            </div>

            {/* Role Header */}
            <div className="text-sm sm:text-base font-medium text-indigo-300/90 mb-4 tracking-wide uppercase font-mono">
              MCA Graduate • Software Developer • Frontend Developer
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed mb-8">
              {personalDetails.summary}
            </p>

            {/* Action Buttons: Download Resume, View Projects, Contact Me */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <button
                onClick={onOpenResume}
                className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                <span>Download Resume</span>
              </button>

              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, 'projects')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-800/40 hover:bg-slate-800/80 border border-slate-700/50 transition-all duration-200"
              >
                <Send className="w-4 h-4 text-indigo-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social Links & Contact Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Connect:
              </span>
              <a
                href={personalDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-blue-950/60 text-slate-300 hover:text-blue-400 border border-slate-800 hover:border-blue-500/40 text-xs font-medium transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={personalDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-600 text-xs font-medium transition-all"
                title="GitHub Profile"
              >
                <Github className="w-3.5 h-3.5 text-slate-200" />
                <span>GitHub</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-60" />
              </a>

              <a
                href={`mailto:${personalDetails.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-indigo-300 border border-slate-800 hover:border-indigo-500/40 text-xs font-medium transition-all"
                title="Direct Email"
              >
                <Mail className="w-3.5 h-3.5 text-indigo-400" />
                <span>{personalDetails.email}</span>
              </a>

              <a
                href={`tel:${personalDetails.phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-emerald-300 border border-slate-800 hover:border-emerald-500/40 text-xs font-medium transition-all"
                title="Direct Phone"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{personalDetails.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Profile Card / Avatar Placeholder */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-40 blur-xl"></div>
              
              {/* Card Container */}
              <div className="relative glass-card rounded-3xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl">
                
                {/* Photo Placeholder Area */}
                <div className="relative mx-auto w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-indigo-500/30 shadow-inner flex flex-col items-center justify-center group mb-6">
                  
                  {/* Subtle code pattern overlay */}
                  <div className="absolute inset-0 opacity-15 font-mono text-[9px] text-indigo-300 p-2 select-none overflow-hidden leading-tight pointer-events-none">
                    <code>
                      {`const dev = {
  name: "Prajwal",
  degree: "MCA (2026)",
  skills: ["React", "Java", "Python"],
  status: "Ready to build"
};`}
                    </code>
                  </div>

                  {/* Avatar Icon / Illustration */}
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600/30 via-indigo-600/40 to-purple-600/30 flex items-center justify-center border border-indigo-400/40 shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300">
                      P
                    </span>
                  </div>

                  <span className="mt-3 text-xs font-mono text-indigo-300 font-medium">
                    Prajwal
                  </span>
                  <span className="text-[11px] text-slate-400">
                    MCA 2026 • Developer
                  </span>

                  {/* Replace Photo helper badge */}
                  <div className="absolute bottom-2 inset-x-2 py-1 px-2 rounded-md bg-slate-900/90 border border-slate-700/70 text-[10px] text-slate-400 text-center backdrop-blur-sm">
                    Profile Photo Placeholder
                  </div>
                </div>

                {/* Quick Info Grid */}
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="flex items-center gap-2 text-slate-400">
                      <GraduationCap className="w-4 h-4 text-indigo-400" />
                      Education
                    </span>
                    <span className="text-slate-200 font-semibold font-sans">
                      MCA (7.47 CGPA)
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="flex items-center gap-2 text-slate-400">
                      <Briefcase className="w-4 h-4 text-blue-400" />
                      Internship
                    </span>
                    <span className="text-slate-200 font-semibold font-sans">
                      MCWARE (6 Mo)
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="flex items-center gap-2 text-slate-400">
                      <MapPin className="w-4 h-4 text-purple-400" />
                      Location
                    </span>
                    <span className="text-slate-200 font-semibold font-sans">
                      Udupi, Karnataka
                    </span>
                  </div>
                </div>

                {/* Floating Micro-Badges */}
                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20">
                    ⚛️ React.js
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    ☕ Java
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    ⚡ Supabase
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                    🤖 Antigravity AI
                  </span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

