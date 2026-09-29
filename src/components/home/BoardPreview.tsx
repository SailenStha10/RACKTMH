import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

const CARD_TONES = [
  "bg-[#0f0f0f] text-white",
  "bg-white text-[#0f0f0f]",
  "bg-brand-accent text-[#0f0f0f]",
];

function BoardPreview() {
  return (
    <Section
      tone="pink"
      eyebrow="Our leadership"
      title="The people guiding our first rotary year."
      subtitle="Our charter board leads the club. Full names and portraits are coming soon."
    >
      <ul className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
        {siteConfig.leaders.map((leader, i) => (
          <Reveal key={leader.position} as="li" delay={i * 0.1} y={30}>
            <div
              className={`flex h-full flex-col items-center gap-2 rounded-lg p-8 text-center ${CARD_TONES[i % CARD_TONES.length]}`}
            >
              <span
                aria-hidden="true"
                className="bg-brand-primary mb-2 flex size-16 items-center justify-center rounded-full text-2xl font-semibold text-white"
              >
                {leader.handle
                  ? leader.handle.replace("@", "")[0].toUpperCase()
                  : "?"}
              </span>
              <p className="text-label font-medium tracking-wider opacity-70">
                {leader.position.toUpperCase()}
              </p>
              {leader.handle ? (
                <a
                  href={leader.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-ring text-lg font-semibold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2"
                >
                  {leader.handle}
                </a>
              ) : (
                <p className="text-lg font-semibold">To be announced</p>
              )}
            </div>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-10 flex justify-center">
        <PillLink href="/team" tone="black">
          Meet the team
        </PillLink>
      </Reveal>
    </Section>
  );
}

export { BoardPreview };
