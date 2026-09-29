import Image from "next/image";
import Link from "next/link";

import { mockAnnouncements } from "@/data/mock";
import { formatDate } from "@/lib/format";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";

function LatestAnnouncements() {
  if (mockAnnouncements.length === 0) return null;

  return (
    <Section eyebrow="Announcements" title="News and updates from the club.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mockAnnouncements.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.1} y={40}>
            <Link
              href={`/announcements/${a.slug}`}
              className="group border-foreground focus-visible:outline-ring relative block min-h-56 border-t border-l p-5 pr-16 focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              {a.imageUrl && (
                <div
                  className="absolute top-0 right-0 bottom-0 w-10 overflow-hidden transition-[width] duration-500 ease-out group-hover:w-14"
                  style={{
                    clipPath: "polygon(0 12%, 100% 0, 100% 100%, 0 100%)",
                  }}
                >
                  <Image
                    src={a.imageUrl}
                    alt=""
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-label text-muted-foreground mb-3">
                {formatDate(a.publishedAt)}
              </p>
              <h3 className="text-title text-foreground">{a.title}</h3>
              <p className="text-muted-foreground mt-4 line-clamp-4 text-xs">
                {a.excerpt}
              </p>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { LatestAnnouncements };
