import type { SVGProps } from "react"

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-7.5h2.5l.5-3h-3V8.5c0-.87.24-1.5 1.5-1.5H16.5V4.35C16.19 4.31 15.15 4.22 14 4.22c-2.4 0-4 1.46-4 4.15V10.5H7.5v3H10V21h3.5Z" />
    </svg>
  )
}

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

function LinkedinIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6.94 8.5H4.06V20h2.88V8.5ZM5.5 4a1.67 1.67 0 1 0 0 3.34A1.67 1.67 0 0 0 5.5 4ZM20 13.72c0-3.1-1.66-4.54-3.87-4.54a3.34 3.34 0 0 0-3.03 1.67V8.5H10.2c.04.85 0 12 0 12h2.9v-6.7c0-.36.03-.72.13-.97.29-.72.94-1.47 2.04-1.47 1.44 0 2.02 1.1 2.02 2.7V20H20v-6.28Z" />
    </svg>
  )
}

export { FacebookIcon, InstagramIcon, LinkedinIcon }
