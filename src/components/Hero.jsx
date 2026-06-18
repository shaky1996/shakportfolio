import { Download, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/portfolio'
import { HeroVisual } from './HeroVisual'

export function Hero() {
  return (
    <section className="hero hero--smooth" id="home">
      <div className="hero__copy">
        <p className="eyebrow">Hello, I&apos;m</p>
        <h1>
          Shak
          <span>Yuldashev</span>
        </h1>
        <h2>{profile.role}</h2>
        <p className="hero__intro">
          I build mobile and web applications that solve real problems using
          modern technologies.
        </p>
        <div className="hero__actions">
          <a
            className="button button--primary"
            href={profile.resume}
            target="_blank"
            rel="noreferrer"
          >
            <Download size={18} /> Resume
          </a>
          <a
            className="button button--dark"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            className="button button--dark"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
        </div>
       
      </div>
      <HeroVisual />
    </section>
  )
}
