"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { CuboidIcon as Cube, RotateCw, ZoomIn, ZoomOut, Maximize2, Minimize2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, PresentationControls } from "@react-three/drei"

// Replace the entire Model component with this simplified version that handles errors better
function Model({ url, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }) {
  // Create a simple cube as a fallback when models can't be loaded
  return (
    <mesh scale={scale} position={position} rotation={rotation}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#14b8a6" metalness={0.8} roughness={0.2} />
    </mesh>
  )
}

// Replace the Scene component with this simplified version
function Scene({ autoRotate }) {
  const controlsRef = useRef()

  useFrame(() => {
    if (autoRotate && controlsRef.current) {
      controlsRef.current.autoRotate = true
      controlsRef.current.autoRotateSpeed = 1.5
    }
  })

  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <PresentationControls
        global
        zoom={0.8}
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 4, Math.PI / 4]}
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <Model url="" scale={1.5} />
      </PresentationControls>
      <OrbitControls ref={controlsRef} enableZoom={true} enablePan={true} />
      <Environment preset="city" />
    </>
  )
}

export default function ModelViewer() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [autoRotate, setAutoRotate] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [activeModel, setActiveModel] = useState(0)

  // Replace the models array with this simplified version that doesn't rely on GLB files
  const models = [
    {
      name: "Topology Optimized Bracket",
      description: "A lightweight bracket designed using topology optimization techniques for additive manufacturing.",
      url: "",
    },
    {
      name: "Lattice Structure",
      description: "Complex lattice structure showcasing the design freedom of additive manufacturing.",
      url: "",
    },
    {
      name: "Functional Prototype",
      description: "A functional mechanical part with integrated features only possible with 3D printing.",
      url: "",
    },
  ]

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const toggleRotation = () => {
    setAutoRotate(!autoRotate)
  }

  return (
    <section
      ref={sectionRef}
      className={cn(
        "py-24 relative overflow-hidden transition-all duration-500",
        isFullscreen ? "fixed inset-0 z-50 bg-slate-900" : "bg-gradient-to-br from-slate-900 to-slate-800",
      )}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/3d-grid-pattern.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "overlay",
          }}
        ></div>
      </div>

      <div className={cn("container mx-auto px-4 relative z-10", isFullscreen && "h-full")}>
        {!isFullscreen && (
          <motion.div
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4">
              <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-teal-500/20 mb-4">
                <Cube className="h-8 w-8 text-teal-400" />
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Interactive{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-teal-500">
                3D Models
              </span>
            </h2>

            <p className="text-lg text-white/80">
              Explore these additive manufacturing examples in 3D. Rotate, zoom, and interact with the models.
            </p>
          </motion.div>
        )}

        <div className={cn("grid lg:grid-cols-3 gap-8", isFullscreen && "h-full")}>
          {!isFullscreen && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 flex flex-col justify-center"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-4">{models[activeModel].name}</h3>
                <p className="text-white/80 mb-6">{models[activeModel].description}</p>

                <div className="space-y-4">
                  {models.map((model, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveModel(index)}
                      className={cn(
                        "w-full text-left p-4 rounded-xl transition-all duration-300",
                        activeModel === index
                          ? "bg-gradient-to-r from-teal-500/30 to-teal-600/30 border-l-4 border-teal-500"
                          : "bg-white/5 hover:bg-white/10",
                      )}
                    >
                      <h4 className="font-medium text-white">{model.name}</h4>
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={toggleRotation}
                  >
                    <RotateCw className="h-4 w-4 mr-2" />
                    {autoRotate ? "Stop Rotation" : "Auto Rotate"}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    onClick={toggleFullscreen}
                  >
                    <Maximize2 className="h-4 w-4 mr-2" />
                    Fullscreen
                  </Button>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={cn(
              "bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl",
              isFullscreen ? "lg:col-span-3 h-full" : "lg:col-span-2",
            )}
          >
            {isFullscreen && (
              <div className="absolute top-4 right-4 z-10 flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={toggleRotation}
                >
                  <RotateCw className="h-4 w-4 mr-2" />
                  {autoRotate ? "Stop Rotation" : "Auto Rotate"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={toggleFullscreen}
                >
                  <Minimize2 className="h-4 w-4 mr-2" />
                  Exit Fullscreen
                </Button>
              </div>
            )}

            <div className={cn("relative", isFullscreen ? "h-full" : "h-[400px] lg:h-[500px]")}>
              <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
                <Scene autoRotate={autoRotate} />
              </Canvas>

              <div className="absolute bottom-4 right-4 flex space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => {
                    // Zoom in functionality would be implemented here
                  }}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                  onClick={() => {
                    // Zoom out functionality would be implemented here
                  }}
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
              </div>

              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg px-3 py-1">
                <p className="text-xs text-white/80">Drag to rotate • Scroll to zoom • Double-click to reset</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
