import { Boxes, Cloud, CodeXml, GraduationCap, Rocket, UserRound } from 'lucide-react'
import { stats } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

const statIcons = {
  code: CodeXml,
  degree: GraduationCap,
  cloud: Cloud,
  rocket: Rocket,
}

export function About() {
  return (
    <section className="section-shell about" id="about">
      <div className="about__statement">
        <SectionTitle icon={UserRound}>About me</SectionTitle>
        <h3>
          From real-world experience
          <br />
          to building <span>digital solutions.</span>
        </h3>
      </div>
      <div className="about__copy">
        <p>
          I started my career in the trucking industry, where I managed safety
          and operations. That experience taught me how to solve complex
          problems and streamline processes.
        </p>
        <p>
          I transitioned into software engineering to build solutions that
          create real impact. Now I focus on building scalable, reliable, and
          user-friendly applications.
        </p>
      </div>
      <div className="stats-grid">
        {stats.map((stat) => {
          const Icon = statIcons[stat.icon] || Boxes
          return (
            <article className="stat-card" key={stat.label}>
              <Icon size={24} />
              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}
