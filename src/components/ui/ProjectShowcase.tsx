import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticButton } from './MagneticButton';

const projects = [
  {
    id: 1,
    title: 'Fayas Muhammed',
    category: 'Personal Portfolio',
    description: 'A modern, interactive developer portfolio showcasing projects, skills, and professional experience with smooth animations and dynamic layouts.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    title: 'Flavorasia',
    category: 'E-Commerce Platform',
    description: 'A premium e-commerce platform and brand identity for a modern culinary experience, featuring seamless checkout and dynamic product showcases.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
  },
  {
    id: 3,
    title: 'ByteBridge',
    category: 'Digital Agency',
    description: 'Connecting ideas to digital solutions through technology. A high-end digital agency platform bridging the gap between complex engineering and elegant design.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'GSAP'],
  },
  {
    id: 4,
    title: 'Noir Editorial',
    category: 'Digital Magazine',
    description: 'A sleek, dark-themed editorial platform delivering high-quality content with a cinematic reading experience and rich media integration.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'CMS'],
  },
  {
    id: 5,
    title: 'Study Bloom Digital',
    category: 'EdTech Platform',
    description: 'An engaging digital learning environment designed to help students bloom through interactive courses, progress tracking, and accessible resources.',
    tech: ['React', 'TypeScript', 'Redux', 'Node.js'],
  }
];

export const ProjectShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="w-full py-32 flex flex-col items-center pointer-events-none bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="mb-24 flex flex-col md:flex-row justify-between items-end border-b border-black pb-8"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-gray-500 mb-4">Selected Works</h2>
            <h3 className="text-6xl md:text-8xl font-bold tracking-tighter text-black">Case Studies</h3>
          </div>
          <div className="text-right text-gray-400 font-mono mt-8 md:mt-0">
            01 — {String(projects.length).padStart(2, '0')}
          </div>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => {
            const y = useTransform(
              scrollYProgress, 
              [0, 1], 
              [100 * (index + 1), -100 * (index + 1)]
            );
            
            const scale = useTransform(
              scrollYProgress,
              [0, 0.5, 1],
              [0.9, 1, 0.95]
            );

            const opacity = useTransform(
              scrollYProgress,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0]
            );

            return (
              <motion.div 
                key={project.id}
                style={{ y, scale, opacity }}
                className="w-full max-w-6xl mx-auto rounded-none pointer-events-auto group"
              >
                <div className="bg-gray-50 border border-gray-200 p-8 md:p-16 h-full flex flex-col md:flex-row gap-12 items-center hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-shadow duration-700">
                  
                  {/* Left Side: Content */}
                  <div className="flex-1 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-widest text-gray-400 font-mono">{String(index + 1).padStart(2, '0')} // {project.category}</span>
                      <h4 className="text-4xl md:text-6xl font-bold tracking-tighter text-black">{project.title}</h4>
                    </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed font-light max-w-md">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mt-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="text-xs tracking-wider px-4 py-2 rounded-full border border-gray-300 text-gray-500 bg-white">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-8">
                      <MagneticButton>
                        View Case Study
                      </MagneticButton>
                    </div>
                  </div>
                  
                  {/* Right Side: Visual Placeholder */}
                  <div className="flex-1 w-full aspect-square md:aspect-[4/3] bg-gray-200 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="absolute inset-0 bg-white/10 group-hover:scale-105 transition-transform duration-700 ease-out" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-30 text-black">
                      <span className="text-sm tracking-widest uppercase font-mono">Image Asset</span>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
