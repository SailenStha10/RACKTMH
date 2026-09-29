import { Hero } from "@/components/home/Hero";
import { FactsBar } from "@/components/home/FactsBar";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FourAvenues } from "@/components/home/FourAvenues";
import { EventsShowcase } from "@/components/home/EventsShowcase";
import { ImpactStats } from "@/components/home/ImpactStats";
import { BoardPreview } from "@/components/home/BoardPreview";
import { RotaractorOfTheMonth } from "@/components/home/RotaractorOfTheMonth";
import { LatestAnnouncements } from "@/components/home/LatestAnnouncements";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { MembershipCTA } from "@/components/home/MembershipCTA";
import { SectionShell } from "@/components/motion/SectionShell";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SectionShell>
        <FactsBar />
        <AboutPreview />
      </SectionShell>
      <SectionShell>
        <FourAvenues />
      </SectionShell>
      <SectionShell>
        <EventsShowcase />
      </SectionShell>
      <SectionShell>
        <ImpactStats />
        <BoardPreview />
      </SectionShell>
      <RotaractorOfTheMonth />
      <LatestAnnouncements />
      <GalleryPreview />
      <SectionShell>
        <InstagramStrip />
      </SectionShell>
      <SectionShell>
        <MembershipCTA />
      </SectionShell>
    </>
  );
}
