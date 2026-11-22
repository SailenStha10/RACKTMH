// Database is disabled for the frontend-only phase. Re-point this to Prisma
// (see git history before this change) when the backend work resumes.
import "server-only"

// Empty: components fall back to src/config/site.ts.
export async function getSiteSettings(): Promise<Record<string, unknown>> {
  return {}
}
