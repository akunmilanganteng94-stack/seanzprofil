import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  QrCode, 
  Maximize2, 
  Download, 
  X, 
  Copy, 
  Check, 
  Wallet, 
  ExternalLink,
  ShieldCheck,
  Zap,
  Info
} from 'lucide-react';

interface QrisSectionProps {
  onShowToast: (message: string) => void;
}

export const QrisSection: React.FC<QrisSectionProps> = ({ onShowToast }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const qrisImageUrl = 'https://cdn.phototourl.com/free/2026-09-19-6343a9d6-f556-4de8-8b07-1162aec67707.jpg';
  const danaNumber = '083161170378';

  const handleCopyDana = async () => {
    try {
      await navigator.clipboard.writeText(danaNumber);
      setIsCopied(true);
      onShowToast('Nomor DANA berhasil disalin!');
      setTimeout(() => setIsCopied(false), 2500);
    } catch {
      // Fallback
      const textArea = document.createElement('textarea');
      textArea.value = danaNumber;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setIsCopied(true);
      onShowToast('Nomor DANA berhasil disalin!');
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const handleDownloadQris = async () => {
    setDownloading(true);
    try {
      const response = await fetch(qrisImageUrl, { mode: 'cors' });
      const blob = await response.blob();
      const blobUrl = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = blobUrl;
      link.download = 'QRIS-SEANZ.jpg';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(blobUrl);
      onShowToast('Gambar QRIS berhasil diunduh!');
    } catch {
      // Fallback direct open in new window for download
      window.open(qrisImageUrl, '_blank');
      onShowToast('Membuka gambar QRIS resolusi tinggi...');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section id="qris" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF1744]/10 border border-[#FF1744]/30 text-xs font-mono text-[#FF1744] mb-3">
          <QrCode className="w-3.5 h-3.5" />
          <span>PAYMENT & SUPPORT</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-wider">
          QRIS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#FF1744]">SEANZ</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-gray-300 mt-2 max-w-lg mx-auto">
          Scan QRIS untuk pembayaran instant atau transfer via e-wallet resmi.
        </p>
      </div>

      {/* Main Glassmorphism Card */}
      <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#0066FF]/30 via-white/10 to-[#FF1744]/30 shadow-[0_20px_60px_-15px_rgba(0,102,255,0.25)]">
        <div className="rounded-[23px] bg-[#070e28]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 relative overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#FF1744]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#0066FF]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* QRIS Image Preview Frame */}
            <div className="md:col-span-6 flex flex-col items-center">
              <div className="relative group w-full max-w-[280px] sm:max-w-[320px] aspect-square rounded-2xl p-3 bg-[#0a1435] border border-[#00A8FF]/30 shadow-[0_0_30px_rgba(0,102,255,0.2)]">
                {/* Cyber Corner brackets */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-[#00A8FF]" />
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-[#FF1744]" />
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-[#00A8FF]" />
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-[#FF1744]" />

                <div className="w-full h-full rounded-xl overflow-hidden bg-white p-2 flex items-center justify-center relative cursor-pointer" onClick={() => setModalOpen(true)}>
                  <img
                    src={qrisImageUrl}
                    alt="QRIS SEANZ"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#050816]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#0066FF] text-white text-xs font-mono font-semibold shadow-lg">
                      <Maximize2 className="w-3.5 h-3.5" />
                      Klik untuk Zoom
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons under QRIS */}
              <div className="w-full max-w-[280px] sm:max-w-[320px] mt-4 flex gap-3">
                <button
                  id="btn-lihat-qris"
                  onClick={() => setModalOpen(true)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00A8FF] text-white font-mono text-xs font-bold tracking-wider hover:shadow-[0_0_20px_rgba(0,168,255,0.5)] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>LIHAT QRIS</span>
                </button>
                <button
                  id="btn-download-qris-quick"
                  onClick={handleDownloadQris}
                  disabled={downloading}
                  className="py-2.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white font-mono text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                  title="Download QRIS"
                >
                  <Download className="w-4 h-4 text-[#00A8FF]" />
                </button>
              </div>
            </div>

            {/* Information & DANA Section */}
            <div className="md:col-span-6 flex flex-col justify-center space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 mb-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>TERDAFTAR RESMI & AMAN</span>
                </div>
                <h3 className="font-orbitron font-bold text-2xl text-white">
                  Semua Pembayaran Nasional
                </h3>
                <p className="font-space text-sm text-gray-300 mt-2 leading-relaxed">
                  Dapat discan dengan BCA, Mandiri, BRI, BNI, Dana, OVO, GoPay, ShopeePay, LinkAja, dan seluruh mobile banking berlogo QRIS.
                </p>
              </div>

              {/* DANA Card Details */}
              <div className="p-5 rounded-2xl bg-[#0c163b]/80 border border-white/10 shadow-lg relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-[#0066FF]/20 flex items-center justify-center border border-[#0066FF]/40 text-[#00A8FF]">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider block">
                        E-Wallet Manual Transfer
                      </span>
                      <span className="font-orbitron font-bold text-base text-white">
                        DANA
                      </span>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF]/20 text-[#00A8FF] text-[10px] font-mono font-semibold">
                    AKTIF
                  </span>
                </div>

                {/* Account Number Display */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-[#060b20] border border-white/10 mb-3">
                  <span className="font-mono text-lg sm:text-xl font-bold tracking-widest text-white">
                    {danaNumber}
                  </span>
                  <span className="text-xs font-mono text-gray-400">A.N. SEANZ</span>
                </div>

                {/* Copy Button */}
                <button
                  id="btn-salin-dana"
                  onClick={handleCopyDana}
                  className={`w-full py-3 px-4 rounded-xl font-mono text-xs sm:text-sm font-bold tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                    isCopied
                      ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                      : 'bg-gradient-to-r from-[#FF1744] to-[#D50032] text-white hover:shadow-[0_0_20px_rgba(255,23,68,0.5)]'
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>NOMOR DANA DISALIN!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>SALIN NOMOR DANA</span>
                    </>
                  )}
                </button>
              </div>

              {/* Helpful Notice */}
              <div className="flex items-start gap-2 text-xs font-space text-gray-400">
                <Info className="w-4 h-4 text-[#00A8FF] shrink-0 mt-0.5" />
                <span>
                  Konfirmasi pembayaran Anda melalui kontak WhatsApp Real SEANZ untuk verifikasi instan.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen QRIS Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            id="modal-fullscreen-qris"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#050816]/90 backdrop-blur-xl"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg rounded-3xl p-1 bg-gradient-to-b from-[#00A8FF] via-white/20 to-[#FF1744] shadow-2xl overflow-hidden"
            >
              <div className="rounded-[23px] bg-[#070e28] p-6 sm:p-8 flex flex-col items-center">
                {/* Modal Header */}
                <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                  <div className="flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#00A8FF]" />
                    <h3 className="font-orbitron font-bold text-lg text-white">
                      QRIS RESMI SEANZ
                    </h3>
                  </div>
                  <button
                    id="btn-close-modal-qris"
                    onClick={() => setModalOpen(false)}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
                    aria-label="Tutup QRIS"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Big High-Res QRIS Image */}
                <div className="w-full max-w-xs sm:max-w-sm aspect-square bg-white rounded-2xl p-4 shadow-2xl flex items-center justify-center mb-6">
                  <img
                    src={qrisImageUrl}
                    alt="QRIS SEANZ Fullscreen"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain select-none"
                  />
                </div>

                {/* Modal Buttons */}
                <div className="w-full flex flex-col sm:flex-row gap-3">
                  <button
                    id="btn-modal-download-qris"
                    onClick={handleDownloadQris}
                    disabled={downloading}
                    className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#00A8FF] to-[#FF1744] text-white font-mono text-xs sm:text-sm font-bold tracking-wider hover:shadow-[0_0_25px_rgba(0,168,255,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>{downloading ? 'MENGUNDUH...' : 'DOWNLOAD QRIS'}</span>
                  </button>

                  <button
                    id="btn-modal-open-image"
                    onClick={() => window.open(qrisImageUrl, '_blank')}
                    className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-200 hover:text-white font-mono text-xs sm:text-sm font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>BUKA ASLI</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
