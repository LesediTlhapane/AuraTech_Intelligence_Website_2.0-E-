import React from 'react';
import { Linkedin, Github, Twitter, ArrowUp, Bot, Sparkles } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-12 border-t transition-colors ${
        darkMode
          ? 'bg-[#080e1a] border-slate-800 text-slate-400'
          : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/40">
          {/* Logo Brand */}
          <div className="flex items-center gap-3">
            <img
              src="/brandlogo.png"
              alt="Aura Tech Intelligence"
              className="h-9 w-auto object-contain"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = './brandlogo.png';
              }}
            />
            <div className="flex flex-col">
              <span className={`font-mono font-bold text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                AURA-TECH INTELLIGENCE
              </span>
              <span className="text-[10px] tracking-widest text-cyan-400 uppercase font-sans">
                Autonomous Digital Workers & Workflows
              </span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/lesedi-tlhapane-0309b826b/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-800/50 hover:bg-[#6A4FD9] hover:text-white transition-colors border border-slate-700/50"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/LesediTlhapane"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-800/50 hover:bg-[#16C5D8] hover:text-slate-950 transition-colors border border-slate-700/50"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/50 ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Aura Tech Intelligence. Founded by Lesedi Tlhapane. All rights reserved.</p>
          <div className="flex items-center gap-2 text-cyan-400 font-medium">
            <Bot className="w-3.5 h-3.5" />
            <span>AI Agents • Workflows • Smart Websites • Pretoria • eStudy AI Incubation</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
