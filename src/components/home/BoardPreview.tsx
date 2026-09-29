import Link from "next/link"

import { mockBoardMembers } from "@/data/mock"
import { Section } from "@/components/layout/Section"
import { BoardMemberCard } from "@/components/team/BoardMemberCard"
import { Button } from "@/components/ui/button"

const HIGHLIGHTED_POSITIONS = ["President", "Secretary", "Treasurer"]

function BoardPreview() {
  const highlighted = mockBoardMembers.filter((m) =>
    HIGHLIGHTED_POSITIONS.includes(m.position)
  )
  const others = mockBoardMembers.filter(
    (m) => !HIGHLIGHTED_POSITIONS.includes(m.position)
  )

  return (
    <Section
      eyebrow="Our Team"
      title="Meet the Board"
      subtitle="The leaders guiding our club's service, growth and fellowship this rotary year."
      action={
        <Button
          variant="outline"
          render={<Link href="/team">View full team</Link>}
        />
      }
    >
      <div className="flex flex-col gap-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {highlighted.map((member) => (
            <BoardMemberCard key={member.id} member={member} featured />
          ))}
        </div>
        {others.length > 0 && (
          <div className="grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-3 lg:grid-cols-4">
            {others.map((member) => (
              <BoardMemberCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>
    </Section>
  )
}

export { BoardPreview }
