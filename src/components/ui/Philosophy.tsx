import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const principles = [
  { title: "Clarity", description: "Interfaces should be simple, readable, and easy to use." },
  { title: "Motion", description: "Animations should guide the user, not distract them." },
  { title: "Scalability", description: "Code should be reusable, maintainable, and ready to grow." }
];

export const Philosophy = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section
      ref={containerRef}
      className="h-[170vh] relative text-cream z-20 scene"
      style={{ background: 'linear-gradient(160deg, #1A0303 0%, #3B0505 45%, #1A0303 100%)' }}
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(to right, #FAF9F6 1px, transparent 1px), linear-gradient(to bottom, #FAF9F6 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
      />

      <div className="sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-12 max-w-[1600px] mx-auto">

        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.15, 0.85], [1, 1, 0]) }}
          className="mb-12 md:mb-20"
        >
          <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-cream/50 mb-6 block">07 / Approach</span>
          <h2 className="display-lg font-display font-bold tracking-tighter leading-[1.05] text-cream">
            Frontend is not just what users see.
          </h2>
          <h2 className="display-lg font-display font-bold tracking-tighter leading-[1.05] text-outline-light mt-1">
            It is what users feel.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4 md:gap-8 w-full max-w-4xl">
          {principles.map((principle, index) => {
            const start = 0.2 + (index * 0.2);
            const end = start + 0.15;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const rotateY = useTransform(scrollYProgress, [start, end], [-70, 0]);
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

            return (
              <motion.div
                key={principle.title}
                style={{ rotateY, opacity, transformStyle: 'preserve-3d', transformOrigin: 'left' }}
                className="flex flex-col md:flex-row gap-2 md:gap-10 items-start border-t border-cream/10 pt-6 md:pt-8"
              >
                <span className="font-mono text-sm text-cream/70 w-10 shrink-0 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold tracking-tighter mb-2 text-cream">{principle.title}</h3>
                  <p className="text-cream/60 text-base sm:text-lg md:text-xl font-light leading-relaxed">
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
