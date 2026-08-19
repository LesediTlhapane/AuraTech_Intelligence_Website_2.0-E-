import React, { useState } from 'react';
import { INDUSTRY_SOLUTIONS, IndustryVertical } from '../data/siteData';
import {
  Stethoscope,
  Users,
  Scale,
  GraduationCap,
  TrendingUp,
  Building2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Briefcase,
} from 'lucide-react';

interface IndustriesProps {
  darkMode: boolean;
}

export const Industries: React.FC<IndustriesProps> = ({ darkMode }) => {
  const [activeTab, setActiveTab] = useState<string>('healthcare');

  const getIcon = (iconName: string, active: boolean) => {
    const colorClass = active ? 'text-cyan-400' : 'text-slate-400';
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className={`w-5 h-5 ${colorClass}`} />;
      case 'Users':
        return <Users className={`w-5 h-5 ${colorClass}`} />;
      case 'Scale':
        return <Scale className={`w-5 h-5 ${colorClass}`} />;
      case 'GraduationCap':
        return <GraduationCap className={`w-5 h-5 ${colorClass}`} />;
      case 'TrendingUp':
        return <TrendingUp className={`w-5 h-5 ${colorClass}`} />;
      case 'Building2':
      default:
        return <Building2 className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  const selectedIndustry = INDUSTRY_SOLUTIONS.find((ind) => ind.id === activeTab) || INDUSTRY_SOLUTIONS[0];

  return (
    <section
      id="industries"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/80' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3.5">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Vertical Domain Expertise</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Tailored for Your <span className="text-[#16C5D8]">Industry</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />

          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            We don't believe in one-size-fits-all AI. Our systems are engineered around the specific compliance,
            workflow, and customer interaction dynamics of your sector.
          </p>
        </div>

        {/* Industry Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {INDUSTRY_SOLUTIONS.map((ind) => {
            const isActive = ind.id === activeTab;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveTab(ind.id)}
                className={`p-4 rounded-2xl border text-center flex flex-col items-center gap-2.5 transition-all duration-200 ${
                  isActive
                    ? darkMode
                      ? 'bg-gradient-to-b from-[#162033] to-cyan-950/30 border-cyan-500/50 shadow-lg shadow-cyan-950/40 ring-1 ring-cyan-500/40 text-white'
                      : 'bg-white border-cyan-400 shadow-lg shadow-cyan-100/50 ring-1 ring-cyan-400/40 text-slate-900'
                    : darkMode
                    ? 'bg-[#162033]/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    : 'bg-white/80 border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                <div className={`p-2 rounded-xl ${isActive ? 'bg-cyan-500/15 border border-cyan-500/30' : 'bg-slate-800/30'}`}>
                  {getIcon(ind.icon, isActive)}
                </div>
                <span className="text-xs font-semibold leading-tight">{ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Detail Panel */}
        <div
          className={`rounded-3xl p-6 sm:p-10 border transition-all duration-300 ${
            darkMode
              ? 'bg-gradient-to-b from-[#162033] to-[#0f172a] border-slate-800 shadow-2xl'
              : 'bg-white border-slate-200 shadow-xl'
          }`}
        >
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 pb-6 border-b border-slate-800/60 mb-8">
            <div className="space-y-1">
              <span className="text-xs text-cyan-400 font-mono font-semibold uppercase tracking-wider">
                Sector Blueprint
              </span>
              <h3 className={`text-2xl sm:text-3xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {selectedIndustry.title}
              </h3>
              <p className={`text-sm sm:text-base font-medium max-w-3xl ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {selectedIndustry.headline}
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20"
            >
              <span>Consult On {selectedIndustry.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Common Bottlenecks */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-rose-950/10 border-rose-900/30' : 'bg-rose-50/50 border-rose-200'
            }`}>
              <div className="flex items-center gap-2 text-rose-400 font-bold text-sm mb-4">
                <AlertCircle className="w-4 h-4" />
                <span>Typical Industry Bottlenecks:</span>
              </div>
              <ul className="space-y-3">
                {selectedIndustry.challenges.map((challenge, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <span className="text-rose-400 font-bold">•</span>
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {challenge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aura Custom Solutions */}
            <div className={`p-6 rounded-2xl border ${
              darkMode ? 'bg-cyan-950/10 border-cyan-900/30' : 'bg-cyan-50/50 border-cyan-200'
            }`}>
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-4">
                <CheckCircle2 className="w-4 h-4" />
                <span>Aura Intelligent Deployments:</span>
              </div>
              <ul className="space-y-3">
                {selectedIndustry.solutions.map((solution, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                      {solution}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verified Case Capabilities Tagging */}
          <div className="pt-4 border-t border-slate-800/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold text-slate-400">Verified System Repositories:</span>
              {selectedIndustry.verifiedCapabilities.map((cap) => (
                <span
                  key={cap}
                  className={`text-xs font-mono font-medium px-3 py-1 rounded-full ${
                    darkMode
                      ? 'bg-purple-950/40 text-purple-300 border border-purple-800/40'
                      : 'bg-purple-50 text-purple-700 border border-purple-200'
                  }`}
                >
                  {cap}
                </span>
              ))}
            </div>

            <a
              href="#case-studies"
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
            >
              <span>View Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
