import { ArrowRight, BadgeCheck } from 'lucide-react'
import { certifications } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

function CertificationCard({ certification }) {
  return (
    <article className="cert-card">
      <div className={`cert-badge cert-badge--${certification.color}`}>
        <span>{certification.mark}</span>
      </div>
      <div className="cert-card__copy">
        <h3>{certification.title}</h3>
        <p>{certification.issuer}</p>
        <small>Issued: {certification.issued}</small>
        <a href={certification.url} target="_blank" rel="noreferrer">
          View credential <ArrowRight size={13} />
        </a>
      </div>
    </article>
  )
}

export function Certifications() {
  return (
    <section className="section-shell" id="certifications">
      <SectionTitle icon={BadgeCheck}>Certifications</SectionTitle>
      <div className="certifications-grid">
        {certifications.map((certification) => (
          <CertificationCard
            key={certification.title}
            certification={certification}
          />
        ))}
      </div>
    </section>
  )
}
