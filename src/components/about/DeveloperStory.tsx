import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Highlight = ({ children }: { children: React.ReactNode }) => (
  <span className="relative inline-block px-1 group cursor-default">
    <span className="relative z-10 font-medium text-black">{children}</span>
    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-[#3F2B73]/20 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100 z-0" />
    <span className="absolute bottom-1 left-0 w-full h-[6px] bg-black/5 z-[-1]" />
  </span>
);

export const DeveloperStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const textY = useTransform(scrollYProgress, [0.2, 0.4], [50, 0]);

  return (
    <section ref={containerRef} className="w-full max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-48 relative z-10">
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* Left Sticky Section */}
        <div className="w-full lg:w-1/3 relative">
          <div className="sticky top-40">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter leading-tight text-gray-900">
              Frontend is where <br />
              <span className="text-[#3F2B73]/80">logic meets emotion.</span>
            </h2>
          </div>
        </div>

        {/* Right Scrolling Content */}
        <div className="w-full lg:w-2/3 flex flex-col gap-12 text-2xl md:text-4xl lg:text-[2.5rem] leading-[1.4] font-light text-gray-600 tracking-tight">
          
          <motion.p style={{ opacity: textOpacity, y: textY }}>
            I’m a Frontend Developer focused on building scalable web and mobile applications. My work sits between clean <Highlight>UI Engineering</Highlight>, smooth user experience, and strong <Highlight>Frontend Architecture</Highlight>.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            From <Highlight>React.js</Highlight> dashboards to <Highlight>React Native</Highlight> mobile apps, I focus on building products that are usable, responsive, and ready for real users.
          </motion.p>
          
        </div>
      </div>
    </section>
  );
};
