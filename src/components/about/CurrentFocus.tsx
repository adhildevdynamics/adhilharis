import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const items = [
  { title: "React.js Development", desc: "Building clean, scalable interfaces for modern web applications." },
  { title: "React Native Apps", desc: "Creating mobile-first experiences with practical, production-ready flows." },
  { title: "API Integration", desc: "Connecting frontend experiences with real-world data and business workflows." },
  { title: "Responsive UI", desc: "Designing adaptive layouts that feel native on any device screen." },
  { title: "Performance Optimization", desc: "Refining load times, render cycles, and interaction smoothness." },
  { title: "AI-assisted Workflows", desc: "Exploring AI tools to improve productivity, debugging, and delivery." }
];

export const CurrentFocus = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={containerRef} className="h-[300vh] relative z-10 bg-[#F8F6F1]">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden w-full max-w-[1600px] mx-auto px-6 md:px-12">
        
        <div className="mb-12 md:mb-24 shrink-0">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
            Currently focused on
          </h2>
        </div>

        <motion.div style={{ x }} className="flex gap-16 md:gap-32 w-max">
          {items.map((item, index) => (
            <div key={index} className="w-[85vw] md:w-[60vw] lg:w-[40vw] flex flex-col gap-6 shrink-0">
              <div className="text-4xl md:text-6xl lg:text-[5rem] leading-[1.1] font-bold tracking-tighter text-gray-300 transition-colors duration-500 hover:text-[#3F2B73]">
                {item.title}
              </div>
              <p className="text-xl md:text-2xl font-light text-gray-500 max-w-md">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
