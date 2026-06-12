import { motion } from 'framer-motion';

const experiences = [
  {
    role: "Frontend Developer",
    company: "Dev Dynamics",
    type: "Full-time",
    date: "Jul 2024 - Present • 2 yrs",
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
    tech: ["React.js", "React Native", "Redux Toolkit", "TypeScript", "Expo", "Firebase", "SignalR", "MSAL", "Material UI", "CSS", "jQuery"]
  },
  {
    role: "Python Developer",
    company: "Camerinfolks Pvt Ltd.",
    type: "Part-time",
    date: "Oct 2023 - Feb 2024 • 5 mos",
    location: "Kochi, Kerala, India",
    description: "Developed web backends and responsive styles using Python, Django, and modern CSS frameworks.",
    contributions: [
      "Designed and deployed relational databases and server endpoints with Django framework",
      "Crafted responsive layouts and UI styles utilizing Bootstrap and raw Cascading Style Sheets (CSS)",
      "Managed project deliverables and documentation using Microsoft Office tools"
    ],
    tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "Microsoft Office", "Communication Training"]
  },
  {
    role: "Trainee Software Developer",
    company: "Camerin Folks Pvt.Ltd",
    type: "Full-time",
    date: "Aug 2023 - Feb 2024 • 7 mos",
    location: "Kochi, Kerala, India",
    description: "Full-stack training and development program focusing on Python, Django, and Angular web applications.",
    contributions: [
      "Participated in comprehensive software developer training spanning full-stack architectures",
      "Built features on Python-Django backends integrated with Angular single-page applications"
    ],
    tech: ["Python", "Django", "Angular", "Full-Stack Development", "Computer Software Training"]
  },
  {
    role: "Python-Android",
    company: "RISS Technologies",
    type: "Internship",
    date: "Jan 2023 - Mar 2023 • 3 mos",
    location: "On-site",
    description: "Python-based Android and web services development internship.",
    contributions: [
      "Explored full stack patterns using Python, Django, HTML, and CSS",
      "Designed and customized responsive dashboard components using Bootstrap and MySQL databases",
      "Built prototypes using C language for logic validation"
    ],
    tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL", "C", "Microsoft Office"]
  }
];

export const AboutExperience = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 md:py-12 border-t border-gray-100">
      <div className="mb-16">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 block mb-3">Roadmap</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Career History</h2>
      </div>

      <div className="flex flex-col gap-16 md:gap-24 relative">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative flex flex-col lg:flex-row gap-8 lg:gap-16 w-full p-8 md:p-12 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[2.5rem] hover:bg-white/50 hover:shadow-[0_16px_48px_rgba(63,43,115,0.05)] transition-all duration-500"
          >
            {/* Liquid Glare Wrapper */}
            <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] pointer-events-none z-0">
              <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/60 to-transparent opacity-30 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />
            </div>
            
            {/* Left Column: Role & Meta (Takes 4/12 columns or ~33%) */}
            <div className="w-full lg:w-[33%] flex flex-col items-start lg:pr-8 relative z-10 lg:sticky lg:top-32 h-fit">
              <span className="text-xs font-mono font-bold tracking-wider text-[#3F2B73]/60 mb-2 uppercase block">
                {exp.date}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight leading-tight mb-2">
                {exp.role}
              </h3>
              <div className="text-lg text-gray-600 font-semibold mb-4">{exp.company}</div>
              
              <div className="flex flex-wrap gap-2 items-center">
                <span className="px-2.5 py-0.5 rounded-full border border-black/5 bg-gray-100/80 text-[10px] font-bold tracking-wider uppercase text-gray-500">
                  {exp.type}
                </span>
                <span className="text-xs text-gray-400 font-mono">{exp.location}</span>
              </div>
            </div>

            {/* Right Column: Detailed Contributions (Takes 8/12 columns or ~67%) */}
            <div className="w-full lg:w-[67%] flex flex-col relative z-10">
              {exp.description && (
                <p className="text-gray-700 text-lg leading-relaxed font-light mb-6">
                  {exp.description}
                </p>
              )}

              {exp.contributions.length > 0 && (
                <div className="flex flex-col mb-8">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 border-b border-gray-100 pb-2.5 mb-4 max-w-[150px] block">
                    Contributions
                  </span>
                  <ul className="flex flex-col gap-3.5">
                    {exp.contributions.map((item, i) => (
                      <li key={i} className="flex gap-3 text-gray-700 text-base leading-relaxed font-light items-start">
                        <span className="text-[#3F2B73] mt-1.5 text-xs shrink-0 select-none">✦</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2.5 pt-5 border-t border-white/40 mt-auto">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3.5 py-1.5 rounded-xl bg-white/50 border border-white/60 shadow-sm text-xs font-semibold text-gray-700 hover:bg-white/80 transition-all cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
