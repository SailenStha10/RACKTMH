import { NextResponse } from "next/server"

import { auth } from "@/lib/auth"

/**
 * First line of defense only: this checks for a valid, signed JWT session
 * at the edge. It cannot see database state (e.g. a deactivated account),
 * so requireAdmin()/requireAdminAction() in src/lib/auth-guard.ts remain the
 * mandatory authorization check on every admin page, server action and
 * route handler.
 */
export default auth((req) => {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin")

  if (isAdminRoute && !req.auth) {
    const loginUrl = new URL("/login", req.nextUrl.origin)
    loginUrl.searchParams.set("callbackUrl", req.nextUrl.pathname)
    return NextResponse.redirect(loginUrl)
  }
})

export const config = {
  matcher: ["/admin/:path*"],
}
