import { useEffect, useRef, useState } from 'react'
import { UserRound } from 'lucide-react'
import { aboutTimeline } from '../data/portfolio'
import { SectionTitle } from './SectionTitle'

export function About() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const wheelRef = useRef(null)

  useEffect(() => {
    const wheel = wheelRef.current
    if (!wheel) return undefined

    let frameId
    const updateActiveYear = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        const items = [...wheel.querySelectorAll('.year-wheel__item')]
        const wheelCenter = wheel.getBoundingClientRect().top + wheel.clientHeight / 2
        let closestIndex = 0
        let closestDistance = Infinity

        items.forEach((item, index) => {
          const itemRect = item.getBoundingClientRect()
          const itemCenter = itemRect.top + itemRect.height / 2
          const distance = Math.abs(wheelCenter - itemCenter)

          if (distance < closestDistance) {
            closestDistance = distance
            closestIndex = index
          }
        })

        setActiveIndex(closestIndex)
      })
    }

    wheel.addEventListener('scroll', updateActiveYear, { passive: true })
    return () => {
      cancelAnimationFrame(frameId)
      wheel.removeEventListener('scroll', updateActiveYear)
    }
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const wheel = wheelRef.current
    if (!section || !wheel) return undefined

    let frameId
    const syncWheelWithPage = () => {
      cancelAnimationFrame(frameId)
      frameId = requestAnimationFrame(() => {
        if (window.innerWidth <= 980) return

        const sectionTop = section.offsetTop
        const scrollDistance = Math.max(
          section.offsetHeight - window.innerHeight,
          1,
        )
        const progress = Math.min(
          Math.max((window.scrollY - sectionTop) / scrollDistance, 0),
          1,
        )
        const maxWheelScroll = wheel.scrollHeight - wheel.clientHeight
        const nextIndex = Math.round(progress * (aboutTimeline.length - 1))

        wheel.scrollTop = progress * maxWheelScroll
        setActiveIndex(nextIndex)
      })
    }

    syncWheelWithPage()
    window.addEventListener('scroll', syncWheelWithPage, { passive: true })
    window.addEventListener('resize', syncWheelWithPage)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('scroll', syncWheelWithPage)
      window.removeEventListener('resize', syncWheelWithPage)
    }
  }, [])

  const selectYear = (index) => {
    const wheel = wheelRef.current
    const item = wheel?.querySelectorAll('.year-wheel__item')[index]
    if (!wheel || !item) return

    wheel.scrollTo({
      top: item.offsetTop - (wheel.clientHeight - item.clientHeight) / 2,
      behavior: 'smooth',
    })
  }

  const activeItem = aboutTimeline[activeIndex]

  return (
    <section className="section-shell about" id="about" ref={sectionRef}>
      <div className="about__sticky">
        <SectionTitle icon={UserRound}>About me</SectionTitle>
        <div className="about__content">
          <div className="about__intro">
            <h3>
              From real-world experience
              <br />
              to building <span>digital solutions.</span>
            </h3>
            <p>
              I started my career in the trucking industry, where I managed safety
              and operations. That experience taught me how to solve complex
              problems and streamline processes. I transitioned into software
              engineering to build scalable, reliable, and user-friendly
              applications that create real impact.
            </p>
          </div>
          <div className="timeline-picker">
            <div className="year-wheel-wrap">
              <div className="year-wheel__focus" aria-hidden="true" />
              <div
                className="year-wheel"
                ref={wheelRef}
                aria-label="Select a career timeline year"
              >
                <div className="year-wheel__spacer" aria-hidden="true" />
                {aboutTimeline.map((item, index) => (
                  <button
                    className={`year-wheel__item ${
                      index === activeIndex ? 'is-active' : ''
                    }`}
                    type="button"
                    key={item.year}
                    onClick={() => selectYear(index)}
                    aria-pressed={index === activeIndex}
                  >
                    {item.year}
                  </button>
                ))}
                <div className="year-wheel__spacer" aria-hidden="true" />
              </div>
            </div>

            <article className="timeline-detail" key={activeItem.year}>
              <span>{activeItem.year}</span>
              <div className="timeline-detail__line" aria-hidden="true" />
              <h4>{activeItem.title}</h4>
              <p>{activeItem.subtitle}</p>
              {activeItem.organization && <small>{activeItem.organization}</small>}
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
