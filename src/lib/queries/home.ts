// Database is disabled for the frontend-only phase. Re-point this to Prisma
// (see git history before this change) when the backend work resumes.
import "server-only"

import type { ImpactStat } from "@/types/public"

// All zero: the Impact section hides itself until real numbers exist.
export async function getHomeImpactStats(): Promise<ImpactStat[]> {
  return [
    { label: "Projects", value: 0 },
    { label: "Beneficiaries", value: 0 },
    { label: "Volunteers", value: 0 },
    { label: "Volunteer Hours", value: 0 },
  ]
}
