import React from 'react';
import { MapPin, GraduationCap, Phone, Mail, Linkedin, CheckCircle, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section
      id="about"
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]/75' : 'bg-slate-100/70'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Profile Picture Card */}
          <div className="lg:w-2/5 flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-[#6A4FD9] rounded-full blur-lg opacity-40 group-hover:opacity-75 transition duration-500"></div>
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
              <p className="text-sm text-cyan-400 font-medium font-mono">
                AI Technical Specialist & Founder
              </p>
            </div>
          </div>

          {/* Details & Story */}
          <div className="lg:w-3/5 space-y-6">
            <div className="flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                <MapPin className="w-3.5 h-3.5" />
                Pretoria, South Africa
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-300 border border-purple-500/20">
                <GraduationCap className="w-3.5 h-3.5" />
                eStudy AI Incubation — Current Cohort
              </span>
            </div>

            <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              Engineering Practical AI for{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-[#6A4FD9] bg-clip-text text-transparent">
                Commercial Impact
              </span>
            </h2>

            <div
              className={`rounded-2xl p-6 sm:p-7 border space-y-4 shadow-sm ${
                darkMode
                  ? 'bg-[#162033]/80 border-slate-800 text-slate-300'
                  : 'bg-white border-slate-200 text-slate-700'
              }`}
            >
              <p className="text-base sm:text-lg leading-relaxed">
                Currently selected for the prestigious{' '}
                <strong className={darkMode ? 'text-white' : 'text-slate-900'}>
                  eStudy AI Entrepreneurship Incubation Programme
                </strong>{' '}
                — a 12-month sponsored journey building commercially viable AI agents and intelligent
                workflows. I retain full IP rights and am actively deploying production-ready
                automation for clients.
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                My mission: help African businesses harness autonomous AI agents and intelligent
                workflows that handle repetitive cognitive work, eliminating operational bottlenecks
                and freeing your team for strategic growth.
              </p>
            </div>

            {/* Quick Contact Badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="https://wa.me/27848337335"
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
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
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
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
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium border transition-all ${
                  darkMode
                    ? 'bg-[#162033] border-slate-800 text-slate-200 hover:border-sky-500/50 hover:bg-slate-800'
                    : 'bg-white border-slate-200 text-slate-800 hover:border-sky-500 hover:bg-sky-50/50 shadow-sm'
                }`}
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
                <span>/in/lesedi-tlhapane</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
