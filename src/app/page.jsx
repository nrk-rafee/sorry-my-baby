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


/* =========================================================
   🌸 GARDEN PAGE
   ========================================================= */

function GardenFlower({ side = "center", delay = 0, height = 300 }) {
  const positions = {
    left: {
      x: "-75px",
      flowerSize: 42,
      rotate: -13,
    },

    center: {
      x: "0px",
      flowerSize: 50,
      rotate: 0,
    },

    right: {
      x: "75px",
      flowerSize: 44,
      rotate: 13,
    },
  }

  const config = positions[side]

  return (
    <div
      className="absolute bottom-0 left-1/2"
      style={{
        transform: `translateX(calc(-50% + ${config.x}))`,
        height: `${height}px`,
        width: "100px",
      }}
    >

      {/* =====================================================
          STEM
         ===================================================== */}

      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: "7px",
          height: "100%",
          transformOrigin: "bottom center",
          transform: `translateX(-50%) rotate(${config.rotate}deg)`,
          borderRadius: "999px",
          background:
            "linear-gradient(to top, #063c3d, #087f88, #35cbd0)",
          boxShadow:
            "0 0 8px rgba(45,220,230,0.25)",
        }}
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          duration: 1.8,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >

        {/* =================================================
            LEAVES
           ================================================= */}

        <motion.div
          className="absolute left-[-25px] top-[35%] w-[42px] h-[20px] rounded-[100%_0_100%_0%]"
          style={{
            background:
              "linear-gradient(135deg, #0b7c82, #36c9d0)",
            transformOrigin: "right center",
            rotate: "-25deg",
            boxShadow:
              "0 0 10px rgba(30,200,210,0.2)",
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: delay + 1,
            ease: "backOut",
          }}
        />

        <motion.div
          className="absolute right-[-25px] top-[48%] w-[42px] h-[20px] rounded-[0%_100%_0%_100%]"
          style={{
            background:
              "linear-gradient(225deg, #0b7c82, #36c9d0)",
            transformOrigin: "left center",
            rotate: "25deg",
            boxShadow:
              "0 0 10px rgba(30,200,210,0.2)",
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: delay + 1.15,
            ease: "backOut",
          }}
        />

        <motion.div
          className="absolute left-[-20px] top-[63%] w-[35px] h-[17px] rounded-[100%_0_100%_0%]"
          style={{
            background:
              "linear-gradient(135deg, #075d64, #27aeb7)",
            rotate: "25deg",
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: delay + 1.3,
          }}
        />

        <motion.div
          className="absolute right-[-20px] top-[73%] w-[35px] h-[17px] rounded-[0%_100%_0%_100%]"
          style={{
            background:
              "linear-gradient(225deg, #075d64, #27aeb7)",
            rotate: "-25deg",
          }}
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 0.5,
            delay: delay + 1.4,
          }}
        />

      </motion.div>


      {/* =====================================================
          FLOWER
         ===================================================== */}

      <motion.div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          top: "-8px",
          width: `${config.flowerSize + 35}px`,
          height: `${config.flowerSize + 35}px`,
        }}
        initial={{
          opacity: 0,
          scale: 0,
          y: 15,
        }}
        animate={{
          opacity: 1,
          scale: [0, 0.55, 1.08, 0.96, 1],
          y: 0,
        }}
        transition={{
          duration: 1.5,
          delay: delay + 1.7,
          ease: [0.16, 1, 0.3, 1],
        }}
      >

        {/* Glow */}

        <div
          className="absolute inset-0 rounded-full blur-2xl"
          style={{
            background:
              "rgba(70,235,245,0.18)",
          }}
        />

        {/* =================================================
            PETALS
           ================================================= */}

        <div className="absolute inset-0 flex items-center justify-center">

          {/* Top */}

          <div
            className="absolute"
            style={{
              width: `${config.flowerSize * 0.58}px`,
              height: `${config.flowerSize}px`,
              borderRadius: "70% 70% 45% 45%",
              background:
                "linear-gradient(to bottom, #72e8e8, #29aeb9)",
              transform: "translateY(-35%)",
              boxShadow:
                "0 0 14px rgba(75,225,235,0.45)",
            }}
          />

          {/* Left */}

          <div
            className="absolute"
            style={{
              width: `${config.flowerSize * 0.58}px`,
              height: `${config.flowerSize}px`,
              borderRadius: "70% 70% 45% 45%",
              background:
                "linear-gradient(to bottom, #63dce0, #1e9eab)",
              transform:
                "translate(-48%, 0) rotate(-65deg)",
              boxShadow:
                "0 0 14px rgba(75,225,235,0.4)",
            }}
          />

          {/* Right */}

          <div
            className="absolute"
            style={{
              width: `${config.flowerSize * 0.58}px`,
              height: `${config.flowerSize}px`,
              borderRadius: "70% 70% 45% 45%",
              background:
                "linear-gradient(to bottom, #63dce0, #1e9eab)",
              transform:
                "translate(48%, 0) rotate(65deg)",
              boxShadow:
                "0 0 14px rgba(75,225,235,0.4)",
            }}
          />

          {/* Bottom left */}

          <div
            className="absolute"
            style={{
              width: `${config.flowerSize * 0.5}px`,
              height: `${config.flowerSize * 0.8}px`,
              borderRadius: "70% 70% 45% 45%",
              background:
                "linear-gradient(to bottom, #4ccfd6, #188e9c)",
              transform:
                "translate(-28%, 30%) rotate(-25deg)",
            }}
          />

          {/* Bottom right */}

          <div
            className="absolute"
            style={{
              width: `${config.flowerSize * 0.5}px`,
              height: `${config.flowerSize * 0.8}px`,
              borderRadius: "70% 70% 45% 45%",
              background:
                "linear-gradient(to bottom, #4ccfd6, #188e9c)",
              transform:
                "translate(28%, 30%) rotate(25deg)",
            }}
          />

          {/* Center */}

          <div
            className="absolute rounded-full"
            style={{
              width: `${config.flowerSize * 0.38}px`,
              height: `${config.flowerSize * 0.22}px`,
              background:
                "linear-gradient(to bottom, #f8ffff, #a9f2ed)",
              boxShadow:
                "0 0 12px rgba(255,255,220,0.7)",
              transform: "translateY(10px)",
            }}
          />

          {/* Yellow center */}

          <div
            className="absolute rounded-full"
            style={{
              width: `${config.flowerSize * 0.14}px`,
              height: `${config.flowerSize * 0.08}px`,
              background: "#eaff86",
              boxShadow:
                "0 0 8px rgba(230,255,80,0.9)",
              transform: "translateY(7px)",
            }}
          />

        </div>

      </motion.div>


      {/* =====================================================
          WIND ANIMATION
         ===================================================== */}

      <motion.div
        className="absolute bottom-[20%] left-1/2"
        style={{
          width: "90px",
          height: "180px",
          transformOrigin: "bottom center",
          pointerEvents: "none",
        }}
        animate={{
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 2,
        }}
      />

    </div>
  )
}


/* =========================================================
   🌿 SMALL GRASS
   ========================================================= */

function Grass({ index }) {
  const left = (index * 17 + 5) % 100
  const height = 55 + ((index * 31) % 90)
  const rotate = -18 + ((index * 13) % 36)

  return (
    <motion.div
      className="absolute bottom-0 origin-bottom"
      style={{
        left: `${left}%`,
        height: `${height}px`,
        width: "5px",
        transform: `rotate(${rotate}deg)`,
        background:
          "linear-gradient(to top, #073f3f, #18a5a8)",
        borderRadius: "999px",
        boxShadow:
          "0 0 6px rgba(20,190,190,0.25)",
      }}
      initial={{
        scaleY: 0,
      }}
      animate={{
        scaleY: 1,
      }}
      transition={{
        duration: 1.2,
        delay: index * 0.035,
        ease: [0.22, 1, 0.36, 1],
      }}
    />
  )
}


/* =========================================================
   🌱 GARDEN
   ========================================================= */

function GardenPage() {
  const [plants, setPlants] = useState([])

  const createGarden = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left

    const id =
      Date.now() +
      Math.random()

    setPlants((prev) => {

      /* Maximum 12 beautiful clusters */

      const next = [
        ...prev,
        {
          id,
          x,
        },
      ]

      return next.slice(-12)
    })
  }

  return (
    <div
      onClick={createGarden}
      className="fixed inset-0 overflow-hidden cursor-pointer select-none"
      style={{
        background:
          "radial-gradient(circle at 50% 58%, rgba(30,110,120,0.20), transparent 42%), linear-gradient(to bottom, #071319 0%, #040b10 55%, #020609 100%)",
      }}
    >

      {/* =====================================================
          STARS
         ===================================================== */}

      <div className="absolute inset-0 pointer-events-none">

        {[
          [5, 14, 2],
          [12, 31, 1],
          [18, 9, 1],
          [26, 23, 2],
          [33, 42, 1],
          [41, 15, 1],
          [48, 29, 2],
          [56, 11, 1],
          [63, 35, 1],
          [71, 19, 2],
          [78, 43, 1],
          [86, 12, 1],
          [93, 28, 2],
          [9, 55, 1],
          [22, 64, 1],
          [37, 52, 2],
          [52, 67, 1],
          [67, 58, 1],
          [82, 69, 2],
          [95, 57, 1],
        ].map(([left, top, size], i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-100"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            animate={{
              opacity: [0.15, 0.8, 0.15],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 2.5 + (i % 3),
              repeat: Infinity,
              delay: (i % 5) * 0.4,
            }}
          />
        ))}

      </div>


      {/* =====================================================
          HEADER
         ===================================================== */}

      <motion.div
        className="absolute top-7 left-0 right-0 z-50 text-center px-4 pointer-events-none"
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
          className="text-2xl md:text-4xl text-pink-200"
          animate={{
            opacity: [0.7, 1, 0.7],
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
          BOTTOM GRASS
         ===================================================== */}

      <div className="absolute inset-x-0 bottom-0 h-[28%] pointer-events-none">

        {[...Array(32)].map((_, i) => (
          <Grass
            key={i}
            index={i}
          />
        ))}

      </div>


      {/* =====================================================
          GROWING PLANTS
         ===================================================== */}

      <AnimatePresence>
        {plants.map((plant, index) => {

          /*
            IMPORTANT:
            Touch-এর Y coordinate ব্যবহার করছি না।
            তাই screen-এর একদম উপরেও touch করলেও
            plant নিচ থেকে পুরো height পর্যন্ত উঠবে।
          */

          const screenHeight =
            typeof window !== "undefined"
              ? window.innerHeight
              : 800

          const maxHeight =
            Math.max(
              260,
              Math.min(
                screenHeight * 0.58,
                520
              )
            )

          const variation =
            (plant.id % 120) - 60

          const height =
            Math.max(
              280,
              maxHeight + variation
            )

          return (
            <motion.div
              key={plant.id}
              className="absolute bottom-0 pointer-events-none"
              style={{
                left: `${plant.x}px`,
                height: `${height}px`,
                width: "220px",
                transform: "translateX(-50%)",
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.5,
              }}
            >

              {/* Main flower */}

              <GardenFlower
                side="center"
                delay={0.05}
                height={height}
              />

              {/* Left flower */}

              <GardenFlower
                side="left"
                delay={0.2}
                height={height * 0.78}
              />

              {/* Right flower */}

              <GardenFlower
                side="right"
                delay={0.35}
                height={height * 0.86}
              />


              {/* =================================================
                  MAGIC PARTICLES
                 ================================================= */}

              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-xs"
                  style={{
                    left:
                      75 +
                      ((i * 37) % 70),
                    bottom:
                      height * 0.72 +
                      ((i * 29) % 100),
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                    y: [10, -15, -35],
                  }}
                  transition={{
                    duration: 2,
                    delay: 2 + i * 0.18,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                  }}
                >
                  {i % 2 === 0 ? "✦" : "✨"}
                </motion.div>
              ))}

            </motion.div>
          )
        })}
      </AnimatePresence>


      {/* =====================================================
          FIRST TOUCH MESSAGE
         ===================================================== */}

      <AnimatePresence>
        {plants.length === 0 && (
          <motion.div
            className="absolute bottom-[14%] left-0 right-0 z-40 text-center pointer-events-none px-5"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
          >
            <motion.p
              className="text-cyan-100/70 text-sm md:text-lg"
              animate={{
                opacity: [0.35, 0.8, 0.35],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              Touch anywhere… and watch something beautiful grow 🌱
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =====================================================
          BOTTOM MESSAGE
         ===================================================== */}

      {plants.length > 0 && (
        <motion.div
          className="absolute bottom-5 left-0 right-0 z-50 text-center pointer-events-none px-5"
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
            className="text-cyan-100/65 text-sm md:text-lg"
            animate={{
              opacity: [0.45, 0.85, 0.45],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
          >
            Every flower blooms from a little touch… 🌸
          </motion.p>

        </motion.div>
      )}

    </div>
  )
}


/* =========================================================
   🏠 HOME
   ========================================================= */

export default function Home() {

  const [currentPage, setCurrentPage] =
    useState("opening")

  const [musicPlaying, setMusicPlaying] =
    useState(false)

  const [showMusicPlayer, setShowMusicPlayer] =
    useState(false)


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
      scale: 0.96,
    },

    in: {
      opacity: 1,
      y: 0,
      scale: 1,
    },

    out: {
      opacity: 0,
      y: -30,
      scale: 1.03,
    },
  }


  const pageTransition = {
    type: "tween",
    ease: [0.25, 0.46, 0.45, 0.94],
    duration: 0.6,
  }


  return (
    <div className="min-h-screen bg-gray-950 relative overflow-hidden">

      {/* =====================================================
          BACKGROUND
         ===================================================== */}

      {currentPage !== "garden" && (
        <StarryBackground />
      )}


      {/* =====================================================
          MUSIC
         ===================================================== */}

      {showMusicPlayer && (
        <MusicPlayer
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
      )}


      {/* =====================================================
          PAGES
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
