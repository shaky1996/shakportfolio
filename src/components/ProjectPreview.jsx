export function ProjectPreview({ type }) {
  if (type === 'mobile') {
    return (
      <div className="project-preview project-preview--mobile">
        <div className="mini-phone">
          <strong>CDL Wallet</strong>
          <i />
          <span />
          <span />
          <span />
          <span />
        </div>
      </div>
    )
  }

  if (type === 'table') {
    return (
      <div className="project-preview project-preview--table">
        <div className="browser-bar"><i /><i /><i /></div>
        <div className="mini-sidebar" />
        <div className="mini-table">
          <b />
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
    )
  }

  return (
    <div className="project-preview project-preview--dashboard">
      <div className="browser-bar"><i /><i /><i /></div>
      <div className="mini-nav" />
      <div className="mini-dashboard">
        <b /><b />
        <span /><span /><span /><span /><span /><span />
      </div>
    </div>
  )
}
