import { motion } from 'framer-motion';

export const Education = () => {
  return (
    <section className="w-full py-32 bg-light text-black relative z-20 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-24">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-12"
        >
          Education
        </motion.h2>

        <div className="relative border-l border-black/10 pl-8 md:pl-12 py-8">
          
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="absolute left-[-1px] top-0 w-[2px] bg-black origin-top"
          />

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-black border-4 border-light" />
            
            <h3 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4">Mahatma Gandhi University</h3>
            <h4 className="text-xl md:text-2xl text-gray-500 font-light mb-8">Bachelor of Computer Applications</h4>
            
            <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed max-w-2xl">
              My academic foundation helped me build strong fundamentals in programming, problem-solving, and software development, which later evolved into frontend and mobile application development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
