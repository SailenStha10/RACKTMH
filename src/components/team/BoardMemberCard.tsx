import Image from "next/image"

import type { BoardMemberCard as BoardMemberCardData } from "@/types/public"
import { cn } from "@/lib/utils"

function BoardMemberCard({
  member,
  featured = false,
}: {
  member: BoardMemberCardData
  featured?: boolean
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div
        className={cn(
          "relative overflow-hidden rounded-full ring-4 ring-brand-primary/10",
          featured ? "size-32 sm:size-36" : "size-20"
        )}
      >
        <Image
          src={member.photoUrl}
          alt=""
          fill
          sizes={featured ? "144px" : "80px"}
          className="object-cover"
        />
      </div>
      <div>
        <p
          className={cn(
            "font-heading font-bold text-foreground",
            featured ? "text-lg" : "text-sm"
          )}
        >
          {member.fullName}
        </p>
        <p
          className={cn(
            "text-brand-primary",
            featured ? "text-sm font-medium" : "text-xs"
          )}
        >
          {member.position}
        </p>
      </div>
    </div>
  )
}

export { BoardMemberCard }
