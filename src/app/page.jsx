"use client"

import { useEffect, useRef, useState } from "react"
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

      <Leaf side="left" top="38%" scale={0.9} />
      <Leaf side="left" top="58%" scale={0.72} />
      <Leaf side="left" top="76%" scale={0.62} />

      <Leaf side="right" top="45%" scale={0.85} />
      <Leaf side="right" top="65%" scale={0.7} />

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
            boxShadow:
              "0 0 12px 4px rgba(255,220,100,.5)",
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
   ✨ DRONE-PARTICLE PHOTO
   শুধু transparent subject-টাই particles দিয়ে তৈরি হবে।
========================================================= */

function DroneParticlePhoto({ active }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", {
      alpha: true,
    })

    if (!ctx) return

    let animationFrame
    let destroyed = false

    const image = new window.Image()
    image.src = "/garden-subject.png"

    image.onload = () => {
      if (destroyed) return

      const resize = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2)

        const width = Math.min(
          window.innerWidth * 0.82,
          430
        )

        const height = Math.min(
          window.innerHeight * 0.38,
          330
        )

        canvas.style.width = `${width}px`
        canvas.style.height = `${height}px`

        canvas.width = Math.floor(width * dpr)
        canvas.height = Math.floor(height * dpr)

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

        buildParticles(width, height)
      }

      let particles = []

      const buildParticles = (width, height) => {
        const offscreen = document.createElement("canvas")
        const sampleWidth = 250
        const sampleHeight = Math.round(
          sampleWidth * (image.height / image.width)
        )

        offscreen.width = sampleWidth
        offscreen.height = sampleHeight

        const offCtx = offscreen.getContext("2d")

        if (!offCtx) return

        offCtx.clearRect(
          0,
          0,
          sampleWidth,
          sampleHeight
        )

        offCtx.drawImage(
          image,
          0,
          0,
          sampleWidth,
          sampleHeight
        )

        const pixels = offCtx.getImageData(
          0,
          0,
          sampleWidth,
          sampleHeight
        ).data

        const possible = []

        /*
         * Only pixels having strong alpha are selected.
         * তাই background/transparent অংশ particle হবে না।
         */
        for (let y = 0; y < sampleHeight; y += 3) {
          for (let x = 0; x < sampleWidth; x += 3) {
            const index =
              (y * sampleWidth + x) * 4

            const alpha = pixels[index + 3]

            if (alpha > 150) {
              possible.push({
                x,
                y,
                r: pixels[index],
                g: pixels[index + 1],
                b: pixels[index + 2],
                a: alpha,
              })
            }
          }
        }

        /*
         * Particle count সীমিত রাখা হয়েছে
         * যাতে mobile-এও smooth থাকে।
         */
        const maxParticles = 1450

        if (possible.length > maxParticles) {
          const step =
            possible.length / maxParticles

          particles = []

          for (
            let i = 0;
            i < maxParticles;
            i++
          ) {
            particles.push(
              possible[Math.floor(i * step)]
            )
          }
        } else {
          particles = possible
        }

        const sourceRatio =
          sampleWidth / sampleHeight

        let targetW = width * 0.82
        let targetH = targetW / sourceRatio

        if (targetH > height * 0.92) {
          targetH = height * 0.92
          targetW = targetH * sourceRatio
        }

        const offsetX =
          (width - targetW) / 2

        const offsetY =
          (height - targetH) / 2

        particles = particles.map(
          (p, index) => {
            const tx =
              offsetX +
              (p.x / sampleWidth) * targetW

            const ty =
              offsetY +
              (p.y / sampleHeight) * targetH

            /*
             * Deterministic scatter.
             * Math.random() render-এর মধ্যে নেই।
             */
            const seed =
              (index * 9301 + 49297) % 233280

            const random =
              seed / 233280

            const seed2 =
              (index * 49297 + 233280) % 9301

            const random2 =
              seed2 / 9301

            return {
              tx,
              ty,
              r: p.r,
              g: p.g,
              b: p.b,
              a: p.a / 255,

              sx:
                width * 0.12 +
                random * width * 0.76,

              sy:
                height * 0.05 +
                random2 * height * 0.85,

              size:
                0.7 +
                (index % 4) * 0.35,

              delay:
                (index % 37) * 0.012,
            }
          }
        )
      }

      resize()

      window.addEventListener(
        "resize",
        resize
      )

      const startTime = performance.now()

      const animate = (now) => {
        if (destroyed) return

        const elapsed =
          (now - startTime) / 1000

        const formationDuration = 4.8

        /*
         * 0 → 1:
         * scattered light particles
         * ধীরে ধীরে subject-এর shape নেয়।
         */
        let progress =
          Math.min(
            1,
            Math.max(
              0,
              elapsed / formationDuration
            )
          )

        /*
         * Smooth cinematic easing
         */
        progress =
          progress < 0.5
            ? 4 * progress * progress * progress
            : 1 -
              Math.pow(
                -2 * progress + 2,
                3
              ) /
                2

        ctx.clearRect(
          0,
          0,
          canvas.clientWidth,
          canvas.clientHeight
        )

        for (
          let i = 0;
          i < particles.length;
          i++
        ) {
          const p = particles[i]

          const localProgress = Math.max(
            0,
            Math.min(
              1,
              (progress * 1.35) -
                p.delay
            )
          )

          const ease =
            localProgress *
            localProgress *
            (3 - 2 * localProgress)

          /*
           * Particle target position
           */
          let x =
            p.sx +
            (p.tx - p.sx) * ease

          let y =
            p.sy +
            (p.ty - p.sy) * ease

          /*
           * After forming the image,
           * tiny floating movement থাকবে।
           */
          if (progress >= 1) {
            const t =
              elapsed * 0.75 +
              i * 0.017

            x += Math.sin(t) * 0.65
            y += Math.cos(t * 0.9) * 0.55
          }

          /*
           * Soft breathing effect
           */
          const twinkle =
            0.72 +
            Math.sin(
              elapsed * 2.1 +
                i * 0.13
            ) *
              0.25

          const radius =
            p.size *
            (0.85 +
              Math.sin(
                elapsed * 1.5 +
                  i
              ) *
                0.12)

          ctx.beginPath()

          ctx.arc(
            x,
            y,
            radius,
            0,
            Math.PI * 2
          )

          ctx.fillStyle =
            `rgba(${p.r},${p.g},${p.b},${Math.max(
              0.22,
              p.a * twinkle
            )})`

          ctx.shadowBlur =
            radius > 1.5 ? 5 : 3

          ctx.shadowColor =
            `rgba(${p.r},${p.g},${p.b},0.75)`

          ctx.fill()
        }

        ctx.shadowBlur = 0

        animationFrame =
          requestAnimationFrame(animate)
      }

      animationFrame =
        requestAnimationFrame(animate)

      return () => {
        window.removeEventListener(
          "resize",
          resize
        )

        cancelAnimationFrame(
          animationFrame
        )
      }
    }

    image.onerror = () => {
      console.warn(
        "garden-subject.png could not be loaded."
      )
    }

    return () => {
      destroyed = true

      cancelAnimationFrame(
        animationFrame
      )
    }
  }, [active])

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="absolute left-1/2 z-20 pointer-events-none"
          style={{
            top: "25%",
            transform: "translateX(-50%)",
          }}
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease: "easeOut",
          }}
        >
          {/* Soft aura behind the particles */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                "radial-gradient(circle,rgba(190,150,255,.12),transparent 68%)",
              filter: "blur(25px)",
              transform: "scale(1.25)",
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1.15, 1.3, 1.15],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <canvas
            ref={canvasRef}
            className="relative block"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}


/* =========================================================
   🌺 GARDEN
========================================================= */

function GardenPage() {
  const [growth, setGrowth] = useState(0)

  const growGarden = () => {
    setGrowth((prev) =>
      Math.min(prev + 1, 5)
    )
  }

  const plants = [
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
      color: "#
