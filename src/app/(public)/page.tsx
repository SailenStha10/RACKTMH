import { Hero } from "@/components/home/Hero";
import { FactsBar } from "@/components/home/FactsBar";
import { AboutPreview } from "@/components/home/AboutPreview";
import { FourAvenues } from "@/components/home/FourAvenues";
import { ImpactStats } from "@/components/home/ImpactStats";
import { UpcomingEvents } from "@/components/home/UpcomingEvents";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { BoardPreview } from "@/components/home/BoardPreview";
import { RotaractorOfTheMonth } from "@/components/home/RotaractorOfTheMonth";
import { LatestAnnouncements } from "@/components/home/LatestAnnouncements";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { InstagramStrip } from "@/components/home/InstagramStrip";
import { MembershipCTA } from "@/components/home/MembershipCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FactsBar />
      <AboutPreview />
      <FourAvenues />
      <FeaturedProjects />
      <ImpactStats />
      <BoardPreview />
      <RotaractorOfTheMonth />
      <UpcomingEvents />
      <LatestAnnouncements />
      <GalleryPreview />
      <InstagramStrip />
      <MembershipCTA />
    </>
  );
}
