"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Menu,
  Search,
  BookOpen,
  Calculator,
  GraduationCap,
  FileText,
  Bell,
  ShoppingCart,
  Newspaper,
  Phone,
  ChevronDown,
  ClipboardList,
} from "lucide-react"

const mainMenuItems = [
  { name: "Home", href: "/", icon: BookOpen },
  { name: "Math Solution", href: "/math-solutions", icon: Calculator },
  { name: "PDF Book", href: "/pdf-books", icon: FileText },
  { name: "College Admission", href: "/college-admission", icon: GraduationCap },
  { name: "Blog", href: "/blog", icon: Newspaper },
  { name: "Products", href: "/products", icon: ShoppingCart },
  { name: "Notice", href: "/notice", icon: Bell },
  { name: "Contact", href: "/contact", icon: Phone },
]

const moreMenuItems = [
  { name: "University Admission", href: "/university-admission", icon: GraduationCap },
  { name: "Result", href: "/result", icon: ClipboardList },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-40 backdrop-blur-sm bg-background/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* <div className="bg-primary text-primary-foreground p-2 rounded-lg">
              <Calculator className="h-6 w-6" />
            </div> */}
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white animate-bounce-gentle">
              ∑
            </div>
            <span className="text-xl font-bold text-foreground">MathSolutions</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {mainMenuItems.map((item) => {
              const Icon = item.icon
              return (
                <Link key={item.name} href={item.href}>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 text-sm hover:bg-accent hover:text-accent-foreground"
                  >
                    <Icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-sm hover:bg-accent hover:text-accent-foreground"
                >
                  More
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                {moreMenuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="flex items-center gap-2 cursor-pointer">
                        <Icon className="h-4 w-4" />
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  )
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Search Button */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="hidden sm:flex items-center gap-2 bg-transparent hover:bg-accent hover:text-accent-foreground"
            >
              <Search className="h-4 w-4" />
              Search
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="bg-primary text-primary-foreground p-2 rounded-lg">
                      <Calculator className="h-6 w-6" />
                    </div>
                    <span className="text-xl font-bold">MathSolutions</span>
                  </div>

                  {[...mainMenuItems, ...moreMenuItems].map((item) => {
                    const Icon = item.icon
                    return (
                      <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)}>
                        <Button
                          variant="ghost"
                          className="w-full justify-start gap-3 text-base hover:bg-accent hover:text-accent-foreground"
                        >
                          <Icon className="h-5 w-5" />
                          {item.name}
                        </Button>
                      </Link>
                    )
                  })}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
