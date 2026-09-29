import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { ProjectCard as ProjectCardData } from "@/types/public";
import { formatDate } from "@/lib/format";
import { AVENUE_LABELS } from "@/lib/avenue";

/** Solid black feature card: image on one side, details on the other. */
function ProjectCard({ project }: { project: ProjectCardData }) {
  const date = project.startDate
    ? formatDate(project.startDate)
    : (project.dateLabel ?? "");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group focus-visible:outline-ring grid overflow-hidden rounded-lg bg-[#0f0f0f] text-white focus-visible:outline-2 focus-visible:outline-offset-4 md:grid-cols-2"
    >
      <div className="relative aspect-video overflow-hidden md:aspect-auto md:min-h-96">
        <Image
          src={project.coverUrl}
          alt=""
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>

      <div className="flex flex-col justify-center gap-5 p-8 sm:p-10">
        <div className="flex flex-wrap gap-2">
          <span className="bg-brand-primary rounded-full px-3 py-1 text-xs font-medium">
            {AVENUE_LABELS[project.avenue]}
          </span>
          {project.isInternational && (
            <span className="bg-brand-accent rounded-full px-3 py-1 text-xs font-medium text-[#0f0f0f]">
              International collaboration
            </span>
          )}
        </div>

        <div>
          <h3 className="flex items-start justify-between gap-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
            <ArrowUpRight
              className="text-brand-primary mt-2 size-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </h3>
          {date && <p className="mt-2 text-sm text-white/70">{date}</p>}
        </div>

        <p className="text-base leading-relaxed text-white/85">
          {project.summary}
        </p>

        {project.partners && project.partners.length > 0 && (
          <div>
            <p className="text-label text-brand-accent mb-3 font-medium tracking-wider">
              SUPPORTED BY
            </p>
            <ul className="flex flex-wrap gap-2">
              {project.partners.map((partner) => (
                <li
                  key={partner}
                  className="rounded-full border border-white/25 px-3 py-1 text-xs"
                >
                  {partner}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Link>
  );
}

export { ProjectCard };
