import React, { useState, useEffect } from 'react';
import { Home, User, Share2, QrCode, Mail, Zap, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'HOME', icon: Home },
    { id: 'profile', label: 'PROFILE', icon: User },
    { id: 'social', label: 'SOCIAL', icon: Share2 },
    { id: 'qris', label: 'QRIS', icon: QrCode },
    { id: 'contact', label: 'CONTACT', icon: Mail },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop & Tablet Top Floating Bar */}
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 px-4 sm:px-6 md:px-8 py-3.5 ${
          isScrolled
            ? 'backdrop-blur-xl bg-[#050816]/80 border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <button
            id="nav-logo-btn"
            onClick={() => handleNavClick('hero')}
            className="group flex items-center gap-2.5 focus:outline-none cursor-pointer"
          >
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-tr from-[#0066FF] to-[#FF1744] p-[1.5px] shadow-[0_0_15px_rgba(0,168,255,0.4)]">
              <div className="w-full h-full bg-[#050816] rounded-[7px] flex items-center justify-center group-hover:bg-[#070e28] transition-colors">
                <Zap className="w-4 h-4 text-[#00A8FF] group-hover:text-white transition-colors" />
              </div>
            </div>
            <span className="font-orbitron font-extrabold text-xl tracking-wider text-white flex items-center">
              SEAN<span className="text-[#FF1744]">Z</span>
            </span>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-[#0a112c]/60 backdrop-blur-md border border-white/10 shadow-[0_0_20px_rgba(0,102,255,0.15)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-mono font-medium tracking-wider transition-all duration-300 flex items-center gap-1.5 cursor-pointer select-none ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-[#0066FF] to-[#FF1744] shadow-[0_0_15px_rgba(0,168,255,0.5)]'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Online status indicator & Mobile trigger */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>ONLINE</span>
            </div>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-3 rounded-2xl bg-[#09102c]/95 backdrop-blur-2xl border border-white/10 shadow-2xl flex flex-col gap-1.5 animate-fadeIn">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono tracking-wider transition-all cursor-pointer ${
                    isActive
                      ? 'bg-gradient-to-r from-[#0066FF]/30 to-[#FF1744]/30 border border-[#00A8FF]/40 text-white font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-[#00A8FF]' : 'text-gray-400'}`} />
                    <span>{item.label}</span>
                  </span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#00A8FF]" />}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Mobile Compact Floating Bottom Nav Bar for effortless phone thumb ergonomics */}
      <nav
        id="mobile-bottom-nav"
        className="md:hidden fixed bottom-3 left-4 right-4 z-40 p-1.5 rounded-2xl bg-[#070d24]/85 backdrop-blur-xl border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.7)] flex items-center justify-around"
      >
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <button
              key={item.id}
              id={`thumb-nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all cursor-pointer relative ${
                isActive
                  ? 'text-[#00A8FF] scale-105'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="text-[9px] font-mono tracking-tight mt-0.5">{item.label}</span>
              {isActive && (
                <span className="absolute -top-1 w-1 h-1 rounded-full bg-[#FF1744] shadow-[0_0_8px_#FF1744]" />
              )}
            </button>
          );
        })}
      </nav>
    </>
  );
};
