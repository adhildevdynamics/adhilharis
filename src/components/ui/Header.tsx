import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] w-full bg-light/90 backdrop-blur-md border-b border-black/5 shadow-sm transition-all duration-300">
      <nav className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-5 flex justify-between items-center pointer-events-auto">
        <Link 
          to="/" 
          onClick={(e) => {
            if (isHome) {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className="text-3xl font-bold tracking-tighter text-[#3F2B73]"
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Adhil.
          </motion.div>
        </Link>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="hidden md:flex items-center gap-8 text-sm font-medium">
          {isHome ? (
            <a href="#work" className="hover:text-black text-gray-500 transition-colors">Work</a>
          ) : (
            <a href="/#work" className="hover:text-black text-gray-500 transition-colors">Work</a>
          )}
          <Link to="/about" className="hover:text-black text-gray-500 transition-colors">About</Link>
          <a href="#footer" className="relative overflow-hidden bg-[#3F2B73]/80 backdrop-blur-lg border border-white/20 text-white px-6 py-2.5 rounded-full hover:bg-[#3F2B73]/90 transition-all shadow-lg font-semibold group flex items-center justify-center text-sm">
            {/* Continuous Glass shine animation using Framer Motion */}
            <motion.span 
              animate={{ x: ["-200%", "200%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute top-0 bottom-0 left-0 w-[150%] bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12" 
            />
            <span className="relative z-10">Hire Me</span>
          </a>
        </motion.div>
      </nav>
    </header>
  );
};
