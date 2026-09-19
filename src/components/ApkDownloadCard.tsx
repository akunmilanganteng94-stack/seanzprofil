import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Download, ShieldCheck, CheckCircle2, Star, Zap } from 'lucide-react';

export const ApkDownloadCard: React.FC = () => {
  const playStoreUrl = 'https://play.google.com/store/apps/details?id=com.nexapayid';

  return (
    <section id="apk-download" className="relative py-12 px-4 sm:px-6 max-w-4xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative rounded-3xl p-1 bg-gradient-to-r from-[#0066FF] via-[#00A8FF] to-[#FF1744] shadow-[0_15px_50px_-10px_rgba(0,168,255,0.3)]"
      >
        <div className="rounded-[23px] bg-[#070e28]/95 backdrop-blur-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
          {/* Cyber Accent Lines */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[#00A8FF]/20 to-transparent blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            {/* Left Content */}
            <div className="flex items-start gap-4 sm:gap-6">
              {/* App Icon / Device badge */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-[#0066FF] to-[#FF1744] p-0.5 shrink-0 shadow-lg shadow-[#0066FF]/30">
                <div className="w-full h-full rounded-[14px] bg-[#050816] flex flex-col items-center justify-center text-white">
                  <Smartphone className="w-8 h-8 sm:w-10 sm:h-10 text-[#00A8FF]" />
                  <span className="text-[8px] font-mono tracking-tighter text-[#FF1744] font-bold">APK</span>
                </div>
              </div>

              {/* Details */}
              <div>
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#00A8FF]/10 border border-[#00A8FF]/30 text-[11px] font-mono text-[#00A8FF] mb-2">
                  <ShieldCheck className="w-3 h-3 text-emerald-400" />
                  <span>RESMI PLAY STORE • NO KYC</span>
                </div>

                <h3 className="font-orbitron font-extrabold text-2xl sm:text-3xl text-white tracking-wider flex items-center gap-2">
                  QRIS TANPA KTP
                </h3>

                <p className="font-space text-sm sm:text-base text-gray-300 mt-1 leading-relaxed">
                  Download aplikasi QRIS tanpa KTP sekarang juga untuk kemudahan transaksi bisnis dan personal Anda.
                </p>

                {/* Feature Pills */}
                <div className="flex flex-wrap gap-2 mt-3 text-xs font-mono text-gray-300">
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Instant Aktif</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">
                    <Zap className="w-3.5 h-3.5 text-[#00A8FF]" />
                    <span>Bebas Ribet</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10">
                    <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                    <span>NexaPay</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Right Action Button */}
            <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
              <a
                id="btn-download-apk"
                href={playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#0066FF] via-[#00A8FF] to-[#FF1744] text-white font-orbitron font-bold text-sm tracking-wider shadow-[0_0_30px_rgba(0,168,255,0.5)] hover:shadow-[0_0_40px_rgba(255,23,68,0.6)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
              >
                <Download className="w-5 h-5 animate-bounce" />
                <span>DOWNLOAD APK</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
