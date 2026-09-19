import React, { useEffect, useRef, useState } from 'react';

interface FuturisticBackgroundProps {
  mousePos: { x: number; y: number };
}

export const FuturisticBackground: React.FC<FuturisticBackgroundProps> = ({ mousePos }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Floating particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = isMobile ? 22 : 45;
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      alpha: number;
      maxAlpha: number;
      pulseSpeed: number;
    }> = [];

    const colors = ['#0066FF', '#00A8FF', '#FF1744', '#D50032', '#FFFFFF'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2.2 + 0.8,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.1,
        maxAlpha: Math.random() * 0.4 + 0.3,
        pulseSpeed: Math.random() * 0.015 + 0.005,
      });
    }

    let isVisible = true;
    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const render = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      // Draw subtle connection lines between close particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 168, 255, ${0.08 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        p.alpha += p.pulseSpeed;
        if (p.alpha > p.maxAlpha || p.alpha < 0.1) {
          p.pulseSpeed = -p.pulseSpeed;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, p.alpha));
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibility);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMobile]);

  // Parallax offset values
  const parallaxX = (mousePos.x - 0.5) * 35;
  const parallaxY = (mousePos.y - 0.5) * 35;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Navy Base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Cyber Grid Layer */}
      <div 
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 102, 255, 0.4) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 23, 68, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 80%)'
        }}
      />

      {/* 3D Glowing Orb 1: Electric Blue */}
      <div
        className="absolute w-[360px] h-[360px] md:w-[600px] md:h-[600px] rounded-full blur-[90px] md:blur-[130px] opacity-40 md:opacity-50 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #00A8FF 0%, #0066FF 45%, transparent 70%)',
          top: '10%',
          left: '5%',
          transform: `translate(${parallaxX * 0.8}px, ${parallaxY * 0.8}px)`,
        }}
      />

      {/* 3D Glowing Orb 2: Crimson Red */}
      <div
        className="absolute w-[320px] h-[320px] md:w-[550px] md:h-[550px] rounded-full blur-[90px] md:blur-[130px] opacity-35 md:opacity-45 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #FF1744 0%, #D50032 50%, transparent 70%)',
          bottom: '15%',
          right: '5%',
          transform: `translate(${-parallaxX * 0.8}px, ${-parallaxY * 0.8}px)`,
        }}
      />

      {/* 3D Glowing Orb 3: Center Ambient Fusion */}
      <div
        className="absolute w-[280px] h-[280px] md:w-[450px] md:h-[450px] rounded-full blur-[80px] opacity-25"
        style={{
          background: 'radial-gradient(circle, #0066FF 0%, #FF1744 60%, transparent 75%)',
          top: '50%',
          left: '50%',
          transform: `translate(calc(-50% + ${parallaxX * 0.4}px), calc(-50% + ${parallaxY * 0.4}px))`,
        }}
      />

      {/* Futuristic Light Beams */}
      <div 
        className="absolute -top-32 left-1/4 w-72 h-[600px] bg-gradient-to-b from-[#00A8FF]/20 via-[#0066FF]/5 to-transparent rotate-[-25deg] blur-2xl opacity-40 transform-gpu"
        style={{
          transform: `rotate(-25deg) translate(${parallaxX * 0.5}px, ${parallaxY * 0.5}px)`
        }}
      />
      <div 
        className="absolute -bottom-32 right-1/4 w-72 h-[600px] bg-gradient-to-t from-[#FF1744]/20 via-[#D50032]/5 to-transparent rotate-[-25deg] blur-2xl opacity-40 transform-gpu"
        style={{
          transform: `rotate(-25deg) translate(${-parallaxX * 0.5}px, ${-parallaxY * 0.5}px)`
        }}
      />

      {/* Giant 3D Faint Typographic Watermark "SEANZ" */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none overflow-hidden"
        style={{
          transform: `translate(${parallaxX * 0.3}px, ${parallaxY * 0.3}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        <span 
          className="font-orbitron font-black text-[18vw] leading-none tracking-widest text-transparent uppercase opacity-[0.035] md:opacity-[0.045] pointer-events-none transform -rotate-6"
          style={{
            WebkitTextStroke: '2px rgba(255, 255, 255, 0.4)',
            filter: 'drop-shadow(0 0 35px rgba(0, 168, 255, 0.3)) drop-shadow(0 0 50px rgba(255, 23, 68, 0.2))'
          }}
        >
          SEANZ
        </span>
      </div>

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Vignette Edge Shading for Maximum Depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,8,22,0.75)_100%)]" />
    </div>
  );
};
