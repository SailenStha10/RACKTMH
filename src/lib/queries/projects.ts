// Database is disabled for the frontend-only phase. Re-point this to Prisma
// (see git history before this change) when the backend work resumes.
import "server-only"

import type { ProjectCard } from "@/types/public"

export async function getFeaturedProjects(limit: number): Promise<ProjectCard[]> {
  void limit
  return []
}
