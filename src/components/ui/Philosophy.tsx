import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const principles = [
  {
    title: "Clarity",
    description: "Interfaces should be simple, readable, and easy to use."
  },
  {
    title: "Motion",
    description: "Animations should guide the user, not distract them."
  },
  {
    title: "Scalability",
    description: "Code should be reusable, maintainable, and ready to grow."
  }
];

export const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={containerRef} className="h-[200vh] relative bg-black text-white z-20">
      
      {/* Glowing Grid Background */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px'
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black to-black opacity-80 pointer-events-none" />

      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
        
        {/* Massive Headline */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.2, 0.9], [1, 1, 0]) }}
          className="mb-16 md:mb-24 relative z-10"
        >
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.1] text-white">
            Frontend is not just what users see.
          </h2>
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[1.1] text-outline mt-2 opacity-50">
            It is what users feel.
          </h2>
        </motion.div>

        {/* 3 Principles */}
        <div className="flex flex-col gap-12 md:gap-16 w-full max-w-4xl relative z-10">
          {principles.map((principle, index) => {
            const start = 0.2 + (index * 0.2);
            const end = start + 0.15;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const x = useTransform(scrollYProgress, [start, end], [-50, 0]);

            return (
              <motion.div 
                key={principle.title}
                style={{ opacity, x }}
                className="flex flex-col md:flex-row gap-4 md:gap-12 items-start border-l-2 border-white/20 pl-6 md:pl-12"
              >
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center font-mono text-sm shrink-0 bg-white/5 backdrop-blur-sm">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">{principle.title}</h3>
                  <p className="text-gray-400 text-lg md:text-2xl font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
