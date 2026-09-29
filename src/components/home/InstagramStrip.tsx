import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

function InstagramStrip() {
  return (
    <Section
      tone="black"
      eyebrow="Follow along"
      title="Our latest moments live on Instagram."
      subtitle="Projects, district events and club life, shared as they happen."
    >
      <Reveal className="flex justify-center">
        <PillLink href={siteConfig.social.instagram} tone="pink" external>
          {siteConfig.social.instagramHandle}
        </PillLink>
      </Reveal>
    </Section>
  );
}

export { InstagramStrip };
