import NextAuth, { CredentialsSignin } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { compare } from "bcryptjs"

import { prisma } from "@/lib/prisma"
import { loginSchema } from "@/lib/validations/auth"
import {
  clearAttempts,
  isRateLimited,
  recordAttempt,
} from "@/lib/auth-rate-limit"

class InvalidCredentialsError extends CredentialsSignin {
  code = "invalid-credentials"
}

class RateLimitedError extends CredentialsSignin {
  code = "rate-limited"
}

function getClientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown"
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: { strategy: "jwt" },
  pages: { signIn: "/admin" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(rawCredentials, request) {
        const parsed = loginSchema.safeParse(rawCredentials)
        if (!parsed.success) {
          throw new InvalidCredentialsError()
        }

        const { email, password } = parsed.data
        const rateLimitKey = `${getClientIp(request)}:${email}`

        if (isRateLimited(rateLimitKey)) {
          throw new RateLimitedError()
        }

        const user = await prisma.user.findUnique({ where: { email } })

        if (!user || !user.isActive) {
          recordAttempt(rateLimitKey)
          throw new InvalidCredentialsError()
        }

        const passwordValid = await compare(password, user.passwordHash)

        if (!passwordValid) {
          recordAttempt(rateLimitKey)
          throw new InvalidCredentialsError()
        }

        clearAttempts(rateLimitKey)

        await prisma.user.update({
          where: { id: user.id },
          data: { lastLoginAt: new Date() },
        })

        return {
          id: user.id,
          email: user.email,
          name: user.name,
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as string
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
      }
      return session
    },
  },
})
