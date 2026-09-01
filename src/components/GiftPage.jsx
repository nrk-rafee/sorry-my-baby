"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function GiftPage({ setCurrentPage }) {
  const [giftOpened, setGiftOpened] = useState(false)
  const [showSurprise, setShowSurprise] = useState(false)

  const openGift = () => {
    setGiftOpened(true)

    setTimeout(() => {
      setShowSurprise(true)
    }, 1200)
  }

  const goToGarden = () => {
    setCurrentPage("garden")
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-10 text-center relative overflow-hidden">

      {/* Floating gift */}
      <motion.div
        className="absolute top-40 md:top-20 left-8 text-2xl"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 20, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        🎁
      </motion.div>

      {/* Sparkle */}
      <motion.div
        className="absolute top-32 right-10 text-xl"
        animate={{
          y: [0, -5, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
        }}
      >
        ✨
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl text-pink-300 mb-16"
      >
        I have something special for you... 💝
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        className="relative"
      >

        <AnimatePresence mode="wait">

          {/* =========================
              CLOSED GIFT
          ========================= */}

          {!giftOpened ? (
            <motion.div
              key="gift-box"
              exit={{
                scale: 0,
                opacity: 0,
                y: -50,
              }}
              transition={{
                duration: 1,
              }}
              className="cursor-pointer group relative"
              onClick={openGift}
            >

              <div className="absolute inset-0 w-56 h-56 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-300" />

              <motion.img
                src="/gifs/gift.gif"
                alt="Gift box"
                className="w-56 h-56 mx-auto relative z-10 drop-shadow-2xl"
                animate={{
                  rotate: [0, 2, -2, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              <motion.p
                animate={{
                  y: [0, -3, 0],
                  textShadow: [
                    "0 0 10px rgba(236,72,153,0.5)",
                    "0 0 20px rgba(236,72,153,0.8)",
                    "0 0 10px rgba(236,72,153,0.5)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-pink-200 mt-6 text-xl relative z-10"
              >
                Click to open! 🎁✨
              </motion.p>

              <motion.div
                className="absolute -top-2 -right-2 text-lg"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              >
                ⭐
              </motion.div>

            </motion.div>

          ) : (

            /* =========================
               OPENED GIFT
            ========================= */

            <motion.div
              key="opened-gift"
              initial={{
                scale: 0,
                opacity: 0,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
              }}
              className="space-y-12"
            >

              {/* Teddy */}
              <motion.div
                initial={{
                  y: 50,
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                }}
                className="relative w-full"
              >

                <div className="absolute w-64 h-64 mx-auto inset-0 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-2xl scale-110" />

                <img
                  src="/gifs/teddy-giving-flower.gif"
                  alt="Teddy giving flower"
                  className="w-52 mx-auto relative z-10 drop-shadow-2xl"
                />

                <motion.div
                  className="absolute -top-3 -right-3 text-xl"
                  animate={{
                    y: [0, -8, 0],
                    rotate: [0, 15, 0],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                  }}
                >
                  🌸
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 text-lg"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                >
                  💕
                </motion.div>

              </motion.div>

              <AnimatePresence>

                {showSurprise && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 1,
                    }}
                    className="space-y-8 max-w-lg"
                  >

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="text-2xl text-pink-300 leading-relaxed"
                    >
                      This flower will never wilt... 🌹
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-lg text-purple-200 leading-relaxed"
                    >
                      Just like my love for you. I promise to cherish you every
                      single day, and never take your beautiful heart for
                      granted again. 💖
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        delay: 0.9,
                        duration: 0.8,
                      }}
                      className="text-xl text-pink-200"
                    >
                      You mean everything to me 💕✨
                    </motion.p>


                    {/* =========================
                        ONLY ONE BUTTON
                    ========================= */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 30,
                        scale: 0.8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      transition={{
                        delay: 1.8,
                        duration: 1,
                      }}
                      className="pt-8 pb-6"
                    >

                      <motion.button
                        onClick={goToGarden}
                        className="relative px-8 py-4 rounded-full bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-pink-500/30 border border-pink-300/50 text-pink-100 text-lg shadow-lg shadow-pink-500/30 backdrop-blur-sm overflow-hidden"
                        whileHover={{
                          scale: 1.05,
                          boxShadow:
                            "0 0 35px rgba(236,72,153,0.5)",
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                      >

                        {/* Flying butterfly */}
                        <motion.span
                          className="absolute -top-8 left-1/2 text-2xl pointer-events-none"
                          animate={{
                            x: [-45, -15, 15, 40, 15, -20, -45],
                            y: [15, -5, 10, -8, -18, 0, 15],
                            rotate: [-10, 15, -5, 12, -15, 8, -10],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          🦋
                        </motion.span>

                        <span className="relative z-10">
                          One Last Thing Baby 🦋
                        </span>

                      </motion.button>

                    </motion.div>

                  </motion.div>
                )}

              </AnimatePresence>

            </motion.div>
          )}

        </AnimatePresence>

      </motion.div>


      {/* Floating particles */}
      {giftOpened && (
        <div className="absolute inset-0 pointer-events-none">

          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-2xl z-40"
              initial={{
                x: `${(i * 37) % 100}%`,
                y: "110%",
                opacity: 0,
                scale: 0,
              }}
              animate={{
                y: "-20%",
                opacity: [0, 0.8, 0.8, 0],
                scale: [0, 1.5, 1, 0.5],
                rotate: 360,
              }}
              transition={{
                duration: 5 + (i % 3),
                delay: (i % 5) * 0.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              style={{
                filter:
                  "drop-shadow(0 0 10px rgba(236,72,153,0.6))",
              }}
            >
              {["💖", "🌸", "💕", "🌺", "💝", "🌹", "✨"][i % 7]}
            </motion.div>
          ))}

        </div>
      )}

    </div>
  )
}
