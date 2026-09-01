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


// 🌸 Last Thing Page
function LastThingPage() {
  const [flowers, setFlowers] = useState([])

  const flowerTypes = [
    {
      name: "Rose",
      flower: "🌹",
      plant: "🌿",
    },
    {
      name: "Hibiscus",
      flower: "🌺",
      plant: "🌿",
    },
    {
      name: "Kat Golap",
      flower: "🌷",
      plant: "🌿",
    },
    {
      name: "Shapla",
      flower: "🪷",
      plant: "🌱",
    },
    {
      name: "Cherry Blossom",
      flower: "🌸",
      plant: "🌿",
    },
  ]

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
      plant: randomFlower.plant,
      size: 1 + Math.random() * 0.35,
    }

    setFlowers((prev) => [...prev, newFlower])
  }

  return (
    <div
      onClick={createFlower}
      className="min-h-screen relative overflow-hidden cursor-pointer flex flex-col items-center"
      style={{
        background:
          "radial-gradient(circle at center, rgba(130,70,150,0.25), transparent 45%), #080d1d",
      }}
    >

      {/* ✨ Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-12 z-50 text-center px-5 pointer-events-none"
      >
        <h2 className="text-3xl md:text-4xl text-pink-300">
          One last little thing… 🦋
        </h2>

        <motion.p
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="text-lg text-purple-200 mt-4"
        >
          Tap anywhere… 🌸
        </motion.p>
      </motion.div>


      {/* 🌌 Small stars */}
      {[...Array(35)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.6 + 0.2,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}


      {/* 🌳 Created flowers */}
      <AnimatePresence>
        {flowers.map((item) => (
          <motion.div
            key={item.id}
            className="absolute pointer-events-none"
            style={{
              left: item.x,
              top: item.y,
              transform: "translate(-50%, -50%)",
              zIndex: 20,
            }}
            initial={{
              opacity: 0,
              scale: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: item.size,
              y: 0,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 120,
              damping: 8,
            }}
          >

            {/* 🌿 Stem */}
            <motion.div
              className="flex flex-col items-center"
              animate={{
                rotate: [-2, 2, -2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              {/* 🌸 Flower */}
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -30,
                }}
                animate={{
                  scale: [0, 1.3, 1],
                  rotate: 0,
                }}
                transition={{
                  duration: 1.2,
                  delay: 0.35,
                  ease: "backOut",
                }}
                className="text-5xl md:text-6xl"
                style={{
                  filter:
                    "drop-shadow(0 0 12px rgba(255,180,220,0.8))",
                }}
              >
                {item.flower}
              </motion.div>

              {/* 🌿 Plant */}
              <motion.div
                initial={{
                  scaleY: 0,
                }}
                animate={{
                  scaleY: 1,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                }}
                className="text-4xl -mt-2"
              >
                {item.plant}
              </motion.div>

            </motion.div>


            {/* ✨ Magical sparkles */}
            {[...Array(4)].map((_, index) => (
              <motion.div
                key={index}
                className="absolute text-sm"
                style={{
                  left: `${-20 + Math.random() * 80}px`,
                  top: `${-20 + Math.random() * 80}px`,
                }}
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  y: -25,
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.8 + index * 0.15,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                }}
              >
                ✨
              </motion.div>
            ))}


            {/* 🦋 Butterfly around every flower */}
            <motion.div
              className="absolute text-2xl"
              initial={{
                x: -50,
                y: 10,
                opacity: 0,
              }}
              animate={{
                x: [-50, 10, 50, 10, -50],
                y: [10, -35, 0, 30, 10],
                opacity: [0, 1, 1, 1, 0],
                rotate: [-15, 15, -10, 15, -15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut",
              }}
            >
              🦋
            </motion.div>

          </motion.div>
        ))}
      </AnimatePresence>


      {/* 🌸 Bottom message */}
      {flowers.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute bottom-10 text-center z-50 pointer-events-none px-5"
        >
          <p className="text-pink-200 text-lg">
            Every little flower is a little memory… 🌸
          </p>

          <p className="text-purple-200 text-sm mt-2">
            Keep tapping and let the garden bloom 🦋✨
          </p>
        </motion.div>
      )}

    </div>
  )
}


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

      {/* 🎵 Music Player */}
      {showMusicPlayer && (
        <MusicPlayer
          musicPlaying={musicPlaying}
          setMusicPlaying={setMusicPlaying}
        />
      )}


      {/* Main Pages */}
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


      {/* 🦋 ONE LAST THING BUTTON */}
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
            className="relative px-8 py-4 rounded-full
                       bg-gradient-to-r from-pink-500/25 to-purple-500/25
                       backdrop-blur-md
                       border border-pink-300/40
                       text-pink-200 text-lg
                       shadow-lg shadow-pink-500/20
                       overflow-hidden"
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
                x: [ -100, -35, 20, 75, 120 ],
                y: [ 10, -18, 8, -15, 5 ],
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
