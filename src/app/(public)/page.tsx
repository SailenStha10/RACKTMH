import { Hero } from "@/components/home/Hero"
import { AboutPreview } from "@/components/home/AboutPreview"
import { ImpactStats } from "@/components/home/ImpactStats"
import { UpcomingEvents } from "@/components/home/UpcomingEvents"
import { FeaturedProjects } from "@/components/home/FeaturedProjects"

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ImpactStats />
      <UpcomingEvents />
      <FeaturedProjects />
    </>
  )
}
