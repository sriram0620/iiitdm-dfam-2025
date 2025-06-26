"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  CreditCard,
  Globe,
  CheckCircle,
  ArrowRight,
  Download,
  AlertCircle,
  Users,
  GraduationCap,
  Building2,
  ExternalLink,
  Smartphone,
  Monitor,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PaymentDetails() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeStep, setActiveStep] = useState(0)

  const pricingTiers = [
    {
      category: "Students",
      price: "₹1,770",
      originalPrice: "",
      icon: <GraduationCap className="h-6 w-6 text-blue-500" />,
      description: "UG/PG/Research scholars",
      color: "from-blue-500 to-blue-600",
    },
    {
      category: "Faculty",
      price: "₹3,540",
      originalPrice: "",
      icon: <Users className="h-6 w-6 text-teal-500" />,
      description: "Academic institutions",
      color: "from-teal-500 to-teal-600",
    },
    {
      category: "Industry",
      price: "₹8,260",
      originalPrice: "",
      icon: <Building2 className="h-6 w-6 text-purple-500" />,
      description: "Professionals & others",
      color: "from-purple-500 to-purple-600",
    },
  ]

  const paymentSteps = [
    {
      step: 1,
      title: "Access SBI Collect",
      description: "Open the SBI Collect portal in your browser",
      details: (
        <span>
          Visit{" "}
          <a
            href="https://www.onlinesbi.sbi/sbicollect/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-600 hover:text-teal-700 underline font-medium"
            onClick={(e) => e.stopPropagation()}
          >
            https://www.onlinesbi.sbi/sbicollect/
          </a>{" "}
          and click on 'State Bank Collect'
        </span>
      ),
      icon: <Globe className="h-6 w-6 text-blue-500" />,
    },
    {
      step: 2,
      title: "Select Institution",
      description: "Choose Tamil Nadu and find IIITDM",
      details:
        "Select State as 'Tamil Nadu', Type as 'Educational Institutions', then select 'IIITDM –EDUCATIONAL EVENTS'",
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
    },
    {
      step: 3,
      title: "Choose Payment Category",
      description: "Select AIDfAM as payment category",
      details: "Select the payment category as 'AIDfAM' and choose your participant type",
      icon: <Users className="h-6 w-6 text-teal-500" />,
    },
    {
      step: 4,
      title: "Enter Details",
      description: "Fill in your personal information",
      details: "Enter Name, Email ID, Mobile number, and Date of birth as required",
      icon: <CreditCard className="h-6 w-6 text-purple-500" />,
    },
    {
      step: 5,
      title: "Make Payment",
      description: "Complete payment using your preferred method",
      details: "Choose from Internet Banking, Credit Card, or Debit Card and complete the transaction",
      icon: <Shield className="h-6 w-6 text-orange-500" />,
    },
    {
      step: 6,
      title: "Download Receipt",
      description: "Save your payment receipt",
      details: "Download the receipt and note down the DU Number for future reference",
      icon: <Download className="h-6 w-6 text-indigo-500" />,
    },
  ]

  const paymentMethods = [
    {
      name: "Internet Banking",
      icon: <Monitor className="h-8 w-8 text-blue-500" />,
      description: "Secure online banking",
    },
    {
      name: "Credit Card",
      icon: <CreditCard className="h-8 w-8 text-green-500" />,
      description: "Visa, MasterCard, etc.",
    },
    {
      name: "Debit Card",
      icon: <Smartphone className="h-8 w-8 text-purple-500" />,
      description: "All major banks supported",
    },
  ]

  return (
    <section ref={sectionRef} className="py-12 sm:py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="payment-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0, 0, 0, 0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#payment-grid)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Enhanced Header Section */}
          <div className="relative mb-12">
            {/* Decorative elements */}
            <div className="absolute -top-10 -left-10 w-20 h-20 bg-teal-100 rounded-full opacity-50 blur-xl"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
            
            {/* Main icon with enhanced styling */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full blur-lg opacity-30 transform scale-110"></div>
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-teal-600 shadow-lg">
                <CreditCard className="h-10 w-10 text-white" />
              </div>
            </div>

            {/* Enhanced title with gradient and animation */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-slate-800">Payment </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600 animate-gradient">
                Details
              </span>
            </h1>

            {/* Enhanced description */}
            <p className="text-lg sm:text-xl text-slate-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Complete your registration payment securely through SBI Collect. Follow our step-by-step guide below to ensure a smooth payment process.
            </p>

            {/* Enhanced alert box */}
            <div className="bg-gradient-to-r from-amber-50 to-amber-100 p-4 sm:p-8 rounded-2xl border border-amber-200 shadow-lg max-w-3xl mx-auto">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="p-2 bg-amber-100 rounded-full">
                    <AlertCircle className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-amber-800 text-base sm:text-lg mb-2">Important Payment Information</h3>
                  <p className="text-amber-700 leading-relaxed">
                    Payment must be made through SBI Collect only. The fees include processing charges. Please save your
                    payment receipt and DU Number for future reference. For any payment-related queries, contact our support team.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Pricing Overview */}
        <motion.div
          className="mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-800">Registration Fees</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {pricingTiers.map((tier, index) => (
              <Card
                key={index}
                className={cn("overflow-hidden transition-all duration-300 hover:shadow-xl", "border border-slate-200")}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mb-4 p-3 bg-slate-50 rounded-xl inline-block mx-auto">{tier.icon}</div>
                  <CardTitle className="text-xl">{tier.category}</CardTitle>
                  <p className="text-slate-600 text-sm">{tier.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-slate-800">{tier.price}</span>
                      <span className="text-lg text-slate-500 line-through">{tier.originalPrice}</span>
                    </div>
                    <p className="text-xs text-slate-500">*Includes SBI processing fees</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* SBI Collect Procedure Download */}
        <motion.div
          className="mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
              <div className="flex-1">
                                  <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-3">SBI Collect Procedure Guide</h3>
                <p className="text-slate-600 mb-4">
                  Download our detailed step-by-step guide for making payments through SBI Collect. This guide will help you navigate through the payment process smoothly.
                </p>
                <Button
                  onClick={() => window.open('/Sbi_Collect_Procedure.pdf', '_blank')}
                  className="bg-teal-500 hover:bg-teal-600 text-white"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Guide
                </Button>
              </div>
              <div className="flex items-center justify-center w-24 h-24 bg-teal-50 rounded-full">
                <Download className="h-12 w-12 text-teal-500" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          className="mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-slate-800">Accepted Payment Methods</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-slate-100 text-center hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4 p-3 bg-slate-50 rounded-xl inline-block">{method.icon}</div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{method.name}</h3>
                <p className="text-slate-600 text-sm">{method.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Step-by-Step Guide */}
        <motion.div
          className="mb-8 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-slate-800">Step-by-Step Payment Guide</h2>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Progress line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-200"></div>

              <div className="space-y-4 sm:space-y-8">
                {paymentSteps.map((step, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative flex items-start space-x-4 sm:space-x-6 p-4 sm:p-6 rounded-2xl transition-all duration-300 cursor-pointer",
                      activeStep === index
                        ? "bg-teal-50 border-2 border-teal-200 shadow-lg"
                        : "bg-white border border-slate-100 hover:shadow-md",
                    )}
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step indicator */}
                    <div
                      className={cn(
                        "absolute left-8 w-4 h-4 rounded-full transform -translate-x-1/2 border-4 border-white z-10",
                        activeStep === index ? "bg-teal-500" : "bg-slate-300",
                      )}
                    ></div>

                    <div className="flex-shrink-0 p-3 bg-white rounded-xl shadow-md">{step.icon}</div>

                    <div className="flex-grow">
                      <div className="flex items-center mb-2">
                        <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded-full mr-3">
                          STEP {step.step}
                        </span>
                        <h3 className="text-lg sm:text-xl font-bold text-slate-800">{step.title}</h3>
                      </div>
                      <p className="text-slate-600 mb-2">{step.description}</p>
                      <p className="text-sm text-slate-500">{step.details}</p>
                    </div>

                    <ArrowRight
                      className={cn(
                        "h-5 w-5 transition-colors duration-300",
                        activeStep === index ? "text-teal-500" : "text-slate-400",
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Access */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Ready to Make Payment?</h2>
            <p className="text-teal-100 mb-4 sm:mb-6">
              Click the button below to access SBI Collect portal and complete your registration payment.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Button
                className="bg-white text-teal-600 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <a href="https://www.onlinesbi.sbi/sbicollect/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Open SBI Collect
                </a>
              </Button>

              <Button 
                className="bg-teal-400 hover:bg-teal-300 text-white shadow-lg hover:shadow-xl transition-all duration-300 border-0" 
                asChild
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdzDzhDnS5ldEWWGh8lH0qUHQMf2_k11TuHXB9xLi9GHq7EXQ/viewform?usp=sharing&ouid=101024081643276331895"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registration Form <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Support Information */}
        <motion.div
          className="mt-8 sm:mt-16 bg-slate-50 rounded-2xl p-4 sm:p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-4 text-center">Need Help with Payment?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div className="text-center">
              <h4 className="font-bold text-slate-800 mb-2">Technical Support</h4>
              <p className="text-slate-600 text-sm">
                For SBI Collect technical issues, contact SBI customer support or visit your nearest SBI branch.
              </p>
            </div>
            <div className="text-center">
              <h4 className="font-bold text-slate-800 mb-2">Program Queries</h4>
              <p className="text-slate-600 text-sm">
                For registration and program-related queries, contact us at{" "}
                <a href="mailto:skumaran@iiitdm.ac.in" className="text-teal-600 hover:underline">
                  skumaran@iiitdm.ac.in
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
