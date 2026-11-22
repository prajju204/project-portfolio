import React from 'react';
import { 
  User, 
  MapPin, 
  Calendar, 
  Languages, 
  Trophy, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  Compass, 
  Flame, 
  CheckCircle2, 
  Sparkles,
  Check
} from 'lucide-react';
import { personalDetails, softSkills, achievementsList } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            Discover My Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A driven MCA graduate and software engineer enthusiastic about crafting high-performance, responsive web applications and scalable software solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Detailed Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500"></span>
                Software Developer & MCA Graduate (2026)
              </h3>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am <strong className="text-white font-semibold">Prajwal</strong>, an MCA graduate (2026) from <span className="text-indigo-400 font-medium">Poornaprajna Institute of Management</span> with a strong foundation in computer science and modern software engineering practices.
                </p>
                <p>
                  I have completed a hands-on <strong className="text-white font-semibold">5-month Software Development Internship</strong> at <span className="text-blue-400 font-medium">MCWARE Technologies LLP (MIhub)</span> (06 May 2026 – 07 Oct 2026), where I actively worked on <strong className="text-white">Luxe Groom</strong> — a Salon & Clinical Treatment Appointment Management System. During this tenure, I engineered responsive user interfaces using <span className="text-indigo-300 font-mono">React.js</span> and <span className="text-cyan-300 font-mono">Tailwind CSS</span>, integrated real-time booking alerts with <span className="text-emerald-300 font-mono">MongoDB & Socket.io</span>, and leveraged modern AI coding environments including <span className="text-purple-300 font-mono">Google Antigravity</span> and <span className="text-indigo-300 font-mono">Claude AI</span> to write clean, optimized code.
                </p>
                <p>
                  I have a deep passion for <strong className="text-white font-semibold">software development, Java, and modern web technologies</strong>. Having built both full-stack applications with Supabase & Firebase and native Android apps with offline support, I am eager to contribute my technical acumen to an entry-level Software Developer role.
                </p>
              </div>

              {/* Key Highlights Pill Row */}
              <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs text-slate-400">Internship</div>
                  <div className="text-sm font-bold text-white mt-0.5">5 Months (MCWARE)</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-xs text-slate-400">Core Focus</div>
                  <div className="text-sm font-bold text-indigo-400 mt-0.5">Java & Web Tech</div>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800 col-span-2 sm:col-span-1">
                  <div className="text-xs text-slate-400">Status</div>
                  <div className="text-sm font-bold text-emerald-400 mt-0.5">Open for Roles</div>
                </div>
              </div>
            </div>

            {/* Personality Skills */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <HeartHandshake className="w-5 h-5 text-indigo-400" />
                Personality & Professional Strengths
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-4">
                Core behavioral competencies that drive my collaborative work and engineering consistency:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {softSkills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/40 transition-colors"
                  >
                    <div className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center font-bold text-xs">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Personal Details & Achievements */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Personal Details Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60">
              <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                Personal Details
              </h3>

              <div className="space-y-4 text-sm">
                <div className="flex items-start justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-500" />
                    Date of Birth
                  </span>
                  <span className="text-slate-200 font-medium text-right">
                    {personalDetails.dob}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <User className="w-4 h-4 text-slate-500" />
                    Gender
                  </span>
                  <span className="text-slate-200 font-medium text-right">
                    {personalDetails.gender}
                  </span>
                </div>

                <div className="flex items-start justify-between pb-3 border-b border-slate-800">
                  <span className="text-slate-400 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-slate-500" />
                    Location
                  </span>
                  <span className="text-slate-200 font-medium text-right">
                    {personalDetails.location}
                  </span>
                </div>

                <div className="flex items-start justify-between">
                  <span className="text-slate-400 flex items-center gap-2">
                    <Languages className="w-4 h-4 text-slate-500" />
                    Languages Known
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-end max-w-[60%]">
                    {personalDetails.languages.map((lang) => (
                      <span
                        key={lang}
                        className="px-2 py-0.5 rounded-md text-xs font-medium bg-slate-800/90 text-indigo-300 border border-slate-700"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-indigo-950/20">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Trophy className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">
                    Honors & Achievements
                  </h3>
                  <span className="text-xs text-amber-400/90 font-medium">
                    Sports & Athletics Recognition
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 text-sm text-slate-300 leading-relaxed">
                <p className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Achieved various numbers of prizes and awards for participating in competitive Games and Sports during both school & college days.
                  </span>
                </p>
              </div>
            </div>

            {/* Quick Contact Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-900/20 via-indigo-900/20 to-purple-900/20 border border-indigo-500/20 text-xs text-slate-300 flex items-center justify-between">
              <div>
                <div className="font-semibold text-white text-sm">Have a project or open position?</div>
                <div className="text-slate-400 mt-0.5">Let's discuss how I can add value.</div>
              </div>
              <a
                href="#contact"
                className="px-3.5 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors text-xs whitespace-nowrap"
              >
                Get in Touch
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

