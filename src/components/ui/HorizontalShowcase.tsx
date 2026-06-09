import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "GoTicketWeb (ITSM Web App)",
    tech: "React.js / Redux Toolkit / Material UI / MSAL / Axios / Formik / Yup / Framer Motion",
    description: "GoTicketWeb is a React-based IT Service Management (ITSM) platform used to create, track, and manage support tickets. Features a scalable component architecture, an AI chat-based ticket flow, and optimized API handling with MSAL session lifecycle and token refresh.",
    color: "bg-[#e8ecef]",
    features: ["Azure AD & MSAL", "Conversational AI", "Dashboard & Reports", "Token Refresh", "Formik & Yup"],
    image: "/react_ticketing_dashboard.png",
    images: ["/react_ticketing_dashboard.png", "/goticket_web_login.png"],
    isMobile: false
  },
  {
    title: "GoTicket Mobile App (B2B)",
    tech: "React Native / Expo / Redux Toolkit / Firebase / SignalR / i18n / AsyncStorage",
    description: "A cross-platform mobile application designed for field agents and customers to manage tickets, sales, and communication. Features a real-time messaging system with reconnect handling, a scalable API layer using RTK Query, and a multilingual UI with dynamic language switching.",
    color: "bg-[#f2e9e4]",
    features: ["OTP & QR Auth", "SignalR Chat", "Sales Dashboard", "Firebase FCM", "Bilingual (RTL)"],
    image: "/ticket_dashboard_mobile.png",
    images: ["/ticket_dashboard_mobile.png", "/react_native_login.png"],
    isMobile: true
  },
  {
    title: "Flux OnGo",
    tech: "React Native / SignalR / Redux",
    description: "A mobile application for managing inspections, tickets, claims, approvals, and sales workflows with real-time updates.",
    color: "bg-[#e5e9f0]",
    features: ["Inspection Management", "Offline Features", "QR-based Operations"],
    image: "/sales_analytics_mobile.png",
    isMobile: true
  },
  {
    title: "ByteBridge",
    tech: "TypeScript",
    description: "Connecting ideas to digital solutions through technology.",
    color: "bg-[#e2e8f0]",
    features: ["Digital Solutions", "TypeScript", "Architecture"],
    image: "/react_ticketing_dashboard.png",
    isMobile: false
  },
  {
    title: "flavorasia",
    tech: "TypeScript",
    description: "An open source TypeScript project focusing on delivering robust frontend features and smooth user experiences.",
    color: "bg-[#f1f5f9]",
    features: ["TypeScript", "Frontend UI", "Open Source"],
    image: "/sales_analytics_mobile.png",
    isMobile: false
  },
  {
    title: "Personal Portfolio",
    tech: "TypeScript",
    description: "A public TypeScript repository demonstrating clean architecture and modern web development practices.",
    color: "bg-[#f8fafc]",
    features: ["TypeScript", "Web Development", "Clean Code"],
    image: "/ticket_dashboard_mobile.png",
    isMobile: false
  },
  {
    title: "Noir Editorial",
    tech: "TypeScript / UI Engineering",
    description: "A digital editorial experience featuring modern typography, elegant layouts, and smooth animations.",
    color: "bg-[#e5e5e5]",
    features: ["Digital Editorial", "Typography", "Smooth Animations"],
    image: "/sales_analytics_mobile.png",
    isMobile: false
  },
  {
    title: "Mehzaas Makeover Brochure",
    tech: "TypeScript / Frontend UI",
    description: "A digital brochure and portfolio showcasing makeover services with a premium and elegant user interface.",
    color: "bg-[#f9f9f9]",
    features: ["Digital Brochure", "Portfolio", "Premium UI"],
    image: "/react_ticketing_dashboard.png",
    isMobile: false
  },
  {
    title: "Study Bloom Digital",
    tech: "TypeScript / EdTech",
    description: "An educational platform designed to enhance the digital learning experience with intuitive interactions.",
    color: "bg-[#ececec]",
    features: ["EdTech", "Digital Learning", "Interactive"],
    image: "/ticket_dashboard_mobile.png",
    isMobile: false
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
            <div key={index} className={`w-screen h-screen flex flex-col lg:flex-row items-center justify-start lg:justify-center p-6 pt-24 pb-16 lg:p-24 ${project.color} relative`}>

              <div className="max-w-[1400px] w-full flex flex-col lg:flex-row items-center gap-4 sm:gap-8 lg:gap-24 relative z-10">

                {/* Left Info */}
                <div className="w-full lg:w-1/2 flex flex-col gap-2 sm:gap-4 lg:gap-6">
                  <h4 className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-500">Case Study 0{index + 1}</h4>
                  <h2 className="text-2xl sm:text-4xl lg:text-6xl xl:text-7xl font-bold tracking-tighter text-black leading-[1.1]">{project.title}</h2>
                  <h3 className="text-xs sm:text-base lg:text-xl xl:text-2xl font-mono text-gray-600">{project.tech}</h3>
                  <p className="text-xs sm:text-base lg:text-lg xl:text-2xl text-gray-700 font-light leading-relaxed mt-1 sm:mt-2 lg:mt-4">
                    {project.description}
                  </p>

                  <div className="flex gap-2 sm:gap-3 lg:gap-4 mt-2 sm:mt-4 lg:mt-8 flex-wrap">
                    {project.features.map(f => (
                      <span key={f} className="px-3 py-1 sm:px-4 sm:py-2 border border-black/20 rounded-full text-[10px] sm:text-xs lg:text-sm font-medium text-black">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Device Mockup */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <div className="w-full max-w-[260px] xs:max-w-[300px] sm:max-w-[380px] lg:max-w-[550px] aspect-square bg-white/10 backdrop-blur-md rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[3rem] shadow-2xl border border-white/20 p-4 sm:p-6 lg:p-8 flex items-center justify-center overflow-hidden relative">
                    
                    {project.isMobile ? (
                      // Mobile Overlapping Screens
                      <div className="relative w-full h-full flex items-center justify-center">
                        {project.images && project.images.length > 1 ? (
                          <>
                            {/* Mobile Mockup 2 (Login/Back) */}
                            <motion.div 
                              className="absolute w-[42%] aspect-[9/19] bg-black rounded-[1.5rem] lg:rounded-[2.2rem] p-1.5 shadow-xl border border-white/10"
                              style={{
                                x: "-25%",
                                y: "10%",
                                rotate: -8,
                                zIndex: 5,
                              }}
                            >
                              <div className="w-full h-full rounded-[1.2rem] lg:rounded-[1.8rem] overflow-hidden bg-gray-950 relative">
                                <img
                                  src={project.images[1]}
                                  alt={`${project.title} secondary`}
                                  className="w-full h-full object-cover object-top"
                                />
                              </div>
                            </motion.div>
                            
                            {/* Mobile Mockup 1 (Dashboard/Front) */}
                            <motion.div 
                              className="absolute w-[45%] aspect-[9/19] bg-black rounded-[1.5rem] lg:rounded-[2.2rem] p-1.5 shadow-2xl border border-white/20"
                              style={{
                                x: "20%",
                                y: "-5%",
                                rotate: 5,
                                zIndex: 10,
                              }}
                            >
                              <div className="w-full h-full rounded-[1.2rem] lg:rounded-[1.8rem] overflow-hidden bg-gray-950 relative">
                                <img
                                  src={project.images[0]}
                                  alt={`${project.title} primary`}
                                  className="w-full h-full object-cover object-top"
                                />
                              </div>
                            </motion.div>
                          </>
                        ) : (
                          // Single Mobile Mockup
                          <div className="w-[50%] aspect-[9/19] bg-black rounded-[1.8rem] lg:rounded-[2.5rem] p-2 shadow-2xl border border-white/25">
                            <div className="w-full h-full rounded-[1.4rem] lg:rounded-[2.1rem] overflow-hidden bg-gray-950 relative">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      // Web/Browser Overlapping Windows
                      <div className="relative w-full h-full flex items-center justify-center">
                        {project.images && project.images.length > 1 ? (
                          <>
                            {/* Browser Mockup 2 (Login/Back) */}
                            <motion.div 
                              className="absolute w-[75%] aspect-[16/10] bg-white rounded-xl shadow-lg border border-black/5 overflow-hidden flex flex-col"
                              style={{
                                x: "-12%",
                                y: "12%",
                                rotate: -5,
                                zIndex: 5,
                              }}
                            >
                              <div className="w-full h-4 lg:h-6 bg-gray-50 border-b border-black/5 flex items-center px-2 gap-1 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                              </div>
                              <div className="flex-1 w-full bg-gray-100 overflow-hidden relative">
                                <img
                                  src={project.images[1]}
                                  alt={`${project.title} secondary`}
                                  className="w-full h-full object-cover object-top"
                                />
                              </div>
                            </motion.div>

                            {/* Browser Mockup 1 (Dashboard/Front) */}
                            <motion.div 
                              className="absolute w-[80%] aspect-[16/10] bg-white rounded-xl shadow-2xl border border-black/5 overflow-hidden flex flex-col"
                              style={{
                                x: "8%",
                                y: "-8%",
                                rotate: 3,
                                zIndex: 10,
                              }}
                            >
                              <div className="w-full h-4 lg:h-6 bg-gray-50 border-b border-black/5 flex items-center px-2 gap-1 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                              </div>
                              <div className="flex-1 w-full bg-gray-100 overflow-hidden relative">
                                <img
                                  src={project.images[0]}
                                  alt={`${project.title} primary`}
                                  className="w-full h-full object-cover object-top"
                                />
                              </div>
                            </motion.div>
                          </>
                        ) : (
                          // Single Browser Mockup
                          <div className="w-[90%] aspect-[16/10] bg-white rounded-xl lg:rounded-2xl shadow-2xl border border-black/5 overflow-hidden flex flex-col">
                            <div className="w-full h-5 lg:h-8 bg-gray-50 border-b border-black/5 flex items-center px-3 gap-1.5 shrink-0">
                              <div className="w-2 h-2 rounded-full bg-red-400" />
                              <div className="w-2 h-2 rounded-full bg-yellow-400" />
                              <div className="w-2 h-2 rounded-full bg-green-400" />
                            </div>
                            <div className="flex-1 w-full bg-gray-100 overflow-hidden relative">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                  </div>
                </div>

              </div>

              {/* Progress Indicator */}
              <div className="absolute bottom-4 left-6 sm:bottom-12 sm:left-12 md:left-24 text-black/40 font-mono text-sm font-bold">
                {index + 1} / {projects.length}
              </div>

            </div>
          ))}

        </motion.div>

      </div>
    </section>
  );
};
