"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { MapPin, Award, BookOpen, Users } from "lucide-react"

export default function Institute() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Organizing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Institute</span>
          </h2>
          <p className="text-lg text-slate-600">
            Learn about the prestigious institution hosting the DfAM 2025 program.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-[4/3] relative">
                <Image src="/images/l1.jpg" alt="IIITDM Kancheepuram Campus" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent"></div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full flex items-center">
                    <MapPin className="h-4 w-4 text-white mr-2" />
                    <span className="text-white text-sm">Chennai, India</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">IIITDM Kancheepuram</h3>
                <p className="text-white/80">An Institute of national importance established by Ministry of Education 
                </p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 text-center">
                <Award className="h-6 w-6 text-teal-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-800">Institute of National Importance</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 text-center">
                <BookOpen className="h-6 w-6 text-teal-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-800">Established in 2007</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-lg border border-slate-100 text-center">
                <Users className="h-6 w-6 text-teal-500 mx-auto mb-2" />
                <p className="text-sm font-medium text-slate-800">Diverse Programs</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800">About IIITDM Kancheepuram</h3>

            <div className="prose text-slate-600 mb-8">
              <p className="mb-4">
                IIITDM Kancheepuram was established in the year 2007 to focus on Information Technology enabled Design
                and Manufacturing education for catering to the needs of the industry.
              </p>
              <p className="mb-4">
                It is one of the Institutes of National importance, fully funded by MHRD, Govt. of India. The institute
                offers four undergraduate programs, five dual degree programs, four post graduate programs and doctoral
                programs.
              </p>
              <p>
                The courses are more oriented towards design and manufacturing, where the students get specialized in
                their domain with design as a connecting thread.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100/50 rounded-2xl p-6 shadow-lg border border-teal-100">
              <h4 className="text-xl font-bold mb-4 text-slate-800">Department of Mechanical Engineering </h4>
              <p className="text-slate-700 mb-6">
                The Department of Mechanical Engineering at IIITDM Kancheepuram is dedicated to advancing manufacturing
                technologies through research, education, and industry collaboration. The center focuses on additive
                manufacturing, smart materials, and digital manufacturing processes.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4 shadow-md border border-teal-100">
                  <h5 className="font-bold text-slate-800 mb-2">Research Areas</h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Additive Manufacturing</li>
                    <li>• Design Optimization</li>
                    <li>• Smart Materials</li>
                    <li>• Digital Manufacturing</li>
                  </ul>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-md border border-teal-100">
                  <h5 className="font-bold text-slate-800 mb-2">Facilities</h5>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>• Advanced 3D Printers</li>
                    <li>• Material Testing Lab</li>
                    <li>• Design Software Suite</li>
                    <li>• Simulation Tools</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
