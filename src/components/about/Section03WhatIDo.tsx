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
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20 border-t border-gray-100">
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
            className={`flex flex-col md:flex-row gap-6 md:gap-12 p-8 md:p-12 bg-white rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${
              i % 2 !== 0 ? 'md:flex-row-reverse bg-gray-50/50' : ''
            }`}
          >
            <div className="flex-1 flex flex-col justify-center">
              <span className="text-gray-300 font-mono text-sm font-bold tracking-widest mb-4">0{i + 1}</span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed font-light">{feature.desc}</p>
            </div>
            
            {/* Minimal visual placeholder for alternating layout balance */}
            <div className="flex-1 min-h-[160px] md:min-h-[240px] rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center relative overflow-hidden">
               <img 
                 src={feature.image} 
                 alt={feature.title} 
                 className="w-full h-full object-cover object-top" 
               />
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at center, black 1px, transparent 1px)`, backgroundSize: '16px 16px' }} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
