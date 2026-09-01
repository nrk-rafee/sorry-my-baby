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
// 🌸 LAST THING PAGE
// ======================================================

function LastThingPage() {
  const [flowers, setFlowers] = useState([])

  const flowerTypes = [
    {
      name: "Rose",
      flower: "🌹",
    },
    {
      name: "Hibiscus",
      flower: "🌺",
    },
    {
      name: "Kat Golap",
      flower: "🌷",
    },
    {
      name: "Shapla",
      flower: "🪷",
    },
    {
      name: "Cherry Blossom",
      flower: "🌸",
    },
  ]


  // 🌸 Create a new flower when screen is touched
  const createFlower = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const randomFlower =
      flowerTypes[Math.floor(Math.random() * flowerTypes.length)]

    const newFlower = {
      id: Date.now() + Math.random(),
      x,
      y,
      flower: randomFlower.flower,
      size: 0.85 + Math.random() * 0.35,
    }

    setFlowers((prev) => [...prev, newFlower])
  }


  return (
    <div
      onClick={createFlower}
      className="min-h-screen w-full relative overflow-hidden cursor-pointer"
      style={{
        background:
          "radial-gradient(circle at 50% 45%, rgba(130,70,150,0.22), transparent 45%), linear-gradient(to bottom, #080b18, #050712)",
      }}
    >

      {/* ==================================================
          HEADER
      ================================================== */}

      <motion.div
        className="absolute top-10 left-0 right-0 z-50 text-center px-5 pointer-events-none"
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

        <motion.h2
          className="text-3xl md:text-4xl text-pink-300"
          animate={{
            textShadow: [
              "0 0 10px rgba(236,72,153,0.2)",
              "0 0 25px rgba(236,72,153,0.55)",
              "0 0 10px rgba(236,72,153,0.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          One last little thing… 🦋
        </motion.h2>


        <motion.p
          className="mt-4 text-lg text-purple-200"
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


      {/* ==================================================
          BACKGROUND STARS
      ================================================== */}

      {[...Array(45)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            width: `${1 + Math.random() * 2.5}px`,
            height: `${1 + Math.random() * 2.5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.1, 0.8, 0.1],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 3,
            repeat: Infinity,
          }}
        />
      ))}


      {/* ==================================================
          FLOWERS
      ================================================== */}

      <AnimatePresence>

        {flowers.map((item) => (

          <motion.div
            key={item.id}
            className="absolute pointer-events-none"
            style={{
              left: item.x,
              top: item.y,
              zIndex: 20,
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.4,
            }}
          >

            {/* 🌟 Glow */}

            <motion.div
              className="absolute rounded-full bg-pink-400/20 blur-3xl"
              style={{
                width: 110,
                height: 110,
                left: -55,
                top: -130,
              }}
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: [0, 0.8, 0.35],
                scale: [0, 1.4, 1],
              }}
              transition={{
                duration: 2,
                delay: 1,
              }}
            />


            {/* ==================================================
                🌱 PLANT
            ================================================== */}

            <motion.div
              className="relative flex flex-col items-center origin-bottom"
              style={{
                transform: `translate(-50%, -100%) scale(${item.size})`,
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

              {/* 🌑 Soil shadow */}

              <motion.div
                className="absolute bottom-[-7px] w-16 h-3 rounded-full bg-black/40 blur-sm"
                initial={{
                  opacity: 0,
                  scaleX: 0,
                }}
                animate={{
                  opacity: 1,
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.6,
                }}
              />


              {/* ==================================================
                  STEM
              ================================================== */}

              <motion.div
                className="relative w-[7px] rounded-full bg-gradient-to-t from-green-950 via-green-700 to-green-400 origin-bottom"
                style={{
                  height: 115,
                }}
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 1.3,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                {/* LEFT BRANCH */}

                <motion.div
                  className="absolute left-[-34px] top-[52px] w-[38px] h-[5px] rounded-full bg-green-600 origin-right"
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                    rotate: -28,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.65,
                  }}
                />


                {/* RIGHT BRANCH */}

                <motion.div
                  className="absolute right-[-34px] top-[72px] w-[38px] h-[5px] rounded-full bg-green-600 origin-left"
                  initial={{
                    scaleX: 0,
                  }}
                  animate={{
                    scaleX: 1,
                    rotate: 28,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.8,
                  }}
                />


                {/* LEFT LEAF */}

                <motion.div
                  className="absolute left-[-58px] top-[42px] text-2xl"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: -20,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.9,
                    ease: "backOut",
                  }}
                >
                  🍃
                </motion.div>


                {/* RIGHT LEAF */}

                <motion.div
                  className="absolute right-[-58px] top-[62px] text-2xl"
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: 30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 20,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 1.05,
                    ease: "backOut",
                  }}
                >
                  🍃
                </motion.div>

              </motion.div>


              {/* ==================================================
                  🌱 BUD
              ================================================== */}

              <motion.div
                className="absolute -top-[35px] text-2xl"
                initial={{
                  opacity: 0,
                  scale: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  scale: [0, 1.2, 1],
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.15,
                  ease: "backOut",
                }}
              >
                🌱
              </motion.div>


              {/* ==================================================
                  🌸 FLOWER BLOOM
              ================================================== */}

              <motion.div
                className="absolute -top-[70px] text-[55px] md:text-[65px]"
                initial={{
                  opacity: 0,
                  scale: 0,
                  rotate: -30,
                }}
                animate={{
                  opacity: 1,
                  scale: [0, 0.25, 0.6, 1.08, 1],
                  rotate: [-30, 15, -8, 4, 0],
                }}
                transition={{
                  duration: 2,
                  delay: 1.45,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  filter:
                    "drop-shadow(0 0 7px rgba(255,180,220,0.55)) drop-shadow(0 0 22px rgba(255,80,190,0.45))",
                }}
              >
                {item.flower}
              </motion.div>


              {/* ==================================================
                  🌸 FLOWER BREATHING
              ================================================== */}

              <motion.div
                className="absolute -top-[70px] text-[55px] md:text-[65px] pointer-events-none"
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {item.flower}
              </motion.div>


              {/* ==================================================
                  ✨ SPARKLES
              ================================================== */}

              {[...Array(6)].map((_, index) => (

                <motion.span
                  key={`sparkle-${index}`}
                  className="absolute text-sm md:text-base"
                  style={{
                    left: -45 + Math.random() * 90,
                    top: -80 + Math.random() * 100,
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: [0, 1, 0],
                    scale: [0, 1.2, 0],
                    y: [10, -25, -45],
                  }}
                  transition={{
                    duration: 2,
                    delay: 1.9 + index * 0.15,
                    repeat: Infinity,
                    repeatDelay: 1.5,
                  }}
                >
                  {index % 2 === 0 ? "✨" : "✦"}
                </motion.span>

              ))}


              {/* ==================================================
                  🦋 BUTTERFLY
              ================================================== */}

              <motion.div
                className="absolute text-2xl md:text-3xl"
                initial={{
                  opacity: 0,
                  x: -80,
                  y: 10,
                }}
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  x: [-80, -35, 20, 55, 85],
                  y: [15, -35, -55, -20, 5],
                  rotate: [-15, 15, -8, 15, -10],
                }}
                transition={{
                  duration: 6,
                  delay: 2.2,
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


      {/* ==================================================
          💌 BOTTOM MESSAGE
      ================================================== */}

      {flowers.length > 0 && (

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
        >

          <motion.p
            className="text-pink-200 text-lg"
            animate={{
              opacity: [0.65, 1, 0.65],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
            }}
          >
            Every flower blooms from a little touch… 🌸
          </motion.p>


          <p className="text-purple-200/70 text-sm mt-2">
            Keep tapping and create your little garden 🦋✨
          </p>

        </motion.div>

      )}

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
    lastThing: LastThingPage,
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


      {/* 🎵 MUSIC */}

      {showMusicPlayer && (

        <MusicPlayer
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />

      )}


      {/* ==================================================
          PAGES
      ================================================== */}

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


      {/* ==================================================
          🦋 ONE LAST THING BUTTON
      ================================================== */}

      {currentPage === "gift" && (

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 4,
            duration: 1,
          }}
          className="relative z-50 flex justify-center pb-14 -mt-4"
        >

          <motion.button
            onClick={() => setCurrentPage("lastThing")}
            className="
              relative
              px-8 py-4
              rounded-full
              bg-gradient-to-r
              from-pink-500/25
              to-purple-500/25
              backdrop-blur-md
              border border-pink-300/40
              text-pink-200
              text-lg
              shadow-lg
              shadow-pink-500/20
              overflow-hidden
            "
            whileHover={{
              scale: 1.05,
              boxShadow:
                "0 0 30px rgba(236,72,153,0.45)",
            }}
            whileTap={{
              scale: 0.95,
            }}
          >

            {/* 🦋 Flying butterfly */}

            <motion.span
              className="absolute text-2xl"
              initial={{
                x: -100,
                y: 5,
                opacity: 0,
              }}
              animate={{
                x: [-100, -35, 20, 75, 120],
                y: [10, -18, 8, -15, 5],
                opacity: [0, 1, 1, 1, 0],
                rotate: [-15, 15, -10, 15, -10],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              🦋
            </motion.span>


            <span className="relative z-10">
              One last thing, baby… 🦋
            </span>

          </motion.button>

        </motion.div>

      )}

    </div>

  )
}
