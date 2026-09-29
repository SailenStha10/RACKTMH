import Link from "next/link";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { Container } from "@/components/layout/Container";

const linkClass =
  "text-sm text-white/80 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

function Footer() {
  const year = new Date().getFullYear();
  const contact = [
    !isTodo(siteConfig.email) && {
      label: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    !isTodo(siteConfig.phone) && {
      label: siteConfig.phone,
      href: `tel:${siteConfig.phone}`,
    },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <footer className="bg-[#0f0f0f] text-white">
      <Container className="flex flex-col gap-6 py-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-base font-semibold tracking-tight focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {siteConfig.shortName}
          </Link>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/join"
                  className="hover:text-brand-accent text-sm font-medium text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Join us
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/60 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {year} {siteConfig.clubName} &middot; {siteConfig.address}{" "}
            &middot; RID 3292
          </p>
          <p className="flex flex-wrap gap-x-4 gap-y-1">
            {contact.map((c) => (
              <a key={c.href} href={c.href} className="hover:text-white">
                {c.label}
              </a>
            ))}
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              {siteConfig.social.instagramHandle}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
