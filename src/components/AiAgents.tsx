import React from 'react';
import { AI_AGENTS } from '../data/siteData';
import { Headset, FileSpreadsheet, Brain, Users, Cpu, Sparkles, ArrowRight, Check } from 'lucide-react';

interface AiAgentsProps {
  darkMode: boolean;
}

export const AiAgents: React.FC<AiAgentsProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Headset':
        return <Headset className="w-8 h-8 text-cyan-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-8 h-8 text-cyan-400" />;
      case 'Brain':
        return <Brain className="w-8 h-8 text-cyan-400" />;
      case 'Users':
        return <Users className="w-8 h-8 text-cyan-400" />;
      case 'Cpu':
        return <Cpu className="w-8 h-8 text-cyan-400" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section
      id="agents"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0f172a]/70' : 'bg-slate-50/75'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            Autonomous Digital Workers
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Our <span className="text-[#16C5D8]">AI Agents</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Autonomous digital workers that handle specific operational roles in your business —
            24/7, zero fatigue, zero manual errors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {AI_AGENTS.map((agent) => (
            <div
              key={agent.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                agent.isPopular
                  ? darkMode
                    ? 'bg-gradient-to-b from-[#162033] to-cyan-950/20 border-cyan-500/40 shadow-lg shadow-cyan-950/30 ring-1 ring-cyan-500/30'
                    : 'bg-white border-cyan-400 shadow-xl shadow-cyan-100/50 ring-1 ring-cyan-400/30'
                  : darkMode
                  ? 'bg-[#162033]/80 border-slate-800 hover:border-cyan-500/40 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-cyan-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20">
                    {getIcon(agent.icon)}
                  </div>
                  {agent.badge && (
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                        agent.isPopular
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold'
                          : darkMode
                          ? 'bg-slate-800 text-slate-300 border border-slate-700'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {agent.badge}
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-bold mb-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {agent.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {agent.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
                        darkMode
                          ? 'bg-cyan-950/40 text-cyan-300 border border-cyan-800/40'
                          : 'bg-cyan-50 text-cyan-800 border border-cyan-100'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div
                className={`pt-4 border-t flex items-center justify-between ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <div>
                  <span className="text-xs block text-slate-500">Starting at</span>
                  <span className="text-cyan-400 font-bold text-lg">{agent.price}</span>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group"
                >
                  <span>Build Yours</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
