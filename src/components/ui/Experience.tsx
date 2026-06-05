import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Frontend Developer",
    company: "Dev Dynamics",
    type: "Full-time",
    date: "Jul 2024 - Present",
    location: "Dubai, United Arab Emirates • On-site",
    description: "Worked on multiple enterprise-grade web and mobile applications focused on ticketing systems, field service management, and real-time communication platforms.",
    contributions: [
      "Developed a React-based ITSM platform with Azure AD authentication and AI-assisted ticket creation",
      "Built responsive UI architecture with reusable components using Material UI and Styled Components",
      "Integrated secure authentication using MSAL with token lifecycle and silent refresh handling",
      "Designed and implemented conversational AI UI for guided ticket creation",
      "Developed REST API integrations using Axios and Redux Toolkit (RTK Query)",
      "Built a cross-platform mobile app using React Native and Expo for B2B field service operations",
      "Implemented OTP and QR-based authentication flows with persistent session handling",
      "Developed real-time chat functionality using Microsoft SignalR with support for media messages",
      "Integrated Firebase Cloud Messaging for push notifications across foreground, background, and killed states",
      "Implemented bilingual (English/Arabic) UI with RTL support",
      "Currently contributing to a mobile application for inspection, claims, approvals, and sales workflows",
      "Working on scalable architecture, real-time updates, and offline-aware features"
    ],
    tech: ["React.js", "React Native", "Redux Toolkit", "TypeScript", "Expo", "Firebase", "SignalR", "MSAL", "Material UI"]
  },
  {
    role: "Python Developer",
    company: "Camerinfolks Pvt Ltd.",
    type: "Part-time",
    date: "Oct 2023 - Feb 2024 • 5 mos",
    location: "Kochi, Kerala, India",
    description: "",
    contributions: [],
    tech: ["Python", "CSS"]
  },
  {
    role: "Trainee Software Developer",
    company: "Camerin Folks Pvt.Ltd",
    type: "Full-time",
    date: "Aug 2023 - Feb 2024 • 7 mos",
    location: "Kochi, Kerala, India",
    description: "Python-Django Full Stack Angular Web Development",
    contributions: [],
    tech: ["Python", "Django", "Angular", "Full-Stack Web Development"]
  },
  {
    role: "Python-Android",
    company: "RISS Technologies",
    type: "Internship",
    date: "Jan 2023 - Mar 2023 • 3 mos",
    location: "On-site",
    description: "Python Django HTML CSS Bootstrap MYSQL MS OFFICE C",
    contributions: [],
    tech: ["Python", "Django", "HTML/CSS", "Bootstrap", "MySQL", "C"]
  }
];

export const Experience = () => {
  return (
    <section className="relative bg-light z-20 pt-16 md:pt-24 pb-16 md:pb-24 w-full">
      <div className="z-0 max-w-[1400px] mx-auto px-6 lg:px-12 mb-12 md:mb-16 flex flex-col items-center text-center pt-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
        >
          Experience
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl"
        >
          A timeline of my professional journey, building scalable software and impactful digital experiences.
        </motion.p>
      </div>
      
      <div className="flex flex-col w-full relative pb-16">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="sticky w-full max-w-[1200px] mx-auto px-6 mb-12 md:mb-24 transition-all duration-500"
            style={{ 
              top: `calc(25vh + ${index * 24}px)`,
              zIndex: index + 10
            }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full bg-white/90 backdrop-blur-2xl border border-black/5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 relative overflow-hidden"
            >
              {/* Subtle top edge gradient for 3D stacking effect */}
              <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/[0.03] to-transparent pointer-events-none" />
              
              {/* Left Column: Role & Meta Info */}
              <div className="w-full lg:w-1/3 flex flex-col relative z-10 shrink-0">
                <div className="sticky top-32 flex flex-col">
                  <h3 className="text-3xl md:text-4xl font-bold text-black tracking-tight mb-4 leading-tight">
                    {exp.role}
                  </h3>
                  <div className="text-xl text-gray-600 mb-6 font-medium">{exp.company}</div>
                  
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs font-mono font-semibold tracking-wider uppercase text-black/60">
                        {exp.type}
                      </span>
                    </div>
                    <div className="text-sm font-mono text-gray-400 mt-2">{exp.date}</div>
                    <div className="text-sm font-mono text-gray-400">{exp.location}</div>
                  </div>
                </div>
              </div>
              
              {/* Right Column: Details */}
              <div className="w-full lg:w-2/3 flex flex-col relative z-10 max-h-[60vh] overflow-y-auto pr-2 md:pr-6 pb-8 no-scrollbar">
                {exp.description && (
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-light mb-8">
                    {exp.description}
                  </p>
                )}
                
                {exp.contributions.length > 0 && (
                  <div className="flex flex-col mb-10">
                    <span className="text-xs font-bold tracking-[0.2em] uppercase text-black/30 border-b border-black/5 pb-4 mb-6">
                      Key Contributions
                    </span>
                    <ul className="flex flex-col gap-4">
                      {exp.contributions.map((item, i) => (
                        <li key={i} className="flex gap-4 text-gray-700 text-base md:text-lg leading-relaxed font-light items-start">
                          <span className="text-[#3F2B73]/60 mt-1.5 text-sm">✦</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {exp.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-black/5">
                    {exp.tech.map((tech, i) => (
                      <span key={i} className="px-4 py-2 rounded-full bg-light border border-black/5 text-sm text-gray-600 font-medium hover:bg-white hover:shadow-sm transition-all cursor-default">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
