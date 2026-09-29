import {
  Briefcase,
  Globe2,
  HeartHandshake,
  Megaphone,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";

const AVENUES: { title: string; text: string; Icon: LucideIcon }[] = [
  {
    title: "Club Service",
    text: "A strong, welcoming club.",
    Icon: Users,
  },
  {
    title: "Community Service",
    text: "Projects that meet local needs.",
    Icon: HeartHandshake,
  },
  {
    title: "Professional Development",
    text: "Skills that open doors.",
    Icon: Briefcase,
  },
  {
    title: "International Service",
    text: "Friendship across borders.",
    Icon: Globe2,
  },
  {
    title: "Membership",
    text: "A place for every new member.",
    Icon: UserPlus,
  },
  {
    title: "Public Image",
    text: "Sharing our work widely.",
    Icon: Megaphone,
  },
];

function FourAvenues() {
  return (
    <Section tone="blush" title="Six ways we serve.">
      <ul className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {AVENUES.map(({ title, text, Icon }, i) => (
          <Reveal key={title} as="li" delay={i * 0.07} y={32}>
            <article className="group relative h-full overflow-hidden rounded-2xl bg-white p-7 text-left ring-1 ring-black/5 transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(166,18,79,0.55)]">
              {/* Fill that sweeps up from the bottom on hover. */}
              <span
                aria-hidden="true"
                className="bg-brand-primary absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-out group-hover:scale-y-100"
              />
              <div className="relative flex h-full flex-col gap-10">
                <div className="flex items-start justify-between">
                  <span className="bg-brand-primary/10 text-brand-primary flex size-12 items-center justify-center rounded-xl transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="text-sm font-medium text-black/30 transition-colors duration-500 group-hover:text-white/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight transition-colors duration-500 group-hover:text-white">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-black/60 transition-colors duration-500 group-hover:text-white/85">
                    {text}
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export { FourAvenues };
