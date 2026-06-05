import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const projects = [
  {
    title: "GoTicketWeb (ITSM)",
    tech: "React.js / Redux Toolkit / MSAL",
    description: "A React-based IT Service Management platform used to create, track, and manage support tickets featuring an AI-powered conversational assistant.",
    color: "bg-[#e8ecef]",
    features: ["Azure AD Authentication", "Conversational AI", "Dashboard & Reports"],
    image: "/react_ticketing_dashboard.png"
  },
  {
    title: "GoTicket Mobile App",
    tech: "React Native / Expo / Firebase",
    description: "A cross-platform mobile application designed for field agents and customers to manage tickets, sales, and communication.",
    color: "bg-[#f2e9e4]",
    features: ["Real-time Chat", "Push Notifications", "Bilingual Support"],
    image: "/ticket_dashboard_mobile.png"
  },
  {
    title: "Flux OnGo",
    tech: "React Native / SignalR / Redux",
    description: "A mobile application for managing inspections, tickets, claims, approvals, and sales workflows with real-time updates.",
    color: "bg-[#e5e9f0]",
    features: ["Inspection Management", "Offline Features", "QR-based Operations"],
    image: "/sales_analytics_mobile.png"
  },
  {
    title: "ByteBridge",
    tech: "TypeScript",
    description: "Connecting ideas to digital solutions through technology.",
    color: "bg-[#e2e8f0]",
    features: ["Digital Solutions", "TypeScript", "Architecture"],
    image: "/react_ticketing_dashboard.png"
  },
  {
    title: "flavorasia",
    tech: "TypeScript",
    description: "An open source TypeScript project focusing on delivering robust frontend features and smooth user experiences.",
    color: "bg-[#f1f5f9]",
    features: ["TypeScript", "Frontend UI", "Open Source"],
    image: "/sales_analytics_mobile.png"
  },
  {
    title: "Personal Portfolio",
    tech: "TypeScript",
    description: "A public TypeScript repository demonstrating clean architecture and modern web development practices.",
    color: "bg-[#f8fafc]",
    features: ["TypeScript", "Web Development", "Clean Code"],
    image: "/ticket_dashboard_mobile.png"
  },
  {
    title: "Noir Editorial",
    tech: "TypeScript / UI Engineering",
    description: "A digital editorial experience featuring modern typography, elegant layouts, and smooth animations.",
    color: "bg-[#e5e5e5]",
    features: ["Digital Editorial", "Typography", "Smooth Animations"],
    image: "/sales_analytics_mobile.png"
  },
  {
    title: "Mehzaas Makeover Brochure",
    tech: "TypeScript / Frontend UI",
    description: "A digital brochure and portfolio showcasing makeover services with a premium and elegant user interface.",
    color: "bg-[#f9f9f9]",
    features: ["Digital Brochure", "Portfolio", "Premium UI"],
    image: "/react_ticketing_dashboard.png"
  },
  {
    title: "Study Bloom Digital",
    tech: "TypeScript / EdTech",
    description: "An educational platform designed to enhance the digital learning experience with intuitive interactions.",
    color: "bg-[#ececec]",
    features: ["EdTech", "Digital Learning", "Interactive"],
    image: "/ticket_dashboard_mobile.png"
  }
];

export const HorizontalShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Maps scroll progress to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(projects.length - 1) * 100 / projects.length}%`]);

  return (
    <section id="work" ref={containerRef} style={{ height: `${projects.length * 75}vh` }} className="relative bg-black z-30">
      
      {/* Sticky container that holds the horizontally scrolling track */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        
        <motion.div style={{ x, width: `${projects.length * 100}vw` }} className="flex h-screen">
          
          {projects.map((project, index) => (
            <div key={index} className={`w-screen h-screen flex items-center justify-center p-6 md:p-24 ${project.color} relative`}>
              
              <div className="max-w-[1400px] w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24 relative z-10">
                
                {/* Left Info */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                  <h4 className="text-sm font-bold tracking-widest uppercase text-gray-500">Case Study 0{index + 1}</h4>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-black leading-[1.1]">{project.title}</h2>
                  <h3 className="text-xl md:text-2xl font-mono text-gray-600">{project.tech}</h3>
                  <p className="text-lg md:text-2xl text-gray-700 font-light leading-relaxed mt-4">
                    {project.description}
                  </p>
                  
                  <div className="flex gap-4 mt-8 flex-wrap">
                    {project.features.map(f => (
                      <span key={f} className="px-4 py-2 border border-black/20 rounded-full text-sm font-medium text-black">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Device Mockup */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <div className="w-full max-w-[500px] aspect-square bg-white/40 backdrop-blur-3xl rounded-[3rem] shadow-2xl border border-white/60 p-8 flex flex-col overflow-hidden relative">
                    <div className="w-full flex justify-between items-center mb-8">
                       <div className="w-32 h-6 bg-black/10 rounded-full" />
                       <div className="w-12 h-12 bg-black/10 rounded-full" />
                    </div>
                    <div className="flex-1 w-full bg-white rounded-2xl shadow-inner border border-black/5 overflow-hidden flex flex-col relative">
                      <div className="w-full h-10 bg-gray-50 border-b border-black/5 flex items-center px-4 gap-2 shrink-0 relative z-10">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 w-full h-full relative bg-gray-100 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-12 left-12 md:left-24 text-black/40 font-mono text-sm font-bold">
                {index + 1} / {projects.length}
              </div>

            </div>
          ))}
          
        </motion.div>

      </div>
    </section>
  );
};
