import * as React from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";

interface SectionHeadingProps extends React.ComponentProps<"div"> {
  eyebrow?: string;
  title: string;
  align?: "left" | "center";
}

/** One small label and one big headline. Colours come from the surrounding Section tone. */
function SectionHeading({
  eyebrow,
  title,
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
          <span className="text-label font-medium tracking-wider opacity-70">
            [{eyebrow.toUpperCase()}]
          </span>
        </Reveal>
      )}
      <SplitTextReveal
        text={title}
        className="max-w-[16ch] text-[clamp(2.5rem,6.5vw,5rem)] leading-none font-semibold tracking-[-0.04em] sm:max-w-[18ch]"
      />
    </div>
  );
}

export { SectionHeading };
