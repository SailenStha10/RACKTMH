import Link from "next/link"
import { Globe, Mail, Phone, MapPin, HeartHandshake } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/Container"
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "@/components/layout/SocialIcons"

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
  { label: "Website", href: siteConfig.social.website, icon: Globe },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/40">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-bold tracking-tight text-foreground">
              {siteConfig.shortName}
            </span>
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            {siteConfig.tagline}
          </p>
          <p className="text-sm text-muted-foreground">
            A Rotaract Club sponsored by {siteConfig.sponsorClub}, {siteConfig.district}.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/join"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Contact
          </h3>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <a
                href={`tel:${siteConfig.phone}`}
                className="transition-colors hover:text-foreground"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-sm font-semibold text-foreground">
            Follow Us
          </h3>
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand-primary hover:text-brand-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-t border-border py-6">
        <Container>
          <p className="text-center text-xs text-muted-foreground">
            &copy; {year} {siteConfig.clubName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  )
}

export { Footer }
