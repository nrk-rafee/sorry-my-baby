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
   ✨ PARTICLE PORTRAIT
   The portrait is revealed from thousands of tiny lights.
   Put /public/portrait-particle-source.png in your project.
========================================================= */

function ParticlePortrait({ active }) {
  const canvasRef = useRef(null)
  const wrapRef = useRef(null)

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    const wrap = wrapRef.current
    if (!canvas || !wrap) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrame = 0
    let destroyed = false
    let particles = []
    let dust = []
    let startedAt = 0
    let resizeObserver = null

    const CONFIG = {
      particleCount: 3000,
      dustCount: 220,
      revealDuration: 5600,
      holdBeforeReveal: 500,
    }

    const random = (min, max) =>
      Math.random() * (max - min) + min

    const clamp = (value, min, max) =>
      Math.max(min, Math.min(max, value))

    const easeOutCubic = (t) =>
      1 - Math.pow(1 - clamp(t, 0, 1), 3)

    const easeInOutCubic = (t) => {
      t = clamp(t, 0, 1)
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2
    }

    const setCanvasSize = () => {
      const rect = wrap.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = Math.max(1, Math.floor(rect.width * dpr))
      canvas.height = Math.max(1, Math.floor(rect.height * dpr))
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const getDisplayRect = () => {
      const rect = wrap.getBoundingClientRect()
      const mobile = rect.width < 600

      const maxWidth = mobile
        ? rect.width * 0.82
        : Math.min(rect.width * 0.62, 620)

      const sourceRatio = 1115 / 864
      const width = maxWidth
      const height = width / sourceRatio

      return {
        x: (rect.width - width) / 2,
        y: Math.max(55, rect.height * 0.105),
        width,
        height,
      }
    }

    const buildParticles = (image) => {
      const sourceW = 420
      const sourceH = Math.round(sourceW * (864 / 1115))

      const offscreen = document.createElement("canvas")
      offscreen.width = sourceW
      offscreen.height = sourceH

      const offCtx = offscreen.getContext("2d", {
        willReadFrequently: true,
      })

      if (!offCtx) return

      /*
        The supplied PNG already has the wall/background removed.
        These crop values keep only the portrait area.
      */
      offCtx.clearRect(0, 0, sourceW, sourceH)
      offCtx.drawImage(
        image,
        231,
        0,
        1115,
        864,
        0,
        0,
        sourceW,
        sourceH
      )

      const pixels = offCtx.getImageData(
        0,
        0,
        sourceW,
        sourceH
      ).data

      const candidates = []

      /*
        Sample the image every 2 pixels.
        Transparent pixels are ignored, so the wall does not become
        part of the particle portrait.
      */
      for (let y = 0; y < sourceH; y += 2) {
        for (let x = 0; x < sourceW; x += 2) {
          const i = (y * sourceW + x) * 4
          const r = pixels[i]
          const g = pixels[i + 1]
          const b = pixels[i + 2]
          const a = pixels[i + 3]

          if (a < 70) continue

          candidates.push({
            nx: x / sourceW,
            ny: y / sourceH,
            r,
            g,
            b,
            a,
          })
        }
      }

      /*
        Shuffle and limit the number of particles so the animation
        stays smooth on phones as well as desktop.
      */
      for (let i = candidates.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[candidates[i], candidates[j]] = [
          candidates[j],
          candidates[i],
        ]
      }

      const selected = candidates.slice(
        0,
        Math.min(CONFIG.particleCount, candidates.length)
      )

      const rect = getDisplayRect()
      const centerX = rect.x + rect.width / 2
      const centerY = rect.y + rect.height / 2

      particles = selected.map((point, index) => {
        const tx = rect.x + point.nx * rect.width
        const ty = rect.y + point.ny * rect.height

        /*
          Drone-like arrival:
          particles begin far away from their final position,
          then converge toward the portrait.
        */
        const angle = random(0, Math.PI * 2)
        const distance = random(
          Math.min(rect.width, rect.height) * 0.55,
          Math.max(rect.width, rect.height) * 1.25
        )

        const startX =
          centerX +
          Math.cos(angle) * distance +
          random(-120, 120)

        const startY =
          centerY +
          Math.sin(angle) * distance +
          random(-180, 180)

        return {
          x: startX,
          y: startY,
          tx,
          ty,
          r: point.r,
          g: point.g,
          b: point.b,
          alpha: point.a / 255,
          size: random(0.65, 1.55),
          twinkle: random(0, Math.PI * 2),
          drift: random(0.35, 1.15),
          depth: random(0.2, 1),
          delay: random(0, 850),
          index,
        }
      })

      /*
        Small temporary floating lights make the transition feel
        more like a magical aerial/drone reveal.
      */
      dust = Array.from(
        { length: CONFIG.dustCount },
        () => ({
          x: random(rect.x - 80, rect.x + rect.width + 80),
          y: random(
            rect.y - 120,
            rect.y + rect.height + 140
          ),
          vx: random(-0.18, 0.18),
          vy: random(-0.42, 0.15),
          size: random(0.35, 1.25),
          alpha: random(0.08, 0.45),
          phase: random(0, Math.PI * 2),
        })
      )
    }

    const draw = (now) => {
      if (destroyed) return

      const rect = wrap.getBoundingClientRect()
      const width = rect.width
      const height = rect.height

      ctx.clearRect(0, 0, width, height)

      if (!startedAt) startedAt = now

      const elapsed = now - startedAt

      /*
        Recalculate target positions on every frame so the portrait
        remains correctly placed if the screen rotates/resizes.
      */
      const targetRect = getDisplayRect()
      const centerX = targetRect.x + targetRect.width / 2
      const centerY = targetRect.y + targetRect.height / 2

      const revealT = clamp(
        (elapsed - CONFIG.holdBeforeReveal) /
          CONFIG.revealDuration,
        0,
        1
      )

      const revealEase = easeInOutCubic(revealT)

      ctx.globalCompositeOperation = "lighter"

      /* Temporary aerial dust */
      const dustLife = clamp(
        1 - (elapsed - 1000) / 6500,
        0,
        1
      )

      for (const mote of dust) {
        mote.x += mote.vx
        mote.y += mote.vy

        const pulse =
          0.55 +
          Math.sin(now * 0.002 + mote.phase) * 0.45

        ctx.beginPath()
        ctx.fillStyle = `rgba(155,255,236,${
          mote.alpha * pulse * dustLife
        })`
        ctx.arc(
          mote.x,
          mote.y,
          mote.size,
          0,
          Math.PI * 2
        )
        ctx.fill()
      }

      for (const particle of particles) {
        /*
          Spread -> portrait convergence.
          Each particle has a slightly different arrival time.
        */
        const localT = clamp(
          (elapsed -
            CONFIG.holdBeforeReveal -
            particle.delay) /
            (CONFIG.revealDuration - 500),
          0,
          1
        )

        const e = easeOutCubic(localT)

        /*
          Gentle depth/zoom illusion:
          early particles move dramatically,
          later particles settle into the image.
        */
        const startScale = 1.65 - particle.depth * 0.4

        const baseX =
          particle.x +
          (particle.tx - particle.x) * e

        const baseY =
          particle.y +
          (particle.ty - particle.y) * e

        const distanceFromCenterX =
          baseX - centerX

        const distanceFromCenterY =
          baseY - centerY

        const cinematicZoom =
          (1 - e) *
          0.13 *
          particle.depth

        const drawX =
          centerX +
          distanceFromCenterX *
            (1 + cinematicZoom)

        const drawY =
          centerY +
          distanceFromCenterY *
            (1 + cinematicZoom)

        const floating =
          e *
          Math.sin(
            now * 0.0012 * particle.drift +
              particle.twinkle
          ) *
          0.7

        const finalX = drawX + floating
        const finalY =
          drawY +
          e *
            Math.cos(
              now * 0.001 +
                particle.twinkle
            ) *
            0.45

        const twinkle =
          0.78 +
          Math.sin(
            now * 0.003 +
              particle.twinkle
          ) *
            0.22

        /*
          Particles are brighter while moving, then settle into
          a softer photographic glow.
        */
        const revealBrightness =
          0.62 + e * 0.38

        const size =
          particle.size *
          (startScale - e * 0.45)

        const alpha =
          particle.alpha *
          twinkle *
          revealBrightness *
          (0.15 + e * 0.85)

        if (alpha <= 0.01) continue

        ctx.beginPath()
        ctx.fillStyle = `rgba(${particle.r},${particle.g},${particle.b},${alpha})`
        ctx.shadowBlur = e > 0.72 ? 5 : 8
        ctx.shadowColor = `rgba(${particle.r},${particle.g},${particle.b},${
          alpha * 0.85
        })`

        ctx.arc(
          finalX,
          finalY,
          Math.max(0.45, size),
          0,
          Math.PI * 2
        )
        ctx.fill()
      }

      ctx.shadowBlur = 0
      ctx.globalCompositeOperation = "source-over"

      /*
        A subtle final shimmer passes across the completed portrait.
      */
      if (revealT > 0.72) {
        const shimmerProgress =
          ((elapsed - 4700) % 5200) / 5200

        const sweepX =
          targetRect.x -
          targetRect.width * 0.25 +
          shimmerProgress *
            targetRect.width *
            1.5

        const gradient = ctx.createLinearGradient(
          sweepX - 55,
          targetRect.y,
          sweepX + 55,
          targetRect.y
        )

        gradient.addColorStop(
          0,
          "rgba(255,255,255,0)"
        )
        gradient.addColorStop(
          0.5,
          "rgba(210,255,246,.10)"
        )
        gradient.addColorStop(
          1,
          "rgba(255,255,255,0)"
        )

        ctx.fillStyle = gradient
        ctx.fillRect(
          targetRect.x,
          targetRect.y,
          targetRect.width,
          targetRect.height
        )
      }

      animationFrame = requestAnimationFrame(draw)
    }

    const loadImage = () => {
      const image = new Image()

      image.onload = () => {
        if (destroyed) return
        setCanvasSize()
        buildParticles(image)
        startedAt = performance.now()
        animationFrame = requestAnimationFrame(draw)
      }

      image.onerror = () => {
        /*
          If the image is missing, the rest of the garden still works.
        */
        console.warn(
          "Particle portrait image not found. Put portrait-particle-source.png inside /public."
        )
      }

      image.src = "/portrait-particle-source.png"
    }

    setCanvasSize()

    if ("ResizeObserver" in window) {
      resizeObserver = new ResizeObserver(() => {
        setCanvasSize()
      })
      resizeObserver.observe(wrap)
    } else {
      window.addEventListener("resize", setCanvasSize)
    }

    loadImage()

    return () => {
      destroyed = true
      cancelAnimationFrame(animationFrame)

      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener(
          "resize",
          setCanvasSize
        )
      }
    }
  }, [active])

  return (
    <div
      ref={wrapRef}
      className="absolute inset-0 z-[35] pointer-events-none"
      style={{
        opacity: active ? 1 : 0,
        transition: "opacity 1.4s ease",
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        aria-hidden="true"
      />
    </div>
  )
}


/* =========================================================
   🌸 VIDEO STYLE FLOWER
========================================================= */

function GardenFlower({
  size = 58,
  delay = 0,
}) {
  const petals = [
    { x: 0, y: -19, rotate: 0 },
    { x: 18, y: -8, rotate: 72 },
    { x: 13, y: 12, rotate: 144 },
    { x: -13, y: 12, rotate: 216 },
    { x: -18, y: -8, rotate: 288 },
  ]

  return (
    <motion.div
      className="relative"
      style={{
        width: size,
        height: size,
      }}
      initial={{
        opacity: 0,
        scale: 0,
        y: 12,
      }}
      animate={{
        opacity: 1,
        scale: [0, 1.12, 1],
        y: [12, -2, 0],
      }}
      transition={{
        duration: 1.15,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Glow */}
      <div
        className="absolute rounded-full"
        style={{
          inset: "-35%",
          background:
            "radial-gradient(circle, rgba(36,255,220,.32), transparent 65%)",
          filter: "blur(9px)",
        }}
      />

      {/* Petals */}
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: size * 0.40,
            height: size * 0.58,
            left: `calc(50% + ${petal.x}px - ${size * 0.20}px)`,
            top: `calc(50% + ${petal.y}px - ${size * 0.29}px)`,
            borderRadius: "58% 42% 58% 42%",
            background:
              index % 2 === 0
                ? "linear-gradient(145deg,#b8fff1 0%,#35e6ce 45%,#0aa99d 100%)"
                : "linear-gradient(145deg,#82f9e5 0%,#24d9c4 55%,#078d87 100%)",
            boxShadow:
              "0 0 8px rgba(58,240,215,.75), 0 0 18px rgba(26,210,190,.38)",
            transform: `rotate(${petal.rotate}deg)`,
            transformOrigin: "50% 82%",
          }}
          animate={{
            scale: [1, 1.025, 1],
          }}
          transition={{
            duration: 2.8,
            delay: delay + index * 0.05,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Center */}
      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.23,
          height: size * 0.23,
          left: "38.5%",
          top: "38.5%",
          background:
            "radial-gradient(circle at 35% 30%,#faffd8,#dfff6d 45%,#71b84b 100%)",
          boxShadow:
            "0 0 7px rgba(226,255,120,.95),0 0 16px rgba(151,255,100,.55)",
        }}
      />

      <div
        className="absolute rounded-full"
        style={{
          width: size * 0.065,
          height: size * 0.065,
          left: "47%",
          top: "46%",
          background: "#ffffff",
          boxShadow: "0 0 5px white",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🍃 NATURAL LEAF
========================================================= */

function GardenLeaf({
  side = "left",
  size = 32,
  top = "50%",
  color = "#3fae5b",
  delay = 0,
}) {
  return (
    <motion.div
      className="absolute"
      style={{
        top,
        [side]: "50%",
        width: size,
        height: size * 0.52,
        transformOrigin:
          side === "left"
            ? "right center"
            : "left center",
      }}
      initial={{
        opacity: 0,
        scale: 0,
        rotate:
          side === "left" ? -15 : 15,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate:
          side === "left"
            ? [-15, -10, -15]
            : [15, 10, 15],
      }}
      transition={{
        opacity: {
          duration: 0.65,
          delay,
        },
        scale: {
          duration: 0.8,
          delay,
          ease: "backOut",
        },
        rotate: {
          duration: 4,
          delay: delay + 0.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
    >
      <div
        className="w-full h-full"
        style={{
          borderRadius:
            side === "left"
              ? "100% 0 100% 0"
              : "0 100% 0 100%",
          background:
            `linear-gradient(135deg,#8be67b,${color})`,
          boxShadow:
            `0 0 8px ${color}55`,
        }}
      />

      {/* Leaf vein */}
      <div
        className="absolute top-1/2 left-[10%] right-[10%] h-[1px]"
        style={{
          background:
            "rgba(180,255,170,.45)",
          transform:
            side === "left"
              ? "rotate(-8deg)"
              : "rotate(8deg)",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   🌿 ONE GROWING PLANT
========================================================= */

function FlowerPlant({
  left,
  height = 330,
  flowerSize = 58,
  scale = 1,
  delay = 0,
  bend = 0,
}) {
  return (
    <motion.div
      className="absolute bottom-[-5px]"
      style={{
        left: `${left}%`,
        width: 110 * scale,
        height: height * scale,
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
      {/* Main curved stem */}
      <motion.svg
        width={110 * scale}
        height={height * scale}
        viewBox="0 0 110 330"
        className="absolute inset-0 overflow-visible"
        animate={{
          rotate: [
            bend - 0.7,
            bend + 0.7,
            bend - 0.7,
          ],
        }}
        transition={{
          duration: 5,
          delay: delay + 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M55 330
             C53 290 61 255 52 220
             C45 190 54 155 51 120
             C48 90 55 55 58 22"
          fill="none"
          stroke="#246c42"
          strokeWidth={5 * scale}
          strokeLinecap="round"
        />

        <path
          d="M55 330
             C53 290 61 255 52 220
             C45 190 54 155 51 120
             C48 90 55 55 58 22"
          fill="none"
          stroke="#55c96a"
          strokeOpacity=".75"
          strokeWidth={2.2 * scale}
          strokeLinecap="round"
        />
      </motion.svg>

      {/* Left leaves */}
      <GardenLeaf
        side="left"
        top="22%"
        size={34 * scale}
        color="#39a957"
        delay={delay + 0.55}
      />

      <GardenLeaf
        side="left"
        top="43%"
        size={39 * scale}
        color="#49bd63"
        delay={delay + 0.72}
      />

      <GardenLeaf
        side="left"
        top="66%"
        size={31 * scale}
        color="#29994d"
        delay={delay + 0.9}
      />

      <GardenLeaf
        side="left"
        top="82%"
        size={27 * scale}
        color="#237f43"
        delay={delay + 1.05}
      />

      {/* Right leaves */}
      <GardenLeaf
        side="right"
        top="31%"
        size={36 * scale}
        color="#45b95d"
        delay={delay + 0.65}
      />

      <GardenLeaf
        side="right"
        top="54%"
        size={34 * scale}
        color="#50c767"
        delay={delay + 0.82}
      />

      <GardenLeaf
        side="right"
        top="73%"
        size={28 * scale}
        color="#319f50"
        delay={delay + 1}
      />

      {/* Flower */}
      <div
        className="absolute left-1/2"
        style={{
          top: -8 * scale,
          transform: "translateX(-50%)",
        }}
      >
        <GardenFlower
          size={flowerSize * scale}
          delay={delay + 1.1}
        />
      </div>
    </motion.div>
  )
}


/* =========================================================
   🌱 SMALL GRASS
========================================================= */

function GardenGrass() {
  const grass = [
    [3, 19, 0],
    [7, 25, -8],
    [11, 18, 8],
    [15, 28, -5],
    [20, 21, 5],
    [24, 31, -8],
    [29, 20, 7],
    [34, 27, -5],
    [39, 22, 8],
    [44, 30, -7],
    [49, 20, 5],
    [54, 28, -8],
    [59, 21, 7],
    [64, 30, -6],
    [69, 20, 8],
    [74, 27, -5],
    [79, 21, 7],
    [84, 30, -8],
    [89, 19, 5],
    [94, 26, -7],
    [98, 20, 5],
  ]

  return (
    <div className="absolute bottom-0 left-0 right-0 h-[24%] pointer-events-none">
      {grass.map(
        ([left, height, rotate], index) => (
          <motion.div
            key={index}
            className="absolute bottom-0 origin-bottom"
            style={{
              left: `${left}%`,
              width: 3,
              height: `${height}px`,
              background:
                "linear-gradient(to top,#123d28,#3ca85a)",
              borderRadius:
                "100% 100% 0 0",
              transform:
                `rotate(${rotate}deg)`,
            }}
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            animate={{
              scaleY: 1,
              opacity: 0.9,
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.035,
              ease: "backOut",
            }}
          />
        )
      )}
    </div>
  )
}


/* =========================================================
   🌿 DENSE LOWER LEAVES
========================================================= */

function GroundLeaves() {
  const leaves = [
    [5, 78, 32, -20],
    [10, 84, 38, 18],
    [17, 80, 30, -18],
    [24, 88, 42, 20],
    [31, 82, 34, -15],
    [38, 90, 40, 18],
    [46, 84, 37, -20],
    [53, 89, 42, 18],
    [61, 83, 35, -18],
    [68, 90, 43, 20],
    [76, 82, 34, -18],
    [83, 88, 40, 18],
    [90, 80, 34, -20],
    [96, 87, 40, 17],
  ]

  return (
    <div className="absolute bottom-[3%] left-0 right-0 h-[25%] pointer-events-none">
      {leaves.map(
        ([left, top, size, rotate], index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size * 0.45,
              transform:
                `rotate(${rotate}deg)`,
              transformOrigin:
                rotate < 0
                  ? "right center"
                  : "left center",
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 0.95,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 1 + index * 0.06,
              ease: "backOut",
            }}
          >
            <div
              className="w-full h-full"
              style={{
                borderRadius:
                  rotate < 0
                    ? "100% 0 100% 0"
                    : "0 100% 0 100%",
                background:
                  index % 2 === 0
                    ? "linear-gradient(135deg,#63d96c,#238d4b)"
                    : "linear-gradient(135deg,#46bd5b,#176c3b)",
                boxShadow:
                  "0 0 7px rgba(55,190,90,.25)",
              }}
            />
          </motion.div>
        )
      )}
    </div>
  )
}


/* =========================================================
   ✨ STARS
========================================================= */

function GardenStars() {
  const stars = [
    [4, 9, 2],
    [9, 18, 2],
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
    [38, 35, 2],
    [51, 30, 2],
    [65, 34, 2],
    [78, 29, 2],
    [93, 35, 2],
  ]

  return (
    <div className="absolute inset-0 pointer-events-none">
      {stars.map(
        ([left, top, size], index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-white"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              boxShadow:
                "0 0 6px rgba(255,255,255,.7)",
            }}
            animate={{
              opacity: [
                0.2,
                0.9,
                0.2,
              ],
              scale: [
                0.8,
                1.25,
                0.8,
              ],
            }}
            transition={{
              duration:
                2.3 + (index % 4) * 0.4,
              delay:
                (index % 6) * 0.35,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )
      )}
    </div>
  )
}


/* =========================================================
   ✨ FIREFLIES
========================================================= */

function GardenFireflies() {
  const lights = [
    [6, 38, 3],
    [13, 50, 2],
    [19, 28, 3],
    [27, 44, 2],
    [34, 32, 3],
    [42, 48, 2],
    [49, 29, 3],
    [57, 42, 2],
    [64, 30, 3],
    [72, 47, 2],
    [80, 34, 3],
    [88, 27, 2],
    [95, 45, 3],
    [10, 66, 2],
    [25, 59, 3],
    [39, 67, 2],
    [55, 62, 3],
    [70, 69, 2],
    [85, 61, 3],
  ]

  return (
    <>
      {lights.map(
        ([left, top, size], index) => (
          <motion.div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              background: "#bffff0",
              boxShadow:
                "0 0 10px 3px rgba(75,255,220,.45)",
            }}
            animate={{
              opacity: [
                0.1,
                0.9,
                0.15,
              ],
              scale: [
                0.7,
                1.5,
                0.7,
              ],
              y: [-5, 6, -5],
            }}
            transition={{
              duration:
                2.6 + (index % 4) * 0.35,
              delay:
                (index % 6) * 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )
      )}
    </>
  )
}


/* =========================================================
   🌌 GARDEN PAGE
========================================================= */

function GardenPage() {
  const [growth, setGrowth] = useState(0)
  const [showPortrait, setShowPortrait] =
    useState(false)

  const growGarden = () => {
    setGrowth((previous) =>
      Math.min(previous + 1, 5)
    )
  }

  /*
    7 plants total

    Stage 1 = 2 plants
    Stage 2 = +2 plants
    Stage 3 = +1 plant
    Stage 4 = +1 plant
    Stage 5 = +1 plant
    Total = 7 flowers
  */

  useEffect(() => {
    if (growth < 5) {
      setShowPortrait(false)
      return
    }

    /*
      The final plant takes about 2.25 seconds to fully bloom.
      Wait a little longer so the garden has a proper "finished"
      moment before the particle portrait begins.
    */
    const timer = setTimeout(() => {
      setShowPortrait(true)
    }, 2900)

    return () => clearTimeout(timer)
  }, [growth])

  return (
    <div
      onClick={growGarden}
      className="relative w-full h-[100dvh] overflow-hidden cursor-pointer select-none"
      style={{
        background:
          "radial-gradient(ellipse at 50% 70%,rgba(8,89,78,.22),transparent 45%),linear-gradient(to bottom,#010b12 0%,#02151b 40%,#031b20 70%,#02090d 100%)",
      }}
    >
      {/* =================================================
          ✨ SKY
      ================================================= */}

      <GardenStars />

      <GardenFireflies />

      {/* Very subtle cyan atmosphere */}
      <div
        className="absolute inset-x-0 bottom-0 h-[55%] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%,rgba(8,120,105,.25),transparent 62%)",
        }}
      />

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
          className="text-[23px] leading-tight md:text-4xl font-medium"
          style={{
            color: "#c8fff4",
          }}
          animate={{
            textShadow: [
              "0 0 8px rgba(60,240,210,.20)",
              "0 0 25px rgba(60,240,210,.65)",
              "0 0 8px rgba(60,240,210,.20)",
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
          className="mt-2 text-xs md:text-base"
          style={{
            color:
              "rgba(170,255,238,.68)",
          }}
          animate={{
            opacity: [
              0.4,
              1,
              0.4,
            ],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
          }}
        >
          {growth < 5
            ? `${5 - growth} little touches left… 🌱`
            : showPortrait
              ? "A little light, carrying a beautiful memory ✨"
              : "Your little magical garden is complete ✨🌸"}
        </motion.p>
      </motion.div>

      {/* =================================================
          🌱 PLANTS
      ================================================= */}

      {/* Stage 1 — first two */}
      {growth >= 1 && (
        <>
          <FlowerPlant
            left={50}
            height={390}
            flowerSize={70}
            scale={1.05}
            delay={0}
            bend={0}
          />

          <FlowerPlant
            left={27}
            height={285}
            flowerSize={52}
            scale={0.88}
            delay={0.18}
            bend={-1}
          />
        </>
      )}

      {/* Stage 2 — two more */}
      {growth >= 2 && (
        <>
          <FlowerPlant
            left={73}
            height={305}
            flowerSize={55}
            scale={0.92}
            delay={0}
            bend={1}
          />

          <FlowerPlant
            left={39}
            height={315}
            flowerSize={56}
            scale={0.92}
            delay={0.16}
            bend={-1}
          />
        </>
      )}

      {/* Stage 3 */}
      {growth >= 3 && (
        <FlowerPlant
          left={12}
          height={250}
          flowerSize={47}
          scale={0.78}
          delay={0}
          bend={-1}
        />
      )}

      {/* Stage 4 */}
      {growth >= 4 && (
        <FlowerPlant
          left={88}
          height={270}
          flowerSize={49}
          scale={0.82}
          delay={0}
          bend={1}
        />
      )}

      {/* Stage 5 — final seventh plant */}
      {growth >= 5 && (
        <FlowerPlant
          left={61}
          height={350}
          flowerSize={61}
          scale={0.98}
          delay={0}
          bend={1}
        />
      )}

      {/* =================================================
          🌿 GROUND
      ================================================= */}

      <motion.div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "25%",
          background:
            "radial-gradient(ellipse at 50% 100%,rgba(16,93,54,.62),transparent 67%)",
        }}
        animate={{
          opacity:
            growth >= 1 ? 1 : 0.35,
        }}
      />

      {growth >= 2 && <GardenGrass />}

      {growth >= 3 && <GroundLeaves />}

      {/* =================================================
          ✨ GROUND GLOW
      ================================================= */}

      {growth >= 4 && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[15%] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%,rgba(32,190,120,.20),transparent 65%)",
          }}
        />
      )}

      {/* =================================================
          ✨ PARTICLE PORTRAIT REVEAL
      ================================================= */}

      <ParticlePortrait
        active={showPortrait}
      />

      {/* =================================================
          👆 FIRST MESSAGE
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
              className="text-lg md:text-xl"
              style={{
                color: "#a9fff0",
              }}
              animate={{
                opacity: [
                  0.55,
                  1,
                  0.55,
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Touch anywhere… 🌱
            </motion.p>

            <p
              className="text-xs md:text-sm mt-2"
              style={{
                color:
                  "rgba(180,255,242,.55)",
              }}
            >
              Watch something beautiful grow ✨
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* =================================================
          🌸 FINAL MESSAGE
      ================================================= */}

      <AnimatePresence>
        {growth >= 5 && !showPortrait && (
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
              className="text-base md:text-xl"
              style={{
                color: "#c8fff4",
              }}
              animate={{
                opacity: [
                  0.7,
                  1,
                  0.7,
                ],
                textShadow: [
                  "0 0 5px rgba(50,240,210,.2)",
                  "0 0 18px rgba(50,240,210,.65)",
                  "0 0 5px rgba(50,240,210,.2)",
                ],
              }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
              }}
            >
              And just like that… your little garden bloomed 🌸✨
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* The portrait is deliberately kept visually separate from
          the bottom message/flowers so the reveal feels like a scene
          appearing in the empty upper space. */}
    </div>
  )
}


/* =========================================================
   🏠 HOME
   — EVERYTHING ELSE KEPT THE SAME
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

  const CurrentComponent =
    pages[currentPage]

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
    ease: [
      0.25,
      0.46,
      0.45,
      0.94,
    ],
    duration: 0.6,
  }

  return (
    <div className="min-h-screen">
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
            setShowMusicPlayer={
              setShowMusicPlayer
            }
            musicPlaying={musicPlaying}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
