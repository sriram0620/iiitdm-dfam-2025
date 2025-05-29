"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, Users, BookOpen, Layers } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Statistics() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [hasAnimated, setHasAnimated] = useState(false)

  const stats = [
    { icon: <Calendar className="h-8 w-8" />, value: 11, label: "Days", suffix: "", description: "Online learning" },
    {
      icon: <BookOpen className="h-8 w-8" />,
      value: 20,
      label: "Sessions",
      suffix: "+",
      description: "Expert-led workshops",
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: 60,
      label: "Participants",
      suffix: "",
      description: "First come, first serve basis",
    },
    {
      icon: <Layers className="h-8 w-8" />,
      value: 10,
      label: "Topics",
      suffix: "+",
      description: "Interactive sessions",
    },
  ]

  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    if (isInView && !hasAnimated) {
      setHasAnimated(true)

      // Animate counters
      stats.forEach((stat, index) => {
        const duration = 2000 // ms
        const steps = 60
        const increment = stat.value / steps
        let current = 0
        const timer = setInterval(() => {
          current += increment
          if (current >= stat.value) {
            current = stat.value
            clearInterval(timer)
          }
          setCounters((prev) => {
            const newCounters = [...prev]
            newCounters[index] = Math.floor(current)
            return newCounters
          })
        }, duration / steps)
      })
    }
  }, [isInView, hasAnimated, stats])

  return (
    <section ref={sectionRef} className="py-24 relative">
      {/* Background with 3D model */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-800 opacity-95"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/3d-printing-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.2,
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">
            Program{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">Highlights</span>
          </h2>
          <p className="text-lg text-white/80">
            An immersive online experience designed to provide comprehensive knowledge and hands-on skills in additive
            manufacturing through interactive sessions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn(
                "relative overflow-hidden",
                "p-8 rounded-2xl",
                "bg-gradient-to-br from-white/10 to-white/5",
                "backdrop-blur-md border border-white/10",
                "transform transition-all duration-500 hover:scale-105 hover:shadow-xl",
                "group",
              )}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-teal-700/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex justify-center mb-6 text-teal-400 p-4 bg-white/10 rounded-xl">{stat.icon}</div>

                <div className="text-5xl font-bold mb-2 text-white flex items-center justify-center">
                  <span className="mr-1">{counters[index]}</span>
                  <span className="text-teal-400">{stat.suffix}</span>
                </div>

                <div className="text-lg font-medium text-white mb-2">{stat.label}</div>
                <div className="text-sm text-white/60">{stat.description}</div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
