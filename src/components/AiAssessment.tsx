import React, { useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Send,
  Building2,
  Clock,
  Zap,
  Check,
  AlertCircle,
} from 'lucide-react';

interface AiAssessmentProps {
  darkMode: boolean;
}

export const AiAssessment: React.FC<AiAssessmentProps> = ({ darkMode }) => {
  const [step, setStep] = useState<number>(1);
  const [industry, setIndustry] = useState<string>('Professional Services / Consulting');
  const [teamSize, setTeamSize] = useState<string>('5–25 Employees');
  const [selectedBottlenecks, setSelectedBottlenecks] = useState<string[]>([
    'Customer Inquiries & Slow Response Times',
  ]);
  const [selectedStack, setSelectedStack] = useState<string[]>([
    'WhatsApp Business',
    'Gmail / Outlook',
  ]);

  // Lead submission form
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const industryOptions = [
    'Healthcare & Clinical Practice',
    'Recruitment, HR & Staffing',
    'Compliance, Tax & Legal',
    'Education & Training / EdTech',
    'E-Commerce & Retail',
    'Professional Services / Consulting',
    'Financial Services & Real Estate',
    'Logistics & Operations',
  ];

  const teamSizeOptions = [
    'Solo Founder / 1–4 Staff',
    '5–25 Employees',
    '26–100 Employees',
    '100+ Enterprise',
  ];

  const bottleneckOptions = [
    { id: 'inquiries', label: 'Customer Inquiries & Slow Response Times', hours: '12-20 hrs/wk' },
    { id: 'data_entry', label: 'Manual Invoicing & Repetitive Data Entry', hours: '15-25 hrs/wk' },
    { id: 'lead_followup', label: 'Inconsistent Lead Follow-up & Pipeline Leaks', hours: '8-15 hrs/wk' },
    { id: 'hr_cvs', label: 'HR Resume Screening & Employee Onboarding Drag', hours: '10-20 hrs/wk' },
    { id: 'knowledge_lookup', label: 'Searching for Internal Documents, SOPs & Policies', hours: '10-18 hrs/wk' },
    { id: 'compliance_reporting', label: 'Manual Reporting, Tax & Compliance Compilations', hours: '8-16 hrs/wk' },
  ];

  const stackOptions = [
    'WhatsApp Business',
    'Gmail / Microsoft Outlook',
    'Sage / Xero / QuickBooks',
    'HubSpot / Salesforce / Pipedrive',
    'Google Sheets / Excel Spreadsheets',
    'Custom Internal Database / SQL',
  ];

  const toggleBottleneck = (label: string) => {
    if (selectedBottlenecks.includes(label)) {
      if (selectedBottlenecks.length > 1) {
        setSelectedBottlenecks(selectedBottlenecks.filter((b) => b !== label));
      }
    } else {
      setSelectedBottlenecks([...selectedBottlenecks, label]);
    }
  };

  const toggleStack = (tool: string) => {
    if (selectedStack.includes(tool)) {
      if (selectedStack.length > 1) {
        setSelectedStack(selectedStack.filter((s) => s !== tool));
      }
    } else {
      setSelectedStack([...selectedStack, tool]);
    }
  };

  // Generate dynamic diagnosis
  const estimatedHoursSaved = selectedBottlenecks.length * 12;
  const recommendedTier =
    selectedBottlenecks.length === 1
      ? 'Custom AI Agent Deployment (Stage 02 — from R3,850)'
      : selectedBottlenecks.length <= 3
      ? 'Intelligent Multi-System Workflow (Stage 02 — from R4,800)'
      : 'End-to-End Enterprise System Transformation (Stage 03 — Custom Scope)';

  const handleAssessmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('loading');

    try {
      const data = new FormData();
      data.append('access_key', '965456bd-86bd-466c-bddd-f06d6cf429ec');
      data.append('name', contactName);
      data.append('email', contactEmail);
      data.append('phone', contactPhone);
      data.append('subject', `Aura AI Diagnostic Assessment: ${contactName} (${industry})`);
      data.append(
        'message',
        `--- AI OPPORTUNITY ASSESSMENT SUBMISSION ---
Name: ${contactName}
Email: ${contactEmail}
Phone: ${contactPhone}
Industry: ${industry}
Team Size: ${teamSize}
Identified Bottlenecks: ${selectedBottlenecks.join(', ')}
Existing Tech Stack: ${selectedStack.join(', ')}
Estimated Potential Hours Reclaimable: ~${estimatedHoursSaved} hrs/month
Recommended Architecture Tier: ${recommendedTier}`
      );

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      const res = await response.json();
      if (res.success) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    }
  };

  return (
    <section
      id="assessment"
      className={`py-24 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0f172a]/80' : 'bg-slate-50/80'
      }`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-3.5">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Diagnostic Tool</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight ${
            darkMode ? 'text-white' : 'text-slate-900'
          }`}>
            AI Opportunity <span className="text-[#16C5D8]">Assessment</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-[#16C5D8] to-[#6A4FD9] mx-auto mt-4 rounded-full" />

          <p className={`mt-4 max-w-xl mx-auto text-base ${
            darkMode ? 'text-slate-400' : 'text-slate-600'
          }`}>
            Diagnose where your business is losing productive hours and receive an instant blueprint recommendation.
          </p>
        </div>

        {/* Wizard Container */}
        <div
          className={`rounded-3xl p-6 sm:p-10 border shadow-2xl transition-all ${
            darkMode ? 'bg-[#162033] border-slate-800' : 'bg-white border-slate-200'
          }`}
        >
          {/* Step Progress Indicator */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-800/80">
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-cyan-400 px-2.5 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40">
                STEP {step} OF 4
              </span>
              <span className={`text-xs font-semibold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                {step === 1 && 'Company Profile & Sector'}
                {step === 2 && 'Identify Primary Operational Bottlenecks'}
                {step === 3 && 'Current Software Infrastructure'}
                {step === 4 && 'Your Tailored AI Opportunity Diagnosis'}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`w-6 sm:w-8 h-1.5 rounded-full transition-all ${
                    step >= i ? 'bg-cyan-400' : darkMode ? 'bg-slate-800' : 'bg-slate-200'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* STEP 1: Industry & Team Size */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  1. Which industry best describes your business?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {industryOptions.map((ind) => (
                    <button
                      key={ind}
                      type="button"
                      onClick={() => setIndustry(ind)}
                      className={`p-3.5 rounded-xl text-left text-xs sm:text-sm font-semibold border transition-all ${
                        industry === ind
                          ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300'
                          : darkMode
                          ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {ind}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  2. What is your team size?
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {teamSizeOptions.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`p-3 rounded-xl text-center text-xs font-semibold border transition-all ${
                        teamSize === size
                          ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                          : darkMode
                          ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  onClick={() => setStep(2)}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center gap-2"
                >
                  <span>Next: Identify Bottlenecks</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Operational Bottlenecks */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <label className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Where is your team spending repetitive manual time? (Select all that apply)
                  </label>
                  <span className="text-xs text-cyan-400 font-semibold">
                    {selectedBottlenecks.length} Selected
                  </span>
                </div>

                <div className="space-y-2.5">
                  {bottleneckOptions.map((bot) => {
                    const isSelected = selectedBottlenecks.includes(bot.label);
                    return (
                      <button
                        key={bot.id}
                        type="button"
                        onClick={() => toggleBottleneck(bot.label)}
                        className={`w-full p-4 rounded-xl text-left border flex items-center justify-between gap-4 transition-all ${
                          isSelected
                            ? 'bg-cyan-950/20 border-cyan-400 text-cyan-300'
                            : darkMode
                            ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-5 h-5 rounded-md border flex items-center justify-center ${
                              isSelected ? 'bg-cyan-500 border-cyan-500 text-slate-950' : 'border-slate-600'
                            }`}
                          >
                            {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <span className="text-xs sm:text-sm font-semibold">{bot.label}</span>
                        </div>

                        <span className={`text-[11px] font-mono font-medium px-2 py-0.5 rounded-md shrink-0 ${
                          isSelected ? 'bg-cyan-500/20 text-cyan-300' : 'bg-slate-800 text-slate-400'
                        }`}>
                          ~{bot.hours}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(1)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  onClick={() => setStep(3)}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center gap-2"
                >
                  <span>Next: Software Stack</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Current Software Stack */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <label className={`block text-sm font-bold mb-3 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Which tools are currently used across your business operations?
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {stackOptions.map((tool) => {
                    const isSelected = selectedStack.includes(tool);
                    return (
                      <button
                        key={tool}
                        type="button"
                        onClick={() => toggleStack(tool)}
                        className={`p-3.5 rounded-xl text-left border flex items-center gap-3 transition-all ${
                          isSelected
                            ? 'bg-purple-950/30 border-purple-400 text-purple-300'
                            : darkMode
                            ? 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700'
                            : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div
                          className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-purple-500 border-purple-500 text-white' : 'border-slate-600'
                          }`}
                        >
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs sm:text-sm font-semibold">{tool}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <button
                  onClick={() => setStep(2)}
                  className="px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back</span>
                </button>

                <button
                  onClick={() => setStep(4)}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] hover:opacity-95 transition-all flex items-center gap-2 shadow-lg shadow-purple-500/25"
                >
                  <span>Generate AI Diagnosis →</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Diagnosis & Consultation Booking */}
          {step === 4 && (
            <div className="space-y-8">
              {/* Diagnosis Box */}
              <div
                className={`p-6 sm:p-7 rounded-2xl border ${
                  darkMode
                    ? 'bg-gradient-to-b from-[#162033] to-cyan-950/20 border-cyan-500/40 shadow-xl'
                    : 'bg-cyan-50/50 border-cyan-200 shadow-lg'
                }`}
              >
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-xs uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Customized Automation Diagnosis</span>
                </div>

                <h3 className={`text-xl sm:text-2xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Opportunity Assessment Summary for {industry}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-900/80 border border-slate-800' : 'bg-white border border-slate-200'}`}>
                    <span className="text-xs text-slate-400 block font-medium">Estimated Monthly Reclaimable Hours</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                      ~{estimatedHoursSaved}+ hrs/mo
                    </span>
                    <span className="text-[11px] text-slate-400 block mt-1">Across {selectedBottlenecks.length} identified bottlenecks</span>
                  </div>

                  <div className={`p-4 rounded-xl ${darkMode ? 'bg-slate-900/80 border border-slate-800' : 'bg-white border border-slate-200'}`}>
                    <span className="text-xs text-slate-400 block font-medium">Recommended Implementation Tier</span>
                    <span className="text-sm sm:text-base font-bold text-purple-400 block mt-1">
                      {recommendedTier}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <span className="font-semibold text-slate-400 uppercase tracking-wider block">
                    Integration Target Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedStack.map((tool) => (
                      <span
                        key={tool}
                        className={`font-mono px-2.5 py-1 rounded-md text-[11px] ${
                          darkMode ? 'bg-slate-800 text-slate-300' : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Instant Booking / Blueprint Request Form */}
              {submitStatus === 'success' ? (
                <div className="p-6 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Diagnostic Blueprint Request Received!</h4>
                  <p className="text-xs sm:text-sm text-emerald-300 max-w-md mx-auto">
                    Lesedi Tlhapane has received your assessment parameters and will prepare a tailored 1-on-1 strategy response within 24 hours.
                  </p>
                  <a
                    href="https://wa.me/27848337335"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mt-2 px-5 py-2 rounded-xl text-xs font-bold text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-colors"
                  >
                    Quick Connect on WhatsApp (084-833-7335)
                  </a>
                </div>
              ) : (
                <form onSubmit={handleAssessmentSubmit} className="space-y-4">
                  <h4 className={`text-base font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                    Send Diagnostic to Lesedi & Schedule Strategy Consultation:
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className={`px-4 py-3 text-xs rounded-xl border outline-none ${
                        darkMode ? 'bg-slate-900/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                    <input
                      type="email"
                      required
                      placeholder="Business Email *"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                      className={`px-4 py-3 text-xs rounded-xl border outline-none ${
                        darkMode ? 'bg-slate-900/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className={`px-4 py-3 text-xs rounded-xl border outline-none ${
                        darkMode ? 'bg-slate-900/80 border-slate-700 text-white' : 'bg-slate-50 border-slate-200'
                      }`}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      ← Reset Assessment
                    </button>

                    <button
                      type="submit"
                      disabled={submitStatus === 'loading'}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-md shadow-cyan-500/20 disabled:opacity-50"
                    >
                      {submitStatus === 'loading' ? (
                        <span>Submitting Diagnosis...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit & Book Strategy Session</span>
                        </>
                      )}
                    </button>
                  </div>

                  {submitStatus === 'error' && (
                    <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Submission error. Please reach out directly on WhatsApp at 084-833-7335.</span>
                    </div>
                  )}
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
