"use client"

import React from 'react'
import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import ModeToggle from './Mode-toggle'

// Navigation Link component
const NavLink = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ href, children, ...props }, ref) => {
  return (
    <Link href={href ?? '/'} passHref legacyBehavior>
      <NavigationMenuLink ref={ref} className={navigationMenuTriggerStyle()} {...(props as React.ComponentPropsWithoutRef<typeof NavigationMenuLink>)}>
        {children}
      </NavigationMenuLink>
    </Link>
  )
})
NavLink.displayName = "NavLink"

// Header component
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="text-lg font-semibold hover:text-primary transition-colors">
            Your Logo
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-4 text-sm">
                <NavigationMenuItem>
                  <NavLink href="/about">About</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink href="/features">Features</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink href="/pricing">Pricing</NavLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavLink href="/blog">Blog</NavLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Section with Mode Toggle and Buttons */}
          <div className="flex items-center gap-4">
            <ModeToggle />

            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="hover:text-primary transition-colors">
                  Sign In
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-primary text-white hover:bg-primary-dark transition-colors">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm" className="-mr-2">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 p-4">
                  <Link href="/" className="text-lg font-semibold mb-2 hover:text-primary transition-colors">Your Logo</Link>
                  <div className="flex flex-col gap-3 mt-4 text-sm">
                    <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                    <Link href="/features" className="hover:text-primary transition-colors">Features</Link>
                    <Link href="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
                    <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                  </div>
                  <div className="flex flex-col gap-2 mt-4">
                    <Link href="/login">
                      <Button variant="ghost" className="w-full justify-start hover:text-primary transition-colors">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/register">
                      <Button className="w-full justify-start bg-primary text-white hover:bg-primary-dark transition-colors">
                        Get Started
                      </Button>
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header