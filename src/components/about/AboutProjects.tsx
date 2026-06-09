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
    isMobile: false
  }
];

export const AboutProjects = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [activeSlide, setActiveSlide] = useState(0);
  const project = projects.find(p => p.id === activeTab) || projects[0];

  // Reset and auto-rotate mobile slides
  useEffect(() => {
    if (activeTab === 'mobile') {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % 4);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [activeTab]);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    setActiveSlide(0);
  };

  return (
    <section id="work" className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-20 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 block mb-3">Case Studies</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
        </div>

        {/* Premium Tab Selector */}
        <div className="flex bg-gray-100/80 backdrop-blur-md p-1 rounded-2xl self-start md:self-auto border border-black/5 shadow-inner">
          {projects.map(p => (
            <button
              key={p.id}
              onClick={() => handleTabChange(p.id)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold tracking-tight transition-all duration-300 ${
                activeTab === p.id 
                  ? 'text-[#3F2B73] shadow-sm' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {activeTab === p.id && (
                <motion.div
                  layoutId="activeAboutProjectTab"
                  className="absolute inset-0 bg-white rounded-xl border border-black/5 shadow-[0_4px_12px_rgba(0,0,0,0.04)]"
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
          className="bg-white border border-gray-150 rounded-[2.5rem] p-8 md:p-16 shadow-[0_12px_40px_rgba(0,0,0,0.02)] flex flex-col xl:flex-row gap-12 xl:gap-20 relative overflow-hidden"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#3F2B73]/5 to-transparent rounded-full blur-3xl pointer-events-none" />

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
            <div className="mt-4 pt-6 border-t border-gray-100">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-3.5">Technology Stack</span>
              <div className="flex flex-wrap gap-2.5">
                {project.techStack.map(tech => (
                  <span key={tech} className="px-3.5 py-1.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-medium text-gray-700 hover:border-[#3F2B73]/20 hover:bg-white transition-all cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Device/Images Showcase */}
          <div className="w-full xl:w-5/12 flex flex-col justify-center items-center gap-6 relative z-10 shrink-0">
            {project.isMobile ? (
              // Mobile Slider UI (like App Store mockup presentation)
              <div className="w-full max-w-[320px] sm:max-w-[360px] flex flex-col items-center gap-6">
                {/* Phone Mockup Container */}
                <div className="w-[220px] sm:w-[240px] aspect-[9/19] bg-gray-900 rounded-[2.5rem] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.15)] border border-black/15 relative overflow-hidden group">
                  {/* Dynamic Screenshot */}
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
                {/* Slider Control Overlay Card */}
                <div className="w-full bg-white border border-[#3F2B73]/10 shadow-[0_20px_50px_rgba(63,43,115,0.06)] rounded-3xl p-5 relative overflow-hidden text-left">
                  <div className="flex gap-4 items-start">
                    {/* Left Icon (colored box with theme-matching SVGs) */}
                    <div className="w-12 h-12 bg-[#ff5a1f]/10 border border-[#ff5a1f]/25 rounded-2xl flex items-center justify-center shrink-0">
                      {activeSlide === 0 && (
                        <svg className="w-5.5 h-5.5 text-[#ff5a1f]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 20h16M7 16v-4m5 4V8m5 8v-6" />
                        </svg>
                      )}
                      {activeSlide === 1 && (
                        <svg className="w-5.5 h-5.5 text-[#ff5a1f]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      )}
                      {activeSlide === 2 && (
                        <svg className="w-5.5 h-5.5 text-[#ff5a1f]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      )}
                      {activeSlide === 3 && (
                        <svg className="w-5.5 h-5.5 text-[#ff5a1f]" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )}
                    </div>
                    
                    {/* Right text content */}
                    <div className="flex-1 flex flex-col gap-1 min-h-[72px]">
                      <h4 className="text-sm font-semibold tracking-tight text-gray-900">
                        {activeSlide === 0 && "Smart Ticketing"}
                        {activeSlide === 1 && "Secure Access"}
                        {activeSlide === 2 && "Manage Tickets"}
                        {activeSlide === 3 && "Real-time Chat"}
                      </h4>
                      <p className="text-xs text-gray-500 font-normal leading-relaxed">
                        {activeSlide === 0 && "Fast, simple, and smart ticketing on the go with real-time status tracking."}
                        {activeSlide === 1 && "Quick OTP and QR-based authentication flows for secure field agent log-in."}
                        {activeSlide === 2 && "Track, filter, and update support tickets anytime, anywhere with status filters."}
                        {activeSlide === 3 && "Communicate effortlessly with agents using SignalR chat with attachment options."}
                      </p>
                    </div>
                  </div>
 
                  {/* Pagination dots (with active pill matching the custom orange style) */}
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
                            className="w-6 h-1.5 bg-[#ff5a1f] rounded-full"
                          />
                        ) : (
                          <div className="w-1.5 h-1.5 bg-[#3F2B73]/15 hover:bg-[#3F2B73]/30 rounded-full transition-colors" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>            </div>
            ) : (
              // Web Screens List (Stacked/Grid cards horizontal)
              <div className="w-full flex flex-col gap-6 max-w-[460px]">
                {project.images.map((img, i) => (
                  <div key={i} className="w-full flex flex-col gap-2.5">
                    <div className="w-full aspect-[16/10] bg-white rounded-2xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-150 overflow-hidden flex flex-col group relative">
                      {/* Browser Header dots */}
                      <div className="w-full h-5 bg-gray-50 border-b border-gray-150 flex items-center px-2.5 gap-1 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      </div>
                      <div className="flex-1 w-full bg-gray-100 overflow-hidden relative">
                        <img
                          src={img}
                          alt={project.labels[i]}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    <span className="text-xs text-left font-semibold text-gray-500 pl-2">{project.labels[i]}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};
