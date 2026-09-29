import Link from "next/link"
import { Eye, Target } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Section } from "@/components/layout/Section"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

function AboutPreview() {
  return (
    <Section
      eyebrow="Who We Are"
      title="About Our Club"
      subtitle={`${siteConfig.clubName} is a community of young professionals and students dedicated to service, leadership and fellowship, sponsored by ${siteConfig.sponsorClub}.`}
      action={
        <Button
          variant="outline"
          render={<Link href="/about">Learn More</Link>}
        />
      }
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                <Eye className="size-5" aria-hidden="true" />
              </span>
              <CardTitle>Our Vision</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{siteConfig.vision}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full bg-brand-secondary/10 text-brand-secondary">
                <Target className="size-5" aria-hidden="true" />
              </span>
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{siteConfig.mission}</p>
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}

export { AboutPreview }
