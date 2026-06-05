import { motion } from 'framer-motion';

const explorations = [
  "AI-assisted development workflows",
  "Frontend performance optimization",
  "Scalable mobile applications",
  "Modern developer productivity tools"
];

export const Section07Focus = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-24 border-t border-gray-100">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-12"
      >
        Currently Exploring
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {explorations.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-8 bg-gray-50 border border-gray-100 rounded-2xl flex items-center justify-center text-center min-h-[200px]"
          >
            <p className="text-lg font-medium text-gray-800 leading-snug">
              {item}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
