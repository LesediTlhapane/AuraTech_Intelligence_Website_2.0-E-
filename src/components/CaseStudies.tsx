import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudyItem } from '../data/siteData';
import {
  ExternalLink,
  Github,
  Search,
  CheckCircle2,
  Code,
  Sparkles,
  Layers,
  Bot,
  Brain,
  ShieldCheck,
  Building2,
  ArrowRight,
} from 'lucide-react';

interface CaseStudiesProps {
  darkMode: boolean;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ darkMode }) => {
  const [filter, setFilter] = useState<'all' | 'agents' | 'workflows' | 'hr' | 'healthcare' | 'compliance' | 'education' | 'web'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { label: 'All Capabilities', value: 'all' },
    { label: 'AI Agents', value: 'agents' },
    { label: 'Workflows', value: 'workflows' },
    { label: 'HR & Recruitment', value: 'hr' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Compliance & Tax', value: 'compliance' },
    { label: 'Education', value: 'education' },
    { label: 'Web & Commercial', value: 'web' },
  ];

  const filteredItems = CASE_STUDIES.filter((item) => {
    const matchesFilter = filter === 'all' || item.capabilityCategory === filter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.industry.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.challenge.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const getStatusBadgeStyle = (badge: string) => {
    switch (badge) {
      case 'Production Client':
        return darkMode
          ? 'bg-emerald-950/40 text-emerald-300 border-emerald-800/50'
          : 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'Full-Stack System':
        return darkMode
          ? 'bg-purple-950/40 text-purple-300 border-purple-800/50'
          : 'bg-purple-50 text-purple-800 border-purple-200';
      case 'Live Demo':
        return darkMode
          ? 'bg-cyan-950/40 text-cyan-300 border-cyan-800/50'
          : 'bg-cyan-50 text-cyan-800 border-cyan-200';
      case 'Incubation Prototype':
        return darkMode
          ? 'bg-amber-950/40 text-amber-300 border-amber-800/50'
          : 'bg-amber-50 text-amber-800 border-amber-200';
      case 'Verified Project':
      default:
        return darkMode
          ? 'bg-slate-800 text-slate-300 border-slate-700'
          : 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  return (
    <section
      id="case-studies"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0f172a]/70' : 'bg-slate-50/75'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3.5">
            <Layers className="w-3.5 h-3.5" />
            <span>Proven Engineering Track Record</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Case Studies & <span className="text-[#16C5D8]">Technical Capabilities</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />

          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Explore our verified portfolio of autonomous AI workers, end-to-end multi-tier workflows,
            and specialized business platforms engineered for commercial deployment.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value as any)}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filter === opt.value
                    ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                    : darkMode
                    ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search stack, industry, or problem..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border outline-none transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-200 focus:border-cyan-500'
                  : 'bg-white border-slate-200 text-slate-800 focus:border-cyan-600'
              }`}
            />
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                item.isFeatured
                  ? darkMode
                    ? 'bg-gradient-to-b from-[#162033] to-[#121b2d] border-cyan-500/40 shadow-lg shadow-cyan-950/20'
                    : 'bg-white border-cyan-400 shadow-xl shadow-cyan-100/40'
                  : darkMode
                  ? 'bg-[#162033]/85 border-slate-800 hover:border-slate-700'
                  : 'bg-white border-slate-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div>
                {/* Header with tags */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[11px] font-semibold text-cyan-400 uppercase tracking-wider block">
                      {item.industry}
                    </span>
                    <h3 className={`text-lg sm:text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className={`text-[11px] font-mono font-medium px-2.5 py-1 rounded-full shrink-0 border ${getStatusBadgeStyle(
                      item.statusBadge
                    )}`}
                  >
                    {item.statusBadge}
                  </span>
                </div>

                {/* Structured Breakdown: Challenge -> Solution -> Intelligence */}
                <div className="space-y-3.5 mb-6 text-xs sm:text-sm">
                  <div>
                    <span className="font-semibold text-rose-400 block text-[11px] uppercase tracking-wider mb-0.5">
                      The Operational Challenge:
                    </span>
                    <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.challenge}
                    </p>
                  </div>

                  <div>
                    <span className="font-semibold text-cyan-400 block text-[11px] uppercase tracking-wider mb-0.5">
                      The Aura Solution:
                    </span>
                    <p className={`leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                      {item.solution}
                    </p>
                  </div>

                  <div className={`p-3 rounded-xl ${
                    darkMode ? 'bg-slate-900/60 border border-slate-800 text-slate-300' : 'bg-slate-50 border border-slate-200 text-slate-700'
                  }`}>
                    <span className="font-semibold text-purple-400 block text-[11px] uppercase tracking-wider mb-0.5">
                      AI Architecture & Logic:
                    </span>
                    <p className="leading-relaxed text-xs">
                      {item.intelligence}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] font-mono px-2 py-0.5 rounded-md ${
                        darkMode
                          ? 'bg-cyan-950/30 text-cyan-300 border border-cyan-800/30'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links (GitHub, Live Demos, Mobile, Admin) */}
              <div
                className={`pt-4 border-t flex flex-wrap items-center justify-between gap-3 ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Inspect GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code Repository</span>
                    </a>
                  )}

                  {item.demoUrl && (
                    <a
                      href={item.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      title="Open Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Interactive Demo</span>
                    </a>
                  )}

                  {item.mobileUrl && (
                    <a
                      href={item.mobileUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                      title="Mobile App Repo"
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>Mobile App</span>
                    </a>
                  )}

                  {item.adminUrl && (
                    <a
                      href={item.adminUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-pink-400 hover:text-pink-300 transition-colors"
                      title="Admin Portal Repo"
                    >
                      <Code className="w-3.5 h-3.5" />
                      <span>Admin Portal</span>
                    </a>
                  )}
                </div>

                <a
                  href="#contact"
                  className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  Deploy Similar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
