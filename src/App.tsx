import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BusinessProblems } from './components/BusinessProblems';
import { Solutions } from './components/Solutions';
import { Methodology } from './components/Methodology';
import { Industries } from './components/Industries';
import { CaseStudies } from './components/CaseStudies';
import { WhyAura } from './components/WhyAura';
import { AiAssessment } from './components/AiAssessment';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { ChatWidget } from './components/ChatWidget';
import { Footer } from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#0b1120';
      document.body.style.color = '#e8edf5';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#f8fafc';
      document.body.style.color = '#0f172a';
    }
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen font-sans antialiased selection:bg-cyan-500 selection:text-slate-950 ${
        darkMode ? 'bg-[#0b1120] text-slate-100' : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero darkMode={darkMode} />

        {/* Global sections container with subtle background graphic */}
        <div className="relative">
          <div
            className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-fixed bg-no-repeat transition-opacity duration-300"
            style={{
              backgroundImage: `url('/home.png')`,
              opacity: darkMode ? 0.16 : 0.22,
            }}
          />
          <div className="relative z-10">
            <BusinessProblems darkMode={darkMode} />
            <Solutions darkMode={darkMode} />
            <Methodology darkMode={darkMode} />
            <Industries darkMode={darkMode} />
            <CaseStudies darkMode={darkMode} />
            <WhyAura darkMode={darkMode} />
            <AiAssessment darkMode={darkMode} />
            <Pricing darkMode={darkMode} />
            <About darkMode={darkMode} />
            <FAQ darkMode={darkMode} />
            <Contact darkMode={darkMode} />
          </div>
        </div>
      </main>
      <Footer darkMode={darkMode} />
      <ChatWidget darkMode={darkMode} />
    </div>
  );
}
