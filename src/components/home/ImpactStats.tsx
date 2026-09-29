import { mockImpactStats } from "@/data/mock";
import { Section } from "@/components/layout/Section";
import { CountUpStat } from "@/components/home/CountUpStat";

function ImpactStats() {
  if (mockImpactStats.length === 0) return null;

  return (
    <Section
      id="impact"
      eyebrow="Our Impact"
      title="Making a Difference, Together"
      subtitle="A snapshot of what our members have accomplished through service and dedication."
      className="bg-muted/40"
    >
      <dl className="grid grid-cols-2 gap-6 lg:grid-cols-4">
        {mockImpactStats.map((stat) => (
          <div
            key={stat.label}
            className="bg-card ring-foreground/10 flex flex-col items-center gap-1 rounded-xl px-4 py-8 text-center ring-1"
          >
            <dt className="text-muted-foreground order-2 text-sm font-medium">
              {stat.label}
            </dt>
            <dd className="font-heading text-brand-primary order-1 text-4xl font-bold sm:text-5xl">
              <CountUpStat value={stat.value} suffix={stat.suffix} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export { ImpactStats };
