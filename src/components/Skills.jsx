import { LayoutGrid } from 'lucide-react'
import { skillGroups } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

function SkillItem({ item }) {
  const [name, mark, color] = item
  return (
    <li>
      <span className={`tech-mark tech-mark--${color}`}>{mark}</span>
      {name}
    </li>
  )
}

export function Skills() {
  return (
    <section className="section-shell" id="skills">
      <SectionTitle icon={LayoutGrid}>Skills &amp; technologies</SectionTitle>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <SkillItem key={item[0]} item={item} />
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
