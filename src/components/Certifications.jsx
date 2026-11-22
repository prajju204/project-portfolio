import React from 'react';
import { 
  Award, 
  Sparkles, 
  CheckCircle2, 
  BadgeCheck, 
  ExternalLink 
} from 'lucide-react';
import { certificationsList } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <BadgeCheck className="w-3.5 h-3.5" />
            Verified Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Licenses &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Professional certifications in computational Python, artificial intelligence workflows, and financial examination standards.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificationsList.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-6 sm:p-7 border border-slate-800 hover:border-indigo-500/40 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-slate-900 to-slate-800 border border-slate-700/80 text-indigo-400 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {index === 0 && <Award className="w-6 h-6 text-blue-400" />}
                    {index === 1 && <Sparkles className="w-6 h-6 text-purple-400" />}
                    {index === 2 && <CheckCircle2 className="w-6 h-6 text-emerald-400" />}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400">
                    {cert.category}
                  </span>
                </div>

                {/* Certification Title */}
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                  {cert.title}
                </h3>

                {/* Issuer */}
                <div className="text-xs font-semibold text-indigo-400 mb-4">
                  Issued by: {cert.issuer}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Status Badge */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <BadgeCheck className="w-4 h-4" />
                  Verified Credential
                </span>
                <span className="font-mono text-slate-400 text-[11px]">
                  {cert.status || 'Completed'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

