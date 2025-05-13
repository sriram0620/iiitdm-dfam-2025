"use client"

import { useRef } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Coffee, BookOpen, Users, Calendar } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export default function Schedule() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Sample schedule data
  const days = [
    {
      date: "Dec 6, 2025",
      sessions: [
        { time: "09:00 - 10:00", title: "Registration & Welcome", type: "break" },
        {
          time: "10:00 - 11:30",
          title: "Introduction to Additive Manufacturing",
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
      date: "Dec 7, 2025",
      sessions: [
        { time: "09:30 - 11:00", title: "Topology Optimization Basics", speaker: "Dr. Prabu S", type: "lecture" },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        { time: "11:15 - 13:00", title: "Lattice Structures for AM", speaker: "Dr. Arivazhagan A", type: "lecture" },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Software Tools for Topology Optimization", type: "workshop" },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Hands-on Session: Optimization", type: "workshop" },
      ],
    },
    {
      date: "Dec 8, 2025",
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
          title: "Process-specific Design Constraints",
          speaker: "Dr. Manoj Kumar M",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Case Studies: Industrial Applications", type: "lecture" },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Group Activity: Design Challenge", type: "workshop" },
      ],
    },
    {
      date: "Dec 9, 2025",
      sessions: [
        { time: "09:30 - 11:00", title: "Multi-material Design for AM", speaker: "Dr. Vimal KEK", type: "lecture" },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        {
          time: "11:15 - 13:00",
          title: "Design Validation and Testing",
          speaker: "Dr. Senthilkumaran K",
          type: "lecture",
        },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Hands-on: Simulation for AM", type: "workshop" },
        { time: "15:30 - 15:45", title: "Coffee Break", type: "break" },
        { time: "15:45 - 17:00", title: "Design Challenge Continued", type: "workshop" },
      ],
    },
    {
      date: "Dec 10, 2025",
      sessions: [
        { time: "09:30 - 11:00", title: "Future Trends in DfAM", speaker: "Dr. Senthilkumaran K", type: "lecture" },
        { time: "11:00 - 11:15", title: "Coffee Break", type: "break" },
        { time: "11:15 - 13:00", title: "Design Challenge Presentations", type: "workshop" },
        { time: "13:00 - 14:00", title: "Lunch Break", type: "break" },
        { time: "14:00 - 15:30", title: "Panel Discussion: Industry Perspectives", type: "panel" },
        { time: "15:30 - 16:00", title: "Certificate Distribution & Closing Ceremony", type: "break" },
      ],
    },
  ]

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

          <p className="text-lg text-slate-600">
            Five days of intensive learning, hands-on workshops, and networking opportunities.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8 p-1 bg-slate-100 rounded-xl">
              {days.map((day, index) => (
                <TabsTrigger
                  key={index}
                  value={`day${index + 1}`}
                  className={cn(
                    "data-[state=active]:bg-gradient-to-r from-teal-500 to-teal-600",
                    "data-[state=active]:text-white",
                    "rounded-lg py-3",
                    "transition-all duration-300",
                  )}
                >
                  <div className="flex flex-col items-center">
                    <span className="font-bold">Day {index + 1}</span>
                    <span className="hidden md:inline text-xs mt-1">{day.date}</span>
                  </div>
                </TabsTrigger>
              ))}
            </TabsList>

            {days.map((day, dayIndex) => (
              <TabsContent key={dayIndex} value={`day${dayIndex + 1}`} className="mt-0">
                <Card className="border-0 shadow-xl rounded-2xl overflow-hidden">
                  <CardContent className="p-0">
                    <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-6 text-white">
                      <h3 className="text-2xl font-bold">{day.date}</h3>
                      <p className="text-white/80">Day {dayIndex + 1} of the DfAM 2025 Program</p>
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
      </div>
    </section>
  )
}
