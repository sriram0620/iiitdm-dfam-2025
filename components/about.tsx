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
    {
      icon: <Target className="h-10 w-10 text-teal-500" />,
      title: "Practical Skills",
      description: "Gain hands-on experience with industry-standard tools and methodologies.",
      image: "/3d-printing-practical.jpg",
    },
    {
      icon: <Zap className="h-10 w-10 text-teal-500" />,
      title: "Future Technologies",
      description: "Stay ahead with knowledge of emerging trends and technologies in additive manufacturing.",
      image: "/3d-printing-future.jpg",
    },
    {
      icon: <Users className="h-10 w-10 text-teal-500" />,
      title: "Networking",
      description: "Connect with industry experts and peers in the field of additive manufacturing.",
      image: "/3d-printing-networking.png",
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
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-teal-50 mb-4">
              <Printer3d className="h-8 w-8 text-teal-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            About{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">DfAM 2025</span>
          </h2>

          <div className="text-lg text-slate-600">
            <p className="mb-4">
              This workshop focuses on DfAM methods that identifies opportunities for increased complexities in design.
              The aim of the workshop is to understand the new found design freedom in Additive Manufacturing and
              optimizing the existing design using various tools.
            </p>
            <p>
              Faculty, Research scholars, Postgraduate and Graduate students from various institutions and delegates
              from the industries can register for the program. An understanding of various design methods and,
              computer-aided design are the prerequisites for attending the program.
            </p>
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
                "group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500",
                "border border-slate-100 hover:border-teal-100",
                "transform hover:-translate-y-2",
                "overflow-hidden",
              )}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
              </div>

              <div className="relative z-10">
                <div className="mb-6 p-3 bg-teal-50 rounded-xl inline-block">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
