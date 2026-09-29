import Image from "next/image";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";

type Leader = (typeof siteConfig.leaders)[number];

function LeaderCard({ leader }: { leader: Leader }) {
  return (
    <figure className="w-40 shrink-0 sm:w-44">
      <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-[#fbeef3]">
        <Image
          src="/placeholders/portrait.svg"
          alt=""
          fill
          sizes="176px"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-center">
        <p className="text-sm font-semibold">
          {leader.handle || "To be announced"}
        </p>
        <p className="text-xs text-black/55">{leader.position}</p>
      </figcaption>
    </figure>
  );
}

function BoardPreview() {
  const leaders = siteConfig.leaders;
  // Enough copies per half that the row always overflows a wide screen.
  const half = Array.from({ length: 5 }).flatMap(() => leaders);

  return (
    <Section title="Meet our leaders." className="overflow-hidden">
      <div className="-mx-4 overflow-x-auto motion-safe:overflow-hidden sm:-mx-6 lg:-mx-8">
        <div className="motion-safe:hover:paused flex w-max gap-8 px-4 motion-safe:animate-[marquee_60s_linear_infinite]">
          {half.map((leader, i) => (
            <LeaderCard key={`a-${i}`} leader={leader} />
          ))}
          <div className="flex gap-8" aria-hidden="true">
            {half.map((leader, i) => (
              <LeaderCard key={`b-${i}`} leader={leader} />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export { BoardPreview };
