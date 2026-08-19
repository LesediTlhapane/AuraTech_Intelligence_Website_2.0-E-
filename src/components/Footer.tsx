import React from 'react';
import { Linkedin, Github, ArrowUp, Bot, Sparkles, ShieldCheck, MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  darkMode: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`py-14 border-t transition-colors ${
        darkMode
          ? 'bg-[#080e1a] border-slate-800 text-slate-400'
          : 'bg-slate-100 border-slate-200 text-slate-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-slate-800/60">
          {/* Col 1 & 2: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
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
                <span className="text-[10px] tracking-widest text-cyan-400 uppercase font-sans font-semibold">
                  AI Consulting & Intelligent Automation
                </span>
              </div>
            </div>

            <p className="text-xs leading-relaxed max-w-sm">
              We help businesses identify operational bottlenecks, design autonomous AI agents,
              and deploy multi-tier workflow automation that reduces manual friction and drives measurable growth.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/27848337335"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-800/50 hover:bg-emerald-500 hover:text-slate-950 transition-colors border border-slate-700/50"
                aria-label="WhatsApp Contact"
                title="WhatsApp (084-833-7335)"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:auratechintel@outlook.com"
                className="p-2 rounded-xl bg-slate-800/50 hover:bg-cyan-500 hover:text-slate-950 transition-colors border border-slate-700/50"
                aria-label="Email Inquiries"
                title="Email (auratechintel@outlook.com)"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/lesedi-tlhapane-0309b826b/"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-800/50 hover:bg-[#6A4FD9] hover:text-white transition-colors border border-slate-700/50"
                aria-label="LinkedIn Profile"
                title="Founder LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/LesediTlhapane"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/50"
                aria-label="GitHub Repositories"
                title="GitHub Code Repositories"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 3: Navigation Links */}
          <div className="space-y-3 text-xs">
            <span className={`font-bold uppercase tracking-wider block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Solutions
            </span>
            <ul className="space-y-2">
              <li><a href="#problems" className="hover:text-cyan-400 transition-colors">Operational Problems</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Autonomous AI Agents</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Intelligent Workflows</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">Knowledge Base Brains</a></li>
              <li><a href="#solutions" className="hover:text-cyan-400 transition-colors">System & API Integration</a></li>
            </ul>
          </div>

          {/* Col 4: Consulting & Method */}
          <div className="space-y-3 text-xs">
            <span className={`font-bold uppercase tracking-wider block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Consulting & Method
            </span>
            <ul className="space-y-2">
              <li><a href="#method" className="hover:text-cyan-400 transition-colors">The 6-Stage Method</a></li>
              <li><a href="#industries" className="hover:text-cyan-400 transition-colors">Industry Solutions</a></li>
              <li><a href="#case-studies" className="hover:text-cyan-400 transition-colors">Case Studies & Repos</a></li>
              <li><a href="#why-aura" className="hover:text-cyan-400 transition-colors">Why Aura Tech?</a></li>
              <li><a href="#assessment" className="hover:text-cyan-400 transition-colors">AI Opportunity Assessment</a></li>
            </ul>
          </div>

          {/* Col 5: Engagement & Location */}
          <div className="space-y-3 text-xs">
            <span className={`font-bold uppercase tracking-wider block ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Engagement & HQ
            </span>
            <ul className="space-y-2">
              <li><a href="#pricing" className="hover:text-cyan-400 transition-colors">Engagement Models (ZAR)</a></li>
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">Founder Leadership</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Consulting FAQ</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Book Strategy Session</a></li>
            </ul>
            <div className="pt-2 text-[11px] text-slate-400">
              <span>Pretoria, Gauteng, South Africa • Remote Deployments</span>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Incubation Tag */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Aura Tech Intelligence. Founded by Lesedi Tlhapane. All rights reserved.</p>

          <div className="flex items-center gap-2 text-cyan-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>eStudy AI Incubation Fellowship • POPIA Compliant Architecture</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-700 hover:text-white transition-colors border border-slate-700/50 flex items-center gap-1 text-[11px]"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
