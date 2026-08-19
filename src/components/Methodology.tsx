import React from 'react';
import { METHOD_STAGES } from '../data/siteData';
import {
  Search,
  Activity,
  Layers,
  Code,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  GitBranch,
} from 'lucide-react';

interface MethodologyProps {
  darkMode: boolean;
}

export const Methodology: React.FC<MethodologyProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-pink-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'Code':
        return <Code className="w-5 h-5 text-emerald-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section
      id="method"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0f172a]/70' : 'bg-slate-50/75'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3.5">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Structured Consulting Framework</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            The Aura <span className="text-[#6A4FD9]">Intelligence Method</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] mx-auto mt-4 rounded-full" />

          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            A disciplined, 6-stage engineering and consulting lifecycle designed to eliminate technical risk,
            guarantee user adoption, and maximize your return on investment.
          </p>
        </div>

        {/* 6-Stage Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {METHOD_STAGES.map((stage) => (
            <div
              key={stage.step}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group ${
                darkMode
                  ? 'bg-[#162033]/90 border-slate-800 hover:border-purple-500/40'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              {/* Subtle Step Watermark */}
              <span className={`absolute -right-2 -top-4 text-7xl font-mono font-extrabold select-none opacity-5 transition-opacity group-hover:opacity-10 ${
                darkMode ? 'text-cyan-400' : 'text-purple-600'
              }`}>
                {stage.step}
              </span>

              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      STEP {stage.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-800/40 border border-slate-700/60">
                      {getIcon(stage.icon)}
                    </div>
                  </div>
                </div>

                <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider block mb-1">
                  {stage.subtitle}
                </span>

                <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {stage.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {stage.description}
                </p>
              </div>

              {/* Deliverables */}
              <div className={`pt-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                  Stage Deliverables:
                </span>
                <div className="space-y-1.5">
                  {stage.deliverables.map((deliv, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Governance Assurance Callout */}
        <div className={`mt-12 rounded-2xl p-6 border flex flex-col md:flex-row items-center justify-between gap-6 ${
          darkMode ? 'bg-[#162033]/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Continuous Safeguards & Human-in-the-Loop Governance
              </h4>
              <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                Every automated pipeline includes confidence scoring thresholds and manual exception routing so your team retains final authority.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="shrink-0 px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] hover:opacity-95 transition-all shadow-md"
          >
            Schedule Discovery Consultation
          </a>
        </div>
      </div>
    </section>
  );
};
