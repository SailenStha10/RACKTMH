import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { mockFeaturedProjects } from "@/data/mock";
import { AVENUE_LABELS } from "@/lib/avenue";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

/** Our projects: one clean card per project, plus a slot for what comes next. */
function ProjectsShowcase() {
  const projects = mockFeaturedProjects;
  if (projects.length === 0) return null;

  return (
    <Section id="projects" title="Our projects.">
      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.id} y={40} delay={i * 0.1}>
            <Link
              href={`/projects/${project.slug}`}
              className="group focus-visible:outline-ring block h-full overflow-hidden rounded-2xl bg-white text-left ring-1 ring-black/10 transition-[translate,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_50px_-24px_rgba(166,18,79,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4"
            >
              <div className="relative aspect-3/2 overflow-hidden">
                <Image
                  src={project.coverUrl}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-black/60">
                    {AVENUE_LABELS[project.avenue]}
                    {project.dateLabel ? ` · ${project.dateLabel}` : ""}
                  </p>
                </div>
                <ArrowUpRight
                  className="text-brand-primary mt-1 size-6 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </div>
            </Link>
          </Reveal>
        ))}

        <Reveal y={40} delay={projects.length * 0.1}>
          <div className="ring-brand-primary/15 flex h-full min-h-64 flex-col items-center justify-center gap-2 rounded-2xl bg-[#fbeef3] p-8 text-center ring-1">
            <p className="text-brand-primary text-2xl font-semibold tracking-tight">
              More projects soon
            </p>
            <p className="text-sm text-black/60">Follow along on Instagram.</p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-10 flex justify-center">
        <PillLink href="/projects" tone="black">
          View all projects
        </PillLink>
      </Reveal>
    </Section>
  );
}

export { ProjectsShowcase };
