import { NextResponse } from "next/server"

import { auth } from "@/lib/auth"

/**
 * First line of defense only: this checks for a valid, signed JWT session
 * at the edge. It cannot see database state (e.g. a deactivated account),
 * so requireAdmin()/requireAdminAction() in src/lib/auth-guard.ts remain the
 * mandatory authorization check on every admin page, server action and
 * route handler.
 *
 * There is no separate public /login route by design: /admin itself renders
 * the sign-in form when there's no session, and the dashboard when there is.
 * Deeper admin paths redirect back to bare /admin (not the subpath) so an
 * unauthenticated visitor never sees anything other than the sign-in form.
 */
export default auth((req) => {
  const { pathname } = req.nextUrl
  const isAdminRoute = pathname.startsWith("/admin")
  const isAdminRoot = pathname === "/admin"

  if (isAdminRoute && !isAdminRoot && !req.auth) {
    const loginUrl = new URL("/admin", req.nextUrl.origin)
    loginUrl.searchParams.set("callbackUrl", pathname)
    return NextResponse.redirect(loginUrl)
  }
})

export const config = {
  matcher: ["/admin/:path*"],
}
