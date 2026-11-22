import React, { useState } from 'react';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Sparkles, 
  Terminal, 
  Layers, 
  CheckCircle2 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Layout: Layout,
  Server: Server,
  Database: Database,
  Sparkles: Sparkles,
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...skillCategories.map(c => c.category)];

  const filteredCategories = selectedCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Terminal className="w-3.5 h-3.5" />
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Technical{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            A versatile toolkit spanning modern frontend frameworks, backend integrations, real-time protocols, databases, and cutting-edge AI development tools.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105'
                  : 'bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <div
                key={cat.category}
                className="glass-card rounded-2xl p-6 border border-slate-800 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-5 pb-3 border-b border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-bold text-white tracking-tight">
                        {cat.category}
                      </h3>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                      {cat.skills.length} skills
                    </span>
                  </div>

                  {/* Skills List with Progress */}
                  <div className="space-y-4">
                    {cat.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-slate-200">
                            {skill.name}
                          </span>
                          <div className="flex items-center gap-2">
                            {skill.badge && (
                              <span className="text-[10px] text-indigo-400 font-mono bg-indigo-950/60 px-1.5 py-0.5 rounded border border-indigo-500/30">
                                {skill.badge}
                              </span>
                            )}
                            <span className="text-slate-400 font-mono">
                              {skill.level}%
                            </span>
                          </div>
                        </div>

                        {/* Progress Bar Container */}
                        <div className="w-full h-2 rounded-full bg-slate-900 border border-slate-800/80 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-1000 ease-out"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subfooter */}
                <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Proficiency
                  </span>
                  <span className="font-mono text-slate-400">Resume Validated</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* AI & Developer Workflow Highlight Banner */}
        <div className="mt-12 glass-card rounded-2xl p-6 sm:p-8 border border-indigo-500/30 bg-gradient-to-r from-slate-900/90 via-indigo-950/30 to-slate-900/90">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-purple-400">
                <Sparkles className="w-4 h-4" />
                Modern AI-Augmented Developer
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Accelerating Delivery with Next-Gen AI Tooling
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Proficient in utilizing <strong className="text-white">Google Antigravity</strong>, <strong className="text-white">Claude AI</strong>, and <strong className="text-white">GitHub Copilot</strong> for rapid code architecture, rigorous unit testing, complex debugging, and continuous performance optimization.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-wrap md:flex-col gap-2 justify-center">
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200">
                <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                <span>Google Antigravity</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200">
                <span className="w-2 h-2 rounded-full bg-purple-400"></span>
                <span>Claude AI</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>GitHub Copilot</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

