import Link from "next/link";

import { mockFeaturedProjects } from "@/data/mock";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";

function FeaturedProjects() {
  const projects = mockFeaturedProjects;
  if (projects.length === 0) return null;

  return (
    <Section
      id="projects"
      eyebrow="Selected projects"
      title="Service that reaches the classroom and beyond."
      action={
        <Link
          href="/projects"
          className="border-foreground text-foreground hover:bg-foreground hover:text-background focus-visible:outline-ring rounded-full border px-5 py-2.5 text-xs transition-colors focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          View all projects
        </Link>
      }
    >
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.id}
            delay={i * 0.15}
            y={40}
            className={projects.length === 1 ? "md:col-span-2" : undefined}
          >
            <ProjectCard project={project} wide={projects.length === 1} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

export { FeaturedProjects };
