"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { X } from "lucide-react"

export default function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setIsVisible(true)
      }
    }, 5000)

    const scrollHandler = () => {
      if (window.scrollY > 1000 && !isDismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", scrollHandler)

    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", scrollHandler)
    }
  }, [isDismissed])

  const dismiss = () => {
    setIsVisible(false)
    setIsDismissed(true)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 20 }}
          className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 border border-slate-100 relative">
            <button
              onClick={dismiss}
              className="absolute top-3 right-3 p-1 rounded-full hover:bg-slate-100 transition-colors duration-200"
              aria-label="Dismiss"
            >
              <X className="h-4 w-4 text-slate-500" />
            </button>

            <div className="flex items-center mb-4">
              <div className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse"></div>
              <span className="text-xs font-medium text-teal-500">Limited spots available</span>
            </div>

            <h3 className="text-lg font-bold text-slate-800 mb-2">Secure Your Spot Today!</h3>
            <p className="text-sm text-slate-600 mb-4">
              Only 12 seats remaining for the DfAM 2025 program. Register now to avoid disappointment.
            </p>

            <div className="flex space-x-3">
              <Button
                asChild
                className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <Link href="#registration">Register Now</Link>
              </Button>
              <Button
                variant="outline"
                className="flex-shrink-0 border-slate-200 hover:bg-slate-50 text-slate-800"
                onClick={dismiss}
              >
                Later
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
