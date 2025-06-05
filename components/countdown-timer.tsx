"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import { Clock, Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CountdownTimer() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Set the target date to July 12, 2025 (registration deadline)
  const targetDate = new Date("2025-07-10T23:59:59").getTime()

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference <= 0) {
        setIsExpired(true)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/countdown-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-teal-400 mr-2" />
                <h3 className="text-xl font-medium text-white">Registration Deadline</h3>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {isExpired ? (
                  "Registration Closed"
                ) : (
                  <>
                    Time is <span className="text-teal-400">Running Out</span>
                  </>
                )}
              </h2>

              <p className="text-white/80 mb-6">
                {isExpired
                  ? "The registration deadline has passed. Please contact us for late registration possibilities."
                  : "Secure your spot in the DfAM 2025 program before registration closes. Limited seats available!"}
              </p>

              <div className="flex items-center mb-8">
                <Calendar className="h-5 w-5 text-teal-400 mr-2" />
                <span className="text-white/80">Deadline: July 12, 2025</span>
              </div>

              <Button
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
                asChild
              >
                <Link href="#registration">
                  Register Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div>
              {isExpired ? (
                <div className="bg-white/5 backdrop-blur-md rounded-xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-white mb-4">Registration Closed</h3>
                  <p className="text-white/80">
                    The registration deadline has passed. Please contact us for any inquiries about late registration.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-4 gap-4">
                  {[
                    { label: "Days", value: timeLeft.days },
                    { label: "Hours", value: timeLeft.hours },
                    { label: "Minutes", value: timeLeft.minutes },
                    { label: "Seconds", value: timeLeft.seconds },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl p-4 text-center border border-white/10"
                    >
                      <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                        {String(item.value).padStart(2, "0")}
                      </div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">{item.label}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-8 bg-white/5 backdrop-blur-md rounded-xl p-4 border border-white/10">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-teal-400 mr-2 animate-pulse"></div>
                  <span className="text-white/80 text-sm">
                    <strong className="text-teal-400">Registration is now open</strong> - Secure your spot today
                  </span>
                </div>
                <div className="mt-2 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-teal-400 to-teal-500 w-[20%]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
