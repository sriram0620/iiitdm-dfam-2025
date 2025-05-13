"use client"

import Link from "next/link"
import { PrinterIcon as Printer3d, Mail, Phone, MapPin, ChevronRight, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white pt-20 pb-8">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 transform -translate-y-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="w-full">
          <path
            fill="#0f172a"
            fillOpacity="1"
            d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,80C672,64,768,64,864,69.3C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-12 h-12 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-md transform transition-all duration-500 group-hover:scale-110"></div>
                <div className="absolute inset-1 bg-slate-800 rounded-sm flex items-center justify-center">
                  <Printer3d className="h-6 w-6 text-teal-400" />
                </div>
              </div>
              <div>
                <span className="font-bold text-2xl">
                  DfAM <span className="text-teal-400">2025</span>
                </span>
                <span className="block text-xs text-slate-400">Design for Additive Manufacturing</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              A comprehensive short-term training program exploring the cutting-edge techniques and applications of
              additive manufacturing technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-teal-500 mr-3"></span>
              Useful Links
            </h3>
            <ul className="space-y-4">
              {[
                { label: "Brochure", href: "#" },
                { label: "Registration Form", href: "#registration" },
                { label: "Payment Information", href: "#" },
                { label: "Reaching IIITDM Kancheepuram", href: "#" },
                { label: "Accommodation", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-teal-500 mr-3"></span>
              About
            </h3>
            <ul className="space-y-4">
              {[
                { label: "About DfAM", href: "#about" },
                { label: "Center for Smart Manufacturing", href: "#" },
                { label: "About Coordinator", href: "#" },
                { label: "About IIITDM Kancheepuram", href: "#" },
                { label: "Past Programs", href: "#" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-teal-400 transition-colors text-sm flex items-center group"
                  >
                    <ChevronRight className="h-4 w-4 mr-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 flex items-center">
              <span className="w-8 h-1 bg-teal-500 mr-3"></span>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-teal-400 mr-3 mt-0.5" />
                <address className="not-italic text-slate-400 text-sm">
                  Dr. Senthilkumaran Kumaraguru
                  <br />
                  Center for Smart Manufacturing
                  <br />
                  IIITDM Kancheepuram
                  <br />
                  Chennai – 600127, India
                </address>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-teal-400 mr-3" />
                <a href="tel:+914427476364" className="text-slate-400 hover:text-teal-400 transition-colors text-sm">
                  +91 44 2747 6364
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-teal-400 mr-3" />
                <a
                  href="mailto:skumaran@iiitdm.ac.in"
                  className="text-slate-400 hover:text-teal-400 transition-colors text-sm"
                >
                  skumaran@iiitdm.ac.in
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>
            Copyright ©{new Date().getFullYear()} Indian Institute of Information Technology, Design and Manufacturing,
            Kancheepuram (IIITDM Kancheepuram).
          </p>
          <p className="mt-2">
            The Government scheme logos are used with permission.
            <br />
            Created by Dr. Senthilkumaran and DineshKumar S | This template is made with ♥ by Colorlib
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 right-8 p-3 rounded-full bg-teal-500 text-white shadow-lg hover:bg-teal-600 transition-colors duration-300 z-50"
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
