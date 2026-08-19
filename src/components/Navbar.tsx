import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Sparkles, Phone, ArrowUpRight, Calendar } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean | ((prev: boolean) => boolean)) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'problems',
        'solutions',
        'method',
        'industries',
        'case-studies',
        'why-aura',
        'assessment',
        'pricing',
        'about',
        'faq',
        'contact',
      ];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#solutions' },
    { name: 'Method', href: '#method' },
    { name: 'Industries', href: '#industries' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Why Aura', href: '#why-aura' },
    { name: 'AI Assessment', href: '#assessment' },
    { name: 'Engagement', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? darkMode
            ? 'bg-[#0b1120]/92 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-black/20'
            : 'bg-white/92 backdrop-blur-md border-b border-slate-200 shadow-md shadow-slate-200/50'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        {/* Brand Logo & Wordmark */}
        <a href="#home" className="flex items-center gap-3 group">
          <img
            src="/brandlogo.png"
            alt="Aura Tech Intelligence Logo"
            className="h-9 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = './brandlogo.png';
            }}
          />
          <div className="flex flex-col">
            <span
              className={`font-mono font-extrabold tracking-tight text-base sm:text-lg ${
                darkMode
                  ? 'bg-gradient-to-r from-white via-cyan-300 to-cyan-400 bg-clip-text text-transparent'
                  : 'bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-600 bg-clip-text text-transparent'
              }`}
            >
              AURA-TECH
            </span>
            <span className="font-sans font-semibold text-[9px] tracking-[0.24em] uppercase text-cyan-400 -mt-1">
              INTELLIGENCE
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex items-center space-x-1 text-xs font-semibold">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  isActive
                    ? darkMode
                      ? 'text-cyan-300 bg-cyan-950/40 font-bold'
                      : 'text-purple-600 bg-purple-50 font-bold'
                    : darkMode
                    ? 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                    : 'text-slate-600 hover:text-purple-600 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>

        {/* Right Action Area */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs font-medium border transition-all ${
              darkMode
                ? 'bg-slate-800/80 border-slate-700 text-slate-200 hover:bg-slate-700 hover:border-cyan-500/40'
                : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200 hover:border-purple-300'
            }`}
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark/light mode"
          >
            {darkMode ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span className="hidden sm:inline text-[11px]">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-purple-600" />
                <span className="hidden sm:inline text-[11px]">Dark</span>
              </>
            )}
          </button>

          {/* WhatsApp Direct Icon on desktop */}
          <a
            href="https://wa.me/27848337335"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex p-2 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
            title="Chat on WhatsApp: 084-833-7335"
          >
            <Phone className="w-3.5 h-3.5" />
          </a>

          {/* Quick CTA button on desktop */}
          <a
            href="#contact"
            id="nav-audit-cta"
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] hover:opacity-95 text-white shadow-sm transition-all"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Strategy Session</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className={`xl:hidden p-2 rounded-lg ${
              darkMode
                ? 'text-slate-300 hover:bg-slate-800'
                : 'text-slate-700 hover:bg-slate-100'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer"
          className={`xl:hidden border-b px-6 py-4 space-y-1.5 transition-all max-h-[85vh] overflow-y-auto ${
            darkMode
              ? 'bg-[#0f172a] border-slate-800 text-slate-200'
              : 'bg-white border-slate-200 text-slate-800 shadow-xl'
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-2 text-xs font-semibold rounded-lg px-3 transition-colors ${
                activeSection === link.href.substring(1)
                  ? darkMode
                    ? 'text-cyan-400 bg-cyan-950/40'
                    : 'text-purple-600 bg-purple-50'
                  : darkMode
                  ? 'hover:bg-slate-800/80 hover:text-cyan-300'
                  : 'hover:bg-slate-50 hover:text-purple-600'
              }`}
            >
              {link.name}
            </a>
          ))}

          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href="https://wa.me/27848337335"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs text-emerald-400 py-1 px-3"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>WhatsApp / Call: 084-833-7335</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] text-white flex items-center justify-center gap-2 shadow-md"
            >
              <span>Book Strategy Session</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
