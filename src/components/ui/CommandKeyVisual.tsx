import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from 'framer-motion';
import { Laptop2, User, Lamp, Coffee, Sprout } from 'lucide-react';

interface CommandKeyVisualProps {
  scrollYProgress: MotionValue<number>;
}

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
};

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px) and (pointer: fine)');
    setIsDesktop(mq.matches);
    const handler = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
};

// A small physical keycap, positioned around the central "Command" key.
const SideKey = ({ label, style }: { label: string; style: React.CSSProperties }) => (
  <div
    className="absolute rounded-xl bg-[#FAF9F6] border border-[#111111]/10 shadow-[0_10px_20px_-8px_rgba(17,17,17,0.25)] flex items-center justify-center font-mono text-[10px] sm:text-xs text-[#111111]/70"
    style={style}
  >
    {label}
  </div>
);

export const CommandKeyVisual = ({ scrollYProgress }: CommandKeyVisualProps) => {
  const reducedMotion = usePrefersReducedMotion();
  const isDesktop = useIsDesktop();
  const containerRef = useRef<HTMLDivElement>(null);

  // ---- Mouse tilt (desktop only, max ±4deg) ----
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const mouseRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 120, damping: 20 });
  const mouseRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (!isDesktop || reducedMotion) return;
    const handleMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth - 0.5);
      mouseY.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, [isDesktop, reducedMotion, mouseX, mouseY]);

  // ---- Scroll-driven 3D keyframes ----
  const stops = [0, 0.25, 0.5, 0.75, 1];
  const scrollRotateXRaw = useTransform(scrollYProgress, stops, [8, 4, 0, -5, -5]);
  const scrollRotateYRaw = useTransform(scrollYProgress, stops, [-10, -5, 4, 8, 8]);
  const scrollRotateZ = useTransform(scrollYProgress, stops, [2, 1, -1, -2, -2]);
  const scrollScale = useTransform(scrollYProgress, stops, [0.9, 1, 1.15, 1.35, 1.35]);
  const scrollY = useTransform(scrollYProgress, stops, [0, -10, -30, -90, -90]);

  const scrollRotateX = useSpring(scrollRotateXRaw, { stiffness: 90, damping: 22, mass: 0.6 });
  const scrollRotateY = useSpring(scrollRotateYRaw, { stiffness: 90, damping: 22, mass: 0.6 });
  const scale = useSpring(scrollScale, { stiffness: 90, damping: 22, mass: 0.6 });
  const y = useSpring(scrollY, { stiffness: 90, damping: 22, mass: 0.6 });

  const rotateX = useTransform([scrollRotateX, mouseRotateX], (v) => (v as number[]).reduce((a, b) => a + b, 0));
  const rotateY = useTransform([scrollRotateY, mouseRotateY], (v) => (v as number[]).reduce((a, b) => a + b, 0));

  // Side captions fade with the split-layout hero; the zoomed-in headline takes over after.
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.6, 0.85], [1, 1, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const zoomedOpacity = useTransform(scrollYProgress, [0.6, 0.85, 1], [0, 1, 1]);
  const zoomedY = useTransform(scrollYProgress, [0.6, 1], [24, 0]);

  const glowY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const particlesY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const particlesOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 0.35, 0]);

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center" style={{ perspective: 1200 }}>

      {/* Layer 1 — ambient red glow */}
      <motion.div style={{ y: reducedMotion ? 0 : glowY }} className="absolute w-[85%] aspect-square rounded-full pointer-events-none" aria-hidden>
        <div className="w-full h-full" style={{ background: 'radial-gradient(circle, rgba(217,4,4,0.16), transparent 65%)', filter: 'blur(20px)' }} />
      </motion.div>

      {/* Layer 3 — floating particles */}
      <motion.div style={{ y: reducedMotion ? 0 : particlesY, opacity: reducedMotion ? 0.25 : particlesOpacity }} className="absolute inset-0 pointer-events-none" aria-hidden>
        {[
          { top: '14%', left: '10%', size: 6 }, { top: '76%', left: '18%', size: 4 },
          { top: '28%', left: '86%', size: 5 }, { top: '82%', left: '80%', size: 3 },
          { top: '8%', left: '58%', size: 3 },
        ].map((p, i) => (
          <motion.span
            key={i}
            className="absolute rounded-full bg-[#D90404]"
            style={{ top: p.top, left: p.left, width: p.size, height: p.size }}
            animate={reducedMotion ? {} : { y: [0, -14, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
          />
        ))}
      </motion.div>

      {/* Layer 2 — the illustrated Command-key scene, floating in 3D */}
      <motion.div
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          rotateZ: reducedMotion ? 0 : scrollRotateZ,
          scale: reducedMotion ? 1 : scale,
          y: reducedMotion ? 0 : y,
          opacity: sceneOpacity,
          transformStyle: 'preserve-3d',
          willChange: 'transform, opacity',
        }}
        className="relative w-[86%] sm:w-[80%] max-w-[520px] aspect-square"
      >
        {/* Contact shadow beneath the object */}
        <div
          className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[70%] h-10 rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(17,17,17,0.35), transparent 70%)', filter: 'blur(14px)' }}
          aria-hidden
        />

        {/* Red keyboard base plate */}
        <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-[#EF2A2A] via-[#D90404] to-[#A80000] shadow-[0_40px_70px_-20px_rgba(168,0,0,0.5)]" />

        {/* Surrounding physical keycaps */}
        <SideKey label="Ctrl" style={{ top: '4%', right: '2%', width: '24%', height: '17%' }} />
        <SideKey label="{ }" style={{ top: '2%', left: '4%', width: '20%', height: '15%' }} />
        <SideKey label="⇧ Shift" style={{ bottom: '2%', left: '-4%', width: '38%', height: '17%' }} />
        <div
          className="absolute -top-[6%] left-1/2 -translate-x-1/2 w-[26%] h-[10%] rounded-t-xl bg-[#FAF9F6] border border-[#111111]/10 opacity-70"
          aria-hidden
        />

        {/* On-plate captions */}
        <motion.span
          style={{ opacity: captionOpacity }}
          className="absolute top-[8%] right-[6%] text-right text-[9px] sm:text-[10px] leading-relaxed uppercase tracking-[0.15em] text-[#111111] font-semibold hidden sm:block"
        >
          Turning ideas<br />into digital<br />reality
        </motion.span>

        <motion.div style={{ opacity: captionOpacity }} className="absolute bottom-[8%] right-[8%] text-right hidden sm:flex flex-col items-end gap-1">
          {['Build', 'Create', 'Explore', 'Repeat'].map((w) => (
            <span key={w} className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#FAF9F6] font-semibold">{w}</span>
          ))}
          <span className="w-8 h-px bg-[#FAF9F6] mt-1" />
        </motion.div>

        {/* The translucent Command keycap, raised, glassy */}
        <div className="absolute inset-[16%] rounded-[1.75rem] bg-gradient-to-br from-white/25 via-[#D90404]/50 to-[#A80000]/70 border border-white/30 backdrop-blur-sm shadow-[inset_0_2px_12px_rgba(255,255,255,0.35),0_25px_45px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
          <span className="absolute top-4 left-4 sm:top-5 sm:left-5 text-[10px] sm:text-xs font-display font-semibold uppercase tracking-[0.15em] text-white/90">
            Command
          </span>

          {/* Miniature workspace scene inside the key */}
          <div className="flex-1 flex items-center justify-center gap-3 sm:gap-4 px-6 pb-2 pt-8">
            <Sprout className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" strokeWidth={1.5} />
            <Lamp className="w-5 h-5 sm:w-6 sm:h-6 text-white/80" strokeWidth={1.5} />
            <div className="relative">
              <Laptop2 className="w-9 h-9 sm:w-11 sm:h-11 text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" strokeWidth={1.4} />
              <span className="absolute -inset-2 rounded-full bg-white/20 blur-md -z-10" />
            </div>
            <User className="w-6 h-6 sm:w-7 sm:h-7 text-white/85" strokeWidth={1.5} />
            <Coffee className="w-4 h-4 sm:w-5 sm:h-5 text-white/60" strokeWidth={1.5} />
          </div>

          {/* Warm glow rising from the "floor" of the scene */}
          <div className="h-10 w-full bg-gradient-to-t from-amber-200/30 to-transparent" />
        </div>
      </motion.div>

      {/* Zoomed-in overlay headline — takes over once the scene fills the frame */}
      <motion.div
        style={{ opacity: zoomedOpacity, y: zoomedY }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none"
      >
        <h2 className="font-display font-bold tracking-tighter text-[#111111] leading-[0.95]" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
          EVERYTHING<br />STARTS <span className="text-[#D90404]">INSIDE.</span>
        </h2>
        <span className="mt-3 font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[#6F6F6F]">
          Ideas &rarr; Code &rarr; Reality
        </span>
      </motion.div>
    </div>
  );
};
