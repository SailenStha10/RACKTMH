import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";

function InstagramStrip() {
  return (
    <Section
      eyebrow="Follow along"
      title="Our latest moments live on Instagram."
      className="pt-0 sm:pt-0 lg:pt-0"
    >
      <Reveal className="flex justify-center">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:outline-ring rounded-full border px-5 py-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {siteConfig.social.instagramHandle}
        </a>
      </Reveal>
    </Section>
  );
}

export { InstagramStrip };
