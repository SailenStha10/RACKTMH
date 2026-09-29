import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeadingProps extends React.ComponentProps<"div"> {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: "left" | "center"
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
      {...props}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wide text-brand-primary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-heading font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export { SectionHeading }
