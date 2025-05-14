"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, AlertCircle, Check, Star } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Registration() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const plans = [
    {
      title: "Students",
      subtitle: "UG/PG/Research",
      price: "₹1,000",
      features: [
        "Access to all sessions",
        "Workshop materials",
        "Certificate of participation",
        "Lunch and refreshments",
      ],
    },
    {
      title: "Faculty",
      subtitle: "Academic Institutions",
      price: "₹3,000",
      features: [
        "Access to all sessions",
        "Workshop materials",
        "Certificate of participation",
        "Lunch and refreshments",
        "Networking opportunities",
      ],
      featured: true,
    },
    {
      title: "Industry",
      subtitle: "Professionals & Others",
      price: "₹7,000",
      features: [
        "Access to all sessions",
        "Workshop materials",
        "Certificate of participation",
        "Lunch and refreshments",
        "Networking opportunities",
        "Industry-specific insights",
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
              {plan.featured && (
                <div className="absolute -top-5 inset-x-0 flex justify-center">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-sm font-bold py-1 px-4 rounded-full shadow-lg flex items-center">
                    <Star className="h-4 w-4 mr-1" /> MOST POPULAR
                  </div>
                </div>
              )}

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
                    <Link href="#contact">Register Now</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 border border-slate-100"
        >
          <h3 className="text-2xl font-bold mb-8 text-slate-800 text-center">Important Dates</h3>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <div className="absolute top-0 bottom-0 left-6 border-l-2 border-dashed border-teal-200"></div>

              <div className="relative flex items-start space-x-4 pb-8">
                <div className="absolute left-6 w-3 h-3 bg-teal-500 rounded-full transform -translate-x-1/2 mt-1.5"></div>
                <div className="bg-teal-50 p-3 rounded-full text-teal-600 ml-8">
                  <Calendar className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-slate-800">Registration Deadline</h4>
                  <p className="text-slate-600">July 10, 2025</p>
                  <p className="text-sm text-slate-500 mt-1">Spot registration with prior intimation</p>
                </div>
              </div>

              <div className="relative flex items-start space-x-4">
                <div className="absolute left-6 w-3 h-3 bg-teal-500 rounded-full transform -translate-x-1/2 mt-1.5"></div>
                <div className="bg-teal-50 p-3 rounded-full text-teal-600 ml-8">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-lg text-slate-800">Program Dates</h4>
                  <p className="text-slate-600">July 14-25, 2025 (Excluding July 20)</p>
                  <p className="text-sm text-slate-500 mt-1">11 full days of sessions</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100/50 rounded-xl p-6 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertCircle className="h-6 w-6 text-amber-500" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-amber-800 mb-2">Limited Availability</h4>
                <p className="text-amber-700">
                  Registration is limited to 60 participants to ensure quality interaction and personalized attention.
                  Early registration is recommended to secure your spot.
                </p>
                <div className="mt-4 pt-4 border-t border-amber-200">
                  <div className="flex items-center justify-between">
                    <span className="text-amber-800 font-medium">Spots Remaining</span>
                    <span className="text-amber-800 font-bold">12</span>
                  </div>
                  <div className="mt-2 h-2 bg-amber-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-amber-500 to-amber-600 w-[20%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
