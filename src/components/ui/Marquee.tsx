import { motion } from 'framer-motion';

const items = ["React.js", "React Native", "TypeScript", "Redux Toolkit", "Expo", "Firebase", "SignalR", "Frontend Engineering"];

export const Marquee = () => {
  return (
    <div className="w-full bg-dark text-cream overflow-hidden border-y border-black/40 py-5 relative z-20" style={{ transform: 'skewY(-1.2deg)', marginTop: '-1px', marginBottom: '-1px' }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, ease: 'linear', duration: 26 }}
        className="flex whitespace-nowrap items-center"
        style={{ transform: 'skewY(1.2deg)' }}
      >
        {[...Array(2)].map((_, loop) => (
          <span key={loop} className="flex items-center">
            {items.map((item, i) => (
              <span key={`${loop}-${i}`} className="flex items-center gap-8 px-8">
                <span className="text-2xl md:text-4xl font-display font-bold tracking-tight">{item}</span>
                <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              </span>
            ))}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
