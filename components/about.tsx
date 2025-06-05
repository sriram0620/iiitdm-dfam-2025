"use client"

import { useRef } from "react"
import { PrinterIcon as Printer3d, Layers, Lightbulb, Target, Zap, Users } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const features = [
    {
      icon: <Printer3d className="h-10 w-10 text-teal-500" />,
      title: "Design Freedom",
      description: "Explore the unprecedented design freedom offered by additive manufacturing technologies.",
      image: "/3d-printing-design-freedom.jpg",
    },
    {
      icon: <Layers className="h-10 w-10 text-teal-500" />,
      title: "Optimization",
      description: "Learn techniques to optimize existing designs for additive manufacturing processes.",
      image: "/3d-printing-optimization.jpg",
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-teal-500" />,
      title: "Innovation",
      description: "Discover innovative approaches to design that leverage the capabilities of 3D printing.",
      image: "/3d-printing-innovation.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
        <div className="grid grid-cols-12 h-full">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="border-r border-slate-400/10 h-full"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-teal-50 mb-4 group hover:bg-teal-100 transition-colors duration-300">
              <Printer3d className="h-8 w-8 text-teal-500 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 group">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 group-hover:from-teal-600 group-hover:to-teal-700 transition-all duration-300">
              DfAM 2025
            </span>
          </h2>

          <div className="text-lg text-slate-600 space-y-6">
            <motion.p 
              className="leading-relaxed group hover:text-slate-800 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Artificial Intelligence (AI) has become an essential tool in optimizing and generating advanced designs that enhance functional integration, part geometry, product structure, and material stiffness. Modern designers and engineers face the challenge of mastering AI-driven methods and algorithms for Design for Additive Manufacturing (AI DfAM).
            </motion.p>
            <motion.p 
              className="leading-relaxed group hover:text-slate-800 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              This session offers a hands-on approach to applying design principles and AI algorithms to either improve existing designs or create entirely new ones at a significantly lower cost than traditional methods. Industries such as Automotive, Aerospace, Healthcare, and Consumer Electronics are rapidly adopting AI-DfAM to unlock unprecedented design freedom. Participants will gain practical insights into early-stage design problem-solving and learn to leverage the full potential of metal and polymer additive manufacturing processes.
            </motion.p>
            <motion.p 
              className="leading-relaxed group hover:text-slate-800 transition-colors duration-300"
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
             
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative bg-white rounded-2xl p-8",
                "border border-slate-100",
                "transform transition-all duration-500",
                "hover:shadow-2xl hover:shadow-teal-100/50",
                "hover:-translate-y-2",
                "overflow-hidden",
                "before:absolute before:inset-0 before:bg-gradient-to-br before:from-teal-50/0 before:to-teal-50/0",
                "before:transition-all before:duration-500",
                "hover:before:from-teal-50/50 hover:before:to-teal-50/20",
              )}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 p-3 bg-teal-50 rounded-xl inline-block group-hover:bg-teal-100 transition-colors duration-300">
                  <motion.div
                    className="text-teal-500"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {feature.icon}
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 group-hover:text-slate-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
