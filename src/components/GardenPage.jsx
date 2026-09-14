"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import "./flower-animation.css"

const stars = [
  [5, 10],
  [12, 22],
  [18, 8],
  [25, 18],
  [33, 7],
  [41, 14],
  [49, 6],
  [57, 20],
  [65, 9],
  [73, 17],
  [82, 7],
  [90, 23],
  [96, 11],
  [8, 38],
  [21, 31],
  [31, 43],
  [45, 35],
  [60, 40],
  [76, 34],
  [88, 42],
]

/* =========================================================
   FLOWER DATA
   ========================================================= */

const flowers = [
  {
    left: "39%",
    scale: "0.78",
    delay: "0.15s",
    className: "flower--1",
  },
  {
    left: "50%",
    scale: "0.95",
    delay: "0s",
    className: "flower--2",
  },
  {
    left: "61%",
    scale: "0.78",
    delay: "0.3s",
    className: "flower--3",
  },
  {
    left: "70%",
    scale: "0.62",
    delay: "0.55s",
    className: "flower--4",
  },
]

/* =========================================================
   ONE VIDEO-STYLE FLOWER
   ========================================================= */

function Flower({ className }) {
  return (
    <div className={`flower ${className}`}>
      {/* FLOWER HEAD */}
      <div className="flower__leafs">
        <div className="flower__leaf flower__leaf--1" />
        <div className="flower__leaf flower__leaf--2" />
        <div className="flower__leaf flower__leaf--3" />
        <div className="flower__leaf flower__leaf--4" />

        <div className="flower__white-circle" />

        <div className="flower__light flower__light--1" />
        <div className="flower__light flower__light--2" />
        <div className="flower__light flower__light--3" />
        <div className="flower__light flower__light--4" />
        <div className="flower__light flower__light--5" />
        <div className="flower__light flower__light--6" />
        <div className="flower__light flower__light--7" />
        <div className="flower__light flower__light--8" />
      </div>

      {/* STEM */}
      <div className="flower__line">
        <div className="flower__line__leaf flower__line__leaf--1" />
        <div className="flower__line__leaf flower__line__leaf--2" />
        <div className="flower__line__leaf flower__line__leaf--3" />
        <div className="flower__line__leaf flower__line__leaf--4" />
        <div className="flower__line__leaf flower__line__leaf--5" />
        <div className="flower__line__leaf flower__line__leaf--6" />
      </div>
    </div>
  )
}

/* =========================================================
   LONG FLOWER / GRASS
   ========================================================= */

function LongFlower() {
  return (
    <div className="flower__g-long grow-ans">
      <div className="flower__g-long__top" />
      <div className="flower__g-long__bottom" />
    </div>
  )
}

function GrowingGrass() {
  const leaves = Array.from({ length: 8 }, (_, i) => i + 1)

  return (
    <>
      <div className="growing-grass">
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top" />
          <div className="flower__grass--bottom" />

          {leaves.map((i) => (
            <div
              key={i}
              className={`flower__grass__leaf flower__grass__leaf--${i}`}
            />
          ))}

          <div className="flower__grass__overlay" />
        </div>

        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top" />
          <div className="flower__grass--bottom" />

          {leaves.map((i) => (
            <div
              key={i}
              className={`flower__grass__leaf flower__grass__leaf--${i}`}
            />
          ))}

          <div className="flower__grass__overlay" />
        </div>
      </div>
    </>
  )
}

/* =========================================================
   BACKGROUND FOLIAGE
   ========================================================= */

function RightFoliage() {
  return (
    <div className="flower__g-right">
      <div className="leaf flower__g-right--1" />
      <div className="leaf flower__g-right--2" />
    </div>
  )
}

function FrontFoliage() {
  return (
    <div className="flower__g-front">
      <div className="flower__g-front__leaf-wrapper">
        <div className="flower__g-front__leaf" />
      </div>

      <div className="flower__g-front__leaf-wrapper">
        <div className="flower__g-front__leaf" />
      </div>

      <div className="flower__g-front__leaf-wrapper">
        <div className="flower__g-front__leaf" />
      </div>

      <div className="flower__g-front__leaf-wrapper">
        <div className="flower__g-front__leaf" />
      </div>

      <div className="flower__g-front__leaf-wrapper">
        <div className="flower__g-front__leaf" />
      </div>

      <div className="flower__g-front__leaf-wrapper">
        <div className="flower__g-front__leaf" />
      </div>
    </div>
  )
}

function FrontBranch() {
  return (
    <div className="flower__g-fr">
      <div className="leaf" />

      <div className="flower__g-fr__leaf flower__g-fr__leaf--1" />
      <div className="flower__g-fr__leaf flower__g-fr__leaf--2" />
      <div className="flower__g-fr__leaf flower__g-fr__leaf--3" />
      <div className="flower__g-fr__leaf flower__g-fr__leaf--4" />
      <div className="flower__g-fr__leaf flower__g-fr__leaf--5" />
    </div>
  )
}

function LongGrass() {
  return (
    <>
      {Array.from({ length: 8 }, (_, index) => (
        <div
          key={index}
          className={`long-g long-g--${index}`}
        >
          <div className="leaf leaf--0" />
          <div className="leaf leaf--1" />
          <div className="leaf leaf--2" />
          <div className="leaf leaf--3" />
        </div>
      ))}
    </>
  )
}

/* =========================================================
   COMPLETE FLOWER SCENE
   ========================================================= */

function FlowerScene() {
  return (
    <div className="video-flower-stage">
      <div className="flowers">
        {flowers.map((flower) => (
          <div
            key={flower.className}
            className="flower-wrap"
            style={{
              "--flower-left": flower.left,
              "--flower-scale": flower.scale,
              "--flower-delay": flower.delay,
            }}
          >
            <Flower className={flower.className} />
          </div>
        ))}

        {/* BACK / SIDE FOLIAGE */}
        <LongFlower />
        <LongFlower />

        <GrowingGrass />
        <RightFoliage />
        <FrontFoliage />
        <FrontBranch />
        <LongGrass />
      </div>

      {/* FRONT GRASS */}
      <div className="video-grass">
        {Array.from({ length: 30 }, (_, index) => (
          <span
            key={index}
            className="video-grass__blade"
            style={{
              left: `${(index / 29) * 100}%`,
              height: `${28 + (index % 5) * 7}px`,
              transform: `rotate(${(index % 5) - 2}deg)`,
            }}
          />
        ))}
      </div>

      <div className="video-ground-glow" />
    </div>
  )
}

/* =========================================================
   FIREFLIES
   ========================================================= */

function Fireflies() {
  const lights = [
    [13, 35],
    [22, 53],
    [31, 28],
    [69, 34],
    [78, 50],
    [88, 30],
    [16, 67],
    [84, 66],
  ]

  return (
    <>
      {lights.map(([left, top], index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: 3,
            height: 3,
            background: "#b9fff0",
            boxShadow: "0 0 12px 4px rgba(110,255,220,.55)",
          }}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 2.5 + (index % 3) * 0.5,
            delay: (index % 4) * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}

/* =========================================================
   BIRDS + BUTTERFLIES
   ========================================================= */

function SkyCreatures({ active }) {
  const [bird, setBird] = useState(0)
  const audioRef = useRef(null)

  useEffect(() => {
    if (!active) return

    /*
      Bird sound is generated locally with Web Audio.
      No audio file / external URL needed.
    */
    const playBirdCall = () => {
      try {
        const AudioContext =
          window.AudioContext || window.webkitAudioContext

        if (!AudioContext) return

        if (!audioRef.current) {
          audioRef.current = new AudioContext()
        }

        const ctx = audioRef.current

        if (ctx.state === "suspended") {
          ctx.resume()
        }

        const now = ctx.currentTime

        const notes = [1100, 1450, 1180]

        notes.forEach((frequency, index) => {
          const oscillator = ctx.createOscillator()
          const gain = ctx.createGain()

          oscillator.type = "sine"
          oscillator.frequency.setValueAtTime(
            frequency,
            now + index * 0.11
          )

          gain.gain.setValueAtTime(
            0.0001,
            now + index * 0.11
          )

          gain.gain.exponentialRampToValueAtTime(
            0.045,
            now + index * 0.11 + 0.025
          )

          gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + index * 0.11 + 0.13
          )

          oscillator.connect(gain)
          gain.connect(ctx.destination)

          oscillator.start(now + index * 0.11)
          oscillator.stop(now + index * 0.11 + 0.15)
        })
      } catch {
        // Audio is optional; visual animation continues.
      }
    }

    const interval = setInterval(() => {
      setBird((value) => value + 1)
      playBirdCall()
    }, 1700)

    return () => {
      clearInterval(interval)
    }
  }, [active])

  if (!active) return null

  return (
    <>
      <div
        key={`bird-${bird}`}
        className="garden-bird"
        aria-hidden="true"
      >
        🕊️
      </div>

      <div className="garden-butterfly garden-butterfly--1">
        🦋
      </div>

      <div className="garden-butterfly garden-butterfly--2">
        🦋
      </div>
    </>
  )
}

/* =========================================================
   MAIN PAGE
   ========================================================= */

export default function GardenPage() {
  const [bloomed, setBloomed] = useState(false)

  const handleBloom = () => {
    if (!bloomed) {
      setBloomed(true)
    }
  }

  return (
    <main
      onPointerDown={handleBloom}
      className="relative min-h-[100dvh] w-full overflow-hidden cursor-pointer select-none video-garden"
      style={{
        background: `
          radial-gradient(
            circle at 50% 62%,
            rgba(20,105,110,.25),
            transparent 32%
          ),
          radial-gradient(
            circle at 50% 100%,
            rgba(10,75,65,.35),
            transparent 55%
          ),
          linear-gradient(
            to bottom,
            #020718 0%,
            #061326 48%,
            #071d2a 75%,
            #020b12 100%
          )
        `,
      }}
    >
      {/* STARS */}
      <div className="absolute inset-0 pointer-events-none">
        {stars.map(([left, top], index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: index % 4 === 0 ? 3 : 2,
              height: index % 4 === 0 ? 3 : 2,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.7, 1.3, 0.7],
            }}
            transition={{
              duration: 2.5 + (index % 4),
              delay: (index % 5) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* MOON */}
      <motion.div
        className="absolute top-[13%] right-[10%] w-12 h-12 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 35% 35%,#ffffff,#d9ffff 55%,#7ab7c5)",
          boxShadow: "0 0 35px rgba(160,240,255,.45)",
        }}
        animate={{
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* FIREFLIES */}
      <Fireflies />

      {/* TITLE */}
      <motion.div
        className="absolute top-8 left-0 right-0 z-50 text-center px-5 pointer-events-none"
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
        <h1
          className="text-2xl md:text-4xl font-medium"
          style={{
            color: "#baf9f3",
            textShadow: "0 0 12px rgba(80,230,220,.45)",
          }}
        >
          A LITTLE GARDEN
        </h1>

        {!bloomed && (
          <motion.p
            className="mt-3 text-sm md:text-base"
            style={{
              color: "rgba(210,255,250,.75)",
            }}
            animate={{
              opacity: [0.45, 1, 0.45],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Tap anywhere and let the garden bloom 🌱✨
          </motion.p>
        )}
      </motion.div>

      {/* =====================================================
          FLOWER SCENE
          ===================================================== */}

      {bloomed && (
        <>
          <FlowerScene />

          <SkyCreatures active={bloomed} />

          {/* MEMORY TEXT */}
          <motion.p
            className="absolute bottom-24 left-0 right-0 z-[200] text-center px-6 pointer-events-none"
            style={{
              color: "rgba(210,255,250,.72)",
            }}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.2,
              duration: 1,
            }}
          >
            Every flower here is a memory worth cherishing.
          </motion.p>
        </>
      )}

      {/* FOOTER */}
      <motion.div
        className="absolute bottom-5 left-0 right-0 z-[250] text-center pointer-events-none"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.8,
        }}
      >
        <span
          className="text-xs md:text-sm"
          style={{
            color: "rgba(180,245,235,.5)",
          }}
        >
          A little garden, made with a little touch. 🌸
        </span>
      </motion.div>
    </main>
  )
}
