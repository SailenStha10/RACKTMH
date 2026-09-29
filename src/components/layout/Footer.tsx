import Link from "next/link";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

const linkClass =
  "text-sm text-white transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const headingClass = "mb-4 text-xs text-(--dark-muted)";

function Footer() {
  const year = new Date().getFullYear();
  const connect = [
    { label: "Instagram", href: siteConfig.social.instagram },
    { label: "Facebook", href: siteConfig.social.facebook },
    { label: "LinkedIn", href: siteConfig.social.linkedin },
  ].filter((l) => l.href);

  return (
    <footer className="bg-(--dark) text-white">
      <Container className="py-16 sm:py-20">
        <Reveal className="flex flex-col justify-between gap-4 border-b border-(--dark-line) pb-8 sm:flex-row sm:items-center">
          <Link href="/" className="text-xl font-medium tracking-tight">
            {siteConfig.shortName}
          </Link>
          <p className="text-sm text-white">
            Service Above Self. Fellowship Through Service.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="grid grid-cols-2 gap-10 py-12 sm:grid-cols-4"
        >
          <div>
            <h3 className={headingClass}>#Explore</h3>
            <ul className="flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>#Projects</h3>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/projects" className={linkClass}>
                  Project Jyoti and more
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>#Connect</h3>
            <ul className="flex flex-col gap-2">
              {connect.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <Link href="/join" className={linkClass}>
                  Join us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className={headingClass}>#Club</h3>
            <ul className="flex flex-col gap-2 text-sm text-white">
              <li>{siteConfig.address}</li>
              <li>Rotary International {siteConfig.district}</li>
              {!isTodo(siteConfig.email) && (
                <li>
                  <a href={`mailto:${siteConfig.email}`} className={linkClass}>
                    {siteConfig.email}
                  </a>
                </li>
              )}
              {!isTodo(siteConfig.phone) && (
                <li>
                  <a href={`tel:${siteConfig.phone}`} className={linkClass}>
                    {siteConfig.phone}
                  </a>
                </li>
              )}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col justify-between gap-2 border-t border-(--dark-line) pt-8 text-xs text-(--dark-muted) sm:flex-row">
          <p>
            &copy; {year} {siteConfig.clubName}
          </p>
          <a
            href={siteConfig.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-60"
          >
            {siteConfig.social.instagramHandle}
          </a>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
