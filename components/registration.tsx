"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, AlertCircle, Check, Star } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Registration() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const plans = [
    {
      title: "Students",
      subtitle: "UG/PG/Research",
      price: "₹1,770",
      originalPrice: "",
      features: [
        "Access to all sessions",
        "Workshop materials",
        "Certificate of participation",
        // "Lunch and refreshments",
        // "Includes processing fees",
      ],
    },
    {
      title: "Faculty",
      subtitle: "Academic Institutions",
      price: "₹3,540",
      originalPrice: "",
      features: [
        "Access to all sessions",
        "Workshop materials",
        "Certificate of participation",
        // "Lunch and refreshments",
        "Networking opportunities",
        // "Includes processing fees",
      ],
      featured: true,
    },
    {
      title: "Industry",
      subtitle: "Professionals & Others",
      price: "₹8,260",
      originalPrice: "",
      features: [
        "Access to all sessions",
        "Workshop materials",
        "Certificate of participation",
        // "Lunch and refreshments",
        "Networking opportunities",
        "Industry-specific insights",
        // "Includes processing fees",
      ],
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
    <section id="registration" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
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
              <Calendar className="h-8 w-8 text-teal-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Registration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">
              Information
            </span>
          </h2>

          <p className="text-lg text-slate-600">
            Secure your spot in this exclusive training program. Limited seats available.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants} className="relative">
              <Card
                className={cn(
                  "overflow-hidden transition-all duration-500 hover:shadow-2xl h-full",
                  plan.featured
                    ? "border-teal-200 shadow-xl relative z-10 scale-105"
                    : "border-slate-200 hover:border-teal-200",
                )}
              >
                <CardHeader
                  className={cn("pb-8", plan.featured ? "bg-gradient-to-br from-teal-50 to-teal-100/50" : "")}
                >
                  <CardTitle className="text-2xl">{plan.title}</CardTitle>
                  <CardDescription>{plan.subtitle}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-800">{plan.price}</span>
                    {plan.originalPrice && (
                      <span className="text-lg text-slate-500 line-through ml-2">{plan.originalPrice}</span>
                    )}
                    <p className="text-xs text-slate-500 mt-1">*Includes SBI processing fees</p>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-3 mt-1 flex-shrink-0">
                          <div className="h-5 w-5 rounded-full bg-teal-100 flex items-center justify-center">
                            <Check className="h-3 w-3 text-teal-600" />
                          </div>
                        </div>
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button
                    className={cn(
                      "w-full shadow-lg hover:shadow-xl transition-all duration-300",
                      plan.featured
                        ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 border-0"
                        : "bg-slate-800 hover:bg-slate-900",
                    )}
                    asChild
                  >
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSdzDzhDnS5ldEWWGh8lH0qUHQMf2_k11TuHXB9xLi9GHq7EXQ/viewform?usp=sharing&ouid=101024081643276331895"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Register Now
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Payment Details Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <Button
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-6 text-lg"
            asChild
          >
            <a href="/payment">
              View Payment Details
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
