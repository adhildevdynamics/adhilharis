// A drawn, skeleton-style device mockup tinted with the project colour.
export default function Mock({ device, tint, name }) {
  const rows = [0, 1, 2, 3]
  if (device === 'phone') {
    return (
      <div className="mock-phones" style={{ '--t': tint }} aria-hidden="true">
        {[0, 1].map((k) => (
          <div key={k} className={`phone ${k ? 'back' : ''}`}>
            <div className="notch" />
            <div className="ph-head">
              <span className="ph-title">{k ? 'Chat' : name}</span>
              <span className="ph-avatar" />
            </div>
            <div className="ph-hero">
              <b />
              <i />
            </div>
            {rows.map((r) => (
              <div key={r} className="ph-row">
                <span className="ph-dot" />
                <div>
                  <b style={{ width: `${70 - r * 10}%` }} />
                  <i style={{ width: `${45 + r * 8}%` }} />
                </div>
              </div>
            ))}
            <div className="ph-tab">
              <span />
              <span />
              <span className="on" />
              <span />
            </div>
          </div>
        ))}
      </div>
    )
  }
  return (
    <div className="mock-web" style={{ '--t': tint }} aria-hidden="true">
      <div className="web-bar">
        <span />
        <span />
        <span />
        <em>{name.toLowerCase()}.app</em>
      </div>
      <div className="web-body">
        <aside>
          {[0, 1, 2, 3, 4].map((r) => (
            <i key={r} className={r === 1 ? 'on' : ''} />
          ))}
        </aside>
        <div className="web-main">
          <div className="web-cards">
            {[0, 1, 2].map((r) => (
              <div key={r}>
                <i />
                <b />
              </div>
            ))}
          </div>
          <div className="web-chart">
            {[40, 65, 50, 80, 58, 92, 70].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="web-chat">
            <p className="bot" />
            <p className="me" />
            <p className="bot short" />
          </div>
        </div>
      </div>
    </div>
  )
}
