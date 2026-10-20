export const projects = [
  {
    title: "Flux OnGo",
    tech: "React Native / SignalR / Redux",
    description: "A centralized mobile application for inspections, tickets, claims, approvals, sales and more. Built with React Native and Expo, currently releasing in UAE, KSA and India.",
    features: ["Inspection Management", "Offline Features", "QR-based Operations"],
    image: "/sales_analytics_mobile.png",
    isMobile: true,
  },
  {
    title: "NGI Direct CRM",
    tech: "Next.js",
    description: "Insurance Marketplace CRM — a Next.js application for partner relations, leads, renewals, and claims.",
    features: ["Partner Relations", "Leads & Renewals", "Claims Management"],
    image: "/react_ticketing_dashboard.png",
    isMobile: false,
  },
  {
    title: "GoTicket",
    tech: "React.js / React Native / Redux Toolkit / Material UI / MSAL / Firebase / SignalR",
    description: "ITSM Web & Mobile App — an enterprise ticketing system with AI-assisted ticket creation, real-time chat, and approvals across web and mobile.",
    features: ["Azure AD & MSAL", "Conversational AI", "SignalR Chat", "Firebase FCM", "Bilingual (RTL)"],
    image: "/ticket_dashboard_mobile.png",
    isMobile: true,
  },
];

export const rest = [
  { title: "GoTicketWeb (ITSM Web App)", tech: "React.js / Redux Toolkit / Material UI / MSAL", description: "The web counterpart of GoTicket — a React-based ITSM platform with an AI chat-based ticket flow and MSAL session handling." },
  { title: "GoTicket Mobile App (B2B)", tech: "React Native / Expo / Firebase / SignalR", description: "The B2B mobile counterpart of GoTicket for field agents and customers, with real-time chat and a multilingual UI." },
  { title: "ByteBridge", tech: "TypeScript", description: "Connecting ideas to digital solutions through technology." },
  { title: "flavorasia", tech: "TypeScript", description: "An open source TypeScript project focusing on delivering robust frontend features and smooth user experiences." },
  { title: "Personal Portfolio", tech: "TypeScript", description: "A public TypeScript repository demonstrating clean architecture and modern web development practices." },
  { title: "Noir Editorial", tech: "TypeScript / UI Engineering", description: "A digital editorial experience featuring modern typography, elegant layouts, and smooth animations." },
  { title: "Mehzaas Makeover Brochure", tech: "TypeScript / Frontend UI", description: "A digital brochure and portfolio showcasing makeover services with a premium and elegant user interface." },
  { title: "Study Bloom Digital", tech: "TypeScript / EdTech", description: "An educational platform designed to enhance the digital learning experience with intuitive interactions." },
];

export const experiences = [
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

export const groups = [
  { label: "Frontend", items: ["React.js", "React Native", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Material UI", "Styled Components"] },
  { label: "Mobile", items: ["Expo", "AsyncStorage", "i18n / RTL", "OTP & QR Auth", "Push Notifications"] },
  { label: "State & Data", items: ["Redux Toolkit", "RTK Query", "Formik", "Yup"] },
  { label: "APIs & Services", items: ["Axios", "REST APIs", "Firebase", "SignalR", "MSAL / Azure AD"] },
  { label: "Tools & Platforms", items: ["Git", "VS Code", "Framer Motion", "GSAP", "Vite"] },
];

export const skillStatements = [
  "React.js for modern web interfaces.",
  "React Native for mobile applications.",
  "UI engineering for polished experiences.",
  "API integration for real-world products.",
  "Performance-focused development for scalable apps.",
];

export const categories = [
  { label: "Web Applications", detail: "React.js · Redux Toolkit · TypeScript" },
  { label: "Mobile Applications", detail: "React Native · Expo · Firebase" },
  { label: "Enterprise Systems", detail: "ITSM Platforms · Azure AD · MSAL" },
  { label: "Digital Experiences", detail: "UI Engineering · Motion · Framer Motion" },
];

export const steps = [
  { num: "01", title: "Prompt", desc: "Turning ideas into structured development tasks." },
  { num: "02", title: "Code", desc: "Using AI tools to move faster inside the editor." },
  { num: "03", title: "Debug", desc: "Finding issues quickly and improving logic." },
  { num: "04", title: "Review", desc: "Cleaning code before production delivery." },
  { num: "05", title: "Ship", desc: "Delivering polished React and React Native experiences." }
];

export const principles = [
  { title: "Clarity", description: "Interfaces should be simple, readable, and easy to use." },
  { title: "Motion", description: "Animations should guide the user, not distract them." },
  { title: "Scalability", description: "Code should be reusable, maintainable, and ready to grow." }
];
