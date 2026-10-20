import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, ArrowDown, ArrowLeft, ArrowRight, Code2, Smartphone, Database, Layers, GitBranch, MapPin, Monitor, Zap, Mail } from 'lucide-react';
import { projects, rest, experiences, groups, skillStatements, categories, steps, principles } from '../portfolioData';
import { ScrollHero } from '../components/ui/ScrollHero';
import flux1 from '../assets/flux1.jpg';
import flux2 from '../assets/flux2.jpg';
import flux3 from '../assets/flux3.jpg';
import './Home.css';

const Github = () => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.87c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.64-1.33-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.6 9.6 0 0 1 12 6.82c.85 0 1.71.12 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" /></svg>;
const Linkedin = () => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM8 18H5V9h3v9ZM6.5 7.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4ZM19 18h-3v-4.5c0-1.1-.4-1.8-1.4-1.8-1 0-1.6.7-1.6 1.8V18h-3V9h3v1.2c.5-.8 1.3-1.4 2.6-1.4 2.1 0 3.4 1.3 3.4 4V18Z" /></svg>;

const icons = [Code2, Smartphone, Database, Layers, GitBranch];
const email = 'mailto:adhilharis369@gmail.com?subject=Hiring%20Inquiry';
const whatsapp = "https://wa.me/971508861554?text=Hi%20Adhil,%20I'm%20interested%20in%20hiring%20you%20for%20a%20project.";
const orderedProjects = projects;
const SectionLabel = ({ children }: { children: React.ReactNode }) => <div className="section-label"><span>{children}</span><i /></div>;

function ProjectArt({ project, large = false }: { project: typeof projects[number]; large?: boolean }) {
  if (project.title === 'Flux OnGo') return <div className={`project-art flux-art ${large ? 'large' : ''}`}><div className="project-orbit" /><img className="phone phone-left" src={flux2} alt="Flux OnGo application screen" /><img className="phone phone-center" src={flux1} alt="Flux OnGo mobile application" /><img className="phone phone-right" src={flux3} alt="Flux OnGo inspection screen" /></div>;
  return <div className={`project-art ${project.isMobile ? 'mobile-art' : 'web-art'}`}><div className="project-orbit" /><img src={project.image} alt={project.title} loading="lazy" /></div>;
}

const easeOut = [0.16, 1, 0.3, 1] as const;
const lineContainer = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const lineItem = { hidden: { y: 50, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: easeOut } } };

export const Home = () => {
  const [active, setActive] = useState(0);
  const wheelLock = useRef(0);
  const aboutRef = useRef<HTMLElement>(null);
  const { scrollYProgress: aboutProgress } = useScroll({ target: aboutRef, offset: ['start end', 'end start'] });
  const aboutDecorY = useTransform(aboutProgress, [0, 1], [-30, 30]);
  return <main className="portfolio-home" id="home">
    <ScrollHero />

    <section id="about" className="about-band red-band section-pad" ref={aboutRef}>
      <motion.div className="about-top" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6, ease: easeOut }}>
        <SectionLabel>About me</SectionLabel>
      </motion.div>
      <div className="about-grid">
        <div className="about-main">
          <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={lineContainer}>
            <motion.span variants={lineItem}>I build digital</motion.span>
            <motion.span variants={lineItem}>experiences</motion.span>
            <motion.span variants={lineItem}>across web &amp; mobile.</motion.span>
          </motion.h2>
          <motion.div className="about-desc" initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}>
            <p>I’m a Frontend Developer focused on building scalable web and mobile applications.</p>
            <p>My work sits between clean UI, smooth user experience, and strong frontend architecture.</p>
            <Link className="pill pill-light" to="/about">More About Me <ArrowUpRight /></Link>
          </motion.div>
        </div>
        <motion.div className="about-info" initial={{ x: 30, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, delay: 0.2, ease: easeOut }}>
          <div><MapPin /><p><strong>Based in</strong>Dubai, UAE</p></div>
          <div><Monitor /><p><strong>Focus</strong>Web Applications<br />Mobile Applications<br />UI Engineering</p></div>
          <div><Database /><p><strong>Experience with</strong>Enterprise Systems<br />ITSM Platforms<br />Field Service Management</p></div>
          <div><Zap /><p><strong>Always exploring</strong>Better tools<br />Cleaner code<br />AI-assisted development</p></div>
        </motion.div>
      </div>
      <motion.div className="about-decor" aria-hidden="true" style={{ y: aboutDecorY }} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.9, ease: easeOut }}>
        <span className="about-number">01</span>
        <span className="about-tagline">Keep Building.</span>
      </motion.div>
      <motion.div className="about-transition" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
        <span>Selected Work</span><ArrowDown />
      </motion.div>
    </section>

    <section
      id="work"
      className="work-section section-pad"
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Selected projects"
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft') setActive(value => Math.max(0, value - 1));
        if (event.key === 'ArrowRight') setActive(value => Math.min(orderedProjects.length - 1, value + 1));
      }}
      onWheel={(event) => {
        const now = Date.now();
        if (Math.abs(event.deltaY) < 45 || now - wheelLock.current < 650) return;
        if (event.deltaY > 0 && active < orderedProjects.length - 1) setActive(value => value + 1);
        if (event.deltaY < 0 && active > 0) setActive(value => value - 1);
        wheelLock.current = now;
      }}
    >
      <div className="work-intro">
        <div><span>Selected work</span><h2>Projects that turn<br />ideas into products.</h2></div>
        <p aria-live="polite">{String(active + 1).padStart(2, '0')} — {String(orderedProjects.length).padStart(2, '0')}</p>
      </div>
      <div className="project-stack" aria-live="polite">
        <span className="work-watermark" aria-hidden="true">WORK</span>
        {orderedProjects.map((project, index) => {
          const offset = index - active;
          const isActive = offset === 0;
          const depth = Math.abs(offset);
          return <motion.article
            className={`stacked-project-card ${isActive ? 'is-active' : 'is-inactive'}`}
            key={project.title}
            aria-hidden={!isActive}
            animate={{
              x: offset === 0 ? '0%' : offset < 0 ? '-38%' : '38%',
              y: offset === 0 ? 0 : depth === 1 ? 35 : 54,
              scale: offset === 0 ? 1 : depth === 1 ? .88 : .78,
              rotateY: offset === 0 ? 0 : offset < 0 ? 7 : -7,
              rotateZ: offset === 0 ? 0 : offset < 0 ? -2 : 2,
              opacity: offset === 0 ? 1 : depth === 1 ? .48 : .18,
              zIndex: offset === 0 ? 10 : depth === 1 ? 5 : 1,
            }}
            transition={{ type: 'spring', stiffness: 110, damping: 20 }}
            whileHover={!isActive && depth === 1 ? { scale: .91, opacity: .65 } : undefined}
            onClick={() => !isActive && setActive(index)}
            drag={isActive ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={.13}
            onDragEnd={(_, info) => {
              if (info.offset.x < -70) setActive(value => Math.min(orderedProjects.length - 1, value + 1));
              if (info.offset.x > 70) setActive(value => Math.max(0, value - 1));
            }}
          >
            <div className="stacked-project-media"><ProjectArt project={project} large /></div>
            <div className="stacked-project-copy">
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>
              <p className="project-tech">{project.tech}</p>
              <p className="project-description">{project.description}</p>
              <div className="project-feature-tags">{project.features.map(item => <span key={item}>{item}</span>)}</div>
            </div>
          </motion.article>;
        })}
      </div>
      <div className="stack-pagination" aria-label="Project navigation">
        <button aria-label="Previous project" disabled={active === 0} onClick={() => setActive(value => Math.max(0, value - 1))}><ArrowLeft /></button>
        <div>{orderedProjects.map((project, index) => <button key={project.title} className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show project ${index + 1}: ${project.title}`} aria-current={index === active ? 'true' : undefined}><span>{String(index + 1).padStart(2, '0')}</span><i /></button>)}</div>
        <button aria-label="Next project" disabled={active === orderedProjects.length - 1} onClick={() => setActive(value => Math.min(orderedProjects.length - 1, value + 1))}><ArrowRight /></button>
      </div>
      <details className="more-work"><summary>More work <span>{String(rest.length).padStart(2, '0')} projects <ArrowDown /></span></summary><div className="more-work-grid">{rest.map(project => <article key={project.title}><h3>{project.title}</h3><small>{project.tech}</small><p>{project.description}</p></article>)}</div></details>
    </section>

    <section className="toolbox-band red-band section-pad">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6, ease: easeOut }}>
        <SectionLabel>Skills &amp; technologies</SectionLabel>
      </motion.div>
      <div className="toolbox-layout">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: easeOut }}>
          <h2>My<br />Toolbox</h2>
          <p>Technologies I use to build modern web and mobile products.</p>
          <span className="tiny-mantra">LEARN<br />BUILD<br />IMPROVE</span>
        </motion.div>
        {groups.map((group, index) => { const Icon = icons[index]; return <motion.div className="tool-group" key={group.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6, delay: index * 0.08, ease: easeOut }}><Icon /><h3>{group.label}</h3><ul>{group.items.map(item => <li key={item}>{item}</li>)}</ul></motion.div>; })}
      </div>
    </section>

    <section id="experience" className="journey-section section-pad">
      <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6, ease: easeOut }}>
        <SectionLabel>Experience</SectionLabel>
      </motion.div>
      <div className="journey-layout">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, ease: easeOut }}>
          <h2>My<br /><em>Journey</em></h2>
          <p>A timeline of my professional experience and growth.</p>
          <Link className="pill pill-white" to="/about">More About Me <ArrowUpRight /></Link>
        </motion.div>
        <div className="timeline">
          {experiences.map((exp, index) => <motion.details className="experience-row" key={exp.company + exp.role} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay: index * 0.06, ease: easeOut }}><summary><span className="experience-date">{exp.date}</span><span><strong>{exp.company}</strong><span className="experience-role">{exp.role}</span></span><span className="experience-location">{exp.location}<span>{exp.type} <ArrowDown /></span></span></summary><div className="experience-body">{exp.description && <p>{exp.description}</p>}<ul>{exp.contributions.map(item => <li key={item}>{item}</li>)}</ul><div className="tech-tags">{exp.tech.map(item => <span key={item}>{item}</span>)}</div></div></motion.details>)}
        </div>
      </div>
      <details className="background-details"><summary>Education, approach &amp; how I build <ArrowDown /></summary><div className="background-grid"><article><h3>What I Build</h3>{categories.map(item => <p key={item.label}><strong>{item.label}</strong><br />{item.detail}</p>)}{skillStatements.map(item => <p key={item}>{item}</p>)}</article><article><h3>Building faster with modern AI workflows.</h3><p>I use AI-assisted development workflows to speed up debugging, improve productivity, review code, and ship better frontend experiences.</p>{steps.map(step => <p key={step.num}><strong>{step.num} / {step.title}</strong><br />{step.desc}</p>)}<p>GitHub Copilot · VS Code Agents · Prompt Engineering · Debugging · Code Review · Frontend Productivity</p></article><article><h3>Frontend is not just what users see.<br />It is what users feel.</h3>{principles.map(item => <p key={item.title}><strong>{item.title}</strong><br />{item.description}</p>)}<h3>Education</h3><p>2019 — 2022</p><h4>Mahatma Gandhi University</h4><p>Bachelor of Computer Applications</p><p>My academic foundation helped me build strong fundamentals in programming, problem-solving, and software development, which later evolved into frontend and mobile application development.</p></article></div></details>
    </section>

    <section id="contact" className="contact-band red-band section-pad">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, ease: easeOut }}>
        <SectionLabel>Let’s connect</SectionLabel><h2>Have an idea?<br />Let’s build<br />something great.</h2>
      </motion.div>
      <motion.div className="contact-copy" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.7, delay: 0.15, ease: easeOut }}>
        <p>Frontend Developer building scalable web and mobile experiences.</p>
        <div className="button-row"><a className="pill pill-light" href={email}>Send an Email <ArrowUpRight /></a><a className="pill pill-outline" href="https://www.linkedin.com/in/adhilharis/" target="_blank" rel="noopener noreferrer">Let’s Connect <Linkedin /></a></div>
        <a className="whatsapp-link" href={whatsapp} target="_blank" rel="noopener noreferrer">Or say hello on WhatsApp <ArrowUpRight /></a>
      </motion.div>
      <div className="contact-mantra" aria-hidden="true">GOOD<br />IDEAS<br />BUILD<br />GREAT<br />THINGS<span /></div>
    </section>
    <footer className="reference-footer section-pad"><div><Link to="/" className="footer-name">Adhil Haris</Link><p>Frontend Developer</p></div><nav aria-label="Footer navigation"><a href="#home">Home</a><a href="#about">About</a><a href="#work">Projects</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav><div className="footer-right"><div className="socials"><a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a><a href="https://www.linkedin.com/in/adhilharis/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href="https://x.com/aadhy_l?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a><a href={email} aria-label="Email"><Mail /></a></div><p>© {new Date().getFullYear()} Adhil Haris. All rights reserved.</p></div></footer>
  </main>;
};
