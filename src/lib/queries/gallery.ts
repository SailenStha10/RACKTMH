import "server-only"
import { unstable_cache } from "next/cache"

import { prisma } from "@/lib/prisma"
import type { GalleryAlbumCard } from "@/types/public"

const DEFAULT_COVER = "/placeholders/gallery-tile-1.svg"

async function fetchGalleryAlbums(limit: number): Promise<GalleryAlbumCard[]> {
  const albums = await prisma.gallery.findMany({
    where: { isPublished: true },
    orderBy: { createdAt: "desc" },
    take: limit,
    include: {
      _count: { select: { images: true } },
    },
  })

  return albums.map((album) => ({
    id: album.id,
    slug: album.slug,
    title: album.title,
    coverUrl: album.coverUrl ?? DEFAULT_COVER,
    imageCount: album._count.images,
  }))
}

const getGalleryAlbums = unstable_cache(fetchGalleryAlbums, ["gallery-albums"], {
  tags: ["gallery"],
  revalidate: 300,
})

export { getGalleryAlbums }
