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


// =====================================================
// 🌸 GARDEN PAGE
// =====================================================

function GardenPage() {

  const [flowers, setFlowers] = useState([])


  // 🌸 Different flowers
  const flowerTypes = [
    {
      name: "Rose",
      flower: "🌹",
      bud: "🌱",
    },
    {
      name: "Hibiscus",
      flower: "🌺",
      bud: "🌱",
    },
    {
      name: "Kat Golap",
      flower: "🌷",
      bud: "🌱",
    },
    {
      name: "Shapla",
      flower: "🪷",
      bud: "🌱",
    },
    {
      name: "Cherry Blossom",
      flower: "🌸",
      bud: "🌱",
    },
  ]


  // 🌱 Create a new plant
  const createFlower = (e) => {

    // prevent accidental double event
    e.preventDefault()

    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left

    const randomType =
      flowerTypes[
        Math.floor(Math.random() * flowerTypes.length)
      ]


    const newFlower = {
      id: Date.now() + Math.random(),

      // Tap-er X position
      x,

      flower: randomType.flower,
      bud: randomType.bud,

      // Every plant slightly different
      size: 0.8 + Math.random() * 0.35,

      height: 100 + Math.random() * 100,

      side: Math.random() > 0.5 ? 1 : -1,
    }


    setFlowers((previous) => [
      ...previous,
      newFlower,
    ])
  }


  return (
    <div
      onPointerDown={createFlower}
      className="min-h-screen w-full relative overflow-hidden cursor-pointer select-none"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, rgba(145,70,160,0.22), transparent 42%), linear-gradient(to bottom, #070b19, #030510)",
      }}
    >

      {/* =================================================
          HEADER
      ================================================= */}

      <motion.div
        className="absolute top-10 left-0 right-0 z-[100] text-center px-5 pointer-events-none"
        initial={{
          opacity: 0,
          y: -25,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
      >

        <motion.h1
          className="text-3xl md:text-4xl text-pink-300"
          animate={{
            textShadow: [
              "0 0 8px rgba(236,72,153,0.2)",
              "0 0 25px rgba(236,72,153,0.7)",
              "0 0 8px rgba(236,72,153,0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          One last little thing… 🦋
        </motion.h1>


        <motion.p
          className="mt-4 text-purple-200 text-lg"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
          }}
        >
          Tap anywhere and let the garden bloom 🌱✨
        </motion.p>

      </motion.div>



      {/* =================================================
          STARS
      ================================================= */}

      <div className="absolute inset-0 pointer-events-none">

        {[
          [7, 18],
          [15, 38],
          [23, 12],
          [31, 48],
          [39, 25],
          [47, 62],
          [54, 17],
          [61, 43],
          [68, 28],
          [74, 58],
          [81, 20],
          [88, 44],
          [94, 30],
          [12, 72],
          [27, 84],
          [43, 75],
          [57, 88],
          [72, 78],
          [85, 70],
          [96, 86],
        ].map(([left, top], index) => (

          <motion.span
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              width: index % 3 === 0 ? 3 : 2,
              height: index % 3 === 0 ? 3 : 2,
              left: `${left}%`,
              top: `${top}%`,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 2 + (index % 4),
              repeat: Infinity,
              delay: (index % 5) * 0.4,
            }}
          />

        ))}

      </div>



      {/* =================================================
          GROUND GLOW
      ================================================= */}

      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(30,80,50,0.16), transparent)",
        }}
      />



      {/* =================================================
          ALL CREATED PLANTS
      ================================================= */}

      <AnimatePresence>

        {flowers.map((item) => (

          <motion.div
            key={item.id}
            className="absolute bottom-0 pointer-events-none"
            style={{
              left: item.x,
              zIndex: 20,
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
          >

            {/* ==========================================
                🌱 PLANT WRAPPER
            ========================================== */}

            <motion.div
              className="relative origin-bottom"
              style={{
                width: 120,
                marginLeft: -60,
                height: item.height + 170,
                transform: `scale(${item.size})`,
              }}
              initial={{
                scaleY: 0,
                opacity: 0,
              }}
              animate={{
                scaleY: 1,
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
            >


              {/* ======================================
                  🌑 SOIL SHADOW
              ====================================== */}

              <motion.div
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full bg-black/50 blur-md"
                initial={{
                  scaleX: 0,
                  opacity: 0,
                }}
                animate={{
                  scaleX: 1,
                  opacity: 1,
                }}
                transition={{
                  duration: 0.7,
                }}
              />



              {/* ======================================
                  🌿 MAIN STEM
              ====================================== */}

              <motion.div
                className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[6px] rounded-full origin-bottom"
                style={{
                  height: item.height,
                  background:
                    "linear-gradient(to top, #123d24, #287a3e, #55a85a)",
                  boxShadow:
                    "0 0 8px rgba(60,180,90,0.25)",
                }}
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 1.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >


                {/* =================================
                    🍃 LEFT BRANCH
                ================================= */}

                <motion.div
                  className="absolute left-0 top-[38%] w-12 h-[5px] rounded-full origin-right"
                  style={{
                    background:
                      "linear-gradient(to right, #1b572d, #4d9e50)",
                  }}
                  initial={{
                    scaleX: 0,
                    rotate: 0,
                  }}
                  animate={{
                    scaleX: 1,
                    rotate: -30,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.65,
                  }}
                />


                {/* =================================
                    🍃 RIGHT BRANCH
                ================================= */}

                <motion.div
                  className="absolute right-0 top-[57%] w-12 h-[5px] rounded-full origin-left"
                  style={{
                    background:
                      "linear-gradient(to right, #1b572d, #4d9e50)",
                  }}
                  initial={{
                    scaleX: 0,
                    rotate: 0,
                  }}
                  animate={{
                    scaleX: 1,
                    rotate: 30,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.85,
                  }}
                />


                {/* =================================
                    🍃 LEFT LEAF
                ================================= */}

                <motion.span
                  className="absolute left-[-48px] top-[30%] text-3xl"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -40,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: -18,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.95,
                    ease: "backOut",
                  }}
                >
                  🍃
                </motion.span>


                {/* =================================
                    🍃 RIGHT LEAF
                ================================= */}

                <motion.span
                  className="absolute right-[-48px] top-[50%] text-3xl"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: 40,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 18,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 1.1,
                    ease: "backOut",
                  }}
                >
                  🍃
                </motion.span>


                {/* =================================
                    🍃 SMALL LEAF
                ================================= */}

                <motion.span
                  className="absolute left-[-38px] top-[67%] text-2xl"
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
                    delay: 1.25,
                    ease: "backOut",
                  }}
                >
                  🌿
                </motion.span>


                {/* =================================
                    🌿 RIGHT SMALL LEAF
                ================================= */}

                <motion.span
                  className="absolute right-[-38px] top-[75%] text-2xl"
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
                    delay: 1.35,
                    ease: "backOut",
                  }}
                >
                  🌿
                </motion.span>

              </motion.div>



              {/* ======================================
                  🌱 LITTLE VINE LEFT
              ====================================== */}

              <motion.div
                className="absolute bottom-[35px] left-[15px] origin-bottom"
                initial={{
                  scaleY: 0,
                  rotate: -15,
                }}
                animate={{
                  scaleY: 1,
                  rotate: -5,
                }}
                transition={{
                  duration: 1,
                  delay: 0.9,
                }}
              >

                <div
                  className="w-[4px] h-24 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to top, #174d28, #62a95e)",
                  }}
                />

                <span className="absolute top-5 -left-5 text-2xl">
                  🍃
                </span>

                <span className="absolute top-12 left-1 text-2xl">
                  🍃
                </span>

                <span className="absolute top-20 -left-4 text-xl">
                  🌿
                </span>

              </motion.div>



              {/* ======================================
                  🌿 LITTLE VINE RIGHT
              ====================================== */}

              <motion.div
                className="absolute bottom-[25px] right-[15px] origin-bottom"
                initial={{
                  scaleY: 0,
                  rotate: 15,
                }}
                animate={{
                  scaleY: 1,
                  rotate: 5,
                }}
                transition={{
                  duration: 1,
                  delay: 1.05,
                }}
              >

                <div
                  className="w-[4px] h-20 rounded-full"
                  style={{
                    background:
                      "linear-gradient(to top, #174d28, #62a95e)",
                  }}
                />

                <span className="absolute top-4 -right-5 text-2xl">
                  🍃
                </span>

                <span className="absolute top-11 right-0 text-2xl">
                  🍃
                </span>

              </motion.div>



              {/* ======================================
                  🌱 BUD
              ====================================== */}

              <motion.div
                className="absolute left-1/2 -translate-x-1/2"
                style={{
                  bottom: item.height - 12,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.35,
                  ease: "backOut",
                }}
              >
                <span className="text-2xl">
                  {item.bud}
                </span>
              </motion.div>



              {/* ======================================
                  🌸 FLOWER BLOOM
              ====================================== */}

              <motion.div
                className="absolute left-1/2 -translate-x-1/2 text-6xl md:text-7xl"
                style={{
                  bottom: item.height + 8,
                  filter:
                    "drop-shadow(0 0 8px rgba(255,180,220,0.65)) drop-shadow(0 0 25px rgba(255,70,180,0.35))",
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -35,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  scale: [
                    0,
                    0.2,
                    0.45,
                    0.75,
                    1.12,
                    0.96,
                    1,
                  ],
                  rotate: [
                    -35,
                    20,
                    -12,
                    8,
                    -4,
                    2,
                    0,
                  ],
                  y: [15, 8, 2, 0, -3, 0, 0],
                }}
                transition={{
                  duration: 2.1,
                  delay: 1.55,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                {item.flower}
              </motion.div>



              {/* ======================================
                  🌸 FLOWER SOFT BREATH
              ====================================== */}

              <motion.div
                className="absolute left-1/2 -translate-x-1/2 text-6xl md:text-7xl pointer-events-none"
                style={{
                  bottom: item.height + 8,
                }}
                animate={{
                  scale: [1, 1.035, 1],
                  rotate: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.flower}
              </motion.div>



              {/* ======================================
                  ✨ MAGIC PARTICLES
              ====================================== */}

              {[0, 1, 2, 3, 4].map((spark) => (

                <motion.span
                  key={spark}
                  className="absolute text-sm"
                  style={{
                    left: `${30 + spark * 15}px`,
                    bottom: `${item.height + 20 + (spark % 3) * 20}px`,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    y: [10, -25, -45],
                  }}
                  transition={{
                    duration: 2,
                    delay: 2.1 + spark * 0.25,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                >
                  {spark % 2 === 0 ? "✨" : "✦"}
                </motion.span>

              ))}



              {/* ======================================
                  🦋 BUTTERFLY
              ====================================== */}

              <motion.div
                className="absolute text-2xl md:text-3xl"
                style={{
                  bottom: item.height + 25,
                  left: "50%",
                }}
                initial={{
                  opacity: 0,
                  x: -90,
                  y: 20,
                }}
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  x: [
                    -90,
                    -45,
                    10,
                    55,
                    90,
                  ],
                  y: [
                    20,
                    -25,
                    -55,
                    -20,
                    15,
                  ],
                  rotate: [
                    -15,
                    15,
                    -8,
                    12,
                    -10,
                  ],
                }}
                transition={{
                  duration: 6,
                  delay: 2.5,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut",
                }}
              >
                🦋
              </motion.div>


            </motion.div>

          </motion.div>

        ))}

      </AnimatePresence>



      {/* =================================================
          BOTTOM MESSAGE
      ================================================= */}

      {flowers.length > 0 && (

        <motion.div
          className="absolute bottom-7 left-0 right-0 z-[90] text-center pointer-events-none px-5"
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
            className="text-pink-200 text-lg"
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

          <p className="text-purple-200/70 text-sm mt-2">
            Keep tapping and let your little garden grow 🦋✨
          </p>

        </motion.div>

      )}

    </div>
  )
}



// =====================================================
// 🏠 HOME
// =====================================================

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
      scale: 0.95,
    },

    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },

    out: {
      opacity: 0,
      y: -30,
      scale: 1.05,
    },
  }


  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6,
  }


  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">

      <StarryBackground />


      {/* Music Player */}
      {showMusicPlayer && (
        <MusicPlayer
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
      )}


      {/* Page transition */}
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
