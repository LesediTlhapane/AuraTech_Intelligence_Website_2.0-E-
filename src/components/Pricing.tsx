import React from 'react';
import { ENGAGEMENT_MODELS } from '../data/siteData';
import { CheckCircle2, Star, Sparkles, Clock, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  darkMode: boolean;
}

export const Pricing: React.FC<PricingProps> = ({ darkMode }) => {
  return (
    <section
      id="pricing"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/80' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Commercial Models</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Flexible <span className="text-[#6A4FD9]">Engagement Models</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] mx-auto mt-4 rounded-full" />

          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Choose the engagement framework that fits your organization — from initial low-risk scoping audits
            and targeted single-agent builds to complete enterprise transformations and monthly retainers.
          </p>
        </div>

        {/* 4 Engagement Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch mb-12">
          {ENGAGEMENT_MODELS.map((model) => (
            <div
              key={model.id}
              className={`rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                model.popular
                  ? darkMode
                    ? 'bg-gradient-to-b from-[#162033] to-[#0f172a] border-2 border-[#6A4FD9] shadow-2xl shadow-purple-950/40 ring-1 ring-purple-500/50 -translate-y-2'
                    : 'bg-white border-2 border-[#6A4FD9] shadow-2xl shadow-purple-100 ring-1 ring-purple-400/40 -translate-y-2'
                  : darkMode
                  ? 'bg-[#162033]/85 border border-slate-800 hover:border-slate-700 shadow-sm'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {model.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-gradient-to-r from-[#6A4FD9] to-cyan-500 text-white text-[10px] font-extrabold shadow-md flex items-center gap-1 uppercase tracking-wider">
                  <Star className="w-3 h-3 fill-current" />
                  <span>Most Popular Build</span>
                </div>
              )}

              <div>
                <span className="text-[10px] font-mono font-bold text-cyan-400 tracking-wider block mb-1">
                  {model.tier}
                </span>

                <h3 className={`text-xl font-bold mb-1.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {model.title}
                </h3>

                <p className={`text-xs leading-relaxed mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {model.subtitle}
                </p>

                <div className="mb-4">
                  <span className={`text-2xl sm:text-3xl font-extrabold block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {model.price}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                    <Clock className="w-3.5 h-3.5 text-purple-400" />
                    <span>Timeline: {model.timeline}</span>
                  </div>
                </div>

                <div className={`p-2.5 rounded-xl mb-5 text-[11px] ${
                  darkMode ? 'bg-slate-900/60 text-slate-300 border border-slate-800' : 'bg-slate-50 text-slate-700 border border-slate-200'
                }`}>
                  <strong className="font-semibold text-purple-400">Best for:</strong> {model.idealFor}
                </div>

                <div className={`h-px w-full my-4 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`} />

                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                  Scope & Deliverables:
                </span>
                <ul className="space-y-2.5 mb-6">
                  {model.deliverables.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-auto">
                <a
                  href={model.ctaAction}
                  className={`w-full block text-center py-3 rounded-xl font-bold text-xs transition-all shadow-sm ${
                    model.popular
                      ? 'bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] hover:opacity-95 text-white shadow-purple-500/25'
                      : darkMode
                      ? 'border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10'
                      : 'border border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {model.ctaText} →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Discovery Guarantee Note */}
        <div className={`rounded-2xl p-6 border text-center max-w-3xl mx-auto ${
          darkMode ? 'bg-[#162033]/60 border-slate-800' : 'bg-white border-slate-200 shadow-sm'
        }`}>
          <div className="flex items-center justify-center gap-2 text-cyan-400 font-bold text-xs sm:text-sm mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Audit Fee Credit Policy</span>
          </div>
          <p className={`text-xs sm:text-sm ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            When you commission an initial <strong>AI Scoping & Blueprint (R2,500)</strong>, 100% of the scoping fee is credited directly toward your custom build if you proceed within 30 days.
          </p>
        </div>
      </div>
    </section>
  );
};
