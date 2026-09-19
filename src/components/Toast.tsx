import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, Zap } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <AnimatePresence>
      {message && (
        <motion.div
          id="system-toast"
          initial={{ opacity: 0, y: -40, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          className="fixed top-20 left-1/2 -translate-x-1/2 z-50 px-5 py-3 rounded-2xl bg-[#091232]/95 backdrop-blur-2xl border border-[#00A8FF]/40 text-white shadow-[0_10px_35px_rgba(0,102,255,0.4)] flex items-center gap-3 select-none"
        >
          <div className="w-7 h-7 rounded-lg bg-[#0066FF]/20 border border-[#00A8FF]/40 flex items-center justify-center text-[#00A8FF]">
            <CheckCircle className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="flex flex-col">
            <span className="font-orbitron font-bold text-xs tracking-wider text-[#00A8FF] flex items-center gap-1">
              <Zap className="w-3 h-3 text-[#FF1744]" />
              NOTIFIKASI SEANZ
            </span>
            <span className="font-space text-xs text-gray-200">{message}</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
