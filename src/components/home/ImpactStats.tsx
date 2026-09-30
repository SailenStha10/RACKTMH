import { getHomeImpactStats } from "@/lib/queries/home";
import { Section } from "@/components/layout/Section";
import { CountUpStat } from "@/components/home/CountUpStat";
import { Reveal } from "@/components/motion/Reveal";

async function ImpactStats() {
  const impactStats = await getHomeImpactStats();
  if (impactStats.every((stat) => stat.value === 0)) return null;

  return (
    <Section id="impact" title="What our members have done, together.">
      <dl className="grid grid-cols-2 gap-x-6 gap-y-14 lg:grid-cols-4">
        {impactStats.map((stat, i) => (
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
