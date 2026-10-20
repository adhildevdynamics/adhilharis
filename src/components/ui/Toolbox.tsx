import { motion } from 'framer-motion';
import { Tilt3D } from './Tilt3D';

const groups = [
  { label: "Frontend", items: ["React.js", "React Native", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Material UI", "Styled Components"] },
  { label: "Mobile", items: ["Expo", "AsyncStorage", "i18n / RTL", "OTP & QR Auth", "Push Notifications"] },
  { label: "State & Data", items: ["Redux Toolkit", "RTK Query", "Formik", "Yup"] },
  { label: "APIs & Services", items: ["Axios", "REST APIs", "Firebase", "SignalR", "MSAL / Azure AD"] },
  { label: "Tools & Platforms", items: ["Git", "VS Code", "Framer Motion", "GSAP", "Vite"] },
];

export const Toolbox = () => {
  return (
    <section className="w-full bg-light relative z-20 py-24 md:py-36">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between md:items-end border-b border-metal/40 pb-8 mb-14 md:mb-20">
          <h2 className="display-lg font-display font-bold tracking-tighter text-ink">Toolbox</h2>
          <span className="text-xs md:text-sm font-mono uppercase tracking-[0.3em] text-accent mt-4 md:mt-0">05 / Skills</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6">
          {groups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: gi * 0.06 }}
            >
              <Tilt3D max={8} scale={1.03} className="flex flex-col gap-5 bg-cream border border-dark/10 rounded-sm p-6 h-full shadow-[0_20px_40px_-24px_rgba(17,17,17,0.25)]">
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-pop">{group.label}</h3>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-lg md:text-xl font-display font-medium text-dark/85 leading-snug">
                      {item}
                    </li>
                  ))}
                </ul>
              </Tilt3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
