"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { CreditCard, Users, GraduationCap, Building2, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function PricingOverview() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const pricingTiers = [
    {
      category: "Students",
      price: "₹1,770",
      originalPrice: "₹1,000",
      icon: <GraduationCap className="h-8 w-8 text-teal-500" />,
      description: "UG/PG/Research scholars",
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Faculty",
      price: "₹3,540",
      originalPrice: "₹3,000",
      icon: <Users className="h-8 w-8 text-teal-500" />,
      description: "Academic institutions",
      color: "from-teal-500 to-teal-600",
      featured: true,
    },
    {
      category: "Industry",
      price: "₹8,260",
      originalPrice: "₹7,000",
      icon: <Building2 className="h-8 w-8 text-teal-500" />,
      description: "Professionals & others",
      color: "from-purple-500 to-purple-600",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-12 h-12 mx-auto rounded-full bg-teal-50 mb-4">
              <CreditCard className="h-6 w-6 text-teal-500" />
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">
            Registration{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Fees</span>
          </h2>

          <p className="text-lg text-slate-600">
            Affordable pricing for all participants with secure online payment through SBI Collect.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={cn(
                "relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300",
                "border border-slate-100",
                tier.featured && "ring-2 ring-teal-500 scale-105",
              )}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-bold py-1 px-4 rounded-full">
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center">
                <div className="mb-4 p-3 bg-teal-50 rounded-xl inline-block">{tier.icon}</div>

                <h3 className="text-xl font-bold text-slate-800 mb-2">{tier.category}</h3>
                <p className="text-slate-600 text-sm mb-4">{tier.description}</p>

                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-3xl font-bold text-slate-800">{tier.price}</span>
                    <span className="text-lg text-slate-500 line-through">{tier.originalPrice}</span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">*Includes processing fees</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              asChild
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdzDzhDnS5ldEWWGh8lH0qUHQMf2_k11TuHXB9xLi9GHq7EXQ/viewform?usp=sharing&ouid=101024081643276331895"
                target="_blank"
                rel="noopener noreferrer"
              >
                Register Now <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>

            <Button variant="outline" className="border-slate-200 hover:bg-slate-50 text-slate-800" asChild>
              <Link href="/payment">
                <ExternalLink className="mr-2 h-4 w-4" /> Payment Details
              </Link>
            </Button>
          </div>

          <div className="mt-6 bg-teal-50 p-4 rounded-xl inline-block">
            <p className="text-teal-700 text-sm">
              <strong>Payment Method:</strong> Secure online payment through SBI Collect using Internet Banking, Credit
              Card, or Debit Card
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
