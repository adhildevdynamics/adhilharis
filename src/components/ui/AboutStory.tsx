import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const AboutStory = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const storyLines = [
    "I’m a Frontend Developer focused on building scalable web and mobile applications.",
    "My work sits between clean UI, smooth user experience, and strong frontend architecture."
  ];

  const skillStatements = [
    "React.js for modern web interfaces.",
    "React Native for mobile applications.",
    "UI engineering for polished experiences.",
    "API integration for real-world products.",
    "Performance-focused development for scalable apps."
  ];

  // Mouse Parallax Logic
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const centerX = typeof window !== 'undefined' ? window.innerWidth / 2 : 0;
  const centerY = typeof window !== 'undefined' ? window.innerHeight / 2 : 0;
  const mouseX = (mousePosition.x - centerX) * 0.05;
  const mouseY = (mousePosition.y - centerY) * 0.05;

  // 3D Stack Scroll Separation Transforms
  const dashX = useTransform(scrollYProgress, [0, 1], [20, 180]);
  const dashY = useTransform(scrollYProgress, [0, 1], [-40, -280]);
  const dashRot = useTransform(scrollYProgress, [0, 1], [5, 12]);

  const loginX = useTransform(scrollYProgress, [0, 1], [-40, -220]);
  const loginY = useTransform(scrollYProgress, [0, 1], [10, -80]);
  const loginRot = useTransform(scrollYProgress, [0, 1], [-5, -15]);

  const salesX = useTransform(scrollYProgress, [0, 1], [40, 220]);
  const salesY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const salesRot = useTransform(scrollYProgress, [0, 1], [2, 10]);

  const ticketX = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const ticketY = useTransform(scrollYProgress, [0, 1], [50, 300]);
  const ticketRot = useTransform(scrollYProgress, [0, 1], [-2, -5]);

  const extraOneX = useTransform(scrollYProgress, [0, 1], [-80, -320]);
  const extraOneY = useTransform(scrollYProgress, [0, 1], [-60, 20]);
  const extraOneRot = useTransform(scrollYProgress, [0, 1], [8, 25]);

  const extraTwoX = useTransform(scrollYProgress, [0, 1], [80, 320]);
  const extraTwoY = useTransform(scrollYProgress, [0, 1], [60, -100]);
  const extraTwoRot = useTransform(scrollYProgress, [0, 1], [-8, -25]);

  const detailsOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  return (
    <section ref={containerRef} className="h-[300vh] relative bg-light z-20" style={{ overflow: 'clip' }}>
      
      {/* Background radial gradient to give it depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-200/50 via-transparent to-transparent pointer-events-none" />

      <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-x-hidden max-w-[1600px] mx-auto px-6 lg:px-24 pt-24">
        
        {/* Left Side: Pinned Text Story */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-start pt-12 md:pt-16 pr-0 md:pr-12 relative z-10 overflow-y-auto no-scrollbar pb-12">
          <div className="flex flex-col gap-8 mb-16">
            {storyLines.map((line, i) => {
              const opacity = useTransform(scrollYProgress, [i * 0.15, (i * 0.15) + 0.15], [0.1, 1]);
              return (
                <motion.h3 
                  key={i} 
                  style={{ opacity }}
                  className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-black"
                >
                  {line}
                </motion.h3>
              );
            })}
          </div>

          <div className="flex flex-col gap-6">
            {skillStatements.map((skill, i) => {
              const opacity = useTransform(scrollYProgress, [0.4 + (i * 0.1), 0.5 + (i * 0.1)], [0, 1]);
              const x = useTransform(scrollYProgress, [0.4 + (i * 0.1), 0.5 + (i * 0.1)], [-20, 0]);
              return (
                <motion.div 
                  key={i} 
                  style={{ opacity, x }}
                  className="flex items-center gap-4 text-lg md:text-2xl font-light text-gray-700"
                >
                  <div className="w-2 h-2 rounded-full bg-black shrink-0" />
                  <p>{skill}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right Side: 3D Layered Project Stack */}
        <div className="w-full md:w-1/2 h-full relative hidden md:flex items-center justify-center perspective-[1000px]">
           


           {/* 1. React Ticketing Dashboard (Top Back) */}
           <motion.div style={{ x: dashX, y: dashY, rotate: dashRot, zIndex: 1 }} className="absolute top-1/2 left-1/2 -ml-[120px] -mt-[180px] w-[240px] md:w-[280px]">
             <motion.div animate={{ x: mouseX * -0.5, y: mouseY * -0.5 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
               <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }} className="group relative glass p-2 rounded-3xl shadow-2xl border border-white/40 bg-white/20 backdrop-blur-xl transition-colors duration-300 hover:bg-white/40">
                 <img src="/react_ticketing_dashboard.png" alt="React Ticketing Dashboard" className="w-full h-auto rounded-2xl object-cover shadow-inner" />
               </motion.div>
             </motion.div>
           </motion.div>

           {/* 2. React Native Login Screen (Left) */}
           <motion.div style={{ x: loginX, y: loginY, rotate: loginRot, zIndex: 2 }} className="absolute top-1/2 left-1/2 -ml-[140px] -mt-[140px] w-[220px] md:w-[240px]">
             <motion.div animate={{ x: mouseX * 0.8, y: mouseY * 0.8 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
               <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }} className="group relative glass p-2 rounded-[2rem] shadow-2xl border border-white/40 bg-white/20 backdrop-blur-xl transition-colors duration-300 hover:bg-white/40">
                 <img src="/react_native_login.png" alt="React Native Login" className="w-full h-auto rounded-[1.5rem] object-cover shadow-inner" />
               </motion.div>
             </motion.div>
           </motion.div>

           {/* 3. Sales Analytics Screen (Right) */}
           <motion.div style={{ x: salesX, y: salesY, rotate: salesRot, zIndex: 3 }} className="absolute top-1/2 left-1/2 -ml-[100px] -mt-[150px] w-[220px] md:w-[240px]">
             <motion.div animate={{ x: mouseX * 1.2, y: mouseY * 1.2 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
               <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }} className="group relative glass p-2 rounded-[2rem] shadow-2xl border border-white/40 bg-white/20 backdrop-blur-xl transition-colors duration-300 hover:bg-white/40">
                 <img src="/sales_analytics_mobile.png" alt="Sales Analytics" className="w-full h-auto rounded-[1.5rem] object-cover shadow-inner" />
               </motion.div>
             </motion.div>
           </motion.div>

           {/* 4. Ticket Dashboard Mobile (Front Bottom) */}
           <motion.div style={{ x: ticketX, y: ticketY, rotate: ticketRot, zIndex: 4 }} className="absolute top-1/2 left-1/2 -ml-[130px] -mt-[120px] w-[230px] md:w-[260px]">
             <motion.div animate={{ x: mouseX * 1.5, y: mouseY * 1.5 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
               <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }} className="group relative glass p-2 rounded-[2rem] shadow-2xl border border-white/40 bg-white/20 backdrop-blur-xl transition-colors duration-300 hover:bg-white/40">
                 <img src="/ticket_dashboard_mobile.png" alt="Ticket Dashboard" className="w-full h-auto rounded-[1.5rem] object-cover shadow-inner" />
               </motion.div>
             </motion.div>
           </motion.div>

           {/* 5. Extra Image 1 (Far Left Back) */}
           <motion.div style={{ x: extraOneX, y: extraOneY, rotate: extraOneRot, zIndex: 0 }} className="absolute top-1/2 left-1/2 -ml-[220px] -mt-[60px] w-[180px] md:w-[200px]">
             <motion.div animate={{ x: mouseX * -0.8, y: mouseY * -0.8 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
               <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }} className="group relative glass p-2 rounded-[2rem] shadow-2xl border border-white/40 bg-white/20 backdrop-blur-xl transition-colors duration-300 hover:bg-white/40">
                 <img src="/react_native_login.png" alt="App Preview" className="w-full h-auto rounded-[1.5rem] object-cover shadow-inner" />
               </motion.div>
             </motion.div>
           </motion.div>

           {/* 6. Extra Image 2 (Far Right Front) */}
           <motion.div style={{ x: extraTwoX, y: extraTwoY, rotate: extraTwoRot, zIndex: 5 }} className="absolute top-1/2 left-1/2 -ml-[20px] -mt-[50px] w-[190px] md:w-[210px]">
             <motion.div animate={{ x: mouseX * 2.0, y: mouseY * 2.0 }} transition={{ type: "spring", stiffness: 50, damping: 20 }}>
               <motion.div whileHover={{ scale: 1.05, rotate: 0, zIndex: 50 }} className="group relative glass p-2 rounded-[2rem] shadow-2xl border border-white/40 bg-white/20 backdrop-blur-xl transition-colors duration-300 hover:bg-white/40">
                 <img src="/sales_analytics_mobile.png" alt="App Preview" className="w-full h-auto rounded-[1.5rem] object-cover shadow-inner" />
               </motion.div>
             </motion.div>
           </motion.div>

        </div>

      </div>
    </section>
  );
};
