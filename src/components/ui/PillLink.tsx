import Link from "next/link";

import { cn } from "@/lib/utils";

type Tone = "black" | "pink" | "white" | "gold";

const TONES: Record<Tone, string> = {
  black: "bg-[#0f0f0f] text-white hover:bg-brand-primary",
  pink: "bg-brand-primary text-white hover:bg-[#0f0f0f]",
  white: "bg-white text-[#0f0f0f] hover:bg-brand-accent",
  gold: "bg-brand-accent text-[#0f0f0f] hover:bg-white",
};

interface PillLinkProps {
  href: string;
  children: React.ReactNode;
  tone?: Tone;
  external?: boolean;
  className?: string;
}

/** Solid pill button rendered as a link. */
function PillLink({
  href,
  children,
  tone = "black",
  external = false,
  className,
}: PillLinkProps) {
  const classes = cn(
    "inline-block rounded-full px-6 py-3 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
    TONES[tone],
    className,
  );
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

export { PillLink };
export type { Tone };
