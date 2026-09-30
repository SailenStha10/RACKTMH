import { requireAdmin } from "@/lib/auth-guard"
import { UserMenu } from "@/components/admin/UserMenu"

// Minimal placeholder. The real admin layout, sidebar and dashboard
// widgets are built in T-401.
export default async function AdminDashboardPage() {
  const user = await requireAdmin()

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b border-border px-6 py-3">
        <span className="font-heading font-bold">Admin</span>
        <UserMenu user={{ name: user.name, email: user.email }} />
      </header>
      <main className="flex flex-1 items-center justify-center p-8">
        <p className="text-muted-foreground">
          Signed in as {user.email}. The full dashboard is built in a later
          ticket.
        </p>
      </main>
    </div>
  )
}
