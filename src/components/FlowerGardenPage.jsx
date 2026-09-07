"use client"

import { motion } from "framer-motion"
import { useState } from "react"

const STARS = [
  [5, 12, 2],
  [11, 25, 1],
  [17, 8, 2],
  [23, 18, 1],
  [29, 7, 2],
  [36, 22, 1],
  [43, 10, 2],
  [49, 27, 1],
  [56, 8, 2],
  [63, 19, 1],
  [70, 11, 2],
  [77, 25, 1],
  [84, 7, 2],
  [91, 18, 1],
  [96, 31, 2],
  [8, 42, 1],
  [20, 35, 2],
  [32, 45, 1],
  [68, 39, 2],
  [80, 43, 1],
  [92, 37, 2],
]

const GRASS = [
  [3, 25, -8],
  [7, 31, 7],
  [12, 22, -5],
  [17, 28, 8],
  [22, 20, -7],
  [27, 29, 5],
  [33, 23, -6],
  [39, 30, 7],
  [45, 21, -5],
  [51, 28, 6],
  [57, 23, -7],
  [63, 30, 5],
  [69, 22, -6],
  [75, 29, 7],
  [81, 23, -5],
  [87, 30, 6],
  [93, 22, -7],
  [98, 28, 5],
]

const FLOWER_POSITIONS = [
  {
    left: "39%",
    height: 220,
    size: 46,
    delay: 0.15,
    tilt: -7,
  },
  {
    left: "50%",
    height: 270,
    size: 58,
    delay: 0,
    tilt: 0,
  },
  {
    left: "61%",
    height: 225,
    size: 46,
    delay: 0.2,
    tilt: 7,
  },
]

function FlowerHead({ size }) {
  const petals = [
    {
      rotate: 0,
      x: 0,
      y: -15,
    },
    {
      rotate: 72,
      x: 13,
      y: -5,
    },
    {
      rotate: 144,
      x: 8,
      y: 10,
    },
    {
      rotate: 216,
      x: -8,
      y: 10,
    },
    {
      rotate: 288,
      x: -13,
      y: -5,
    },
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
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute rounded-[55%] origin-bottom"
          style={{
            width: size * 0.42,
            height: size * 0.62,
            left: `calc(50% + ${petal.x}px - ${
              size * 0.21
            }px)`,
            top: `calc(50% + ${petal.y}px - ${
              size * 0.31
            }px)`,
            background:
              "linear-gradient(180deg, #5ce9e2 0%, #20b9b6 55%, #168f9a 100%)",
            boxShadow:
              "0 0 10px rgba(54,220,215,.38)",
            transform: `rotate(${petal.rotate}deg)`,
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
            duration: 0.7,
            delay: index * 0.06,
            ease: "backOut",
          }}
        />
      ))}

      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.25,
          height: size * 0.25,
          left: "37.5%",
          top: "37.5%",
          background:
            "radial-gradient(circle at 35% 30%, #fff7a0, #f7cf32 65%, #e7a91b)",
          boxShadow:
            "0 0 13px rgba(255,220,75,.75)",
        }}
        initial={{
          scale: 0,
        }}
        animate={{
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.45,
          ease: "backOut",
        }}
      />
    </motion.div>
  )
}

function Leaf({ side, bottom, delay }) {
  return (
    <motion.div
      className="absolute"
      style={{
        left: side === "left" ? "50%" : "auto",
        right: side === "right" ? "50%" : "auto",
        bottom,
        width: 30,
        height: 14,
        borderRadius:
          side === "left"
            ? "100% 0 100% 0"
            : "0 100% 0 100%",
        background:
          "linear-gradient(135deg, #35bd7b, #126d50)",
        transformOrigin:
          side === "left"
            ? "right center"
            : "left center",
      }}
      initial={{
        scale: 0,
        rotate: side === "left" ? -35 : 35,
      }}
      animate={{
        scale: 1,
        rotate: side === "left" ? -12 : 12,
      }}
      transition={{
        duration: 0.65,
        delay,
        ease: "backOut",
      }}
    />
  )
}

function FlowerPlant({
  left,
  height,
  size,
  delay,
  tilt,
}) {
  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left,
        width: 100,
        height,
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
        duration: 1.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* STEM */}
      <motion.div
        className="absolute bottom-0 left-1/2 rounded-full"
        style={{
          width: 5,
          height: "100%",
          background:
            "linear-gradient(to top, #124d39, #198b5d, #3cc988)",
          transform: `translateX(-50%) rotate(${tilt}deg)`,
          transformOrigin: "bottom center",
          boxShadow:
            "0 0 7px rgba(39,190,125,.25)",
        }}
        initial={{
          scaleY: 0,
        }}
        animate={{
          scaleY: 1,
        }}
        transition={{
          duration: 1.15,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* LEAVES */}
      <Leaf
        side="left"
        bottom="34%"
        delay={delay + 0.55}
      />

      <Leaf
        side="right"
        bottom="48%"
        delay={delay + 0.7}
      />

      {/* FLOWER */}
      <motion.div
        className="absolute left-1/2"
        style={{
          top: -size * 0.42,
          transform: "translateX(-50%)",
          transformOrigin: "bottom center",
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
        <FlowerHead size={size} />
      </motion.div>
    </motion.div>
  )
}

function Grass() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none">
      {GRASS.map(([left, height, rotate], index) => (
        <motion.div
          key={index}
          className="absolute bottom-0 origin-bottom rounded-full"
          style={{
            left: `${left}%`,
            width: 3,
            height,
            background:
              "linear-gradient(to top, #0d4c38, #2fae70)",
            transform: `rotate(${rotate}deg)`,
          }}
          animate={{
            rotate: [
              rotate - 3,
              rotate + 3,
              rotate - 3,
            ],
          }}
          transition={{
            duration: 2.8 + (index % 3) * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

function Fireflies() {
  const fireflies = [
    [13, 34],
    [22, 52],
    [30, 27],
    [70, 32],
    [79, 50],
    [89, 29],
    [17, 64],
    [84, 65],
  ]

  return (
    <>
      {fireflies.map(([left, top], index) => (
        <motion.div
          key={index}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: 3,
            height: 3,
            background: "#bffff0",
            boxShadow:
              "0 0 12px 4px rgba(100,255,220,.55)",
          }}
          animate={{
            opacity: [0.15, 1, 0.2],
            scale: [0.7, 1.5, 0.7],
            y: [-5, 5, -5],
          }}
          transition={{
            duration: 2.5 + (index % 3) * 0.5,
            delay: (index % 4) * 0.4,
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
        background:
          "radial-gradient(circle at 50% 65%, rgba(20,100,110,.22), transparent 35%), linear-gradient(to bottom, #020716 0%, #061426 50%, #071e29 78%, #020a11 100%)",
      }}
    >
      {/* STARS */}
      <div className="absolute inset-0 pointer-events-none">
        {STARS.map(([left, top, size], index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
            }}
            animate={{
              opacity: [0.2, 0.9, 0.2],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 2.5 + (index % 4) * 0.4,
              delay: (index % 5) * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* MOON */}
      <motion.div
        className="absolute top-[12%] right-[10%] w-12 h-12 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #ffffff, #d8ffff 58%, #80b8c4)",
          boxShadow:
            "0 0 32px rgba(170,245,255,.42)",
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
        className="absolute top-10 left-0 right-0 z-40 text-center px-5 pointer-events-none"
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <h1
          className="text-2xl md:text-4xl font-medium"
          style={{
            color: "#baf8f2",
            textShadow:
              "0 0 13px rgba(75,230,220,.45)",
          }}
        >
          A LITTLE GARDEN
        </h1>

        {!bloomed && (
          <motion.p
            className="mt-3 text-sm md:text-base"
            style={{
              color: "rgba(215,255,250,.75)",
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
          {FLOWER_POSITIONS.map((flower, index) => (
            <FlowerPlant
              key={index}
              {...flower}
            />
          ))}

          <Grass />

          {/* GROUND GLOW */}
          <motion.div
            className="absolute bottom-0 left-1/2 pointer-events-none"
            style={{
              width: "75%",
              height: 100,
              transform: "translateX(-50%)",
              background:
                "radial-gradient(ellipse, rgba(50,205,170,.17), transparent 70%)",
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
              duration: 1.4,
            }}
          />

          {/* MESSAGE */}
          <motion.p
            className="absolute bottom-24 left-0 right-0 text-center px-6 pointer-events-none"
            style={{
              color: "rgba(215,255,250,.72)",
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
              delay: 1.8,
              duration: 1,
            }}
          >
            Every flower here is a memory worth cherishing.
          </motion.p>
        </>
      )}

      {/* FOOTER */}
      <div className="absolute bottom-5 left-0 right-0 text-center pointer-events-none">
        <span
          className="text-xs md:text-sm"
          style={{
            color: "rgba(180,245,235,.5)",
          }}
        >
          A little garden, made with a little touch. 🌸
        </span>
      </div>
    </main>
  )
}
