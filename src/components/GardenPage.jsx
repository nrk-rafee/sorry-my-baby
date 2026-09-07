"use client"

import { useState } from "react"
import { motion } from "framer-motion"

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

const grass = [
  [4, 0],
  [8, 3],
  [13, -2],
  [18, 2],
  [24, -1],
  [30, 3],
  [36, -2],
  [42, 1],
  [48, -2],
  [54, 2],
  [60, -1],
  [66, 3],
  [72, -2],
  [78, 2],
  [84, -1],
  [90, 3],
  [96, -2],
]

const flowers = [
  {
    left: "39%",
    size: 48,
    height: "31vh",
    delay: 0.05,
    rotate: -5,
  },
  {
    left: "50%",
    size: 58,
    height: "37vh",
    delay: 0,
    rotate: 0,
  },
  {
    left: "61%",
    size: 48,
    height: "30vh",
    delay: 0.12,
    rotate: 5,
  },
]

function Flower({ size = 50 }) {
  const petals = [
    { x: 0, y: -0.42, rotate: 0 },
    { x: 0.32, y: -0.15, rotate: 72 },
    { x: 0.2, y: 0.27, rotate: 144 },
    { x: -0.2, y: 0.27, rotate: 216 },
    { x: -0.32, y: -0.15, rotate: 288 },
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
        duration: 3.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {petals.map((petal, index) => (
        <div
          key={index}
          className="absolute rounded-full"
          style={{
            width: size * 0.48,
            height: size * 0.64,
            left: `calc(50% + ${petal.x * size}px - ${
              size * 0.24
            }px)`,
            top: `calc(50% + ${petal.y * size}px - ${
              size * 0.32
            }px)`,
            background:
              "linear-gradient(180deg, #42e8e0 0%, #16aeb4 100%)",
            boxShadow:
              "0 0 12px rgba(40,220,215,.45)",
            transform: `rotate(${petal.rotate}deg)`,
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
          background:
            "radial-gradient(circle at 35% 35%, #fff38a, #f4c928 70%)",
          boxShadow:
            "0 0 12px rgba(255,220,70,.7)",
        }}
      />
    </motion.div>
  )
}

function Leaf({ side = "left", top = "55%" }) {
  return (
    <motion.div
      className="absolute"
      style={{
        top,
        [side]: side === "left" ? "-5px" : "-7px",
      }}
      animate={{
        rotate:
          side === "left"
            ? [-8, -2, -8]
            : [8, 2, 8],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        style={{
          width: 28,
          height: 13,
          borderRadius:
            side === "left"
              ? "100% 0 100% 0"
              : "0 100% 0 100%",
          background:
            "linear-gradient(135deg,#32b77a,#15745a)",
          transform:
            side === "left"
              ? "rotate(-18deg)"
              : "rotate(18deg)",
          boxShadow:
            "0 0 7px rgba(40,190,130,.25)",
        }}
      />
    </motion.div>
  )
}

function FlowerPlant({
  left,
  height,
  size,
  delay,
  rotate,
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left,
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
        duration: 1.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* curved stem */}
      <motion.div
        className="absolute bottom-0 left-1/2"
        style={{
          width: 5,
          height: "100%",
          transform: `translateX(-50%) rotate(${rotate}deg)`,
          transformOrigin: "bottom center",
          borderRadius: 999,
          background:
            "linear-gradient(to top,#15513b,#23875e,#40c486)",
          boxShadow:
            "0 0 7px rgba(40,190,130,.25)",
        }}
        animate={{
          rotate: [
            rotate - 1,
            rotate + 1,
            rotate - 1,
          ],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <Leaf side="left" top="54%" />
      <Leaf side="right" top="67%" />

      {/* flower */}
      <motion.div
        className="absolute left-1/2"
        style={{
          top: -size * 0.45,
          transform: "translateX(-50%)",
        }}
        initial={{
          opacity: 0,
          scale: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: delay + 0.95,
          ease: "backOut",
        }}
      >
        <Flower size={size} />
      </motion.div>
    </motion.div>
  )
}

function Grass() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none">
      {grass.map(([left, tilt], index) => (
        <motion.div
          key={index}
          className="absolute bottom-0"
          style={{
            left: `${left}%`,
            width: 3,
            height: 25 + (index % 3) * 8,
            borderRadius: "100% 0 100% 0",
            background:
              "linear-gradient(to top,#104f3a,#35ad70)",
            transform: `rotate(${tilt}deg)`,
            transformOrigin: "bottom center",
          }}
          animate={{
            rotate: [tilt - 3, tilt + 3, tilt - 3],
          }}
          transition={{
            duration: 2.5 + (index % 3) * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

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
            boxShadow:
              "0 0 12px 4px rgba(110,255,220,.55)",
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
      className="relative min-h-[100dvh] w-full overflow-hidden cursor-pointer select-none"
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
          boxShadow:
            "0 0 35px rgba(160,240,255,.45)",
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
            textShadow:
              "0 0 12px rgba(80,230,220,.45)",
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

      {/* FLOWERS */}
      {bloomed && (
        <>
          {flowers.map((flower, index) => (
            <FlowerPlant
              key={index}
              {...flower}
            />
          ))}

          <Grass />

          {/* soft ground glow */}
          <motion.div
            className="absolute bottom-0 left-1/2 pointer-events-none"
            style={{
              width: "70%",
              height: 90,
              transform: "translateX(-50%)",
              background:
                "radial-gradient(ellipse,rgba(55,210,175,.18),transparent 70%)",
              filter: "blur(10px)",
            }}
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
            }}
          />

          <motion.p
            className="absolute bottom-24 left-0 right-0 text-center px-6 pointer-events-none"
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
              delay: 1.7,
              duration: 1,
            }}
          >
            Every flower here is a memory worth cherishing.
          </motion.p>
        </>
      )}

      {/* FOOTER */}
      <motion.div
        className="absolute bottom-5 left-0 right-0 text-center pointer-events-none"
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
