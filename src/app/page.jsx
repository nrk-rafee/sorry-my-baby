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
   🌸 FLOWER
========================================================= */

function Flower({
  size = 55,
  color = "#ff91c8",
  delay = 0,
  rotate = 0,
}) {
  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
        rotate,
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
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* petals */}
      {[
        [50, 18, -8],
        [75, 38, 42],
        [65, 68, 82],
        [35, 68, -82],
        [25, 38, -42],
      ].map(([x, y, r], i) => (
        <motion.div
          key={i}
          className="absolute rounded-[60%]"
          style={{
            width: size * 0.43,
            height: size * 0.58,
            left: `${x}%`,
            top: `${y}%`,
            transform: `translate(-50%, -50%) rotate(${r}deg)`,
            transformOrigin: "50% 85%",
            background: `linear-gradient(
              145deg,
              #ffd2e7 0%,
              ${color} 45%,
              #e95f9f 100%
            )`,
            boxShadow: `
              0 0 10px ${color}99,
              0 0 22px ${color}44
            `,
          }}
          animate={{
            scale: [1, 1.035, 1],
          }}
          transition={{
            duration: 3,
            delay: delay + i * 0.08,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* center */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.2,
          height: size * 0.2,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle at 35% 30%, #fff7a8, #ffd45a 55%, #e99b32)",
          boxShadow: "0 0 12px rgba(255,210,80,.9)",
        }}
      />
    </motion.div>
  )
}

/* =========================================================
   🍃 LEAF
========================================================= */

function Leaf({
  left,
  top,
  size = 34,
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
        height: size * 0.52,
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "center",
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
        duration: 0.65,
        delay,
        ease: "backOut",
      }}
    >
      <div
        className="w-full h-full rounded-[100%_0_100%_0]"
        style={{
          background:
            "linear-gradient(135deg,#62c96b 0%,#197441 48%,#0b4329 100%)",
          boxShadow: "0 0 10px rgba(55,190,90,.2)",
        }}
      />
    </motion.div>
  )
}

/* =========================================================
   🌿 STEM
========================================================= */

function Stem({
  left = "50%",
  height = "45vh",
  rotate = 0,
  delay = 0,
  flower = true,
  flowerSize = 55,
  flowerColor = "#ff91c8",
  flowerOffset = 0,
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left,
        width: 55,
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
        duration: 1.35,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* moving whole plant */}
      <motion.div
        className="absolute inset-0"
        animate={{
          rotate: [rotate - 1.2, rotate + 1.2, rotate - 1.2],
        }}
        transition={{
          duration: 4.5 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "bottom center",
        }}
      >
        {/* stem */}
        <div
          className="absolute bottom-0 left-1/2"
          style={{
            width: 5,
            height: "100%",
            transform: "translateX(-50%)",
            borderRadius: 999,
            background:
              "linear-gradient(to top,#0b3823,#146b37,#3eb85b)",
            boxShadow: "0 0 7px rgba(45,180,80,.22)",
          }}
        />

        {/* leaves */}
        <Leaf
          left="-5px"
          top="61%"
          size={38}
          rotate={-35}
          delay={delay + 0.25}
        />

        <Leaf
          left="22px"
          top="50%"
          size={34}
          rotate={35}
          delay={delay + 0.35}
        />

        <Leaf
          left="-10px"
          top="39%"
          size={32}
          rotate={-38}
          delay={delay + 0.45}
        />

        <Leaf
          left="25px"
          top="70%"
          size={31}
          rotate={38}
          delay={delay + 0.55}
        />

        <Leaf
          left="-3px"
          top="77%"
          size={29}
          rotate={-32}
          delay={delay + 0.6}
        />

        {/* flower */}
        {flower && (
          <div
            className="absolute left-1/2"
            style={{
              top: flowerOffset,
              transform: "translateX(-50%)",
            }}
          >
            <Flower
              size={flowerSize}
              color={flowerColor}
              delay={delay + 0.9}
            />
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}

/* =========================================================
   🌿 CURVED SIDE GRASS
========================================================= */

function Grass({
  left,
  height,
  rotate,
  delay,
}) {
  return (
    <motion.div
      className="absolute bottom-0 origin-bottom"
      style={{
        left,
        width: 42,
        height,
        transform: `rotate(${rotate}deg)`,
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
        duration: 1.2,
        delay,
        ease: "easeOut",
      }}
    >
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 3,
          height: "100%",
          borderRadius: 999,
          background:
            "linear-gradient(to top,#0b3d26,#2c9b4d,#55c966)",
          transform: "translateX(-50%) rotate(-7deg)",
          transformOrigin: "bottom",
        }}
        animate={{
          rotate: [-7, 3, -7],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  )
}

/* =========================================================
   💗 FLOATING HEART
========================================================= */

function Heart({
  left,
  top,
  size = 22,
  delay = 0,
  duration = 5,
}) {
  return (
    <motion.div
      className="absolute pointer-events-none z-30"
      style={{
        left,
        top,
        fontSize: size,
        filter: "drop-shadow(0 0 8px rgba(255,60,130,.55))",
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 0.9, 0.7, 0],
        y: [10, -35, -70, -115],
        x: [0, 8, -6, 5],
        scale: [0.4, 1, 0.9, 0.55],
      }}
      transition={{
        duration,
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
   🟢 MAGIC CIRCLE
========================================================= */

function MagicCircle({
  left,
  top,
  size = 30,
  delay = 0,
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none z-20"
      style={{
        left,
        top,
        width: size,
        height: size,
        border: "2px solid rgba(35,220,155,.8)",
        boxShadow:
          "0 0 8px rgba(35,220,155,.35), inset 0 0 7px rgba(35,220,155,.2)",
      }}
      initial={{
        opacity: 0,
        scale: 0.5,
      }}
      animate={{
        opacity: [0.2, 0.9, 0.25],
        scale: [0.8, 1.08, 0.9],
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
   ✨ STARS
========================================================= */

function GardenStars() {
  const stars = [
    [4, 10, 2],
    [9, 25, 1],
    [15, 7, 2],
    [21, 18, 1],
    [28, 12, 1],
    [34, 27, 2],
    [41, 8, 1],
    [48, 20, 2],
    [55, 7, 1],
    [62, 24, 2],
    [70, 12, 1],
    [77, 28, 2],
    [84, 8, 1],
    [91, 21, 2],
    [97, 12, 1],
    [12, 39, 1],
    [26, 34, 1],
    [39, 42, 2],
    [52, 34, 1],
    [67, 39, 1],
    [82, 35, 2],
    [94, 42, 1],
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map(([left, top, size], i) => (
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
                ? "0 0 7px rgba(255,255,255,.8)"
                : "0 0 4px rgba(255,255,255,.55)",
          }}
          animate={{
            opacity: [0.25, 0.9, 0.25],
            scale: [0.8, 1.35, 0.8],
          }}
          transition={{
            duration: 2.2 + (i % 4) * 0.5,
            delay: (i % 5) * 0.35,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

/* =========================================================
   🦋 BUTTERFLY
========================================================= */

function Butterfly({
  left,
  top,
  size = 28,
  delay = 0,
  color = "#ff71b9",
  duration = 10,
}) {
  return (
    <motion.div
      className="absolute z-30 pointer-events-none"
      style={{
        left,
        top,
      }}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 1, 0],
        x: [0, 80, 180, 290],
        y: [0, -20, 25, -5],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="relative"
        style={{
          width: size,
          height: size,
        }}
        animate={{
          rotate: [-4, 4, -4],
        }}
        transition={{
          duration: 0.45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.div
          className="absolute rounded-[80%_20%_70%_30%]"
          style={{
            left: 0,
            top: 3,
            width: size * 0.48,
            height: size * 0.68,
            background: color,
            boxShadow: `0 0 10px ${color}88`,
            transformOrigin: "right center",
          }}
          animate={{
            rotateY: [0, 55, 0],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
          }}
        />

        <motion.div
          className="absolute rounded-[20%_80%_30%_70%]"
          style={{
            right: 0,
            top: 3,
            width: size * 0.48,
            height: size * 0.68,
            background: "#9c62ff",
            boxShadow: "0 0 10px rgba(156,98,255,.5)",
            transformOrigin: "left center",
          }}
          animate={{
            rotateY: [0, -55, 0],
          }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
          }}
        />

        <div
          className="absolute left-1/2 top-[20%] rounded-full"
          style={{
            width: 3,
            height: size * 0.58,
            transform: "translateX(-50%)",
            background: "#25182c",
          }}
        />
      </motion.div>
    </motion.div>
  )
}

/* =========================================================
   🌸 GARDEN
========================================================= */

function GardenPage() {
  const [bloomed, setBloomed] = useState(false)

  const bloom = () => {
    if (!bloomed) {
      setBloomed(true)
    }
  }

  return (
    <div
      onPointerDown={bloom}
      className="relative w-full h-[100dvh] overflow-hidden cursor-pointer select-none"
      style={{
        background: `
          radial-gradient(
            ellipse at 50% 70%,
            rgba(89,31,105,.34),
            transparent 45%
          ),
          radial-gradient(
            ellipse at 50% 100%,
            rgba(16,61,42,.55),
            transparent 55%
          ),
          linear-gradient(
            to bottom,
            #050315 0%,
            #09041b 38%,
            #100521 68%,
            #03060c 100%
          )
        `,
      }}
    >
      {/* =================================================
          ✨ STARRY SKY
      ================================================= */}

      <GardenStars />

      {/* tiny purple glow */}
      <div
        className="absolute top-[18%] left-[50%] pointer-events-none"
        style={{
          width: "55vw",
          height: "35vh",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(ellipse,rgba(111,55,150,.16),transparent 70%)",
          filter: "blur(18px)",
        }}
      />

      {/* =================================================
          🌙 SOFT MOON
      ================================================= */}

      <motion.div
        className="absolute top-[9%] right-[11%] rounded-full pointer-events-none"
        style={{
          width: 34,
          height: 34,
          background:
            "radial-gradient(circle at 35% 30%,#fff,#ddd9ff 60%,#8078b9)",
          boxShadow: "0 0 30px rgba(207,195,255,.35)",
        }}
        animate={{
          opacity: [0.65, 1, 0.65],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
      />

      {/* =================================================
          💬 HEADER
      ================================================= */}

      <motion.div
        className="absolute top-7 left-0 right-0 z-50 text-center px-5 pointer-events-none"
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
        <p className="text-[11px] md:text-sm tracking-[0.22em] text-purple-200/55 uppercase">
          A little garden
        </p>

        <h1 className="mt-1 text-xl md:text-3xl text-pink-100/90">
          Tap anywhere and let the garden bloom 🌱✨
        </h1>

        {!bloomed && (
          <motion.p
            className="mt-2 text-xs md:text-sm text-purple-200/55"
            animate={{
              opacity: [0.35, 0.9, 0.35],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            One little touch… 🌸
          </motion.p>
        )}
      </motion.div>

      {/* =================================================
          🦋 BUTTERFLIES
      ================================================= */}

      <Butterfly
        left="4%"
        top="17%"
        size={25}
        color="#d65cff"
        duration={12}
      />

      <Butterfly
        left="22%"
        top="27%"
        size={19}
        color="#ff68b5"
        delay={2}
        duration={10}
      />

      <Butterfly
        left="57%"
        top="15%"
        size={23}
        color="#61bfff"
        delay={1}
        duration={13}
      />

      <Butterfly
        left="72%"
        top="32%"
        size={20}
        color="#ffb44c"
        delay={3}
        duration={11}
      />

      {/* =================================================
          🌱 GARDEN
      ================================================= */}

      <AnimatePresence>
        {bloomed && (
          <>
            {/* ------------------------------------------------
                BACK GRASS
            ------------------------------------------------ */}

            <Grass left="3%" height="27vh" rotate={-8} delay={0.1} />
            <Grass left="8%" height="21vh" rotate={8} delay={0.18} />
            <Grass left="91%" height="28vh" rotate={8} delay={0.22} />
            <Grass left="96%" height="22vh" rotate={-8} delay={0.3} />

            {/* ------------------------------------------------
                SIDE STEMS
            ------------------------------------------------ */}

            <Stem
              left="15%"
              height="39vh"
              rotate={-7}
              delay={0.05}
              flowerSize={35}
              flowerColor="#ff6fae"
              flowerOffset={-8}
            />

            <Stem
              left="25%"
              height="46vh"
              rotate={-4}
              delay={0.12}
              flowerSize={42}
              flowerColor="#ff82ba"
              flowerOffset={-10}
            />

            <Stem
              left="37%"
              height="54vh"
              rotate={-2}
              delay={0.2}
              flowerSize={50}
              flowerColor="#ff9dca"
              flowerOffset={-12}
            />

            {/* ------------------------------------------------
                MAIN CENTER FLOWERS
            ------------------------------------------------ */}

            <Stem
              left="47%"
              height="62vh"
              rotate={0}
              delay={0.28}
              flowerSize={58}
              flowerColor="#ff91c7"
              flowerOffset={-15}
            />

            <Stem
              left="57%"
              height="53vh"
              rotate={3}
              delay={0.22}
              flowerSize={49}
              flowerColor="#ff86bd"
              flowerOffset={-12}
            />

            <Stem
              left="69%"
              height="44vh"
              rotate={5}
              delay={0.15}
              flowerSize={43}
              flowerColor="#ff73b4"
              flowerOffset={-10}
            />

            <Stem
              left="82%"
              height="36vh"
              rotate={7}
              delay={0.08}
              flowerSize={34}
              flowerColor="#ff70b2"
              flowerOffset={-8}
            />

            {/* ------------------------------------------------
                EXTRA SMALL FLOWERS
            ------------------------------------------------ */}

            <motion.div
              className="absolute"
              style={{
                left: "31%",
                bottom: "39%",
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
                duration: 0.8,
                delay: 1.15,
                ease: "backOut",
              }}
            >
              <Flower
                size={31}
                color="#ffb1d3"
                delay={1.2}
              />
            </motion.div>

            <motion.div
              className="absolute"
              style={{
                left: "64%",
                bottom: "47%",
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
                duration: 0.8,
                delay: 1.25,
                ease: "backOut",
              }}
            >
              <Flower
                size={35}
                color="#ff9dc9"
                delay={1.3}
              />
            </motion.div>

            {/* ------------------------------------------------
                BIG LOWER LEAF MASS
            ------------------------------------------------ */}

            <motion.div
              className="absolute bottom-[-4vh] left-1/2"
              style={{
                width: "72vw",
                maxWidth: 650,
                height: "34vh",
                transform: "translateX(-50%)",
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
                duration: 1.5,
                delay: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* dark green foliage blobs */}
              {[
                ["8%", "42%", 70, -30],
                ["18%", "28%", 78, 25],
                ["29%", "48%", 84, -18],
                ["40%", "25%", 92, 28],
                ["52%", "43%", 90, -25],
                ["63%", "24%", 86, 22],
                ["74%", "45%", 80, -20],
                ["85%", "29%", 70, 28],
              ].map(([left, top, size, rotate], i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-[60%_0_60%_0]"
                  style={{
                    left,
                    top,
                    width: size,
                    height: size * 0.48,
                    transform: `rotate(${rotate}deg)`,
                    background:
                      "linear-gradient(135deg,#176a39,#0b3826 72%)",
                    boxShadow:
                      "0 0 15px rgba(15,105,52,.18)",
                  }}
                  animate={{
                    rotate: [rotate - 2, rotate + 2, rotate - 2],
                  }}
                  transition={{
                    duration: 4 + (i % 3),
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>

            {/* ------------------------------------------------
                GROUND GLOW
            ------------------------------------------------ */}

            <motion.div
              className="absolute bottom-0 left-0 right-0 h-[22vh] pointer-events-none"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
                delay: 0.5,
              }}
              style={{
                background:
                  "radial-gradient(ellipse at center bottom,rgba(24,112,59,.48),transparent 68%)",
              }}
            />

            {/* =================================================
                ❤️ FLOATING HEARTS
            ================================================= */}

            <Heart left="17%" top="56%" size={20} delay={0.4} />
            <Heart left="27%" top="48%" size={16} delay={1.8} />
            <Heart left="39%" top="55%" size={22} delay={0.9} />
            <Heart left="51%" top="44%" size={17} delay={2.3} />
            <Heart left="63%" top="51%" size={20} delay={1.2} />
            <Heart left="76%" top="47%" size={18} delay={2.8} />
            <Heart left="87%" top="58%" size={16} delay={1.5} />

            {/* =================================================
                🟢 MAGIC CIRCLES
            ================================================= */}

            <MagicCircle
              left="28%"
              top="42%"
              size={27}
              delay={0.5}
            />

            <MagicCircle
              left="59%"
              top="38%"
              size={35}
              delay={1.2}
            />

            <MagicCircle
              left="76%"
              top="25%"
              size={27}
              delay={0.8}
            />

            <MagicCircle
              left="91%"
              top="50%"
              size={23}
              delay={1.8}
            />

            <MagicCircle
              left="8%"
              top="62%"
              size={20}
              delay={2.1}
            />

            {/* =================================================
                ✨ LITTLE SPARKLES
            ================================================= */}

            {[18, 34, 49, 68, 83].map((left, i) => (
              <motion.div
                key={i}
                className="absolute text-sm pointer-events-none"
                style={{
                  left: `${left}%`,
                  bottom: `${24 + (i % 3) * 8}%`,
                }}
                animate={{
                  opacity: [0.15, 1, 0.15],
                  scale: [0.7, 1.25, 0.7],
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2 + i * 0.25,
                  delay: i * 0.4,
                  repeat: Infinity,
                }}
              >
                ✦
              </motion.div>
            ))}

            {/* =================================================
                💌 REFERENCE-STYLE MESSAGE
            ================================================= */}

            <motion.div
              className="absolute top-[23%] left-0 right-0 z-40 text-center px-8 pointer-events-none"
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 1.45,
              }}
            >
              <p
                className="text-pink-100/95 text-lg md:text-2xl"
                style={{
                  fontFamily: "cursive",
                  textShadow:
                    "0 0 12px rgba(255,150,210,.55)",
                }}
              >
                Every flower here
                <br />
                is a memory worth cherishing.
              </p>
            </motion.div>

            {/* =================================================
                🌸 FINAL GLOW
            ================================================= */}

            <motion.div
              className="absolute left-1/2 bottom-[17%] pointer-events-none"
              style={{
                width: 170,
                height: 170,
                transform: "translateX(-50%)",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle,rgba(255,105,190,.12),transparent 70%)",
                filter: "blur(12px)",
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0.3, 0.65, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: 1.5,
              }}
            />
          </>
        )}
      </AnimatePresence>

      {/* =================================================
          🌱 BEFORE BLOOM
      ================================================= */}

      <AnimatePresence>
        {!bloomed && (
          <motion.div
            className="absolute inset-0 z-40 flex items-end justify-center pb-[11vh] pointer-events-none"
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
            <motion.div
              className="text-center"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-pink-200 text-base md:text-lg">
                Touch anywhere… 🌱
              </p>

              <p className="mt-2 text-xs md:text-sm text-purple-200/55">
                Watch your little garden bloom ✨
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          🌸 AFTER BLOOM
      ================================================= */}

      <AnimatePresence>
        {bloomed && (
          <motion.p
            className="absolute bottom-5 left-0 right-0 z-50 text-center text-xs md:text-sm text-purple-200/45 pointer-events-none px-5"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 2,
            }}
          >
            A little garden, made with a little touch. 🌸
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
      {/* normal pages-এর background */}
      {currentPage !== "garden" && <StarryBackground />}

      {/* music */}
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
