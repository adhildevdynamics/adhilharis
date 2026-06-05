import { motion } from 'framer-motion';
import { MagneticButton } from '../ui/MagneticButton';
import { Link } from 'react-router-dom';

export const ClosingStatement = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48 flex flex-col items-center text-center relative z-10">
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1 }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter text-gray-900 leading-[1.1] mb-8">
          Good frontend is invisible. <br />
          <span className="text-[#3F2B73]/80">It simply feels right.</span>
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto">
          That's the kind of experience I try to build.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col sm:flex-row gap-6 items-center"
      >
        <MagneticButton>
          <Link to="/" className="inline-flex items-center justify-center bg-black text-white px-8 py-5 rounded-full text-base font-medium hover:bg-gray-800 transition-colors shadow-xl shadow-black/10">
            View My Work
          </Link>
        </MagneticButton>
        
        <MagneticButton>
          <a href="mailto:hello@adhil.com" className="inline-flex items-center justify-center bg-transparent border border-black/10 text-black px-8 py-5 rounded-full text-base font-medium hover:bg-black/5 transition-colors">
            Contact Me
          </a>
        </MagneticButton>
      </motion.div>

    </section>
  );
};
