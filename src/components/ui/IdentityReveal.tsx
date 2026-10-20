import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const categories = [
  { label: "Web Applications", detail: "React.js · Redux Toolkit · TypeScript" },
  { label: "Mobile Applications", detail: "React Native · Expo · Firebase" },
  { label: "Enterprise Systems", detail: "ITSM Platforms · Azure AD · MSAL" },
  { label: "Digital Experiences", detail: "UI Engineering · Motion · Framer Motion" },
];

const FlipCard = ({ label, detail, index }: { label: string; detail: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 90%", "start 40%"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [90, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  return (
    <div ref={ref} className="scene">
      <motion.div
        style={{ rotateX, opacity, transformStyle: 'preserve-3d', transformOrigin: 'bottom' }}
        className="group flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-6 border-b border-metal/30 py-8 md:py-12 cursor-default"
      >
        <div className="flex items-baseline gap-4 md:gap-8">
          <span className="font-mono text-xs text-accent">0{index + 1}</span>
          <h3 className="display-lg font-display font-bold tracking-tighter text-ink group-hover:text-accent-dark transition-colors duration-500">
            {label}
          </h3>
        </div>
        <span className="font-mono text-xs md:text-sm text-secondary whitespace-nowrap pl-8 md:pl-0">
          {detail}
        </span>
      </motion.div>
    </div>
  );
};

export const IdentityReveal = () => {
  return (
    <section className="w-full bg-light relative z-20 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent mb-8 md:mb-12 block">
          03 / What I Build
        </span>

        <div className="flex flex-col border-t border-metal/30">
          {categories.map((cat, i) => (
            <FlipCard key={cat.label} label={cat.label} detail={cat.detail} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
