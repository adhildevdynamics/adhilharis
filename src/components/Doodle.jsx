import { useEffect, useRef, useState } from 'react'

// Hand-drawn ink doodles that "draw themselves" when scrolled into view.
const DOODLES = {
  curl: ['0 0 80 130', ['M30 122 C 8 96, 64 86, 52 60 C 44 42, 20 54, 33 67 C 48 80, 68 52, 58 12', 'M44 22 L58 8 L70 24']],
  smiley: [
    '0 0 100 100',
    [
      'M50 8 C 76 6, 94 28, 92 52 C 90 78, 70 94, 46 92 C 22 90, 7 70, 8 47 C 10 24, 28 10, 54 10',
      'M34 41 C 36 33, 42 33, 44 41',
      'M58 41 C 60 33, 66 33, 68 41',
      'M28 58 C 38 77, 64 79, 74 56',
    ],
  ],
  down: ['0 0 60 134', ['M30 4 C 36 40, 24 82, 30 126', 'M17 110 L30 128 L43 110']],
  hook: ['0 0 90 80', ['M8 22 C 38 0, 82 8, 78 42 C 75 64, 52 70, 44 54', 'M36 64 L43 52 L56 58']],
  squiggle: ['0 0 100 60', ['M4 30 C 14 6, 24 54, 34 30 S 54 6, 64 30 S 84 54, 96 30']],
  underline: ['0 0 100 24', ['M4 15 C 30 4, 70 22, 96 8']],
  arrow: ['0 0 100 40', ['M4 24 C 30 10, 60 34, 90 18', 'M78 8 L92 18 L80 30']],
  star: ['0 0 60 60', ['M30 6 L36 24 L54 24 L40 35 L46 53 L30 42 L14 53 L20 35 L6 24 L24 24 Z']],
}

export default function Doodle({ name, className = '' }) {
  const ref = useRef(null)
  const [on, setOn] = useState(false)
  const [viewBox, paths] = DOODLES[name]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <svg ref={ref} className={`doodle d-${name} ${on ? 'on' : ''} ${className}`} viewBox={viewBox} preserveAspectRatio={name === 'underline' ? 'none' : undefined} aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} pathLength="1" style={{ transitionDelay: `${i * 0.3}s` }} />
      ))}
    </svg>
  )
}
