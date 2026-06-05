import { motion } from 'framer-motion';

export const PageTransition = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-black pointer-events-none"
      initial={{ y: '0%' }}
      animate={{ y: '-100%' }}
      transition={{ 
        duration: 1.2, 
        ease: [0.22, 1, 0.36, 1], // Custom cinematic easing
        delay: 0.2 // Slight delay before revealing
      }}
    />
  );
};
