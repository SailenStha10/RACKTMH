import Image from "next/image";
import Link from "next/link";
import { HeartHandshake } from "lucide-react";

import { siteConfig } from "@/config/site";
import { getCurrentRotaryYear } from "@/lib/rotary-year";
import { isTodo } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

function Hero() {
  const rotaryYear = getCurrentRotaryYear();
  const hasTheme = !isTodo(siteConfig.theme);

  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
      <Image
        src="/placeholders/hero.svg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="from-brand-secondary/95 via-brand-primary/85 to-brand-primary/70 absolute inset-0 bg-gradient-to-br" />
      <div className="absolute inset-0 bg-black/20" />

      <Container className="relative z-10 py-24 sm:py-32">
        <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 flex max-w-2xl flex-col items-start gap-6 motion-safe:duration-700 motion-safe:ease-out">
          <div className="flex items-center gap-3">
            <span className="flex size-12 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30">
              <HeartHandshake className="size-6" aria-hidden="true" />
            </span>
            <span className="font-heading text-xl font-bold text-white">
              {siteConfig.clubName}
            </span>
          </div>

          <Badge
            variant="outline"
            className="h-auto border-white/40 px-3 py-1 text-sm font-medium text-white"
          >
            Rotary Year {rotaryYear}
          </Badge>

          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {hasTheme ? siteConfig.theme : siteConfig.tagline}
          </h1>

          <p className="max-w-xl text-lg text-white/90 sm:text-xl">
            {siteConfig.intro}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="bg-brand-accent text-brand-accent-foreground hover:bg-brand-accent/90"
              render={<Link href="/join">Join Us</Link>}
            />
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 bg-white/5 text-white hover:bg-white/15"
              render={<a href="#impact">Explore Our Impact</a>}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

export { Hero };
