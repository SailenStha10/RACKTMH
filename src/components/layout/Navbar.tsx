"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, HeartHandshake } from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Container } from "@/components/layout/Container"

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/"
  return pathname === href || pathname.startsWith(`${href}/`)
}

function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <span className="flex size-9 items-center justify-center rounded-full bg-brand-primary text-brand-primary-foreground">
        <HeartHandshake className="size-5" aria-hidden="true" />
      </span>
      <span className="font-heading text-lg font-bold tracking-tight text-foreground">
        {siteConfig.shortName}
      </span>
    </Link>
  )
}

function NavLinks({
  className,
  onNavigate,
}: {
  className?: string
  onNavigate?: () => void
}) {
  const pathname = usePathname()

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {siteConfig.nav.map((item) => {
        const active = isActive(pathname, item.href)
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
              active && "text-foreground"
            )}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [mobileOpen, setMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full border-b transition-colors duration-200",
        scrolled
          ? "border-border bg-background/95 supports-backdrop-filter:backdrop-blur-sm"
          : "border-transparent bg-background/0"
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <NavLinks className="hidden lg:flex" />

        <div className="hidden items-center gap-2 lg:flex">
          <Button render={<Link href="/join">Join Us</Link>} />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="size-5" aria-hidden="true" />
                <span className="sr-only">Open menu</span>
              </Button>
            }
          />
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>{siteConfig.shortName}</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              <NavLinks
                className="flex-col items-stretch gap-0"
                onNavigate={() => setMobileOpen(false)}
              />
            </div>
            <div className="mt-auto px-4 pb-4">
              <Button
                className="w-full"
                render={
                  <Link href="/join" onClick={() => setMobileOpen(false)}>
                    Join Us
                  </Link>
                }
              />
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </header>
  )
}

export { Navbar }
