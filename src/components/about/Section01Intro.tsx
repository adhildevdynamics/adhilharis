import { motion } from 'framer-motion';
import aboutImage from '../../assets/about.jpg';

export const Section01Intro = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-6 md:pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-12 lg:gap-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            About <br />
            <span className="text-gray-500">Adhil Haris</span>
          </h1>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full aspect-[4/3] rounded-[2rem] overflow-hidden shadow-sm"
          >
            <img 
              src={aboutImage} 
              alt="Adhil Haris" 
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-8 md:p-12 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[2.5rem] overflow-hidden flex flex-col gap-8 group hover:bg-white/50 hover:shadow-[0_16px_48px_rgba(63,43,115,0.05)] transition-all duration-500"
        >
          {/* Glass Glare */}
          <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/60 to-transparent opacity-50 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col gap-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            <p>
              I’m a Frontend Developer specializing in building scalable web and mobile applications using React and React Native.
            </p>
            <p>
              I have hands-on experience developing enterprise-level ITSM platforms and B2B mobile applications, focusing on performance, user experience, and real-time systems.
            </p>
            <p>
              Currently, I’m working on internal enterprise products including ticketing platforms, field-service mobile apps, and inspection management systems.
            </p>
          </div>

          <div className="relative z-10 border-t border-white/60 pt-8 mt-2">
            <h3 className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold mb-6">Key Focus Areas</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-800 font-medium">
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-[#3F2B73]/60 shrink-0 shadow-sm border border-white/80">✦</span>
                AI-powered ticketing
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-[#3F2B73]/60 shrink-0 shadow-sm border border-white/80">✦</span>
                Real-time chat apps
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-[#3F2B73]/60 shrink-0 shadow-sm border border-white/80">✦</span>
                Azure AD (MSAL)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-[#3F2B73]/60 shrink-0 shadow-sm border border-white/80">✦</span>
                Bilingual (LTR/RTL)
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-[#3F2B73]/60 shrink-0 shadow-sm border border-white/80">✦</span>
                Data-driven dashboards
              </li>
              <li className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-[#3F2B73]/60 shrink-0 shadow-sm border border-white/80">✦</span>
                Clean UI architecture
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
