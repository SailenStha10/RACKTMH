import Image from "next/image";

import type { BoardMemberCard as BoardMemberCardData } from "@/types/public";

function BoardMemberCard({ member }: { member: BoardMemberCardData }) {
  return (
    <figure className="w-56 shrink-0 sm:w-64 lg:w-72">
      <div className="bg-muted relative aspect-3/4 overflow-hidden rounded-lg">
        <Image
          src={member.photoUrl}
          alt=""
          fill
          sizes="(min-width: 1024px) 288px, 256px"
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
        />
      </div>
      <figcaption className="mt-3">
        <p className="text-foreground text-sm font-medium">{member.fullName}</p>
        <p className="text-muted-foreground text-xs">{member.position}</p>
      </figcaption>
    </figure>
  );
}

export { BoardMemberCard };
