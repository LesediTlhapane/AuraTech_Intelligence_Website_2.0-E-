import React from 'react';
import { MapPin, GraduationCap, Phone, Mail, Linkedin, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/85' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Picture Card */}
          <div className="lg:w-2/5 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-cyan-400/80 shadow-2xl bg-slate-800">
                <img
                  src="/Lesed(2).png"
                  alt="Lesedi Tlhapane"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).src = '/me.png';
                  }}
                />
              </div>
            </div>

            <div className="mt-5 text-center">
              <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Lesedi Tlhapane
              </h3>
              <p className="text-sm text-cyan-400 font-semibold font-mono">
                Founder & Principal AI Systems Architect
              </p>
              <p className="text-xs text-slate-400 mt-1">
                Aura Tech Intelligence
              </p>
            </div>
          </div>

          {/* Details & Consulting Story */}
          <div className="lg:w-3/5 space-y-6">
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                <MapPin className="w-3.5 h-3.5" />
                Pretoria, South Africa (Remote Worldwide)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/20">
                <GraduationCap className="w-3.5 h-3.5" />
                eStudy AI Incubation Fellowship
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Bridging Cutting-Edge AI with{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-[#6A4FD9] bg-clip-text text-transparent">
                Practical Commercial Execution
              </span>
            </h2>

            <div
              className={`rounded-2xl p-6 sm:p-7 border space-y-4 shadow-sm ${
                darkMode
                  ? 'bg-[#162033]/90 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <p className="text-sm sm:text-base leading-relaxed">
                Aura Tech Intelligence was founded by <strong className={darkMode ? 'text-white' : 'text-slate-900'}>Lesedi Tlhapane</strong> through the sponsored{' '}
                <strong className={darkMode ? 'text-white' : 'text-slate-900'}>eStudy AI Entrepreneurship Incubation Programme</strong> — a South African programme through which Aura was developed.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                Lesedi works directly with business owners and operational teams to understand workflow friction, prototype useful systems, and engineer practical AI and automation around the tools a business already uses.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>100% Client IP Ownership</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>POPIA-Conscious Privacy Design</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Integration-Focused Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                  <span>Human-in-the-Loop Safeguards</span>
                </div>
              </div>
            </div>

            {/* Direct Contact Channels */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/27848337335"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                  darkMode
                    ? 'bg-[#162033] border-slate-800 text-slate-200 hover:border-emerald-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-emerald-500 hover:bg-emerald-50/50 shadow-sm'
                }`}
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp: 084-833-7335</span>
              </a>

              <a
                href="mailto:auratechintel@outlook.com"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                  darkMode
                    ? 'bg-[#162033] border-slate-800 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-cyan-500 hover:bg-cyan-50/50 shadow-sm'
                }`}
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>auratechintel@outlook.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/lesedi-tlhapane-0309b826b/"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${
                  darkMode
                    ? 'bg-[#162033] border-slate-800 text-slate-200 hover:border-sky-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-sky-500 hover:bg-sky-50/50 shadow-sm'
                }`}
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
