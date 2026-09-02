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
   🌸 MAGICAL FLOWER
========================================================= */

function MagicalFlower({
  color = "#ff72c8",
  secondary = "#c77dff",
  size = 55,
}) {
  const petals = [
    { x: 0, y: -0.30, r: 0 },
    { x: 0.28, y: -0.10, r: 72 },
    { x: 0.17, y: 0.25, r: 144 },
    { x: -0.17, y: 0.25, r: 216 },
    { x: -0.28, y: -0.10, r: 288 },
  ]

  return (
    <motion.div
      className="relative shrink-0"
      style={{
        width: size,
        height: size,
      }}
      animate={{
        rotate: [-2, 2, -2],
        y: [0, -1, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {petals.map((petal, index) => (
        <div
          key={index}
          className="absolute rounded-[55%_45%_55%_45%]"
          style={{
            width: size * 0.48,
            height: size * 0.65,
            left: `calc(50% + ${petal.x * size}px - ${size * 0.24}px)`,
            top: `calc(50% + ${petal.y * size}px - ${size * 0.32}px)`,
            background:
              index % 2 === 0
                ? `linear-gradient(145deg, ${color}, ${secondary})`
                : `linear-gradient(145deg, ${secondary}, ${color})`,
            transform: `rotate(${petal.r}deg)`,
            transformOrigin: "50% 80%",
            boxShadow: `0 0 ${size * 0.22}px ${color}88`,
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
          background:
            "radial-gradient(circle at 35% 30%, #fff5a8, #ffd34e 55%, #e79b21)",
          boxShadow: "0 0 14px rgba(255,214,75,.95)",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.07,
          height: size * 0.07,
          left: "47%",
          top: "46%",
          background: "#fff7c7",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🍃 NATURAL LEAF
========================================================= */

function NaturalLeaf({
  side = "left",
  color = "#49bd69",
  size = 24,
}) {
  return (
    <motion.div
      className="absolute"
      style={{
        width: size,
        height: size * 0.48,
        [side]: "50%",
        transformOrigin: side === "left" ? "right center" : "left center",
      }}
      animate={{
        rotate:
          side === "left"
            ? [-25, -17, -25]
            : [25, 17, 25],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="w-full h-full rounded-[100%_0_100%_0]"
        style={{
          background: `linear-gradient(135deg, #9bea7c, ${color})`,
          boxShadow: `0 0 8px ${color}55`,
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🌿 GROWING FLOWER STEM
========================================================= */

function FlowerStem({
  left,
  height,
  flower,
  color,
  secondary,
  width = 5,
  delay = 0,
  scale = 1,
}) {
  return (
    <motion.div
      className="absolute bottom-[-2px]"
      style={{
        left: `${left}%`,
        height,
        width: 100,
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
        duration: 1.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Stem */}
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width,
          height: "100%",
          transform: "translateX(-50%)",
          transformOrigin: "bottom",
          borderRadius: 999,
          background:
            "linear-gradient(to top,#123d2a,#27894d,#6ed86f)",
          boxShadow: "0 0 8px rgba(75,210,100,.22)",
        }}
        animate={{
          rotate: [-1.5, 1.5, -1.5],
        }}
        transition={{
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Leaves */}
      <NaturalLeaf
        side="left"
        color="#38a95b"
        size={28 * scale}
        style={{}}
      />

      <div
        className="absolute"
        style={{
          top: "34%",
          left: "50%",
        }}
      >
        <NaturalLeaf
          side="left"
          color="#4ec568"
          size={30 * scale}
        />
      </div>

      <div
        className="absolute"
        style={{
          top: "54%",
          left: "50%",
        }}
      >
        <NaturalLeaf
          side="right"
          color="#3eae5c"
          size={25 * scale}
        />
      </div>

      <div
        className="absolute"
        style={{
          top: "72%",
          left: "50%",
        }}
      >
        <NaturalLeaf
          side="left"
          color="#299c51"
          size={22 * scale}
        />
      </div>

      {/* Flower */}
      <motion.div
        className="absolute left-1/2"
        style={{
          top: -sizeToNumber(height) * 0.015,
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
          delay: delay + 1.25,
          ease: "backOut",
        }}
      >
        {flower && (
          <MagicalFlower
            color={color}
            secondary={secondary}
            size={flower}
          />
        )}
      </motion.div>
    </motion.div>
  )
}


/* =========================================================
   helper
========================================================= */

function sizeToNumber(value) {
  if (typeof value !== "string") return 500

  const number = parseFloat(value)

  if (value.includes("vh")) {
    return number * 8
  }

  return number
}


/* =========================================================
   🌿 CURLING VINE
========================================================= */

function MagicalVine({
  left,
  height,
  flip = false,
  delay = 0,
  color = "#43b963",
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left: `${left}%`,
        height,
        width: 150,
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
      <motion.svg
        width="150"
        height="100%"
        viewBox="0 0 150 500"
        className="absolute inset-0 overflow-visible"
        animate={{
          rotate: [-1, 1, -1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M75 500 C35 420 105 355 70 300 C35 245 110 205 75 145 C55 110 75 65 100 20"
          fill="none"
          stroke={color}
          strokeWidth="5"
          strokeLinecap="round"
        />

        <path
          d="M75 500 C35 420 105 355 70 300 C35 245 110 205 75 145 C55 110 75 65 100 20"
          fill="none"
          stroke="#78df72"
          strokeOpacity=".35"
          strokeWidth="10"
          strokeLinecap="round"
        />
      </motion.svg>

      <div
        className="absolute"
        style={{
          top: "23%",
          left: "47%",
        }}
      >
        <NaturalLeaf
          side="left"
          size={27}
          color="#45bd63"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: "43%",
          left: "47%",
        }}
      >
        <NaturalLeaf
          side="right"
          size={25}
          color="#55c969"
        />
      </div>

      <div
        className="absolute"
        style={{
          top: "61%",
          left: "47%",
        }}
      >
        <NaturalLeaf
          side="left"
          size={22}
          color="#369e51"
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
  size = 34,
  color1,
  color2,
  duration = 12,
  delay = 0,
  path = 1,
}) {
  const paths = {
    1: {
      x: [0, 100, 230, 370, 520],
      y: [0, -30, 30, -50, 5],
    },
    2: {
      x: [0, -100, -220, -350, -500],
      y: [0, 35, -35, 45, -5],
    },
    3: {
      x: [0, 120, 180, 300, 480],
      y: [0, 55, -15, 65, -20],
    },
    4: {
      x: [0, -80, -170, -290, -460],
      y: [0, -45, 20, -65, 15],
    },
  }

  const movement = paths[path] || paths[1]

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
        x: movement.x,
        y: movement.y,
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 1,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="relative"
        style={{
          width: size,
          height: size * 0.75,
        }}
        animate={{
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 0.7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* left wing */}
        <motion.div
          className="absolute"
          style={{
            left: 0,
            top: size * 0.08,
            width: size * 0.48,
            height: size * 0.55,
            borderRadius: "75% 30% 70% 35%",
            background: `linear-gradient(145deg,${color1},${color2})`,
            transformOrigin: "right center",
            boxShadow: `0 0 16px ${color1}aa`,
          }}
          animate={{
            rotateY: [0, 55, 0],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* right wing */}
        <motion.div
          className="absolute"
          style={{
            right: 0,
            top: size * 0.08,
            width: size * 0.48,
            height: size * 0.55,
            borderRadius: "30% 75% 35% 70%",
            background: `linear-gradient(145deg,${color2},${color1})`,
            transformOrigin: "left center",
            boxShadow: `0 0 16px ${color2}aa`,
          }}
          animate={{
            rotateY: [0, -55, 0],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* body */}
        <div
          className="absolute"
          style={{
            left: "46%",
            top: "14%",
            width: size * 0.09,
            height: size * 0.62,
            borderRadius: 999,
            background: "#21182d",
          }}
        />

        {/* antenna */}
        <div
          className="absolute"
          style={{
            left: "43%",
            top: "-3%",
            width: size * 0.3,
            height: size * 0.22,
            borderTop: "1px solid rgba(255,255,255,.65)",
            borderRadius: "50%",
            transform: "rotate(-18deg)",
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
    [6, 30, 3],
    [13, 48, 2],
    [19, 22, 3],
    [27, 39, 2],
    [34, 29, 3],
    [42, 48, 2],
    [49, 25, 3],
    [57, 40, 2],
    [64, 27, 3],
    [72, 46, 2],
    [80, 32, 3],
    [88, 23, 2],
    [95, 45, 3],
    [10, 68, 2],
    [25, 59, 3],
    [39, 67, 2],
    [55, 62, 3],
    [70, 69, 2],
    [85, 61, 3],
  ]

  return (
    <>
      {lights.map(([left, top, size], i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-yellow-100 pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            boxShadow:
              "0 0 12px 4px rgba(255,220,100,.55)",
          }}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
            y: [-6, 6, -6],
          }}
          transition={{
            duration: 2.5 + (i % 4) * 0.35,
            delay: (i % 6) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}


/* =========================================================
   ☁️ CLOUD
========================================================= */

function Cloud({ top, left, scale = 1, opacity = 0.2 }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        transform: `scale(${scale})`,
        opacity,
      }}
      animate={{
        x: [-10, 10, -10],
      }}
      transition={{
        duration: 14,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="relative"
        style={{
          width: 170,
          height: 50,
          background:
            "linear-gradient(to bottom,rgba(188,172,255,.22),rgba(112,90,177,.05))",
          borderRadius: 999,
          filter: "blur(1px)",
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: 70,
            height: 70,
            left: 25,
            top: -35,
            background: "rgba(180,165,245,.16)",
          }}
        />

        <div
          className="absolute rounded-full"
          style={{
            width: 85,
            height: 85,
            left: 70,
            top: -48,
            background: "rgba(190,175,255,.18)",
          }}
        />
      </div>
    </motion.div>
  )
}


/* =========================================================
   🌺 FLOWER CLUSTER
========================================================= */

function FlowerCluster({
  left,
  bottom = 0,
  scale = 1,
  delay = 0,
  variant = 0,
}) {
  const flowers = [
    {
      x: -42,
      y: 55,
      size: 42,
      color: "#ff73bd",
      second: "#d65cff",
    },
    {
      x: 0,
      y: 0,
      size: 62,
      color: "#c878ff",
      second: "#7c65ff",
    },
    {
      x: 45,
      y: 50,
      size: 38,
      color: "#62baff",
      second: "#8f70ff",
    },
    {
      x: 25,
      y: 82,
      size: 31,
      color: "#ffd05b",
      second: "#ff8d55",
    },
  ]

  const shifted = flowers.map((flower, index) => ({
    ...flower,
    x: flower.x + ((variant + index) % 2) * 7,
  }))

  return (
    <motion.div
      className="absolute"
      style={{
        left: `${left}%`,
        bottom: `${bottom}%`,
        width: 170 * scale,
        height: 190 * scale,
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
        duration: 1.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* stems */}
      {shifted.map((flower, index) => (
        <motion.div
          key={`stem-${index}`}
          className="absolute bottom-0 left-1/2"
          style={{
            width: 4 * scale,
            height:
              (125 - flower.y * 0.35) * scale,
            transformOrigin: "bottom",
            transform: `translateX(calc(-50% + ${flower.x * scale}px)) rotate(${flower.x / 12}deg)`,
            background:
              "linear-gradient(to top,#143c29,#369e55,#75d96d)",
            borderRadius: 999,
          }}
          animate={{
            rotate: [
              flower.x / 12 - 1,
              flower.x / 12 + 1,
              flower.x / 12 - 1,
            ],
          }}
          transition={{
            duration: 4 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* leaves */}
      <div
        className="absolute"
        style={{
          left: "20%",
          bottom: "25%",
        }}
      >
        <NaturalLeaf
          side="left"
          size={35 * scale}
          color="#40ae59"
        />
      </div>

      <div
        className="absolute"
        style={{
          right: "16%",
          bottom: "33%",
        }}
      >
        <NaturalLeaf
          side="right"
          size={31 * scale}
          color="#55c768"
        />
      </div>

      <div
        className="absolute"
        style={{
          left: "38%",
          bottom: "15%",
        }}
      >
        <NaturalLeaf
          side="left"
          size={28 * scale}
          color="#319c4f"
        />
      </div>

      {/* flowers */}
      {shifted.map((flower, index) => (
        <motion.div
          key={`flower-${index}`}
          className="absolute"
          style={{
            left: `calc(50% + ${flower.x * scale}px)`,
            top: flower.y * scale,
            transform: "translateX(-50%)",
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
            duration: 0.9,
            delay: delay + 0.8 + index * 0.12,
            ease: "backOut",
          }}
        >
          <MagicalFlower
            color={flower.color}
            secondary={flower.second}
            size={flower.size * scale}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}


/* =========================================================
   🌌 GARDEN PAGE
========================================================= */

function GardenPage() {
  const [growth, setGrowth] = useState(0)

  const growGarden = () => {
    setGrowth((previous) =>
      Math.min(previous + 1, 5)
    )
  }

  return (
    <div
      onClick={growGarden}
      className="relative w-full h-[100dvh] overflow-hidden cursor-pointer select-none"
      style={{
        background: `
          radial-gradient(
            ellipse at 50% 56%,
            rgba(108,58,176,.34) 0%,
            transparent 42%
          ),
          radial-gradient(
            ellipse at 50% 100%,
            rgba(50,20,105,.75) 0%,
            transparent 60%
          ),
          linear-gradient(
            to bottom,
            #03051d 0%,
            #08082c 35%,
            #15103d 62%,
            #210f45 80%,
            #070817 100%
          )
        `,
      }}
    >

      {/* =================================================
          ✨ STARS
      ================================================= */}

      <div className="absolute inset-0 pointer-events-none">
        {[
          [4, 9, 2],
          [9, 18, 3],
          [15, 7, 2],
          [21, 14, 2],
          [28, 5, 3],
          [34, 20, 2],
          [41, 9, 2],
          [48, 16, 3],
          [55, 6, 2],
          [62, 22, 2],
          [69, 10, 3],
          [76, 5, 2],
          [83, 18, 2],
          [90, 9, 3],
          [96, 24, 2],
          [12, 31, 2],
          [25, 27, 2],
          [38, 35, 3],
          [51, 30, 2],
          [65, 34, 2],
          [78, 29, 3],
          [93, 35, 2],
        ].map(([left, top, size], index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              boxShadow:
                size === 3
                  ? "0 0 8px rgba(255,255,255,.8)"
                  : "0 0 5px rgba(255,255,255,.55)",
            }}
            animate={{
              opacity: [0.25, 1, 0.25],
              scale: [0.8, 1.35, 0.8],
            }}
            transition={{
              duration: 2.2 + (index % 4) * 0.45,
              delay: (index % 5) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>


      {/* =================================================
          🌙 MOON
      ================================================= */}

      <motion.div
        className="absolute top-[10%] right-[10%] pointer-events-none z-10"
        animate={{
          y: [-3, 3, -3],
          opacity: [0.82, 1, 0.82],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="w-14 h-14 md:w-20 md:h-20 rounded-full"
          style={{
            background:
              "radial-gradient(circle at 35% 30%,#ffffff,#e8e6ff 48%,#aaa7dc 100%)",
            boxShadow:
              "0 0 20px rgba(220,215,255,.8),0 0 55px rgba(174,161,255,.38)",
          }}
        />
      </motion.div>


      {/* =================================================
          ☁️ CLOUDS
      ================================================= */}

      <Cloud
        top={18}
        left={-4}
        scale={0.8}
        opacity={0.18}
      />

      <Cloud
        top={28}
        left={66}
        scale={0.65}
        opacity={0.14}
      />

      <Cloud
        top={39}
        left={25}
        scale={0.45}
        opacity={0.1}
      />


      {/* =================================================
          🦋 BUTTERFLIES
      ================================================= */}

      <Butterfly
        top={11}
        left={4}
        size={43}
        color1="#d76cff"
        color2="#7047ff"
        duration={12}
        delay={0}
        path={1}
      />

      <Butterfly
        top={23}
        left={17}
        size={30}
        color1="#ff75c5"
        color2="#ff3d91"
        duration={14}
        delay={2}
        path={3}
      />

      <Butterfly
        top={15}
        left={48}
        size={27}
        color1="#6edcff"
        color2="#378cff"
        duration={16}
        delay={4}
        path={1}
      />

      <Butterfly
        top={31}
        left={73}
        size={40}
        color1="#ffd15c"
        color2="#ff7636"
        duration={13}
        delay={1}
        path={2}
      />

      <Butterfly
        top={42}
        left={36}
        size={25}
        color1="#ff91dc"
        color2="#a65cff"
        duration={15}
        delay={5}
        path={3}
      />

      <Butterfly
        top={8}
        left={78}
        size={32}
        color1="#6fe6c6"
        color2="#349cff"
        duration={17}
        delay={3}
        path={4}
      />


      {/* =================================================
          ✨ FIREFLIES
      ================================================= */}

      <Fireflies />


      {/* =================================================
          💬 HEADER
      ================================================= */}

      <motion.div
        className="absolute top-6 md:top-9 left-0 right-0 z-50 text-center px-5 pointer-events-none"
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
          className="text-[23px] leading-tight md:text-4xl font-medium text-pink-100"
          animate={{
            textShadow: [
              "0 0 8px rgba(255,120,210,.25)",
              "0 0 25px rgba(255,120,210,.75)",
              "0 0 8px rgba(255,120,210,.25)",
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
          let the garden bloom 🌱✨
        </motion.h1>

        <motion.p
          className="mt-2 text-xs md:text-base text-purple-200/75"
          animate={{
            opacity: [0.45, 1, 0.45],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          {growth < 5
            ? `${5 - growth} little touches left… 🦋`
            : "Your little magical garden is complete ✨🌸"}
        </motion.p>
      </motion.div>


      {/* =================================================
          🌫️ PURPLE ATMOSPHERE
      ================================================= */}

      <div
        className="absolute inset-x-0 bottom-0 h-[52%] pointer-events-none"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 100%,
              rgba(93,38,126,.55),
              transparent 62%
            ),
            linear-gradient(
              to top,
              rgba(5,10,20,.72),
              transparent
            )
          `,
        }}
      />


      {/* =================================================
          🌱 GROWTH STAGE 1
      ================================================= */}

      {growth >= 1 && (
        <>
          <FlowerCluster
            left={50}
            bottom={0}
            scale={0.72}
            delay={0}
            variant={0}
          />

          <FlowerCluster
            left={22}
            bottom={0}
            scale={0.5}
            delay={0.2}
            variant={1}
          />
        </>
      )}


      {/* =================================================
          🌱 GROWTH STAGE 2
      ================================================= */}

      {growth >= 2 && (
        <>
          <FlowerCluster
            left={78}
            bottom={0}
            scale={0.55}
            delay={0}
            variant={2}
          />

          <FlowerCluster
            left={36}
            bottom={1}
            scale={0.65}
            delay={0.15}
            variant={3}
          />

          <MagicalVine
            left={13}
            height="48vh"
            delay={0}
            flip={false}
          />

          <MagicalVine
            left={88}
            height="45vh"
            delay={0.15}
            flip={true}
          />
        </>
      )}


      {/* =================================================
          🌱 GROWTH STAGE 3
      ================================================= */}

      {growth >= 3 && (
        <>
          <FlowerCluster
            left={8}
            bottom={0}
            scale={0.6}
            delay={0}
            variant={4}
          />

          <FlowerCluster
            left={62}
            bottom={0}
            scale={0.7}
            delay={0.1}
            variant={1}
          />

          <MagicalVine
            left={43}
            height="53vh"
            delay={0.2}
            flip={false}
          />
        </>
      )}


      {/* =================================================
          🌱 GROWTH STAGE 4
      ================================================= */}

      {growth >= 4 && (
        <>
          <FlowerCluster
            left={92}
            bottom={0}
            scale={0.65}
            delay={0}
            variant={3}
          />

          <FlowerCluster
            left={50}
            bottom={0}
            scale={0.9}
            delay={0.15}
            variant={4}
          />

          <MagicalVine
            left={69}
            height="58vh"
            delay={0.15}
            flip={true}
          />
        </>
      )}


      {/* =================================================
          🌺 FINAL STAGE
      ================================================= */}

      {growth >= 5 && (
        <>
          <FlowerCluster
            left={15}
            bottom={0}
            scale={0.78}
            delay={0}
            variant={2}
          />

          <FlowerCluster
            left={33}
            bottom={0}
            scale={0.88}
            delay={0.12}
            variant={0}
          />

          <FlowerCluster
            left={70}
            bottom={0}
            scale={0.9}
            delay={0.18}
            variant={3}
          />

          <FlowerCluster
            left={86}
            bottom={0}
            scale={0.78}
            delay={0.25}
            variant={1}
          />
        </>
      )}


      {/* =================================================
          🌿 SOFT GARDEN GROUND
      ================================================= */}

      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "20%",
          background: `
            radial-gradient(
              ellipse at 50% 100%,
              rgba(35,115,61,.65),
              transparent 67%
            )
          `,
        }}
        animate={{
          opacity: growth >= 2 ? 1 : 0.5,
        }}
      />

      {/* central soft path */}
      {growth >= 3 && (
        <motion.div
          className="absolute bottom-0 left-1/2 pointer-events-none"
          initial={{
            opacity: 0,
            scaleY: 0,
          }}
          animate={{
            opacity: 0.75,
            scaleY: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          style={{
            width: "24%",
            maxWidth: 250,
            height: "22%",
            transform:
              "translateX(-50%) perspective(300px) rotateX(15deg)",
            transformOrigin: "bottom",
            background:
              "linear-gradient(to top,rgba(117,84,104,.35),rgba(101,74,112,.05))",
            clipPath:
              "polygon(35% 100%,65% 100%,82% 0%,18% 0%)",
            filter: "blur(1px)",
          }}
        />
      )}


      {/* =================================================
          ✨ GROUND SPARKLES
      ================================================= */}

      {growth >= 4 && (
        <>
          {[12, 25, 38, 50, 63, 77, 90].map(
            (left, index) => (
              <motion.div
                key={index}
                className="absolute bottom-[13%] pointer-events-none text-lg"
                style={{
                  left: `${left}%`,
                }}
                animate={{
                  y: [0, -18, 0],
                  opacity: [0.2, 1, 0.2],
                  scale: [0.7, 1.25, 0.7],
                }}
                transition={{
                  duration: 2 + (index % 3),
                  delay: index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ✨
              </motion.div>
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
              className="text-pink-200 text-lg md:text-xl"
              animate={{
                opacity: [0.55, 1, 0.55],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Touch anywhere… 🌱
            </motion.p>

            <p className="text-purple-200/65 text-xs md:text-sm mt-2">
              Watch something beautiful grow ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =================================================
          🌸 FINAL MESSAGE
      ================================================= */}

      <AnimatePresence>
        {growth >= 5 && (
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
              duration: 1,
            }}
          >
            <motion.p
              className="text-pink-100 text-base md:text-xl"
              animate={{
                opacity: [0.7, 1, 0.7],
                textShadow: [
                  "0 0 5px rgba(255,120,210,.2)",
                  "0 0 18px rgba(255,120,210,.7)",
                  "0 0 5px rgba(255,120,210,.2)",
                ],
              }}
              transition={{
                duration: 2.8,
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
