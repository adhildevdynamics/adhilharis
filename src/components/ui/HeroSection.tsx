import { motion, useScroll, useTransform, type Variants } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { MagneticButton } from './MagneticButton';

const techLabels = ['React', 'React Native', 'TypeScript', 'Redux', 'Expo', 'Node.js', 'Next.js', 'Git'];
const badges = ['React.js', 'React Native', 'Expo', 'TypeScript', 'Frontend Development', 'Mobile Apps', 'UI Engineering'];

export const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });

  // Scroll Parallax Mappings
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const portraitOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const outlineY = useTransform(scrollYProgress, [0, 1], [0, 100]); // Moves oppositely for morphing illusion

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax calculations based on mouse center
  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
  const mouseXOffset = (mousePosition.x - centerX) * 0.05;
  const mouseYOffset = (mousePosition.y - centerY) * 0.05;

  // Animation Variants for Load Sequence (2.5s orchestration)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.2 }
    }
  };

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const portraitVariant: Variants = {
    hidden: { opacity: 0, y: 40, scale: 1.03, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay: 1.2 }
    }
  };

  return (
    <section ref={containerRef} className="w-full min-h-[120vh] relative overflow-hidden bg-light pointer-events-auto flex flex-col items-center">

      {/* 1. Global Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation moved to Header.tsx */}

      {/* Main Hero Content - Orchestrated via staggered container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1600px] flex flex-col items-center justify-start relative mt-20 md:mt-24 px-6 z-10"
      >

        {/* Typography & Intro */}
        <div className="w-full flex flex-col items-center justify-center relative z-10">

          {/* Intro Text / Typewriter Effect */}
          <motion.div variants={fadeUpVariant} className="flex flex-col items-center gap-2 mb-2 md:mb-4">
            <h2 className="text-xl md:text-2xl font-mono text-gray-500 tracking-tight flex items-center justify-center gap-3">
              <motion.span animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }} transition={{ repeat: Infinity, duration: 2.5, repeatDelay: 1 }} className="origin-bottom-right inline-block text-2xl">👋</motion.span>
              Hi, I'm Adhil Haris
            </h2>
          </motion.div>

          {/* Massive Typography */}
          <motion.div style={{ y: titleY }} className="relative flex flex-col items-center -space-y-2 md:-space-y-12 z-10 select-none w-full">
            <div className="overflow-hidden pb-4 md:pb-8">
              <motion.h1
                variants={{
                  hidden: { y: "110%" },
                  visible: {
                    y: 0,
                    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
                  }
                }}
                className="text-[15vw] lg:text-[11rem] xl:text-[15rem] leading-[0.85] font-bold tracking-tighter text-black m-0 p-0 text-center origin-bottom"
              >
                Frontend
              </motion.h1>
            </div>

            <div className="overflow-hidden pb-2 md:pb-4">
              <motion.h1
                style={{ y: outlineY }}
                variants={{
                  hidden: { y: "110%" },
                  visible: {
                    y: 0,
                    transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }
                  }
                }}
                className="text-[15vw] lg:text-[11rem] xl:text-[15rem] leading-[0.85] font-bold tracking-tighter text-outline m-0 p-0 text-center relative z-[-1]"
              >
                Developer
              </motion.h1>
            </div>
          </motion.div>
        </div>

        {/* Central Interactive Portrait & Layers */}
        <motion.div
          style={{ scale: portraitScale, opacity: portraitOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.1 }}
          className="w-full relative min-h-[400px] lg:min-h-[700px] flex items-center justify-center pointer-events-none z-20 -mt-20 md:-mt-40 lg:-mt-64"
        >
          {/* Background Floating Tech Labels */}
          {techLabels.map((tech, i) => (
            <motion.div
              key={tech}
              animate={{
                y: [0, -20, 0],
                x: [0, i % 2 === 0 ? 10 : -10, 0],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
              className="absolute text-3xl md:text-5xl font-bold text-gray-200 pointer-events-none whitespace-nowrap z-0 hidden sm:block"
              style={{
                top: `${20 + (i * 15)}%`,
                left: `${10 + (i * 10)}%`,
                transform: `translate(${mouseXOffset * 0.2}px, ${mouseYOffset * 0.2}px) rotate(${i % 2 === 0 ? -15 : 15}deg)`
              }}
            >
              {tech}
            </motion.div>
          ))}

          {/* Central Portrait Image */}
          <motion.img
            variants={portraitVariant}
            src="/portrait.png"
            alt="Adhil Haris"
            className="w-[85%] md:w-[65%] max-w-[650px] z-10 object-contain drop-shadow-2xl grayscale"
            style={{
              transform: `translate(${mouseXOffset * -0.5}px, ${mouseYOffset * -0.5}px)`,
              maskImage: 'linear-gradient(to top, transparent 0%, black 20%)',
              WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)'
            }}
          />



        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row justify-center gap-4 mt-8 md:mt-0 relative z-30 w-full">
          <a href="#work" className="group bg-black text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-3 shadow-xl shadow-black/10">
            View My Work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a href="#footer" className="flex items-center justify-center bg-white/40 backdrop-blur-md text-black px-8 py-4 rounded-full text-sm font-medium hover:bg-white/80 transition-all border border-black/10">
            Let's Build Together
          </a>
        </motion.div>
      </motion.div>

      {/* Tech Badges Section */}
      <motion.div
        variants={fadeUpVariant}
        initial="hidden"
        animate="visible"
        className="w-full max-w-[1200px] mx-auto mt-24 px-6 md:px-0 flex flex-wrap justify-center gap-4 pb-32 z-20 relative pointer-events-auto"
      >
        {badges.map((badge) => (
          <MagneticButton key={badge} className="!bg-white/30 !backdrop-blur-xl !border-white/60 !shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),inset_8px_0_15px_rgba(0,0,0,0.05),inset_-8px_0_15px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.05)] !text-gray-700 hover:!text-black transition-all text-xs md:text-sm hover:!bg-white/40 !px-4 !py-2.5 md:!px-8 md:!py-4">
            {badge}
          </MagneticButton>
        ))}
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 pointer-events-none z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gray-300 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="w-full h-full bg-black"
          />
        </div>
      </motion.div>

    </section>
  );
};
