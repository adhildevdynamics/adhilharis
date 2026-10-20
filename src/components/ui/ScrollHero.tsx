import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useMotionValueEvent, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { HERO_FRAME_CONFIG, useFrameSequence } from './ScrollSequence';
import './ScrollHero.css';

const MOBILE_BREAKPOINT = 768;
const PROGRESS_DOT_COUNT = 5;

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const handler = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener('change', handler);
    return () => query.removeEventListener('change', handler);
  }, []);
  return reduced;
}

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < MOBILE_BREAKPOINT);
  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

const ProgressDots = ({ progress }: { progress: import('framer-motion').MotionValue<number> }) => {
  return <div className="hero-progress-dots" aria-hidden="true">
    {Array.from({ length: PROGRESS_DOT_COUNT }).map((_, i) => <ProgressDot key={i} index={i} progress={progress} />)}
  </div>;
};

const ProgressDot = ({ index, progress }: { index: number; progress: import('framer-motion').MotionValue<number> }) => {
  const step = 1 / PROGRESS_DOT_COUNT;
  const center = index * step + step / 2;
  const background = useTransform(
    progress,
    [center - step, center, center + step],
    ['rgba(245,242,236,0.3)', '#D90404', 'rgba(245,242,236,0.3)']
  );
  return <motion.span className="hero-progress-dot" style={{ background }} />;
};

export const ScrollHero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const currentFrameRef = useRef(0);

  const reducedMotion = usePrefersReducedMotion();
  const isMobile = useIsMobile();
  const totalFrames = isMobile ? HERO_FRAME_CONFIG.mobileTotalFrames : HERO_FRAME_CONFIG.totalFrames;
  const { getFrame, usingFallback, firstFrameReady } = useFrameSequence(totalFrames);

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end end'] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = getFrame(index);
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx || !img) return;
    const { width, height } = canvas;
    if (!width || !height) return;
    const imgRatio = img.naturalWidth / img.naturalHeight;
    const canvasRatio = width / height;
    let drawWidth: number, drawHeight: number;
    if (imgRatio > canvasRatio) {
      drawHeight = height;
      drawWidth = height * imgRatio;
    } else {
      drawWidth = width;
      drawHeight = width / imgRatio;
    }
    const dx = (width - drawWidth) / 2;
    const dy = (height - drawHeight) / 2;
    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, dx, dy, drawWidth, drawHeight);
  }, [getFrame]);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const sticky = canvas?.parentElement;
    if (!canvas || !sticky) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = sticky.getBoundingClientRect();
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    canvas.style.width = `${rect.width}px`;
    canvas.style.height = `${rect.height}px`;
    drawFrame(currentFrameRef.current);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    if (!firstFrameReady) return;
    if (reducedMotion) currentFrameRef.current = totalFrames - 1;
    drawFrame(currentFrameRef.current);
  }, [firstFrameReady, usingFallback, reducedMotion, totalFrames, drawFrame]);

  useMotionValueEvent(smoothProgress, 'change', (latest) => {
    if (reducedMotion) return;
    const frameIndex = Math.min(totalFrames - 1, Math.max(0, Math.round(latest * (totalFrames - 1))));
    if (frameIndex !== currentFrameRef.current) {
      currentFrameRef.current = frameIndex;
      requestAnimationFrame(() => drawFrame(frameIndex));
    }
  });

  const indicatorOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);

  const adhilOpacity = useTransform(smoothProgress, [0.72, 0.79], [0, 1]);
  const adhilY = useTransform(smoothProgress, [0.72, 0.79], [30, 0]);
  const adhilTracking = useTransform(smoothProgress, [0.72, 0.79], ['0.04em', '-0.02em']);

  const harisOpacity = useTransform(smoothProgress, [0.8, 0.87], [0, 1]);
  const harisY = useTransform(smoothProgress, [0.8, 0.87], [30, 0]);
  const harisTracking = useTransform(smoothProgress, [0.8, 0.87], ['0.04em', '-0.02em']);

  const roleOpacity = useTransform(smoothProgress, [0.88, 0.91], [0, 1]);
  const roleY = useTransform(smoothProgress, [0.88, 0.91], [16, 0]);

  const ctaOpacity = useTransform(smoothProgress, [0.92, 0.97], [0, 1]);
  const ctaY = useTransform(smoothProgress, [0.92, 0.97], [16, 0]);

  if (reducedMotion) {
    return <section className="hero-sequence hero-sequence--static" ref={heroRef}>
      <div className="hero-sticky">
        <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
        <div className="hero-scrim" aria-hidden="true" />
        <div className="hero-overlay hero-overlay--static">
          <h1 className="hero-name">
            <span className="hero-name-line hero-name-adhil">ADHIL</span>
            <span className="hero-name-line hero-name-haris">HARIS</span>
          </h1>
          <h2 className="hero-role">Frontend Developer</h2>
          <p className="hero-desc">Building modern web &amp; mobile experiences.</p>
          <div className="hero-cta-row">
            <a className="pill" href="#work">View My Work <ArrowUpRight /></a>
            <a className="pill pill-outline" href="#experience">Experience <ArrowDown /></a>
          </div>
        </div>
      </div>
    </section>;
  }

  return <section className="hero-sequence" ref={heroRef}>
    <div className="hero-sticky">
      <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />
      <div className="hero-scrim" aria-hidden="true" />

      <div className="hero-overlay">
        <h1 className="hero-name">
          <motion.span className="hero-name-line hero-name-adhil" style={{ opacity: adhilOpacity, y: adhilY, letterSpacing: adhilTracking }}>ADHIL</motion.span>
          <motion.span className="hero-name-line hero-name-haris" style={{ opacity: harisOpacity, y: harisY, letterSpacing: harisTracking }}>HARIS</motion.span>
        </h1>
        <motion.h2 className="hero-role" style={{ opacity: roleOpacity, y: roleY }}>Frontend Developer</motion.h2>
        <motion.div className="hero-cta-group" style={{ opacity: ctaOpacity, y: ctaY }}>
          <p className="hero-desc">Building modern web &amp; mobile experiences.</p>
          <div className="hero-cta-row">
            <a className="pill" href="#work">View My Work <ArrowUpRight /></a>
            <a className="pill pill-outline" href="#experience">Experience <ArrowDown /></a>
          </div>
        </motion.div>
      </div>

      <motion.div className="hero-scroll-indicator" style={{ opacity: indicatorOpacity }} aria-hidden="true">
        <span>Scroll to explore</span>
        <i className="hero-scroll-line"><em /></i>
      </motion.div>

      <ProgressDots progress={smoothProgress} />
    </div>
  </section>;
};
