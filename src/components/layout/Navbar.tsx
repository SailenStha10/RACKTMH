"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Logo() {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.clubName} home`}
      className="focus-visible:outline-ring rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      <Image
        src="/brand/club-logo.png"
        alt={siteConfig.clubName}
        width={583}
        height={170}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}

function NavLink({
  href,
  label,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const pathname = usePathname();
  const active = isActive(pathname, href);
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "hover:text-brand-primary focus-visible:outline-ring rounded-sm text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2",
        active ? "text-brand-primary" : "text-[#0f0f0f]/80",
        className,
      )}
    >
      {label}
    </Link>
  );
}

function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <>
      <header className="pointer-events-none fixed inset-x-0 top-3 z-40 px-3 sm:top-4 sm:px-6">
        <div className="pointer-events-auto mx-auto flex h-14 max-w-5xl items-center justify-between rounded-full bg-white/55 pr-2 pl-5 shadow-[0_12px_40px_-14px_rgba(0,0,0,0.35)] ring-1 ring-white/60 backdrop-blur-xl backdrop-saturate-150">
          <Logo />

          <nav
            aria-label="Main"
            className="hidden items-center gap-5 pr-4 md:flex lg:gap-7"
          >
            {siteConfig.nav.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} />
            ))}
          </nav>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full text-[#0f0f0f] hover:bg-black/5 md:hidden"
                >
                  <Menu className="size-5" aria-hidden="true" />
                  <span className="sr-only">Open menu</span>
                </Button>
              }
            />
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{siteConfig.shortName}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="flex flex-col gap-4 px-4">
                {siteConfig.nav.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                    className="text-base"
                    onNavigate={() => setMobileOpen(false)}
                  />
                ))}
              </nav>
              <div className="mt-auto px-4 pb-4">
                <Button
                  className="w-full rounded-full"
                  render={
                    <Link href="/join" onClick={() => setMobileOpen(false)}>
                      Join us
                    </Link>
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <Link
        href="/join"
        className="bg-brand-accent focus-visible:outline-ring fixed top-1/3 left-0 z-40 hidden rounded-r-md px-2 py-4 text-xs text-[#0f0f0f] transition-colors [writing-mode:vertical-rl] hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 sm:block"
      >
        <span className="rotate-180">Join the club</span>
      </Link>
    </>
  );
}

export { Navbar };
