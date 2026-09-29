import { mockFeaturedProjects } from "@/data/mock";
import { Section } from "@/components/layout/Section";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/motion/Reveal";
import { PillLink } from "@/components/ui/PillLink";

function FeaturedProjects() {
  const projects = mockFeaturedProjects;
  if (projects.length === 0) return null;

  return (
    <Section
      id="projects"
      eyebrow="Featured project"
      title="Service that reaches the classroom and beyond."
    >
      <div className="flex flex-col gap-4">
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.1} y={40}>
            <ProjectCard project={project} />
          </Reveal>
        ))}

        <Reveal y={40}>
          <div className="bg-brand-primary rounded-lg p-8 text-center text-white sm:p-12">
            <p className="text-label font-medium tracking-wider text-[#0f0f0f]">
              DISTRICT EVENT
            </p>
            <h3 className="mx-auto mt-4 max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl">
              Co-host of Rotaract District 3292 Presidents&apos; Night 2026
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-base text-white/90">
              Held in Pokhara for club presidents, district council members and
              the training team, with our club announced as a co-host.
            </p>
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

export { FeaturedProjects };
