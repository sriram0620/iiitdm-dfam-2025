"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { FileText, Download, BookOpen, FileCode, Video, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Resources() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const resources = [
    {
      title: "Program Brochure",
      description: "Comprehensive overview of the DfAM 2025 program, including schedule, topics, and speakers.",
      icon: <FileText className="h-10 w-10 text-teal-500" />,
      link: "/AI_DfAM_Brochure_2025_updated_forwebsite,.pdf",
      buttonText: "Download PDF",
      buttonIcon: <Download className="h-4 w-4 mr-2" />,
      category: "document",
    },
    {
      title: "Introduction to DfAM",
      description: "Introductory reading material on Design for Additive Manufacturing principles and applications.",
      icon: <BookOpen className="h-10 w-10 text-teal-500" />,
      link: "#",
      buttonText: "Read Article",
      buttonIcon: <Link2 className="h-4 w-4 mr-2" />,
      category: "article",
    },
    {
      title: "Case Studies Collection",
      description: "Real-world examples of successful DfAM implementation across various industries.",
      icon: <FileCode className="h-10 w-10 text-teal-500" />,
      link: "#",
      buttonText: "Download PDF",
      buttonIcon: <Download className="h-4 w-4 mr-2" />,
      category: "document",
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
    <section id="resources" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
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
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-teal-50 mb-4">
              <FileText className="h-8 w-8 text-teal-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Program{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Resources</span>
          </h2>

          <p className="text-lg text-slate-600">
            Access preparatory materials and resources to enhance your learning experience during the program.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500",
                "border border-slate-100 hover:border-teal-100",
                "transform hover:-translate-y-2",
              )}
            >
              <div className="mb-6 p-3 bg-teal-50 rounded-xl inline-block">{resource.icon}</div>

              <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                {resource.title}
              </h3>

              <p className="text-slate-600 mb-6">{resource.description}</p>

              <Button
                className={cn(
                  "w-full shadow-md hover:shadow-lg transition-all duration-300",
                  resource.category === "document"
                    ? "bg-teal-500 hover:bg-teal-600 text-white"
                    : resource.category === "video"
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : resource.category === "gallery"
                        ? "bg-blue-500 hover:bg-blue-600 text-white"
                        : "bg-slate-800 hover:bg-slate-900 text-white",
                )}
                asChild
              >
                <a href={resource.link} target="_blank" rel="noopener noreferrer">
                  {resource.buttonIcon}
                  {resource.buttonText}
                </a>
              </Button>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
