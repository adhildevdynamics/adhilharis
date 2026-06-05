import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const IdentityReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"] // Tracks when the container hits the top until its bottom hits the bottom
  });

  const statement = "I build interfaces that feel clean, fast, and purposeful.";
  const words = statement.split(" ");
  
  return (
    <section ref={containerRef} className="h-[250vh] relative bg-light z-20">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start px-6 md:px-12 lg:px-24 pt-32 md:pt-40 max-w-[1600px] mx-auto overflow-y-auto overflow-x-hidden" style={{ scrollbarWidth: 'none' }}>
        
        {/* Large word-by-word reveal text */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl xl:text-[7rem] font-bold tracking-tighter leading-[1.1] mb-12 max-w-6xl">
          {words.map((word, i) => {
             // Calculate the start and end scroll points for each word to fade in
             const start = i * 0.05;
             const end = start + 0.1;
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
             // eslint-disable-next-line react-hooks/rules-of-hooks
             const y = useTransform(scrollYProgress, [start, end], [20, 0]);
             
             const isPurple = ["clean,", "fast,", "and", "purposeful."].includes(word);
             return (
               <motion.span 
                 key={i} 
                 style={{ opacity, y }} 
                 className={`mr-3 md:mr-5 lg:mr-8 inline-block ${isPurple ? "text-[#3F2B73]" : ""}`}
               >
                 {word}
               </motion.span>
             );
          })}
        </h2>
        
        {/* Reveal Identity Details at the end of the scroll */}
        <motion.div 
           style={{ 
             opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]),
             y: useTransform(scrollYProgress, [0.6, 0.8], [50, 0])
           }}
           className="w-full pt-8"
        >
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
             <PremiumCard title="Web Applications" />
             <PremiumCard title="Mobile Applications" />
             <PremiumCard title="Enterprise Systems" />
             <PremiumCard title="Digital Experiences" />
           </div>
        </motion.div>
      </div>
    </section>
  );
};

// Premium Card Component with Parallax, Lift, and Glow
import { useMotionValue, useSpring } from 'framer-motion';

const PremiumCard = ({ title }: { title: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02, zIndex: 10 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d"
      }}
      className="relative group w-full p-6 md:p-8 rounded-[2rem] bg-transparent shadow-[inset_6px_6px_12px_rgba(0,0,0,0.05),inset_-6px_-6px_12px_rgba(255,255,255,0.8)] cursor-pointer transition-all duration-500 hover:shadow-[inset_8px_8px_16px_rgba(0,0,0,0.08),inset_-8px_-8px_16px_rgba(255,255,255,1)] overflow-hidden flex items-center justify-center min-h-[140px] md:min-h-[180px]"
    >
      {/* Background Hover Effect */}
      <div className="absolute inset-0 bg-black/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
      
      {/* Lifted Text */}
      <div 
        style={{ transform: "translateZ(20px)" }}
        className="relative z-10 pointer-events-none"
      >
        <h3 className="text-lg md:text-xl font-medium tracking-tight text-gray-500 group-hover:text-black transition-colors duration-300 text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
