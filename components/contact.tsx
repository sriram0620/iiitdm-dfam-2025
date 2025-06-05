"use client"

import type React from "react"
import { useRef } from "react"
import { Mail, Phone, MapPin } from "lucide-react"
import { motion, useInView } from "framer-motion"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Us</span>
          </h2>
          <p className="text-lg text-slate-600">Have questions about the program? Get in touch with us.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-teal-500/20 p-3 rounded-full text-teal-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-slate-300">skumaran@iiitdm.ac.in</p>
                  <p className="text-sm text-slate-400 mt-1">For registration and general inquiries</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-500/20 p-3 rounded-full text-teal-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-slate-300">+91 44 2747 6300</p>
                  <p className="text-sm text-slate-400 mt-1">Available during office hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-500/20 p-3 rounded-full text-teal-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Phone (Research Scholar)</h4>
                  <p className="text-slate-300">8220916354</p>
                  <p className="text-sm text-slate-400 mt-1">PRABU A, Research Scholar, Department of Mechanical Engineering, IIITDM,Kancheepuram, Chennai-600127</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-teal-500/20 p-3 rounded-full text-teal-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-slate-300">Design for Adiitive Manufacturing Lab,</p>
                  <p className="text-slate-300"> Department of Mechanical Enginering , IIITDM,Kancheepuram,</p>
                  <p className="text-slate-300">Near kandigai,Vandaloor-Kelambakkam road</p>
                  <p className="text-slate-300">Chennai- 600127</p>
                  <p className="text-slate-300">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
