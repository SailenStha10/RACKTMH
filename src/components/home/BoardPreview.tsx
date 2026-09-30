import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { LeaderCards } from "@/components/home/LeaderCards";

function BoardPreview() {
  return (
    <Section title="Meet the team." className="overflow-hidden">
      <LeaderCards leaders={siteConfig.leaders} />
    </Section>
  );
}

export { BoardPreview };
