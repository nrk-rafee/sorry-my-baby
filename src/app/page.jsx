"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import StarryBackground from "@/components/StarryBackground"
import OpeningPage from "@/components/OpeningPage"
import DiaryPage from "@/components/DiaryPage"
import ApologyPage from "@/components/ApologyPage"
import LetterPage from "@/components/LetterPage"
import HugPage from "@/components/HugPage"
import GiftPage from "@/components/GiftPage"
import MusicPlayer from "@/components/MusicPlayer"


// ======================================================
// 🌸 GARDEN PAGE
// ======================================================

function GardenPage() {
  const [plants, setPlants] = useState([])

  // Different flowers
  const flowers = [
    {
      flower: "🌹",
      size: "text-6xl md:text-7xl",
      glow: "rgba(255,70,130,0.75)",
    },
    {
      flower: "🌺",
      size: "text-6xl md:text-7xl",
      glow: "rgba(255,80,170,0.75)",
    },
    {
      flower: "🌷",
      size: "text-6xl md:text-7xl",
      glow: "rgba(255,120,200,0.75)",
    },
    {
      flower: "🌸",
      size: "text-6xl md:text-7xl",
      glow: "rgba(255,170,220,0.8)",
    },
    {
      flower: "🪷",
      size: "text-6xl md:text-7xl",
      glow: "rgba(190,130,255,0.8)",
    },
    {
      flower: "🌻",
      size: "text-6xl md:text-7xl",
      glow: "rgba(255,210,80,0.75)",
    },
  ]

  // Different butterflies
  const butterflies = ["🦋", "🦋", "🦋", "🦋"]

  // ====================================================
  // 🌱 CREATE PLANT
  // ====================================================

  const createPlant = (event) => {
    // Ignore if accidentally clicking an existing element
    if (event.target.closest("[data-no-garden-click]")) {
      return
    }

    const x = event.clientX
    const y = event.clientY

    // Browser viewport height at the exact moment of touch.
    // This is ONLY called after interaction, never during prerender.
    const screenHeight = window.innerHeight

    // Grow from bottom all the way toward the touch point.
    const rawHeight = screenHeight - y + 35

    // Keep plants visible and reasonably tall.
    const height = Math.max(
      190,
      Math.min(rawHeight, screenHeight - 70)
    )

    const randomFlower =
      flowers[Math.floor(Math.random() * flowers.length)]

    const newPlant = {
      id: `${Date.now()}-${Math.random()}`,
      x,
      height,

      flower: randomFlower.flower,
      flowerSize: randomFlower.size,
      glow: randomFlower.glow,

      // Slight differences between plants
      width: 4 + Math.random() * 3,
      sway: Math.random() * 2.5 + 2,

      // Leaves can have different positions
      leafOffset: Math.random() * 10,

      // Every 2 plants -> one butterfly
      butterfly:
        plants.length % 2 === 1
          ? butterflies[Math.floor(Math.random() * butterflies.length)]
          : null,
    }

    setPlants((previous) => [...previous, newPlant])
  }


  return (
    <div
      onPointerDown={createPlant}
      className="fixed inset-0 overflow-hidden cursor-pointer select-none touch-none"
      style={{
        background:
          "radial-gradient(circle at 50% 48%, rgba(120,55,155,0.24), transparent 38%), linear-gradient(to bottom, #070b1b 0%, #080b1a 55%, #050813 100%)",
      }}
    >

      {/* =================================================
          ✨ TOP TITLE
      ================================================= */}

      <motion.div
        className="absolute top-5 md:top-8 left-0 right-0 z-[100] text-center px-4 pointer-events-none"
        initial={{
          opacity: 0,
          y: -20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <motion.h2
          className="text-xl md:text-3xl text-pink-300"
          animate={{
            opacity: [0.65, 1, 0.65],
            textShadow: [
              "0 0 8px rgba(236,72,153,0.25)",
              "0 0 25px rgba(236,72,153,0.7)",
              "0 0 8px rgba(236,72,153,0.25)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Tap anywhere and let the garden bloom 🌱✨
        </motion.h2>
      </motion.div>


      {/* =================================================
          🌟 BACKGROUND STARS
      ================================================= */}

      {[...Array(55)].map((_, index) => {
        const left = (index * 37.7) % 100
        const top = (index * 61.3) % 100
        const size = 1 + (index % 3)

        return (
          <motion.span
            key={`star-${index}`}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              opacity: 0.25 + (index % 5) * 0.1,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [0.7, 1.25, 0.7],
            }}
            transition={{
              duration: 2.5 + (index % 4),
              repeat: Infinity,
              delay: (index % 6) * 0.4,
            }}
          />
        )
      })}


      {/* =================================================
          🌿 GROUND GLOW
      ================================================= */}

      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(55,180,90,0.22), transparent 68%)",
        }}
      />


      {/* =================================================
          🌱 ALL PLANTS
      ================================================= */}

      <AnimatePresence>
        {plants.map((plant, index) => (

          <motion.div
            key={plant.id}
            className="absolute bottom-0 pointer-events-none"
            style={{
              left: plant.x,
              height: plant.height,
              width: 20,
              zIndex: 20 + index,
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >

            {/* ===========================================
                🌱 MAIN GROWING STEM
            =========================================== */}

            <motion.div
              className="absolute bottom-0 left-1/2 origin-bottom rounded-full"
              style={{
                width: plant.width,
                height: "100%",
                marginLeft: -(plant.width / 2),
                background:
                  "linear-gradient(to top, #123d22, #237a3c 35%, #49b85a 75%, #79d66d)",
                boxShadow:
                  "0 0 7px rgba(65,190,90,0.35)",
              }}
              initial={{
                scaleY: 0,
              }}
              animate={{
                scaleY: 1,
              }}
              transition={{
                duration: 1.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            />


            {/* ===========================================
                🍃 LEFT VINE
            =========================================== */}

            <motion.div
              className="absolute bottom-[20%] left-1/2 origin-right"
              style={{
                width: "70px",
                height: "3px",
                background:
                  "linear-gradient(to right, transparent, #49a94c)",
                borderRadius: "999px",
              }}
              initial={{
                scaleX: 0,
                rotate: 0,
              }}
              animate={{
                scaleX: 1,
                rotate: -28,
              }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
            />

            {/* Left vine leaves */}

            <motion.span
              className="absolute text-2xl"
              style={{
                left: "-55px",
                bottom: "20%",
              }}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: -18,
              }}
              transition={{
                duration: 0.7,
                delay: 0.8,
              }}
            >
              🍃
            </motion.span>

            <motion.span
              className="absolute text-xl"
              style={{
                left: "-38px",
                bottom: "27%",
              }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
            >
              🌿
            </motion.span>


            {/* ===========================================
                🍃 RIGHT VINE
            =========================================== */}

            <motion.div
              className="absolute bottom-[38%] left-1/2 origin-left"
              style={{
                width: "68px",
                height: "3px",
                background:
                  "linear-gradient(to left, transparent, #4eae50)",
                borderRadius: "999px",
              }}
              initial={{
                scaleX: 0,
                rotate: 0,
              }}
              animate={{
                scaleX: 1,
                rotate: 27,
              }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
            />

            {/* Right leaves */}

            <motion.span
              className="absolute text-2xl"
              style={{
                right: "-55px",
                bottom: "38%",
              }}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: 35,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: 18,
              }}
              transition={{
                duration: 0.7,
                delay: 1,
              }}
            >
              🍃
            </motion.span>

            <motion.span
              className="absolute text-xl"
              style={{
                right: "-38px",
                bottom: "45%",
              }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.6,
                delay: 1.15,
              }}
            >
              🌿
            </motion.span>


            {/* ===========================================
                🌿 EXTRA CLIMBING VINE
            =========================================== */}

            <motion.div
              className="absolute left-1/2 bottom-[5%]"
              style={{
                width: 2,
                height: "55%",
                marginLeft: 18,
                borderRadius: "999px",
                background:
                  "linear-gradient(to top, #235c2d, #5fbd62)",
                transformOrigin: "bottom",
              }}
              initial={{
                scaleY: 0,
                rotate: -8,
              }}
              animate={{
                scaleY: 1,
                rotate: 8,
              }}
              transition={{
                duration: 1.1,
                delay: 0.55,
              }}
            />

            <span
              className="absolute text-xl"
              style={{
                right: "-10px",
                bottom: "35%",
              }}
            >
              🍃
            </span>

            <span
              className="absolute text-xl"
              style={{
                right: "-12px",
                bottom: "55%",
              }}
            >
              🌿
            </span>

            <span
              className="absolute text-lg"
              style={{
                right: "-7px",
                bottom: "72%",
              }}
            >
              🍃
            </span>


            {/* ===========================================
                🌸 FLOWER GLOW
            =========================================== */}

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
              style={{
                top: "-45px",
                width: 110,
                height: 110,
                background: plant.glow,
                filter: "blur(32px)",
              }}
              initial={{
                opacity: 0,
                scale: 0.2,
              }}
              animate={{
                opacity: [0, 0.7, 0.35],
                scale: [0.2, 1.3, 1],
              }}
              transition={{
                duration: 1.8,
                delay: 1.15,
              }}
            />


            {/* ===========================================
                🌸 FLOWER BLOOM
            =========================================== */}

            <motion.div
              className={`absolute left-1/2 -translate-x-1/2 -top-[52px] ${plant.flowerSize}`}
              style={{
                transformOrigin: "bottom center",
                filter: `drop-shadow(0 0 8px ${plant.glow}) drop-shadow(0 0 22px ${plant.glow})`,
              }}
              initial={{
                opacity: 0,
                scale: 0,
                rotate: -25,
              }}
              animate={{
                opacity: 1,
                scale: [0, 0.3, 0.75, 1.08, 1],
                rotate: [-25, 12, -7, 4, 0],
              }}
              transition={{
                duration: 1.7,
                delay: 1.25,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {plant.flower}
            </motion.div>


            {/* ===========================================
                🌬️ WIND ANIMATION
            =========================================== */}

            <motion.div
              className="absolute left-1/2 -translate-x-1/2 -top-[52px]"
              animate={{
                rotate: [-2.5, 3, -2.5],
                x: [-1, 2, -1],
              }}
              transition={{
                duration: plant.sway,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span
                className={`block ${plant.flowerSize}`}
                style={{
                  filter: `drop-shadow(0 0 8px ${plant.glow})`,
                }}
              >
                {plant.flower}
              </span>
            </motion.div>


            {/* ===========================================
                🍃 WIND ON LEAVES
            =========================================== */}

            <motion.div
              className="absolute inset-0"
              animate={{
                rotate: [-0.7, 0.8, -0.7],
              }}
              transition={{
                duration: plant.sway + 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transformOrigin: "bottom center",
              }}
            >
              <span
                className="absolute text-2xl"
                style={{
                  left: "-55px",
                  bottom: "20%",
                }}
              >
                🍃
              </span>

              <span
                className="absolute text-2xl"
                style={{
                  right: "-55px",
                  bottom: "38%",
                }}
              >
                🍃
              </span>
            </motion.div>


            {/* ===========================================
                ✨ FLOWER SPARKLES
            =========================================== */}

            {[0, 1, 2, 3].map((spark) => (
              <motion.span
                key={spark}
                className="absolute text-sm"
                style={{
                  left: `${-35 + spark * 25}px`,
                  top: `${-75 - (spark % 2) * 15}px`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1.2, 0],
                  y: [10, -20, -35],
                }}
                transition={{
                  duration: 2,
                  delay: 2 + spark * 0.25,
                  repeat: Infinity,
                  repeatDelay: 2,
                }}
              >
                {spark % 2 === 0 ? "✨" : "✦"}
              </motion.span>
            ))}


            {/* ===========================================
                🦋 ONE BUTTERFLY FOR EVERY 2 FLOWERS
            =========================================== */}

            {plant.butterfly && (
              <motion.div
                className="absolute text-2xl md:text-3xl"
                style={{
                  left:
                    index % 4 === 1
                      ? "-95px"
                      : "45px",
                  top:
                    index % 4 === 1
                      ? "5%"
                      : "12%",
                  filter:
                    "drop-shadow(0 0 7px rgba(255,180,220,0.7))",
                }}
                initial={{
                  opacity: 0,
                  x: index % 4 === 1 ? -40 : 40,
                  y: 20,
                }}
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  x:
                    index % 4 === 1
                      ? [-40, -10, 20, 0, -40]
                      : [40, 15, -20, 0, 40],
                  y: [20, -30, -55, -20, 20],
                  rotate: [-15, 12, -10, 15, -8],
                }}
                transition={{
                  duration: 6.5,
                  delay: 2.2,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut",
                }}
              >
                {index % 4 === 1 ? "🦋" : "🦋"}
              </motion.div>
            )}

          </motion.div>
        ))}
      </AnimatePresence>


      {/* =================================================
          🌿 EXTRA GRASS AT BOTTOM
      ================================================= */}

      <div className="absolute bottom-0 left-0 right-0 h-20 z-[80] pointer-events-none overflow-hidden">

        {[...Array(28)].map((_, i) => (
          <motion.span
            key={`grass-${i}`}
            className="absolute bottom-0 text-2xl md:text-3xl"
            style={{
              left: `${(i / 27) * 100}%`,
            }}
            animate={{
              rotate:
                i % 2 === 0
                  ? [-5, 5, -5]
                  : [5, -5, 5],
            }}
            transition={{
              duration: 2 + (i % 4) * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (i % 5) * 0.2,
            }}
          >
            {i % 3 === 0 ? "🌿" : "🍃"}
          </motion.span>
        ))}

      </div>


      {/* =================================================
          ✨ BOTTOM MESSAGE
      ================================================= */}

      <AnimatePresence>
        {plants.length > 0 && (
          <motion.div
            className="absolute bottom-10 md:bottom-7 left-0 right-0 z-[120] text-center px-4 pointer-events-none"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >
            <motion.p
              className="text-pink-200 text-base md:text-lg"
              animate={{
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              Every flower blooms from a little touch… 🌸
            </motion.p>

            <p className="text-purple-200/70 text-xs md:text-sm mt-1">
              Keep tapping and let your little garden grow 🦋✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}


// ======================================================
// 🏠 MAIN HOME PAGE
// ======================================================

export default function Home() {

  const [currentPage, setCurrentPage] = useState("opening")
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [showMusicPlayer, setShowMusicPlayer] = useState(false)


  const pages = {
    opening: OpeningPage,
    diary: DiaryPage,
    apology: ApologyPage,
    letter: LetterPage,
    hug: HugPage,
    gift: GiftPage,
    garden: GardenPage,
  }


  const CurrentComponent = pages[currentPage]


  const pageVariants = {
    initial: {
      opacity: 0,
      y: 30,
      scale: 0.97,
    },

    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },

    out: {
      opacity: 0,
      y: -30,
      scale: 1.02,
    },
  }


  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6,
  }


  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">

      {/* 🌌 Main star background */}
      {currentPage !== "garden" && <StarryBackground />}


      {/* 🎵 Music */}
      {showMusicPlayer && (
        <MusicPlayer
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
      )}


      {/* =================================================
          MAIN PAGE TRANSITION
      ================================================= */}

      <AnimatePresence mode="wait">

        <motion.div
          key={currentPage}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="relative z-10"
        >

          <CurrentComponent
            setCurrentPage={setCurrentPage}
            setMusicPlaying={setMusicPlaying}
            setShowMusicPlayer={setShowMusicPlayer}
            musicPlaying={musicPlaying}
          />

        </motion.div>

      </AnimatePresence>

    </div>
  )
}
