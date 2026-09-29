import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";

function FactsBar() {
  const facts = [
    { label: "Chartered", value: siteConfig.charterDate },
    { label: "District", value: "RID 3292" },
    { label: "Club ID", value: siteConfig.clubId },
    { label: "Based in", value: "Kathmandu, Nepal" },
  ];

  return (
    <section className="bg-[#0f0f0f] py-10 text-white">
      <Container>
        <dl className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {facts.map((fact, i) => (
            <Reveal key={fact.label} delay={i * 0.08} y={16}>
              <dt className="text-label text-brand-accent font-medium tracking-wider">
                {fact.label}
              </dt>
              <dd className="mt-2 text-xl font-medium sm:text-2xl">
                {fact.value}
              </dd>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

export { FactsBar };
