import { ArrowRight, FolderCode, Github } from 'lucide-react'
import { projects, profile } from '../data/portfolio'
import { ProjectPreview } from './ProjectPreview'
import { SectionTitle } from './SectionTitle'

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <ProjectPreview type={project.type} />
        <div className="project-card__content">
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-list">
            {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </div>
      <div className="project-card__actions">
        <a href={project.primaryUrl} target="_blank" rel="noreferrer">
          {project.primaryLabel}
        </a>
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <Github size={15} /> GitHub
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  const action = (
    <a className="section-link" href={profile.github} target="_blank" rel="noreferrer">
      View all projects <ArrowRight size={16} />
    </a>
  )

  return (
    <section className="section-shell" id="projects">
      <SectionTitle icon={FolderCode} action={action}>
        Featured projects
      </SectionTitle>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
