import { redirect } from "next/navigation"

import { auth } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import { LoginForm } from "@/components/auth/LoginForm"

export const metadata = {
  robots: { index: false, follow: false },
}

export default async function AdminGatewayPage({
  searchParams,
}: {
  searchParams: Promise<{ callbackUrl?: string }>
}) {
  const session = await auth()

  if (session?.user?.id) {
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    })
    if (user?.isActive) {
      redirect("/admin/dashboard")
    }
  }

  const { callbackUrl } = await searchParams
  return <LoginForm callbackUrl={callbackUrl} />
}
