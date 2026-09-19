import React from 'react';
import { motion } from 'motion/react';
import { 
  MessageCircle, 
  Instagram, 
  Radio, 
  ExternalLink, 
  Sparkles,
  Zap,
  Music2,
  Users
} from 'lucide-react';

export const SocialLinks: React.FC = () => {
  const socials = [
    {
      id: 'tiktok',
      title: 'TikTok SEANZ',
      username: '@fizyysukamessi',
      url: 'https://www.tiktok.com/@fizyysukamessi',
      icon: Music2,
      tag: 'CONTENT & VIRAL',
      accentColor: '#FF1744',
      gradient: 'from-[#FF1744] to-[#D50032]',
      borderHover: 'hover:border-[#FF1744]/60',
      glowClass: 'hover:shadow-[0_10px_30px_-5px_rgba(255,23,68,0.4)]',
      bgIcon: 'bg-[#FF1744]/15 text-[#FF1744]',
    },
    {
      id: 'whatsapp-channel',
      title: 'Saluran WhatsApp',
      username: 'Official Channel • Update Tercepat',
      url: 'https://whatsapp.com/channel/0029Vb8fCwQLY6cyjoTU4y0u',
      icon: Radio,
      tag: 'COMMUNITY & INFO',
      accentColor: '#00A8FF',
      gradient: 'from-[#0066FF] to-[#00A8FF]',
      borderHover: 'hover:border-[#00A8FF]/60',
      glowClass: 'hover:shadow-[0_10px_30px_-5px_rgba(0,168,255,0.4)]',
      bgIcon: 'bg-[#00A8FF]/15 text-[#00A8FF]',
    },
    {
      id: 'whatsapp-group',
      title: 'Grup WhatsApp SEANZ',
      username: 'Official Group • Komunitas & Silaturahmi',
      url: 'https://chat.whatsapp.com/KKVc4iRVzNxD8mddsJRX30?mode=gi_t',
      icon: Users,
      tag: 'OFFICIAL COMMUNITY',
      accentColor: '#0066FF',
      gradient: 'from-[#0066FF] to-[#00A8FF]',
      borderHover: 'hover:border-[#0066FF]/60',
      glowClass: 'hover:shadow-[0_10px_30px_-5px_rgba(0,102,255,0.45)]',
      bgIcon: 'bg-[#0066FF]/15 text-[#00A8FF]',
    },
    {
      id: 'instagram',
      title: 'Instagram SEANZ',
      username: '@seanstorefcm',
      url: 'https://www.instagram.com/seanstorefcm?stkn=MXZkNzN5Zm1zOGJicg==',
      icon: Instagram,
      tag: 'PORTFOLIO & LIFESTYLE',
      accentColor: '#D50032',
      gradient: 'from-[#D50032] to-[#FF1744]',
      borderHover: 'hover:border-[#FF1744]/60',
      glowClass: 'hover:shadow-[0_10px_30px_-5px_rgba(255,23,68,0.4)]',
      bgIcon: 'bg-[#FF1744]/15 text-[#FF1744]',
    },
    {
      id: 'whatsapp-real',
      title: 'WhatsApp Real SEANZ',
      username: '+62 851-1911-4644 • Fast Response',
      url: 'https://Wa.me/085119114644',
      icon: MessageCircle,
      tag: 'DIRECT CONTACT',
      accentColor: '#0066FF',
      gradient: 'from-[#0066FF] to-[#00A8FF]',
      borderHover: 'hover:border-[#0066FF]/60',
      glowClass: 'hover:shadow-[0_10px_30px_-5px_rgba(0,102,255,0.45)]',
      bgIcon: 'bg-[#0066FF]/15 text-[#00A8FF]',
    },
  ];

  return (
    <section id="social" className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0066FF]/10 border border-[#00A8FF]/25 text-xs font-mono text-[#00A8FF] mb-3">
          <Zap className="w-3.5 h-3.5" />
          <span>CONNECT & FOLLOW</span>
        </div>
        <h2 className="font-orbitron font-extrabold text-3xl sm:text-4xl text-white tracking-wider">
          SOCIAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A8FF] to-[#FF1744]">MEDIA</span>
        </h2>
        <p className="font-space text-sm sm:text-base text-gray-300 mt-2 max-w-lg mx-auto">
          Terhubung langsung dengan seluruh platform resmi SEANZ untuk konten, komunitas, dan kolaborasi.
        </p>
      </div>

      {/* Social Media Link Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        {socials.map((social, index) => {
          const Icon = social.icon;
          return (
            <motion.a
              key={social.id}
              id={`social-link-${social.id}`}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className={`group relative overflow-hidden rounded-2xl p-5 bg-[#08102b]/70 backdrop-blur-xl border border-white/10 transition-all duration-300 ${social.borderHover} ${social.glowClass} flex items-center justify-between cursor-pointer`}
            >
              {/* Subtle gradient corner shine */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${social.gradient} opacity-0 group-hover:opacity-15 blur-xl transition-opacity duration-300 pointer-events-none`} />

              <div className="flex items-center gap-4 relative z-10">
                {/* Icon Container with subtle neon glow */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${social.bgIcon} border border-white/10 transition-transform duration-300 group-hover:scale-110 shadow-md`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Text metadata */}
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-mono tracking-wider text-gray-400 uppercase font-semibold flex items-center gap-1">
                    <Sparkles className="w-2.5 h-2.5 text-gray-400 group-hover:text-white transition-colors" />
                    {social.tag}
                  </span>
                  <h3 className="font-orbitron font-bold text-base sm:text-lg text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-[#00A8FF] transition-all">
                    {social.title}
                  </h3>
                  <span className="text-xs font-mono text-gray-300 line-clamp-1">
                    {social.username}
                  </span>
                </div>
              </div>

              {/* Action arrow button */}
              <div className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-gradient-to-r group-hover:from-[#0066FF] group-hover:to-[#FF1744] transition-all duration-300 shadow-sm relative z-10 shrink-0 ml-2">
                <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
