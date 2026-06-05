import { motion } from 'framer-motion';

export const AboutHero = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 md:py-32 flex flex-col relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-24"
      >
        <span className="text-sm font-mono tracking-widest uppercase text-[#3F2B73] font-semibold">About Adhil</span>
      </motion.div>

      <motion.h1 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-[8rem] leading-[1.05] font-bold tracking-tighter max-w-5xl text-gray-900 mb-32"
      >
        I build interfaces that feel <br className="hidden md:block" />
        <span className="text-[#3F2B73]/80">clean, fast, and purposeful.</span>
      </motion.h1>

      <div className="w-full border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
          className="flex flex-col gap-1 text-lg font-medium"
        >
          <span className="text-black">Adhil Haris</span>
          <span className="text-gray-500">Based in UAE</span>
        </motion.div>

        <motion.div 
          initial={{ height: 0 }} animate={{ height: '40px' }} transition={{ delay: 0.8 }}
          className="hidden md:block w-[1px] bg-black/10 mx-auto"
        />

        <div className="flex flex-col gap-1 text-lg font-medium text-right md:text-left items-end md:items-start">
          {[
            { text: "Frontend Developer", active: true },
            { text: "React.js Developer", active: false },
            { text: "React Native Developer", active: false },
            { text: "Mobile App Developer", active: false }
          ].map((role, i) => (
            <motion.div 
              key={role.text}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 + i * 0.1 }}
              className="flex items-center gap-3"
            >
              {role.active && <span className="w-2 h-2 rounded-full bg-[#3F2B73] animate-pulse" />}
              <span className={role.active ? "text-black" : "text-gray-400"}>{role.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
