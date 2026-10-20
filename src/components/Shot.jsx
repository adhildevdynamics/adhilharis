// Real screenshots presented in a browser or phone frame.
export default function Shot({ frame, shots, name }) {
  if (frame === 'web') {
    return (
      <div className="browser">
        <div className="browser-bar" aria-hidden="true">
          <span />
          <span />
          <span />
          <em>{name.toLowerCase().replace(/\s+/g, '')}</em>
        </div>
        <img src={shots[0]} alt={`${name} screenshot`} loading="lazy" />
      </div>
    )
  }
  return (
    <div className={`phones n${shots.length}`}>
      {shots.map((src, i) => (
        <div key={src} className="phone-f">
          <img src={src} alt={`${name} screenshot ${i + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  )
}
