import React from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  Building2, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { experienceList } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            Work History
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Professional{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Real-world industry experience designing, building, and deploying production-ready full-stack web applications.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experienceList.map((exp, index) => (
            <div
              key={index}
              className="relative pl-6 sm:pl-10 before:absolute before:left-0 sm:before:left-3 before:top-3 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 before:via-purple-500 before:to-transparent"
            >
              {/* Timeline Pin Indicator */}
              <div className="absolute left-[-5px] sm:left-[5px] top-3 w-5 h-5 rounded-full bg-slate-900 border-2 border-indigo-400 flex items-center justify-center shadow-lg shadow-indigo-500/40">
                <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
              </div>

              {/* Experience Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-xl hover:border-indigo-500/40">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-800">
                  <div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-mono font-medium mb-2">
                      <Clock className="w-3 h-3" />
                      {exp.type} • {exp.duration}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-base font-medium text-indigo-300 flex items-center gap-2 mt-1">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Dates & Location Badge */}
                  <div className="flex flex-col sm:items-end gap-1.5 text-xs text-slate-400 font-mono">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900/90 border border-slate-800 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1 text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Key Overview */}
                <p className="mt-5 text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                  {exp.description}
                </p>

                {/* Key Responsibilities */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-xs uppercase font-mono tracking-wider text-slate-400 font-semibold">
                    Key Deliverables & Responsibilities:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Used Badges */}
                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                    Technologies & Tools Deployed:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-medium bg-slate-900/80 text-indigo-300 border border-slate-800 hover:border-indigo-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

