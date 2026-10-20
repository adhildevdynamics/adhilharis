import { useEffect, useState } from 'react'
import Reveal from './components/Reveal.jsx'
import Icon from './components/Icon.jsx'
import Shot from './components/Shot.jsx'
import Header from './components/Header.jsx'
import Doodle from './components/Doodle.jsx'
import HireModal from './components/HireModal.jsx'
import { profile, cv, projects, principles, workflow, aiTools, assets } from './data.js'

const YEAR = new Date().getFullYear()

function Tag({ children, className = '', as: Tag = 'h2' }) {
  return <Tag className={`tag ${className}`}>{children}</Tag>
}

function Row({ to, from, title, org, at, desc }) {
  return (
    <div className="row">
      <p className="years">
        <span aria-hidden="true">{to}</span>
        {from && <span aria-hidden="true">{from}</span>}
        <span className="sr">{from ? `${from} to ${to === 'Now' ? 'present' : to}` : to}</span>
      </p>
      <div>
        <h3>
          {title}
          {org && <span className="org"> | {org}</span>}
        </h3>
        {at && <p className="at">at {at}</p>}
        <p className="desc">{desc}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [hasResume, setHasResume] = useState(false)
  const hire = `mailto:${profile.email}?subject=Hiring%20Inquiry`

  useEffect(() => {
    fetch(assets.resume, { method: 'HEAD' })
      .then((r) => setHasResume(r.ok && (r.headers.get('content-type') || '').includes('pdf')))
      .catch(() => {})
  }, [])

  const contacts = [
    { icon: 'mail', label: profile.email, href: `mailto:${profile.email}` },
    { icon: 'linkedin', label: 'LinkedIn', href: profile.linkedin },
    { icon: 'whatsapp', label: 'WhatsApp', href: profile.whatsapp },
    { icon: 'x', label: '@aadhy_l', sr: 'X (Twitter): ', href: profile.x },
    { icon: 'github', label: 'GitHub', href: profile.github },
    { icon: 'whatsapp', key: 'community', label: 'Join my WhatsApp community', href: profile.community },
  ]

  return (
    <>
      <a className="skip" href="#cv">
        Skip to content
      </a>
      <Header />
      <HireModal />

      <main id="top">
        {/* ===== CV sheet ===== */}
        <section className="page first" id="cv" aria-label="CV">
          <div className="sheet cv">
            <div className="col col-l">
              <div className="cell c-name">
                <h1 className="name">
                  <span>{profile.first}</span>{' '}
                  <span>{profile.last}</span>
                </h1>
                <p className="tagline">
                  <span>. {profile.location} .</span>
                  <span>. {profile.title} .</span>
                </p>
                <div className="photo-wrap">
                  <figure className="sticker">
                    <img src={assets.photo} alt={`Portrait of ${profile.name}`} />
                    <figcaption>that’s me!</figcaption>
                  </figure>
                  <Doodle name="curl" />
                </div>
              </div>

              <div className="cell c-bio">
                <Tag className="on-line">Personal Bio</Tag>
                <p className="bio">{cv.bio}</p>
              </div>

              <div className="cell c-skills">
                <Tag className="on-line">Skills</Tag>
                <Doodle name="hook" />
                <ul className="bullets">
                  {cv.skills.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col col-r">
              <div className="cell c-exp">
                <Tag className="on-top">Experience</Tag>
                <Doodle name="smiley" />
                {cv.experience.map((r) => (
                  <Row key={r.title + r.org} {...r} />
                ))}
              </div>

              <div className="cell c-edu">
                <Tag className="on-line">Education</Tag>
                <Doodle name="down" />
                {cv.education.map((r) => (
                  <Row key={r.title} {...r} />
                ))}
              </div>

              <div className="cell c-stack">
                <Tag className="on-line">Tech Stack</Tag>
                <ul className="apps">
                  {cv.stack.map((a) => (
                    <li
                      key={a.k}
                      className={`app ${a.light ? 'light' : ''}`}
                      style={{ '--bg': a.bg, '--fg': a.fg }}
                    >
                      <span aria-hidden="true">{a.k}</span>
                      <span className="sr">{a.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cell c-contact">
                <h2 className="contact-me">
                  Contact
                  <br />
                  me!
                </h2>
                <ul className="contact-list">
                  {contacts.map((c) => (
                    <li key={c.key || c.icon}>
                      <a href={c.href} target={c.icon === 'mail' ? undefined : '_blank'} rel="noreferrer">
                        <Icon name={c.icon} size={18} />
                        {c.sr && <span className="sr">{c.sr}</span>}
                        {c.label}
                      </a>
                    </li>
                  ))}
                  {hasResume && (
                    <li>
                      <a href={assets.resume} download="Adhil-Haris-CV.pdf">
                        <Icon name="download" size={18} />
                        Download CV
                      </a>
                    </li>
                  )}
                </ul>
                <Doodle name="squiggle" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== case studies ===== */}
        <section className="page" id="work" aria-label="Case studies">
          <div className="sheet work">
            <Tag className="on-top">Case Studies</Tag>
            <p className="sheet-note">
              {projects.length} case studies · {projects.filter((p) => p.enterprise).length} enterprise products <Doodle name="star" />
            </p>
            <div className="cases">
              {projects.map((p, i) => (
                <article key={p.name} className="case">
                  <div className="case-top">
                    <span className="num">{String(i + 1).padStart(2, '0')}</span>
                    {p.enterprise && <span className="badge">Enterprise ★</span>}
                  </div>
                  {p.enterprise && (
                    <div className="thumb">
                      <Shot frame={p.frame} shots={p.shots} name={p.name} splash={p.splash} />
                    </div>
                  )}
                  <h3>{p.name}</h3>
                  <p className="kind">{p.kind}</p>
                  <p className="desc">{p.desc}</p>
                  <p className="stack">{p.stack}</p>
                  <ul className="marks">
                    {p.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== approach ===== */}
        <section className="page" id="approach" aria-label="How I work">
          <div className="sheet ap">
            <Tag className="on-top">How I Work</Tag>
            <div className="ap-quote">
              <p>
                Frontend is not just what users see —{' '}
                <span className="feel">
                  it’s what they feel.
                  <Doodle name="underline" />
                </span>
              </p>
            </div>
            <div className="ap-principles">
              {principles.map((p, i) => (
                <div key={p.t} className="principle">
                  <span className="p-num">0{i + 1}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
            <div className="ap-flow">
              <Tag className="on-line" as="h3">
                AI Workflow
              </Tag>
              <ol>
                {workflow.map((s, i) => (
                  <li key={s.t}>
                    <span className="step-n">{i + 1}</span>
                    <h4>{s.t}</h4>
                    <p>{s.d}</p>
                    {i < workflow.length - 1 && <Doodle name="arrow" />}
                  </li>
                ))}
              </ol>
              <p className="tools">
                <span>tools →</span> {aiTools.join(' · ')}
              </p>
            </div>
          </div>
        </section>

        {/* ===== contact ===== */}
        <section className="page" id="contact" aria-label="Contact">
          <Reveal className="note">
            <p className="note-k">Contact</p>
            <h2>
              Have an idea?{' '}
              <br />
              Let’s build it.
            </h2>
            <p className="note-sub">Open to opportunities &amp; collaborations.</p>
            <div className="note-ctas">
              <a className="btn" href={hire} data-hire>
                <Icon name="mail" size={16} /> {profile.email}
              </a>
              <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
                <Icon name="whatsapp" size={16} /> WhatsApp
              </a>
              <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                <Icon name="linkedin" size={16} /> LinkedIn
              </a>
              <a className="btn" href={assets.resume} download="Adhil-Haris-CV.pdf">
                <Icon name="download" size={16} /> Download CV
              </a>
            </div>
            <a className="community" href={profile.community} target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={20} />
              <span>
                <b>Join my WhatsApp community</b>
                <small>Dev tips, updates &amp; good conversations — everyone’s welcome.</small>
              </span>
              <Icon name="arrow" size={18} />
            </a>
          </Reveal>
        </section>
      </main>

      <footer className="foot">
        <p>
          © {YEAR} {profile.name} · Frontend Developer, Dubai
        </p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  )
}
