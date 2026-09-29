import Image from "next/image";
import Link from "next/link";
import { Megaphone } from "lucide-react";

import { mockAnnouncements } from "@/data/mock";
import { formatDate } from "@/lib/format";
import { Section } from "@/components/layout/Section";
import { Card, CardContent } from "@/components/ui/card";

function LatestAnnouncements() {
  if (mockAnnouncements.length === 0) return null;

  return (
    <Section
      eyebrow="Stay Informed"
      title="Latest Announcements"
      subtitle="News, updates and opportunities from around the club."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {mockAnnouncements.map((announcement) => (
          <Link
            key={announcement.id}
            href={`/announcements/${announcement.slug}`}
          >
            <Card className="h-full overflow-hidden py-0 transition-shadow hover:shadow-md">
              {announcement.imageUrl ? (
                <div className="relative aspect-21/9 w-full overflow-hidden">
                  <Image
                    src={announcement.imageUrl}
                    alt=""
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="bg-brand-secondary/10 flex aspect-21/9 w-full items-center justify-center">
                  <Megaphone
                    className="text-brand-secondary size-8"
                    aria-hidden="true"
                  />
                </div>
              )}
              <CardContent className="flex flex-col gap-2 py-4">
                <span className="text-muted-foreground text-xs">
                  {formatDate(announcement.publishedAt)}
                </span>
                <h3 className="font-heading text-foreground text-lg font-bold">
                  {announcement.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 text-sm">
                  {announcement.excerpt}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}

export { LatestAnnouncements };
