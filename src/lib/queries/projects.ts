import "server-only"
import { unstable_cache } from "next/cache"

import { prisma } from "@/lib/prisma"
import type { ProjectCard } from "@/types/public"

const DEFAULT_COVER = "/placeholders/project-cover.svg"

async function fetchFeaturedProjects(limit: number): Promise<ProjectCard[]> {
  const projects = await prisma.project.findMany({
    where: { isFeatured: true, status: { not: "CANCELLED" } },
    orderBy: { startDate: "desc" },
    take: limit,
    include: {
      partners: { include: { partner: { select: { name: true } } } },
    },
  })

  return projects.map((project) => ({
    id: project.id,
    slug: project.slug,
    title: project.title,
    coverUrl: project.coverUrl ?? DEFAULT_COVER,
    avenue: project.avenue,
    startDate: project.startDate,
    summary: project.summary,
    partners: project.partners.map((p) => p.partner.name),
  }))
}

const getFeaturedProjects = unstable_cache(
  fetchFeaturedProjects,
  ["featured-projects"],
  { tags: ["projects"], revalidate: 300 }
)

export { getFeaturedProjects }
