export function SectionTitle({ icon: Icon, children, action }) {
  return (
    <div className="section-heading">
      <div className="section-heading__title">
        <h2>{children}</h2>
      </div>
      {action}
    </div>
  )
}
