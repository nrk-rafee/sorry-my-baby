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

function GardenFlower({
  color = "#ff65c7",
  size = 60,
  petals = 6,
}) {
  const petalAngles = Array.from(
    { length: petals },
    (_, i) => (360 / petals) * i
  )

  return (
    <motion.div
      className="relative shrink-0"
      style={{
        width: size,
        height: size,
      }}
      animate={{
        rotate: [-2, 2, -2],
      }}
      transition={{
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {petalAngles.map((angle, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2"
          style={{
            width: size * 0.34,
            height: size * 0.58,
            transform: `translate(-50%, -82%) rotate(${angle}deg)`,
            transformOrigin: "50% 82%",
            borderRadius: "70% 70% 48% 48%",
            background: `linear-gradient(
              135deg,
              ${color},
              ${color}cc
            )`,
            boxShadow: `0 0 ${Math.max(8, size * 0.18)}px ${color}88`,
          }}
        />
      ))}

      <div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: size * 0.25,
          height: size * 0.25,
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, #fff3a8 0%, #ffd34d 45%, #f4a928 100%)",
          boxShadow:
            "0 0 10px rgba(255,224,105,.95), 0 0 22px rgba(255,190,70,.5)",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🍃 LEAF
========================================================= */

function GardenLeaf({ left = true, top = "50%", scale = 1 }) {
  return (
    <motion.div
      className="absolute"
      style={{
        top,
        [left ? "left" : "right"]: `${-16 * scale}px`,
        width: 34 * scale,
        height: 17 * scale,
        transformOrigin: left ? "right center" : "left center",
      }}
      animate={{
        rotate: left ? [-16, -5, -16] : [16, 5, 16],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          borderRadius: left
            ? "100% 0 100% 0"
            : "0 100% 0 100%",
          background:
            "linear-gradient(135deg,#8bea73,#218d4b)",
          boxShadow: "0 0 8px rgba(70,220,100,.3)",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🌿 GARDEN PLANT
========================================================= */

function GardenPlant({
  left,
  height,
  color,
  size,
  delay = 0,
  curve = 0,
  petals = 6,
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left: `${left}%`,
        height,
        width: 90,
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
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 6,
          height: "100%",
          transform: `translateX(-50%) rotate(${curve}deg)`,
          transformOrigin: "bottom center",
          borderRadius: 999,
          background:
            "linear-gradient(to top,#123d29,#26884b,#76d96c)",
          boxShadow: "0 0 8px rgba(70,210,100,.25)",
        }}
        animate={{
          rotate: [curve - 1.5, curve + 1.5, curve - 1.5],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <GardenLeaf left top="34%" scale={0.8} />
      <GardenLeaf left={false} top="43%" scale={0.75} />
      <GardenLeaf left top="56%" scale={0.65} />
      <GardenLeaf left={false} top="66%" scale={0.62} />
      <GardenLeaf left top="77%" scale={0.52} />

      <motion.div
        className="absolute left-1/2"
        style={{
          top: -size * 0.25,
          transform: "translateX(-50%)",
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
          duration: 0.9,
          delay: delay + 1,
          ease: "backOut",
        }}
      >
        <GardenFlower
          color={color}
          size={size}
          petals={petals}
        />
      </motion.div>
    </motion.div>
  )
}


/* =========================================================
   🌿 CURLING VINE
========================================================= */

function CurlingVine({
  left,
  height,
  flip = false,
  delay = 0,
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
          transformOrigin: "bottom center",
          borderRadius: 999,
          background:
            "linear-gradient(to top,#143d29,#42a95c,#79df72)",
        }}
        animate={{
          rotate: [-3, 3, -3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute"
        style={{
          width: 52,
          height: 52,
          top: 8,
          left: 32,
          borderRadius: "50%",
          border: "4px solid #52bd68",
          borderLeftColor: "transparent",
          borderBottomColor: "transparent",
        }}
        animate={{
          rotate: [20, 30, 20],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <GardenLeaf left top="31%" scale={0.7} />
      <GardenLeaf left={false} top="47%" scale={0.65} />
      <GardenLeaf left top="65%" scale={0.6} />

      <div
        className="absolute"
        style={{
          top: -8,
          left: 26,
        }}
      >
        <GardenFlower
          color="#b878ff"
          size={32}
          petals={5}
        />
      </div>
    </motion.div>
  )
}


/* =========================================================
   🦋 BUTTERFLY
========================================================= */

function Butterfly({
  top,
  left,
  size = 36,
  colorA,
  colorB,
  duration = 12,
  delay = 0,
  direction = 1,
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
        x: 0,
      }}
      animate={{
        opacity: [0, 1, 1, 1, 0],
        x: direction * 420,
        y: [0, -35, 20, -30, 15],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      }}
    >
      <div
        style={{
          width: size,
          height: size * 0.72,
          position: "relative",
        }}
      >
        {/* left wing */}
        <motion.div
          style={{
            position: "absolute",
            left: 0,
            top: size * 0.06,
            width: size * 0.46,
            height: size * 0.58,
            borderRadius: "75% 35% 75% 35%",
            background: colorA,
            boxShadow: `0 0 16px ${colorA}`,
            transformOrigin: "right center",
          }}
          animate={{
            rotateY: [0, 65, 0],
          }}
          transition={{
            duration: 0.38,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* right wing */}
        <motion.div
          style={{
            position: "absolute",
            right: 0,
            top: size * 0.06,
            width: size * 0.46,
            height: size * 0.58,
            borderRadius: "35% 75% 35% 75%",
            background: colorB,
            boxShadow: `0 0 16px ${colorB}`,
            transformOrigin: "left center",
          }}
          animate={{
            rotateY: [0, -65, 0],
          }}
          transition={{
            duration: 0.38,
            repeat: Infinity,
            ease: "easeInOut",
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
            background: "#21152f",
          }}
        />

        {/* antenna */}
        <div
          style={{
            position: "absolute",
            left: "43%",
            top: "5%",
            width: size * 0.25,
            height: size * 0.18,
            borderTop: "1px solid rgba(255,255,255,.7)",
            borderRadius: "50%",
            transform: "rotate(-25deg)",
          }}
        />
      </div>
    </motion.div>
  )
}


/* =========================================================
   ✨ STARS
========================================================= */

const STAR_POSITIONS = [
  [4, 12, 2],
  [9, 25, 1],
  [15, 8, 2],
  [21, 18, 1],
  [28, 6, 2],
  [34, 25, 1],
  [41, 12, 2],
  [48, 5, 1],
  [54, 21, 2],
  [61, 10, 1],
  [68, 28, 2],
  [75, 7, 1],
  [82, 20, 2],
  [89, 11, 2],
  [96, 26, 1],
  [12, 38, 1],
  [27, 34, 2],
  [38, 42, 1],
  [57, 37, 2],
  [72, 40, 1],
  [92, 36, 2],
  [18, 48, 1],
  [47, 46, 2],
  [83, 45, 1],
  [97, 52, 2],
]


function Stars() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {STAR_POSITIONS.map(([left, top, size], i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            boxShadow:
              size > 1
                ? "0 0 8px 2px rgba(255,255,255,.55)"
                : "0 0 5px rgba(255,255,255,.5)",
          }}
          animate={{
            opacity: [0.25, 1, 0.25],
            scale: [0.7, 1.5, 0.7],
          }}
          transition={{
            duration: 2.2 + (i % 4) * 0.45,
            delay: (i % 6) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}


/* =========================================================
   ✨ FIREFLIES
========================================================= */

const FIREFLIES = [
  [7, 55, 3],
  [14, 63, 2],
  [21, 52, 3],
  [29, 69, 2],
  [37, 58, 3],
  [45, 72, 2],
  [53, 55, 3],
  [61, 67, 2],
  [69, 57, 3],
  [77, 70, 2],
  [86, 54, 3],
  [94, 65, 2],
  [11, 78, 2],
  [26, 83, 3],
  [42, 80, 2],
  [58, 84, 3],
  [73, 79, 2],
  [88, 82, 3],
]


function Fireflies() {
  return (
    <>
      {FIREFLIES.map(([left, top, size], i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            background: "#ffe78a",
            boxShadow:
              "0 0 12px 4px rgba(255,220,100,.65)",
          }}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.7, 1.7, 0.7],
            y: [-7, 7, -7],
          }}
          transition={{
            duration: 2.3 + (i % 4) * 0.45,
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
   🌙 CLOUD
========================================================= */

function Cloud({
  top,
  left,
  scale = 1,
  opacity = 0.25,
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: 190 * scale,
        height: 75 * scale,
        opacity,
      }}
      animate={{
        x: [-12, 12, -12],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] rounded-full"
        style={{
          background:
            "linear-gradient(to bottom,rgba(104,73,180,.75),rgba(41,30,105,.8))",
          filter: "blur(4px)",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: 85 * scale,
          height: 85 * scale,
          left: 30 * scale,
          bottom: 15 * scale,
          background:
            "radial-gradient(circle,rgba(105,76,190,.8),rgba(52,38,125,.75))",
          filter: "blur(5px)",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: 105 * scale,
          height: 105 * scale,
          left: 75 * scale,
          bottom: 4 * scale,
          background:
            "radial-gradient(circle,rgba(87,61,170,.8),rgba(48,34,115,.7))",
          filter: "blur(5px)",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🌱 GROUND FLOWERS
========================================================= */

const SMALL_FLOWERS = [
  [2, 88, "#7c63ff", 22],
  [7, 82, "#ff63b9", 25],
  [12, 91, "#ffb347", 18],
  [17, 85, "#8e65ff", 22],
  [22, 94, "#ff6fc8", 20],
  [27, 87, "#54a9ff", 21],
  [32, 93, "#ff9e48", 19],
  [37, 84, "#c16cff", 24],
  [42, 91, "#ff66c7", 21],
  [47, 86, "#64b5ff", 22],
  [52, 94, "#ff8e45", 19],
  [57, 87, "#a969ff", 23],
  [62, 92, "#ff61bc", 21],
  [67, 84, "#62c7ff", 23],
  [72, 94, "#ffab42", 18],
  [77, 87, "#c26aff", 24],
  [82, 92, "#ff66bd", 20],
  [87, 85, "#5caaff", 22],
  [92, 93, "#ff9d42", 19],
  [97, 86, "#a968ff", 23],

  [5, 96, "#e966ff", 18],
  [15, 97, "#5f9cff", 17],
  [25, 96, "#ff74bf", 18],
  [35, 98, "#8f6aff", 17],
  [45, 96, "#ffbd48", 18],
  [55, 98, "#d86cff", 17],
  [65, 96, "#ff70b9", 18],
  [75, 98, "#61aaff", 17],
  [85, 96, "#ffb341", 18],
  [95, 98, "#c06aff", 18],
]


function GroundFlowers({ growth }) {
  if (growth < 2) return null

  return (
    <div className="absolute inset-x-0 bottom-0 h-[43%] pointer-events-none z-10">
      {SMALL_FLOWERS.map(([left, bottom, color, size], i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${left}%`,
            bottom: `${100 - bottom}%`,
          }}
          initial={{
            opacity: 0,
            scale: 0,
            y: 20,
          }}
          animate={{
            opacity: growth >= 5 ? 1 : 0.85,
            scale: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: (i % 10) * 0.045,
            ease: "backOut",
          }}
        >
          <GardenFlower
            color={color}
            size={size}
            petals={5 + (i % 3)}
          />
        </motion.div>
      ))}
    </div>
  )
}


/* =========================================================
   🌺 BIG FLOWERS
========================================================= */

const BIG_FLOWERS = [
  {
    left: 10,
    height: "42vh",
    color: "#a76bff",
    size: 78,
    curve: -4,
    stage: 2,
  },
  {
    left: 25,
    height: "51vh",
    color: "#ff62b9",
    size: 82,
    curve: 4,
    stage: 3,
  },
  {
    left: 42,
    height: "46vh",
    color: "#7b9dff",
    size: 65,
    curve: -3,
    stage: 2,
  },
  {
    left: 58,
    height: "57vh",
    color: "#c66cff",
    size: 88,
    curve: 4,
    stage: 3,
  },
  {
    left: 75,
    height: "48vh",
    color: "#ff79bd",
    size: 74,
    curve: -5,
    stage: 2,
  },
  {
    left: 91,
    height: "43vh",
    color: "#65b8ff",
    size: 68,
    curve: 4,
    stage: 3,
  },
  {
    left: 4,
    height: "62vh",
    color: "#7769ff",
    size: 70,
    curve: -4,
    stage: 4,
  },
  {
    left: 33,
    height: "67vh",
    color: "#ff65bb",
    size: 92,
    curve: 4,
    stage: 4,
  },
  {
    left: 50,
    height: "61vh",
    color: "#ffae48",
    size: 72,
    curve: -3,
    stage: 4,
  },
  {
    left: 68,
    height: "69vh",
    color: "#a66cff",
    size: 92,
    curve: 5,
    stage: 4,
  },
  {
    left: 84,
    height: "62vh",
    color: "#ff68c2",
    size: 84,
    curve: -4,
    stage: 4,
  },
  {
    left: 17,
    height: "76vh",
    color: "#62aaff",
    size: 82,
    curve: -5,
    stage: 5,
  },
  {
    left: 40,
    height: "79vh",
    color: "#ff70bd",
    size: 94,
    curve: 4,
    stage: 5,
  },
  {
    left: 61,
    height: "73vh",
    color: "#ff9f45",
    size: 86,
    curve: -4,
    stage: 5,
  },
  {
    left: 79,
    height: "81vh",
    color: "#a873ff",
    size: 96,
    curve: 5,
    stage: 5,
  },
  {
    left: 96,
    height: "74vh",
    color: "#ff71c9",
    size: 86,
    curve: -4,
    stage: 5,
  },
]


/* =========================================================
   🌺 GARDEN PAGE
========================================================= */

function GardenPage() {
  const [growth, setGrowth] = useState(0)

  const growGarden = () => {
    setGrowth((current) =>
      Math.min(current + 1, 5)
    )
  }

  return (
    <div
      onClick={growGarden}
      className="relative w-full h-[100dvh] overflow-hidden cursor-pointer select-none"
      style={{
        background: `
          radial-gradient(
            ellipse at 50% 67%,
            rgba(105,45,164,.62) 0%,
            rgba(42,20,93,.35) 35%,
            transparent 68%
          ),
          linear-gradient(
            to bottom,
            #02031b 0%,
            #05052a 32%,
            #10083d 58%,
            #210d49 77%,
            #050712 100%
          )
        `,
      }}
    >

      {/* =====================================================
          🌌 SKY
      ===================================================== */}

      <Stars />

      {/* extra soft purple sky glow */}
      <div
        className="absolute inset-x-0 top-0 h-[65%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 85%,rgba(125,57,191,.22),transparent 65%)",
        }}
      />

      {/* =====================================================
          ☁️ CLOUDS
      ===================================================== */}

      <Cloud
        top={27}
        left={-7}
        scale={1.25}
        opacity={0.3}
      />

      <Cloud
        top={34}
        left={76}
        scale={1.1}
        opacity={0.28}
      />

      <Cloud
        top={48}
        left={-13}
        scale={1.35}
        opacity={0.25}
      />

      {/* =====================================================
          🌙 MOON
      ===================================================== */}

      <motion.div
        className="absolute top-[13%] right-[11%] w-11 h-11 md:w-14 md:h-14 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 35% 32%,#ffffff 0%,#e9e7ff 48%,#aaa7dc 100%)",
          boxShadow:
            "0 0 25px rgba(210,205,255,.65),0 0 65px rgba(150,140,255,.25)",
        }}
        animate={{
          opacity: [0.78, 1, 0.78],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          🦋 BUTTERFLIES
      ===================================================== */}

      <Butterfly
        top={8}
        left={5}
        size={42}
        colorA="#c46cff"
        colorB="#7046ff"
        duration={12}
        delay={0}
        direction={1}
      />

      <Butterfly
        top={22}
        left={15}
        size={50}
        colorA="#ff71c3"
        colorB="#e936a2"
        duration={14}
        delay={1}
        direction={1}
      />

      <Butterfly
        top={28}
        left={43}
        size={30}
        colorA="#55c8ff"
        colorB="#337dff"
        duration={11}
        delay={3}
        direction={1}
      />

      <Butterfly
        top={17}
        left={67}
        size={37}
        colorA="#ffd35a"
        colorB="#ff7935"
        duration={15}
        delay={2}
        direction={-1}
      />

      <Butterfly
        top={37}
        left={79}
        size={32}
        colorA="#8d6cff"
        colorB="#dc64ff"
        duration={13}
        delay={4}
        direction={-1}
      />

      <Butterfly
        top={42}
        left={30}
        size={25}
        colorA="#ff8cdb"
        colorB="#9c55ff"
        duration={16}
        delay={5}
        direction={1}
      />

      <Butterfly
        top={7}
        left={88}
        size={28}
        colorA="#63e7c8"
        colorB="#379bff"
        duration={14}
        delay={4}
        direction={-1}
      />

      {/* =====================================================
          ✨ FIREFLIES
      ===================================================== */}

      <Fireflies />

      {/* =====================================================
          💬 HEADER
      ===================================================== */}

      <motion.div
        className="absolute top-7 md:top-9 left-0 right-0 z-50 text-center px-5 pointer-events-none"
        initial={{
          opacity: 0,
          y: -15,
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
          className="text-[22px] leading-tight md:text-4xl text-pink-200 font-medium"
          style={{
            textShadow:
              "0 0 12px rgba(255,120,210,.35)",
          }}
          animate={{
            textShadow: [
              "0 0 8px rgba(255,120,210,.25)",
              "0 0 25px rgba(255,120,210,.7)",
              "0 0 8px rgba(255,120,210,.25)",
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
          className="mt-2 text-xs md:text-base text-purple-200/80"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
          }}
        >
          {growth < 5
            ? `${5 - growth} little touches left… 🦋`
            : "Your magical garden is complete ✨🌸"}
        </motion.p>
      </motion.div>

      {/* =====================================================
          🌌 MAGICAL HORIZON
      ===================================================== */}

      <div
        className="absolute left-0 right-0 bottom-[22%] h-[30%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center,rgba(159,73,190,.25),transparent 68%)",
        }}
      />

      {/* =====================================================
          🌱 DARK GROUND
      ===================================================== */}

      <div
        className="absolute bottom-0 left-0 right-0 h-[32%] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at center bottom,
              rgba(35,105,55,.82),
              rgba(8,35,25,.88) 48%,
              #030811 100%
            )
          `,
        }}
      />

      {/* =====================================================
          🌿 VINES
      ===================================================== */}

      {growth >= 2 && (
        <>
          <CurlingVine
            left={13}
            height="48vh"
            delay={0}
          />

          <CurlingVine
            left={39}
            height="57vh"
            delay={0.2}
            flip
          />

          {growth >= 3 && (
            <CurlingVine
              left={63}
              height="51vh"
              delay={0.1}
            />
          )}

          {growth >= 4 && (
            <CurlingVine
              left={88}
              height="56vh"
              delay={0.25}
              flip
            />
          )}
        </>
      )}

      {/* =====================================================
          🌺 BIG PLANTS
      ===================================================== */}

      {BIG_FLOWERS.map((plant, i) =>
        growth >= plant.stage ? (
          <GardenPlant
            key={`${plant.left}-${plant.stage}`}
            left={plant.left}
            height={plant.height}
            color={plant.color}
            size={plant.size}
            curve={plant.curve}
            petals={5 + (i % 3)}
            delay={(i % 5) * 0.12}
          />
        ) : null
      )}

      {/* =====================================================
          🌸 DENSE FLOWER FIELD
      ===================================================== */}

      <GroundFlowers growth={growth} />

      {/* =====================================================
          🌿 FOREGROUND LEAVES
      ===================================================== */}

      {growth >= 3 && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[24%] pointer-events-none z-20"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1.4,
          }}
          style={{
            background:
              "radial-gradient(ellipse at center bottom,rgba(22,92,50,.85),transparent 72%)",
          }}
        >
          <div
            className="absolute bottom-0 left-[2%] w-[35%] h-20"
            style={{
              borderRadius: "50% 50% 0 0",
              background:
                "linear-gradient(to top,rgba(4,28,19,.95),rgba(22,88,47,.75))",
              filter: "blur(1px)",
            }}
          />

          <div
            className="absolute bottom-0 right-[1%] w-[38%] h-24"
            style={{
              borderRadius: "50% 50% 0 0",
              background:
                "linear-gradient(to top,rgba(4,28,19,.95),rgba(22,88,47,.75))",
              filter: "blur(1px)",
            }}
          />
        </motion.div>
      )}

      {/* =====================================================
          🛤️ CENTRAL PATH
      ===================================================== */}

      {growth >= 4 && (
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-15"
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
          }}
          style={{
            width: "31%",
            maxWidth: 260,
            height: "23%",
            transformOrigin: "bottom",
            clipPath:
              "polygon(38% 0%,62% 0%,100% 100%,0% 100%)",
            background:
              "linear-gradient(to bottom,#263043,#171b29,#0c101a)",
            boxShadow:
              "0 -5px 30px rgba(80,65,130,.2)",
          }}
        >
          {/* path lights */}
          {[20, 42, 64, 82].map((bottom, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                bottom: `${bottom}%`,
                left: `${35 + (i % 2) * 30}%`,
                width: 4,
                height: 4,
                background: "#ffd985",
                boxShadow:
                  "0 0 9px 3px rgba(255,210,110,.55)",
              }}
              animate={{
                opacity: [0.25, 1, 0.25],
              }}
              transition={{
                duration: 2 + i * 0.3,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      )}

      {/* =====================================================
          ✨ EXTRA GROUND LIGHTS
      ===================================================== */}

      {growth >= 4 &&
        [8, 19, 31, 44, 57, 70, 83, 94].map(
          (left, i) => (
            <motion.div
              key={i}
              className="absolute bottom-[13%] z-30 pointer-events-none"
              style={{
                left: `${left}%`,
              }}
              animate={{
                y: [0, -12, 0],
                opacity: [0.2, 1, 0.2],
                scale: [0.7, 1.15, 0.7],
              }}
              transition={{
                duration: 2 + (i % 3) * 0.4,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            >
              <span className="text-lg">
                ✨
              </span>
            </motion.div>
          )
        )}

      {/* =====================================================
          🌱 FIRST TAP MESSAGE
      ===================================================== */}

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
            <p className="text-pink-200 text-base md:text-lg">
              Touch anywhere… 🌱
            </p>

            <p className="text-purple-200/70 text-xs md:text-sm mt-1">
              Watch something beautiful grow ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =====================================================
          🌸 FINISHED
      ===================================================== */}

      <AnimatePresence>
        {growth >= 5 && (
          <motion.div
            className="absolute bottom-6 left-0 right-0 z-50 text-center pointer-events-none px-5"
            initial={{
              opacity: 0,
              y: 25,
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
              className="text-pink-200 text-sm md:text-xl"
              animate={{
                opacity: [0.65, 1, 0.65],
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

  // Safety fallback — invalid page name হলে app crash করবে না
  const CurrentComponent =
    pages[currentPage] || OpeningPage

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

      {/* Star background শুধু অন্য page-এ */}
      {currentPage !== "garden" && (
        <StarryBackground />
      )}

      {/* Music player */}
      {showMusicPlayer && (
        <MusicPlayerSafe
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


/* =========================================================
   🎵 MUSIC PLAYER SAFE WRAPPER
========================================================= */

function MusicPlayerSafe(props) {
  return <MusicPlayer {...props} />
}
