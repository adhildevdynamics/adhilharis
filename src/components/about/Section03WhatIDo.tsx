import { motion } from 'framer-motion';

const features = [
  {
    title: "Web Applications",
    desc: "Building responsive and scalable React.js applications with modern frontend architecture.",
    image: "/react_ticketing_dashboard.png"
  },
  {
    title: "Mobile Applications",
    desc: "Developing React Native applications focused on performance, usability, and maintainability.",
    image: "/ticket_dashboard_mobile.png"
  },
  {
    title: "UI Systems",
    desc: "Creating reusable interfaces and design-consistent component systems for long-term product growth.",
    image: "/sales_analytics_mobile.png"
  }
];

export const Section03WhatIDo = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 md:py-12 border-t border-gray-100">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 mb-16"
      >
        What I Build
      </motion.h2>

      <div className="flex flex-col gap-8">
        {features.map((feature, i) => (
          <motion.div 
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`group relative overflow-hidden flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-12 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[2.5rem] hover:bg-white/50 hover:shadow-[0_16px_48px_rgba(63,43,115,0.05)] transition-all duration-500 ${
              i % 2 !== 0 ? 'md:flex-row-reverse' : ''
            }`}
          >
            {/* Liquid Glare */}
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/60 to-transparent opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <span className="text-gray-400 font-mono text-sm font-bold tracking-[0.2em] mb-4">0{i + 1}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-lg text-gray-700 leading-relaxed font-light">{feature.desc}</p>
            </div>
            
            {/* Image Container */}
            <div className="relative z-10 flex-1 min-h-[160px] md:min-h-[280px] rounded-[2rem] bg-white/50 border border-white/80 shadow-inner flex items-center justify-center overflow-hidden">
               <img 
                 src={feature.image} 
                 alt={feature.title} 
                 className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
               />
               <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none mix-blend-overlay" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
