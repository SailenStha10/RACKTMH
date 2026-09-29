import { Container } from "@/components/layout/Container";
import { Skeleton } from "@/components/ui/skeleton";

export default function HomeLoading() {
  return (
    <div aria-hidden="true" className="pt-32">
      <Container className="flex flex-col items-center gap-6">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-12 w-full max-w-md" />
        <Skeleton className="h-12 w-full max-w-sm" />
        <Skeleton className="mt-4 aspect-4/3 w-full max-w-2xl rounded-lg" />
      </Container>
    </div>
  );
}
