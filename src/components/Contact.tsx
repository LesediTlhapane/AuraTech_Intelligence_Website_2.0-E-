import React, { useState } from 'react';
import { Phone, Mail, Linkedin, MapPin, Send, CheckCircle2, AlertCircle, Quote, ShieldCheck, Clock, Calendar } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

export const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterest: 'AI Scoping Blueprint (Stage 01)',
    estimatedBudget: 'R2,500 – R5,000',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const data = new FormData();
      data.append('access_key', '965456bd-86bd-466c-bddd-f06d6cf429ec');
      data.append('name', formData.name);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('subject', `Aura Strategy Inquiry: ${formData.serviceInterest} from ${formData.name}`);
      data.append(
        'message',
        `Interest: ${formData.serviceInterest}
Budget Range: ${formData.estimatedBudget}
Phone/WhatsApp: ${formData.phone}
Email: ${formData.email}
Operational Challenge Details:
${formData.message}`
      );

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const res = await response.json();
      if (res.success) {
        setStatus('success');
        setStatusMessage('✓ Strategy Session Request Received! Lesedi will respond within 24 hours with scoping insights.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          serviceInterest: 'AI Scoping Blueprint (Stage 01)',
          estimatedBudget: 'R2,500 – R5,000',
          message: '',
        });
      } else {
        setStatus('error');
        setStatusMessage('There was an issue submitting your request. Please connect directly via WhatsApp at 084-833-7335.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network connection error. Please connect directly via WhatsApp at 084-833-7335.');
    }
  };

  return (
    <section
      id="contact"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-gradient-to-b from-[#0f172a]/90 to-[#0b1120]' : 'bg-slate-50/75'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>Consultation & Project Scoping</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Book an <span className="text-[#16C5D8]">AI Strategy Session</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />

          <p className={`mt-4 max-w-2xl mx-auto text-base sm:text-lg ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Tell us about your business processes, operational bottlenecks, or system requirements.
            We will review your operations and provide a concrete architecture roadmap.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Contact & Authority */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`rounded-2xl p-6 sm:p-7 border shadow-sm space-y-5 ${
                darkMode ? 'bg-[#162033]/90 border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Direct Consulting Channels
              </h3>

              <a
                href="https://wa.me/27848337335"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group p-2.5 rounded-xl transition-colors hover:bg-emerald-500/10"
              >
                <div className="p-3 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp / Direct Call</span>
                  <span className={`text-base sm:text-lg font-bold group-hover:text-emerald-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    084-833-7335
                  </span>
                </div>
              </a>

              <a
                href="mailto:auratechintel@outlook.com"
                className="flex items-center gap-4 group p-2.5 rounded-xl transition-colors hover:bg-cyan-500/10"
              >
                <div className="p-3 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Email Scoping Inquiries</span>
                  <span className={`text-sm sm:text-base font-semibold group-hover:text-cyan-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    auratechintel@outlook.com
                  </span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/lesedi-tlhapane-0309b826b/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 group p-2.5 rounded-xl transition-colors hover:bg-sky-500/10"
              >
                <div className="p-3 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/20">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Founder LinkedIn</span>
                  <span className={`text-sm sm:text-base font-semibold group-hover:text-sky-400 transition-colors ${
                    darkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    linkedin.com/in/lesedi-tlhapane
                  </span>
                </div>
              </a>

              <div
                className={`pt-4 border-t flex items-center gap-2.5 text-xs ${
                  darkMode ? 'border-slate-800 text-slate-400' : 'border-slate-100 text-slate-600'
                }`}
              >
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Pretoria, Gauteng • Deployments Across South Africa & Remote</span>
              </div>
            </div>

            {/* Client Testimonial & Assurance */}
            <div
              className={`rounded-2xl p-6 border relative overflow-hidden ${
                darkMode ? 'bg-[#162033]/60 border-slate-800' : 'bg-slate-100 border-slate-200'
              }`}
            >
              <Quote className="w-8 h-8 text-cyan-500/20 absolute -top-1 -right-1" />
              <p className={`italic text-xs sm:text-sm leading-relaxed mb-3 ${
                darkMode ? 'text-slate-300' : 'text-slate-700'
              }`}>
                "Lesedi engineered a custom autonomous agent that triages client inquiries 24/7.
                Response latency dropped to seconds and our administrative workload decreased significantly."
              </p>
              <span className="text-xs font-semibold text-cyan-400 block">
                — Verified Operational Client
              </span>
            </div>

            {/* POPIA & Privacy Card */}
            <div className={`p-4 rounded-xl border flex items-center gap-3 text-xs ${
              darkMode ? 'bg-slate-900/60 border-slate-800 text-slate-400' : 'bg-slate-50 border-slate-200 text-slate-600'
            }`}>
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>All consultations & workflow data held under strict confidentiality & POPIA compliance standards.</span>
            </div>
          </div>

          {/* Right Column: Strategy Session Request Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl p-6 sm:p-8 border shadow-xl ${
                darkMode ? 'bg-[#162033] border-slate-800' : 'bg-white border-slate-200'
              }`}
            >
              <div className="mb-6">
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Schedule Your 1-on-1 Scoping Call
                </h3>
                <p className={`text-xs mt-1 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                  Fill out your details below and we will prepare a preliminary workflow analysis for our call.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sipho Ndlovu"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-colors ${
                        darkMode
                          ? 'bg-slate-900/80 border-slate-700 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sipho@company.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-colors ${
                        darkMode
                          ? 'bg-slate-900/80 border-slate-700 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="082 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-colors ${
                        darkMode
                          ? 'bg-slate-900/80 border-slate-700 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600'
                      }`}
                    />
                  </div>

                  <div>
                    <label className={`block text-xs font-semibold mb-1.5 ${
                      darkMode ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      Engagement Focus
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-colors ${
                        darkMode
                          ? 'bg-slate-900/80 border-slate-700 text-white focus:border-cyan-400'
                          : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600'
                      }`}
                    >
                      <option value="AI Scoping Blueprint (Stage 01)">AI Scoping & Blueprint (From R2,500)</option>
                      <option value="Custom AI Agent Build">Autonomous AI Agent Build (From R3,850)</option>
                      <option value="Intelligent Workflow Pipeline">Intelligent Workflow Pipeline (From R4,800)</option>
                      <option value="Enterprise Knowledge System">Enterprise Knowledge Base Brain (From R4,750)</option>
                      <option value="End-to-End Enterprise System">End-to-End Enterprise Transformation (Custom)</option>
                      <option value="AI Retainer Partnership">AI-as-a-Service Retainer (From R3,850/mo)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={`block text-xs font-semibold mb-1.5 ${
                    darkMode ? 'text-slate-300' : 'text-slate-700'
                  }`}>
                    What manual workflow or bottleneck would you like to automate? *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your current manual tasks, volume of emails/inquiries, software tools used (e.g. Sage, WhatsApp, Sheets), and what ideal automation looks like..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3 text-xs sm:text-sm rounded-xl border outline-none transition-colors resize-none ${
                      darkMode
                        ? 'bg-slate-900/80 border-slate-700 text-white focus:border-cyan-400'
                        : 'bg-slate-50 border-slate-200 text-slate-900 focus:border-purple-600'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] hover:opacity-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <span>Submitting Scoping Request...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Book AI Strategy Session</span>
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <div className="p-3.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{statusMessage}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
