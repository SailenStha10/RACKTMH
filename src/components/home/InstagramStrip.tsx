import { ArrowUpRight } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from "@/components/layout/SocialIcons";
import { Reveal } from "@/components/motion/Reveal";

const SOCIALS = [
  {
    name: "Instagram",
    handle: siteConfig.social.instagramHandle,
    href: siteConfig.social.instagram,
    Icon: InstagramIcon,
    tone: "bg-brand-primary text-white",
  },
  {
    name: "Facebook",
    handle: "Rotaract Club of Kathmandu Height",
    href: siteConfig.social.facebook,
    Icon: FacebookIcon,
    tone: "bg-[#0f0f0f] text-white",
  },
  {
    name: "LinkedIn",
    handle: "Rotaract Club of Kathmandu Height",
    href: siteConfig.social.linkedin,
    Icon: LinkedinIcon,
    tone: "bg-[#fbeef3] text-[#0f0f0f]",
  },
];

function InstagramStrip() {
  return (
    <Section title="See us on our socials." className="py-24 sm:py-32 lg:py-40">
      <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
        {SOCIALS.map(({ name, handle, href, Icon, tone }, i) => (
          <Reveal key={name} as="li" y={40} delay={i * 0.1}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group focus-visible:outline-ring flex h-full min-h-56 flex-col justify-between rounded-3xl p-7 text-left transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-24px_rgba(166,18,79,0.6)] focus-visible:outline-2 focus-visible:outline-offset-4 ${tone}`}
            >
              <span className="flex items-start justify-between">
                <Icon className="size-10" aria-hidden="true" />
                <ArrowUpRight
                  className="size-6 opacity-60 transition-[translate,opacity] duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100"
                  aria-hidden="true"
                />
              </span>
              <span>
                <span className="block text-2xl font-semibold tracking-tight">
                  {name}
                </span>
                <span className="mt-1 block text-sm opacity-75">{handle}</span>
              </span>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export { InstagramStrip };
