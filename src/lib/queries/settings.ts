import "server-only"
import { unstable_cache } from "next/cache"

import { prisma } from "@/lib/prisma"

async function fetchSiteSettings(): Promise<Record<string, unknown>> {
  const rows = await prisma.siteSetting.findMany()
  return Object.fromEntries(rows.map((row) => [row.key, row.value]))
}

const getSiteSettings = unstable_cache(fetchSiteSettings, ["site-settings"], {
  tags: ["settings"],
  revalidate: 300,
})

export { getSiteSettings }
