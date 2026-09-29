"use client";

import * as React from "react";
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
import { Container } from "@/components/layout/Container";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Wordmark() {
  return (
    <Link
      href="/"
      className="focus-visible:outline-ring rounded-sm text-sm font-medium tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {siteConfig.shortName}
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
        "focus-visible:outline-ring rounded-sm text-sm text-white transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2",
        active ? "text-brand-primary opacity-100" : "opacity-80",
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
      <header
        className={cn("fixed inset-x-0 top-0 z-40 bg-[#0f0f0f] text-white")}
      >
        <Container className="flex h-16 items-center justify-between md:h-16">
          <Wordmark />

          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
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
                  className="text-white hover:bg-white/10 hover:text-white md:hidden"
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
                    className="text-foreground text-base"
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
        </Container>
      </header>

      <Link
        href="/join"
        className="bg-brand-primary focus-visible:outline-ring fixed top-1/3 left-0 z-40 rounded-r-md px-2 py-4 text-xs text-white transition-colors [writing-mode:vertical-rl] hover:bg-white hover:text-[#0f0f0f] focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span className="rotate-180">Join the club</span>
      </Link>
    </>
  );
}

export { Navbar };
