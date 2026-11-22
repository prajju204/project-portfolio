import React from 'react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  CheckCircle2 
} from 'lucide-react';
import { educationList } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Academic Foundation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Education &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Academics
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Strong academic credentials in Master's and Bachelor's computer applications curricula with consistent technical achievement.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 hover:border-indigo-500/40 flex flex-col justify-between transition-all duration-300"
            >
              <div>
                {/* Header: Score badge & Period */}
                <div className="flex items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-indigo-500/10 text-indigo-400 border border-indigo-500/30">
                    <Award className="w-3.5 h-3.5 text-indigo-400" />
                    {edu.score}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    {edu.period}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {edu.degree}
                </h3>

                {/* Institution & Location */}
                <div className="text-sm font-medium text-indigo-300 mb-4 flex flex-wrap items-center gap-x-2 gap-y-1">
                  <span>{edu.institution}</span>
                  <span className="text-slate-600">•</span>
                  <span className="inline-flex items-center gap-1 text-slate-400 text-xs">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    {edu.location}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {edu.description}
                </p>
              </div>

              {/* Highlight footer */}
              <div className="pt-4 border-t border-slate-800/60 flex items-center gap-2 text-xs text-indigo-400 font-medium">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>{edu.highlight}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

