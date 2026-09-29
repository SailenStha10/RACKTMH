import Link from "next/link";
import { Compass } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="border-border border-b">
        <Container className="flex h-16 items-center">
          <Link
            href="/"
            className="font-heading text-foreground text-lg font-bold"
          >
            {siteConfig.shortName}
          </Link>
        </Container>
      </header>

      <main className="flex flex-1 items-center justify-center py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="bg-brand-primary/10 text-brand-primary flex size-16 items-center justify-center rounded-full">
            <Compass className="size-8" aria-hidden="true" />
          </span>
          <div className="flex flex-col gap-2">
            <p className="font-heading text-brand-primary text-sm font-semibold tracking-wide uppercase">
              404
            </p>
            <h1 className="font-heading text-foreground text-3xl font-bold sm:text-4xl">
              Page not found
            </h1>
            <p className="text-muted-foreground max-w-md">
              The page you&apos;re looking for doesn&apos;t exist or may have
              been moved.
            </p>
          </div>
          <Button render={<Link href="/">Back to homepage</Link>} />
        </Container>
      </main>
    </div>
  );
}
