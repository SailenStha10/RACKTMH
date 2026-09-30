import "server-only"
import { unstable_cache } from "next/cache"

import { prisma } from "@/lib/prisma"
import type { BoardMemberCard } from "@/types/public"

const DEFAULT_PHOTO = "/placeholders/portrait.svg"

async function fetchBoardMembers(rotaryYear: string): Promise<BoardMemberCard[]> {
  const members = await prisma.member.findMany({
    where: { isBoard: true, rotaryYear, status: "ACTIVE" },
    orderBy: { displayOrder: "asc" },
    select: {
      id: true,
      slug: true,
      fullName: true,
      position: true,
      photoUrl: true,
    },
  })

  return members.map((member) => ({
    id: member.id,
    slug: member.slug,
    fullName: member.fullName,
    position: member.position ?? "",
    photoUrl: member.photoUrl ?? DEFAULT_PHOTO,
  }))
}

const getBoardMembers = unstable_cache(fetchBoardMembers, ["board-members"], {
  tags: ["members"],
  revalidate: 300,
})

export { getBoardMembers }
