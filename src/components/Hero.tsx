import React, { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  ArrowRight,
  Bot,
  Workflow,
  ShieldCheck,
  TrendingUp,
  Check,
  Sparkles,
  Compass,
} from 'lucide-react';
import { useTypewriter } from '../hooks/useTypewriter';

interface HeroProps {
  darkMode: boolean;
}

const TOTAL_FRAMES = 97;

export const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const loadedCountRef = useRef<number>(0);

  // Normalised coordinates for instant face tracking (0 to 1, default center 0.5)
  const targetCoordsRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const currentCoordsRef = useRef<{ x: number; y: number }>({ x: 0.5, y: 0.5 });
  const isHoveredRef = useRef<boolean>(false);

  const [hudState, setHudState] = useState<{ active: boolean; xPct: number; yPct: number }>({
    active: false,
    xPct: 50,
    yPct: 50,
  });

  // Multi-select service pills state
  const [selectedServices, setSelectedServices] = useState<string[]>(['AI Agents']);

  const serviceOptions = [
    { id: 'AI Agents', label: 'AI Agents' },
    { id: 'Workflows', label: 'Workflows' },
    { id: 'Smart Web', label: 'Smart Web' },
    { id: 'AI Retainer', label: 'AI Retainer' },
  ];

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  // Typewriter effect
  const { displayed, done } = useTypewriter("we'd love to\nhear from you!", 35, 500);

  // Preload all 97 frames into memory for ZERO-latency 60fps/120fps scrubbing
  useEffect(() => {
    const images: HTMLImageElement[] = [];
    loadedCountRef.current = 0;

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      const numStr = String(i).padStart(3, '0');
      img.src = `/frames/frame_${numStr}.jpg`;
      img.onload = () => {
        loadedCountRef.current += 1;
      };
      images.push(img);
    }
    imagesRef.current = images;
  }, []);

  // Zero-Latency High-Performance Canvas Render Loop
  useEffect(() => {
    let animId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    // Mobile auto-wander animation phase
    let autoPhase = 0;

    const renderLoop = () => {
      const isMobile = window.innerWidth < 1024;

      if (isMobile) {
        // Smooth ambient breathing and gazing cycle for mobile screens
        autoPhase += 0.02;
        targetCoordsRef.current = {
          x: 0.5 + Math.sin(autoPhase) * 0.35,
          y: 0.5 + Math.cos(autoPhase * 0.8) * 0.15,
        };
      }

      // Snappy, silky smooth interpolation (0.24 factor ensures instant zero-lag feel)
      const lerpSpeed = 0.24;
      currentCoordsRef.current.x += (targetCoordsRef.current.x - currentCoordsRef.current.x) * lerpSpeed;
      currentCoordsRef.current.y += (targetCoordsRef.current.y - currentCoordsRef.current.y) * lerpSpeed;

      const curX = currentCoordsRef.current.x;
      const curY = currentCoordsRef.current.y;

      // Select frame mapped directly to horizontal cursor position
      const frameIdx = Math.max(0, Math.min(TOTAL_FRAMES - 1, Math.round(curX * (TOTAL_FRAMES - 1))));
      // Try active frame, fallback to frame 48 (center resting face), or frame 0
      const img = imagesRef.current[frameIdx] || imagesRef.current[48] || imagesRef.current[0];

      const width = canvas.width;
      const height = canvas.height;

      if (img && img.complete && img.naturalWidth > 0 && width > 0 && height > 0) {
        // Clear canvas
        ctx.fillStyle = '#020617';
        ctx.fillRect(0, 0, width, height);

        // Calculate scaling ensuring full container fill and centered face framing
        const scale = Math.max(
          width / (img.naturalWidth * 0.55),
          height / (img.naturalHeight * 0.90)
        );
        const renderW = img.naturalWidth * scale;
        const renderH = img.naturalHeight * scale;

        // 2D Parallax offset: face shifts in the direction of the mouse
        const shiftX = (curX - 0.5) * 32;
        const shiftY = (curY - 0.5) * 22;

        // Anchor face center (70.5% horizontal, 40% vertical in source) directly to canvas center
        const offsetX = (width * 0.5) - (renderW * 0.705) + shiftX;
        const offsetY = (height * 0.44) - (renderH * 0.40) + shiftY;

        ctx.drawImage(img, offsetX, offsetY, renderW, renderH);
      }

      animId = requestAnimationFrame(renderLoop);
    };

    // Canvas resize handling with Device Pixel Ratio for crystal clear sharpness
    const updateCanvasSize = () => {
      if (!canvas || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    animId = requestAnimationFrame(renderLoop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  // Card Mouse Move Handler — Instantaneous cursor tracking inside the box
  const handleCardMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const normX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    const normY = Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height));

    targetCoordsRef.current = { x: normX, y: normY };
    isHoveredRef.current = true;

    setHudState({
      active: true,
      xPct: Math.round(normX * 100),
      yPct: Math.round(normY * 100),
    });
  }, []);

  // Mouse leave — Smoothly return face to center forward-facing pose
  const handleCardMouseLeave = useCallback(() => {
    targetCoordsRef.current = { x: 0.5, y: 0.5 };
    isHoveredRef.current = false;
    setHudState((prev) => ({ ...prev, active: false }));
  }, []);

  // Global window mouse move for wide screen tracking when not hovering directly
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024 || isHoveredRef.current) return;
      if (!cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Calculate directional vector from box center to cursor
      const dx = (e.clientX - cardCenterX) / (window.innerWidth * 0.7);
      const dy = (e.clientY - cardCenterY) / (window.innerHeight * 0.7);

      const normX = Math.max(0.02, Math.min(0.98, 0.5 + dx * 0.5));
      const normY = Math.max(0.02, Math.min(0.98, 0.5 + dy * 0.5));

      targetCoordsRef.current = { x: normX, y: normY };
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-16 px-4 sm:px-6 lg:px-8 transition-colors ${
        darkMode ? 'bg-[#0b1120]' : 'bg-white'
      }`}
    >
      {/* Background image subtle backdrop */}
      <div
        className="absolute inset-0 pointer-events-none z-0 bg-cover bg-center bg-no-repeat transition-opacity duration-300"
        style={{
          backgroundImage: `url('/home.png')`,
          opacity: darkMode ? 0.14 : 0.22,
        }}
      />

      {/* Background ambient lighting */}
      <div
        className={`absolute inset-0 pointer-events-none z-0 ${
          darkMode
            ? 'bg-radial from-cyan-500/10 via-[#0b1120]/80 to-[#0b1120]'
            : 'bg-radial from-cyan-500/5 via-slate-50/70 to-white'
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* ================= LEFT COLUMN: HERO TEXT & CONTROLS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* eStudy AI Incubation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-6 backdrop-blur-md self-start transition-all hover:scale-105 shadow-sm border-cyan-500/30 bg-cyan-950/20">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
                </span>
                <span
                  className={`text-xs sm:text-sm font-semibold ${
                    darkMode ? 'text-cyan-300' : 'text-cyan-800'
                  }`}
                >
                  eStudy AI Incubation — Current Cohort
                </span>
              </div>
              <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-400 font-mono">
                Pretoria, SA
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-5">
              <span className={darkMode ? 'text-white' : 'text-slate-900'}>
                AI Agents &{' '}
              </span>
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-[#6A4FD9] bg-clip-text text-transparent">
                Intelligent Workflows.
              </span>
            </h1>

            {/* Subtitle Description */}
            <p
              className={`text-base sm:text-lg md:text-xl font-normal leading-relaxed mb-7 max-w-2xl ${
                darkMode ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Deploy autonomous digital workers and end-to-end automation that operate 24/7 —
              from customer support to back-office processes. Built for African businesses by a
              Pretoria-based AI specialist.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-8">
              <a
                href="#contact"
                id="hero-free-audit-btn"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#6A4FD9] to-[#5840b8] hover:from-[#7b61eb] hover:to-[#6A4FD9] transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 text-sm sm:text-base"
              >
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-300" />
                <span>Free AI Audit Blueprint</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>

              <a
                href="#agents"
                id="hero-explore-agents-btn"
                className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all hover:-translate-y-0.5 text-sm sm:text-base ${
                  darkMode
                    ? 'border-cyan-500/40 text-cyan-300 bg-cyan-950/20 hover:bg-cyan-900/30'
                    : 'border-slate-300 text-slate-800 bg-white hover:bg-slate-50 shadow-sm'
                }`}
              >
                <span>Explore AI Agents</span>
                <Bot className="w-4 h-4 text-cyan-400" />
              </a>
            </div>

            {/* Interactive Multi-Select Service Pills */}
            <div className="pt-2 pb-4">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-sm font-semibold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  What sort of service?
                </span>
                <span className="text-xs text-slate-400">Select all that apply</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                {serviceOptions.map((opt) => {
                  const isSelected = selectedServices.includes(opt.id);
                  return (
                    <motion.button
                      key={opt.id}
                      type="button"
                      onClick={() => toggleService(opt.id)}
                      whileTap={{ scale: 0.96 }}
                      className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/20 ring-1 ring-emerald-500/40'
                          : darkMode
                          ? 'bg-slate-800/90 text-slate-200 border border-slate-700 hover:bg-slate-700/80'
                          : 'bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55 shadow-xs'
                      }`}
                    >
                      {isSelected && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                        >
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                        </motion.span>
                      )}
                      <span>{opt.label}</span>
                    </motion.button>
                  );
                })}
              </div>

              {/* Contingent Feedback Status Banner */}
              <AnimatePresence mode="wait">
                {selectedServices.length === 0 ? (
                  <motion.p
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    className="text-xs italic text-slate-400 py-1"
                  >
                    Please click to select services above.
                  </motion.p>
                ) : (
                  <motion.div
                    key="selected"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    className={`mt-1 p-3 rounded-xl border flex items-center justify-between gap-3 text-xs ${
                      darkMode
                        ? 'bg-[#162033]/80 border-cyan-500/30 text-slate-200'
                        : 'bg-[#FAFBF9] border-[#E2E8E2] text-slate-800'
                    }`}
                  >
                    <span className="truncate">
                      Ready to inquire about:{' '}
                      <strong className="text-cyan-400 font-semibold">
                        {selectedServices.join(', ')}
                      </strong>
                    </span>
                    <a
                      href="#contact"
                      className="shrink-0 text-[#4D6D47] dark:text-emerald-400 uppercase text-xs font-bold hover:underline flex items-center gap-1"
                    >
                      <span>Let's Go</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Feature Highlights Grid */}
            <div className="mt-4 pt-6 border-t border-slate-700/20 grid grid-cols-2 sm:grid-cols-4 gap-3.5 text-xs font-medium">
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  Autonomous AI Agents
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-pink-400 shrink-0" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  Workflow Automation
                </span>
              </div>

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  Enterprise-Grade Security
                </span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-amber-400 shrink-0" />
                <span className={darkMode ? 'text-slate-300' : 'text-slate-700'}>
                  Tailored for Africa
                </span>
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: ZERO-LATENCY HIGH-FPS CANVAS FACE TRACKER ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-5 relative flex flex-col items-center justify-center"
          >
            {/* Stable Box Container */}
            <div
              ref={cardRef}
              onMouseMove={handleCardMouseMove}
              onMouseLeave={handleCardMouseLeave}
              className="relative w-full aspect-square sm:aspect-[4/3] lg:aspect-[4/5] max-h-[560px] rounded-3xl overflow-hidden border-2 border-cyan-500/40 shadow-2xl shadow-cyan-950/50 bg-slate-950 group cursor-crosshair select-none"
            >
              {/* Ultra-Fast Direct Canvas Renderer (0ms Frame Latency) */}
              <canvas
                ref={canvasRef}
                className="w-full h-full object-cover block pointer-events-none"
              />

              {/* Dynamic Eye-Light Reflection following cursor position */}
              {hudState.active && (
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                  style={{
                    background: `radial-gradient(circle at ${hudState.xPct}% ${hudState.yPct}%, rgba(22, 197, 216, 0.22), transparent 55%)`,
                  }}
                />
              )}

              {/* Subtle aesthetic gradient overlay */}
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/75 via-transparent to-black/20" />

              {/* Interactive HUD Header */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/65 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-[11px] font-mono shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" />
                  <span>Real-Time Face Engine</span>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono">
                  <Compass className="w-3 h-3 text-cyan-400" />
                  <span>{hudState.active ? `Gaze: ${hudState.xPct}% / ${hudState.yPct}%` : 'Hover to Guide Gaze'}</span>
                </div>
              </div>

              {/* Bottom Interactive Typewriter Banner */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 text-white z-10">
                <div className="flex items-center gap-2 mb-1 text-[11px] font-semibold uppercase tracking-wider text-cyan-400 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Aura Live Engine</span>
                </div>
                <p className="text-sm font-medium tracking-tight whitespace-pre-line text-slate-100">
                  {displayed}
                  {!done && (
                    <span className="inline-block w-[2px] h-[1.1em] bg-cyan-400 align-middle ml-[2px] animate-blink" />
                  )}
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
