import React from 'react';
import { PRICING_PLANS } from '../data/siteData';
import { CheckCircle2, Star, Sparkles } from 'lucide-react';

interface PricingProps {
  darkMode: boolean;
}

export const Pricing: React.FC<PricingProps> = ({ darkMode }) => {
  return (
    <section
      id="pricing"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0f172a]/70' : 'bg-slate-50/75'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            Transparent Investment
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
            Choose how you want to partner with us — from initial discovery and prototyping to custom
            builds and ongoing dedicated retainer support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                plan.popular
                  ? darkMode
                    ? 'bg-gradient-to-b from-[#162033] to-[#0f172a] border-2 border-[#6A4FD9] shadow-2xl shadow-purple-950/40 ring-1 ring-purple-500/50 -translate-y-2'
                    : 'bg-white border-2 border-[#6A4FD9] shadow-2xl shadow-purple-100 ring-1 ring-purple-400/40 -translate-y-2'
                  : darkMode
                  ? 'bg-[#162033]/80 border border-slate-800 hover:border-slate-700 shadow-sm'
                  : 'bg-white border border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#6A4FD9] to-cyan-500 text-white text-xs font-bold shadow-md flex items-center gap-1.5 uppercase tracking-wider">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span>Most Popular</span>
                </div>
              )}

              <div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {plan.title}
                </h3>
                <div className="mt-4 mb-6">
                  <span className={`text-3xl sm:text-4xl font-extrabold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                </div>

                <div className={`h-px w-full my-5 ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`} />

                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className={darkMode ? 'text-slate-300' : 'text-slate-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-auto">
                <a
                  href="#contact"
                  className={`w-full block text-center py-3.5 rounded-xl font-semibold text-sm transition-all shadow-sm ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#6A4FD9] to-[#5840b8] hover:from-[#7b61eb] hover:to-[#6A4FD9] text-white shadow-purple-500/25 hover:shadow-purple-500/40'
                      : darkMode
                      ? 'border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10'
                      : 'border border-slate-300 text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  {plan.ctaText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
