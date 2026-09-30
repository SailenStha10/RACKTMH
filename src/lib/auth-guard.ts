import "server-only"
import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import type { UserModel } from "@/generated/prisma/models"

async function getActiveAdmin(): Promise<UserModel | null> {
  const session = await auth()
  if (!session?.user?.id) return null

  const user = await prisma.user.findUnique({ where: { id: session.user.id } })
  if (!user || !user.isActive) return null

  return user
}

/**
 * For Server Components / admin pages. Redirects to /admin (the sign-in
 * gateway) when there is no valid, active admin session.
 */
async function requireAdmin(): Promise<UserModel> {
  const user = await getActiveAdmin()
  if (!user) {
    redirect("/admin")
  }
  return user
}

type AdminActionResult =
  | { ok: true; user: UserModel }
  | { ok: false; error: string }

/**
 * For Server Actions and Route Handlers, where a redirect can't be
 * meaningfully returned to the caller. Returns a result object instead of
 * throwing/redirecting.
 */
async function requireAdminAction(): Promise<AdminActionResult> {
  const user = await getActiveAdmin()
  if (!user) {
    return { ok: false, error: "Unauthorized" }
  }
  return { ok: true, user }
}

export { requireAdmin, requireAdminAction }
