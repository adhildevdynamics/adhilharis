import { motion } from 'framer-motion';

const techCategories = [
  {
    title: "Core & Frameworks",
    items: ["React.js", "React Native", "Expo CLI", "Expo Router", "React Navigation", "React Router", "SPA Development"]
  },
  {
    title: "State & Data",
    items: ["Redux Toolkit", "RTK Query", "React Context API", "AsyncStorage", "Axios", "REST API Integration"]
  },
  {
    title: "UI, Styling & Animation",
    items: ["Material UI (MUI)", "Material React Table", "Styled Components", "Emotion", "Framer Motion", "SweetAlert2", "Responsive Web Design"]
  },
  {
    title: "Forms & Utilities",
    items: ["Formik", "Yup", "Day.js", "Internationalization (i18n)", "Arabic RTL Support"]
  },
  {
    title: "Testing & Analytics",
    items: ["Jest", "React Testing Library", "PostHog Analytics"]
  },
  {
    title: "Authentication",
    items: ["Microsoft Azure AD (MSAL)"]
  },
  {
    title: "Expo Capabilities",
    items: ["Expo Camera", "Expo Notifications", "Expo Image Picker", "Expo Document Picker", "Expo AV"]
  },
  {
    title: "Firebase Ecosystem",
    items: ["Firebase", "Firebase Cloud Messaging (FCM)", "Push Notifications", "Firebase Console", "Firebase Project Config"]
  },
  {
    title: "Platform & Build",
    items: ["Android Build System", "iOS Build System", "Apple Push Notification Services (APNs)", "Google Services", "Node.js", "npm"]
  }
];

export const Section06TechStack = () => {
  return (
    <section className="w-full max-w-[1200px] mx-auto px-6 md:px-12 py-8 md:py-12 border-t border-gray-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 block mb-3"
          >
            Capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900"
          >
            Technology Stack
          </motion.h2>
        </div>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 max-w-sm text-sm md:text-base font-light"
        >
          A comprehensive toolkit for building scalable, responsive, and native experiences.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, idx) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative overflow-hidden p-8 bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-[2.5rem] hover:bg-white/60 hover:border-white/80 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_20px_60px_rgba(63,43,115,0.08)] cursor-default"
          >
            {/* Liquid Glare */}
            <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/60 to-transparent opacity-30 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out pointer-events-none" />

            <h3 className="relative z-10 text-lg font-bold text-gray-900 mb-6 transition-colors duration-300 group-hover:text-[#3F2B73]">{category.title}</h3>
            <div className="relative z-10 flex flex-wrap gap-2.5">
              {category.items.map(tech => (
                <span 
                  key={tech}
                  className="px-3.5 py-1.5 bg-white/60 border border-white/80 rounded-xl text-xs font-medium text-gray-700 shadow-sm hover:bg-white hover:text-[#3F2B73] hover:border-[#3F2B73]/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
