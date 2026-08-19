import React from 'react';
import { BUSINESS_PROBLEMS } from '../data/siteData';
import {
  FileSpreadsheet,
  Headset,
  GitBranch,
  Brain,
  Users,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface BusinessProblemsProps {
  darkMode: boolean;
}

export const BusinessProblems: React.FC<BusinessProblemsProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-amber-400" />;
      case 'Headset':
        return <Headset className="w-5 h-5 text-cyan-400" />;
      case 'GitBranch':
        return <GitBranch className="w-5 h-5 text-pink-400" />;
      case 'Brain':
        return <Brain className="w-5 h-5 text-purple-400" />;
      case 'Users':
        return <Users className="w-5 h-5 text-emerald-400" />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section
      id="problems"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0f172a]/70' : 'bg-slate-50/75'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-rose-500/10 text-rose-400 border border-rose-500/20 mb-3.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Operational Friction Points</span>
          </div>
          
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Where Is Your Business <span className="bg-gradient-to-r from-rose-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">Losing Time?</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-rose-500 via-amber-400 to-cyan-400 mx-auto mt-4 rounded-full" />
          
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Most businesses do not have a growth problem — they have an operational friction problem.
            Repetitive cognitive tasks and disconnected tools drain hundreds of productive hours each month.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {BUSINESS_PROBLEMS.map((problem) => (
            <div
              key={problem.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? 'bg-[#162033]/85 border-slate-800 hover:border-cyan-500/40 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-cyan-400 shadow-sm'
              }`}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-800/40 border border-slate-700/60">
                    {getIcon(problem.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-rose-500/10 text-rose-400 border border-rose-500/20">
                    Bottleneck
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {problem.title}
                </h3>

                {/* Symptom */}
                <div className="mb-3.5">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    The Reality:
                  </span>
                  <p className={`text-xs sm:text-sm leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                    {problem.symptom}
                  </p>
                </div>

                {/* Consequence */}
                <div className={`p-3 rounded-xl mb-5 text-xs ${
                  darkMode ? 'bg-rose-950/20 border border-rose-900/30 text-rose-300' : 'bg-rose-50 border border-rose-200 text-rose-800'
                }`}>
                  <strong className="font-semibold">Business Cost:</strong> {problem.consequence}
                </div>
              </div>

              {/* Solution Connect */}
              <div className={`pt-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-100'}`}>
                <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-semibold mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aura Intelligent Solution:</span>
                </div>
                <p className={`text-xs leading-relaxed mb-3 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                  {problem.auraSolution}
                </p>
                <a
                  href="#solutions"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <span>See {problem.solutionTag}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Call to Action */}
        <div className={`mt-12 rounded-2xl p-6 sm:p-8 border flex flex-col md:flex-row items-center justify-between gap-6 ${
          darkMode
            ? 'bg-gradient-to-r from-cyan-950/30 via-[#162033] to-purple-950/30 border-cyan-500/30 shadow-lg'
            : 'bg-gradient-to-r from-cyan-50 via-white to-purple-50 border-cyan-200 shadow-md'
        }`}>
          <div className="space-y-1 text-center md:text-left">
            <h4 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Want to calculate your company's exact operational friction cost?
            </h4>
            <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              Take our 2-minute diagnostic tool to identify high-ROI automation opportunities for your business.
            </p>
          </div>

          <a
            href="#assessment"
            className="shrink-0 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 to-teal-300 hover:from-cyan-300 hover:to-teal-200 transition-all shadow-md shadow-cyan-500/20 hover:scale-105"
          >
            Take AI Opportunity Assessment →
          </a>
        </div>
      </div>
    </section>
  );
};
