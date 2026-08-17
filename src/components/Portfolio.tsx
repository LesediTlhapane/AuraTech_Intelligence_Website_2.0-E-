import React, { useState } from 'react';
import { PORTFOLIO, PortfolioItem } from '../data/siteData';
import { ExternalLink, Github, Layers, Code, CheckCircle, Search } from 'lucide-react';

interface PortfolioProps {
  darkMode: boolean;
}

export const Portfolio: React.FC<PortfolioProps> = ({ darkMode }) => {
  const [filter, setFilter] = useState<'all' | 'agent' | 'platform' | 'workflow' | 'web'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filterOptions = [
    { label: 'All Projects', value: 'all' },
    { label: 'AI Agents', value: 'agent' },
    { label: 'AI Platforms', value: 'platform' },
    { label: 'Workflows', value: 'workflow' },
    { label: 'Web & E-Commerce', value: 'web' },
  ];

  const filteredProjects = PORTFOLIO.filter((item) => {
    const matchesFilter = filter === 'all' || item.type === filter;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="portfolio"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/75' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            Proven Track Record & Case Studies
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Our <span className="text-[#16C5D8]">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />
          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Proof of capability — real AI agents, workflows, and smart web applications built
            and deployed for clients and innovation challenges.
          </p>
        </div>

        {/* Filter Tabs & Search Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10">
          <div className="flex flex-wrap items-center gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setFilter(opt.value as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
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

          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search stack or title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2 text-xs rounded-xl border outline-none transition-all ${
                darkMode
                  ? 'bg-slate-900/90 border-slate-800 text-slate-200 focus:border-cyan-500'
                  : 'bg-white border-slate-200 text-slate-800 focus:border-cyan-600'
              }`}
            />
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-6 border flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                darkMode
                  ? 'bg-[#162033]/90 border-slate-800 hover:border-cyan-500/40'
                  : 'bg-white border-slate-200 hover:border-purple-300'
              }`}
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                      {item.title}
                    </h3>
                  </div>
                  <span
                    className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                      darkMode
                        ? 'bg-slate-800 text-slate-300 border border-slate-700'
                        : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <p className={`text-sm leading-relaxed mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-md ${
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

              {/* Action Links */}
              <div
                className={`pt-4 border-t flex flex-wrap items-center gap-3 ${
                  darkMode ? 'border-slate-800' : 'border-slate-100'
                }`}
              >
                {item.githubUrl && (
                  <a
                    href={item.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View GitHub</span>
                  </a>
                )}

                {item.demoUrl && (
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Interactive Demo</span>
                  </a>
                )}

                {item.mobileUrl && (
                  <a
                    href={item.mobileUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Mobile App Repo</span>
                  </a>
                )}

                {item.adminUrl && (
                  <a
                    href={item.adminUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Admin Portal Repo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
