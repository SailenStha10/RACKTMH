import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";
import { PillLink } from "@/components/ui/PillLink";

function MembershipCTA() {
  return (
    <section className="bg-brand-primary py-20 text-white sm:py-28">
      <Container className="flex flex-col items-center gap-8 text-center">
        <SplitTextReveal
          text={"Ready to make a\ndifference?"}
          className="text-[clamp(2.5rem,7vw,5rem)] leading-[1.05] font-semibold tracking-tight"
        />
        <Reveal delay={0.2} className="flex flex-col items-center gap-8">
          <p className="max-w-md text-base text-white/90 sm:text-lg">
            Join a community of young people building leadership skills,
            friendships and real impact in Kathmandu.
          </p>
          <PillLink href="/join" tone="black">
            Apply now
          </PillLink>
        </Reveal>
      </Container>
    </section>
  );
}

export { MembershipCTA };
