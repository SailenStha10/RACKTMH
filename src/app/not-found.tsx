import Link from "next/link"
import { Compass } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Container } from "@/components/layout/Container"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-b border-border">
        <Container className="flex h-16 items-center">
          <Link href="/" className="font-heading text-lg font-bold text-foreground">
            {siteConfig.shortName}
          </Link>
        </Container>
      </header>

      <main className="flex flex-1 items-center justify-center py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="flex size-16 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
            <Compass className="size-8" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-heading text-sm font-semibold tracking-wide text-brand-primary uppercase">
              404
            </p>
            <h1 className="font-heading text-3xl font-bold text-foreground sm:text-4xl">
              Page not found
            </h1>
            <p className="max-w-md text-muted-foreground">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
          </div>
          <Button render={<Link href="/">Back to homepage</Link>} />
        </Container>
      </main>
    </div>
  )
}
