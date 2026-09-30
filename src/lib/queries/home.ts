import "server-only"
import { unstable_cache } from "next/cache"

import { prisma } from "@/lib/prisma"
import type { ImpactStat } from "@/types/public"

async function fetchHomeImpactStats(): Promise<ImpactStat[]> {
  const [projectCount, beneficiariesSum, volunteerHoursSum, projectVolunteerHoursSum, distinctVolunteers, externalVolunteersSum] =
    await Promise.all([
      prisma.project.count({ where: { status: { not: "CANCELLED" } } }),
      prisma.project.aggregate({ _sum: { beneficiaries: true } }),
      prisma.project.aggregate({ _sum: { volunteerHours: true } }),
      prisma.projectVolunteer.aggregate({ _sum: { hours: true } }),
      prisma.projectVolunteer.findMany({
        select: { memberId: true },
        distinct: ["memberId"],
      }),
      prisma.project.aggregate({ _sum: { externalVolunteers: true } }),
    ])

  const volunteers = distinctVolunteers.length + (externalVolunteersSum._sum.externalVolunteers ?? 0)
  const volunteerHours =
    (volunteerHoursSum._sum.volunteerHours ?? 0) +
    (projectVolunteerHoursSum._sum.hours ?? 0)

  return [
    { label: "Projects", value: projectCount },
    { label: "Beneficiaries", value: beneficiariesSum._sum.beneficiaries ?? 0 },
    { label: "Volunteers", value: volunteers },
    { label: "Volunteer Hours", value: volunteerHours },
  ]
}

const getHomeImpactStats = unstable_cache(
  fetchHomeImpactStats,
  ["home-impact-stats"],
  { tags: ["home", "projects"], revalidate: 300 }
)

export { getHomeImpactStats }
