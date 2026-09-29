import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";

type SectionTone = "light" | "black" | "pink";

const TONE_CLASSES: Record<SectionTone, string> = {
  light: "bg-background text-foreground",
  black: "bg-[#0f0f0f] text-white",
  pink: "bg-brand-primary text-white",
};

interface SectionProps extends React.ComponentProps<"section"> {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: SectionTone;
  action?: React.ReactNode;
  containerClassName?: string;
}

function Section({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
  action,
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("py-16 sm:py-20 lg:py-24", TONE_CLASSES[tone], className)}
      {...props}
    >
      <Container className={containerClassName}>
        {title && (
          <div
            className={cn(
              "mb-10 flex flex-col gap-6 sm:mb-14",
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
export type { SectionTone };
