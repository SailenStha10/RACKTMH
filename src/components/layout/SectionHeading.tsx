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

/** Colours are inherited from the surrounding Section tone. */
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
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
      {...props}
    >
      {eyebrow && (
        <Reveal y={8}>
          <span className="text-label font-medium tracking-wider opacity-80">
            [{eyebrow.toUpperCase()}]
          </span>
        </Reveal>
      )}
      <SplitTextReveal
        text={title}
        className="max-w-[24ch] text-[clamp(1.75rem,3.4vw,2.75rem)] leading-[1.1] font-medium tracking-tight sm:max-w-[28ch]"
      />
      {subtitle && (
        <Reveal delay={0.15} y={12}>
          <p className="max-w-xl text-base opacity-80">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}

export { SectionHeading };
