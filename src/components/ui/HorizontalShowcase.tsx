import { motion, useScroll, useTransform, useMotionTemplate } from 'framer-motion';
import { useRef } from 'react';

const projects = [
  {
    title: "GoTicketWeb (ITSM Web App)",
    tech: "React.js / Redux Toolkit / Material UI / MSAL / Axios / Formik / Yup / Framer Motion",
    description: "GoTicketWeb is a React-based IT Service Management (ITSM) platform used to create, track, and manage support tickets. Features a scalable component architecture, an AI chat-based ticket flow, and optimized API handling with MSAL session lifecycle and token refresh.",
    features: ["Azure AD & MSAL", "Conversational AI", "Dashboard & Reports", "Token Refresh", "Formik & Yup"],
    image: "/react_ticketing_dashboard.png",
    isMobile: false,
  },
  {
    title: "GoTicket Mobile App (B2B)",
    tech: "React Native / Expo / Redux Toolkit / Firebase / SignalR / i18n / AsyncStorage",
    description: "A cross-platform mobile application designed for field agents and customers to manage tickets, sales, and communication. Features a real-time messaging system with reconnect handling, a scalable API layer using RTK Query, and a multilingual UI with dynamic language switching.",
    features: ["OTP & QR Auth", "SignalR Chat", "Sales Dashboard", "Firebase FCM", "Bilingual (RTL)"],
    image: "/ticket_dashboard_mobile.png",
    isMobile: true,
  },
  {
    title: "Flux OnGo",
    tech: "React Native / SignalR / Redux",
    description: "A mobile application for managing inspections, tickets, claims, approvals, and sales workflows with real-time updates.",
    features: ["Inspection Management", "Offline Features", "QR-based Operations"],
    image: "/sales_analytics_mobile.png",
    isMobile: true,
  },
];

const rest = [
  { title: "ByteBridge", tech: "TypeScript", description: "Connecting ideas to digital solutions through technology." },
  { title: "flavorasia", tech: "TypeScript", description: "An open source TypeScript project focusing on delivering robust frontend features and smooth user experiences." },
  { title: "Personal Portfolio", tech: "TypeScript", description: "A public TypeScript repository demonstrating clean architecture and modern web development practices." },
  { title: "Noir Editorial", tech: "TypeScript / UI Engineering", description: "A digital editorial experience featuring modern typography, elegant layouts, and smooth animations." },
  { title: "Mehzaas Makeover Brochure", tech: "TypeScript / Frontend UI", description: "A digital brochure and portfolio showcasing makeover services with a premium and elegant user interface." },
  { title: "Study Bloom Digital", tech: "TypeScript / EdTech", description: "An educational platform designed to enhance the digital learning experience with intuitive interactions." },
];

const CoverflowCard = ({ project, index, activeIndex }: { project: (typeof projects)[number]; index: number; activeIndex: import('framer-motion').MotionValue<number> }) => {
  const distance = useTransform(activeIndex, (v) => v - index);
  const x = useTransform(distance, [-1, 0, 1], ['-72%', '0%', '72%']);
  const rotateY = useTransform(distance, [-1, 0, 1], [42, 0, -42]);
  const translateZ = useTransform(distance, [-1, 0, 1], [-320, 0, -320]);
  const scale = useTransform(distance, [-1, 0, 1], [0.78, 1, 0.78]);
  const opacity = useTransform(distance, [-1.4, -1, 0, 1, 1.4], [0, 0.35, 1, 0.35, 0]);
  const zIndex = useTransform(distance, (v) => Math.round(10 - Math.abs(v) * 5));

  return (
    <motion.div
      style={{ x, rotateY, translateZ, scale, opacity, zIndex, transformStyle: 'preserve-3d' }}
      className="absolute w-[86vw] sm:w-[68vw] lg:w-[46vw] max-w-[640px]"
    >
      <div className="bg-cream border border-dark/10 rounded-sm shadow-[0_40px_80px_-30px_rgba(17,17,17,0.45)] overflow-hidden">
        <div className={`w-full ${project.isMobile ? 'aspect-[4/3] flex items-center justify-center bg-black/5 p-8' : 'aspect-[16/10]'} relative overflow-hidden`}>
          {project.isMobile ? (
            <div className="h-full aspect-[9/19] bg-dark rounded-[1.6rem] p-1.5 shadow-2xl border border-black/20">
              <div className="w-full h-full rounded-[1.2rem] overflow-hidden bg-gray-950">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            </div>
          ) : (
            <>
              <div className="absolute top-0 left-0 right-0 h-7 bg-black/5 border-b border-dark/10 flex items-center px-3 gap-1.5 z-10">
                <div className="w-2 h-2 rounded-full bg-pop" /><div className="w-2 h-2 rounded-full bg-dark/20" /><div className="w-2 h-2 rounded-full bg-dark/20" />
              </div>
              <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top pt-7" loading="lazy" />
            </>
          )}
        </div>
        <div className="p-6 md:p-8 flex flex-col gap-3">
          <span className="font-mono text-xs text-pop">{String(index + 1).padStart(2, '0')}</span>
          <h3 className="text-2xl md:text-3xl font-display font-bold tracking-tighter text-dark">{project.title}</h3>
          <p className="font-mono text-[11px] text-dark/60">{project.tech}</p>
          <p className="text-sm md:text-base text-dark/70 font-light leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.features.map((f) => (
              <span key={f} className="text-[11px] tracking-wide px-3 py-1.5 rounded-full border border-dark/15 text-dark/70">{f}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const HorizontalShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  const activeIndex = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]);
  const rigRotate = useTransform(scrollYProgress, [0, 1], [8, -8]);
  const progressLabel = useMotionTemplate`${useTransform(activeIndex, (v) => String(Math.min(projects.length, Math.round(v) + 1)).padStart(2, '0'))}`;

  return (
    <section id="work" className="w-full bg-light relative z-30 pt-28 md:pt-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 mb-4 flex flex-col md:flex-row justify-between items-end border-b border-metal/40 pb-8 md:pb-10">
        <div>
          <span className="block text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent mb-4">02 / Selected Work</span>
          <h2 className="display-lg font-display font-bold tracking-tighter text-ink">Case Studies</h2>
        </div>
        <div className="text-secondary/70 font-mono text-sm mt-6 md:mt-0">
          <motion.span>{progressLabel}</motion.span> — {String(projects.length).padStart(2, '0')}
        </div>
      </div>

      {/* Pinned 3D coverflow */}
      <div ref={containerRef} style={{ height: `${projects.length * 100}vh` }} className="relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center scene">
          <motion.div style={{ rotateX: rigRotate, transformStyle: 'preserve-3d' }} className="relative w-full h-[70vh] flex items-center justify-center">
            {projects.map((project, i) => (
              <CoverflowCard key={project.title} project={project} index={i} activeIndex={activeIndex} />
            ))}
          </motion.div>

          <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
            {projects.map((_, i) => (
              <span key={i} className="w-8 h-[2px] bg-ink/15 relative overflow-hidden">
                <motion.span
                  className="absolute inset-0 bg-accent origin-left"
                  style={{ scaleX: useTransform(activeIndex, (v) => (v >= i - 0.5 && v <= i + 0.5 ? 1 : 0)) }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Additional work — compact grid */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <span className="block text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent mb-10">More Work</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-metal/30">
          {rest.map((project) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6 }}
              className="bg-light p-8 flex flex-col gap-3 group"
            >
              <h4 className="text-xl md:text-2xl font-display font-bold tracking-tight text-ink group-hover:text-accent-dark transition-colors">
                {project.title}
              </h4>
              <p className="font-mono text-xs text-secondary">{project.tech}</p>
              <p className="text-secondary/90 font-light leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
