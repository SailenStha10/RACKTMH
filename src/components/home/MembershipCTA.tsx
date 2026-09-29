import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";

function MembershipCTA() {
  return (
    <section className="py-28 sm:py-40">
      <Container className="flex flex-col items-center gap-10 text-center">
        <SplitTextReveal
          text={"Ready to make a\ndifference?"}
          className="text-display text-foreground"
        />
        <Reveal delay={0.2} className="flex flex-col items-center gap-8">
          <p className="text-muted-foreground max-w-sm text-sm">
            Join a community of young people building leadership skills,
            friendships and real impact in Kathmandu.
          </p>
          <Link
            href="/join"
            className="bg-foreground text-background hover:bg-brand-primary focus-visible:outline-ring rounded-full px-6 py-3 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Apply now
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

export { MembershipCTA };
