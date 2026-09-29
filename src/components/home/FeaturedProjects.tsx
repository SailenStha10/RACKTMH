import Link from "next/link";
import { FolderX } from "lucide-react";

import { mockFeaturedProjects } from "@/data/mock";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Button } from "@/components/ui/button";

function FeaturedProjects() {
  const projects = mockFeaturedProjects;

  return (
    <Section
      eyebrow="Our Work"
      title="Featured Projects"
      subtitle="A look at the service projects our members are proud to have led."
      className="bg-muted/40"
      action={
        <Button
          variant="outline"
          render={<Link href="/projects">View all projects</Link>}
        />
      }
    >
      {projects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="border-border flex flex-col items-center gap-3 rounded-xl border border-dashed py-16 text-center">
          <FolderX
            className="text-muted-foreground size-10"
            aria-hidden="true"
          />
          <p className="text-muted-foreground text-sm">
            No featured projects yet. Check back soon.
          </p>
        </div>
      )}
    </Section>
  );
}

export { FeaturedProjects };
