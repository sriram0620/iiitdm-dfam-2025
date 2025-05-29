"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { useState } from "react"

export default function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [activeIndex, setActiveIndex] = useState(0)
  const [showLightbox, setShowLightbox] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const images = [
    {
      src: "/3d-printing-gallery-1.png",
      alt: "3D printed prototype",
      caption: "Advanced prototyping with 3D printing technology",
    },
    {
      src: "/3d-printing-gallery-2.png",
      alt: "Design optimization process",
      caption: "Topology optimization for lightweight structures",
    },
    {
      src: "/3d-printing-gallery-3.png",
      alt: "Additive manufacturing workshop",
      caption: "Hands-on workshop session from previous program",
    },
    {
      src: "/3d-printing-gallery-4.png",
      alt: "Complex 3D printed part",
      caption: "Complex geometries enabled by additive manufacturing",
    },
    {
      src: "/3d-printing-gallery-5.png",
      alt: "3D printing in action",
      caption: "Industrial 3D printing process demonstration",
    },
    {
      src: "/3d-printing-gallery-6.png",
      alt: "Design software demonstration",
      caption: "CAD software specialized for additive manufacturing",
    },
  ]

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setShowLightbox(true)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setShowLightbox(false)
    document.body.style.overflow = "auto"
  }

  const nextLightboxImage = () => {
    setLightboxIndex((prev) => (prev + 1) % images.length)
  }

  const prevLightboxImage = () => {
    setLightboxIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50 relative overflow-hidden">
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
          <h2 className="text-4xl font-bold mb-6 text-slate-800">
            Explore{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-teal-600">Our Work</span>
          </h2>
          <p className="text-lg text-slate-600">
            Discover the innovative projects and technologies you'll explore during the DfAM 2025 program.
          </p>
        </motion.div>

        {/* Featured Image Carousel */}
        <motion.div
          className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="aspect-[21/9] relative">
            {images.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-opacity duration-500",
                  index === activeIndex ? "opacity-100" : "opacity-0",
                )}
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white text-xl font-medium">{image.caption}</p>
                </div>
                <button
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors duration-300"
                  onClick={() => openLightbox(index)}
                >
                  <ZoomIn className="h-5 w-5 text-white" />
                </button>
              </div>
            ))}
          </div>

          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors duration-300"
            onClick={prevImage}
          >
            <ChevronLeft className="h-6 w-6 text-white" />
          </button>

          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors duration-300"
            onClick={nextImage}
          >
            <ChevronRight className="h-6 w-6 text-white" />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  index === activeIndex ? "bg-white w-6" : "bg-white/50",
                )}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <div className="relative w-full max-w-6xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[16/9]">
              <Image
                src={images[lightboxIndex].src || "/placeholder.svg"}
                alt={images[lightboxIndex].alt}
                fill
                className="object-contain"
              />
            </div>
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white text-xl">{images[lightboxIndex].caption}</p>
            </div>
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation()
                prevLightboxImage()
              }}
            >
              <ChevronLeft className="h-6 w-6 text-white" />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation()
                nextLightboxImage()
              }}
            >
              <ChevronRight className="h-6 w-6 text-white" />
            </button>
            <button
              className="absolute top-4 right-4 p-3 rounded-full bg-white/20 backdrop-blur-md hover:bg-white/40 transition-colors duration-300"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

import { X } from "lucide-react"
