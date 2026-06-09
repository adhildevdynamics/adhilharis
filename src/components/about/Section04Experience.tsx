import { motion } from 'framer-motion';

export const Section04Experience = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20 border-t border-gray-100">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-12"
      >
        Current Experience
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">Dev Dynamics</h3>
            <p className="text-lg text-gray-500 font-medium">Frontend Developer</p>
          </div>
          <div className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold border border-green-100">
            Present
          </div>
        </div>

        <p className="text-lg text-gray-600 leading-relaxed font-light max-w-4xl mb-10">
          Building enterprise web and mobile applications using React.js and React Native, including dashboard systems, workflow-driven applications, API integrations, authentication systems, and scalable frontend architecture.
        </p>

        <div className="flex flex-wrap gap-3">
          {["React.js", "React Native", "Mobile Apps", "Frontend Architecture"].map(chip => (
            <span key={chip} className="px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm font-medium text-gray-700">
              {chip}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
