import { motion } from 'framer-motion';

const cards = [
  { label: "Role", value: "Frontend Developer", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
  )},
  { label: "Specialization", value: "React.js & React Native", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  )},
  { label: "Focus", value: "Scalable Product Development", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  )},
  { label: "Location", value: "United Arab Emirates", icon: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  )}
];

export const Section02Snapshot = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-6 md:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {cards.map((card, i) => (
          <motion.div 
            key={card.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="group relative flex flex-col p-8 rounded-[2rem] bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden hover:bg-white/50 hover:shadow-[0_16px_48px_rgba(63,43,115,0.05)] hover:-translate-y-1 transition-all duration-500"
          >
            {/* Liquid Glare */}
            <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/60 to-transparent opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <div className="relative z-10 flex items-center gap-3 text-gray-500 mb-6">
              <span className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center text-[#3F2B73]/60 shadow-sm border border-white/80">
                {card.icon}
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider">{card.label}</span>
            </div>
            <h3 className="relative z-10 text-2xl font-bold text-gray-900 mt-auto">{card.value}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
