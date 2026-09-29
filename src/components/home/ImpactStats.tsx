import { mockImpactStats } from "@/data/mock";
import { Section } from "@/components/layout/Section";
import { CountUpStat } from "@/components/home/CountUpStat";
import { Reveal } from "@/components/motion/Reveal";

function ImpactStats() {
  if (mockImpactStats.length === 0) return null;

  return (
    <Section
      id="impact"
      eyebrow="Our impact"
      title="What our members have done, together."
    >
      <dl className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
        {mockImpactStats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 0.1}
            className="flex flex-col items-center gap-2 text-center"
          >
            <dd className="text-display text-foreground order-1">
              <CountUpStat value={stat.value} suffix={stat.suffix} />
            </dd>
            <dt className="text-muted-foreground order-2 text-xs">
              {stat.label}
            </dt>
          </Reveal>
        ))}
      </dl>
    </Section>
  );
}

export { ImpactStats };
