import React, { useState } from 'react';
import { FAQ_LIST } from '../data/siteData';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQProps {
  darkMode: boolean;
}

export const FAQ: React.FC<FAQProps> = ({ darkMode }) => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true,
  });

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faq"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/75' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            Answers to Common Queries
          </div>
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Frequently Asked <span className="text-[#16C5D8]">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />
        </div>

        <div className="space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? darkMode
                      ? 'bg-[#162033] border-cyan-500/40 shadow-md'
                      : 'bg-white border-cyan-400 shadow-md'
                    : darkMode
                    ? 'bg-[#162033]/70 border-slate-800 hover:border-slate-700'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-semibold text-base sm:text-lg focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={darkMode ? 'text-slate-100' : 'text-slate-900'}>
                    {faq.question}
                  </span>
                  <div
                    className={`p-1.5 rounded-full transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 bg-cyan-500/20 text-cyan-400' : 'text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    className={`px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base leading-relaxed border-t ${
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
