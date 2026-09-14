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

/* =========================================================
   VIDEO STYLE FLOWERS
   ========================================================= */

const flowers = [
  {
    left: "39%",
    size: 56,
    height: "31vh",
    delay: 0.35,
    rotate: -4,
  },
  {
    left: "50%",
    size: 70,
    height: "39vh",
    delay: 0,
    rotate: 0,
  },
  {
    left: "61%",
    size: 55,
    height: "30vh",
    delay: 0.55,
    rotate: 4,
  },
  {
    left: "69%",
    size: 42,
    height: "25vh",
    delay: 0.85,
    rotate: 6,
  },
]

function VideoFlower({ size = 60, delay = 0 }) {
  const petals = [
    {
      className: "video-flower__leaf video-flower__leaf--1",
      delay: delay + 0.15,
    },
    {
      className: "video-flower__leaf video-flower__leaf--2",
      delay: delay + 0.25,
    },
    {
      className: "video-flower__leaf video-flower__leaf--3",
      delay: delay + 0.35,
    },
    {
      className: "video-flower__leaf video-flower__leaf--4",
      delay: delay + 0.45,
    },
    {
      className: "video-flower__leaf video-flower__leaf--5",
      delay: delay + 0.55,
    },
  ]

  return (
    <div
      className="video-flower"
      style={{
        width: size,
        height: size,
      }}
    >
      <div className="video-flower__leafs">
        {petals.map((petal, index) => (
          <motion.div
            key={index}
            className={petal.className}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.55,
              delay: petal.delay,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}

        <motion.div
          className="video-flower__white-circle"
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.5,
            delay: delay + 0.7,
            ease: "backOut",
          }}
        />

        {Array.from({ length: 8 }).map((_, index) => (
          <span
            key={index}
            className={`video-flower__light video-flower__light--${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function VideoLeaf({ side = "left", top = "55%", delay = 0 }) {
  return (
    <motion.div
      className={`video-plant-leaf video-plant-leaf--${side}`}
      style={{
        top,
      }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate: side === "left" ? -20 : 20,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: side === "left" ? -10 : 10,
      }}
      transition={{
        duration: 0.7,
        delay,
        ease: "backOut",
      }}
    >
      <span />
    </motion.div>
  )
}

function VideoFlowerPlant({
  left,
  height,
  size,
  delay,
  rotate,
}) {
  return (
    <div
      className="video-flower-plant"
      style={{
        left,
        height,
        "--plant-rotate": `${rotate}deg`,
      }}
    >
      {/* STEM */}
      <motion.div
        className="video-flower__line"
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: "100%",
          opacity: 1,
        }}
        transition={{
          duration: 1.25,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      />

      {/* LEAVES */}
      <VideoLeaf
        side="left"
        top="48%"
        delay={delay + 0.65}
      />

      <VideoLeaf
        side="right"
        top="67%"
        delay={delay + 0.8}
      />

      {/* FLOWER HEAD */}
      <motion.div
        className="video-flower-head"
        initial={{
          opacity: 0,
          scale: 0,
          y: 18,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 0.9,
          delay: delay + 0.95,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <VideoFlower
          size={size}
          delay={delay + 0.95}
        />
      </motion.div>
    </div>
  )
}

function VideoGrass() {
  return (
    <div className="video-grass">
      {grass.map(([left, tilt], index) => (
        <motion.span
          key={index}
          className="video-grass__blade"
          style={{
            left: `${left}%`,
            height: `${28 + (index % 4) * 9}px`,
            transform: `rotate(${tilt}deg)`,
          }}
          initial={{
            scaleY: 0,
          }}
          animate={{
            scaleY: 1,
          }}
          transition={{
            duration: 0.7,
            delay: 0.4 + index * 0.025,
            ease: "easeOut",
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
    <>
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

        {/* =====================================================
            VIDEO STYLE FLOWER GARDEN
            ===================================================== */}

        {bloomed && (
          <>
            <div className="video-flower-stage">
              {flowers.map((flower, index) => (
                <VideoFlowerPlant
                  key={index}
                  {...flower}
                />
              ))}

              <VideoGrass />

              {/* GROUND GLOW */}
              <motion.div
                className="video-ground-glow"
                initial={{
                  opacity: 0,
                  scale: 0.4,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 1.6,
                  delay: 0.4,
                }}
              />
            </div>

            {/* MEMORY TEXT */}
            <motion.p
              className="absolute bottom-24 left-0 right-0 z-30 text-center px-6 pointer-events-none"
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
          className="absolute bottom-5 left-0 right-0 z-40 text-center pointer-events-none"
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

      {/* =====================================================
          VIDEO FLOWER CSS
          ===================================================== */}

      <style jsx>{`
        .video-garden {
          isolation: isolate;
        }

        .video-flower-stage {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 10;
        }

        /* -----------------------------------------------------
           FLOWER PLANT
           ----------------------------------------------------- */

        .video-flower-plant {
          position: absolute;
          bottom: 0;
          width: 100px;
          transform: translateX(-50%);
          transform-origin: bottom center;
          animation: plantSway 5s ease-in-out infinite;
        }

        .video-flower__line {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 5px;
          border
          border-radius: 50%;

          background:
            radial-gradient(
              ellipse,
              rgba(30,220,180,.20) 0%,
              rgba(20,160,145,.10) 35%,
              transparent 72%
            );

          filter: blur(12px);
        }

        /* =====================================================
           ANIMATIONS
           ===================================================== */

        @keyframes plantSway {
          0%,
          100% {
            transform:
              translateX(-50%)
              rotate(-0.7deg);
          }

          50% {
            transform:
              translateX(-50%)
              rotate(0.7deg);
          }
        }

        @keyframes flowerFloat {
          0%,
          100% {
            margin-top: 0;
            transform: translateX(-50%) rotate(-1deg);
          }

          50% {
            margin-top: -3px;
            transform: translateX(-50%) rotate(1deg);
          }
        }

        @keyframes flowerRotate {
          0%,
          100% {
            transform: rotate(-1deg);
          }

          50% {
            transform: rotate(1deg);
          }
        }

        @keyframes flowerLight {
          0%,
          100% {
            opacity: .25;
            transform: scale(.7);
          }

          50% {
            opacity: 1;
            transform: scale(1.5);
          }
        }

        @keyframes grassSway {
          0%,
          100% {
            transform: rotate(-3deg);
          }

          50% {
            transform: rotate(3deg);
          }
        }

        @media (max-width: 600px) {
          .video-flower-plant {
            width: 80px;
          }

          .video-flower__line {
            width: 4px;
          }

          .video-plant-leaf {
            width: 31px;
            height: 17px;
          }

          .video-flower__light {
            width: 3px;
            height: 3px;
          }

          .video-ground-glow {
            width: 95%;
          }

          .video-grass {
            height: 55px;
          }
        }
      `}</style>
    </>
  )
}
