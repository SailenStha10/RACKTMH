import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";

// Decorative drifting thumbnails; positions are percentages of the cluster box.
const CIRCLES = [
  {
    src: "/placeholders/gallery-tile-1.svg",
    top: "6%",
    left: "8%",
    size: 44,
    dx: 12,
    dy: -16,
  },
  {
    src: "/placeholders/gallery-tile-2.svg",
    top: "0%",
    left: "58%",
    size: 36,
    dx: -10,
    dy: 14,
  },
  {
    src: "/placeholders/gallery-tile-3.svg",
    top: "30%",
    left: "82%",
    size: 40,
    dx: 8,
    dy: 12,
  },
  {
    src: "/placeholders/gallery-tile-4.svg",
    top: "38%",
    left: "34%",
    size: 48,
    dx: -14,
    dy: -10,
  },
  {
    src: "/placeholders/gallery-tile-5.svg",
    top: "66%",
    left: "70%",
    size: 38,
    dx: 10,
    dy: -12,
  },
  {
    src: "/placeholders/gallery-tile-6.svg",
    top: "72%",
    left: "12%",
    size: 42,
    dx: -8,
    dy: 16,
  },
];

function AboutPreview() {
  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Reveal y={8}>
              <span className="text-label text-foreground">[ABOUT]</span>
            </Reveal>
            <SplitTextReveal
              text={
                "We are a youth-led club serving Kathmandu through service, leadership and fellowship."
              }
              className="text-headline text-foreground max-w-[26ch]"
            />
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className="border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:outline-ring inline-block rounded-full border px-5 py-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Learn more
              </Link>
            </Reveal>
          </div>

          <div
            className="relative hidden h-72 sm:block lg:h-96"
            aria-hidden="true"
          >
            {CIRCLES.map((c, i) => (
              <div
                key={c.src}
                data-drift
                className="absolute overflow-hidden rounded-full"
                style={
                  {
                    top: c.top,
                    left: c.left,
                    width: c.size,
                    height: c.size,
                    "--dx": `${c.dx}px`,
                    "--dy": `${c.dy}px`,
                    animation: `drift ${7 + i}s ease-in-out ${i * -1.3}s infinite`,
                  } as React.CSSProperties
                }
              >
                <Image
                  src={c.src}
                  alt=""
                  fill
                  sizes="48px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid gap-8 sm:mt-24 sm:grid-cols-2 lg:ml-[25%] lg:max-w-2xl">
          <Reveal delay={0.1}>
            <p className="text-muted-foreground max-w-xs text-xs leading-relaxed">
              <span className="text-foreground/40">Mission: </span>
              {siteConfig.mission}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-xs text-xs leading-relaxed">
              <span className="text-foreground/40">Vision: </span>
              {siteConfig.vision}
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export { AboutPreview };
