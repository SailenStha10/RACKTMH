import Image from "next/image";
import Link from "next/link";

import { mockGalleryAlbums } from "@/data/mock";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { HorizontalStrip } from "@/components/motion/HorizontalStrip";
import { Reveal } from "@/components/motion/Reveal";

function GalleryPreview() {
  if (mockGalleryAlbums.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 lg:py-40">
      <Container className="mb-14 sm:mb-20">
        <SectionHeading title="Moments from our projects and events." />
      </Container>

      <HorizontalStrip className="flex w-max gap-4 px-4 sm:px-6 lg:px-8">
        {mockGalleryAlbums.map((album) => (
          <Link
            key={album.id}
            href={`/gallery/${album.slug}`}
            className="group relative block aspect-3/4 w-56 shrink-0 overflow-hidden rounded-lg sm:w-64 lg:w-72"
          >
            <Image
              src={album.coverUrl}
              alt=""
              fill
              sizes="(min-width: 1024px) 288px, 256px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
            <span className="glass absolute inset-x-3 bottom-3 rounded-md px-3 py-2 text-xs">
              {album.title}
            </span>
          </Link>
        ))}
      </HorizontalStrip>

      <Reveal className="mt-12 flex justify-center">
        <Link
          href="/gallery"
          className="border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:outline-ring rounded-full border px-5 py-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          View gallery
        </Link>
      </Reveal>
    </section>
  );
}

export { GalleryPreview };
