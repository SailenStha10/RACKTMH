import Image from "next/image";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AboutStatement } from "@/components/home/AboutStatement";

const stripEnds = (text: string) =>
  text.replace(/^To /, "").replace(/\.$/, "").trim();
const lowerFirst = (text: string) =>
  text.charAt(0).toLowerCase() + text.slice(1);

/**
 * About section. The headline has its own band above the photo so it never
 * covers faces; the mission and vision sentence rises from the bottom edge.
 */
function AboutPreview() {
  const statement =
    isTodo(siteConfig.mission) || isTodo(siteConfig.vision)
      ? null
      : `Our mission is to ${lowerFirst(stripEnds(siteConfig.mission))}, guided by our vision of ${lowerFirst(stripEnds(siteConfig.vision))}.`;

  return (
    <section id="about" className="bg-white text-[#0f0f0f]">
      <Container className="relative z-10 pt-32 sm:pt-40">
        <SectionHeading title="A youth-led club serving Kathmandu." />
      </Container>

      <div className="relative isolate -mt-8 flex min-h-[90svh] items-end overflow-hidden sm:-mt-14">
        <Image
          src="/about/team.png"
          alt="Members of the Rotaract Club of Kathmandu Height at a club event"
          fill
          sizes="100vw"
          className="-z-20 object-cover"
        />
        {/* Soft white fade at the top so the headline reads where it overlaps the photo. */}
        <div
          className="absolute inset-x-0 top-0 -z-10 h-40 bg-linear-to-b from-white/85 to-transparent"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 -z-10 bg-linear-to-t from-[#0f0f0f]/70 via-transparent to-transparent"
          aria-hidden="true"
        />

        {statement && (
          <Container className="w-full pt-40">
            <AboutStatement>{statement}</AboutStatement>
          </Container>
        )}
      </div>
    </section>
  );
}

export { AboutPreview };
