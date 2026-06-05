import { motion } from 'framer-motion';

const skills = [
  "React.js", "React Native", "JavaScript", "TypeScript", 
  "Expo", "Redux", "Material UI", "Tailwind CSS", 
  "API Integration", "UI Animation", "Responsive Design", "Git"
];

export const SkillsMarquee = () => {
  return (
    <section className="w-full py-24 md:py-32 overflow-hidden border-y border-black/5 bg-white/40">
      <div className="flex relative">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
          className="flex whitespace-nowrap items-center w-max"
        >
          {/* Double array to create seamless loop */}
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => {
            const isOutline = index % 2 !== 0;
            return (
              <div key={index} className="flex items-center">
                <span 
                  className={`text-5xl md:text-7xl font-bold tracking-tighter uppercase px-8 md:px-12
                    ${isOutline 
                      ? 'text-transparent' 
                      : 'text-gray-900/20'
                    }
                  `}
                  style={{
                    WebkitTextStroke: isOutline ? '1px rgba(0,0,0,0.15)' : 'none'
                  }}
                >
                  {skill}
                </span>
                <span className="text-gray-300 text-3xl md:text-4xl">
                  •
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
