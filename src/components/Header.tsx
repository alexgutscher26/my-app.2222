"use client"

import * as React from "react"
import Link from "next/link"
import { ChevronDown, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import ModeToggle from "./Mode-toggle"

export default function Component() {
  return (
    <div className="w-full p-4">
      <header className="mx-auto max-w-7xl">
        <div className="rounded-full bg-black px-4 py-2.5 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              <span className="text-xl font-semibold text-white">GigFinance</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:space-x-6">
              <Link
                href="#"
                className="text-sm font-medium text-white hover:text-white/80"
              >
                Dashboard
              </Link>
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-white hover:text-white/80">
                  Income Tools
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                  <div className="rounded-lg bg-white p-2 shadow-lg">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Income Tracker
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Payment History
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="#"
                className="text-sm font-medium text-white hover:text-white/80"
              >
                Expenses
              </Link>
              <div className="relative group">
                <button className="flex items-center text-sm font-medium text-white hover:text-white/80">
                  Resources
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                  <div className="rounded-lg bg-white p-2 shadow-lg">
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Help Center
                    </Link>
                    <Link href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Documentation
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            <div className="flex items-center space-x-3">
              <ModeToggle />
              {/* Desktop Auth Buttons - Hidden on Mobile */}
              <div className="hidden md:flex md:items-center md:space-x-3">
                <Button
                  variant="ghost"
                  className="text-sm font-medium text-white hover:text-white/80"
                >
                  Sign in
                </Button>
                <Button className="bg-white text-sm font-medium text-black hover:bg-white/90">
                  Sign up for free
                </Button>
              </div>
              {/* Mobile Menu Button */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    className="px-0 text-white hover:bg-transparent hover:text-white/80 md:hidden"
                  >
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                  <nav className="flex flex-col space-y-4">
                    <Link
                      href="#"
                      className="text-lg font-medium hover:text-gray-600"
                    >
                      Dashboard
                    </Link>
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium hover:text-gray-600">
                        Income Tools
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 mt-2 space-y-2">
                        <Link href="#" className="block text-sm hover:text-gray-600">
                          Income Tracker
                        </Link>
                        <Link href="#" className="block text-sm hover:text-gray-600">
                          Payment History
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>
                    <Link
                      href="#"
                      className="text-lg font-medium hover:text-gray-600"
                    >
                      Expenses
                    </Link>
                    <Collapsible>
                      <CollapsibleTrigger className="flex w-full items-center justify-between text-lg font-medium hover:text-gray-600">
                        Resources
                        <ChevronDown className="h-4 w-4" />
                      </CollapsibleTrigger>
                      <CollapsibleContent className="ml-4 mt-2 space-y-2">
                        <Link href="#" className="block text-sm hover:text-gray-600">
                          Help Center
                        </Link>
                        <Link href="#" className="block text-sm hover:text-gray-600">
                          Documentation
                        </Link>
                      </CollapsibleContent>
                    </Collapsible>
                    {/* Mobile Auth Buttons */}
                    <div className="space-y-3 pt-4">
                      <Button variant="outline" className="w-full justify-start">
                        Sign in
                      </Button>
                      <Button className="w-full justify-start bg-black text-white hover:bg-black/90">
                        Sign up for free
                      </Button>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}