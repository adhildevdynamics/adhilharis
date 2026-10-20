import { useEffect, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { profile } from '../data.js'

const SUBJECT = 'Hiring Inquiry'

// Any link with data-hire opens this popup instead of relying on mailto:.
export default function HireModal() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const dialog = useRef(null)
  const opener = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('[data-hire]')
      if (!a) return
      e.preventDefault()
      opener.current = a
      setCopied(false)
      setOpen(true)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  useEffect(() => {
    const d = dialog.current
    if (!d) return
    if (open && !d.open) d.showModal()
    if (!open && d.open) d.close()
  }, [open])

  const close = () => {
    setOpen(false)
    opener.current?.focus()
  }

  const copy = async () => {
    try {
      await Promise.race([
        navigator.clipboard.writeText(profile.email),
        new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), 600)),
      ])
    } catch {
      const t = document.createElement('textarea')
      t.value = profile.email
      document.body.appendChild(t)
      t.select()
      document.execCommand('copy')
      t.remove()
    }
    setCopied(true)
  }

  const gmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(profile.email)}&su=${encodeURIComponent(SUBJECT)}`
  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(SUBJECT)}`

  return (
    <dialog
      ref={dialog}
      className="hire"
      aria-labelledby="hire-title"
      onClose={() => setOpen(false)}
      onClick={(e) => e.target === dialog.current && close()}
    >
      <div className="hire-card">
        <button className="hire-x" onClick={close} aria-label="Close">
          ×
        </button>
        <p className="hire-k">Let’s talk</p>
        <h2 id="hire-title">Hire me ✦</h2>
        <p className="hire-sub">Pick whatever is easiest for you.</p>

        <div className="hire-email">
          <span>{profile.email}</span>
          <button className="btn" onClick={copy} aria-live="polite">
            {copied ? '✓ Copied!' : 'Copy email'}
          </button>
        </div>

        <div className="hire-opts">
          <a className="btn" href={gmail} target="_blank" rel="noreferrer">
            <Icon name="mail" size={16} /> Open in Gmail
          </a>
          <a className="btn" href={mailto}>
            <Icon name="mail" size={16} /> Mail app
          </a>
          <a className="btn" href={profile.whatsapp} target="_blank" rel="noreferrer">
            <Icon name="whatsapp" size={16} /> WhatsApp
          </a>
          <a className="btn" href={profile.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" size={16} /> LinkedIn
          </a>
        </div>
        <a className="hire-community" href={profile.community} target="_blank" rel="noreferrer">
          <Icon name="whatsapp" size={15} /> Or join my WhatsApp community →
        </a>
      </div>
    </dialog>
  )
}
