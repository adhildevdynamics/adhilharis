import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import goticketProPreview1 from '../../assets/goticket_pro_preview_1.png';
import goticketProPreview2 from '../../assets/goticket_pro_preview_2.png';
import goticketProPreview3 from '../../assets/goticket_pro_preview_3.png';
import goticketProPreview4 from '../../assets/goticket_pro_preview_4.png';

import goticketWebDashboard from '../../assets/goticket_web_dashboard.png';
import goticketWebBroadcast from '../../assets/goticket_web_broadcast.png';
import goticketWebAiChat from '../../assets/goticket_web_ai_chat.png';
import goticketWebCreateTicket from '../../assets/goticket_web_create_ticket.png';
import goticketWebUpdateTicket from '../../assets/goticket_web_update_ticket.png';

import flux1 from '../../assets/flux1.jpg';
import flux2 from '../../assets/flux2.jpg';
import flux3 from '../../assets/flux3.jpg';
import flux4 from '../../assets/flux4.jpg';
import flux5 from '../../assets/flux5.jpg';

const projects = [
  {
    id: 'mobile',
    title: 'GoTicket Mobile App',
    subtitle: 'B2B Field Service Mobile Application',
    association: 'Dev Dynamics',
    description: 'A cross-platform mobile application designed for field agents and customers to manage support tickets, real-time sales transactions, and communication in the field.',
    features: [
      'OTP and QR-based authentication flows for secure device activation',
      'Real-time chat using Microsoft SignalR supporting text, media, and document sharing',
      'Interactive Sales dashboard featuring graphical charts and data filtering',
      'Reliable push notifications powered by Firebase FCM and Expo integration',
      'Bilingual support (English & Arabic) complete with native RTL layout architecture'
    ],
    techStack: ['React Native', 'Expo', 'Redux Toolkit', 'Firebase', 'SignalR', 'i18n', 'AsyncStorage'],
    highlights: [
      'Implemented real-time messaging system with advanced reconnect and state sync handling',
      'Designed a clean, highly scalable API layer utilizing Redux Toolkit (RTK Query)',
      'Built custom multilingual UI components with dynamic language and layout switching'
    ],
    images: [goticketProPreview1, goticketProPreview2, goticketProPreview3, goticketProPreview4],
    labels: ['App Store Preview', 'Sign-in & QR Authentication', 'Ticket Queue Interface', 'SignalR Chat Interface'],
    slidesData: [
      { title: "Smart Ticketing", desc: "Fast, simple, and smart ticketing on the go with real-time status tracking." },
      { title: "Secure Access", desc: "Quick OTP and QR-based authentication flows for secure field agent log-in." },
      { title: "Manage Tickets", desc: "Track, filter, and update support tickets anytime, anywhere with status filters." },
      { title: "Real-time Chat", desc: "Communicate effortlessly with agents using SignalR chat with attachment options." }
    ],
    isMobile: true
  },
  {
    id: 'web',
    title: 'GoTicketWeb',
    subtitle: 'ITSM Enterprise Web Application',
    association: 'Dev Dynamics',
    description: 'GoTicketWeb is a robust enterprise IT Service Management (ITSM) web platform built from the ground up to create, track, and manage enterprise support tickets and service requests.',
    features: [
      'Enterprise single sign-on (SSO) with Azure AD authentication using MSAL',
      'AI-assisted conversational agent helping users create tickets through guided chat',
      'Comprehensive dashboard, ticket queue management, reporting grids, and email notifications',
      'Highly responsive web layout engineered with premium reusable Material UI design tokens',
      'Secure token lifecycle management supporting silent token refresh and session auto-logout'
    ],
    techStack: ['React.js', 'Redux Toolkit', 'Material UI', 'MSAL', 'Axios', 'Formik', 'Yup', 'Framer Motion'],
    highlights: [
      'Built a highly scalable, enterprise-ready component architecture',
      'Implemented custom AI chat interface simplifying ticket flows for end-users',
      'Optimized client-side API requests and secure Microsoft authentication session lifecycle'
    ],
    images: [
      goticketWebDashboard,
      goticketWebCreateTicket,
      goticketWebUpdateTicket,
      goticketWebAiChat,
      goticketWebBroadcast
    ],
    labels: [
      'Management Dashboard Console',
      'Create New Ticket Form',
      'Ticket Update & Comment Thread',
      'AI-Assisted Conversational Agent',
      'Broadcast Admin System'
    ],
    slidesData: [
      { title: "Enterprise Dashboard", desc: "Comprehensive view of ticket queues, SLA metrics, and reporting grids." },
      { title: "Ticket Creation", desc: "Streamlined ticket creation form with rich text and attachment support." },
      { title: "Ticket Management", desc: "Detailed ticket view with comment threads, status updates, and assignment." },
      { title: "AI-Assisted Agent", desc: "Conversational interface powered by AI to help users report issues faster." },
      { title: "Broadcast System", desc: "Admin portal to send organization-wide announcements and alerts." }
    ],
    isMobile: false
  },
  {
    id: 'flux-ongo',
    title: 'Flux OnGo',
    subtitle: 'Field Service & Workflow Management',
    association: 'Dev Dynamics',
    description: 'Flux OnGo is a mobile application for managing inspections, tickets, claims, approvals, and sales workflows.',
    features: [
      'Inspection management with media capture',
      'Ticketing and claims workflows',
      'Real-time updates using SignalR',
      'Push notifications and offline-aware features',
      'QR-based operations and analytics integration'
    ],
    techStack: ['React Native', 'Expo', 'Redux Toolkit', 'Firebase', 'SignalR', 'Axios'],
    highlights: [
      'Contributing to scalable mobile architecture',
      'Working on real-time systems and field-service workflows',
      'Focused on performance and user experience improvements'
    ],
    images: [flux1, flux2, flux3, flux4, flux5],
    labels: ['Inspection Dashboard', 'Ticketing & Claims', 'Real-time Workflow', 'QR Operations', 'Sales & Approvals'],
    slidesData: [
      { title: "Inspections", desc: "Manage inspections with rich media capture and documentation." },
      { title: "Ticketing & Claims", desc: "Streamlined ticketing and claims workflows for field agents." },
      { title: "Real-time Updates", desc: "Live updates and notifications using SignalR integration." },
      { title: "QR Operations", desc: "Quick QR-based operations and deeply integrated analytics." },
      { title: "Approvals & Sales", desc: "Complete approval chains and field sales transaction workflows." }
    ],
    isMobile: true
  }
];

const getIcon = (projectId: string, slideIndex: number) => {
  if (projectId === 'mobile') {
    switch (slideIndex) {
      case 0: return <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16v-4m5 4V8m5 8v-6" />;
      case 1: return <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />;
      case 2: return <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />;
      case 3: return <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />;
    }
  } else if (projectId === 'web') {
    switch (slideIndex) {
      case 0: return <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />;
      case 1: return <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />;
      case 2: return <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
      case 3: return <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />;
      case 4: return <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />;
    }
  } else if (projectId === 'flux-ongo') {
    switch (slideIndex) {
      case 0: return <><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></>;
      case 1: return <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />;
      case 2: return <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />;
      case 3: return <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />;
      case 4: return <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />;
    }
  }
  return <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />;
};

export const AboutProjects = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [activeSlide, setActiveSlide] = useState(0);
  const project = projects.find(p => p.id === activeTab) || projects[0];

  // Reset and auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % project.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [project.id, project.images.length]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveSlide(0);
  };

  return (
    <section id="work" className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 md:py-12 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 block mb-3">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
        </div>

        {/* Premium Tab Selector */}
        <div className="flex bg-gray-50/80 backdrop-blur-xl p-1.5 rounded-[1.25rem] self-start md:self-auto border border-gray-200 shadow-sm relative z-10">
          {projects.map(p => (
            <button
              key={p.id}
              onClick={() => handleTabChange(p.id)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all duration-300 ${
                activeTab === p.id 
                  ? 'text-[#3F2B73]' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {activeTab === p.id && (
                <motion.div
                  layoutId="activeAboutProjectTab"
                  className="absolute inset-0 bg-white rounded-xl border border-[#3F2B73]/30 shadow-[0_4px_12px_rgba(63,43,115,0.08)]"
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{p.title}</span>
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="group bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_12px_48px_rgba(0,0,0,0.04)] rounded-[2.5rem] p-8 md:p-16 flex flex-col xl:flex-row gap-12 xl:gap-20 relative overflow-hidden"
        >
          {/* Decorative Corner Glow & Glass Reflection */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/80 to-transparent opacity-40 blur-[80px] pointer-events-none z-0" />
          <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/50 to-transparent opacity-40 pointer-events-none z-0" />
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none z-0" />

          {/* Left Column: Descriptive Details */}
          <div className="w-full xl:w-7/12 flex flex-col relative z-10">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="px-3 py-1 rounded-full border border-[#3F2B73]/15 bg-[#3F2B73]/5 text-[11px] font-semibold text-[#3F2B73] tracking-wide uppercase">
                {project.subtitle}
              </span>
              <span className="px-3 py-1 rounded-full border border-black/5 bg-gray-50 text-[11px] font-semibold text-gray-500 tracking-wide">
                @{project.association}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-6 leading-tight">
              {project.title}
            </h3>

            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8 max-w-2xl">
              {project.description}
            </p>

            {/* Key Features Block */}
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-[#3F2B73]/40 border-b border-gray-100 pb-3 mb-5 block">
                Key Features & Architecture
              </span>
              <ul className="flex flex-col gap-3.5">
                {project.features.map((item, i) => (
                  <li key={i} className="flex gap-3 text-gray-700 text-base leading-relaxed font-light items-start">
                    <span className="text-[#3F2B73] mt-1 text-xs shrink-0 select-none">✦</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Highlights Block */}
            <div className="mb-8">
              <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 border-b border-gray-100 pb-3 mb-5 block">
                Project Highlights
              </span>
              <ul className="flex flex-col gap-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-gray-600 text-base leading-relaxed font-light items-start">
                    <span className="text-green-500 mt-1 text-sm shrink-0 select-none">✓</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Pills */}
            <div className="mt-4 pt-6 border-t border-white/40">
              <span className="text-[10px] font-bold tracking-widest text-gray-500 uppercase block mb-3.5">Technology Stack</span>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-xl bg-white/50 border border-white/60 shadow-sm text-xs font-medium text-gray-700 hover:bg-white/80 transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Device/Images Showcase */}
          <div className="w-full xl:w-5/12 flex flex-col justify-center items-center gap-6 relative z-10 shrink-0">
            <div className={`w-full flex flex-col items-center gap-6 ${project.isMobile ? 'max-w-[320px] sm:max-w-[360px]' : 'max-w-[460px]'}`}>
              
              {project.isMobile ? (
                /* Phone Mockup Container */
                <div className="w-[220px] sm:w-[240px] aspect-[9/19] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/15 relative overflow-hidden group">
                  <div className="w-full h-full rounded-[2.1rem] overflow-hidden bg-gray-950 relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeSlide}
                        src={project.images[activeSlide]}
                        alt={project.labels[activeSlide]}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover object-top"
                      />
                    </AnimatePresence>
                  </div>
                </div>
              ) : (
                /* Browser Mockup Container */
                <div className="w-full aspect-[16/10] bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-150 overflow-hidden flex flex-col relative group">
                  <div className="w-full h-5 bg-gray-50 border-b border-gray-150 flex items-center px-2.5 gap-1 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                  </div>
                  <div className="flex-1 w-full bg-gray-100 overflow-hidden relative">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeSlide}
                        src={project.images[activeSlide]}
                        alt={project.labels[activeSlide]}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        className="w-full h-full object-cover object-top"
                      />
                    </AnimatePresence>
                  </div>
                </div>
              )}

              {/* Slider Control Overlay Card */}
              <div className="w-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_16px_40px_rgba(0,0,0,0.06)] rounded-[1.75rem] p-5 relative overflow-hidden text-left z-10">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-[#3F2B73]/10 border border-[#3F2B73]/25 rounded-[0.85rem] flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-[#3F2B73]" fill="none" stroke="currentColor" strokeWidth="1.75" viewBox="0 0 24 24">
                      {getIcon(project.id, activeSlide)}
                    </svg>
                  </div>
                  
                  <div className="flex-1 flex flex-col gap-1 min-h-[72px]">
                    <h4 className="text-sm font-semibold tracking-tight text-gray-900">
                      {project.slidesData[activeSlide].title}
                    </h4>
                    <p className="text-xs text-gray-500 font-normal leading-relaxed">
                      {project.slidesData[activeSlide].desc}
                    </p>
                  </div>
                </div>

                <div className="flex gap-2.5 mt-4 items-center pl-1">
                  {project.images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveSlide(i)}
                      className="focus:outline-none transition-all duration-300 py-1"
                    >
                      {activeSlide === i ? (
                        <motion.div 
                          layoutId="activeSlideDot"
                          className="w-6 h-1.5 bg-[#3F2B73] rounded-full"
                        />
                      ) : (
                        <div className="w-1.5 h-1.5 bg-[#3F2B73]/15 hover:bg-[#3F2B73]/30 rounded-full transition-colors" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
