import { useRef, useState } from 'react'
import { ArrowRight, ExternalLink, FolderCode, Github } from 'lucide-react'
import { projects, profile } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0)
  const projectRefs = useRef([])
  const activeProject = projects[activeIndex]

  const handleKeyDown = (event, index) => {
    let nextIndex = index

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (index + 1) % projects.length
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + projects.length) % projects.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = projects.length - 1
    } else {
      return
    }

    event.preventDefault()
    setActiveIndex(nextIndex)
    projectRefs.current[nextIndex]?.focus()
  }

  const action = (
    <a className="section-link" href={profile.github} target="_blank" rel="noreferrer">
      View all projects <ArrowRight size={16} />
    </a>
  )

  return (
    <section className="section-shell" id="projects">
      <SectionTitle icon={FolderCode} action={action}>
        Projects
      </SectionTitle>
      <div className="projects-explorer">
        <div
          className="project-selector"
          role="tablist"
          aria-label="Featured projects"
          aria-orientation="vertical"
        >
          {projects.map((project, index) => (
            <button
              className={`project-option ${
                index === activeIndex ? 'is-active' : ''
              }`}
              type="button"
              role="tab"
              id={`project-tab-${index}`}
              aria-selected={index === activeIndex}
              aria-controls="project-detail"
              tabIndex={index === activeIndex ? 0 : -1}
              key={project.title}
              ref={(element) => {
                projectRefs.current[index] = element
              }}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <span className="project-option__copy">
                <strong>{project.title}</strong>
              </span>
            </button>
          ))}
        </div>

        <article
          className="project-detail"
          id="project-detail"
          role="tabpanel"
          aria-labelledby={`project-tab-${activeIndex}`}
          key={activeProject.title}
        >
          <div className="project-detail__image">
            <img
              src={activeProject.image}
              alt={`${activeProject.title} project screenshot`}
              style={{ objectPosition: activeProject.imagePosition }}
            />
          </div>

          <div className="project-detail__body">
            <div className="project-detail__left">
              <h3>{activeProject.title}</h3>
              <p className="project-detail__description">
                {activeProject.description}
              </p>
            </div>

            <div className="project-detail__right">
              <div className="project-detail__section">
                <h4>Why I built it</h4>
                <p>{activeProject.reason}</p>
              </div>
            </div>

            <div className="project-detail__technologies">
              <h4>Technologies used</h4>
              <div className="tag-list">
                {activeProject.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>

            <div className="project-detail__actions">
              <a
                href={activeProject.primaryUrl}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={17} />
                {activeProject.primaryLabel}
              </a>
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={17} /> GitHub
              </a>
            </div>
          </div>

        </article>
      </div>
    </section>
  )
}
