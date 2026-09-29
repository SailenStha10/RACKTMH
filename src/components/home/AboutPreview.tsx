import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";

function AboutPreview() {
  const cards = [
    {
      label: "Mission",
      text: siteConfig.mission,
      tone: "bg-[#0f0f0f] text-white",
    },
    {
      label: "Vision",
      text: siteConfig.vision,
      tone: "bg-brand-primary text-white",
    },
  ].filter((c) => !isTodo(c.text));

  return (
    <Section eyebrow="About" title="A youth-led club serving Kathmandu.">
      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.label} y={30} delay={i * 0.1}>
            <div className={`h-full rounded-2xl p-8 text-center ${card.tone}`}>
              <h3 className="text-label mb-3 font-medium tracking-wider opacity-70">
                {card.label.toUpperCase()}
              </h3>
              <p className="text-lg leading-snug">{card.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { AboutPreview };
