import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const steps = [
  { num: "01", title: "Prompt", desc: "Turning ideas into structured development tasks." },
  { num: "02", title: "Code", desc: "Using AI tools to move faster inside the editor." },
  { num: "03", title: "Debug", desc: "Finding issues quickly and improving logic." },
  { num: "04", title: "Review", desc: "Cleaning code before production delivery." },
  { num: "05", title: "Ship", desc: "Delivering polished React and React Native experiences." }
];

export const AiWorkflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const xTranslation = useTransform(scrollYProgress, [0.25, 0.85], ["0vw", "-336vw"]);
  const rigRotateY = useTransform(scrollYProgress, [0, 1], [-6, 6]);

  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0.1, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [50, 0]);
  const descOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.1, 0.25], [30, 0]);

  return (
    <section ref={containerRef} className="h-[250vh] relative bg-light z-20 scene">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <span
            className="text-[18vw] font-display font-bold tracking-tighter whitespace-nowrap select-none"
            style={{ WebkitTextStroke: '2px rgba(245,242,236,0.1)', color: 'transparent' }}
          >
            AI WORKFLOW
          </span>
        </div>

        <div className="max-w-[1600px] w-full mx-auto px-0 md:px-12 lg:px-24 relative z-10 flex flex-col items-center overflow-hidden lg:overflow-visible">

          <div className="w-full max-w-4xl text-center mb-16 md:mb-32 px-6 md:px-0">
            <motion.h2
              style={{ opacity: titleOpacity, y: titleY }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tighter text-ink leading-[1.1] mb-6"
            >
              Building faster with modern <span className="bg-accent text-pop px-2 rounded-sm">AI workflows.</span>
            </motion.h2>

            <motion.p
              style={{ opacity: descOpacity, y: descY }}
              className="text-lg md:text-2xl text-secondary font-light leading-relaxed mx-auto max-w-3xl"
            >
              I use AI-assisted development workflows to speed up debugging, improve productivity, review code, and ship better frontend experiences.
            </motion.p>
          </div>

          <div className="w-full relative">
            <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[1px] z-0">
              <div className="w-full h-full bg-metal/30 absolute" />
            </div>

            <motion.div
              style={{ x: isMobile ? xTranslation : 0, rotateY: isMobile ? 0 : rigRotateY, transformStyle: 'preserve-3d' }}
              className="flex flex-row lg:flex-row flex-nowrap lg:flex-wrap justify-start lg:justify-between gap-4 lg:gap-4 relative z-10 w-full px-4 lg:px-0 scene-flat"
            >
              {isMobile && (
                <div className="absolute top-[48px] left-[40vw] right-[40vw] h-[1px] bg-metal/30 z-0 pointer-events-none" />
              )}

              {steps.map((step, index) => {
                const start = 0.3 + (index * 0.1);
                const end = start + 0.1;

                // eslint-disable-next-line react-hooks/rules-of-hooks
                const animatedOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const animatedY = useTransform(scrollYProgress, [start, end], [60, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const animatedRotate = useTransform(scrollYProgress, [start, end], [30, 0]);

                const cardOpacity = isMobile ? 1 : animatedOpacity;
                const cardY = isMobile ? 0 : animatedY;
                const cardRotate = isMobile ? 0 : animatedRotate;

                return (
                  <motion.div
                    key={step.num}
                    style={{ opacity: cardOpacity, y: cardY, rotateX: cardRotate, transformStyle: 'preserve-3d' }}
                    className="w-[80vw] sm:w-[50vw] lg:w-auto flex-none lg:flex-1 flex flex-col p-6 md:p-8 rounded-sm relative bg-cream border border-dark/10 shadow-[0_20px_40px_-24px_rgba(17,17,17,0.25)]"
                  >
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 mb-4 rounded-full bg-pop flex items-center justify-center relative z-10">
                        <span className="text-sm font-bold text-accent font-mono">{step.num}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-display font-bold text-dark mb-4">{step.title}</h3>
                      <p className="text-sm md:text-base text-dark/70 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-dark/10 py-4 bg-cream/90 backdrop-blur-md">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex whitespace-nowrap text-sm text-dark/70 font-mono uppercase tracking-widest"
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="px-8 flex items-center gap-8">
                <span>GitHub Copilot</span> <span className="w-1 h-1 rounded-full bg-pop" />
                <span>VS Code Agents</span> <span className="w-1 h-1 rounded-full bg-pop" />
                <span>Prompt Engineering</span> <span className="w-1 h-1 rounded-full bg-pop" />
                <span>Debugging</span> <span className="w-1 h-1 rounded-full bg-pop" />
                <span>Code Review</span> <span className="w-1 h-1 rounded-full bg-pop" />
                <span>Frontend Productivity</span> <span className="w-1 h-1 rounded-full bg-pop" />
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
