import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Layers, 
  Smartphone, 
  Utensils, 
  CalendarCheck, 
  Check, 
  X,
  Code
} from 'lucide-react';
import { projectsList } from '../data/portfolioData';

export default function Projects() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  const getProjectIcon = (id) => {
    switch (id) {
      case 'foodie':
        return <Utensils className="w-6 h-6 text-orange-400" />;
      case 'quiz-astra':
        return <Smartphone className="w-6 h-6 text-emerald-400" />;
      case 'luxe-groom':
        return <CalendarCheck className="w-6 h-6 text-purple-400" />;
      default:
        return <Code className="w-6 h-6 text-indigo-400" />;
    }
  };

  const getGradientHeader = (id) => {
    switch (id) {
      case 'foodie':
        return 'from-amber-600/30 via-orange-600/20 to-slate-900';
      case 'quiz-astra':
        return 'from-emerald-600/30 via-teal-600/20 to-slate-900';
      case 'luxe-groom':
        return 'from-purple-600/30 via-indigo-600/20 to-slate-900';
      default:
        return 'from-blue-600/30 via-indigo-600/20 to-slate-900';
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            Featured Work
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Key{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Showcase of applications built spanning modern React single-page apps, native Android development, real-time Socket.io architectures, and BaaS platforms.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-2xl border border-slate-800 hover:border-indigo-500/50 flex flex-col justify-between overflow-hidden group transition-all duration-300"
            >
              {/* Card Visual Header Banner */}
              <div className={`relative h-48 bg-gradient-to-b ${getGradientHeader(project.id)} p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden`}>
                
                {/* Subtle code pattern behind */}
                <div className="absolute inset-0 opacity-10 font-mono text-[10px] p-4 select-none pointer-events-none text-slate-300">
                  {`// ${project.title}
interface Config {
  stack: '${project.tags[0]}';
  auth: true;
  realtime: true;
}`}
                </div>

                {/* Top Badges */}
                <div className="relative flex items-center justify-between z-10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-slate-900/90 text-indigo-300 border border-slate-700/80">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {project.category}
                  </span>
                </div>

                {/* Main Icon & Title Preview */}
                <div className="relative flex items-center gap-3 z-10 mt-auto">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/70 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.id)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {project.summary}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-2 mb-6">
                    {project.highlights.slice(0, 2).map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-900 text-slate-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 transition-all"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>

                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-950/50 hover:bg-indigo-600 border border-indigo-500/30 transition-all flex-1 justify-center"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card rounded-2xl border border-slate-700/80 max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                {getProjectIcon(activeModalProject.id)}
              </div>
              <div>
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
                  {activeModalProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {activeModalProject.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed mb-6">
              {activeModalProject.summary}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Core Architectural Details & Highlights:
              </h4>
              <div className="space-y-2.5">
                {activeModalProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-900 text-indigo-300 border border-indigo-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="pt-6 border-t border-slate-800 flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-800"
              >
                Close
              </button>
              <a
                href={activeModalProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md"
              >
                <Github className="w-4 h-4" />
                View Repository
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

