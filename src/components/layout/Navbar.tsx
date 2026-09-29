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

const NAV_COLUMNS = [siteConfig.nav.slice(0, 3), siteConfig.nav.slice(3)];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Wordmark() {
  return (
    <Link
      href="/"
      className="text-foreground focus-visible:outline-ring rounded-sm text-sm font-medium tracking-tight focus-visible:outline-2 focus-visible:outline-offset-4"
    >
      {siteConfig.shortName}
    </Link>
  );
}

function NavLink({
  href,
  label,
  onNavigate,
}: {
  href: string;
  label: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const active = isActive(pathname, href);
  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "text-foreground focus-visible:outline-ring rounded-sm text-xs transition-opacity hover:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2",
        active ? "opacity-100" : "opacity-70",
      )}
    >
      {label}
    </Link>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-colors duration-300",
          scrolled
            ? "bg-background/85 supports-backdrop-filter:backdrop-blur-md"
            : "bg-transparent",
        )}
      >
        <Container className="flex h-16 items-start justify-between pt-5 md:h-auto md:pb-4">
          <Wordmark />

          <nav aria-label="Main" className="hidden gap-16 md:flex">
            {NAV_COLUMNS.map((column, i) => (
              <div key={i} className="flex flex-col gap-1">
                {column.map((item) => (
                  <NavLink
                    key={item.href}
                    href={item.href}
                    label={item.label}
                  />
                ))}
              </div>
            ))}
          </nav>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="-mt-2 md:hidden">
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
        className="bg-foreground text-background hover:bg-brand-primary focus-visible:outline-ring fixed top-1/3 left-0 z-40 rounded-r-md px-2 py-4 text-xs transition-colors [writing-mode:vertical-rl] focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        <span className="rotate-180">Join the club</span>
      </Link>
    </>
  );
}

export { Navbar };
