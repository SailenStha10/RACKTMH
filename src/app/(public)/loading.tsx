import { Container } from "@/components/layout/Container"
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoading() {
  return (
    <div aria-hidden="true">
      <div className="flex min-h-[85vh] items-center bg-muted">
        <Container className="py-24 sm:py-32">
          <div className="flex max-w-2xl flex-col gap-6">
            <Skeleton className="h-12 w-12 rounded-full" />
            <Skeleton className="h-6 w-40" />
            <Skeleton className="h-14 w-full max-w-lg" />
            <Skeleton className="h-14 w-full max-w-md" />
            <Skeleton className="h-20 w-full max-w-xl" />
            <div className="flex gap-3">
              <Skeleton className="h-11 w-32" />
              <Skeleton className="h-11 w-44" />
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-16 sm:py-20">
        <Skeleton className="mb-4 h-4 w-24" />
        <Skeleton className="mb-3 h-9 w-72" />
        <Skeleton className="mb-10 h-5 w-full max-w-xl" />
        <div className="grid gap-6 sm:grid-cols-2">
          <Skeleton className="h-48 w-full rounded-xl" />
          <Skeleton className="h-48 w-full rounded-xl" />
        </div>
      </Container>

      <Container className="pb-16 sm:pb-20">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-28 w-full rounded-xl" />
          ))}
        </div>
      </Container>
    </div>
  )
}
