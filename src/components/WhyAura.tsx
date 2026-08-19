import React from 'react';
import { DIFFERENTIATORS } from '../data/siteData';
import {
  Briefcase,
  Sliders,
  RefreshCw,
  ShieldCheck,
  Lock,
  MapPin,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

interface WhyAuraProps {
  darkMode: boolean;
}

export const WhyAura: React.FC<WhyAuraProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-cyan-400" />;
      case 'Sliders':
        return <Sliders className="w-6 h-6 text-purple-400" />;
      case 'RefreshCw':
        return <RefreshCw className="w-6 h-6 text-pink-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      case 'Lock':
        return <Lock className="w-6 h-6 text-amber-400" />;
      case 'MapPin':
      default:
        return <MapPin className="w-6 h-6 text-sky-400" />;
    }
  };

  return (
    <section
      id="why-aura"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/80' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Strategic Value Proposition</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Why Partner with <span className="text-[#16C5D8]">Aura Tech Intelligence?</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />

          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We bridge the gap between academic AI theory and operational commercial execution.
            Here is what makes our consulting and engineering approach distinct.
          </p>
        </div>

        {/* 6 Differentiator Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {DIFFERENTIATORS.map((diff) => (
            <div
              key={diff.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                darkMode
                  ? 'bg-[#162033]/90 border-slate-800 hover:border-cyan-500/40'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
                    {getIcon(diff.icon)}
                  </div>
                  <span
                    className={`text-xs font-mono font-medium px-2.5 py-1 rounded-full ${
                      darkMode
                        ? 'bg-purple-950/40 text-purple-300 border border-purple-800/40'
                        : 'bg-purple-50 text-purple-700 border border-purple-200'
                    }`}
                  >
                    {diff.badge}
                  </span>
                </div>

                <h3 className={`text-lg font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {diff.title}
                </h3>

                <p className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {diff.description}
                </p>
              </div>

              <div className={`pt-4 mt-6 border-t flex items-center gap-2 text-xs font-semibold ${
                darkMode ? 'border-slate-800 text-cyan-400' : 'border-slate-100 text-purple-700'
              }`}>
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>Applied in project work</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
