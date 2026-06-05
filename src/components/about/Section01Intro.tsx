import { motion } from 'framer-motion';

export const Section01Intro = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 pt-32 pb-16 md:pb-24">
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
          className="flex flex-col gap-10"
        >
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
            Frontend Developer specializing in React.js and React Native, focused on building scalable web and mobile experiences with clean architecture and thoughtful user experiences.
          </p>

          <div className="flex flex-col gap-6">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Location</h3>
              <p className="text-base text-gray-900 font-medium">UAE</p>
            </div>
            
            <div>
              <h3 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-2">Current Focus</h3>
              <ul className="flex flex-col gap-2 text-base text-gray-900 font-medium">
                <li>Web Applications</li>
                <li>Mobile Applications</li>
                <li>UI Engineering</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
