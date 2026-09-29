import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ProjectCard as ProjectCardData } from "@/types/public";
import { formatDate } from "@/lib/format";
import { AVENUE_LABELS } from "@/lib/avenue";
import { cn } from "@/lib/utils";

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-[11px]">
      <dt className="text-white/70">{label}:</dt>
      <dd className="text-right text-white/60">{value}</dd>
    </div>
  );
}

function ProjectCard({
  project,
  wide = false,
}: {
  project: ProjectCardData;
  wide?: boolean;
}) {
  const date = project.startDate
    ? formatDate(project.startDate)
    : (project.dateLabel ?? "");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group focus-visible:outline-ring relative block overflow-hidden rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <div className={cn("relative", wide ? "aspect-video" : "aspect-4/3")}>
        <Image
          src={project.coverUrl}
          alt=""
          fill
          sizes={wide ? "100vw" : "(min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="glass absolute top-4 right-4 w-[min(15rem,70%)] rounded-lg p-4 transition-colors group-hover:bg-black/50">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl leading-tight font-medium">
              {project.title}
            </h3>
            <ArrowUpRight
              className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </div>
          {date && <p className="mt-1 text-[11px] text-white/70">{date}</p>}
          <dl className="mt-6 flex flex-col gap-2">
            <MetaRow label="Avenue" value={AVENUE_LABELS[project.avenue]} />
            {project.isInternational && (
              <MetaRow label="Scope" value="International" />
            )}
          </dl>
        </div>
      </div>
      <p className="text-muted-foreground mt-4 max-w-xl text-xs leading-relaxed">
        {project.summary}
      </p>
    </Link>
  );
}

export { ProjectCard };
