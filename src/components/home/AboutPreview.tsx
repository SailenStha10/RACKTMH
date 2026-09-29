import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

function AboutPreview() {
  return (
    <Section
      eyebrow="About"
      title="A youth-led club serving Kathmandu through service, leadership and fellowship."
      subtitle={`Chartered on ${siteConfig.charterDate} in Rotary International ${siteConfig.district} (${siteConfig.districtRegion}), we bring young people together to act on what their communities need.`}
    >
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        <Reveal y={30}>
          <div className="h-full rounded-lg bg-[#0f0f0f] p-8 text-center text-white">
            <h3 className="text-label text-brand-accent mb-4 font-medium tracking-wider">
              OUR MISSION
            </h3>
            <p className="text-base leading-relaxed">{siteConfig.mission}</p>
          </div>
        </Reveal>
        <Reveal y={30} delay={0.1}>
          <div className="bg-brand-primary h-full rounded-lg p-8 text-center text-white">
            <h3 className="text-label mb-4 font-medium tracking-wider text-[#0f0f0f]">
              OUR VISION
            </h3>
            <p className="text-base leading-relaxed">{siteConfig.vision}</p>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <PillLink href="/about" tone="black">
          Learn more about us
        </PillLink>
      </Reveal>
    </Section>
  );
}

export { AboutPreview };
