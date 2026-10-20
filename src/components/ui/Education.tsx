import { motion } from 'framer-motion';
import { Tilt3D } from './Tilt3D';

export const Education = () => {
  return (
    <section className="w-full py-24 md:py-36 bg-light relative z-20">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-metal/40 pb-8 mb-14 md:mb-20">
          <h2 className="display-lg font-display font-bold tracking-tighter text-ink">Education</h2>
          <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent mt-4 md:mt-0">06 / Background</span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <Tilt3D max={4} scale={1.005} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 bg-cream border border-dark/10 rounded-sm p-8 md:p-14 shadow-[0_20px_50px_-28px_rgba(17,17,17,0.3)]">
            <span className="lg:col-span-3 font-mono text-sm text-pop">2019 — 2022</span>
            <div className="lg:col-span-9 flex flex-col gap-4">
              <h3 className="text-2xl md:text-4xl font-display font-bold tracking-tighter text-dark">Mahatma Gandhi University</h3>
              <h4 className="text-lg md:text-xl text-dark/70 font-light">Bachelor of Computer Applications</h4>
              <p className="text-lg md:text-xl text-dark/70 font-light leading-relaxed max-w-2xl">
                My academic foundation helped me build strong fundamentals in programming, problem-solving, and software development, which later evolved into frontend and mobile application development.
              </p>
            </div>
          </Tilt3D>
        </motion.div>
      </div>
    </section>
  );
};
