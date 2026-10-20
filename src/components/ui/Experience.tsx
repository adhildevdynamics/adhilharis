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
    description: "",
    contributions: [],
    tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "Microsoft Office", "Communication Training"]
  },
  {
    role: "Trainee Software Developer",
    company: "Camerin Folks Pvt.Ltd",
    type: "Full-time",
    date: "Aug 2023 - Feb 2024 • 7 mos",
    location: "Kochi, Kerala, India",
    description: "Python-Django Full Stack Angular Web Development",
    contributions: [],
    tech: ["Python", "Django", "Angular", "Full-Stack Development", "Computer Software Training"]
  },
  {
    role: "Python-Android",
    company: "RISS Technologies",
    type: "Internship",
    date: "Jan 2023 - Mar 2023 • 3 mos",
    location: "On-site",
    description: "Python Django HTML CSS Bootstrap MYSQL MS OFFICE C",
    contributions: [],
    tech: ["Python", "Django", "HTML", "CSS", "Bootstrap", "MySQL", "C", "Microsoft Office"]
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="relative bg-light z-20 py-24 md:py-36 w-full scene">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-16 md:mb-24 flex flex-col md:flex-row justify-between md:items-end border-b border-metal/40 pb-8">
        <h2 className="display-lg font-display font-bold tracking-tighter text-ink">Experience</h2>
        <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent mt-4 md:mt-0">04 / Timeline</span>
      </div>

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, rotateX: -45, y: 30 }}
            whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformStyle: 'preserve-3d', transformOrigin: 'top' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-10 py-10 md:py-14 border-b border-metal/30 relative"
          >
            <span className="absolute -top-1 -left-1 md:left-0 w-2 h-2 rounded-full bg-accent hidden lg:block" />

            <div className="lg:col-span-3">
              <div className="lg:sticky lg:top-32 flex flex-col gap-2">
                <span className="font-mono text-sm text-secondary/70">{exp.date}</span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-ink tracking-tight">{exp.company}</h3>
                <span className="text-base text-secondary font-medium">{exp.role}</span>
                <span className="text-xs font-mono uppercase tracking-widest text-secondary/60 mt-1">{exp.type} · {exp.location}</span>
              </div>
            </div>

            <div className="lg:col-span-9 flex flex-col gap-8">
              {exp.description && (
                <p className="text-lg md:text-xl text-secondary font-light leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              )}

              {exp.contributions.length > 0 && (
                <ul className="flex flex-col gap-4">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="flex gap-4 text-secondary text-base md:text-lg leading-relaxed font-light items-start">
                      <span className="text-accent mt-1.5 text-xs">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-4 border-t border-metal/30">
                  {exp.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1.5 text-sm text-secondary font-mono">
                      {tech}{i < exp.tech.length - 1 ? ' /' : ''}
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
