import "server-only"
import { unstable_cache } from "next/cache"

import { prisma } from "@/lib/prisma"
import type { RecognitionCard } from "@/types/public"

const DEFAULT_PHOTO = "/placeholders/portrait.svg"

async function fetchCurrentRecognition(): Promise<RecognitionCard | null> {
  const recognition = await prisma.recognition.findFirst({
    orderBy: [{ year: "desc" }, { month: "desc" }],
    include: {
      member: { select: { slug: true, fullName: true, photoUrl: true } },
    },
  })

  if (!recognition) return null

  return {
    id: recognition.id,
    memberSlug: recognition.member.slug,
    fullName: recognition.member.fullName,
    photoUrl: recognition.photoUrl ?? recognition.member.photoUrl ?? DEFAULT_PHOTO,
    month: recognition.month,
    year: recognition.year,
    achievement: recognition.achievement,
  }
}

const getCurrentRecognition = unstable_cache(
  fetchCurrentRecognition,
  ["current-recognition"],
  { tags: ["members"], revalidate: 300 }
)

export { getCurrentRecognition }
