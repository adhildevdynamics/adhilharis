import { motion } from 'framer-motion';
import { useState } from 'react';

const cards = [
  { num: "01", title: "Web Applications", desc: "Building scalable React.js interfaces, dashboards, and admin systems." },
  { num: "02", title: "Mobile Applications", desc: "Creating React Native mobile experiences with clean flows and smooth interactions." },
  { num: "03", title: "Dashboard Interfaces", desc: "Designing data-heavy screens that stay readable, structured, and responsive." },
  { num: "04", title: "UI Systems", desc: "Creating reusable components, layouts, and frontend patterns for long-term products." }
];

export const WhatIBuild = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-24 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-gray-900">What I Do</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {cards.map((card, i) => (
          <motion.div 
            key={card.num}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            onMouseMove={handleMouseMove}
            className="group relative bg-white/60 backdrop-blur-md border border-black/5 p-8 md:p-12 rounded-[2rem] overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)]"
          >
            {/* Soft Cursor Highlight */}
            <div 
              className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(63,43,115,0.03), transparent 40%)`
              }}
            />
            
            <div className="relative z-10 flex flex-col h-full">
              <span className="text-5xl md:text-6xl font-light text-gray-200 mb-8 block font-mono tracking-tighter transition-colors group-hover:text-[#3F2B73]/20">
                {card.num}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-500 font-light leading-relaxed text-lg">
                {card.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
