"use client"

import { useState } from "react"
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

const flowerData = [
  {
    cls: "flower--1",
    left: "28%",
    scale: "0.82",
    delay: "0s",
  },
  {
    cls: "flower--2",
    left: "50%",
    scale: "1",
    delay: "0.15s",
  },
  {
    cls: "flower--3",
    left: "70%",
    scale: "0.82",
    delay: "0.3s",
  },
  {
    cls: "flower--4",
    left: "84%",
    scale: "0.62",
    delay: "0.5s",
  },
]

function FlowerHead({ className }) {
  return (
    <div className={`flower ${className}`}>
      <div className="flower__leafs">
        <div className="flower__leaf flower__leaf--1" />
        <div className="flower__leaf flower__leaf--2" />
        <div className="flower__leaf flower__leaf--3" />
        <div className="flower__leaf flower__leaf--4" />

        <div className="flower__white-circle" />

        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className={`flower__light flower__light--${index + 1}`}
          />
        ))}
      </div>

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

function FlowerAnimation() {
  return (
    <div className="video-flower-stage">
      <div className="flowers">

        {/* MAIN FLOWERS */}

        {flowerData.map((flower) => (
          <div
            key={flower.cls}
            className="flower-wrap"
            style={{
              "--flower-left": flower.left,
              "--flower-scale": flower.scale,
              "--flower-delay": flower.delay,
            }}
          >
            <FlowerHead className={flower.cls} />
          </div>
        ))}

        {/* LONG STEM */}

        <div
          className="grow-ans"
          style={{ "--d": "1.2s" }}
        >
          <div className="flower__g-long">
            <div className="flower__g-long__top" />
            <div className="flower__g-long__bottom" />
          </div>
        </div>

        {/* GRASS 1 */}

        <div className="growing-grass">
          <div className="flower__grass flower__grass--1">
            <div className="flower__grass--top" />
            <div className="flower__grass--bottom" />

            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`flower__grass__leaf flower__grass__leaf--${
                  index + 1
                }`}
              />
            ))}

            <div className="flower__grass__overlay" />
          </div>
        </div>

        {/* GRASS 2 */}

        <div className="growing-grass">
          <div className="flower__grass flower__grass--2">
            <div className="flower__grass--top" />
            <div className="flower__grass--bottom" />

            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`flower__grass__leaf flower__grass__leaf--${
                  index + 1
                }`}
              />
            ))}

            <div className="flower__grass__overlay" />
          </div>
        </div>

        {/* RIGHT FOLIAGE */}

        <div
          className="grow-ans"
          style={{ "--d": "2.4s" }}
        >
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf" />
          </div>
        </div>

        <div
          className="grow-ans"
          style={{ "--d": "2.8s" }}
        >
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf" />
          </div>
        </div>

        {/* FRONT FOLIAGE */}

        <div
          className="grow-ans"
          style={{ "--d": "2.8s" }}
        >
          <div className="flower__g-front">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${
                  index + 1
                }`}
              >
                <div className="flower__g-front__leaf" />
              </div>
            ))}
          </div>
        </div>

        {/* FRONT BRANCH */}

        <div className="flower__g-fr">
          <div className="leaf" />

          {Array.from({ length: 5 }).map((_, index) => (
            <div
              key={index}
              className={`flower__g-fr__leaf flower__g-fr__leaf--${
                index + 1
              }`}
            />
          ))}
        </div>

        {/* LONG GRASS GROUPS */}

        {Array.from({ length: 8 }).map((_, index) => (
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
      </div>

      {/* FRONT GRASS */}

      <div className="video-grass">
        {grass.map(([left, rotation], index) => (
          <span
            key={index}
            className="video-grass__blade"
            style={{
              left: `${left}%`,
              height: `${28 + (index % 4) * 9}px`,
              transform: `rotate(${rotation}deg)`,
              animationDelay: `${index * 0.04}s`,
            }}
          />
        ))}
      </div>

      <div className="video-ground-glow" />
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

export default function GardenPage() {
  const [bloomed, setBloomed] = useState(false)

  const handleBloom = () => {
    setBloomed(true)
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

      {/* FLOWER ANIMATION */}

      {bloomed && <FlowerAnimation />}

      {/* MEMORY TEXT */}

      {bloomed && (
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
  )
}
