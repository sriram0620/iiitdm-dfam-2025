"use client"

import { useRef, useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Coffee, BookOpen, Users, Calendar, Ban } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export default function Schedule() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeDayGroup, setActiveDayGroup] = useState(0)

  // Sample schedule data
  const days = [
    {
      date: "July 14, 2025",
      day: 1,
      sessions: [
        { time: "09:00 - 10:00", title: "Registration & Welcome", type: "break" },
        {
          time: "10:00 - 11:30",
          title: "Introduction to AI Enabled Additive Manufacturing",
          speaker: "Dr. Senthilkumaran Kumaraguru",
          type: "lecture",
        },
        { time: "11:30 - 11:45", title: "Coffee Break", type: "break" },
        { time: "11:45 - 13:00", title: "Design Freedom in AM", speaker: "Prof. Rajkumar V", type: "lecture" },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        {
          time: "14:00 - 15:30",
          title: "CAD for Additive Manufacturing",
          speaker: "Dr. Senthilkumaran K",
          type: "workshop",
        },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Hands-on Session: Basic Design", type: "workshop" },
      ],
    },
    {
      date: "July 15, 2025",
      day: 2,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "AI-Driven Topology Optimization",
          speaker: "Dr. Prabu S",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "Machine Learning for Lattice Structures",
          speaker: "Dr. Arivazhagan A",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        {
          time: "14:00 - 15:30",
          title: "Software Tools for AI-Driven Optimization",
          type: "workshop",
        },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Hands-on Session: AI Optimization", type: "workshop" },
      ],
    },
    {
      date: "July 16, 2025",
      day: 3,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "Material Considerations in DfAM",
          speaker: "Dr. Jayakrishna K",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "AI for Process Parameter Optimization",
          speaker: "Dr. Manoj Kumar M",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        {
          time: "14:00 - 15:30",
          title: "Case Studies: AI in Industrial Applications",
          type: "lecture",
        },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Group Activity: AI Design Challenge", type: "workshop" },
      ],
    },
    {
      date: "July 17, 2025",
      day: 4,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "Neural Networks for Multi-material Design",
          speaker: "Dr. Vimal KEK",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "AI-Driven Design Validation",
          speaker: "Dr. Senthilkumaran K",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Hands-on: AI Simulation for AM", type: "workshop" },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Design Challenge Continued", type: "workshop" },
      ],
    },
    {
      date: "July 18, 2025",
      day: 5,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "Generative AI for Design",
          speaker: "Dr. Ramesh Kumar",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "Computer Vision in Quality Control",
          speaker: "Dr. Priya Sundaram",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Panel Discussion: AI in Manufacturing", type: "panel" },
        { time: "15:30 - 16:00", title: "Day 5 Summary & Discussion", type: "break" },
      ],
    },
    {
      date: "July 19, 2025",
      day: 6,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "Deep Learning for Material Science",
          speaker: "Dr. Anand Krishnan",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "Reinforcement Learning in Process Control",
          speaker: "Dr. Meera Nair",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        {
          time: "14:00 - 15:30",
          title: "AI Tools for Additive Manufacturing",
          speaker: "Dr. Senthilkumaran K",
          type: "workshop",
        },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Hands-on Session: AI Model Training", type: "workshop" },
      ],
    },
    {
      date: "July 20, 2025",
      day: 7,
      isLeave: true,
      sessions: [
        {
          time: "All Day",
          title: "No Sessions - Leave Day",
          type: "break",
        },
      ],
    },
    {
      date: "July 21, 2025",
      day: 8,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "Natural Language Processing for Design Specifications",
          speaker: "Dr. Vikram Singh",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "AI-Driven Lattice Structures",
          speaker: "Dr. Arivazhagan A",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Software Tools for Generative Design", type: "workshop" },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Hands-on Session: Generative Design", type: "workshop" },
      ],
    },
    {
      date: "July 22, 2025",
      day: 9,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "AI for Material Selection",
          speaker: "Dr. Jayakrishna K",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "Predictive Modeling for Process Parameters",
          speaker: "Dr. Manoj Kumar M",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Case Studies: Industrial AI Applications", type: "lecture" },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Group Activity: Advanced Design Challenge", type: "workshop" },
      ],
    },
    {
      date: "July 23, 2025",
      day: 10,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "AI Ethics in Manufacturing",
          speaker: "Dr. Lakshmi Narayanan",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "Future of AI in Additive Manufacturing",
          speaker: "Dr. Senthilkumaran K",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Hands-on: Advanced AI Simulation", type: "workshop" },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Design Challenge Finalization", type: "workshop" },
      ],
    },
    {
      date: "July 25, 2025",
      day: 11,
      sessions: [
        {
          time: "09:30 - 11:00",
          title: "Industry 4.0 and AI Integration",
          speaker: "Dr. Rajesh Kumar",
          type: "lecture",
        },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        { time: "11:15 - 13:00", title: "Design Challenge Presentations", type: "workshop" },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Panel Discussion: Future of AI in Manufacturing", type: "panel" },
        { time: "15:30 - 16:30", title: "Certificate Distribution & Closing Ceremony", type: "break" },
      ],
    },
  ]

  // Group days for pagination (3 days per page)
  const dayGroups = []
  for (let i = 0; i < days.length; i += 4) {
    dayGroups.push(days.slice(i, i + 4))
  }

  return (
    <section id="schedule" ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
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
              <Calendar className="h-8 w-8 text-teal-500" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
            Event{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Schedule</span>
          </h2>

          <p className="text-lg text-slate-600 mb-4">
            11 days of intensive learning, hands-on workshops, and networking opportunities.
          </p>

          <div className="bg-amber-50 p-4 rounded-xl inline-block">
            <p className="text-amber-700 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-amber-500" />
              July 14-25, 2025 (July 20 is a leave day)
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex justify-center gap-2 mb-6">
            {dayGroups.map((_, index) => (
              <Button
                key={index}
                variant={activeDayGroup === index ? "default" : "outline"}
                className={cn(
                  activeDayGroup === index ? "bg-gradient-to-r from-teal-500 to-teal-600 text-white" : "text-slate-700",
                  "font-medium",
                )}
                onClick={() => setActiveDayGroup(index)}
              >
                Days {index * 4 + 1}-{Math.min((index + 1) * 4, days.length)}
              </Button>
            ))}
          </div>

          <Tabs defaultValue={`day${dayGroups[activeDayGroup][0].day}`} className="w-full">
            <TabsList className="grid grid-cols-4 mb-8 p-1 bg-slate-100 rounded-xl">
              {dayGroups[activeDayGroup].map((day) => (
                <TabsTrigger
                  key={day.day}
                  value={`day${day.day}`}
                  className={cn(
                    "data-[state=active]:bg-gradient-to-r from-teal-500 to-teal-600",
                    "data-[state=active]:text-white",
                    "rounded-lg py-3",
                    "transition-all duration-300",
                    day.isLeave && "bg-amber-50 data-[state=active]:from-amber-500 data-[state=active]:to-amber-600",
                  )}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-bold">Day {day.day}</span>
                    <span className="hidden md:inline text-xs mt-1">{day.date}</span>
                    {day.isLeave && (
                      <span className="text-xs mt-1 text-amber-600 font-medium flex items-center">
                        <Ban className="h-3 w-3 mr-1" /> Leave Day
                      </span>
                    )}
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {dayGroups[activeDayGroup].map((day) => (
              <TabsContent key={day.day} value={`day${day.day}`} className="mt-0">
                <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className={cn(
                        "p-6 text-white",
                        day.isLeave
                          ? "bg-gradient-to-r from-amber-500 to-amber-600"
                          : "bg-gradient-to-r from-teal-500 to-teal-600",
                      )}
                    >
                      <h3 className="text-2xl font-bold">{day.date}</h3>
                      <p className="text-white/80">
                        Day {day.day} of the AI Enabled DfAM 2025 Program
                        {day.isLeave && " (Leave Day)"}
                      </p>
                    </div>

                    <div className="p-6">
                      <div className="relative">
                        <div className="absolute top-0 bottom-0 left-[34px] border-l-2 border-dashed border-slate-200"></div>

                        <div className="space-y-6">
                          {day.sessions.map((session, sessionIndex) => (
                            <div
                              key={sessionIndex}
                              className={cn(
                                "relative flex items-start p-4 rounded-xl transition-all duration-300",
                                session.type === "break"
                                  ? "bg-slate-50"
                                  : session.type === "workshop"
                                    ? "bg-teal-50"
                                    : session.type === "panel"
                                      ? "bg-amber-50"
                                      : "bg-white border border-slate-100",
                                day.isLeave && "bg-amber-50/50",
                              )}
                            >
                              <div
                                className="absolute left-[34px] w-4 h-4 rounded-full transform -translate-x-1/2 mt-1.5 z-10 border-2 border-white"
                                style={{
                                  backgroundColor:
                                    session.type === "break"
                                      ? "#94a3b8"
                                      : session.type === "workshop"
                                        ? "#14b8a6"
                                        : session.type === "panel"
                                          ? "#f59e0b"
                                          : "#0ea5e9",
                                }}
                              ></div>

                              <div className="flex items-center mr-6 w-24 flex-shrink-0">
                                <Clock className="h-4 w-4 text-slate-500 mr-2" />
                                <span className="text-sm font-medium text-slate-600">{session.time}</span>
                              </div>

                              <div className="flex-grow">
                                <div className="flex items-start">
                                  <div className="flex-grow">
                                    <h4 className="font-bold text-slate-800">{session.title}</h4>
                                    {session.speaker && (
                                      <p className="text-sm text-slate-600 mt-1">Speaker: {session.speaker}</p>
                                    )}
                                  </div>
                                  <div className="ml-4 flex-shrink-0">
                                    {session.type === "break" && (
                                      <div className="p-2 bg-slate-100 rounded-lg">
                                        <Coffee className="h-5 w-5 text-slate-500" />
                                      </div>
                                    )}
                                    {session.type === "lecture" && (
                                      <div className="p-2 bg-blue-100 rounded-lg">
                                        <BookOpen className="h-5 w-5 text-blue-500" />
                                      </div>
                                    )}
                                    {session.type === "workshop" && (
                                      <div className="p-2 bg-teal-100 rounded-lg">
                                        <Users className="h-5 w-5 text-teal-500" />
                                      </div>
                                    )}
                                    {session.type === "panel" && (
                                      <div className="p-2 bg-amber-100 rounded-lg">
                                        <Users className="h-5 w-5 text-amber-500" />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        <div className="text-center mt-8">
          <p className="text-slate-600 italic">
            * The schedule is subject to minor changes. All participants will receive the final schedule upon
            registration.
          </p>
        </div>
      </div>
    </section>
  )
}
