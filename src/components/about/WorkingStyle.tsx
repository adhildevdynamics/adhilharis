import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Understand", desc: "I start by understanding the user flow, business requirement, and product goal." },
  { num: "02", title: "Structure", desc: "I break the UI into reusable components and clean frontend architecture." },
  { num: "03", title: "Build", desc: "I develop responsive, scalable interfaces using React.js or React Native." },
  { num: "04", title: "Refine", desc: "I polish spacing, animation, performance, and interaction details." },
  { num: "05", title: "Ship", desc: "I deliver production-ready experiences that are easy to maintain." }
];

export const WorkingStyle = () => {
  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-24"
      >
        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-gray-900">
          How I approach every product
        </h2>
      </motion.div>

      <div className="relative">
        {/* Connecting Lines */}
        {/* Horizontal Line (Desktop) */}
        <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[1px] bg-black/10 z-0" />
        {/* Vertical Line (Mobile) */}
        <div className="block lg:hidden absolute top-[5%] bottom-[5%] left-[28px] w-[1px] bg-black/10 z-0" />

        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-4 relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex-1 flex flex-row lg:flex-col items-start gap-6 lg:gap-8 group"
            >
              {/* Timeline Dot/Number Box */}
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#F8F6F1] border border-black/10 flex items-center justify-center transition-colors duration-500 group-hover:bg-[#3F2B73] group-hover:border-[#3F2B73]">
                <span className="text-sm font-mono font-bold text-gray-400 group-hover:text-white transition-colors duration-500">
                  {step.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col pt-2 lg:pt-0">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 font-light leading-relaxed max-w-[280px]">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
