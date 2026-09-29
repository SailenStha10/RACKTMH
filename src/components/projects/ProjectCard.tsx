import Image from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";

import type { ProjectCard as ProjectCardData } from "@/types/public";
import { formatDate } from "@/lib/format";
import { AVENUE_LABELS } from "@/lib/avenue";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden py-0 transition-shadow group-hover:shadow-md">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={project.coverUrl}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="flex flex-col gap-2 py-4">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="h-auto w-fit px-2.5 py-1">
              {AVENUE_LABELS[project.avenue]}
            </Badge>
            {project.isInternational && (
              <Badge variant="outline" className="h-auto w-fit px-2.5 py-1">
                International collaboration
              </Badge>
            )}
          </div>
          <h3 className="font-heading text-foreground text-lg font-bold">
            {project.title}
          </h3>
          <span className="text-muted-foreground flex items-center gap-1.5 text-sm">
            <Calendar className="size-4 shrink-0" aria-hidden="true" />
            {project.startDate
              ? formatDate(project.startDate)
              : (project.dateLabel ?? "")}
          </span>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {project.summary}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}

export { ProjectCard };
