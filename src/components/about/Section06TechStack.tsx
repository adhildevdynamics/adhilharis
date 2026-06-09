import { motion } from 'framer-motion';

const techStack = [
  "React.js", "React Native", "JavaScript", "TypeScript",
  "Redux", "Expo", "Material UI", "Tailwind CSS",
  "REST APIs", "Git"
];

export const Section06TechStack = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20 border-t border-gray-100">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-12"
      >
        Technology Stack
      </motion.h2>

      <div className="flex flex-wrap gap-4">
        {techStack.map((tech, i) => (
          <motion.div 
            key={tech}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 font-medium shadow-sm hover:shadow-md hover:border-gray-300 transition-all cursor-default"
          >
            {tech}
          </motion.div>
        ))}
      </div>
    </section>
  );
};
