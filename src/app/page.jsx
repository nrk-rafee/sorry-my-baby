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


// ============================================================
// 🦋 BUTTERFLY
// ============================================================

function Butterfly({ type, delay = 0 }) {
  const butterflyStyles = [
    {
      body: "bg-orange-900",
      leftWing: "bg-orange-400 border-orange-200",
      rightWing: "bg-orange-500 border-yellow-200",
      glow: "rgba(255,150,40,0.7)",
    },
    {
      body: "bg-blue-900",
      leftWing: "bg-sky-400 border-cyan-100",
      rightWing: "bg-blue-500 border-purple-200",
      glow: "rgba(80,180,255,0.7)",
    },
    {
      body: "bg-purple-900",
      leftWing: "bg-purple-400 border-pink-200",
      rightWing: "bg-fuchsia-500 border-purple-100",
      glow: "rgba(200,90,255,0.7)",
    },
    {
      body: "bg-pink-900",
      leftWing: "bg-pink-400 border-pink-100",
      rightWing: "bg-rose-400 border-yellow-100",
      glow: "rgba(255,100,180,0.7)",
    },
  ]

  const style = butterflyStyles[type % butterflyStyles.length]

  return (
    <motion.div
      className="absolute pointer-events-none z-[70]"
      initial={{
        opacity: 0,
        x: type % 2 === 0 ? -120 : 120,
        y: 0,
      }}
      animate={{
        opacity: [0, 1, 1, 1, 0],
        x:
          type % 2 === 0
            ? [-120, -40, 80, 170, 260]
            : [120, 40, -70, -170, -260],
        y: [
          0,
          -90,
          -10,
          -130,
          -40,
        ],
        rotate: [
          -8,
          10,
          -12,
          8,
          -5,
        ],
      }}
      transition={{
        duration: 10 + type * 1.5,
        delay,
        repeat: Infinity,
        repeatDelay: 2,
        ease: "easeInOut",
      }}
      style={{
        left: `${15 + type * 22}%`,
        top: `${18 + type * 13}%`,
        filter: `drop-shadow(0 0 8px ${style.glow})`,
      }}
    >

      <div className="relative w-12 h-10">

        {/* Left wing */}
        <motion.div
          className={`absolute left-0 top-1 w-6 h-7 rounded-[80%_20%_70%_30%] border-2 ${style.leftWing}`}
          animate={{
            rotateY: [0, 55, 0, -20, 0],
          }}
          transition={{
            duration: 0.28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Right wing */}
        <motion.div
          className={`absolute right-0 top-1 w-6 h-7 rounded-[20%_80%_30%_70%] border-2 ${style.rightWing}`}
          animate={{
            rotateY: [0, -55, 0, 20, 0],
          }}
          transition={{
            duration: 0.28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Body */}
        <div
          className={`absolute left-1/2 top-2 -translate-x-1/2 w-2 h-7 rounded-full ${style.body}`}
        />

        {/* Antenna */}
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2"
          style={{
            width: 18,
            height: 10,
            borderTop: "1px solid rgba(255,255,255,0.7)",
            borderRadius: "50%",
          }}
        />

      </div>
    </motion.div>
  )
}


// ============================================================
// 🌸 FLOWER DATA
// ============================================================

const flowerTypes = [
  {
    emoji: "🌹",
    glow: "rgba(255,55,100,0.65)",
  },
  {
    emoji: "🌺",
    glow: "rgba(255,70,180,0.65)",
  },
  {
    emoji: "🌷",
    glow: "rgba(255,130,210,0.65)",
  },
  {
    emoji: "🌸",
    glow: "rgba(255,170,220,0.7)",
  },
  {
    emoji: "🪷",
    glow: "rgba(190,120,255,0.7)",
  },
  {
    emoji: "🌻",
    glow: "rgba(255,210,70,0.65)",
  },
]


// ============================================================
// 🌱 SINGLE PLANT
// ============================================================

function GardenPlant({ plant }) {

  const swayDuration = 3.5 + plant.sway


  return (
    <motion.div
      className="absolute bottom-0 pointer-events-none"
      style={{
        left: `${plant.x}px`,
        width: "90px",
        height: `${plant.height}px`,
        marginLeft: "-45px",
        zIndex: plant.z,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >

      {/* ======================================================
          🌱 WHOLE PLANT SWAY
      ====================================================== */}

      <motion.div
        className="absolute inset-0 origin-bottom"
        animate={{
          rotate: [-1.5, 1.8, -1.5],
          x: [-1, 2, -1],
        }}
        transition={{
          duration: swayDuration,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >

        {/* ====================================================
            🌿 CURVED MAIN STEM
        ==================================================== */}

        <motion.div
          className="absolute bottom-0 left-1/2 origin-bottom"
          style={{
            width: plant.stemWidth,
            height: "100%",
            marginLeft: -(plant.stemWidth / 2),
            borderRadius: "999px",
            background:
              "linear-gradient(to right, #194d29, #42a84f, #6acb67)",
            boxShadow:
              "0 0 8px rgba(70,190,90,0.25)",
          }}
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
        />


        {/* ====================================================
            🌿 LEFT CURVED VINE
        ==================================================== */}

        <motion.div
          className="absolute left-[15px] bottom-[8%] origin-bottom"
          style={{
            width: "3px",
            height: `${plant.height * 0.48}px`,
            background:
              "linear-gradient(to top, #205b2d, #61b85c)",
            borderRadius: "999px",
            rotate: "-15deg",
          }}
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.35,
          }}
        />


        {/* ====================================================
            🌿 RIGHT CURVED VINE
        ==================================================== */}

        <motion.div
          className="absolute right-[12px] bottom-[5%] origin-bottom"
          style={{
            width: "3px",
            height: `${plant.height * 0.55}px`,
            background:
              "linear-gradient(to top, #205b2d, #5fc15e)",
            borderRadius: "999px",
            rotate: "16deg",
          }}
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 0.5,
          }}
        />


        {/* ====================================================
            🍃 LEFT LEAVES
        ==================================================== */}

        {[18, 31, 45, 59, 72].map((position, i) => (
          <motion.span
            key={`left-leaf-${i}`}
            className="absolute text-xl md:text-2xl"
            style={{
              left:
                i % 2 === 0
                  ? "-2px"
                  : "5px",
              bottom: `${position}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: i % 2 === 0 ? -22 : 25,
            }}
            transition={{
              duration: 0.55,
              delay: 0.7 + i * 0.12,
            }}
          >
            {i % 3 === 0 ? "🌿" : "🍃"}
          </motion.span>
        ))}


        {/* ====================================================
            🍃 RIGHT LEAVES
        ==================================================== */}

        {[24, 38, 52, 67, 79].map((position, i) => (
          <motion.span
            key={`right-leaf-${i}`}
            className="absolute text-xl md:text-2xl"
            style={{
              right:
                i % 2 === 0
                  ? "-4px"
                  : "4px",
              bottom: `${position}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: i % 2 === 0 ? 22 : -25,
            }}
            transition={{
              duration: 0.55,
              delay: 0.8 + i * 0.13,
            }}
          >
            {i % 3 === 0 ? "🍃" : "🌿"}
          </motion.span>
        ))}


        {/* ====================================================
            🌸 FLOWER GLOW
        ==================================================== */}

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 rounded-full"
          style={{
            top: "-42px",
            width: 105,
            height: 105,
            background: plant.glow,
            filter: "blur(30px)",
          }}
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: [0, 0.65, 0.3],
            scale: [0, 1.2, 1],
          }}
          transition={{
            duration: 1.8,
            delay: 1.15,
          }}
        />


        {/* ====================================================
            🌸 FLOWER BLOOM
        ==================================================== */}

        <motion.div
          className="absolute left-1/2 -translate-x-1/2 -top-[48px] text-6xl md:text-7xl"
          style={{
            filter: `drop-shadow(0 0 10px ${plant.glow})`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            rotate: -30,
          }}
          animate={{
            opacity: 1,
            scale: [0, 0.3, 0.8, 1.08, 1],
            rotate: [-30, 12, -8, 4, 0],
          }}
          transition={{
            duration: 1.7,
            delay: 1.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {plant.flower}
        </motion.div>


        {/* ====================================================
            ✨ SMALL SPARKLES
        ==================================================== */}

        {[0, 1, 2].map((i) => (
          <motion.span
            key={`spark-${i}`}
            className="absolute text-sm"
            style={{
              left: `${20 + i * 25}px`,
              top: `${-60 - i * 12}px`,
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
              duration: 1.8,
              delay: 2 + i * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
          >
            ✨
          </motion.span>
        ))}

      </motion.div>

    </motion.div>
  )
}


// ============================================================
// 🌸 GARDEN PAGE
// ============================================================

function GardenPage() {

  const [plants, setPlants] = useState([])


  const createPlant = (event) => {

    // Don't create another plant if clicking a protected UI element
    if (
      event.target.closest("[data-garden-ui]")
    ) {
      return
    }


    const x = event.clientX
    const y = event.clientY

    const viewportHeight = window.innerHeight


    // ========================================================
    // 🌱 HEIGHT CALCULATION
    // ========================================================

    // Touch point থেকে মাটির দিকে distance।
    // কিন্তু touch point-এর একটু নিচে flower থাকবে,
    // যাতে ফুল screen-এর একদম edge-এ না চলে যায়।

    const desiredHeight =
      viewportHeight - y + 15


    // Minimum / maximum height.
    // এতে একদম ছোটও হবে না,
    // আবার অস্বাভাবিক giant stem-ও হবে না।

    const height = Math.max(
      180,
      Math.min(
        desiredHeight,
        viewportHeight - 90
      )
    )


    // ========================================================
    // 🌸 RANDOM FLOWER
    // ========================================================

    const randomFlower =
      flowerTypes[
        Math.floor(
          Math.random() * flowerTypes.length
        )
      ]


    // ========================================================
    // 🌱 CREATE ONE NATURAL PLANT
    // ========================================================

    const plant = {
      id:
        `${Date.now()}-${Math.random()}`,

      x,

      height,

      flower:
        randomFlower.emoji,

      glow:
        randomFlower.glow,

      stemWidth:
        5 + Math.random() * 2,

      sway:
        Math.random() * 1.5,

      z:
        20 + plants.length,
    }


    // ========================================================
    // 🌸 LIMIT PLANTS
    // ========================================================

    // অনেক বেশি tap করলে screen যেন অস্বাভাবিক
    // bamboo forest না হয়ে যায়।
    // 18টা plant-এর বেশি রাখছি না।

    setPlants((previous) => {

      const updated = [
        ...previous,
        plant,
      ]

      if (updated.length > 18) {
        return updated.slice(
          updated.length - 18
        )
      }

      return updated
    })
  }


  return (
    <div
      onPointerDown={createPlant}
      className="fixed inset-0 overflow-hidden cursor-pointer select-none touch-none"
      style={{
        background:
          "radial-gradient(circle at 50% 48%, rgba(105,50,145,0.25), transparent 40%), linear-gradient(to bottom, #070b1b 0%, #080b19 55%, #050812 100%)",
      }}
    >

      {/* =====================================================
          ✨ TITLE
      ===================================================== */}

      <motion.div
        data-garden-ui
        className="absolute top-5 md:top-8 left-0 right-0 z-[200] text-center px-4 pointer-events-none"
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
            opacity: [0.6, 1, 0.6],
            textShadow: [
              "0 0 8px rgba(236,72,153,0.2)",
              "0 0 24px rgba(236,72,153,0.7)",
              "0 0 8px rgba(236,72,153,0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          Tap anywhere and let the garden bloom 🌱✨
        </motion.h2>

      </motion.div>


      {/* =====================================================
          ⭐ STARS
      ===================================================== */}

      {[...Array(45)].map((_, i) => {

        const left =
          (i * 43.17) % 100

        const top =
          (i * 67.31) % 100

        const size =
          1 + (i % 3)


        return (
          <motion.span
            key={`star-${i}`}
            className="absolute bg-white rounded-full pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              opacity:
                0.2 + (i % 5) * 0.1,
            }}
            animate={{
              opacity: [
                0.15,
                0.8,
                0.15,
              ],
              scale: [
                0.7,
                1.3,
                0.7,
              ],
            }}
            transition={{
              duration:
                2.5 + (i % 4),
              repeat: Infinity,
              delay:
                (i % 6) * 0.4,
            }}
          />
        )
      })}


      {/* =====================================================
          🦋 FULL SCREEN BUTTERFLIES
      ===================================================== */}

      <Butterfly type={0} delay={1} />
      <Butterfly type={1} delay={3} />
      <Butterfly type={2} delay={5} />
      <Butterfly type={3} delay={7} />


      {/* =====================================================
          🌱 PLANTS
      ===================================================== */}

      <AnimatePresence>
        {plants.map((plant) => (
          <GardenPlant
            key={plant.id}
            plant={plant}
          />
        ))}
      </AnimatePresence>


      {/* =====================================================
          🌿 GROUND
      ===================================================== */}

      <div
        className="absolute bottom-0 left-0 right-0 h-16 z-[100] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(8,35,18,0.55), transparent)",
        }}
      />


      {/* =====================================================
          🍃 SMALL GRASS
      ===================================================== */}

      <div className="absolute bottom-0 left-0 right-0 h-12 z-[110] pointer-events-none">

        {[...Array(18)].map((_, i) => (
          <motion.span
            key={`grass-${i}`}
            className="absolute bottom-0 text-xl"
            style={{
              left: `${i * 5.8}%`,
            }}
            animate={{
              rotate:
                i % 2 === 0
                  ? [-5, 5, -5]
                  : [5, -5, 5],
            }}
            transition={{
              duration:
                2.2 + (i % 3) * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {i % 3 === 0
              ? "🌿"
              : "🍃"}
          </motion.span>
        ))}

      </div>


      {/* =====================================================
          💕 MESSAGE
      ===================================================== */}

      <AnimatePresence>
        {plants.length > 0 && (
          <motion.div
            data-garden-ui
            className="absolute bottom-5 md:bottom-7 left-0 right-0 z-[180] text-center px-4 pointer-events-none"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >

            <motion.p
              className="text-pink-200 text-sm md:text-lg"
              animate={{
                opacity: [
                  0.6,
                  1,
                  0.6,
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              Every flower blooms from a little touch… 🌸
            </motion.p>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}


// ============================================================
// 🏠 HOME
// ============================================================

export default function Home() {

  const [
    currentPage,
    setCurrentPage,
  ] = useState("opening")

  const [
    musicPlaying,
    setMusicPlaying,
  ] = useState(false)

  const [
    showMusicPlayer,
    setShowMusicPlayer,
  ] = useState(false)


  const pages = {
    opening: OpeningPage,
    diary: DiaryPage,
    apology: ApologyPage,
    letter: LetterPage,
    hug: HugPage,
    gift: GiftPage,
    garden: GardenPage,
  }


  const CurrentComponent =
    pages[currentPage]


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
    ease: [
      0.25,
      0.46,
      0.45,
      0.94,
    ],
    duration: 0.6,
  }


  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">

      {/* 🌌 Background only for other pages */}
      {currentPage !== "garden" && (
        <StarryBackground />
      )}


      {/* 🎵 MUSIC PLAYER */}

      {showMusicPlayer && (
        <MusicPlayer
          musicPlaying={
            musicPlaying
          }
          setMusicPlaying={
            setMusicPlaying
          }
        />
      )}


      {/* =====================================================
          PAGE TRANSITION
      ===================================================== */}

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
            setCurrentPage={
              setCurrentPage
            }
            setMusicPlaying={
              setMusicPlaying
            }
            setShowMusicPlayer={
              setShowMusicPlayer
            }
            musicPlaying={
              musicPlaying
            }
          />

        </motion.div>

      </AnimatePresence>

    </div>
  )
}
