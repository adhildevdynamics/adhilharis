import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import aboutImage from '../../assets/about.jpg';

const skillStatements = [
  "React.js for modern web interfaces.",
  "React Native for mobile applications.",
  "UI engineering for polished experiences.",
  "API integration for real-world products.",
  "Performance-focused development for scalable apps.",
];

export const AboutStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // The portrait panel behaves like a 3D card rotating open as it enters view.
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [35, 0, -20]);
  const translateZ = useTransform(scrollYProgress, [0, 0.5, 1], [-200, 0, -100]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section id="about" ref={containerRef} className="w-full bg-light relative z-20 py-28 md:py-40 scene">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent mb-6 md:mb-10"
        >
          01 / About
        </motion.span>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 display-lg font-display font-bold tracking-tighter text-ink"
          >
            I build digital experiences across web &amp; mobile.
          </motion.h2>

          <div className="lg:col-span-4 lg:col-start-9 flex flex-col justify-end scene-flat">
            <motion.div
              style={{ rotateY, translateZ, opacity: cardOpacity, transformStyle: 'preserve-3d' }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-20px_rgba(17,17,17,0.35)] border border-metal/30"
            >
              <img
                src={aboutImage}
                alt="Adhil Haris"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 via-transparent to-transparent" />
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-6 mt-16 md:mt-24">
          <div className="lg:col-span-5 flex flex-col gap-6">
            {["I’m a Frontend Developer focused on building scalable web and mobile applications.",
              "My work sits between clean UI, smooth user experience, and strong frontend architecture."].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-xl md:text-2xl text-secondary font-light leading-relaxed"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-4 md:gap-5 border-t border-metal/30 pt-8 lg:pt-0 lg:border-t-0">
            {skillStatements.map((skill, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="flex items-baseline gap-4 md:gap-6 border-b border-metal/30 pb-4 md:pb-5"
              >
                <span className="text-xs font-mono text-accent shrink-0">0{i + 1}</span>
                <p className="text-lg md:text-xl font-medium text-ink">{skill}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
