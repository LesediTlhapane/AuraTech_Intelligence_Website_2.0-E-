import React, { useState } from 'react';
import { SOLUTIONS, SolutionCategory } from '../data/siteData';
import {
  Bot,
  GitBranch,
  Brain,
  Search,
  RefreshCw,
  Globe,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Sliders,
} from 'lucide-react';

interface SolutionsProps {
  darkMode: boolean;
}

export const Solutions: React.FC<SolutionsProps> = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-6 h-6 text-cyan-400" />;
      case 'GitBranch':
        return <GitBranch className="w-6 h-6 text-pink-400" />;
      case 'Brain':
        return <Brain className="w-6 h-6 text-purple-400" />;
      case 'Search':
        return <Search className="w-6 h-6 text-amber-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-emerald-400" />;
      case 'Globe':
      default:
        return <Globe className="w-6 h-6 text-sky-400" />;
    }
  };

  const filteredSolutions = activeCategory === 'all'
    ? SOLUTIONS
    : SOLUTIONS.filter((s) => s.id === activeCategory);

  return (
    <section
      id="solutions"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/80' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3.5">
            <Sliders className="w-3.5 h-3.5" />
            <span>Consulting & Engineering Capabilities</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            What We <span className="text-[#16C5D8]">Build & Deliver</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />

          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            From focused operational bots to full-scale multi-system automation architectures,
            we engineer robust, custom AI systems tailored to your specific organizational workflows.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeCategory === 'all'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : darkMode
                ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
            }`}
          >
            All Solutions
          </button>
          {SOLUTIONS.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveCategory(item.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeCategory === item.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : darkMode
                  ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredSolutions.map((solution) => (
            <div
              key={solution.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                darkMode
                  ? 'bg-[#162033]/90 border-slate-800 hover:border-cyan-500/40'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div>
                {/* Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700">
                    {getIcon(solution.icon)}
                  </div>
                  <span
                    className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full ${
                      darkMode
                        ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-800/40'
                        : 'bg-cyan-50 text-cyan-800 border border-cyan-200'
                    }`}
                  >
                    {solution.badge}
                  </span>
                </div>

                <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider block mb-1">
                  {solution.subtitle}
                </span>

                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {solution.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {solution.description}
                </p>

                {/* Key Capabilities */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Core Capabilities:
                  </span>
                  {solution.keyCapabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Common Use Cases Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {solution.useCases.map((useCase) => (
                    <span
                      key={useCase}
                      className={`text-[11px] font-medium px-2 py-0.5 rounded-md ${
                        darkMode
                          ? 'bg-slate-900/90 text-slate-400 border border-slate-800'
                          : 'bg-slate-100 text-slate-600 border border-slate-200'
                      }`}
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer with Price & Scoping Link */}
              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <div>
                  <span className="text-[11px] block text-slate-500">Investment</span>
                  <span className="text-sm font-bold text-cyan-400">{solution.startingPrice}</span>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors group"
                >
                  <span>Scope Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
