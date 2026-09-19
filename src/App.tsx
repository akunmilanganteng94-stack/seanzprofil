import React, { useState, useEffect } from 'react';
import { FuturisticBackground } from './components/FuturisticBackground';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { ProfileHero } from './components/ProfileHero';
import { SocialLinks } from './components/SocialLinks';
import { QrisSection } from './components/QrisSection';
import { ApkDownloadCard } from './components/ApkDownloadCard';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { CursorGlow } from './components/CursorGlow';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Mouse position tracker for subtle 3D background depth
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Section observer to keep navbar highlighted accurately
  useEffect(() => {
    const sections = ['hero', 'profile', 'social', 'qris', 'apk-download', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId === 'apk-download' ? 'qris' : sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  return (
    <div className="relative min-h-screen bg-[#050816] text-white font-sans selection:bg-[#0066FF] selection:text-white selection:bg-opacity-40 overflow-x-hidden">
      {/* 1. Futuristic Loading Screen */}
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

      {/* Interactive Cursor Glow for desktop */}
      <CursorGlow />

      {/* 3D Parallax & Particle Futuristic Background */}
      <FuturisticBackground mousePos={mousePos} />

      {/* Toast Notification Container */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Modern Translucent Navigation Bar */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 2. Hero & Glassmorphism 3D Profile Card */}
        <ProfileHero 
          onExploreClick={() => handleNavigate('social')} 
          onQrisClick={() => handleNavigate('qris')} 
        />

        {/* 3. Official Social Media Channels */}
        <SocialLinks />

        {/* 4. Dedicated QRIS SEANZ Section with Fullscreen Modal & DANA Copy */}
        <QrisSection onShowToast={showToast} />

        {/* 5. Special Download APK QRIS (QRIS Tanpa KTP) */}
        <ApkDownloadCard />

        {/* 6. Direct Contact & WhatsApp Consultation */}
        <ContactSection />
      </main>

      {/* 7. Footer with official copyright and credit */}
      <Footer onScrollToTop={() => handleNavigate('hero')} />
    </div>
  );
}
