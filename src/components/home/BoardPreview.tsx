import Link from "next/link";

import { mockBoardMembers } from "@/data/mock";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { BoardMemberCard } from "@/components/team/BoardMemberCard";
import { HorizontalStrip } from "@/components/motion/HorizontalStrip";
import { Reveal } from "@/components/motion/Reveal";

function BoardPreview() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container className="mb-14 sm:mb-20">
        <SectionHeading
          eyebrow="Our team"
          title="The people guiding this rotary year."
        />
      </Container>

      <HorizontalStrip className="flex w-max gap-4 px-4 sm:px-6 lg:px-8">
        {mockBoardMembers.map((member) => (
          <BoardMemberCard key={member.id} member={member} />
        ))}
      </HorizontalStrip>

      <Reveal className="mt-12 flex justify-center">
        <Link
          href="/team"
          className="border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:outline-ring rounded-full border px-5 py-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Meet the full team
        </Link>
      </Reveal>
    </section>
  );
}

export { BoardPreview };
