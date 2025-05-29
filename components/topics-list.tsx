"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Layers, Lightbulb, Zap, Cpu, Maximize2, RefreshCw, Grid3X3, Repeat, Workflow, Boxes } from "lucide-react"

export default function TopicsList() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const topics = [
    {
      title: "Multi-Materials",
      description:
        "Design shells and assign material for realizing full-color multi-material products with digital materials.",
      icon: <Boxes className="h-10 w-10 text-teal-500" />,
      image: "/images/i1.jpg",
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      title: "Functional Integration",
      description:
        "Integrate as many technical functions as possible into as few parts as possible to take advantage of design freedom in AM.",
      icon: <Cpu className="h-10 w-10 text-teal-500" />,
      image: "/images/i2.jpg",
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      title: "Mass Customization",
      description:
        "Customize the design for personalization and flexibility and at the same time achieve the low cost of mass production.",
      icon: <RefreshCw className="h-10 w-10 text-teal-500" />,
      image: "/images/i3.jpg",
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "Part Consolidation",
      description:
        "Achieve part count reduction for ease of assembly and simplify the product design yet introduce more shape complexity.",
      icon: <Maximize2 className="h-10 w-10 text-teal-500" />,
      image: "/images/i4.jpg",
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Light-Weighting",
      description:
        "Introduce intricate lattice structures with structural optimization to reduce weight and efficiency of mobility solutions.",
      icon: <Zap className="h-10 w-10 text-teal-500" />,
      image: "/images/i5.jpg",
      gradient: "from-yellow-500/20 to-orange-500/20",
    },
    {
      title: "Heterogeneous Modeling",
      description:
        "Design multi-material and gradient structures to take advantage of possible material complexity in AM.",
      icon: <Grid3X3 className="h-10 w-10 text-teal-500" />,
      image: "/images/i6.jpg",
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Generative Design",
      description:
        "Iterative design process that outputs optimized design that meets real-world manufacturing constraints.",
      icon: <Workflow className="h-10 w-10 text-teal-500" />,
      image: "/images/i7.jpg",
      gradient: "from-emerald-500/20 to-green-500/20",
    },
    {
      title: "Hierarchical Structures",
      description: "Design repeating structures in macro, meso, micro, and nano scales to get superior performance.",
      icon: <Repeat className="h-10 w-10 text-teal-500" />,
      image: "/images/i8.jpg",
      gradient: "from-rose-500/20 to-pink-500/20",
    },
    {
      title: "Topology Optimization",
      description:
        "Optimize material layout within a given space, for a given set of loads, boundary conditions and constraints.",
      icon: <Layers className="h-10 w-10 text-teal-500" />,
      image: "/images/i9.jpg",
      gradient: "from-cyan-500/20 to-teal-500/20",
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
    <section id="topics" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-teal-50 mb-4">
              <Lightbulb className="h-8 w-8 text-teal-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            STTP List of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Topics</span>
          </h2>

          <p className="text-lg text-slate-600">
            Explore the comprehensive curriculum of advanced topics covered in the DfAM 2025 program.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700",
                "border border-slate-100",
                "transform hover:-translate-y-3 hover:scale-[1.02]",
              )}
            >
              {/* Image Container with Overlay */}
              <div className="h-56 relative overflow-hidden">
                <Image
                  src={topic.image || "/placeholder.svg"}
                  alt={topic.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent",
                    "transition-opacity duration-500",
                  )}
                ></div>

                {/* Colored Gradient Overlay on Hover */}
                <div
                  className={cn(
                    "absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                    topic.gradient,
                  )}
                ></div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-100 transition-colors duration-300">
                    {topic.title}
                  </h3>
                </div>

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
                    <div className="text-white">{topic.icon}</div>
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 relative">
                {/* Floating Icon for Desktop */}
                <div className="absolute -top-10 right-6 bg-white rounded-full p-3 shadow-lg border border-slate-100 group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
                  <div className="bg-teal-50 rounded-full p-2">{topic.icon}</div>
                </div>

                <div className="mt-2">
                  <p className="text-slate-600 leading-relaxed">{topic.description}</p>
                </div>

                {/* Hover Effect Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </div>

              {/* Subtle Glow Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-teal-400/10 to-teal-600/10"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-teal-50 to-teal-100/50 px-8 py-4 rounded-2xl border border-teal-200">
            <p className="text-teal-700 font-medium flex items-center justify-center">
              <Lightbulb className="h-5 w-5 mr-2 text-teal-500" />
              All topics include both theoretical knowledge and hands-on practical sessions
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
