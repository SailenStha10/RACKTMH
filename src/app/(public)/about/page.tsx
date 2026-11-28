import { siteConfig } from "@/config/site";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";
import Image from "next/image";

const AVENUES = [
  {
    id: "club-service",
    title: "Club Service",
    description: "Strengthening fellowship and ensuring effective club operations.",
    image: "/images/about/leadership.svg",
    accent: "brand-primary",
  },
  {
    id: "community-service",
    title: "Community Service",
    description: "Improving lives through local projects like Project Jyoti.",
    image: "/images/about/community-service.svg",
    accent: "brand-primary",
  },
  {
    id: "international-service",
    title: "International Service",
    description: "Building global understanding through cross-border collaboration.",
    image: "/images/about/international-service.svg",
    accent: "brand-accent",
  },
  {
    id: "professional-development",
    title: "Professional Development",
    description: "Developing leadership and career skills for young professionals.",
    image: "/images/about/professional-development.svg",
    accent: "brand-secondary",
  },
] as const;

const JOURNEY_ITEMS = [
  {
    year: "2026",
    title: "Club Chartered",
    date: "6 January 2026",
    description: "Rotaract Club of Kathmandu Height officially chartered in Rotary International District 3292.",
    image: "/images/about/journey-charter.svg",
  },
  {
    year: "2026",
    title: "Project Jyoti Launched",
    date: "23 September 2026",
    description: "School vision screening programme at Koteshwor Saraswoti Higher Secondary School, Kavrepalanchok. Theme: Clear Vision, Bright Future.",
    image: "/images/about/project-jyoti.svg",
  },
  {
    year: "2026",
    title: "Presidents&apos; Night Co-Host",
    date: "2026",
    description: "Co-hosted Rotaract District 3292 Presidents&apos; Night in Pokhara for club presidents, district council, and training team.",
    image: "/images/about/journey-presidents-night.svg",
  },
] as const;

function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <Image
          src="/images/about/hero-background.svg"
          alt="Rotaract Club of Kathmandu Height members in action"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,19,103,0.15)_0%,_transparent_70%)]" />
      </div>

      <Container className="relative z-10 text-center space-y-8 max-w-5xl px-6">
        <Reveal y={30} className="space-y-6">
          <p className="text-label text-brand-primary tracking-[0.3em] uppercase">
            ROTARACT CLUB OF KATHMANDU HEIGHT
          </p>
          <h1
            id="hero-title"
            className="text-[clamp(3rem,7vw,6.5rem)] leading-[1.05] font-semibold tracking-[-0.03em] text-white"
          >
            <SplitTextReveal
              text="Together, We Create Impact."
              className="text-[clamp(3rem,7vw,6.5rem)] leading-[1.05] font-semibold tracking-[-0.03em]"
            />
          </h1>
          <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] leading-relaxed text-white/70 max-w-2xl mx-auto font-light tracking-[0.02em]">
            Leadership. Fellowship. Service.
          </p>
        </Reveal>

        <Reveal y={20} delay={0.3} className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <span className="w-px h-6 bg-white/20" aria-hidden="true" />
            DISTRICT 3292
          </span>
          <span className="flex items-center gap-2">
            ZONE 7
            <span className="w-px h-6 bg-white/20" aria-hidden="true" />
          </span>
        </Reveal>

        <Reveal y={20} delay={0.5} className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/40">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </Reveal>
      </Container>
    </section>
  );
}

function WhoWeAre() {
  return (
    <Section
      id="who-we-are"
      title=""
      align="left"
      tone="light"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal y={30} className="space-y-6 pr-8 lg:pr-12">
          <p className="text-label text-brand-primary tracking-[0.2em] uppercase">Who We Are</p>
          <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-[#0f0f0f] max-w-[24ch]">
            More Than a Club.<br />
            A Community of Changemakers.
          </h2>
          <p className="text-lg leading-relaxed text-[#0f0f0f]/70 max-w-xl">
            We are a youth-led Rotaract club in Kathmandu, Nepal, bringing together young adults who share a passion for service, leadership development, and fellowship. Since our charter on {siteConfig.charterDate}, we have grown into a vibrant community creating measurable impact across Nepal and beyond.
          </p>
          <p className="text-lg leading-relaxed text-[#0f0f0f]/70 max-w-xl">
            As part of Rotary International District 3292, we operate with the guidance of our sponsor club, the Rotary Club of Kathmandu Height, empowering young people to take action, develop professional skills, and build international understanding.
          </p>
        </Reveal>

        <Reveal y={30} delay={0.1} className="relative">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-[#0f0f0f]">
            <Image
              src="/images/about/who-we-are.svg"
              alt="Rotaract Club of Kathmandu Height members at a club gathering"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
            <div className="absolute bottom-6 left-6 right-6 text-white/90">
              <p className="text-label text-brand-primary tracking-[0.2em]">Our Community</p>
              <p className="text-title font-medium mt-1">Young leaders united by service</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-6 lg:-bottom-8 lg:-right-8 w-32 h-32 lg:w-40 lg:h-40 rounded-full bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D41367" strokeWidth="1.5" className="text-brand-primary">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function OurImpactInAction() {
  return (
    <Section
      id="impact-in-action"
      title=""
      align="left"
      tone="light"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative"
    >
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        <Reveal y={30} className="relative aspect-[4/3] lg:aspect-[3/2] rounded-[1.5rem] overflow-hidden bg-[#0f0f0f]">
          <Image
            src="/images/about/project-jyoti.svg"
            alt="Project Jyoti — Rotaractors and students at Koteshwor Saraswoti Higher Secondary School"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-[1.02]"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" aria-hidden="true" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/90 text-white text-xs font-medium tracking-[0.1em] uppercase mb-3">
              Community Service
            </span>
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-semibold text-white">
              Project Jyoti
            </h3>
            <p className="text-white/70 mt-2 text-sm">Clear Vision, Bright Future</p>
          </div>
          <div className="absolute top-6 right-6 text-right text-white/60 text-sm">
            <p>23 September 2026</p>
            <p>Koteshwor Saraswoti Higher Secondary School</p>
          </div>
        </Reveal>

        <Reveal y={30} delay={0.1} className="space-y-6 pt-4 lg:pt-8">
          <p className="text-label text-brand-primary tracking-[0.2em] uppercase">Our Impact in Action</p>
          <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-[#0f0f0f] max-w-[24ch]">
            Transforming Lives Through Vision Care
          </h2>
          <div className="space-y-4 text-lg leading-relaxed text-[#0f0f0f]/70 max-w-xl">
            <p>
              Project Jyoti is our flagship community service initiative — a school-level vision screening programme designed to protect children&apos;s eye health, identify vision problems early, and improve access to treatment and support learning.
            </p>
            <p>
              Held on 23 September 2026 at Koteshwor Saraswoti Higher Secondary School in Kavrepalanchok district, the project brought together Rotaractors, medical professionals, and partners from Nepal and Canada including the Rotary Club of Nanaimo Daybreak, ADSon, Rotary Club of Patan, Rotaract Club of Kathmandu Midtown, and Rose International Fund for Children.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-[#e6e6e6] max-w-xl">
            <div className="space-y-1">
              <p className="text-label text-[#6b6b6b]">Date</p>
              <p className="font-medium text-[#0f0f0f]">23 September 2026</p>
            </div>
            <div className="space-y-1">
              <p className="text-label text-[#6b6b6b]">Venue</p>
              <p className="font-medium text-[#0f0f0f]">Kavrepalanchok, Nepal</p>
            </div>
            <div className="space-y-1">
              <p className="text-label text-[#6b6b6b]">Avenue</p>
              <p className="font-medium text-brand-primary">Community Service</p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function WhatDefinesUs() {
  const items = [
    {
      title: "Leadership",
      description: "Developing confident leaders who inspire change.",
      image: "/images/about/leadership.svg",
      size: "large",
    },
    {
      title: "Fellowship",
      description: "Building lifelong bonds through shared purpose.",
      image: "/images/about/fellowship.svg",
      size: "medium",
    },
    {
      title: "Community Service",
      description: "Creating tangible impact where it matters most.",
      image: "/images/about/community-service.svg",
      size: "medium",
    },
    {
      title: "Professional Development",
      description: "Equipping members with skills for career growth.",
      image: "/images/about/professional-development.svg",
      size: "large",
    },
  ];

  return (
    <Section
      id="what-defines-us"
      title="What Defines Us"
      align="center"
      tone="light"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative"
    >
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {items.map((item, index) => (
          <Reveal key={item.title} y={30} delay={index * 0.08} className="relative group">
            <div
              className={`relative aspect-square lg:aspect-[${item.size === "large" ? "5/4" : "4/5"}] rounded-[1.5rem] overflow-hidden bg-[#0f0f0f] transition-transform duration-500 hover:-translate-y-2`}
              style={{ gridColumn: item.size === "large" ? "span 2 / span 2" : undefined, gridRow: item.size === "large" ? "span 2 / span 2" : undefined }}
            >
              <Image
                src={item.image}
                alt={`Rotaract Club of Kathmandu Height — ${item.title}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-title font-medium">{item.title}</h3>
                <p className="text-sm text-white/70 mt-1 max-w-xs">{item.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function MissionVision() {
  return (
    <Section
      id="mission-vision"
      title="Mission & Vision"
      align="center"
      tone="blush"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative max-w-5xl"
    >
      <div className="grid lg:grid-cols-2 gap-8">
        <Reveal y={30} className="relative p-8 lg:p-12 rounded-[1.5rem] bg-white min-h-[320px] flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-medium tracking-[0.1em] uppercase">
              Our Mission
            </span>
            <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight font-semibold text-[#0f0f0f]">
              Empowering young leaders to create meaningful change.
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-[#0f0f0f]/70 max-w-md">
            We provide opportunities for personal and group activities to serve the community, develop professional and leadership skills, and promote international understanding and goodwill toward all people.
          </p>
        </Reveal>

        <Reveal y={30} delay={0.1} className="relative p-8 lg:p-12 rounded-[1.5rem] bg-white min-h-[320px] flex flex-col justify-between">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-medium tracking-[0.1em] uppercase">
              Our Vision
            </span>
            <h3 className="text-[clamp(1.75rem,3.5vw,2.5rem)] leading-tight font-semibold text-[#0f0f0f]">
              Building a connected generation of responsible changemakers.
            </h3>
          </div>
          <p className="text-lg leading-relaxed text-[#0f0f0f]/70 max-w-md">
            We envision a world where young adults in Kathmandu and beyond are united by fellowship, equipped with leadership skills, and driven by the Rotaract motto: Service Above Self.
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

function FourAvenues() {
  return (
    <Section
      id="four-avenues"
      title="Four Avenues of Service"
      align="center"
      tone="light"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {AVENUES.map((avenue, index) => (
          <Reveal key={avenue.id} y={30} delay={index * 0.08} className="relative group">
            <div className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-[#0f0f0f] transition-transform duration-500 hover:-translate-y-2">
              <Image
                src={avenue.image}
                alt={`Rotaract Club of Kathmandu Height — ${avenue.title}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-3">
                <h3 className="text-title font-medium">{avenue.title}</h3>
                <p className="text-sm text-white/70">{avenue.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function OurRecognition() {
  return (
    <Section
      id="recognition"
      title="Our Recognition"
      align="center"
      tone="light"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative max-w-6xl"
    >
      <Reveal y={30} className="relative aspect-[3/2] rounded-[1.5rem] overflow-hidden bg-[#0f0f0f]">
        <Image
          src="/images/about/club-recognition.svg"
          alt="Rotaract Club of Kathmandu Height — Awards, certificates, and recognition materials"
          fill
          sizes="(max-width: 1024px) 100vw, 80vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden="true" />
        <div className="absolute inset-0 flex items-end p-8 lg:p-12">
          <div className="max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/90 text-white text-xs font-medium tracking-[0.1em] uppercase">
              Verified Achievements
            </span>
            <h2 className="text-[clamp(2rem,4vw,3rem)] leading-tight font-semibold text-white">
              Every Effort Creates an Impact.
            </h2>
            <p className="text-lg leading-relaxed text-white/70">
              Our club has been recognized for outstanding community service, leadership development, and district-level contributions. These awards reflect the dedication of every Rotaractor who has served through our club.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm">Project Jyoti — Community Impact</span>
              <span className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm">District 3292 — Co-host Presidents&apos; Night</span>
              <span className="px-4 py-2 rounded-full border border-white/20 text-white/80 text-sm">Rotary International — Charter Recognition</span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function OurJourney() {
  return (
    <Section
      id="journey"
      title="Our Journey"
      align="center"
      tone="blush"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative max-w-5xl"
    >
      <div className="space-y-10">
        {JOURNEY_ITEMS.map((item, index) => (
          <Reveal key={item.title} y={30} delay={index * 0.1} className="relative">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-[#0f0f0f]">
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.date}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" aria-hidden="true" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block px-3 py-1 rounded-full bg-brand-primary/90 text-white text-xs font-medium tracking-[0.1em] uppercase mb-2 block">
                    {item.year}
                  </span>
                  <h3 className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-tight font-semibold">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{item.date}</p>
                </div>
              </div>
              <div className="space-y-4 text-left lg:pl-4">
                <p className="text-lg leading-relaxed text-[#0f0f0f]/70">{item.description}</p>
                <div className="flex items-center gap-3 text-sm text-[#6b6b6b]">
                  <span className="w-24 h-px bg-brand-primary/30" aria-hidden="true" />
                  <span>Verified milestone</span>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function DistrictIdentity() {
  return (
    <Section
      id="district-identity"
      title=""
      align="center"
      tone="black"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative"
    >
      <div className="relative aspect-[2/1] lg:aspect-[3/1] rounded-[1.5rem] overflow-hidden bg-[#0f0f0f]">
        <Image
          src="/images/about/district-identity.svg"
          alt="Rotaract Club of Kathmandu Height — District 3292, Zone 7 identity"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          quality={90}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative z-10 text-center space-y-8 px-6">
            <Reveal y={30} className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div className="w-px h-12 bg-white/20" aria-hidden="true" />
                <span className="text-label text-brand-primary tracking-[0.3em] uppercase">Rotaract Club of Kathmandu Height</span>
                <div className="w-px h-12 bg-white/20" aria-hidden="true" />
              </div>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] font-semibold tracking-[-0.02em] text-white">
                DISTRICT 3292
              </h2>
              <p className="text-[clamp(1.25rem,2.5vw,1.75rem)] leading-relaxed text-brand-accent font-medium tracking-[0.1em]">
                ZONE 7
              </p>
            </Reveal>
            <Reveal y={20} delay={0.2} className="flex items-center justify-center gap-8 text-sm text-white/50">
              <span className="flex items-center gap-2">
                <span className="w-px h-6 bg-white/20" aria-hidden="true" />
                Chartered 6 January 2026
              </span>
              <span className="flex items-center gap-2">
                Club ID: 8827984
                <span className="w-px h-6 bg-white/20" aria-hidden="true" />
              </span>
              <span className="flex items-center gap-2">
                Sponsor: Rotary Club of Kathmandu Height
                <span className="w-px h-6 bg-white/20" aria-hidden="true" />
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <Section
      id="cta"
      title=""
      align="center"
      tone="light"
      className="py-24 lg:py-32 relative overflow-hidden"
      containerClassName="relative max-w-4xl"
    >
      <div className="relative aspect-[12/5] lg:aspect-[2/1] rounded-[2rem] overflow-hidden bg-[#0a0a0a]">
        <Image
          src="/images/about/cta-background.svg"
          alt="Rotaract Club of Kathmandu Height members in fellowship and community service"
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,19,103,0.2)_0%,_transparent_70%)]" aria-hidden="true" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative z-10 text-center space-y-8 max-w-3xl">
            <Reveal y={30} className="space-y-4">
              <h2 className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-[1.1] font-semibold tracking-[-0.02em] text-white">
                Your Journey of Impact Starts Here.
              </h2>
              <p className="text-[clamp(1.125rem,2vw,1.375rem)] leading-relaxed text-white/70">
                Connect. Lead. Serve. Grow.
              </p>
            </Reveal>
            <Reveal y={20} delay={0.2}>
              <a
                href="/join"
                className="inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-base font-medium text-brand-primary transition-all duration-300 hover:bg-white/90 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Join Our Community
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default async function AboutPage() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurImpactInAction />
      <WhatDefinesUs />
      <MissionVision />
      <FourAvenues />
      <OurRecognition />
      <OurJourney />
      <DistrictIdentity />
      <FinalCTA />
    </>
  );
}