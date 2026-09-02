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
   VIDEO STYLE GARDEN
   ========================================================= */

const PLANTS = [
  {
    x: 13,
    height: 42,
    flower: 1.0,
    delay: 0.15,
    lean: -8,
    size: 0.82,
  },
  {
    x: 25,
    height: 55,
    flower: 0.92,
    delay: 0.3,
    lean: -5,
    size: 0.95,
  },
  {
    x: 38,
    height: 66,
    flower: 1.08,
    delay: 0.45,
    lean: -3,
    size: 1.08,
  },
  {
    x: 51,
    height: 76,
    flower: 1.2,
    delay: 0.55,
    lean: 0,
    size: 1.25,
  },
  {
    x: 64,
    height: 63,
    flower: 1.08,
    delay: 0.7,
    lean: 4,
    size: 1.08,
  },
  {
    x: 77,
    height: 54,
    flower: 0.95,
    delay: 0.85,
    lean: 6,
    size: 0.95,
  },
  {
    x: 89,
    height: 43,
    flower: 0.82,
    delay: 1,
    lean: 8,
    size: 0.82,
  },
]

function GardenStars() {
  const stars = Array.from({ length: 75 }, (_, i) => ({
    left: `${(i * 37.7) % 100}%`,
    top: `${5 + ((i * 19.3) % 60)}%`,
    size: 1 + (i % 3),
    delay: (i % 9) * 0.35,
  }))

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      {stars.map((star, i) => (
        <motion.span
          key={i}
          animate={{
            opacity: [0.15, 0.8, 0.15],
            scale: [0.7, 1.25, 0.7],
          }}
          transition={{
            duration: 2.5 + (i % 4),
            repeat: Infinity,
            delay: star.delay,
          }}
          style={{
            position: "absolute",
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            borderRadius: "50%",
            background: "#8dfcff",
            boxShadow: "0 0 7px #42e9ef",
          }}
        />
      ))}
    </div>
  )
}

function Fireflies() {
  const bugs = [
    [8, 61, 0.2],
    [19, 73, 1.2],
    [31, 54, 2.1],
    [44, 66, 0.8],
    [57, 48, 1.7],
    [70, 69, 2.6],
    [84, 57, 1.4],
    [94, 72, 0.5],
    [27, 84, 2.4],
    [74, 86, 1],
  ]

  return (
    <>
      {bugs.map(([x, y, delay], i) => (
        <motion.div
          key={i}
          animate={{
            x: [0, 10, -7, 0],
            y: [0, -12, 5, 0],
            opacity: [0.15, 1, 0.25, 0.15],
            scale: [0.7, 1.2, 0.8, 0.7],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay,
          }}
          style={{
            position: "absolute",
            left: `${x}%`,
            top: `${y}%`,
            width: 4,
            height: 4,
            borderRadius: "50%",
            background: "#b7ffff",
            boxShadow:
              "0 0 5px #8fffff, 0 0 14px rgba(55,245,255,.7)",
            zIndex: 8,
          }}
        />
      ))}
    </>
  )
}

/* ---------- Leaf ---------- */

function Leaf({
  left,
  bottom,
  rotate = 0,
  scale = 1,
  delay = 0,
  side = 1,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        rotate: rotate - side * 18,
      }}
      animate={{
        opacity: 1,
        scale,
        rotate,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut",
      }}
      style={{
        position: "absolute",
        left: `${left}%`,
        bottom: `${bottom}%`,
        width: 28,
        height: 12,
        transformOrigin: side === 1 ? "left center" : "right center",
        zIndex: 6,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius:
            side === 1
              ? "100% 0 100% 0"
              : "0 100% 0 100%",
          background:
            "linear-gradient(135deg, #9cff9a 0%, #39b76c 38%, #126642 100%)",
          boxShadow:
            "0 0 7px rgba(60,255,174,.35), inset 0 0 5px rgba(200,255,200,.25)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "80%",
            height: 1,
            top: "50%",
            left: "10%",
            background: "rgba(210,255,210,.5)",
            transform: "rotate(-4deg)",
          }}
        />
      </div>
    </motion.div>
  )
}

/* ---------- Flower ---------- */

function Flower({ scale = 1, delay = 0 }) {
  const petals = [
    { x: 0, y: -25, r: 0 },
    { x: 23, y: -10, r: 60 },
    { x: 18, y: 18, r: 120 },
    { x: -18, y: 18, r: -120 },
    { x: -23, y: -10, r: -60 },
    { x: 0, y: 5, r: 180 },
  ]

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        scale,
        y: 0,
      }}
      transition={{
        duration: 1.1,
        delay,
        type: "spring",
        stiffness: 90,
        damping: 10,
      }}
      style={{
        position: "absolute",
        width: 82,
        height: 82,
        left: "50%",
        top: 0,
        transform: "translateX(-50%)",
        zIndex: 12,
      }}
    >
      {petals.map((petal, i) => (
        <motion.div
          key={i}
          animate={{
            rotate: [petal.r - 2, petal.r + 2, petal.r - 2],
            scale: [0.97, 1.03, 0.97],
          }}
          transition={{
            duration: 3.5 + i * 0.15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            width: 34,
            height: 48,
            left: `calc(50% + ${petal.x}px)`,
            top: `calc(50% + ${petal.y}px)`,
            transformOrigin: "50% 90%",
            transform: `translate(-50%, -50%) rotate(${petal.r}deg)`,
            borderRadius: "55% 55% 48% 48%",
            background:
              "radial-gradient(circle at 50% 25%, #dfffff 0%, #73f9f2 18%, #19cfd0 55%, #087b87 100%)",
            boxShadow:
              "0 0 8px rgba(100,255,255,.9), 0 0 22px rgba(24,225,231,.75), 0 0 40px rgba(12,160,175,.45)",
          }}
        />
      ))}

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 25,
          height: 25,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 35% 30%, #ffffff 0%, #caffff 22%, #65e9e4 50%, #0b969b 100%)",
          boxShadow:
            "0 0 10px #dfffff, 0 0 22px rgba(79,255,255,.9)",
          zIndex: 20,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 8,
          height: 8,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background: "#ffffff",
          boxShadow: "0 0 10px white",
          zIndex: 21,
        }}
      />
    </motion.div>
  )
}

/* ---------- Plant ---------- */

function FlowerPlant({
  x,
  height,
  flower,
  delay,
  lean,
  size,
  index,
}) {
  const leafData = [
    { left: -12, bottom: 17, rotate: -42, scale: 0.75, side: -1 },
    { left: 2, bottom: 27, rotate: 34, scale: 0.8, side: 1 },
    { left: -10, bottom: 38, rotate: -45, scale: 0.72, side: -1 },
    { left: 2, bottom: 47, rotate: 38, scale: 0.78, side: 1 },
    { left: -8, bottom: 58, rotate: -43, scale: 0.7, side: -1 },
    { left: 3, bottom: 68, rotate: 35, scale: 0.7, side: 1 },
    { left: -6, bottom: 78, rotate: -38, scale: 0.65, side: -1 },
  ]

  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleY: 0,
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
      }}
      transition={{
        duration: 1.2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        position: "absolute",
        left: `${x}%`,
        bottom: "7%",
        width: 90,
        height: `${height}%`,
        transformOrigin: "bottom center",
        zIndex: 5,
      }}
    >
      {/* Curved stem */}
      <svg
        viewBox="0 0 100 500"
        preserveAspectRatio="none"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          overflow: "visible",
          transform: `rotate(${lean}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <defs>
          <linearGradient
            id={`stem-${index}`}
            x1="0"
            y1="1"
            x2="0.8"
            y2="0"
          >
            <stop offset="0%" stopColor="#0b563d" />
            <stop offset="35%" stopColor="#15945d" />
            <stop offset="70%" stopColor="#42ce7b" />
            <stop offset="100%" stopColor="#75f2a4" />
          </linearGradient>
        </defs>

        <motion.path
          d="M50 500 C42 390 61 300 46 200 C37 125 53 70 50 12"
          fill="none"
          stroke={`url(#stem-${index})`}
          strokeWidth="6"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 1.4,
            delay: delay + 0.1,
            ease: "easeOut",
          }}
          style={{
            filter: "drop-shadow(0 0 3px rgba(66,255,159,.45))",
          }}
        />
      </svg>

      {/* Leaves */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: `rotate(${lean}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        {leafData.map((leaf, i) => (
          <Leaf
            key={i}
            {...leaf}
            delay={delay + 0.25 + i * 0.09}
          />
        ))}
      </div>

      {/* Flower */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "-6%",
          width: 90,
          height: 90,
          transform: `translateX(-50%) rotate(${lean}deg)`,
          transformOrigin: "bottom center",
        }}
      >
        <Flower
          scale={flower * size}
          delay={delay + 0.9}
        />
      </div>
    </motion.div>
  )
}

/* ---------- Grass ---------- */

function GrassBlade({ left, height, rotate, delay }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scaleY: 0,
      }}
      animate={{
        opacity: 1,
        scaleY: 1,
      }}
      transition={{
        duration: 0.7,
        delay,
      }}
      style={{
        position: "absolute",
        left: `${left}%`,
        bottom: "2%",
        width: 3,
        height,
        borderRadius: "100% 0",
        background:
          "linear-gradient(to top, #0a4c35, #27a968, #72ed9a)",
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "bottom center",
        zIndex: 4,
      }}
    />
  )
}

function GroundGrass() {
  const blades = Array.from({ length: 85 }, (_, i) => ({
    left: (i * 17.3) % 100,
    height: 10 + ((i * 13) % 30),
    rotate: -28 + ((i * 31) % 56),
    delay: 0.3 + (i % 15) * 0.035,
  }))

  return (
    <>
      {blades.map((blade, i) => (
        <GrassBlade key={i} {...blade} />
      ))}

      <div
        style={{
          position: "absolute",
          left: "0",
          right: "0",
          bottom: "0",
          height: "15%",
          background:
            "radial-gradient(ellipse at center bottom, rgba(15,118,72,.48), rgba(4,25,20,.05) 70%, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />
    </>
  )
}

/* ---------- Garden ---------- */

function GardenPage({ onNext }) {
  const [grown, setGrown] = useState(false)

  const growGarden = () => {
    setGrown(true)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7 }}
      onClick={growGarden}
      style={{
        position: "relative",
        width: "100%",
        height: "100dvh",
        minHeight: "100vh",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 50% 90%, #07352d 0%, #031b1c 38%, #01090e 75%, #000509 100%)",
        cursor: grown ? "default" : "pointer",
      }}
    >
      <GardenStars />
      <Fireflies />

      {/* Very subtle horizon glow */}
      <div
        style={{
          position: "absolute",
          left: "10%",
          right: "10%",
          bottom: "8%",
          height: "30%",
          background:
            "radial-gradient(ellipse at center, rgba(21,185,177,.13), transparent 68%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      {/* Garden */}
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "78%",
        }}
      >
        <GroundGrass />

        {/* 7 flower plants */}
        {PLANTS.map((plant, i) => (
          <FlowerPlant
            key={i}
            {...plant}
            index={i}
            delay={
              grown
                ? plant.delay
                : plant.delay + 0.2
            }
          />
        ))}

        {/* Dense bottom leaves */}
        {[
          [7, 13, -32, 0.8],
          [14, 10, 35, 0.75],
          [21, 8, -40, 0.7],
          [29, 11, 38, 0.85],
          [35, 7, -30, 0.72],
          [42, 9, 35, 0.82],
          [48, 7, -42, 0.7],
          [55, 10, 37, 0.82],
          [61, 8, -35, 0.76],
          [68, 11, 42, 0.8],
          [75, 7, -38, 0.7],
          [82, 10, 34, 0.8],
          [89, 8, -35, 0.72],
          [95, 12, 32, 0.75],
        ].map(([left, bottom, rotate, scale], i) => (
          <Leaf
            key={`ground-${i}`}
            left={left}
            bottom={bottom}
            rotate={rotate}
            scale={scale}
            side={rotate > 0 ? 1 : -1}
            delay={0.8 + i * 0.05}
          />
        ))}
      </div>

      {/* Initial tiny sprout / instruction */}
      <AnimatePresence>
        {!grown && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0.45, 1, 0.45],
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: 20,
            }}
            transition={{
              opacity: {
                duration: 2,
                repeat: Infinity,
              },
              y: {
                duration: 0.6,
              },
            }}
            style={{
              position: "absolute",
              left: "50%",
              bottom: "7%",
              transform: "translateX(-50%)",
              color: "rgba(190,255,250,.8)",
              fontSize: 13,
              letterSpacing: 2,
              textAlign: "center",
              zIndex: 30,
              textShadow: "0 0 12px rgba(86,255,255,.7)",
            }}
          >
            TAP TO GROW 🌱
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small title after garden grows */}
      <AnimatePresence>
        {grown && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 2.8,
              duration: 1,
            }}
            style={{
              position: "absolute",
              top: "7%",
              left: "50%",
              transform: "translateX(-50%)",
              color: "rgba(220,255,255,.88)",
              fontSize: "clamp(16px, 4vw, 23px)",
              letterSpacing: 3,
              textAlign: "center",
              textShadow:
                "0 0 10px rgba(74,255,255,.75), 0 0 25px rgba(40,200,210,.4)",
              zIndex: 30,
              whiteSpace: "nowrap",
            }}
          >
            A LITTLE GARDEN 🌸
          </motion.div>
        )}
      </AnimatePresence>

      {/* Next button */}
      <AnimatePresence>
        {grown && onNext && (
          <motion.button
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 3.5,
              duration: 0.8,
            }}
            onClick={(e) => {
              e.stopPropagation()
              onNext()
            }}
            style={{
              position: "absolute",
              bottom: "3.5%",
              left: "50%",
              transform: "translateX(-50%)",
              padding: "10px 20px",
              borderRadius: 30,
              border: "1px solid rgba(110,255,255,.35)",
              background: "rgba(0,35,38,.55)",
              color: "#d8ffff",
              fontSize: 13,
              letterSpacing: 1.5,
              backdropFilter: "blur(8px)",
              boxShadow:
                "0 0 20px rgba(40,240,240,.15)",
              zIndex: 40,
            }}
          >
            CONTINUE ✨
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

/* =========================================================
   HOME
   ========================================================= */

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0)

  const pages = [
    OpeningPage,
    DiaryPage,
    ApologyPage,
    LetterPage,
    HugPage,
    GiftPage,
    GardenPage,
  ]

  const CurrentComponent = pages[currentPage]

  const nextPage = () => {
    setCurrentPage((prev) =>
      Math.min(prev + 1, pages.length - 1)
    )
  }

  const previousPage = () => {
    setCurrentPage((prev) =>
      Math.max(prev - 1, 0)
    )
  }

  return (
    <main
      style={{
        width: "100%",
        minHeight: "100dvh",
        overflow: "hidden",
        position: "relative",
        background: "#000",
      }}
    >
      <StarryBackground />

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{
            opacity: 0,
            scale: 0.985,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.015,
          }}
          transition={{
            duration: 0.55,
            ease: "easeInOut",
          }}
          style={{
            position: "relative",
            width: "100%",
            minHeight: "100dvh",
          }}
        >
          <CurrentComponent
            onNext={nextPage}
            onPrevious={previousPage}
            currentPage={currentPage}
            totalPages={pages.length}
          />
        </motion.div>
      </AnimatePresence>

      <MusicPlayer />
    </main>
  )
}
