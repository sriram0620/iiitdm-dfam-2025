"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Calendar, MapPin, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Set isMounted to true when component mounts (client-side only)
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (isMounted) {
      setIsLoaded(true)

      // Play video when component mounts with proper error handling
      if (videoRef.current) {
        // Add event listener for when video is loaded
        videoRef.current.addEventListener("loadeddata", () => {
          setVideoLoaded(true)
          // Try to play the video only after it's loaded
          const playPromise = videoRef.current?.play()

          // Handle the play promise properly
          if (playPromise !== undefined) {
            playPromise
              .then(() => {
                // Video playback started successfully
              })
              .catch((error) => {
                // Auto-play was prevented or other error
                console.log("Video autoplay prevented:", error)
                // Don't throw an error, just log it
              })
          }
        })
      }
    }

    // Cleanup function
    return () => {
      if (videoRef.current) {
        videoRef.current.pause()
        // Remove event listeners if any were added
        videoRef.current.removeEventListener("loadeddata", () => {})
      }
    }
  }, [isMounted])

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/90 z-10"></div>
        {/* Fallback background color in case video doesn't load */}
        <div className="absolute inset-0 bg-slate-900"></div>

        {/* Only render video on client-side */}
        {isMounted && (
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="/3d-printing-video.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      {/* 3D Printing Particles Effect */}
      <div className="absolute inset-0 z-0 opacity-30">
        {/* Client-side only rendering for particles to avoid hydration mismatch */}
        {isMounted && (
          <>
            {Array.from({ length: 30 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-teal-500/30"
                initial={{
                  width: `${Math.random() * 20 + 5}px`,
                  height: `${Math.random() * 20 + 5}px`,
                  x: `${Math.random() * 100}vw`,
                  y: `${Math.random() * 100}vh`,
                  opacity: 0,
                }}
                animate={{
                  y: ["0vh", "100vh"],
                  opacity: [0, 0.8, 0],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: Math.random() * 10 + 10,
                  delay: Math.random() * 5,
                  ease: "linear",
                }}
              />
            ))}
          </>
        )}
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="text-teal-400 font-medium">July 14-25, 2025</span>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col items-center text-center mb-12"
            >
              <span className="text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-2">
                Ai-enabled
              </span>
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Design for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">Additive</span>{" "}
                Manufacturing
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl"
            >
              An online Short-Term Training Program (STTP) exploring the tools and techniques design for additive manufacturuing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-0"
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdzDzhDnS5ldEWWGh8lH0qUHQMf2_k11TuHXB9xLi9GHq7EXQ/viewform?usp=sharing&ouid=101024081643276331895"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 px-8 py-6 text-lg rounded-full backdrop-blur-sm"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-white"
            >
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <MapPin className="h-5 w-5 text-teal-400" />
                <span>IIITDM Kancheepuram, Chennai, India</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full">
                <Calendar className="h-5 w-5 text-teal-400" />
                <span>July 14-25, 2025</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="flex flex-col items-center"
        >
          <span className="text-white/70 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
