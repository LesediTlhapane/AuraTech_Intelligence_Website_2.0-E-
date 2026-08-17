import React from 'react';
import { WORKFLOWS } from '../data/siteData';
import { Filter, Receipt, Ticket, UserPlus, GitBranch, RefreshCw, ArrowRight } from 'lucide-react';

interface WorkflowsProps {
  darkMode: boolean;
}

export const Workflows: React.FC<WorkflowsProps> = ({ darkMode }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Filter':
        return <Filter className="w-8 h-8 text-pink-400" />;
      case 'Receipt':
        return <Receipt className="w-8 h-8 text-pink-400" />;
      case 'Ticket':
        return <Ticket className="w-8 h-8 text-pink-400" />;
      case 'UserPlus':
        return <UserPlus className="w-8 h-8 text-pink-400" />;
      case 'GitBranch':
        return <GitBranch className="w-8 h-8 text-pink-400" />;
      case 'RefreshCw':
      default:
        return <RefreshCw className="w-8 h-8 text-pink-400" />;
    }
  };

  return (
    <section
      id="workflows"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/75' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-3">
            Connected Multi-System Automation
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Intelligent <span className="text-[#E94E97]">Workflows</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#E94E97] to-[#F68B3C] mx-auto mt-4 rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Connect AI agents together to automate complete business processes from trigger to resolution —
            syncing your CRMs, accounting tools, and communication channels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WORKFLOWS.map((workflow) => (
            <div
              key={workflow.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 ${
                workflow.isPopular
                  ? darkMode
                    ? 'bg-gradient-to-b from-[#162033] to-pink-950/20 border-pink-500/40 shadow-lg shadow-pink-950/30 ring-1 ring-pink-500/30'
                    : 'bg-white border-pink-400 shadow-xl shadow-pink-100/50 ring-1 ring-pink-400/30'
                  : darkMode
                  ? 'bg-[#162033]/80 border-slate-800 hover:border-pink-500/40 shadow-sm'
                  : 'bg-white border-slate-200 hover:border-pink-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20">
                    {getIcon(workflow.icon)}
                  </div>
                  {workflow.badge && (
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
                        workflow.isPopular
                          ? 'bg-pink-500/20 text-pink-300 border border-pink-500/30 font-bold'
                          : darkMode
                          ? 'bg-slate-800 text-slate-300 border border-slate-700'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {workflow.badge}
                    </span>
                  )}
                </div>

                <h3 className={`text-xl font-bold mb-2.5 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {workflow.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {workflow.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {workflow.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs font-medium px-2.5 py-1 rounded-lg ${
                        darkMode
                          ? 'bg-pink-950/40 text-pink-300 border border-pink-800/40'
                          : 'bg-pink-50 text-pink-800 border border-pink-100'
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
                  <span className="text-[#E94E97] font-bold text-lg">{workflow.price}</span>
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
