import Link from "next/link";
import { Mail, Phone, MapPin, HeartHandshake } from "lucide-react";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/layout/SocialIcons";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    icon: InstagramIcon,
  },
  { label: "LinkedIn", href: siteConfig.social.linkedin, icon: LinkedinIcon },
].filter((link) => link.href);

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-muted/40 border-t">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2">
            <span className="bg-brand-primary text-brand-primary-foreground flex size-9 items-center justify-center rounded-full">
              <HeartHandshake className="size-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-foreground text-lg font-bold tracking-tight">
              {siteConfig.shortName}
            </span>
          </Link>
          <p className="text-muted-foreground max-w-xs text-sm">
            {siteConfig.tagline}
          </p>
          <p className="text-muted-foreground text-sm">
            A Rotaract club in Rotary International {siteConfig.district} (
            {siteConfig.districtRegion}).
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-foreground text-sm font-semibold">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-2">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/join"
                className="text-muted-foreground hover:text-foreground text-sm transition-colors"
              >
                Join Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-foreground text-sm font-semibold">
            Contact
          </h3>
          <ul className="text-muted-foreground flex flex-col gap-2 text-sm">
            {!isTodo(siteConfig.email) && (
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-foreground transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            )}
            {!isTodo(siteConfig.phone) && (
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-foreground transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </li>
            )}
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{siteConfig.address}</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-heading text-foreground text-sm font-semibold">
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
                className="border-border text-muted-foreground hover:border-brand-primary hover:text-brand-primary focus-visible:outline-ring flex size-9 items-center justify-center rounded-full border transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </Container>

      <div className="border-border border-t py-6">
        <Container>
          <p className="text-muted-foreground text-center text-xs">
            &copy; {year} {siteConfig.clubName}. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}

export { Footer };
