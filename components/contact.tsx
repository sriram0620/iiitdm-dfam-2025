"use client"

import type React from "react"

import { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    institution: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after submission
      setFormState({
        name: "",
        email: "",
        institution: "",
        phone: "",
        message: "",
      })

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-800">Registration Inquiry</h3>

            {isSubmitted ? (
              <div className="bg-teal-50 border border-teal-100 rounded-xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-100 rounded-full mb-4">
                  <CheckCircle className="h-8 w-8 text-teal-600" />
                </div>
                <h4 className="text-xl font-bold text-teal-800 mb-2">Thank You!</h4>
                <p className="text-teal-700">
                  Your inquiry has been submitted successfully. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-slate-700">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-slate-700">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="institution" className="text-slate-700">
                      Institution/Organization
                    </Label>
                    <Input
                      id="institution"
                      name="institution"
                      value={formState.institution}
                      onChange={handleChange}
                      placeholder="Your institution or organization"
                      className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-slate-700">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-slate-700">
                    Message (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Any specific questions or requirements?"
                    className="border-slate-200 focus:border-teal-500 focus:ring-teal-500"
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className={cn(
                    "w-full shadow-lg hover:shadow-xl transition-all duration-300",
                    "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 border-0",
                  )}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8DfamC5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Submit Inquiry
                    </span>
                  )}
                </Button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-xl p-8 text-white h-full">
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
                    <p className="text-slate-300">+91 44 2747 6364</p>
                    <p className="text-sm text-slate-400 mt-1">Monday to Friday, 9am to 5pm</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-teal-500/20 p-3 rounded-full text-teal-400">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg">Address</h4>
                    <p className="text-slate-300">
                      Center for Smart Manufacturing
                      <br />
                      IIITDM Kancheepuram
                      <br />
                      Chennai – 600127, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-700">
                <h4 className="font-bold text-lg mb-4">Program Coordinator</h4>
                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="h-16 w-16 rounded-full overflow-hidden relative">
                      <Image src="/coordinator.png" alt="Dr. Senthilkumaran Kumaraguru" fill className="object-cover" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white font-medium">Dr. Senthilkumaran Kumaraguru</p>
                    <p className="text-sm text-slate-400">
                      Center for Smart Manufacturing
                      <br />
                      IIITDM Kancheepuram
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
