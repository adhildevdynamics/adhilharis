import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const milestones = [
  {
    year: '2019',
    title: 'Medical Laboratory Technologist',
    description: 'Specialized in clinical diagnostics, ensuring precision and accuracy in high-pressure environments. Developed a keen eye for detail and analytical problem-solving.',
    icon: '🔬',
  },
  {
    year: '2021',
    title: 'The Pivot',
    description: 'Discovered a passion for coding. Began translating analytical skills from the lab into understanding complex logic and system architecture.',
    icon: '🔄',
  },
  {
    year: '2023',
    title: 'Self-Taught Developer',
    description: 'Mastered the modern web stack. Built full-stack applications and developed a deep appreciation for UI/UX and interaction design.',
    icon: '💻',
  },
  {
    year: 'Present',
    title: 'Frontend Developer',
    description: 'Crafting premium, high-performance web experiences. Merging scientific precision with creative design to build the future of the web.',
    icon: '🚀',
  }
];

export const Timeline = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={targetRef} className="h-[400vh] relative pointer-events-none bg-white text-black">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="absolute top-24 left-12 md:left-24 z-10 border-l-4 border-black pl-6">
          <h2 className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-2 font-mono">My Journey</h2>
          <h3 className="text-5xl md:text-7xl font-bold tracking-tighter">The Transition</h3>
        </div>

        <motion.div style={{ x }} className="flex gap-32 px-12 md:px-32 relative pointer-events-auto mt-24">
          
          {/* Continuous progress line */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0" />
          <motion.div 
            style={{ width: lineWidth }}
            className="absolute top-1/2 left-0 h-[2px] bg-black -translate-y-1/2 z-0" 
          />

          {milestones.map((milestone, index) => {
            const itemProgressStart = Math.max(0, (index - 0.5) * 0.25);
            const itemProgressEnd = Math.min(1, (index + 0.5) * 0.25);
            
            const opacity = useTransform(
              scrollYProgress,
              [itemProgressStart, index * 0.25, itemProgressEnd],
              [0.2, 1, 0.2]
            );

            const scale = useTransform(
              scrollYProgress,
              [itemProgressStart, index * 0.25, itemProgressEnd],
              [0.9, 1, 0.9]
            );

            return (
              <motion.div 
                key={milestone.title}
                style={{ opacity, scale }}
                className="relative z-10 w-[300px] md:w-[450px] shrink-0 flex flex-col gap-6"
              >
                <div className="w-16 h-16 bg-white border-2 border-black flex items-center justify-center text-2xl relative">
                  {milestone.icon}
                  {/* Solid dot instead of glowing ping */}
                  <div className="absolute -inset-2 border border-black/10" />
                </div>
                
                <div>
                  <span className="text-black font-mono tracking-wider font-bold bg-gray-100 px-3 py-1 text-sm">{milestone.year}</span>
                  <h4 className="text-3xl md:text-4xl font-bold tracking-tighter mt-4">{milestone.title}</h4>
                </div>
                
                <p className="text-gray-600 leading-relaxed font-light text-lg border-l-2 border-gray-200 pl-4">
                  {milestone.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
