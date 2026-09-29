import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { ProjectsCarousel } from "@/components/projects/ProjectsCarousel";

/** Our projects: headline followed by the centred ring carousel (adapted from Viscose, MIT). */
function ProjectsShowcase() {
  return (
    <section id="projects" className="bg-white py-16 sm:py-20 lg:py-24">
      <Container className="mb-8 sm:mb-12">
        <SectionHeading title="Our projects." />
      </Container>
      <ProjectsCarousel />
    </section>
  );
}

export { ProjectsShowcase };
