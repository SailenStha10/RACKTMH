"use client"

import * as React from "react"

interface CountUpStatProps {
  value: number
  suffix?: string
}

function CountUpStat({ value, suffix }: CountUpStatProps) {
  const ref = React.useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = React.useState(value)
  const hasAnimated = React.useRef(false)

  React.useEffect(() => {
    const el = ref.current
    if (!el) return

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    if (prefersReducedMotion) return

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasAnimated.current) return
        hasAnimated.current = true

        const duration = 1200
        const start = performance.now()

        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(Math.round(value * eased))
          if (progress < 1) {
            requestAnimationFrame(tick)
          } else {
            setDisplay(value)
          }
        }

        requestAnimationFrame(tick)
        observer.disconnect()
      },
      { threshold: 0.4 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  )
}

export { CountUpStat }
