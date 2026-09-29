import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";

interface SectionHeadingProps extends React.ComponentProps<"div"> {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <Reveal y={8}>
          <span className="text-label text-foreground">
            [{eyebrow.toUpperCase()}]
          </span>
        </Reveal>
      )}
      <SplitTextReveal
        text={title}
        className="text-headline text-foreground max-w-[22ch] sm:max-w-[26ch]"
      />
      {subtitle && (
        <Reveal delay={0.15} y={12}>
          <p className="text-muted-foreground max-w-xl text-sm">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

export { SectionHeading };
