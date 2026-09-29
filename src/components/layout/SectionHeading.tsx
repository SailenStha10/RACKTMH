import * as React from "react";
import { cn } from "@/lib/utils";
import { SplitTextReveal } from "@/components/motion/SplitTextReveal";

interface SectionHeadingProps extends React.ComponentProps<"div"> {
  title: string;
  align?: "left" | "center";
}

/** One small label and one big headline. Colours come from the surrounding Section tone. */
function SectionHeading({
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
      <SplitTextReveal
        text={title}
        className="max-w-[16ch] text-[clamp(2.5rem,6.5vw,5rem)] leading-none font-semibold tracking-[-0.04em] sm:max-w-[18ch]"
      />
    </div>
  );
}

export { SectionHeading };
