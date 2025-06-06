"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react"

export default function Faq() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Who can attend the DfAM 2025 program?",
      answer:
        "The program is open to faculty, research scholars, postgraduate and graduate students from various institutions, as well as delegates from industries. An understanding of various design methods and computer-aided design are the prerequisites for attending the program.",
    },
    {
      question: "What are the prerequisites for the program?",
      answer:
        "Participants should have a basic understanding of design methods and computer-aided design (CAD). Familiarity with 3D modeling software is beneficial but not mandatory as the program includes introductory sessions.",
    },
    {
      question: "Will certificates be provided upon completion?",
      answer:
        "Yes, certificates of participation will be provided to all attendees who complete the program. The certificates will be issued by IIITDM Kancheepuram, which is an Institute of National Importance.",
    },
    // {
    //   question: "Are there any accommodation facilities available?",
    //   answer:
    //     "Limited accommodation facilities are available on campus for outstation participants on a first-come, first-served basis. Please indicate your accommodation requirements during registration. Additional accommodation options near the campus can be provided upon request.",
    // },
    {
      question: "What software tools will be covered in the program?",
      answer:
        "The program will cover industry-standard software tools for design optimization, topology optimization, and additive manufacturing simulation. This includes but is not limited to Autodesk Fusion 360, Ansys, Materialise Magics, and nTopology.",
    },
    {
      question: "Is there a refund policy for registration fees?",
      answer:
        "Cancellations made before July 5, 2025 will receive a 50% refund. No refunds will be provided for cancellations after this date. However, substitution of participants from the same organization is allowed with prior notification.",
    },
    // {
    //   question: "Will the program include hands-on sessions?",
    //   answer:
    //     "Yes, the program includes multiple hands-on sessions where participants will work on real design challenges using various software tools. Participants will also have the opportunity to see 3D printing demonstrations.",
    // },
    {
      question: "How can I reach IIITDM Kancheepuram?",
      answer:
        "IIITDM Kancheepuram is located approximately 25 km from Chennai International Airport and 35 km from Chennai Central Railway Station. Detailed travel instructions and campus maps will be provided to registered participants. Transportation assistance can be arranged with prior request.",
    },
  ]

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
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
              <HelpCircle className="h-8 w-8 text-teal-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Questions</span>
          </h2>

          <p className="text-lg text-slate-600">
            Find answers to common questions about the DfAM 2025 program. If you don't see your question here, feel free
            to contact us.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300",
                  "border border-slate-100",
                  openIndex === index ? "shadow-lg" : "hover:shadow-lg",
                )}
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center"
                  onClick={() => toggleQuestion(index)}
                >
                  <h3 className="text-lg font-medium text-slate-800">{faq.question}</h3>
                  <div
                    className={cn(
                      "ml-4 flex-shrink-0 p-2 rounded-full transition-colors duration-300",
                      openIndex === index ? "bg-teal-50" : "bg-slate-100",
                    )}
                  >
                    {openIndex === index ? (
                      <ChevronUp className={cn("h-4 w-4", openIndex === index ? "text-teal-500" : "text-slate-500")} />
                    ) : (
                      <ChevronDown
                        className={cn("h-4 w-4", openIndex === index ? "text-teal-500" : "text-slate-500")}
                      />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 text-slate-600 border-t border-slate-100 pt-4">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-block bg-teal-50 px-6 py-4 rounded-xl">
              <p className="text-teal-700 font-medium">
                Still have questions?{" "}
                <a href="./contact" className="text-teal-600 underline hover:text-teal-800">
                  Contact us
                </a>{" "}
                for more information.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
