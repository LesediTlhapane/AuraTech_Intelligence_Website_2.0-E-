import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, Phone } from 'lucide-react';

interface ChatWidgetProps {
  darkMode: boolean;
}

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}

export const ChatWidget: React.FC<ChatWidgetProps> = ({ darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "👋 Hi! I'm Aura Assistant — an AI agent built by Lesedi. Ask me about our AI agents, intelligent workflows, smart websites, pricing, or how we can automate your business!",
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const getBotResponse = (message: string): string => {
    const msg = message.toLowerCase();
    if (msg.match(/agent|agents|digital worker|bot/)) {
      return "🤖 We build 5 types of AI Agents:\n\n1️⃣ Customer Experience (from R1,850)\n2️⃣ Operations & Admin (from R2,450)\n3️⃣ Knowledge Base Brain (from R2,750)\n4️⃣ HR & Recruitment (from R2,450)\n5️⃣ Custom Agent (from R3,650)\n\nWhich agent type fits your operational workflow?";
    } else if (msg.match(/workflow|workflows|automation/)) {
      return "⚙️ Intelligent Workflows:\n\n• Lead-to-Customer (from R3,200)\n• Invoice-to-Payment (from R3,800)\n• Support Ticket Auto-Routing (from R3,400)\n• Employee Onboarding (from R2,900)\n• System Integration (from R2,600)\n• Custom Workflow (from R3,900)";
    } else if (msg.match(/website|web|site|smart website/)) {
      return "🌐 Smart Website Development:\n\n• Custom responsive, modern UX\n• AI-powered embedded chat agents\n• Automated lead generation capture\n• Fast load speeds & SEO optimized\n\nStarting from R2,450 — let's elevate your online business presence!";
    } else if (msg.match(/price|cost|pricing|rate|quote/)) {
      return "💰 Startup-Friendly Pricing Structure:\n\n• AI Scoping & Audit Blueprint: from R750\n• AI Agents: from R1,850\n• Custom Agent + Workflow: from R2,450\n• Workflows: from R2,600\n• Smart Websites: from R2,450\n• AI-as-a-Service Retainer: from R1,850/month";
    } else if (msg.match(/lesedi|founder|about you|who are you/)) {
      return "🧠 Lesedi Tlhapane is an AI Technical Specialist based in Pretoria, currently selected for the prestigious 12-month eStudy AI Entrepreneurship Incubation Programme. He builds production-ready AI agents, workflows, and websites.";
    } else if (msg.match(/contact|reach|call|whatsapp|email|phone/)) {
      return "📬 You can reach Lesedi directly:\n\n• WhatsApp/Call: 084-833-7335\n• Email: auratechintel@outlook.com\n• LinkedIn: linkedin.com/in/lesedi-tlhapane-0309b826b";
    } else if (msg.match(/portfolio|projects|github|demo/)) {
      return "📁 Selected Portfolio Highlights:\n\n• Orbit-AI (AI Project Management)\n• Leave Management System (HR AI + Workflow)\n• Wellness Chatbot (Live n8n Demo)\n• AI Discovery Stack (TypeScript Platform)\n• Trolie Forward Movement (E-commerce)\n• Clean Sole Haven (Business Website)";
    } else {
      return "Thanks for asking! You can explore AI Agents, Workflows, Smart Websites, Pricing, or Portfolio. For instant scoping or custom blueprints, WhatsApp Lesedi directly at 084-833-7335.";
    }
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || inputVal).trim();
    if (!text) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');

    setTimeout(() => {
      const botReply: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: getBotResponse(text),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
    }, 450);
  };

  const quickPrompts = [
    'AI Agents & Pricing',
    'Intelligent Workflows',
    'Smart Websites',
    'Contact WhatsApp',
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div
          className={`w-[90vw] sm:w-[380px] h-[520px] max-h-[80vh] rounded-2xl shadow-2xl border flex flex-col overflow-hidden mb-3 animate-in fade-in slide-in-from-bottom-5 duration-200 ${
            darkMode
              ? 'bg-[#162033] border-cyan-500/30 shadow-black/60'
              : 'bg-white border-purple-200 shadow-xl'
          }`}
        >
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-none">Aura AI Assistant</h4>
                <span className="text-[11px] text-cyan-100 flex items-center gap-1 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse"></span>
                  Online • 24/7 Digital Worker
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Prompts */}
          <div
            className={`p-2.5 border-b flex gap-1.5 overflow-x-auto no-scrollbar ${
              darkMode ? 'bg-slate-900/60 border-slate-800' : 'bg-slate-50 border-slate-200'
            }`}
          >
            {quickPrompts.map((prompt) => (
              <button
                key={prompt}
                onClick={() => handleSend(prompt)}
                className={`text-[11px] font-medium whitespace-nowrap px-2.5 py-1 rounded-full border transition-all ${
                  darkMode
                    ? 'bg-slate-800 border-slate-700 text-cyan-300 hover:border-cyan-400'
                    : 'bg-white border-slate-200 text-purple-700 hover:border-purple-300 shadow-xs'
                }`}
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Area */}
          <div
            className={`flex-1 p-4 overflow-y-auto space-y-3 ${
              darkMode ? 'bg-[#0b1120]' : 'bg-slate-50/50'
            }`}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-[#6A4FD9] text-white rounded-br-none'
                      : darkMode
                      ? 'bg-[#1e2a44] text-slate-200 rounded-bl-none border border-slate-800'
                      : 'bg-white text-slate-800 rounded-bl-none border border-slate-200 shadow-xs'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className={`p-3 border-t flex items-center gap-2 ${
              darkMode ? 'bg-[#0f172a] border-slate-800' : 'bg-white border-slate-200'
            }`}
          >
            <input
              type="text"
              placeholder="Ask about AI agents, pricing..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              className={`flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-full border outline-none ${
                darkMode
                  ? 'bg-[#162033] border-slate-700 text-white focus:border-cyan-400'
                  : 'bg-slate-100 border-slate-200 text-slate-900 focus:border-purple-600'
              }`}
            />
            <button
              type="submit"
              className="p-2 rounded-full bg-[#6A4FD9] text-white hover:bg-purple-700 transition-colors shadow-md shrink-0"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-14 h-14 rounded-full bg-gradient-to-r from-[#6A4FD9] to-[#16C5D8] text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Toggle AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>
    </div>
  );
};
