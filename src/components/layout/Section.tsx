import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/layout/SectionHeading"

interface SectionProps extends React.ComponentProps<"section"> {
  eyebrow?: string
  title?: string
  subtitle?: string
  align?: "left" | "center"
  action?: React.ReactNode
  containerClassName?: string
}

function Section({
  eyebrow,
  title,
  subtitle,
  align = "left",
  action,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  const hasHeading = Boolean(title)

  return (
    <section className={cn("py-16 sm:py-20", className)} {...props}>
      <Container className={containerClassName}>
        {hasHeading && (
          <div
            className={cn(
              "mb-10 flex flex-col gap-6 sm:mb-12",
              action && "sm:flex-row sm:items-end sm:justify-between"
            )}
          >
            <SectionHeading
              eyebrow={eyebrow}
              title={title!}
              subtitle={subtitle}
              align={align}
            />
            {action && <div className="shrink-0">{action}</div>}
          </div>
        )}
        {children}
      </Container>
    </section>
  )
}

export { Section }
