import { useEffect, useState } from 'react'
import { BadgeCheck, ExternalLink, Maximize2, X } from 'lucide-react'
import { certifications } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

function CertificationCard({ certification, onOpen }) {
  return (
    <article className="cert-card">
      <button
        className="cert-card__preview"
        type="button"
        onClick={() => onOpen(certification)}
        aria-label={`Preview ${certification.title} certificate`}
      >
        <iframe
          src={`${certification.pdf}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
          title={`${certification.title} certificate preview`}
          tabIndex="-1"
          loading="lazy"
        />
        <span className="cert-card__preview-overlay">
          <Maximize2 size={18} />
          View certificate
        </span>
      </button>
      <div className="cert-card__copy">
        <h3>{certification.title}</h3>
        <div className="cert-card__meta">
          <span>{certification.issuer}</span>
          <time>{certification.issued}</time>
        </div>
      </div>
    </article>
  )
}

export function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null)

  useEffect(() => {
    if (!selectedCertificate) return undefined

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCertificate(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedCertificate])

  return (
    <>
      <section className="section-shell" id="certifications">
        <SectionTitle icon={BadgeCheck}>Certifications</SectionTitle>
        <div className="certifications-grid">
          {certifications.map((certification) => (
            <CertificationCard
              key={certification.title}
              certification={certification}
              onOpen={setSelectedCertificate}
            />
          ))}
        </div>
      </section>

      {selectedCertificate && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certificate-modal-title"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedCertificate(null)
            }
          }}
        >
          <div className="certificate-modal__panel">
            <div className="certificate-modal__header">
              <div>
                <span>Certificate</span>
                <h2 id="certificate-modal-title">
                  {selectedCertificate.title}
                </h2>
              </div>
              <div className="certificate-modal__actions">
                <a
                  href={selectedCertificate.pdf}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Open certificate PDF in a new tab"
                >
                  <ExternalLink size={19} />
                  <span>Open PDF</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  aria-label="Close certificate preview"
                  autoFocus
                >
                  <X size={23} />
                </button>
              </div>
            </div>
            <iframe
              className="certificate-modal__document"
              src={`${selectedCertificate.pdf}#view=FitH`}
              title={`${selectedCertificate.title} full certificate`}
            />
          </div>
        </div>
      )}
    </>
  )
}
