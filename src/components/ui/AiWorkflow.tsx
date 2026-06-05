import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const steps = [
  { num: "01", title: "Prompt", desc: "Turning ideas into structured development tasks." },
  { num: "02", title: "Code", desc: "Using AI tools to move faster inside the editor." },
  { num: "03", title: "Debug", desc: "Finding issues quickly and improving logic." },
  { num: "04", title: "Review", desc: "Cleaning code before production delivery." },
  { num: "05", title: "Ship", desc: "Delivering polished React and React Native experiences." }
];

export const AiWorkflow = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Top content animations
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15], [0.1, 1]);
  const titleY = useTransform(scrollYProgress, [0, 0.15], [50, 0]);
  const descOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.1, 0.25], [30, 0]);

  // Line drawing

  return (
    <section ref={containerRef} className="h-[250vh] relative bg-light z-20">
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Massive Background Typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
          <span 
            className="text-[18vw] font-bold tracking-tighter whitespace-nowrap select-none"
            style={{
              WebkitTextStroke: '2px rgba(0,0,0,0.05)',
              color: 'transparent'
            }}
          >
            AI WORKFLOW
          </span>
        </div>

        <div className="max-w-[1600px] w-full mx-auto px-6 md:px-12 lg:px-24 relative z-10 flex flex-col items-center">
          
          {/* Header Content */}
          <div className="w-full max-w-4xl text-center mb-16 md:mb-32">
            <motion.h2 
              style={{ opacity: titleOpacity, y: titleY }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[1.1] mb-6"
            >
              Building faster with modern <span className="text-[#3F2B73]/80">AI workflows.</span>
            </motion.h2>
            
            <motion.p 
              style={{ opacity: descOpacity, y: descY }}
              className="text-lg md:text-2xl text-gray-500 font-light leading-relaxed mx-auto max-w-3xl"
            >
              I use AI-assisted development workflows to speed up debugging, improve productivity, review code, and ship better frontend experiences.
            </motion.p>
          </div>

          {/* Workflow Strip */}
          <div className="w-full relative">
            
            {/* Horizontal Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[40px] left-[5%] right-[5%] h-[1px] z-0">
               <div className="w-full h-full bg-black/5 absolute" />
            </div>

            {/* Vertical Connecting Line (Mobile) */}
            <div className="block lg:hidden absolute top-[5%] bottom-[5%] left-[30px] w-[1px] z-0">
               <div className="w-full h-full bg-black/5 absolute" />
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 relative z-10 w-full px-2 lg:px-0">
              {steps.map((step, index) => {
                const start = 0.3 + (index * 0.1);
                const end = start + 0.1;
                
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const cardOpacity = useTransform(scrollYProgress, [start, end], [0, 1]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const cardY = useTransform(scrollYProgress, [start, end], [60, 0]);
                
                // Final card scale
                const isFinal = index === steps.length - 1;
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const cardScale = isFinal ? useTransform(scrollYProgress, [0.8, 0.9], [1, 1.05]) : 1;

                return (
                  <motion.div 
                    key={step.num}
                    style={{ opacity: cardOpacity, y: cardY, scale: cardScale }}
                    className="flex-1 min-w-[200px] flex flex-col p-6 md:p-8 rounded-[2rem] relative bg-white shadow-[8px_8px_16px_rgba(0,0,0,0.04),-8px_-8px_16px_rgba(255,255,255,1)] border border-black/5"
                  >
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                      <div className="w-12 h-12 mb-4 rounded-full bg-white shadow-[inset_4px_4px_8px_rgba(0,0,0,0.04),inset_-4px_-4px_8px_rgba(255,255,255,1)] flex items-center justify-center border border-black/5">
                        <span className="text-sm font-bold text-gray-400">{step.num}</span>
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">{step.title}</h3>
                      <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Bottom Marquee */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden border-t border-black/5 py-4 bg-white/30 backdrop-blur-md">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex whitespace-nowrap text-sm text-gray-400 font-mono uppercase tracking-widest"
          >
            {[...Array(2)].map((_, i) => (
              <span key={i} className="px-8 flex items-center gap-8">
                <span>GitHub Copilot</span> <span className="w-1 h-1 rounded-full bg-black/20" />
                <span>VS Code Agents</span> <span className="w-1 h-1 rounded-full bg-black/20" />
                <span>Prompt Engineering</span> <span className="w-1 h-1 rounded-full bg-black/20" />
                <span>Debugging</span> <span className="w-1 h-1 rounded-full bg-black/20" />
                <span>Code Review</span> <span className="w-1 h-1 rounded-full bg-black/20" />
                <span>Frontend Productivity</span> <span className="w-1 h-1 rounded-full bg-black/20" />
              </span>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};
