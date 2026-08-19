import React, { useState } from 'react';
import { FAQ_LIST, FAQItem } from '../data/siteData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FAQProps {
  darkMode: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ darkMode }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
    'faq-2': false,
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Strategy & Scoping', 'Technical & Integration', 'Security & Ownership', 'Delivery'];

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = activeCategory === 'All'
    ? FAQ_LIST
    : FAQ_LIST.filter((f) => f.category === activeCategory);

  return (
    <section
      id="faq"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/85' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Consulting & Technical Clarifications</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Frequently Asked <span className="text-[#16C5D8]">Questions</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                  : darkMode
                  ? 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 border border-slate-700'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#162033] border-cyan-500/40 shadow-lg'
                      : 'bg-white border-cyan-400 shadow-md'
                    : darkMode
                    ? 'bg-[#162033]/70 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-sm sm:text-base focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <span className="text-[11px] font-mono text-purple-400 font-semibold px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 w-fit">
                      {faq.category}
                    </span>
                    <span className={darkMode ? 'text-slate-100' : 'text-slate-900'}>
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className={`px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                      darkMode
                        ? 'text-slate-300 border-slate-800/80 bg-slate-900/30'
                        : 'text-slate-600 border-slate-100 bg-slate-50/50'
                    }`}
                  >
                    <p className="pl-3 border-l-2 border-cyan-400">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
