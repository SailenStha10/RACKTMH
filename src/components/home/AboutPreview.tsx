import Image from "next/image";

import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Reveal } from "@/components/motion/Reveal";

const stripEnds = (text: string) =>
  text.replace(/^To /, "").replace(/\.$/, "").trim();
const lowerFirst = (text: string) =>
  text.charAt(0).toLowerCase() + text.slice(1);

/** About section: the club photo, a headline, and one sentence joining mission and vision. */
function AboutPreview() {
  const statement =
    isTodo(siteConfig.mission) || isTodo(siteConfig.vision)
      ? null
      : `Our mission is to ${lowerFirst(stripEnds(siteConfig.mission))}, guided by our vision of ${lowerFirst(stripEnds(siteConfig.vision))}.`;

  return (
    <section
      id="about"
      className="relative isolate flex min-h-[85svh] flex-col justify-between gap-16 overflow-hidden bg-[#0f0f0f] pt-28 pb-14 text-white sm:pb-20"
    >
      <Image
        src="/about/team.png"
        alt="Members of the Rotaract Club of Kathmandu Height at a club event"
        fill
        sizes="100vw"
        className="-z-20 object-cover"
      />
      {/* Light on top so the photo shows; heavier at the bottom for the text. */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-t from-[#0f0f0f]/90 via-[#0f0f0f]/25 to-[#0f0f0f]/35"
        aria-hidden="true"
      />

      <Container>
        <SectionHeading title="A youth-led club serving Kathmandu." />
      </Container>

      {statement && (
        <Container>
          <Reveal y={24}>
            <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-white sm:text-xl">
              {statement}
            </p>
          </Reveal>
        </Container>
      )}
    </section>
  );
}

export { AboutPreview };
