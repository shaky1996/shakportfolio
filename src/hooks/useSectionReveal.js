import { useLayoutEffect } from 'react'

export function useSectionReveal() {
  useLayoutEffect(() => {
    const sections = [...document.querySelectorAll('.section-shell')]
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    sections.forEach((section) => {
      section.classList.add('section-reveal')
    })

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])
}
