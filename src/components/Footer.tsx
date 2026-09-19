import React from 'react';
import { ArrowUp, Zap, Shield } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer id="main-footer" className="relative pt-12 pb-24 md:pb-12 px-4 sm:px-6 border-t border-white/10 z-10 bg-[#050816]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center">
        {/* Brand Mark */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-[#0066FF] to-[#FF1744] p-[1.5px]">
            <div className="w-full h-full bg-[#050816] rounded-[6px] flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-[#00A8FF]" />
            </div>
          </div>
          <span className="font-orbitron font-extrabold text-lg text-white tracking-widest">
            SEAN<span className="text-[#FF1744]">Z</span>
          </span>
        </div>

        {/* Copyright notice required by user prompt */}
        <p className="font-space text-xs sm:text-sm text-gray-400 font-medium">
          © 2026 SEANZ — All Rights Reserved.
        </p>

        {/* Small required text: "Built with ⚡ by SEANZ" */}
        <p className="font-mono text-[11px] text-gray-500 mt-2 tracking-wider flex items-center justify-center gap-1">
          Built with <span className="text-amber-400">⚡</span> by <span className="text-[#00A8FF] font-semibold">SEANZ</span>
        </p>

        {/* Security & Authenticity badge */}
        <div className="mt-4 flex items-center gap-4 text-[10px] font-mono text-gray-500">
          <span className="flex items-center gap-1">
            <Shield className="w-3 h-3 text-[#00A8FF]" />
            Encrypted & Secure Bio
          </span>
          <span>•</span>
          <span>Official Identity Hub</span>
        </div>

        {/* Back to top button */}
        <button
          id="btn-footer-back-to-top"
          onClick={onScrollToTop}
          className="mt-6 p-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all cursor-pointer group shadow-sm"
          title="Kembali ke atas"
          aria-label="Kembali ke atas"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  );
};
