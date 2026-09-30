import "server-only"
import { unstable_cache } from "next/cache"

import { prisma } from "@/lib/prisma"
import type { AnnouncementCard } from "@/types/public"

const EXCERPT_LENGTH = 160

function toExcerpt(content: string): string {
  const plain = content.replace(/\s+/g, " ").trim()
  if (plain.length <= EXCERPT_LENGTH) return plain
  return `${plain.slice(0, EXCERPT_LENGTH).trimEnd()}...`
}

async function fetchLatestAnnouncements(limit: number): Promise<AnnouncementCard[]> {
  const now = new Date()

  const announcements = await prisma.announcement.findMany({
    where: {
      status: "PUBLISHED",
      OR: [{ expiresAt: null }, { expiresAt: { gt: now } }],
    },
    orderBy: { publishedAt: "desc" },
    take: limit,
  })

  return announcements.map((announcement) => ({
    id: announcement.id,
    slug: announcement.slug,
    title: announcement.title,
    excerpt: toExcerpt(announcement.content),
    imageUrl: announcement.imageUrl ?? undefined,
    publishedAt: announcement.publishedAt ?? announcement.createdAt,
  }))
}

const getLatestAnnouncements = unstable_cache(
  fetchLatestAnnouncements,
  ["latest-announcements"],
  { tags: ["announcements"], revalidate: 60 }
)

export { getLatestAnnouncements }
