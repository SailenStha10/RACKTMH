import Image from "next/image"
import { Award } from "lucide-react"

import { mockRecognition } from "@/data/mock"
import { Section } from "@/components/layout/Section"
import { Card, CardContent } from "@/components/ui/card"

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

function RotaractorOfTheMonth() {
  const recognition = mockRecognition

  return (
    <Section eyebrow="Recognition" title="Rotaractor of the Month">
      <Card className="overflow-hidden py-0">
        <CardContent className="flex flex-col items-center gap-6 p-8 sm:flex-row sm:items-start sm:p-10">
          <div className="relative size-28 shrink-0 overflow-hidden rounded-full ring-4 ring-brand-accent/20">
            <Image
              src={recognition.photoUrl}
              alt=""
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-center sm:items-start sm:text-left">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-brand-accent">
              <Award className="size-4" aria-hidden="true" />
              {MONTH_NAMES[recognition.month - 1]} {recognition.year}
            </span>
            <h3 className="font-heading text-2xl font-bold text-foreground">
              {recognition.fullName}
            </h3>
            <p className="max-w-xl text-sm text-muted-foreground">
              {recognition.achievement}
            </p>
          </div>
        </CardContent>
      </Card>
    </Section>
  )
}

export { RotaractorOfTheMonth }
