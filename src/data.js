// Files live in /public: photo.webp and resume.pdf
export const assets = { photo: '/photo.webp', resume: '/resume.pdf' }

export const profile = {
  first: 'Adhil',
  last: 'Haris',
  name: 'Adhil Haris',
  title: 'Frontend Developer',
  location: 'Dubai, UAE',
  email: 'adhilharis7777@gmail.com',
  linkedin: 'https://www.linkedin.com/in/adhilharis/',
  x: 'https://x.com/aadhy_l',
  github: 'https://github.com/adhildevdynamics',
  whatsapp: 'https://wa.me/971508861554',
  community: 'https://chat.whatsapp.com/CqOyTdzsc1wGKYNYhguNPi',
}

export const cv = {
  bio: 'I build interfaces that feel clean, fast and purposeful — scalable UI systems, thoughtful design and efficient architecture, from web to mobile.',
  skills: [
    'React.js & React Native (Expo)',
    'TypeScript, Redux Toolkit & RTK Query',
    'Real-time apps with SignalR & Firebase',
    'Secure auth — Azure AD (MSAL), OTP & QR',
    'Material UI & Styled Components',
    'Bilingual UIs (English & Arabic, RTL)',
  ],
  experience: [
    {
      to: 'Now',
      from: '2024',
      title: 'Frontend Developer',
      org: 'Dev Dynamics',
      desc: 'Enterprise web & mobile apps in Dubai — ITSM ticketing with AI-assisted flows, a B2B field-service app and real-time SignalR chat.',
    },
    {
      to: '2024',
      from: '2023',
      title: 'Python Developer',
      org: 'Camerinfolks',
      desc: 'Part-time Python development in Kochi, India.',
    },
    {
      to: '2024',
      from: '2023',
      title: 'Trainee Software Developer',
      org: 'Camerinfolks',
      desc: 'Python-Django full stack and Angular web development.',
    },
    {
      to: '2023',
      title: 'Python-Android Intern',
      org: 'RISS Technologies',
      desc: 'Internship working with Python, Django, HTML, CSS, Bootstrap and MySQL.',
    },
  ],
  education: [
    {
      to: '2023',
      from: '2020',
      title: 'Bachelor of Computer Applications',
      at: 'Mahatma Gandhi University',
      desc: 'Computer and Information Sciences.',
    },
  ],
  stack: [
    { k: 'Re', name: 'React', bg: '#20232a', fg: '#61dafb' },
    { k: 'RN', name: 'React Native', bg: '#0b0b0b', fg: '#61dafb' },
    { k: 'TS', name: 'TypeScript', bg: '#3178c6', fg: '#ffffff' },
    { k: 'Rx', name: 'Redux Toolkit', bg: '#764abc', fg: '#ffffff' },
    { k: 'Ex', name: 'Expo', bg: '#ffffff', fg: '#0b0b0b', light: true },
    { k: 'Fb', name: 'Firebase', bg: '#1f1f1f', fg: '#ffca28' },
    { k: 'Si', name: 'SignalR', bg: '#512bd4', fg: '#ffffff' },
    { k: 'Mu', name: 'Material UI', bg: '#007fff', fg: '#ffffff' },
  ],
}

export const projects = [
  {
    name: 'GoTicketWeb',
    kind: 'ITSM Web App',
    stack: 'React.js · Redux Toolkit · Material UI · MSAL · Axios · Formik · Framer Motion',
    desc: 'A React-based IT Service Management platform to create, track and manage support tickets — with a scalable component architecture, AI chat-based ticket flow and MSAL session lifecycle with token refresh.',
    tags: ['Azure AD & MSAL', 'Conversational AI', 'Dashboards', 'Token refresh'],
    enterprise: true,
    tint: '#e0414f',
    device: 'web',
    shot: '/work/goticket-web.png',
  },
  {
    name: 'GoTicket Mobile',
    kind: 'B2B Mobile App',
    stack: 'React Native · Expo · Redux Toolkit · Firebase · SignalR · i18n',
    desc: 'Cross-platform B2B field-service app — OTP & QR authentication, SignalR chat with media, a sales dashboard, Firebase push notifications and a bilingual English/Arabic (RTL) UI.',
    tags: ['OTP & QR auth', 'SignalR chat', 'Firebase FCM', 'RTL'],
    enterprise: true,
    tint: '#f5f2ed',
    device: 'phone',
    shot: '/work/goticket-mobile.png',
  },
  {
    name: 'Flux OnGo',
    kind: 'Field Operations App',
    stack: 'React Native · SignalR · Redux',
    desc: 'Mobile app for managing inspections, tickets, claims, approvals and sales workflows with real-time updates.',
    tags: ['Inspections', 'Offline features', 'QR operations'],
    enterprise: true,
    tint: '#8b0d1a',
    device: 'phone',
    shot: '/work/flux-inspection.jpg',
  },
  {
    name: 'ByteBridge',
    kind: 'Digital Solutions',
    stack: 'TypeScript',
    desc: 'Connecting ideas to digital solutions through technology.',
    tags: ['TypeScript', 'Architecture'],
  },
  {
    name: 'flavorasia',
    kind: 'Open Source',
    stack: 'TypeScript',
    desc: 'An open-source TypeScript project focused on robust frontend features and smooth user experiences.',
    tags: ['Frontend UI', 'Open source'],
  },
  {
    name: 'Noir Editorial',
    kind: 'Editorial Experience',
    stack: 'TypeScript · UI Engineering',
    desc: 'A digital editorial experience with modern typography, elegant layouts and smooth animations.',
    tags: ['Typography', 'Animation'],
  },
  {
    name: 'Mehzaas Makeover',
    kind: 'Digital Brochure',
    stack: 'TypeScript · Frontend UI',
    desc: 'A digital brochure and portfolio showcasing makeover services with a premium, elegant interface.',
    tags: ['Brochure', 'Premium UI'],
  },
  {
    name: 'Study Bloom Digital',
    kind: 'EdTech Platform',
    stack: 'TypeScript · EdTech',
    desc: 'An educational platform that enhances digital learning with intuitive interactions.',
    tags: ['EdTech', 'Interactive'],
  },
  {
    name: 'Personal Portfolio',
    kind: 'Web',
    stack: 'TypeScript',
    desc: 'A public TypeScript repository demonstrating clean architecture and modern web practices.',
    tags: ['Clean code', 'Web'],
  },
]

export const principles = [
  { t: 'Clarity', d: 'Interfaces should be simple, readable and easy to use.' },
  { t: 'Motion', d: 'Animations should guide the user, not distract them.' },
  { t: 'Scalability', d: 'Code should be reusable, maintainable and ready to grow.' },
]

export const workflow = [
  { t: 'Prompt', d: 'Turning ideas into structured development tasks.' },
  { t: 'Code', d: 'Using AI tools to move faster inside the editor.' },
  { t: 'Debug', d: 'Finding issues quickly and improving logic.' },
  { t: 'Review', d: 'Cleaning code before production delivery.' },
  { t: 'Ship', d: 'Delivering polished React and React Native experiences.' },
]

export const aiTools = ['GitHub Copilot', 'VS Code Agents', 'Prompt Engineering', 'Debugging', 'Code Review', 'Frontend Productivity']
