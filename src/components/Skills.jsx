import { useRef, useState } from 'react'
import { ArrowRight, LayoutGrid } from 'lucide-react'
import { FaApple, FaAws, FaCodeBranch, FaDatabase, FaJava } from 'react-icons/fa'
import {
  SiAndroid,
  SiCss,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGit,
  SiGithubactions,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si'
import { skillGroups } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

const technologyIcons = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  tailwind: SiTailwindcss,
  expo: SiExpo,
  ios: FaApple,
  android: SiAndroid,
  node: SiNodedotjs,
  express: SiExpress,
  java: FaJava,
  spring: SiSpringboot,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  sql: FaDatabase,
  aws: FaAws,
  githubActions: SiGithubactions,
  cicd: FaCodeBranch,
  git: SiGit,
  docker: SiDocker,
}

function SkillItem({ item, index }) {
  const [name, icon, color] = item
  const Icon = technologyIcons[icon] || FaCodeBranch

  return (
    <li
      className="technology-item"
      style={{ '--technology-delay': `${100 + index * 70}ms` }}
    >
      <span className={`tech-mark tech-mark--${color}`} aria-hidden="true">
        <Icon />
      </span>
      <span className="technology-item__name">{name}</span>
    </li>
  )
}

export function Skills() {
  const [activeIndex, setActiveIndex] = useState(0)
  const tabRefs = useRef([])
  const activeGroup = skillGroups[activeIndex]

  const handleKeyDown = (event, index) => {
    let nextIndex = index

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      nextIndex = (index + 1) % skillGroups.length
    } else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      nextIndex = (index - 1 + skillGroups.length) % skillGroups.length
    } else if (event.key === 'Home') {
      nextIndex = 0
    } else if (event.key === 'End') {
      nextIndex = skillGroups.length - 1
    } else {
      return
    }

    event.preventDefault()
    setActiveIndex(nextIndex)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section className="section-shell" id="skills">
      <SectionTitle icon={LayoutGrid}>Skills &amp; technologies</SectionTitle>
      <div className="skills-explorer">
        <div
          className="skills-tabs"
          role="tablist"
          aria-label="Technology categories"
          aria-orientation="vertical"
        >
          {skillGroups.map((group, index) => (
            <button
              className={`skills-tab ${index === activeIndex ? 'is-active' : ''}`}
              type="button"
              role="tab"
              id={`skill-tab-${index}`}
              aria-selected={index === activeIndex}
              aria-controls="skills-panel"
              tabIndex={index === activeIndex ? 0 : -1}
              key={group.title}
              ref={(element) => {
                tabRefs.current[index] = element
              }}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => handleKeyDown(event, index)}
            >
              <strong>{group.title}</strong>
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          ))}
        </div>

        <article
          className="skills-panel"
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`skill-tab-${activeIndex}`}
          key={activeGroup.title}
        >
          <div className="skills-panel__header">
            <span>Selected discipline</span>
            <h3>{activeGroup.title}</h3>
            <p>{activeGroup.description}</p>
          </div>
          <ul className="technology-grid">
            {activeGroup.items.map((item, index) => (
              <SkillItem key={item[0]} item={item} index={index} />
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
