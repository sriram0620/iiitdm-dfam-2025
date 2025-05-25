"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Users, ExternalLink, Mail, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Speakers() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const speakers = [
    {
      name: "Dr. Senthilkumaran Kumaraguru",
      title: "Program Coordinator",
      organization: "IIITDM Kancheepuram",
      bio: "Expert in additive manufacturing with over 15 years of research experience in design optimization and 3D printing technologies.",
      image: "/speakers/speaker-1.png",
      linkedin: "#",
      email: "skumaran@iiitdm.ac.in",
    },
    {
      name: "Prof. Rajkumar V",
      title: "Professor",
      organization: "IIITDM Kancheepuram",
      bio: "Specializes in design freedom in additive manufacturing and has published extensively on innovative AM applications.",
      image: "/speakers/speaker-2.png",
      linkedin: "#",
      email: "rajkumar@iiitdm.ac.in",
    },
    {
      name: "Dr. Prabu S",
      title: "Associate Professor",
      organization: "IIITDM Kancheepuram",
      bio: "Expert in topology optimization with significant industry collaboration experience in aerospace applications.",
      image: "/speakers/speaker-3.png",
      linkedin: "#",
      email: "prabu@iiitdm.ac.in",
    },
    {
      name: "Dr. Arivazhagan A",
      title: "Assistant Professor",
      organization: "IIITDM Kancheepuram",
      bio: "Researcher focused on lattice structures for AM with expertise in lightweight design for automotive applications.",
      image: "/speakers/speaker-4.png",
      linkedin: "#",
      email: "arivazhagan@iiitdm.ac.in",
    },
    {
      name: "Dr. Jayakrishna K",
      title: "Associate Professor",
      organization: "IIITDM Kancheepuram",
      bio: "Specializes in material considerations in DfAM with focus on metal and composite materials for 3D printing.",
      image: "/speakers/speaker-5.png",
      linkedin: "#",
      email: "jayakrishna@iiitdm.ac.in",
    },
    {
      name: "Dr. Manoj Kumar M",
      title: "Assistant Professor",
      organization: "IIITDM Kancheepuram",
      bio: "Expert in process-specific design constraints for various additive manufacturing technologies.",
      image: "/speakers/speaker-6.png",
      linkedin: "#",
      email: "manojkumar@iiitdm.ac.in",
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
    <section id="speakers" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
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
              <Users className="h-8 w-8 text-teal-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Expert{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Speakers</span>
          </h2>

          <p className="text-lg text-slate-600">
            Learn from leading experts in the field of additive manufacturing and design optimization.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500",
                "border border-slate-100",
                "transform hover:-translate-y-2",
                "w-full"
              )}
            >
              <div className="aspect-[3/4] relative w-full">
                <Image
                  src={speaker.image || "/placeholder.svg?height=600&width=400&query=professional%20portrait"}
                  alt={speaker.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <p className="text-white/90 text-sm mb-4">{speaker.bio}</p>
                    <div className="flex space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        asChild
                      >
                        <a href={`mailto:${speaker.email}`}>
                          <Mail className="h-4 w-4 mr-1" /> Email
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        asChild
                      >
                        <a href={speaker.linkedin} target="_blank" rel="noopener noreferrer">
                          <Linkedin className="h-4 w-4 mr-1" /> LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-teal-600 transition-colors duration-300">
                  {speaker.name}
                </h3>
                <p className="text-teal-600 font-medium">{speaker.title}</p>
                <p className="text-slate-500 text-sm">{speaker.organization}</p>
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
          <Button
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
            asChild
          >
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" /> View All Speakers & Detailed Profiles
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
