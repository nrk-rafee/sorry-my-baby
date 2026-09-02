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
   🌸 VIDEO STYLE GLOWING FLOWER
========================================================= */

function VideoFlower({
  size = 55,
  delay = 0,
}) {
  const petals = [
    { x: 0, y: -0.26, r: 0 },
    { x: 0.23, y: -0.08, r: 72 },
    { x: 0.14, y: 0.20, r: 144 },
    { x: -0.14, y: 0.20, r: 216 },
    { x: -0.23, y: -0.08, r: 288 },
  ]

  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: 1,
        scale: [0, 1.08, 1],
        rotate: [-2, 2, -2],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        scale: {
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        },
        rotate: {
          duration: 4,
          delay: delay + 1,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      {/* Petals */}
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: size * 0.43,
            height: size * 0.62,

            left:
              `calc(50% + ${petal.x * size}px - ${size * 0.215}px)`,

            top:
              `calc(50% + ${petal.y * size}px - ${size * 0.31}px)`,

            borderRadius: "55% 45% 55% 45%",

            background:
              "linear-gradient(145deg,#79f7e4,#26cfc1,#118e98)",

            transform: `rotate(${petal.r}deg)`,

            transformOrigin: "50% 80%",

            boxShadow:
              "0 0 8px rgba(75,235,220,.75), 0 0 18px rgba(39,214,204,.35)",
          }}
          animate={{
            scaleY: [1, 1.035, 1],
          }}
          transition={{
            duration: 3.5,
            delay: delay + 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Flower center */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.22,
          height: size * 0.22,
          left: "39%",
          top: "39%",

          background:
            "radial-gradient(circle at 35% 30%,#f8fff4,#d9fff1 45%,#8ae7ca)",

          boxShadow:
            "0 0 8px rgba(213,255,243,.95),0 0 18px rgba(101,238,207,.7)",
        }}
      />

      {/* Center point */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.065,
          height: size * 0.065,
          left: "46.8%",
          top: "46.8%",
          background: "#ffffff",
          boxShadow: "0 0 5px #ffffff",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🍃 VIDEO STYLE LEAF
========================================================= */

function VideoLeaf({
  side = "left",
  size = 25,
  delay = 0,
}) {
  return (
    <motion.div
      className="absolute"
      style={{
        width: size,
        height: size * 0.5,

        transformOrigin:
          side === "left"
            ? "right center"
            : "left center",

        marginLeft:
          side === "left"
            ? -size
            : 0,
      }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate:
          side === "left"
            ? -20
            : 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate:
          side === "left"
            ? [-20, -14, -20]
            : [20, 14, 20],
      }}
      transition={{
        opacity: {
          duration: 0.5,
          delay,
        },

        scale: {
          duration: 0.7,
          delay,
          ease: "backOut",
        },

        rotate: {
          duration: 4,
          delay: delay + 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="w-full h-full"
        style={{
          borderRadius:
            side === "left"
              ? "100% 0 100% 0"
              : "0 100% 0 100%",

          background:
            "linear-gradient(135deg,#7ee89a,#39b86a,#168b50)",

          boxShadow:
            "0 0 7px rgba(72,218,120,.35)",
        }}
      />

      {/* leaf vein */}
      <div
        className="absolute"
        style={{
          top: "48%",
          left: "12%",
          width: "76%",
          height: 1,
          background:
            "rgba(180,255,192,.35)",
          transform:
            side === "left"
              ? "rotate(-8deg)"
              : "rotate(8deg)",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🌱 SINGLE GROWING PLANT
========================================================= */

function GrowingPlant({
  left = 50,
  height = 190,
  flowerSize = 55,
  delay = 0,
  flowerDelay = 1.5,
  scale = 1,
}) {
  return (
    <motion.div
      className="absolute bottom-[8%]"
      style={{
        left: `${left}%`,
        width: 100 * scale,
        height,
        transform: "translateX(-50%)",
        transformOrigin: "bottom center",
      }}
      initial={{
        opacity: 0,
        scaleY: 0,
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
      }}
      transition={{
        duration: 1.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >

      {/* Main stem */}
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 4 * scale,
          height: "100%",
          transform: "translateX(-50%)",
          transformOrigin: "bottom center",
          borderRadius: 999,

          background:
            "linear-gradient(to top,#092f25,#176b45,#42b969,#79dd83)",

          boxShadow:
            "0 0 6px rgba(67,202,112,.25)",
        }}
        animate={{
          rotate: [-1.2, 1.2, -1.2],
        }}
        transition={{
          duration: 4.5,
          delay: delay + 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left lower leaf */}
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "24%",
        }}
      >
        <VideoLeaf
          side="left"
          size={25 * scale}
          delay={delay + 0.65}
        />
      </div>

      {/* Right middle leaf */}
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "42%",
        }}
      >
        <VideoLeaf
          side="right"
          size={29 * scale}
          delay={delay + 0.85}
        />
      </div>

      {/* Left upper leaf */}
      <div
        className="absolute"
        style={{
          left: "50%",
          bottom: "60%",
        }}
      >
        <VideoLeaf
          side="left"
          size={22 * scale}
          delay={delay + 1.05}
        />
      </div>

      {/* Flower */}
      <div
        className="absolute left-1/2"
        style={{
          top: -flowerSize * 0.36,
          transform: "translateX(-50%)",
        }}
      >
        <VideoFlower
          size={flowerSize * scale}
          delay={delay + flowerDelay}
        />
      </div>
    </motion.div>
  )
}


/* =========================================================
   🌾 SMALL GRASS
========================================================= */

function Grass({
  left,
  height = 25,
  delay = 0,
  flip = false,
}) {
  return (
    <motion.div
      className="absolute bottom-[3%]"
      style={{
        left: `${left}%`,
        width: 25,
        height,
        transformOrigin: "bottom center",
      }}
      initial={{
        opacity: 0,
        scaleY: 0,
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: "backOut",
      }}
    >
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 2,
          height: "100%",
          background:
            "linear-gradient(to top,#123c2b,#48a967)",
          borderRadius: 999,
          transformOrigin: "bottom",
          transform:
            `translateX(-50%) rotate(${flip ? 18 : -18}deg)`,
        }}
        animate={{
          rotate: flip
            ? [18, 24, 18]
            : [-18, -12, -18],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   ✨ VIDEO STYLE FIREFLIES
========================================================= */

function GardenFireflies() {
  const lights = [
    [8, 65, 2],
    [15, 54, 2],
    [23, 73, 2],
    [31, 62, 1.8],
    [40, 76, 2],
    [50, 65, 2],
    [59, 72, 1.8],
    [68, 60, 2],
    [77, 71, 2],
    [86, 56, 1.8],
    [93, 68, 2],
    [18, 81, 1.5],
    [35, 70, 1.5],
    [73, 82, 1.5],
  ]

  return (
    <>
      {lights.map(([left, top, size], index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,

            background:
              "rgba(180,255,205,.95)",

            boxShadow:
              "0 0 7px 2px rgba(120,255,180,.45)",
          }}
          animate={{
            opacity: [0.15, 0.9, 0.2],
            scale: [0.7, 1.5, 0.7],
            y: [-4, 5, -4],
          }}
          transition={{
            duration: 2.8 + (index % 4) * 0.5,
            delay: index * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}


/* =========================================================
   ⭐ STARS
========================================================= */

function GardenStars() {
  const stars = [
    [4, 8, 1],
    [10, 17, 2],
    [16, 7, 1],
    [22, 14, 1],
    [28, 5, 2],
    [35, 20, 1],
    [42, 9, 1],
    [49, 16, 2],
    [56, 6, 1],
    [63, 21, 1],
    [70, 10, 2],
    [77, 5, 1],
    [84, 18, 1],
    [91, 9, 2],
    [97, 23, 1],

    [7, 29, 1],
    [15, 34, 1],
    [24, 27, 1],
    [33, 35, 2],
    [44, 30, 1],
    [55, 36, 1],
    [66, 29, 1],
    [76, 34, 2],
    [88, 31, 1],
    [95, 37, 1],
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map(([left, top, size], index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            background: "#eaffff",

            boxShadow:
              size === 2
                ? "0 0 7px rgba(210,255,255,.8)"
                : "0 0 4px rgba(210,255,255,.55)",
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: 2.5 + (index % 5) * 0.4,
            delay: (index % 6) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}


/* =========================================================
   🌿 GARDEN GROUND
========================================================= */

function GardenGround() {
  const grass = [
    [3, 22, false],
    [7, 30, true],
    [12, 18, false],
    [18, 25, true],
    [25, 20, false],
    [31, 28, true],
    [39, 18, false],
    [46, 25, true],
    [54, 20, false],
    [61, 28, true],
    [68, 19, false],
    [75, 25, true],
    [82, 18, false],
    [89, 28, true],
    [96, 21, false],
  ]

  return (
    <>
      {/* Soft ground */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",

          background:
            "radial-gradient(ellipse at 50% 100%,rgba(20,82,48,.55),rgba(4,17,18,.15) 65%,transparent 80%)",
        }}
      />

      {/* Grass */}
      {grass.map(([left, height, flip], index) => (
        <Grass
          key={index}
          left={left}
          height={height}
          flip={flip}
          delay={index * 0.04}
        />
      ))}
    </>
  )
}


/* =========================================================
   🌌 GARDEN PAGE
========================================================= */

function GardenPage() {
  const [growth, setGrowth] = useState(0)

  const growGarden = () => {
    setGrowth((previous) =>
      Math.min(previous + 1, 3)
    )
  }

  return (
    <div
      onClick={growGarden}
      className="relative w-full h-[100dvh] overflow-hidden cursor-pointer select-none"
      style={{
        background: `
          radial-gradient(
            ellipse at 50% 62%,
            rgba(12,71,67,.18) 0%,
            transparent 42%
          ),
          radial-gradient(
            ellipse at 50% 100%,
            rgba(6,43,40,.5) 0%,
            transparent 62%
          ),
          linear-gradient(
            to bottom,
            #020612 0%,
            #03101a 35%,
            #04181e 65%,
            #061b1d 82%,
            #02090c 100%
          )
        `,
      }}
    >

      {/* =================================================
          ⭐ STAR SKY
      ================================================= */}

      <GardenStars />


      {/* =================================================
          🌌 VERY SOFT SKY GLOW
      ================================================= */}

      <div
        className="absolute inset-x-0 top-0 h-[65%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 75%,rgba(24,115,117,.11),transparent 58%)",
        }}
      />


      {/* =================================================
          🌙 SOFT MOON
      ================================================= */}

      <motion.div
        className="absolute top-[10%] right-[11%] pointer-events-none"
        animate={{
          y: [-2, 3, -2],
          opacity: [0.72, 0.9, 0.72],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-10 h-10 md:w-14 md:h-14 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%,#f7ffff,#dceef0 55%,#8eaeb2)",

            boxShadow:
              "0 0 18px rgba(188,245,242,.45),0 0 45px rgba(76,188,188,.15)",
          }}
        />
      </motion.div>


      {/* =================================================
          ✨ HEADER
      ================================================= */}

      <motion.div
        className="absolute top-6 md:top-9 left-0 right-0 z-50 text-center px-5 pointer-events-none"
        initial={{
          opacity: 0,
          y: -18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.1,
        }}
      >
        <motion.h1
          className="text-[22px] leading-tight md:text-4xl font-medium"
          style={{
            color: "#d9fff6",
          }}
          animate={{
            textShadow: [
              "0 0 7px rgba(79,232,208,.15)",
              "0 0 20px rgba(79,232,208,.42)",
              "0 0 7px rgba(79,232,208,.15)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Tap anywhere and
          <br />
          let the garden grow 🌱
        </motion.h1>

        <motion.p
          className="mt-2 text-xs md:text-base"
          style={{
            color: "rgba(188,235,226,.65)",
          }}
          animate={{
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          {growth === 0 &&
            "Something beautiful is waiting…"}

          {growth === 1 &&
            "A little life is growing 🌱"}

          {growth === 2 &&
            "Look… the flowers are waking up ✨"}

          {growth >= 3 &&
            "Your little garden is alive 🌿✨"}
        </motion.p>
      </motion.div>


      {/* =================================================
          🌫️ DARK GROUND ATMOSPHERE
      ================================================= */}

      <div
        className="absolute inset-x-0 bottom-0 h-[42%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to top,rgba(1,12,13,.88),rgba(2,13,17,.35),transparent)",
        }}
      />


      {/* =================================================
          🌱 FIRST GROWTH
      ================================================= */}

      {growth >= 1 && (
        <>
          <GrowingPlant
            left={50}
            height={205}
            flowerSize={53}
            delay={0}
            flowerDelay={1.2}
            scale={0.9}
          />
        </>
      )}


      {/* =================================================
          🌱 SECOND GROWTH
      ================================================= */}

      {growth >= 2 && (
        <>
          <GrowingPlant
            left={38}
            height={145}
            flowerSize={42}
            delay={0.05}
            flowerDelay={1.1}
            scale={0.7}
          />

          <GrowingPlant
            left={62}
            height={160}
            flowerSize={45}
            delay={0.15}
            flowerDelay={1.15}
            scale={0.75}
          />
        </>
      )}


      {/* =================================================
          🌸 FINAL GARDEN
      ================================================= */}

      {growth >= 3 && (
        <>
          {/* Main center flower */}
          <GrowingPlant
            left={50}
            height={235}
            flowerSize={60}
            delay={0}
            flowerDelay={0.1}
            scale={1}
          />

          {/* Left flower */}
          <GrowingPlant
            left={39}
            height={155}
            flowerSize={43}
            delay={0.1}
            flowerDelay={0.35}
            scale={0.72}
          />

          {/* Right flower */}
          <GrowingPlant
            left={61}
            height={175}
            flowerSize={47}
            delay={0.2}
            flowerDelay={0.5}
            scale={0.78}
          />

          {/* Extra subtle rear plants */}
          <GrowingPlant
            left={28}
            height={110}
            flowerSize={31}
            delay={0.35}
            flowerDelay={0.7}
            scale={0.55}
          />

          <GrowingPlant
            left={73}
            height={120}
            flowerSize={33}
            delay={0.45}
            flowerDelay={0.8}
            scale={0.58}
          />
        </>
      )}


      {/* =================================================
          🌿 GROUND
      ================================================= */}

      <GardenGround />


      {/* =================================================
          ✨ FIREFLIES
      ================================================= */}

      {growth >= 2 && <GardenFireflies />}


      {/* =================================================
          ✨ EXTRA GROUND PARTICLES
      ================================================= */}

      {growth >= 3 && (
        <>
          {[18, 27, 45, 56, 72, 84].map(
            (left, index) => (
              <motion.div
                key={index}
                className="absolute bottom-[12%] pointer-events-none rounded-full"
                style={{
                  left: `${left}%`,
                  width: 2,
                  height: 2,
                  background: "#bffff0",
                  boxShadow:
                    "0 0 7px rgba(113,255,221,.8)",
                }}
                animate={{
                  y: [0, -12, 0],
                  opacity: [0.15, 0.8, 0.15],
                }}
                transition={{
                  duration: 2.5 + index * 0.25,
                  delay: index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )
          )}
        </>
      )}


      {/* =================================================
          👆 FIRST TOUCH MESSAGE
      ================================================= */}

      <AnimatePresence>
        {growth === 0 && (
          <motion.div
            className="absolute bottom-8 left-0 right-0 z-50 text-center pointer-events-none px-5"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
          >
            <motion.p
              className="text-lg md:text-xl"
              style={{
                color: "#c9fff4",
              }}
              animate={{
                opacity: [0.45, 1, 0.45],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Touch anywhere… 🌱
            </motion.p>

            <p
              className="text-xs md:text-sm mt-2"
              style={{
                color: "rgba(183,235,226,.55)",
              }}
            >
              Watch something beautiful grow
            </p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =================================================
          🌱 GROWING MESSAGE
      ================================================= */}

      <AnimatePresence>
        {growth === 1 && (
          <motion.div
            className="absolute bottom-8 left-0 right-0 z-50 text-center pointer-events-none"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
          >
            <motion.p
              className="text-sm md:text-lg"
              style={{
                color: "#c9fff4",
              }}
              animate={{
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
              }}
            >
              A little stem… a little hope 🌱
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =================================================
          🌸 FLOWER MESSAGE
      ================================================= */}

      <AnimatePresence>
        {growth === 2 && (
          <motion.div
            className="absolute bottom-8 left-0 right-0 z-50 text-center pointer-events-none"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
          >
            <motion.p
              className="text-sm md:text-lg"
              style={{
                color: "#cffff5",
              }}
              animate={{
                textShadow: [
                  "0 0 5px rgba(76,240,215,.2)",
                  "0 0 17px rgba(76,240,215,.55)",
                  "0 0 5px rgba(76,240,215,.2)",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              Look closely… 🌿✨
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =================================================
          🌺 FINAL MESSAGE
      ================================================= */}

      <AnimatePresence>
        {growth >= 3 && (
          <motion.div
            className="absolute bottom-7 left-0 right-0 z-50 text-center pointer-events-none px-5"
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            <motion.p
              className="text-base md:text-xl"
              style={{
                color: "#d8fff6",
              }}
              animate={{
                opacity: [0.65, 1, 0.65],

                textShadow: [
                  "0 0 5px rgba(74,238,214,.2)",
                  "0 0 18px rgba(74,238,214,.65)",
                  "0 0 5px rgba(74,238,214,.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            >
              And just like that… the little garden bloomed 🌿🌸
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}


/* =========================================================
   🏠 HOME
========================================================= */

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

      {/* Existing pages background */}
      {currentPage !== "garden" && (
        <StarryBackground />
      )}

      {/* Music player */}
      {showMusicPlayer && (
        <MusicPlayer
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
      )}

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
