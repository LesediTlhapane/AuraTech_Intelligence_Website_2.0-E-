import React from 'react';
import { SERVICES } from '../data/siteData';
import { Search, Layers, GraduationCap, Bot, GitBranch, Globe, Handshake, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

export const Services: React.FC<ServicesProps> = ({ darkMode }) => {
  const getIcon = (iconName: string, categoryColor: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-purple-400" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-purple-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Workflow':
        return <GitBranch className="w-5 h-5 text-pink-400" />;
      case 'Globe':
        return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'Handshake':
      default:
        return <Handshake className="w-5 h-5 text-amber-400" />;
    }
  };

  const getCategoryBadgeClass = (category: string) => {
    switch (category) {
      case 'Discovery':
        return darkMode
          ? 'bg-purple-950/50 text-purple-300 border-purple-800/50'
          : 'bg-purple-50 text-purple-700 border-purple-200';
      case 'AI Agents':
        return darkMode
          ? 'bg-cyan-950/50 text-cyan-300 border-cyan-800/50'
          : 'bg-cyan-50 text-cyan-700 border-cyan-200';
      case 'Workflows':
        return darkMode
          ? 'bg-pink-950/50 text-pink-300 border-pink-800/50'
          : 'bg-pink-50 text-pink-700 border-pink-200';
      case 'Web':
        return darkMode
          ? 'bg-emerald-950/50 text-emerald-300 border-emerald-800/50'
          : 'bg-emerald-50 text-emerald-700 border-emerald-200';
      case 'Scale':
      default:
        return darkMode
          ? 'bg-amber-950/50 text-amber-300 border-amber-800/50'
          : 'bg-amber-50 text-amber-700 border-amber-200';
    }
  };

  return (
    <section
      id="services"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0f172a]/70' : 'bg-slate-50/75'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
            Full-Spectrum AI Capabilities
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Complete <span className="text-[#6A4FD9]">Service Catalogue</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] mx-auto mt-4 rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Everything required to audit, design, build, deploy, and scale intelligent AI systems
            tailored to your company's workflow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                darkMode
                  ? 'bg-[#162033]/80 border-slate-800 hover:border-purple-500/40'
                  : 'bg-white border-slate-200 hover:border-purple-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span
                    className={`text-xs font-semibold px-3 py-1 rounded-full border ${getCategoryBadgeClass(
                      service.category
                    )}`}
                  >
                    {service.category}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800/30 border border-slate-700/50">
                    {getIcon(service.icon, service.categoryColor)}
                  </div>
                </div>

                <h3 className={`text-lg font-bold mb-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {service.description}
                </p>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <span className="font-bold text-sm text-cyan-400">{service.price}</span>
                <a
                  href="#contact"
                  className="text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
                >
                  Inquire Now →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
