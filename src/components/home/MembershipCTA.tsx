import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

function MembershipCTA() {
  return (
    <section className="from-brand-primary to-brand-secondary bg-gradient-to-br py-16 sm:py-20">
      <Container className="flex flex-col items-center gap-6 text-center">
        <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
          Ready to Make a Difference?
        </h2>
        <p className="max-w-xl text-base text-white/90 sm:text-lg">
          Join a community of changemakers building leadership skills, lifelong
          friendships and real impact in our community.
        </p>
        <Button
          size="lg"
          className="bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/90"
          render={<Link href="/join">Apply Now</Link>}
        />
      </Container>
    </section>
  );
}

export { MembershipCTA };
