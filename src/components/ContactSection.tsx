import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Zap, Phone, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const handleSendWhatsappMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedMsg = encodeURIComponent(
      `Halo SEANZ, saya ${senderName ? senderName : 'pengunjung website'}.\n\nPesan: ${message ? message : 'Saya ingin konsultasi / kerja sama dengan Anda.'}`
    );
    window.open(`https://Wa.me/085119114644?text=${encodedMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#00A8FF]/30 text-xs font-mono text-[#00A8FF] mb-3">
          <Mail className="w-3.5 h-3.5" />
          <span>DIRECT COLLABORATION</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-wider">
          GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#FF1744]">TOUCH</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-gray-300 mt-2 max-w-lg mx-auto">
          Ada penawaran bisnis, kemitraan, atau pertanyaan? Kirim pesan langsung ke WhatsApp resmi SEANZ.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Quick Contact Info Cards */}
        <div className="md:col-span-5 flex flex-col justify-between gap-4">
          <div className="p-6 rounded-2xl bg-[#08102b]/70 backdrop-blur-xl border border-white/10 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#0066FF]/20 border border-[#00A8FF]/40 flex items-center justify-center text-[#00A8FF] mb-3">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-orbitron font-bold text-lg text-white mb-1">WhatsApp Official</h4>
            <p className="text-xs font-mono text-gray-300 mb-3">+62 851-1911-4644</p>
            <a
              id="contact-wa-direct-btn"
              href="https://Wa.me/085119114644"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00A8FF] hover:text-white transition-colors"
            >
              <span>Buka Chat Langsung</span>
              <Zap className="w-3.5 h-3.5 text-[#00A8FF]" />
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-[#08102b]/70 backdrop-blur-xl border border-white/10 shadow-lg">
            <div className="w-10 h-10 rounded-xl bg-[#FF1744]/20 border border-[#FF1744]/40 flex items-center justify-center text-[#FF1744] mb-3">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-orbitron font-bold text-lg text-white mb-1">Fast Response</h4>
            <p className="text-xs font-space text-gray-300 mb-2">
              Jam operasional fleksibel. Pesan Anda akan dibalas sesegera mungkin.
            </p>
            <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400">
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Prioritas Respon Aktif</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Message Composer Form */}
        <div className="md:col-span-7">
          <form
            id="contact-quick-form"
            onSubmit={handleSendWhatsappMessage}
            className="p-6 sm:p-8 rounded-2xl bg-[#070e28]/90 backdrop-blur-xl border border-white/10 shadow-xl flex flex-col gap-4"
          >
            <h3 className="font-orbitron font-bold text-xl text-white flex items-center gap-2">
              <Send className="w-4 h-4 text-[#00A8FF]" />
              <span>Kirim Pesan WhatsApp</span>
            </h3>

            <div>
              <label htmlFor="input-sender-name" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                Nama Anda
              </label>
              <input
                id="input-sender-name"
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Masukkan nama atau brand Anda"
                className="w-full px-4 py-3 rounded-xl bg-[#05091a] border border-white/10 text-white placeholder-gray-500 font-space text-sm focus:outline-none focus:border-[#00A8FF] focus:ring-1 focus:ring-[#00A8FF] transition-all"
              />
            </div>

            <div>
              <label htmlFor="input-message-text" className="block text-xs font-mono text-gray-300 uppercase tracking-wider mb-1.5">
                Pesan / Keperluan
              </label>
              <textarea
                id="input-message-text"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tulis pesan, kolaborasi, atau pertanyaan yang ingin Anda tanyakan..."
                className="w-full px-4 py-3 rounded-xl bg-[#05091a] border border-white/10 text-white placeholder-gray-500 font-space text-sm focus:outline-none focus:border-[#00A8FF] focus:ring-1 focus:ring-[#00A8FF] transition-all resize-none"
              />
            </div>

            <button
              id="btn-submit-contact-wa"
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#0066FF] via-[#00A8FF] to-[#FF1744] text-white font-orbitron font-bold text-xs sm:text-sm tracking-wider hover:shadow-[0_0_25px_rgba(0,168,255,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer mt-1"
            >
              <Send className="w-4 h-4" />
              <span>KIRIM VIA WHATSAPP</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
