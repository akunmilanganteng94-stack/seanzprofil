import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, ChevronDown, Flame, Zap, ArrowUpRight } from 'lucide-react';

interface ProfileHeroProps {
  onExploreClick: () => void;
  onQrisClick: () => void;
}

export const ProfileHero: React.FC<ProfileHeroProps> = ({ onExploreClick, onQrisClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);

  // 3D Tilt calculation based on mouse position over card
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // degrees
    const rotateY = ((x - centerX) / centerX) * 10;

    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-24 pb-16 flex flex-col items-center justify-center px-4 sm:px-6">
      {/* SEANZ Electric Flash Animated Wordmark Section */}
      <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
        {/* Subtle Cyber Tagline */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0a112e]/80 border border-[#00A8FF]/30 backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(0,168,255,0.25)]">
          <Sparkles className="w-3.5 h-3.5 text-[#00A8FF] animate-spin" style={{ animationDuration: '4s' }} />
          <span className="text-xs font-mono font-medium tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#FF1744]">
            OFFICIAL PERSONAL BRAND
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF1744] animate-ping" />
        </div>

        {/* The Headline: SEANZ with looping cycle: muncul -> lightning flash + electric streak -> menghilang -> muncul */}
        <div className="relative py-3 sm:py-6 select-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(8px)' }}
            animate={{
              opacity: [0, 1, 1, 1, 0.4, 1],
              scale: [0.94, 1.02, 1, 1.01, 0.98, 1],
              filter: [
                'blur(6px)',
                'blur(0px)',
                'blur(0px)',
                'blur(0.5px)',
                'blur(2px)',
                'blur(0px)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.25, 0.6, 0.75, 0.9, 1],
            }}
            className="relative inline-block"
          >
            {/* Background Neon Aura */}
            <div className="absolute -inset-4 sm:-inset-8 bg-gradient-to-r from-[#0066FF]/30 via-white/10 to-[#FF1744]/30 blur-2xl opacity-60 pointer-events-none rounded-full" />

            {/* Glowing streak bar passing behind */}
            <div className="absolute top-1/2 -left-12 -right-12 h-1 bg-gradient-to-r from-transparent via-[#00A8FF] to-transparent blur-sm opacity-50 transform -translate-y-1/2 animate-pulse" />

            {/* Main Wordmark with electric sweep and glitch */}
            <h1
              className="relative font-orbitron font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-white to-[#FF1744] glitch-subtle electric-sweep"
              style={{
                textShadow:
                  '0 0 30px rgba(0, 168, 255, 0.7), 0 0 60px rgba(255, 23, 68, 0.4)',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.3)',
              }}
            >
              SEANZ
            </h1>
          </motion.div>

          <p className="mt-2 text-sm sm:text-base font-mono text-gray-300 tracking-[0.2em] uppercase">
            Future-Ready Identity <span className="text-[#00A8FF]">•</span> Precision <span className="text-[#FF1744]">•</span> Influence
          </p>
        </div>
      </div>

      {/* 🧊 CARD PROFIL: Glassmorphism + 3D Tilt */}
      <div id="profile" className="w-full max-w-md mx-auto perspective-1000">
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transformStyle: 'preserve-3d',
            transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          }}
          className="gradient-border-blue-red shadow-[0_20px_60px_-15px_rgba(0,102,255,0.35)] hover:shadow-[0_25px_70px_-10px_rgba(255,23,68,0.4)] transition-shadow duration-500"
        >
          <div className="gradient-border-inner p-6 sm:p-8 backdrop-blur-2xl bg-[#070e28]/85 relative overflow-hidden flex flex-col items-center text-center">
            {/* Ambient inner lights */}
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#FF1744]/15 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#0066FF]/20 rounded-full blur-2xl pointer-events-none" />

            {/* Online Status Pill Top Right */}
            <div className="w-full flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                <Shield className="w-3 h-3 text-[#00A8FF]" />
                VERIFIED ID
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-[11px] font-mono text-emerald-400 font-semibold shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                ONLINE
              </span>
            </div>

            {/* Foto Profil Berbentuk Lingkaran */}
            <div className="relative mb-5 group">
              {/* Outer pulsing glow rings */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#0066FF] via-[#00A8FF] to-[#FF1744] opacity-70 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
              
              {/* Spinning gradient border track */}
              <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full p-1 bg-gradient-to-tr from-[#0066FF] via-white to-[#FF1744] shadow-2xl transition-transform duration-500 group-hover:scale-105">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#050816] p-0.5">
                  <img
                    src="https://cdn.phototourl.com/free/2026-09-19-49914cf3-d0d3-4b19-ab95-ac42c593c3f3.jpg"
                    alt="SEANZ Profile"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover rounded-full select-none transition-all duration-500 group-hover:scale-110"
                    loading="eager"
                  />
                </div>
              </div>

              {/* Verified electric badge on profile */}
              <div className="absolute bottom-1 right-1 p-1.5 rounded-full bg-gradient-to-br from-[#0066FF] to-[#FF1744] text-white shadow-lg border-2 border-[#050816]">
                <Zap className="w-3.5 h-3.5 fill-current text-white" />
              </div>
            </div>

            {/* Nama SEANZ */}
            <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl tracking-wider text-white mb-1 flex items-center justify-center gap-2">
              SEANZ
            </h2>

            {/* Username / Personal Branding */}
            <p className="text-xs sm:text-sm font-mono font-medium text-[#00A8FF] tracking-wider mb-3">
              @seanz • Official Personal Brand
            </p>

            {/* Teks singkat */}
            <div className="px-4 py-2 rounded-xl bg-white/[0.04] border border-white/10 mb-6 backdrop-blur-md">
              <p className="font-space text-sm sm:text-base text-gray-200 italic font-normal tracking-wide">
                &ldquo;Welcome to SEANZ World.&rdquo;
              </p>
            </div>

            {/* Quick action buttons in profile card */}
            <div className="w-full grid grid-cols-2 gap-3 pt-2">
              <button
                id="profile-scroll-social-btn"
                onClick={onExploreClick}
                className="group relative overflow-hidden rounded-xl p-[1.5px] font-mono text-xs font-semibold tracking-wider cursor-pointer focus:outline-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#0066FF] to-[#00A8FF]" />
                <div className="relative px-3 py-2.5 rounded-[10px] bg-[#070e28] text-white flex items-center justify-center gap-1.5 group-hover:bg-transparent transition-all">
                  <span>SOCIAL MEDIA</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#00A8FF] group-hover:text-white transition-colors" />
                </div>
              </button>

              <button
                id="profile-open-qris-btn"
                onClick={onQrisClick}
                className="group relative overflow-hidden rounded-xl p-[1.5px] font-mono text-xs font-semibold tracking-wider cursor-pointer focus:outline-none"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#FF1744] to-[#D50032]" />
                <div className="relative px-3 py-2.5 rounded-[10px] bg-[#070e28] text-white flex items-center justify-center gap-1.5 group-hover:bg-transparent transition-all">
                  <Flame className="w-3.5 h-3.5 text-[#FF1744] group-hover:text-white transition-colors" />
                  <span>QRIS SEANZ</span>
                </div>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Down indicator */}
      <div className="mt-8 sm:mt-12 flex flex-col items-center text-gray-400">
        <span className="text-[10px] font-mono tracking-widest uppercase mb-1 text-gray-400">
          Scroll to explore
        </span>
        <ChevronDown className="w-4 h-4 text-[#00A8FF] animate-bounce" />
      </div>
    </section>
  );
};
