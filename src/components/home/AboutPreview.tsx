import Link from "next/link";
import { Eye, Target } from "lucide-react";

import { siteConfig } from "@/config/site";
import { Section } from "@/components/layout/Section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function AboutPreview() {
  return (
    <Section
      eyebrow="Who We Are"
      title="About Our Club"
      subtitle={`${siteConfig.clubName} is a youth-led club in Rotary International ${siteConfig.district} (${siteConfig.districtRegion}), dedicated to service, leadership and fellowship in Kathmandu.`}
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
              <span className="bg-brand-primary/10 text-brand-primary flex size-10 items-center justify-center rounded-full">
                <Eye className="size-5" aria-hidden="true" />
              </span>
              <CardTitle>Our Vision</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">{siteConfig.vision}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <span className="bg-brand-secondary/10 text-brand-secondary flex size-10 items-center justify-center rounded-full">
                <Target className="size-5" aria-hidden="true" />
              </span>
              <CardTitle>Our Mission</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              {siteConfig.mission}
            </p>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export { AboutPreview };
