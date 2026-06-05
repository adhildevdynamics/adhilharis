import { useRef, useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const skillsData = [
  { name: 'React.js', category: 'Web' },
  { name: 'TypeScript', category: 'Web' },
  { name: 'Next.js', category: 'Web' },
  { name: 'React Native', category: 'Mobile' },
  { name: 'Expo', category: 'Mobile' },
  { name: 'Redux', category: 'Mobile' },
  { name: 'Tailwind CSS', category: 'UI' },
  { name: 'Framer Motion', category: 'UI' },
  { name: 'Material UI', category: 'UI' },
  { name: 'Responsive Design', category: 'UI' },
  { name: 'UI Animation', category: 'UI' },
  { name: 'Git', category: 'Tools' },
  { name: 'API Integration', category: 'Tools' },
  { name: 'Frontend Arch.', category: 'Tools' }
];

const categories = ['Web', 'Mobile', 'UI', 'Tools'];

export const SkillsUniverse = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Pre-calculate random scatter positions for the skills
  const scatteredPositions = useMemo(() => {
    return skillsData.map(() => ({
      x: (Math.random() - 0.5) * 1500, // Random X offset between -750 and 750
      y: (Math.random() - 0.5) * 1000, // Random Y offset between -500 and 500
      rotate: (Math.random() - 0.5) * 180,
      scale: Math.random() * 1.5 + 0.5
    }));
  }, []);

  return (
    <section ref={containerRef} className="h-[150vh] relative bg-light z-20">
      
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center px-6 lg:px-24 max-w-[1600px] mx-auto overflow-hidden">
        
        <motion.h2 
          style={{ opacity: useTransform(scrollYProgress, [0.6, 0.8], [0, 1]) }}
          className="text-4xl md:text-6xl font-bold tracking-tighter mb-24 absolute top-24"
        >
          Organized Chaos
        </motion.h2>

        <div className="w-full h-full flex flex-col md:flex-row justify-center md:justify-around items-center md:items-start pt-48 gap-12 md:gap-0">
          {categories.map((category) => (
            <div key={category} className="flex flex-col items-center w-full md:w-1/4 gap-4 relative z-10">
              
              <motion.h3 
                style={{ opacity: useTransform(scrollYProgress, [0.7, 0.9], [0, 1]) }}
                className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-8 border-b border-gray-300 pb-2 w-3/4 text-center"
              >
                {category}
              </motion.h3>
              
              {skillsData.filter(s => s.category === category).map((skill) => {
                const globalIndex = skillsData.findIndex(s => s.name === skill.name);
                const scatter = scatteredPositions[globalIndex];
                
                // Animate from scattered (0) to organized (1)
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const x = useTransform(scrollYProgress, [0, 0.7], [scatter.x, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const y = useTransform(scrollYProgress, [0, 0.7], [scatter.y, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const rotate = useTransform(scrollYProgress, [0, 0.7], [scatter.rotate, 0]);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const scale = useTransform(scrollYProgress, [0, 0.7], [scatter.scale, 1]);

                return (
                  <motion.div 
                    key={skill.name}
                    style={{ x, y, rotate, scale }}
                    className="relative px-6 py-3 rounded-full text-sm md:text-lg font-medium text-gray-700 whitespace-nowrap bg-white/30 backdrop-blur-xl border border-white/60 shadow-[inset_0_4px_10px_rgba(255,255,255,0.9),inset_8px_0_15px_rgba(0,0,0,0.05),inset_-8px_0_15px_rgba(0,0,0,0.05),0_10px_20px_rgba(0,0,0,0.05)]"
                  >
                    {skill.name}
                  </motion.div>
                );
              })}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
