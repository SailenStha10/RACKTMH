import Image from "next/image"
import Link from "next/link"

import { mockGalleryAlbums } from "@/data/mock"
import { Section } from "@/components/layout/Section"
import { Button } from "@/components/ui/button"

function GalleryPreview() {
  return (
    <Section
      eyebrow="Moments"
      title="Gallery"
      subtitle="Highlights from our recent events and service projects."
      className="bg-muted/40"
      action={
        <Button
          variant="outline"
          render={<Link href="/gallery">View gallery</Link>}
        />
      }
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {mockGalleryAlbums.map((album) => (
          <Link
            key={album.id}
            href={`/gallery/${album.slug}`}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={album.coverUrl}
              alt=""
              fill
              sizes="(min-width: 640px) 33vw, 50vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 via-black/0 to-black/0 p-3">
              <span className="text-sm font-medium text-white">
                {album.title}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  )
}

export { GalleryPreview }
