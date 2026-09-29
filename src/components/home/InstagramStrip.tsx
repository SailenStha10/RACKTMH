import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { InstagramIcon } from "@/components/layout/SocialIcons";
import { Button } from "@/components/ui/button";

function InstagramStrip() {
  return (
    <Section
      eyebrow="Follow Along"
      title="Find Us on Instagram"
      subtitle={`Our latest projects, events and club moments are shared at ${siteConfig.social.instagramHandle}.`}
      align="center"
    >
      <div className="flex justify-center">
        <Button
          size="lg"
          render={
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon className="size-4" aria-hidden="true" />
              {siteConfig.social.instagramHandle}
            </a>
          }
        />
      </div>
    </Section>
  );
}

export { InstagramStrip };
