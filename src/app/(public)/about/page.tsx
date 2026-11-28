import { siteConfig } from "@/config/site";
import { isTodo } from "@/lib/content";
import { mockTimeline } from "@/data/mock";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";

const OBJECTIVES = [
  "Develop professional and leadership skills",
  "Emphasize respect for the rights of others based on recognition of the worth of each individual",
  "Recognize the dignity and value of all useful occupations as opportunities to serve",
  "Recognize, practice, and promote ethical standards as leadership qualities and vocational responsibilities",
  "Develop knowledge and understanding of the needs, problems, and opportunities in the community and worldwide",
  "Provide opportunities for personal and group activities to serve the community and promote international understanding and goodwill toward all people",
];

const VALUES = [
  { label: "Service", description: "We act with compassion and commitment to serve our communities." },
  { label: "Fellowship", description: "We build lasting friendships through shared experiences." },
  { label: "Leadership", description: "We develop ourselves and others to lead with integrity." },
  { label: "Diversity", description: "We embrace different perspectives and backgrounds." },
  { label: "Integrity", description: "We uphold ethical standards in all we do." },
];

function Timeline() {
  return (
    <section id="timeline" className="bg-white text-[#0f0f0f] py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-10 flex flex-col items-center gap-6 text-center">
          <SplitTextReveal
            text="Our Journey"
            className="max-w-[16ch] text-[clamp(2.5rem,6.5vw,5rem)] leading-none font-semibold tracking-[-0.04em] sm:max-w-[18ch]"
          />
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div
            className="absolute left-1/2 top-0 bottom-0 z-0 h-full w-px bg-[#e6e6e6]"
            aria-hidden="true"
            style={{ transform: "translateX(-50%)" }}
          />
          <div className="relative space-y-10">
            {mockTimeline.map((item, index) => (
              <Reveal key={index} delay={index * 0.1} y={20} as="div">
                <div className="relative flex gap-6">
                  <div
                    className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white"
                    style={{ transform: "translateX(-50%)", left: "50%" }}
                    aria-hidden="true"
                  >
                    <span className="text-xs font-medium">{index + 1}</span>
                  </div>
                  <div className="w-1/2 pr-8 text-right sm:pr-12">
                    <p className="text-label text-brand-primary">{item.label}</p>
                    <h3 className="mt-1 text-title font-medium text-[#0f0f0f]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#6b6b6b]">{item.description}</p>
                  </div>
                  <div className="w-1/2" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Affiliation() {
  return (
    <Section title="Rotary & Rotaract Affiliation" tone="light" align="center">
      <Container className="max-w-3xl">
        <Reveal y={20} className="space-y-6 text-center">
          <p className="text-lg leading-relaxed text-[#0f0f0f]/80">
            {siteConfig.clubName} is a member of <strong>Rotary International District 3292</strong>, covering Nepal and Bhutan.
            We operate under the guidance of Rotary International and follow the Rotaract Constitution and Bylaws.
          </p>
          <p className="text-lg leading-relaxed text-[#0f0f0f]/80">
            Our club ID is <strong>{siteConfig.clubId}</strong> and we are currently in the <strong>{siteConfig.rotaryYear}</strong>
            Rotary year (July 1 – June 30).
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

function SponsorClub() {
  const sponsorVerified = siteConfig.sponsorClubVerified;

  return (
    <Section title="Our Sponsor Rotary Club" tone="blush" align="center">
      <Container className="max-w-3xl">
        <Reveal y={20} className="space-y-6 text-center">
          <p className="text-lg leading-relaxed text-[#0f0f0f]/80">
            We are proudly sponsored by <strong>{siteConfig.sponsorClub}</strong>.
            {sponsorVerified ? (
              <>
                <br />
                The sponsor club was chartered on <strong>3 August 2020</strong> in Rotary International District 3292
                and provides mentorship, guidance, and collaboration opportunities for our members.
              </>
            ) : (
              <>
                <br />
                <span className="text-brand-primary font-medium">
                  (Sponsor club relationship pending verification — details will be updated once confirmed.)
                </span>
              </>
            )}
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}

function CharterInfo() {
  return (
    <Section title="Charter & District" tone="light" align="center">
      <Container className="max-w-3xl">
        <div className="grid gap-8 sm:grid-cols-2">
          <Reveal y={20} className="space-y-3 text-center p-6 rounded-xl bg-[#f7f7f7]">
            <p className="text-label text-brand-primary">Charter Date</p>
            <p className="text-headline font-medium text-[#0f0f0f]">{siteConfig.charterDate}</p>
          </Reveal>
          <Reveal y={20} delay={0.1} className="space-y-3 text-center p-6 rounded-xl bg-[#f7f7f7]">
            <p className="text-label text-brand-primary">Rotary Year</p>
            <p className="text-headline font-medium text-[#0f0f0f]">{siteConfig.rotaryYear}</p>
          </Reveal>
          <Reveal y={20} delay={0.2} className="space-y-3 text-center p-6 rounded-xl bg-[#f7f7f7]">
            <p className="text-label text-brand-primary">District</p>
            <p className="text-headline font-medium text-[#0f0f0f]">{siteConfig.district}</p>
          </Reveal>
          <Reveal y={20} delay={0.3} className="space-y-3 text-center p-6 rounded-xl bg-[#f7f7f7]">
            <p className="text-label text-brand-primary">Region</p>
            <p className="text-headline font-medium text-[#0f0f0f]">{siteConfig.districtRegion}</p>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}

export default async function AboutPage() {
  return (
    <>
      <Section
        title={siteConfig.clubName}
        align="center"
        className="relative isolate min-h-[70vh] flex items-center justify-center overflow-hidden bg-white"
      >
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-white/50 to-transparent" aria-hidden="true" />
        <Container className="relative z-10 text-center space-y-8 max-w-4xl">
          <Reveal y={20}>
            <p className="text-label text-brand-primary">Rotaract Club of Kathmandu Height</p>
          </Reveal>
          <Reveal y={20} delay={0.1}>
            <SplitTextReveal
              text="Youth-led service, leadership & fellowship in Kathmandu, Nepal"
              className="text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] font-medium tracking-[-0.02em] text-[#0f0f0f]"
            />
          </Reveal>
          <Reveal y={20} delay={0.2} className="max-w-2xl mx-auto">
            <p className="text-lg leading-relaxed text-[#0f0f0f]/80">
              {siteConfig.intro}
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section title="Who We Are" tone="light" align="left">
        <Container className="max-w-4xl">
          <Reveal y={20} className="space-y-6 text-lg leading-relaxed text-[#0f0f0f]/80">
            <p>
              {siteConfig.clubName} is a community-based Rotaract club in {siteConfig.address},
              bringing together young adults aged 18 and above who share a passion for service, leadership development, and fellowship.
              As part of the global Rotaract network of Rotary International, we empower young people to take action in their communities,
              develop professional skills, and build international understanding.
            </p>
            <p>
              Since our charter on {siteConfig.charterDate}, we have been actively engaged in community service projects,
              leadership training, and fellowship activities. Our members come from diverse academic and professional backgrounds,
              united by the Rotaract motto: <strong>Service Above Self</strong>.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section title="Vision & Mission" tone="blush" align="center">
        <Container className="max-w-4xl">
          <div className="grid gap-8 sm:grid-cols-2">
            <Reveal y={20} className="space-y-4 p-6 rounded-xl bg-white">
              <p className="text-label text-brand-primary">Our Vision</p>
              {!isTodo(siteConfig.vision) ? (
                <p className="text-headline font-medium text-[#0f0f0f]">{siteConfig.vision}</p>
              ) : (
                <p className="text-headline font-medium text-[#0f0f0f]">[[TODO: club vision]]</p>
              )}
            </Reveal>
            <Reveal y={20} delay={0.1} className="space-y-4 p-6 rounded-xl bg-white">
              <p className="text-label text-brand-primary">Our Mission</p>
              {!isTodo(siteConfig.mission) ? (
                <p className="text-headline font-medium text-[#0f0f0f]">{siteConfig.mission}</p>
              ) : (
                <p className="text-headline font-medium text-[#0f0f0f]">[[TODO: club mission]]</p>
              )}
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section title="Rotaract Objectives" tone="light" align="center">
        <Container className="max-w-4xl">
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {OBJECTIVES.map((objective, index) => (
              <Reveal key={index} delay={index * 0.05} y={20} className="flex items-start gap-3 p-4 rounded-lg bg-[#f7f7f7]">
                <span
                  className="flex shrink-0 items-center justify-center h-8 w-8 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-medium"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <li className="text-sm leading-relaxed text-[#0f0f0f]/80">{objective}</li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </Section>

      <Section title="Our Values" tone="blush" align="center">
        <Container className="max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value, index) => (
              <Reveal key={index} delay={index * 0.05} y={20} className="space-y-3 p-6 rounded-xl bg-white">
                <h3 className="text-title font-medium text-[#0f0f0f]">{value.label}</h3>
                <p className="text-sm leading-relaxed text-[#6b6b6b]">{value.description}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Affiliation />
      <SponsorClub />
      <CharterInfo />
      <Timeline />

      <Section title="Join Our Journey" tone="pink" align="center" className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 bg-linear-to-r from-brand-primary via-brand-primary/80 to-brand-secondary"
          aria-hidden="true"
        />
        <Container className="relative z-10 space-y-6 text-center">
          <Reveal y={20}>
            <p className="text-lg leading-relaxed text-white/90 max-w-2xl mx-auto">
              Ready to serve, lead, and grow with us? We welcome young adults who want to make a difference
              in Kathmandu and beyond.
            </p>
          </Reveal>
          <Reveal y={20} delay={0.1}>
            <a
              href="/join"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-medium text-brand-primary transition-colors hover:bg-white/90 focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Become a Rotaractor
            </a>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}