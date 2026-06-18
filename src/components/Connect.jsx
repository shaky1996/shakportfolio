import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/portfolio'

const links = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/shakyuldashev',
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/shaky1996',
    href: profile.github,
    icon: Github,
  },
]

export function Connect() {
  return (
    <section className="connect section-shell" id="contact">
      <div className="connect__intro">
        <span>Let&apos;s build</span>
        <h2>Something great together.</h2>
        <p>I&apos;m currently open to full-time opportunities. Let&apos;s connect!</p>
      </div>
      <div className="connect__links">
        {links.map(({ label, value, href, icon: Icon }) => (
          <a
            href={href}
            key={label}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
          >
            <Icon size={25} />
            <span>
              <strong>{label}</strong>
              <small>{value}</small>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
