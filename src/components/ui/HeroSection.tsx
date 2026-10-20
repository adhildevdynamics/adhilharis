import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { CommandKeyVisual } from './CommandKeyVisual';

export const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // ADHIL drifts up slightly, HARIS trails slower — a subtle depth cue.
  const adhilY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const harisY = useTransform(scrollYProgress, [0, 1], [0, -32]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -24]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };

  return (
    <section ref={containerRef} className="relative w-full" style={{ height: '160vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#F5F2EC] flex flex-col">

        {/* Faint background grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)',
            backgroundSize: '64px 64px'
          }}
        />

        <div className="w-full max-w-[1700px] mx-auto flex-1 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-4 px-6 md:px-12 pt-24 md:pt-20 relative z-10">

          {/* LEFT — content */}
          <motion.div variants={container} initial="hidden" animate="visible" className="flex flex-col relative z-10 order-1">
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D90404] opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D90404]" />
              </span>
              <span className="font-mono text-xs md:text-sm uppercase tracking-[0.25em] text-[#6F6F6F]">
                Based in UAE &middot; Available for work
              </span>
            </motion.div>

            <div className="relative select-none">
              <motion.div style={{ y: adhilY }} className="overflow-hidden">
                <motion.h1 variants={fadeUp} className="display-xl font-display font-bold tracking-tighter leading-[0.88] text-[#111111] m-0">
                  ADHIL
                </motion.h1>
              </motion.div>
              <motion.div style={{ y: harisY }} className="overflow-hidden -mt-1 md:-mt-3">
                <motion.h1 variants={fadeUp} className="display-xl font-display font-bold tracking-tighter leading-[0.88] text-[#D90404] m-0">
                  HARIS
                </motion.h1>
              </motion.div>
            </div>

            <motion.div style={{ y: copyY, opacity: copyOpacity }} className="flex flex-col">
              <motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl font-display font-medium text-[#111111] mt-6 md:mt-8">
                Frontend Developer
              </motion.p>
              <motion.p variants={fadeUp} className="text-base md:text-lg text-[#6F6F6F] font-light mt-2 max-w-md">
                Building modern web &amp; mobile experiences.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mt-8 md:mt-10">
                <a
                  href="#work"
                  className="group bg-[#D90404] text-[#F5F2EC] px-7 py-4 rounded-full text-sm font-medium hover:bg-[#A80000] transition-colors flex items-center justify-center gap-3 shadow-[0_14px_30px_-10px_rgba(217,4,4,0.45)]"
                >
                  View My Work
                  <svg className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H8M17 7v9" />
                  </svg>
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center text-[#111111] px-7 py-4 rounded-full text-sm font-medium border border-[#111111]/20 hover:border-[#D90404] hover:text-[#D90404] transition-colors gap-3"
                >
                  Resume
                  <svg className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l4-4m-4 4l-4-4M4 20h16" />
                  </svg>
                </a>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-start gap-4 mt-10 md:mt-14">
                <span className="w-px h-10 bg-[#D90404] shrink-0 mt-1" />
                <div className="flex flex-col gap-1.5">
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#111111]/70">
                    Ideas &rarr; Code &rarr; Reality
                  </span>
                  <p className="text-sm text-[#6F6F6F] font-light max-w-xs">
                    Crafting digital products that solve real problems.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8 md:mt-10">
                <span className="w-px h-5 bg-[#D90404] shrink-0" />
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3 w-3 items-center justify-center rounded-full border border-[#D90404]" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#6F6F6F] font-bold">Scroll to explore</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT — floating 3D Command-key visual */}
          <div className="relative w-full h-[38vh] sm:h-[48vh] lg:h-[70vh] order-2">
            <CommandKeyVisual scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </div>
    </section>
  );
};
