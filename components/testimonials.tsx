"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const testimonials = [
    {
      quote:
        "The DfAM program provided me with invaluable insights into optimizing designs for additive manufacturing. The hands-on sessions were particularly enlightening.",
      name: "Dr. Priya Sharma",
      title: "Associate Professor, IIT Delhi",
      image: "/testimonial-1.png",
    },
    {
      quote:
        "As an industry professional, I found the practical applications and case studies extremely relevant. The knowledge gained has directly impacted our product development process.",
      name: "Rajesh Kumar",
      title: "Senior Design Engineer, Aerospace Ltd.",
      image: "/testimonial-2.png",
    },
    {
      quote:
        "The program offered a perfect balance of theoretical knowledge and practical skills. The faculty's expertise and the networking opportunities were exceptional.",
      name: "Ananya Patel",
      title: "Research Scholar, IISC Bangalore",
      image: "/testimonial-3.png",
    },
    {
      quote:
        "DfAM 2025 exceeded my expectations in every way. The curriculum was comprehensive and the instructors were experts in their fields. I've already applied several techniques in my work.",
      name: "Dr. Vikram Singh",
      title: "R&D Manager, Automotive Solutions",
      image: "/testimonial-4.png",
    },
    {
      quote:
        "The hands-on workshops were the highlight for me. Being able to immediately apply the concepts we learned made the experience incredibly valuable.",
      name: "Meera Desai",
      title: "Product Designer, Innovation Labs",
      image: "/testimonial-5.png",
    },
    {
      quote:
        "I appreciated the focus on both theoretical foundations and practical applications. The program has significantly enhanced my understanding of design for additive manufacturing.",
      name: "Prof. Arjun Nair",
      title: "Faculty, Engineering Department, VIT",
      image: "/testimonial-6.png",
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
    <section id="testimonials" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50 to-white"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            What{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
              Participants Say
            </span>
          </h2>
          <p className="text-lg text-slate-600">
            Hear from past participants about their experience with our DfAM program.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "bg-white rounded-2xl p-8 shadow-xl",
                "border border-slate-100",
                "transform transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl",
                "relative",
              )}
            >
              <div className="absolute top-6 right-6 text-teal-400 opacity-20">
                <Quote className="h-16 w-16" />
              </div>

              <div className="relative z-10">
                <p className="text-slate-700 mb-6 italic">"{testimonial.quote}"</p>

                <div className="flex items-center">
                  <div className="mr-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden relative">
                      <Image
                        src={testimonial.image || "/placeholder.svg?height=100&width=100&query=professional%20portrait"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    <p className="text-sm text-slate-500">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-teal-50 px-6 py-3 rounded-full">
            <p className="text-teal-700 font-medium">
              Join over 200+ professionals who have enhanced their skills through our programs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
