import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";

interface SectionProps extends React.ComponentProps<"section"> {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  action?: React.ReactNode;
  containerClassName?: string;
}

function Section({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn("py-24 sm:py-32 lg:py-40", className)} {...props}>
      <Container className={containerClassName}>
        {title && (
          <div
            className={cn(
              "mb-14 flex flex-col gap-8 sm:mb-20",
              align === "center" ? "items-center" : "items-start",
            )}
          >
            <SectionHeading
              eyebrow={eyebrow}
              title={title}
              subtitle={subtitle}
              align={align}
            />
            {action && <div className="shrink-0">{action}</div>}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}

export { Section };
