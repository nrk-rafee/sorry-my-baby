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
   🌸 VIDEO STYLE FLOWER
========================================================= */

function VideoFlower({
  size = 90,
  delay = 0,
}) {
  const petals = [
    { x: 50, y: 23, r: 0 },
    { x: 73, y: 43, r: 55 },
    { x: 64, y: 70, r: 105 },
    { x: 36, y: 70, r: -105 },
    { x: 27, y: 43, r: -55 },
  ]

  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size * 0.82,
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
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {petals.map((petal, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            width: size * 0.46,
            height: size * 0.58,
            transform: `translate(-50%, -50%) rotate(${petal.r}deg)`,
            transformOrigin: "50% 90%",
            borderRadius: "55% 55% 48% 48%",
            background: `
              radial-gradient(
                ellipse at 48% 20%,
                #ffe4ef 0%,
                #ffb5d0 34%,
                #f58bb5 68%,
                #df679e 100%
              )
            `,
            boxShadow: `
              0 0 9px rgba(255,155,200,.55),
              inset 0 -8px 12px rgba(211,70,135,.12)
            `,
          }}
          animate={{
            rotate: [
              petal.r - 1,
              petal.r + 1,
              petal.r - 1,
            ],
          }}
          transition={{
            duration: 3.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* pale flower cup */}
      <div
        className="absolute left-1/2"
        style={{
          bottom: size * 0.13,
          width: size * 0.55,
          height: size * 0.2,
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(ellipse at center,#fff2f7 0%,#ffd8e8 55%,#f28db6 100%)",
          boxShadow: "0 0 12px rgba(255,185,215,.4)",
        }}
      />

      {/* yellow center */}
      <div
        className="absolute left-1/2"
        style={{
          bottom: size * 0.19,
          width: size * 0.08,
          height: size * 0.08,
          transform: "translateX(-50%)",
          borderRadius: "50%",
          background: "#ffd85b",
          boxShadow: "0 0 9px rgba(255,216,91,.95)",
        }}
      />
    </motion.div>
  )
}

/* =========================================================
   🍃 VIDEO STYLE LEAF
========================================================= */

function VideoLeaf({
  left,
  top,
  size = 55,
  rotate = 0,
  delay = 0,
}) {
  return (
    <motion.div
      className="absolute"
      style={{
        left,
        top,
        width: size,
        height: size * 0.55,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "center",
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
        duration: 0.65,
        delay,
        ease: "backOut",
      }}
    >
      <motion.div
        className="w-full h-full"
        style={{
          borderRadius: "75% 0 75% 25%",
          background:
            "linear-gradient(135deg,#22a852 0%,#087337 52%,#043c22 100%)",
          boxShadow: "inset -5px -5px 10px rgba(0,0,0,.2)",
        }}
        animate={{
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

/* =========================================================
   🌿 ONE VIDEO STYLE FLOWER STEM
========================================================= */

function FlowerStem({
  left,
  height,
  flowerSize,
  delay,
  tilt = 0,
  flowerOffset = 0,
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left,
        width: 80,
        height,
        transform: "translateX(-50%)",
        transformOrigin: "bottom center",
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
        duration: 1.15,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          transformOrigin: "bottom center",
        }}
        animate={{
          rotate: [tilt - 1.2, tilt + 1.2, tilt - 1.2],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* stem */}
        <div
          className="absolute bottom-0 left-1/2"
          style={{
            width: 7,
            height: "100%",
            transform: "translateX(-50%)",
            borderRadius: 999,
            background:
              "linear-gradient(to right,#07502b,#20a34c,#07502b)",
            boxShadow:
              "0 0 5px rgba(30,190,80,.35)",
          }}
        />

        {/* leaves */}
        <VideoLeaf
          left="-5px"
          top="27%"
          size={47}
          rotate={-32}
          delay={delay + 0.25}
        />

        <VideoLeaf
          left="28px"
          top="36%"
          size={52}
          rotate={31}
          delay={delay + 0.35}
        />

        <VideoLeaf
          left="-13px"
          top="48%"
          size={58}
          rotate={-36}
          delay={delay + 0.45}
        />

        <VideoLeaf
          left="29px"
          top="56%"
          size={55}
          rotate={34}
          delay={delay + 0.55}
        />

        <VideoLeaf
          left="-16px"
          top="68%"
          size={62}
          rotate={-34}
          delay={delay + 0.65}
        />

        <VideoLeaf
          left="28px"
          top="75%"
          size={55}
          rotate={32}
          delay={delay + 0.75}
        />

        {/* flower */}
        <div
          className="absolute left-1/2"
          style={{
            top: flowerOffset,
            transform: "translateX(-50%)",
          }}
        >
          <VideoFlower
            size={flowerSize}
            delay={delay + 0.75}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

/* =========================================================
   🌱 CURVED GRASS
========================================================= */

function CurvedGrass({
  left,
  height,
  rotate,
  delay,
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left,
        width: 55,
        height,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "bottom center",
      }}
      initial={{
        scaleY: 0,
      }}
      animate={{
        scaleY: 1,
      }}
      transition={{
        duration: 1,
        delay,
      }}
    >
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 4,
          height: "100%",
          borderRadius: 999,
          background:
            "linear-gradient(to top,#073b24,#0e7b39,#27b950)",
          transform: "translateX(-50%) rotate(-8deg)",
          transformOrigin: "bottom",
        }}
        animate={{
          rotate: [-8, 5, -8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

/* =========================================================
   ❤️ FLOATING HEART
========================================================= */

function FloatingHeart({
  left,
  top,
  size = 18,
  delay = 0,
}) {
  return (
    <motion.div
      className="absolute z-30 pointer-events-none"
      style={{
        left,
        top,
        fontSize: size,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 0.9, 0.7, 0],
        y: [10, -20, -55, -90],
        x: [0, 8, -4, 7],
        scale: [0.4, 1, 0.85, 0.5],
      }}
      transition={{
        duration: 5,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ❤️
    </motion.div>
  )
}

/* =========================================================
   🟢 GREEN GLOW CIRCLE
========================================================= */

function GlowCircle({
  left,
  top,
  size = 35,
  delay = 0,
}) {
  return (
    <motion.div
      className="absolute rounded-full z-20 pointer-events-none"
      style={{
        left,
        top,
        width: size,
        height: size,
        border: "2px solid rgba(24,225,151,.8)",
        boxShadow:
          "0 0 10px rgba(24,225,151,.3), inset 0 0 8px rgba(24,225,151,.15)",
      }}
      animate={{
        opacity: [0.15, 0.8, 0.15],
        scale: [0.9, 1.08, 0.9],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

/* =========================================================
   ✨ BACKGROUND PARTICLES
========================================================= */

function Particles() {
  const particles = [
    [7, 31, 3],
    [13, 18, 2],
    [21, 38, 2],
    [29, 25, 3],
    [38, 18, 2],
    [47, 30, 3],
    [56, 21, 2],
    [65, 34, 3],
    [74, 17, 2],
    [82, 29, 3],
    [91, 20, 2],
    [96, 38, 2],
    [17, 51, 2],
    [78, 47, 2],
  ]

  return (
    <>
      {particles.map(([left, top, size], i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            background:
              i % 2 === 0 ? "#16c875" : "#f7c768",
            boxShadow:
              i % 2 === 0
                ? "0 0 9px rgba(22,200,117,.8)"
                : "0 0 8px rgba(247,199,104,.75)",
          }}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
            y: [-4, 5, -4],
          }}
          transition={{
            duration: 2.5 + (i % 4) * 0.45,
            delay: (i % 5) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

/* =========================================================
   🌺 GARDEN PAGE
========================================================= */

function GardenPage() {
  const [bloomed, setBloomed] = useState(false)

  const bloomGarden = () => {
    setBloomed(true)
  }

  return (
    <div
      onPointerDown={bloomGarden}
      className="relative w-full h-[100dvh] overflow-hidden cursor-pointer select-none"
      style={{
        background: `
          radial-gradient(
            ellipse at 50% 62%,
            rgba(77,20,69,.45),
            transparent 42%
          ),
          radial-gradient(
            ellipse at 50% 100%,
            rgba(8,76,40,.5),
            transparent 60%
          ),
          linear-gradient(
            to bottom,
            #09020d 0%,
            #130414 43%,
            #180519 72%,
            #020807 100%
          )
        `,
      }}
    >
      {/* =================================================
          ✨ STARS
      ================================================= */}

      <Particles />

      {/* small stars */}
      {[
        [5, 12],
        [12, 8],
        [19, 19],
        [28, 11],
        [36, 20],
        [44, 8],
        [52, 16],
        [60, 9],
        [68, 21],
        [76, 12],
        [85, 18],
        [94, 9],
      ].map(([left, top], i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: i % 3 === 0 ? 2 : 1,
            height: i % 3 === 0 ? 2 : 1,
            boxShadow: "0 0 5px white",
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
          }}
          transition={{
            duration: 2 + (i % 3),
            delay: i * 0.2,
            repeat: Infinity,
          }}
        />
      ))}

      {/* =================================================
          💬 VIDEO STYLE TEXT
      ================================================= */}

      <motion.div
        className="absolute top-[6%] left-0 right-0 z-50 text-center px-5 pointer-events-none"
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
      >
        <p
          className="text-[9px] md:text-xs tracking-[0.45em] text-pink-200/60 uppercase"
        >
          FOR YOU
        </p>

        <h1
          className="mt-2 text-xl md:text-3xl text-white"
          style={{
            fontFamily: "cursive",
            textShadow:
              "0 0 12px rgba(255,170,210,.55)",
          }}
        >
          Every flower here
          <br />
          is a moment with you
        </h1>
      </motion.div>

      {/* =================================================
          🦋 SMALL BUTTERFLIES
      ================================================= */}

      <motion.div
        className="absolute z-30 text-xl pointer-events-none"
        style={{
          left: "13%",
          top: "25%",
        }}
        animate={{
          x: [0, 45, 90, 45, 0],
          y: [0, -20, 5, -25, 0],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🦋
      </motion.div>

      <motion.div
        className="absolute z-30 text-sm pointer-events-none"
        style={{
          right: "14%",
          top: "31%",
        }}
        animate={{
          x: [0, -50, -90, -40, 0],
          y: [0, 20, -10, 18, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🦋
      </motion.div>

      {/* =================================================
          🌱 GARDEN BLOOM
      ================================================= */}

      <AnimatePresence>
        {bloomed && (
          <>
            {/* ------------------------------------------------
                SIDE CURVED GRASS
            ------------------------------------------------ */}

            <CurvedGrass
              left="2%"
              height="29vh"
              rotate={-10}
              delay={0.05}
            />

            <CurvedGrass
              left="8%"
              height="22vh"
              rotate={8}
              delay={0.1}
            />

            <CurvedGrass
              left="90%"
              height="25vh"
              rotate={8}
              delay={0.15}
            />

            <CurvedGrass
              left="96%"
              height="31vh"
              rotate={-8}
              delay={0.2}
            />

            {/* ------------------------------------------------
                MAIN VIDEO-LIKE FLOWER CLUSTER
            ------------------------------------------------ */}

            <FlowerStem
              left="32%"
              height="47vh"
              flowerSize={76}
              delay={0.05}
              tilt={-5}
              flowerOffset={-5}
            />

            <FlowerStem
              left="43%"
              height="57vh"
              flowerSize={88}
              delay={0.15}
              tilt={-2}
              flowerOffset={-8}
            />

            <FlowerStem
              left="53%"
              height="65vh"
              flowerSize={96}
              delay={0.25}
              tilt={0}
              flowerOffset={-10}
            />

            <FlowerStem
              left="63%"
              height="54vh"
              flowerSize={84}
              delay={0.18}
              tilt={3}
              flowerOffset={-7}
            />

            <FlowerStem
              left="74%"
              height="45vh"
              flowerSize={72}
              delay={0.08}
              tilt={6}
              flowerOffset={-5}
            />

            {/* ------------------------------------------------
                SMALLER SIDE FLOWERS
            ------------------------------------------------ */}

            <FlowerStem
              left="20%"
              height="34vh"
              flowerSize={54}
              delay={0.12}
              tilt={-7}
              flowerOffset={-3}
            />

            <FlowerStem
              left="84%"
              height="32vh"
              flowerSize={52}
              delay={0.18}
              tilt={7}
              flowerOffset={-3}
            />

            {/* ------------------------------------------------
                DENSE LOWER FOLIAGE
            ------------------------------------------------ */}

            {[
              ["10%", "70%", 65, -35],
              ["19%", "77%", 72, 28],
              ["27%", "65%", 78, -28],
              ["35%", "78%", 82, 32],
              ["44%", "69%", 88, -24],
              ["53%", "78%", 90, 25],
              ["62%", "67%", 84, -29],
              ["72%", "77%", 82, 31],
              ["81%", "68%", 73, -27],
              ["89%", "78%", 68, 28],
            ].map(([left, top, size, rotate], i) => (
              <VideoLeaf
                key={i}
                left={left}
                top={top}
                size={size}
                rotate={rotate}
                delay={0.55 + i * 0.06}
              />
            ))}

            {/* ------------------------------------------------
                LOWER GRASS BLADES
            ------------------------------------------------ */}

            {[7, 13, 24, 30, 39, 48, 58, 67, 76, 86, 93].map(
              (left, i) => (
                <motion.div
                  key={i}
                  className="absolute bottom-0"
                  style={{
                    left: `${left}%`,
                    width: 3,
                    height: `${15 + (i % 4) * 4}vh`,
                    background:
                      "linear-gradient(to top,#064125,#159443)",
                    borderRadius: 999,
                    transformOrigin: "bottom",
                    transform: `rotate(${
                      i % 2 === 0 ? -8 : 8
                    }deg)`,
                  }}
                  initial={{
                    scaleY: 0,
                  }}
                  animate={{
                    scaleY: 1,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.4 + i * 0.05,
                  }}
                />
              )
            )}

            {/* ------------------------------------------------
                GREEN CIRCLES
            ------------------------------------------------ */}

            <GlowCircle
              left="18%"
              top="39%"
              size={43}
              delay={0.3}
            />

            <GlowCircle
              left="73%"
              top="28%"
              size={39}
              delay={1.2}
            />

            <GlowCircle
              left="55%"
              top="48%"
              size={36}
              delay={0.8}
            />

            {/* ------------------------------------------------
                FLOATING HEARTS
            ------------------------------------------------ */}

            <FloatingHeart
              left="11%"
              top="32%"
              size={22}
              delay={0.4}
            />

            <FloatingHeart
              left="25%"
              top="44%"
              size={18}
              delay={1.6}
            />

            <FloatingHeart
              left="42%"
              top="38%"
              size={20}
              delay={0.9}
            />

            <FloatingHeart
              left="62%"
              top="43%"
              size={17}
              delay={2}
            />

            <FloatingHeart
              left="79%"
              top="36%"
              size={22}
              delay={1.2}
            />

            <FloatingHeart
              left="91%"
              top="45%"
              size={16}
              delay={2.5}
            />

            {/* ------------------------------------------------
                MAGICAL CENTER GLOW
            ------------------------------------------------ */}

            <motion.div
              className="absolute bottom-[10%] left-1/2 pointer-events-none"
              style={{
                width: "70vw",
                maxWidth: 650,
                height: "35vh",
                transform: "translateX(-50%)",
                background:
                  "radial-gradient(ellipse at center bottom,rgba(24,130,66,.28),transparent 68%)",
                filter: "blur(8px)",
              }}
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />

            {/* ------------------------------------------------
                LITTLE SPARKLES
            ------------------------------------------------ */}

            {[
              [15, 59],
              [28, 52],
              [38, 60],
              [57, 55],
              [69, 59],
              [82, 52],
            ].map(([left, top], i) => (
              <motion.div
                key={i}
                className="absolute text-white pointer-events-none"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  fontSize: 13 + (i % 2) * 4,
                  textShadow:
                    "0 0 8px rgba(255,255,255,.8)",
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.7, 1.2, 0.7],
                  y: [0, -7, 0],
                }}
                transition={{
                  duration: 2 + i * 0.2,
                  delay: i * 0.3,
                  repeat: Infinity,
                }}
              >
                ✦
              </motion.div>
            ))}
          </>
        )}
      </AnimatePresence>

      {/* =================================================
          👆 BEFORE TOUCH
      ================================================= */}

      <AnimatePresence>
        {!bloomed && (
          <motion.div
            className="absolute bottom-[9%] left-0 right-0 z-50 text-center pointer-events-none"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <motion.p
              className="text-pink-200/80 text-sm md:text-base"
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Touch anywhere… 🌱
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          🌸 AFTER BLOOM
      ================================================= */}

      <AnimatePresence>
        {bloomed && (
          <motion.p
            className="absolute bottom-4 left-0 right-0 z-50 text-center text-[10px] md:text-xs text-pink-200/35 pointer-events-none"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 2.2,
              duration: 1,
            }}
          >
            A little garden, made with a little love. 🌸
          </motion.p>
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
      {currentPage !== "garden" && <StarryBackground />}

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
