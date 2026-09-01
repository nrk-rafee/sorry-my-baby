"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const FLOWERS = [
  {
    name: "Rose",
    flower: "🌹",
    color: "rose",
  },
  {
    name: "Hibiscus",
    flower: "🌺",
    color: "pink",
  },
  {
    name: "Water Lily",
    flower: "🪷",
    color: "purple",
  },
  {
    name: "Tulip",
    flower: "🌷",
    color: "pink",
  },
  {
    name: "Blossom",
    flower: "🌸",
    color: "pink",
  },
  {
    name: "Sunflower",
    flower: "🌻",
    color: "yellow",
  },
  {
    name: "Flower",
    flower: "🌼",
    color: "yellow",
  },
]

export default function FlowerGardenPage() {
  const [plants, setPlants] = useState([])
  const [showHint, setShowHint] = useState(true)

  const createFlower = (event) => {
    const rect = event.currentTarget.getBoundingClientRect()

    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    const randomFlower =
      FLOWERS[Math.floor(Math.random() * FLOWERS.length)]

    const newPlant = {
      id: Date.now() + Math.random(),
      x,
      y,
      flower: randomFlower.flower,
      name: randomFlower.name,
      size: 42 + Math.random() * 15,
      delay: Math.random() * 0.4,
      butterflyDelay: Math.random() * 2,
    }

    setPlants((oldPlants) => [...oldPlants, newPlant])
    setShowHint(false)
  }

  return (
    <div
      className="min-h-screen w-full relative overflow-hidden bg-[#080d20] cursor-pointer select-none"
      onClick={createFlower}
    >

      {/* Moon glow */}
      <div className="absolute top-10 right-8 w-28 h-28 rounded-full bg-pink-200/10 blur-3xl pointer-events-none" />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">

        {[...Array(70)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-pink-100/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}

      </div>


      {/* Heading */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 1,
            }}
            className="absolute top-20 left-0 right-0 z-50 text-center pointer-events-none px-5"
          >

            <motion.h1
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
              className="text-3xl md:text-4xl text-pink-300"
            >
              Tap anywhere… 🌸
            </motion.h1>

            <p className="text-purple-200/70 mt-4 text-sm">
              Let your little garden grow ✨
            </p>

          </motion.div>
        )}
      </AnimatePresence>


      {/* Plants */}
      <div className="absolute inset-0">

        {plants.map((plant) => (

          <motion.div
            key={plant.id}
            className="absolute pointer-events-none"
            style={{
              left: plant.x,
              top: plant.y,
            }}
          >

            {/* Glow */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 0.6, 0.25],
                scale: [0, 1.4, 1],
              }}
              transition={{
                duration: 2,
                delay: plant.delay,
              }}
              className="absolute -left-10 -top-20 w-24 h-24 rounded-full bg-pink-400/20 blur-2xl"
            />


            {/* Whole plant */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1.4,
                delay: plant.delay,
                type: "spring",
                stiffness: 90,
              }}
              className="relative"
            >

              {/* Stem */}
              <motion.div
                initial={{
                  height: 0,
                }}
                animate={{
                  height: 100,
                }}
                transition={{
                  duration: 1,
                  delay: plant.delay,
                }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 bg-gradient-to-t from-green-900 via-green-500 to-green-300 rounded-full origin-bottom"
              />


              {/* Left leaf */}
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -30,
                }}
                animate={{
                  scale: 1,
                  rotate: -12,
                }}
                transition={{
                  duration: 0.7,
                  delay: plant.delay + 0.7,
                }}
                className="absolute bottom-8 left-1/2 w-8 h-4 bg-green-500 rounded-full rounded-br-none origin-right"
              />


              {/* Right leaf */}
              <motion.div
                initial={{
                  scale: 0,
                  rotate: 30,
                }}
                animate={{
                  scale: 1,
                  rotate: 12,
                }}
                transition={{
                  duration: 0.7,
                  delay: plant.delay + 0.9,
                }}
                className="absolute bottom-14 left-1/2 w-8 h-4 bg-green-400 rounded-full rounded-bl-none origin-left"
              />


              {/* Flower */}
              <motion.div
                initial={{
                  scale: 0,
                  opacity: 0,
                  rotate: -20,
                }}
                animate={{
                  scale: [0, 0.5, 1.15, 1],
                  opacity: [0, 0.4, 1, 1],
                  rotate: [-20, 10, -5, 0],
                }}
                transition={{
                  duration: 1.6,
                  delay: plant.delay + 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="relative z-10 text-center"
                style={{
                  fontSize: plant.size,
                  transformOrigin: "bottom center",
                  filter:
                    "drop-shadow(0 0 12px rgba(255,150,220,0.7))",
                }}
              >
                {plant.flower}
              </motion.div>


              {/* Sparkles */}
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.3, 0],
                  y: [-10, -35, -50],
                }}
                transition={{
                  duration: 1.8,
                  delay: plant.delay + 1.3,
                }}
                className="absolute -top-3 -right-5 text-lg"
              >
                ✨
              </motion.div>


              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  x: [0, 15, 25],
                  y: [0, -10, -20],
                }}
                transition={{
                  duration: 1.8,
                  delay: plant.delay + 1.5,
                }}
                className="absolute top-2 -left-5 text-sm"
              >
                ✨
              </motion.div>

            </motion.div>


            {/* Butterfly */}
            <motion.div
              className="absolute pointer-events-none text-xl z-30"
              initial={{
                opacity: 0,
                x: -20,
                y: -20,
              }}
              animate={{
                opacity: [0, 1, 1, 0],
                x: [-20, 25, 45, 10, -25, -20],
                y: [-20, -65, -20, 20, -45, -20],
                rotate: [-10, 20, -15, 15, -20, -10],
              }}
              transition={{
                duration: 6,
                delay: plant.butterflyDelay + 1.5,
                repeat: Infinity,
                repeatDelay: 1,
                ease: "easeInOut",
              }}
            >
              🦋
            </motion.div>

          </motion.div>

        ))}

      </div>


      {/* Bottom message */}
      {plants.length > 0 && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="absolute bottom-8 left-0 right-0 text-center pointer-events-none z-40 px-5"
        >
          <p className="text-pink-200/80 text-lg">
            Every little flower is a new memory… 🌸
          </p>

          <p className="text-purple-200/50 text-xs mt-2">
            Keep tapping to grow more ✨
          </p>
        </motion.div>
      )}

    </div>
  )
}
