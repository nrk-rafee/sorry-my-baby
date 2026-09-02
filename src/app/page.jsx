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


/* =========================================================
   🌸 FLOWER
========================================================= */

function Flower({ color = "#ff75c8", size = 42 }) {
  const petals = [
    { x: 0, y: -18 },
    { x: 17, y: -6 },
    { x: 11, y: 14 },
    { x: -11, y: 14 },
    { x: -17, y: -6 },
  ]

  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
      animate={{
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {petals.map((petal, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: size * 0.48,
            height: size * 0.58,
            left: `calc(50% + ${petal.x}px - ${size * 0.24}px)`,
            top: `calc(50% + ${petal.y}px - ${size * 0.29}px)`,
            background: color,
            boxShadow: `0 0 14px ${color}99`,
            transform: `rotate(${i * 72}deg)`,
            transformOrigin: "50% 80%",
          }}
        />
      ))}

      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.25,
          height: size * 0.25,
          left: "37.5%",
          top: "37.5%",
          background: "#ffd45c",
          boxShadow: "0 0 10px #ffd45c",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🌿 LEAF
========================================================= */

function Leaf({ side = "left", top = 50, scale = 1 }) {
  return (
    <motion.div
      className="absolute"
      style={{
        top,
        [side]: -18 * scale,
        transformOrigin: side === "left" ? "right center" : "left center",
      }}
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale,
        opacity: 1,
        rotate: side === "left" ? -18 : 18,
      }}
      transition={{
        duration: 0.7,
        delay: 0.45,
        ease: "backOut",
      }}
    >
      <div
        className="rounded-full"
        style={{
          width: 30 * scale,
          height: 14 * scale,
          background:
            "linear-gradient(135deg,#7bdc69,#1d8d49)",
          transform:
            side === "left"
              ? "rotate(-30deg)"
              : "rotate(30deg)",
          boxShadow: "0 0 8px rgba(70,220,100,.25)",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🌱 ONE PLANT
========================================================= */

function Plant({
  left,
  height,
  flowerColor,
  flowerSize,
  delay,
  curve = 0,
  flowerTop = 0,
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left: `${left}%`,
        height,
        width: 100,
        transform: `translateX(-50%)`,
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
        duration: 1.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Main curved stem */}
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 7,
          height: "100%",
          transformOrigin: "bottom",
          borderRadius: 999,
          background:
            "linear-gradient(to top,#123f2a,#258a49,#62d76a)",
          transform: `translateX(-50%) rotate(${curve}deg)`,
          boxShadow: "0 0 7px rgba(80,220,110,.25)",
        }}
        animate={{
          rotate: [curve - 1, curve + 1, curve - 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Left leaves */}
      <Leaf side="left" top="38%" scale={0.9} />
      <Leaf side="left" top="58%" scale={0.72} />
      <Leaf side="left" top="76%" scale={0.62} />

      {/* Right leaves */}
      <Leaf side="right" top="45%" scale={0.85} />
      <Leaf side="right" top="65%" scale={0.7} />

      {/* Flower */}
      <motion.div
        className="absolute left-1/2"
        style={{
          top: flowerTop,
          transform: "translateX(-50%)",
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
          duration: 1,
          delay: delay + 1.1,
          ease: "backOut",
        }}
      >
        <Flower
          color={flowerColor}
          size={flowerSize}
        />
      </motion.div>
    </motion.div>
  )
}


/* =========================================================
   🌿 CURLING VINE
========================================================= */

function Vine({
  left,
  height,
  delay,
  flip = false,
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left: `${left}%`,
        height,
        width: 120,
        transform: `translateX(-50%) scaleX(${flip ? -1 : 1})`,
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
        duration: 2,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 5,
          height: "100%",
          borderRadius: 999,
          background:
            "linear-gradient(to top,#123d28,#39a85a,#75dc72)",
          transformOrigin: "bottom",
        }}
        animate={{
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Curl */}
      <motion.div
        className="absolute rounded-full border-[4px]"
        style={{
          width: 55,
          height: 55,
          top: 8,
          left: 35,
          borderColor: "#4dbb68",
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
          transform: "rotate(25deg)",
        }}
        animate={{
          rotate: [25, 32, 25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Leaf side="left" top="30%" scale={0.7} />
      <Leaf side="right" top="48%" scale={0.65} />
      <Leaf side="left" top="65%" scale={0.6} />

      <motion.div
        className="absolute"
        style={{
          top: -8,
          left: 28,
        }}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: delay + 1.2,
          ease: "backOut",
        }}
      >
        <Flower color="#c77dff" size={30} />
      </motion.div>
    </motion.div>
  )
}


/* =========================================================
   🦋 BUTTERFLY
========================================================= */

function Butterfly({
  top,
  left,
  duration,
  delay,
  color1,
  color2,
  size,
}) {
  return (
    <motion.div
      className="absolute pointer-events-none z-30"
      style={{
        top: `${top}%`,
        left: `${left}%`,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 1, 1, 0],
        x: [0, 100, 220, 350, 500],
        y: [0, -35, 25, -45, 10],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    >
      <motion.div
        style={{
          width: size,
          height: size * 0.7,
          position: "relative",
        }}
        animate={{
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 0.35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* left wing */}
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: size * 0.05,
            width: size * 0.48,
            height: size * 0.58,
            borderRadius: "70% 30% 70% 30%",
            background: color1,
            transformOrigin: "right center",
            boxShadow: `0 0 14px ${color1}`,
          }}
          animate={{
            rotateY: [0, 55, 0],
          }}
          transition={{
            duration: 0.35,
            repeat: Infinity,
          }}
        />

        {/* right wing */}
        <motion.div
          style={{
            position: "absolute",
            right: 0,
            top: size * 0.05,
            width: size * 0.48,
            height: size * 0.58,
            borderRadius: "30% 70% 30% 70%",
            background: color2,
            transformOrigin: "left center",
            boxShadow: `0 0 14px ${color2}`,
          }}
          animate={{
            rotateY: [0, -55, 0],
          }}
          transition={{
            duration: 0.35,
            repeat: Infinity,
          }}
        />

        {/* body */}
        <div
          style={{
            position: "absolute",
            left: "46%",
            top: "18%",
            width: size * 0.09,
            height: size * 0.58,
            borderRadius: 999,
            background: "#22172c",
          }}
        />
      </motion.div>
    </motion.div>
  )
}


/* =========================================================
   ✨ FIREFLIES
========================================================= */

function Fireflies() {
  const lights = [
    [8, 35, 2],
    [16, 54, 3],
    [25, 28, 2],
    [33, 48, 3],
    [43, 35, 2],
    [52, 58, 3],
    [62, 31, 2],
    [70, 50, 3],
    [79, 27, 2],
    [88, 43, 3],
    [94, 58, 2],
    [13, 72, 2],
    [29, 65, 3],
    [48, 73, 2],
    [67, 69, 3],
    [84, 67, 2],
  ]

  return (
    <>
      {lights.map(([left, top, size], i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-200 pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            boxShadow: "0 0 12px 4px rgba(255,220,100,.5)",
          }}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 2.5 + (i % 4) * 0.4,
            delay: (i % 5) * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}


/* =========================================================
   🌺 GARDEN
========================================================= */

function GardenPage() {
  const [growth, setGrowth] = useState(0)

  const growGarden = () => {
    setGrowth((prev) => Math.min(prev + 1, 5))
  }

  const plants = [
    // Stage 1
    {
      left: 10,
      height: "30vh",
      color: "#ff72c7",
      size: 42,
      delay: 0,
      curve: -4,
      flowerTop: -15,
      stage: 1,
    },
    {
      left: 25,
      height: "38vh",
      color: "#a978ff",
      size: 50,
      delay: 0.2,
      curve: 4,
      flowerTop: -12,
      stage: 1,
    },
    {
      left: 43,
      height: "32vh",
      color: "#ff9acb",
      size: 45,
      delay: 0.1,
      curve: -3,
      flowerTop: -15,
      stage: 1,
    },

    // Stage 2
    {
      left: 57,
      height: "43vh",
      color: "#72b9ff",
      size: 48,
      delay: 0,
      curve: 5,
      flowerTop: -15,
      stage: 2,
    },
    {
      left: 73,
      height: "35vh",
      color: "#ff78d1",
      size: 44,
      delay: 0.15,
      curve: -5,
      flowerTop: -12,
      stage: 2,
    },
    {
      left: 91,
      height: "40vh",
      color: "#b47cff",
      size: 48,
      delay: 0.3,
      curve: 3,
      flowerTop: -15,
      stage: 2,
    },

    // Stage 3
    {
      left: 5,
      height: "53vh",
      color: "#c878ff",
      size: 56,
      delay: 0,
      curve: -5,
      flowerTop: -15,
      stage: 3,
    },
    {
      left: 36,
      height: "58vh",
      color: "#ff68b9",
      size: 62,
      delay: 0.2,
      curve: 4,
      flowerTop: -18,
      stage: 3,
    },
    {
      left: 66,
      height: "55vh",
      color: "#ff9c55",
      size: 55,
      delay: 0.1,
      curve: -4,
      flowerTop: -15,
      stage: 3,
    },
    {
      left: 84,
      height: "50vh",
      color: "#7aa7ff",
      size: 58,
      delay: 0.25,
      curve: 5,
      flowerTop: -15,
      stage: 3,
    },

    // Stage 4
    {
      left: 18,
      height: "67vh",
      color: "#ff69b4",
      size: 72,
      delay: 0,
      curve: -5,
      flowerTop: -20,
      stage: 4,
    },
    {
      left: 48,
      height: "72vh",
      color: "#b777ff",
      size: 76,
      delay: 0.2,
      curve: 4,
      flowerTop: -20,
      stage: 4,
    },
    {
      left: 78,
      height: "64vh",
      color: "#ff83ca",
      size: 70,
      delay: 0.1,
      curve: -4,
      flowerTop: -18,
      stage: 4,
    },

    // Stage 5
    {
      left: 2,
      height: "78vh",
      color: "#70b8ff",
      size: 78,
      delay: 0,
      curve: -5,
      flowerTop: -22,
      stage: 5,
    },
    {
      left: 30,
      height: "82vh",
      color: "#ff72b9",
      size: 86,
      delay: 0.15,
      curve: 4,
      flowerTop: -23,
      stage: 5,
    },
    {
      left: 54,
      height: "76vh",
      color: "#ff9d52",
      size: 82,
      delay: 0.3,
      curve: -3,
      flowerTop: -22,
      stage: 5,
    },
    {
      left: 72,
      height: "84vh",
      color: "#9c7aff",
      size: 88,
      delay: 0.15,
      curve: 5,
      flowerTop: -24,
      stage: 5,
    },
    {
      left: 96,
      height: "78vh",
      color: "#ff73cf",
      size: 82,
      delay: 0.25,
      curve: -4,
      flowerTop: -20,
      stage: 5,
    },
  ]

  const vines = [
    { left: 13, height: "47vh", delay: 0, flip: false },
    { left: 40, height: "57vh", delay: 0.2, flip: true },
    { left: 62, height: "50vh", delay: 0.1, flip: false },
    { left: 88, height: "55vh", delay: 0.25, flip: true },
  ]

  return (
    <div
      onClick={growGarden}
      className="min-h-screen w-full relative overflow-hidden cursor-pointer"
      style={{
        background: `
          radial-gradient(
            circle at 50% 58%,
            rgba(103,43,150,.42),
            transparent 38%
          ),
          radial-gradient(
            circle at 50% 100%,
            rgba(50,20,100,.6),
            transparent 55%
          ),
          linear-gradient(
            to bottom,
            #03051d 0%,
            #08072c 42%,
            #170b38 72%,
            #050712 100%
          )
        `,
      }}
    >

      {/* =================================================
          🌌 STARS
      ================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {[
          [4, 12],
          [9, 25],
          [15, 8],
          [21, 18],
          [28, 6],
          [34, 25],
          [41, 12],
          [48, 5],
          [54, 21],
          [61, 10],
          [68, 28],
          [75, 7],
          [82, 20],
          [89, 11],
          [96, 26],
          [12, 38],
          [27, 34],
          [38, 42],
          [57, 37],
          [72, 40],
          [92, 36],
        ].map(([left, top], i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: i % 3 === 0 ? 3 : 2,
              height: i % 3 === 0 ? 3 : 2,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.7, 1.4, 0.7],
            }}
            transition={{
              duration: 2 + (i % 4),
              delay: (i % 5) * 0.5,
              repeat: Infinity,
            }}
          />
        ))}
      </div>


      {/* =================================================
          🌙 MOON
      ================================================= */}

      <motion.div
        className="absolute top-[13%] right-[9%] w-12 h-12 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 35% 35%,#fff,#d9d7ff 55%,#8884c7)",
          boxShadow: "0 0 35px rgba(190,180,255,.5)",
        }}
        animate={{
          opacity: [0.75, 1, 0.75],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />


      {/* =================================================
          🦋 BUTTERFLIES
      ================================================= */}

      <Butterfly
        top={10}
        left={4}
        duration={11}
        delay={0}
        color1="#c06cff"
        color2="#7145ff"
        size={42}
      />

      <Butterfly
        top={24}
        left={18}
        duration={13}
        delay={2}
        color1="#ff70bc"
        color2="#ff3d8d"
        size={34}
      />

      <Butterfly
        top={15}
        left={52}
        duration={15}
        delay={4}
        color1="#62c9ff"
        color2="#318cff"
        size={30}
      />

      <Butterfly
        top={32}
        left={70}
        duration={12}
        delay={1}
        color1="#ffc45c"
        color2="#ff7a31"
        size={40}
      />

      <Butterfly
        top={42}
        left={35}
        duration={14}
        delay={5}
        color1="#ff85d5"
        color2="#a65cff"
        size={28}
      />

      <Butterfly
        top={7}
        left={78}
        duration={16}
        delay={3}
        color1="#72e4c7"
        color2="#32a8ff"
        size={32}
      />


      {/* =================================================
          ✨ FIREFLIES
      ================================================= */}

      <Fireflies />


      {/* =================================================
          💬 HEADER
      ================================================= */}

      <motion.div
        className="absolute top-8 md:top-10 left-0 right-0 z-50 text-center px-5 pointer-events-none"
        initial={{
          opacity: 0,
          y: -20,
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
          className="text-2xl md:text-4xl text-pink-200"
          animate={{
            textShadow: [
              "0 0 8px rgba(255,120,210,.2)",
              "0 0 24px rgba(255,120,210,.7)",
              "0 0 8px rgba(255,120,210,.2)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          Tap anywhere and
          <br />
          let the garden bloom 🌱✨
        </motion.h1>

        <motion.p
          className="mt-3 text-sm md:text-base text-purple-200/80"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
          }}
        >
          {growth < 5
            ? `${5 - growth} little touches left… 🦋`
            : "Your little magical garden is complete ✨🌸"}
        </motion.p>
      </motion.div>


      {/* =================================================
          🌱 GARDEN GROUND GLOW
      ================================================= */}

      <div
        className="absolute bottom-0 left-0 right-0 h-[34vh] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom,rgba(50,180,100,.2),transparent 65%)",
        }}
      />


      {/* =================================================
          🌱 PLANTS
      ================================================= */}

      <AnimatePresence>
        {plants
          .filter((plant) => growth >= plant.stage)
          .map((plant, index) => (
            <Plant
              key={`${plant.left}-${plant.stage}`}
              left={plant.left}
              height={plant.height}
              flowerColor={plant.color}
              flowerSize={plant.size}
              delay={plant.delay}
              curve={plant.curve}
              flowerTop={plant.flowerTop}
            />
          ))}
      </AnimatePresence>


      {/* =================================================
          🌿 VINES
      ================================================= */}

      {growth >= 2 && (
        <AnimatePresence>
          {vines
            .slice(0, growth >= 4 ? 4 : growth >= 3 ? 3 : 2)
            .map((vine, i) => (
              <Vine
                key={i}
                left={vine.left}
                height={vine.height}
                delay={vine.delay}
                flip={vine.flip}
              />
            ))}
        </AnimatePresence>
      )}


      {/* =================================================
          🍃 LOW GRASS / GROUND COVER
      ================================================= */}

      {growth >= 3 && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[18vh] pointer-events-none"
          initial={{
            opacity: 0,
            scaleY: 0,
          }}
          animate={{
            opacity: 1,
            scaleY: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          style={{
            transformOrigin: "bottom",
            background: `
              radial-gradient(
                ellipse at bottom,
                rgba(38,125,68,.7),
                transparent 68%
              )
            `,
          }}
        >
          <div className="absolute bottom-2 left-[5%] text-4xl">
            🍃
          </div>

          <div className="absolute bottom-1 left-[18%] text-3xl">
            🌿
          </div>

          <div className="absolute bottom-0 left-[35%] text-4xl">
            🍃
          </div>

          <div className="absolute bottom-2 left-[58%] text-3xl">
            🌿
          </div>

          <div className="absolute bottom-1 left-[76%] text-4xl">
            🍃
          </div>

          <div className="absolute bottom-0 right-[3%] text-3xl">
            🌿
          </div>
        </motion.div>
      )}


      {/* =================================================
          ✨ GROUND SPARKLES
      ================================================= */}

      {growth >= 4 && (
        <>
          {[12, 23, 38, 51, 67, 82, 93].map((left, i) => (
            <motion.div
              key={i}
              className="absolute bottom-[15%] pointer-events-none text-lg"
              style={{
                left: `${left}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.7, 1.2, 0.7],
              }}
              transition={{
                duration: 2 + (i % 3),
                delay: i * 0.25,
                repeat: Infinity,
              }}
            >
              ✨
            </motion.div>
          ))}
        </>
      )}


      {/* =================================================
          💗 TOUCH MESSAGE
      ================================================= */}

      <AnimatePresence>
        {growth === 0 && (
          <motion.div
            className="absolute bottom-10 left-0 right-0 z-50 text-center pointer-events-none px-5"
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
            <p className="text-pink-200 text-lg">
              Touch anywhere… 🌱
            </p>

            <p className="text-purple-200/70 text-sm mt-2">
              Watch something beautiful grow ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =================================================
          🌸 FINISHED MESSAGE
      ================================================= */}

      <AnimatePresence>
        {growth >= 5 && (
          <motion.div
            className="absolute bottom-8 left-0 right-0 z-50 text-center pointer-events-none px-5"
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
          >
            <motion.p
              className="text-pink-200 text-lg md:text-xl"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
              }}
            >
              And just like that… your little garden bloomed 🌸🦋
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

      {/* Background */}
      {currentPage !== "garden" && <StarryBackground />}

      {/* Music */}
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
