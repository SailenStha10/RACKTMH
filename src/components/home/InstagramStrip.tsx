import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

function InstagramStrip() {
  return (
    <Section title="See us on Instagram.">
      <Reveal className="flex justify-center">
        <PillLink href={siteConfig.social.instagram} tone="pink" external>
          {siteConfig.social.instagramHandle}
        </PillLink>
      </Reveal>
    </Section>
  );
}

export { InstagramStrip };
