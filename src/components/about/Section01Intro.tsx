import { motion } from 'framer-motion';

export const Section01Intro = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-8 md:pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight">
            About <br />
            <span className="text-gray-500">Adhil Haris</span>
          </h1>
        </motion.div>

        {/* Right Side */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-8"
        >
          <div className="flex flex-col gap-6 text-lg md:text-xl text-gray-700 leading-relaxed font-light">
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

          <div className="border-t border-gray-100 pt-8 mt-2">
            <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">Key Focus Areas</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-800 font-medium">
              <li className="flex items-center gap-3">
                <span className="text-[#3F2B73]/60 shrink-0">✦</span>
                AI-powered ticketing systems
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3F2B73]/60 shrink-0">✦</span>
                Real-time chat apps (SignalR)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3F2B73]/60 shrink-0">✦</span>
                Azure AD (MSAL) & OTP flows
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3F2B73]/60 shrink-0">✦</span>
                Bilingual (LTR/RTL) support
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3F2B73]/60 shrink-0">✦</span>
                Data-driven dashboards
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[#3F2B73]/60 shrink-0">✦</span>
                Clean & scalable UI architecture
              </li>
            </ul>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
