"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const pathname = usePathname()

  const sections = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About", href: "/#about" },
    { id: "topics", label: "Topics", href: "/#topics" },
    { id: "registration", label: "Registration", href: "/#registration" },
    // { id: "schedule", label: "Schedule", href: "/#schedule" },
    { id: "payment", label: "Payments", href: "/payment" },
    // { id: "testimonials", label: "Testimonials", href: "/testimonials" },
    { id: "contact", label: "Contact", href: "/contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      // Only update active section on home page
      if (pathname === "/") {
        // Update active section based on scroll position
        const sectionElements = sections
          .filter((section) => section.href.startsWith("/#"))
          .map((section) => ({
            id: section.id,
            element: document.getElementById(section.id),
          }))

        const currentSection = sectionElements.find((section) => {
          if (!section.element) return false
          const rect = section.element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        })

        if (currentSection) {
          setActiveSection(currentSection.id)
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sections, pathname])

  // Set active section based on current page
  useEffect(() => {
    if (pathname === "/testimonials") {
      setActiveSection("testimonials")
    } else if (pathname === "/contact") {
      setActiveSection("contact")
    } else if (pathname === "/") {
      setActiveSection("home")
    } else if (pathname === "/payment") {
      setActiveSection("payment")
    }
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        pathname === "/" 
          ? scrolled 
            ? "bg-white/90 backdrop-blur-md shadow-lg py-3" 
            : "bg-transparent py-5"
          : "bg-white/90 backdrop-blur-md shadow-lg py-3"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between z-[60]">
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative w-10 h-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-md transform transition-all duration-500 group-hover:scale-110"></div>
            <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-sm flex items-center justify-center">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-br from-teal-500 to-teal-700 text-sm">
                DfAM
              </span>
            </div>
          </div>
          <div>
            <span
              className={cn(
                "font-bold text-xl transition-colors duration-300",
                pathname === "/" && !scrolled ? "text-white" : "text-slate-800"
              )}
            >
              DfAM <span className="text-teal-500">2025</span>
            </span>
            <span
              className={cn(
                "block text-xs font-medium transition-colors duration-300",
                pathname === "/" && !scrolled ? "text-white/70" : "text-slate-500"
              )}
            >
              AI Enabled Design for Additive Manufacturing
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {sections.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "relative px-4 py-2 font-medium text-sm transition-colors duration-300 rounded-md",
                activeSection === item.id
                  ? pathname === "/" && !scrolled
                    ? "text-white"
                    : "text-teal-600"
                  : pathname === "/" && !scrolled
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-slate-600 hover:text-teal-600 hover:bg-slate-100"
              )}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeSection"
                  className={cn(
                    "absolute bottom-0 left-0 right-0 h-0.5 mx-2",
                    pathname === "/" && !scrolled ? "bg-white" : "bg-teal-500"
                  )}
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
          {/* Add Brochure button */}
          <a
            href="/AI_DfAM_Brochure_2025_updated_forwebsite,.pdf"
            download
            className={cn(
              "relative px-4 py-2 font-medium text-sm transition-colors duration-300 rounded-md",
              pathname === "/" && !scrolled
                ? "text-white/80 hover:text-white hover:bg-white/10"
                : "text-slate-600 hover:text-teal-600 hover:bg-slate-100"
            )}
          >
            Brochure
          </a>
          <Button
            className="ml-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            size="sm"
            asChild
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzDzhDnS5ldEWWGh8lH0qUHQMf2_k11TuHXB9xLi9GHq7EXQ/viewform?usp=sharing&ouid=101024081643276331895"
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/10 backdrop-blur-md z-[60] relative flex-shrink-0"
              aria-label="Toggle menu"
            >
              <Menu className={scrolled ? "text-slate-800" : "text-white"} size={20} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 bg-white flex flex-col">
            {/* Header with logo and close button */}
            <div className="flex items-center justify-between p-4 border-b">
              <Link href="/" className="flex items-center space-x-2">
                 <div className="relative w-8 h-8 overflow-hidden rounded-full bg-teal-500">
                    <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-xs">
                      DfAM
                    </div>
                  </div>
                  <span className="font-bold text-slate-800">DfAM <span className="text-teal-500">2025</span></span>
              </Link>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <X className="h-4 w-4" />
                </Button>
              </SheetTrigger>
            </div>

            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>

            {/* Navigation Items */}
            <div className="flex-1 overflow-y-auto">
              <nav className="flex flex-col p-4 space-y-1">
                {sections.map((item) => (
                   <SheetTrigger asChild key={item.id}>
                      <Link
                        href={item.href}
                        className="flex items-center justify-between py-3 px-2 text-slate-700 hover:text-teal-600 transition-colors"
                      >
                        <span className="font-medium">{item.label}</span>
                        <ChevronRight size={18} className="text-slate-400" />
                      </Link>
                   </SheetTrigger>
                ))}
                {/* Add Brochure link */}
                 <SheetTrigger asChild>
                    <a
                      href="/AI_DfAM_Brochure_2025_updated_forwebsite,.pdf"
                      download
                      className="flex items-center justify-between py-3 px-2 text-slate-700 hover:text-teal-600 transition-colors"
                    >
                      <span className="font-medium">Brochure</span>
                      <ChevronRight size={18} className="text-slate-400" />
                    </a>
                 </SheetTrigger>
              </nav>
            </div>

            {/* Register Now Button */}
            <div className="p-4 border-t">
               <SheetTrigger asChild>
                   <Button
                    className="w-full bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg border-0"
                    asChild
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdzDzhDnS5ldEWWGh8lH0qUHQMf2_k11TuHXB9xLi9GHq7EXQ/viewform?usp=sharing&ouid=101024081643276331895"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </a>
                  </Button>
               </SheetTrigger>
            </div>

          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
