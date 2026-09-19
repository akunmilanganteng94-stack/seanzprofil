import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Zap, ShieldCheck } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isFinished, setIsFinished] = useState(false);

  const fullText = 'SEANZ';

  // Typing effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setTypedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 140);

    return () => clearInterval(interval);
  }, []);

  // Glitch effect intervals
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 120);
    }, 900);

    return () => clearInterval(glitchInterval);
  }, []);

  // Progress counter
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 650);
          }, 350);
          return 100;
        }
        // Organic acceleration
        const increment = Math.floor(Math.random() * 8) + 3;
        return Math.min(100, prev + increment);
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          id="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08, filter: 'blur(10px)' }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white select-none px-6"
        >
          {/* Ambient Glows */}
          <div className="absolute w-80 h-80 rounded-full bg-[#0066FF]/20 blur-[100px] pointer-events-none" />
          <div className="absolute w-72 h-72 rounded-full bg-[#FF1744]/15 blur-[90px] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center max-w-sm w-full">
            {/* Cyber Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#00A8FF]/30 text-xs font-mono tracking-widest text-[#00A8FF] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00A8FF] animate-ping" />
              <span>INITIALIZING SYSTEM</span>
            </div>

            {/* Main SEANZ animated wordmark */}
            <div className="relative my-4 flex items-center justify-center">
              {/* Electric beam sweep behind */}
              <div className="absolute -inset-x-8 h-12 bg-gradient-to-r from-transparent via-[#00A8FF]/30 to-transparent blur-md animate-pulse" />

              <h1
                className={`font-orbitron font-black text-5xl sm:text-6xl md:text-7xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] via-white to-[#FF1744] select-none transition-all duration-75 ${
                  glitchActive ? 'translate-x-1 filter drop-shadow-[2px_0_#FF1744]' : ''
                }`}
                style={{
                  filter: glitchActive
                    ? 'drop-shadow(2px 0 0 #00A8FF) drop-shadow(-2px 0 0 #FF1744)'
                    : 'drop-shadow(0 0 25px rgba(0, 168, 255, 0.6))',
                }}
              >
                {typedText}
                <span className="inline-block w-1.5 h-10 md:h-14 ml-1 bg-[#00A8FF] animate-pulse align-middle" />
              </h1>
            </div>

            {/* Subtitle */}
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-gray-400 mb-8 flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-[#00A8FF] animate-bounce" />
              <span>Personal Brand • Futuristic Hub</span>
            </p>

            {/* Progress Bar Container */}
            <div className="w-full bg-[#0c1432] rounded-full p-1 border border-white/10 shadow-[0_0_20px_rgba(0,102,255,0.2)]">
              <div className="relative h-2 w-full rounded-full overflow-hidden bg-[#070b1c]">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-[#0066FF] via-[#00A8FF] to-[#FF1744]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.1 }}
                />
              </div>
            </div>

            {/* Percentage & Status Details */}
            <div className="w-full flex items-center justify-between mt-3 text-xs font-mono text-gray-400">
              <span className="flex items-center gap-1 text-[#00A8FF]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>AUTHENTICATING</span>
              </span>
              <span className="text-white font-semibold font-orbitron tracking-wider">
                {progress}%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
