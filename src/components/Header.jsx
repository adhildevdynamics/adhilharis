import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { profile } from '../data.js'

const links = [
  ['cv', 'CV'],
  ['work', 'Work'],
  ['approach', 'Approach'],
  ['contact', 'Contact'],
]

export default function Header() {
  const [compact, setCompact] = useState(false)
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const burger = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setCompact(window.scrollY > 60)
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    links.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    const outside = [document.querySelector('main'), document.querySelector('.foot')]
    document.body.style.overflow = open ? 'hidden' : ''
    outside.forEach((el) => el && (el.inert = open))
    const onKey = (e) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
        burger.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      outside.forEach((el) => el && (el.inert = false))
    }
  }, [open])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)')
    const onChange = (e) => e.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const hire = `mailto:${profile.email}?subject=Hiring%20Inquiry`

  return (
    <>
      <header className={`hdr ${compact ? 'compact' : ''}`}>
        <div className="hdr-bar">
          <a href="#top" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark" aria-hidden="true">AH</span>
            <span className="brand-text">
              <b>{profile.name}</b>
              <small>{profile.title}</small>
            </span>
          </a>

          <nav className="hdr-nav" aria-label="Sections">
            {links.map(([id, label], i) => (
              <a key={id} href={`#${id}`} className={active === id ? 'on' : ''} aria-current={active === id ? 'true' : undefined}>
                <em aria-hidden="true">0{i + 1}</em>
                {label}
              </a>
            ))}
          </nav>

          <div className="hdr-right">
            <span className="avail">
              <i /> Available
            </span>
            <a className="hdr-cv" href="/resume.pdf" download="Adhil-Haris-CV.pdf">
              <Icon name="download" size={14} /> CV
            </a>
            <a className="hdr-cta" href={hire} data-hire>
              Hire me <Icon name="arrow" size={14} />
            </a>
            <button ref={burger} aria-controls="site-menu" className={`burger ${open ? 'x' : ''}`} onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
              <span />
              <span />
            </button>
          </div>
        </div>
        <div className="hdr-road" aria-hidden="true">
          <span style={{ transform: `scaleX(${progress})` }} />
          <i style={{ left: `${progress * 100}%` }} />
        </div>
      </header>

      <div id="site-menu" className={`menu ${open ? 'show' : ''}`} inert={!open}>
        <nav>
          {links.map(([id, label], i) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)} style={{ transitionDelay: open ? `${120 + i * 60}ms` : '0ms' }}>
              <em aria-hidden="true">0{i + 1}</em>
              {label}
            </a>
          ))}
        </nav>
        <div className="menu-foot">
          <p className="menu-hand">let’s build something ✦</p>
          <a className="btn" href="/resume.pdf" download="Adhil-Haris-CV.pdf" onClick={() => setOpen(false)}>
            <Icon name="download" size={15} /> CV
          </a>
          <a className="btn light" href={hire} data-hire onClick={() => setOpen(false)}>
            <Icon name="mail" size={15} /> Hire me
          </a>
        </div>
      </div>
    </>
  )
}
