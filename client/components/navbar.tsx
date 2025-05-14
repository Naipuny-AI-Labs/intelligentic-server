"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [hasScrolledPast, setHasScrolledPast] = useState(false)
  const { theme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      const scrolledPastNavbar = window.scrollY > 100
      setIsScrolled(window.scrollY > 10)
      setHasScrolledPast(scrolledPastNavbar)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Marketplace", href: "/marketplace" },
    { name: "About", href: "/about" },
  ]

  return (
    <>
      {hasScrolledPast && <div className="h-16" />}

      <header
        className={cn(
          "w-full z-50 transition-all duration-300",
          hasScrolledPast ? "fixed top-0 animate-slideDown" : "relative",
          isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
        )}
      >
        <div className="container px-2 xs:px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/images/intelligentic-logo.png"
                  alt="INTELLIGENTIC.AI Logo"
                  width={60}
                  height={60}
                  className="h-6 w-12 xs:h-7 xs:w-14 sm:h-8 sm:w-16 md:h-9 md:w-18 lg:h-10 lg:w-20"
                  priority
                />
                <span className="text-sm font-bold tracking-wide  xs:hidden">INTELLIGENTIC.AI</span>
                <span className="hidden xs:inline-block font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-wide ml-1 sm:ml-2">
                  INTELLIGENTIC.AI
                </span>
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === item.href ? "text-primary" : "text-muted-foreground",
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-2 sm:space-x-4">
              <ThemeToggle />

              <Button asChild className="hidden sm:flex bg-brand-gradient hover:opacity-90 text-sm md:text-base">
                <a href="https://workspace.intelligentic.ai" target="_blank" rel="noopener noreferrer">
                  Sign In
                </a>
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="md:hidden p-2"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden border-t">
            <div className="container px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-primary py-2",
                      pathname === item.href ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="mt-2 w-full bg-brand-gradient hover:opacity-90">
                  <a href="https://workspace.intelligentic.ai" target="_blank" rel="noopener noreferrer">
                    Sign In
                  </a>
                </Button>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
