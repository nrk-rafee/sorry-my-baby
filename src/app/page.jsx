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
   Put portrait-particle-source.png inside /public
========================================================= */

function ParticlePortrait({ active }) {
  const canvasRef = useRef(null)
  const boxRef = useRef(null)

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    const box = boxRef.current

    if (!canvas || !box) return

    const ctx = canvas.getContext("2d", {
      alpha: true,
    })

    if (!ctx) return

    let raf = 0
    let dead = false
    let particles = []
    let motes = []
    let start = 0

    const clamp = (n, a = 0, b = 1) =>
      Math.max(a, Math.min(b, n))

    const rand = (a, b) =>
      Math.random() * (b - a) + a

    const ease = (t) =>
      1 - Math.pow(1 - clamp(t), 3)


    /* Canvas size */

    const sizeCanvas = () => {
      const r = box.getBoundingClientRect()

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      )

      canvas.width =
        Math.floor(r.width * dpr)

      canvas.height =
        Math.floor(r.height * dpr)

      canvas.style.width =
        `${r.width}px`

      canvas.style.height =
        `${r.height}px`

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      )
    }


    /* Portrait position */

    const targetBox = () => {
      const r = box.getBoundingClientRect()

      const w =
        r.width < 600
          ? r.width * 0.84
          : Math.min(
              r.width * 0.62,
              620
            )

      const h =
        w * 864 / 1115

      return {
        x: (r.width - w) / 2,
        y: Math.max(
          52,
          r.height * 0.12
        ),
        w,
        h,
      }
    }


    /* Build particles from image */

    const build = (img) => {
      const sw = 420

      const sh =
        Math.round(
          sw * 864 / 1115
        )

      const off =
        document.createElement(
          "canvas"
        )

      off.width = sw
      off.height = sh

      const oc =
        off.getContext(
          "2d",
          {
            willReadFrequently: true,
          }
        )

      if (!oc) return

      oc.clearRect(
        0,
        0,
        sw,
        sh
      )

      /*
        Your supplied PNG is used here.
        Transparent background means only
        the portrait becomes particles.
      */

      oc.drawImage(
        img,
        0,
        0,
        sw,
        sh
      )

      const data =
        oc.getImageData(
          0,
          0,
          sw,
          sh
        ).data

      const candidates = []


      /* Read visible pixels */

      for (
        let y = 0;
        y < sh;
        y += 2
      ) {
        for (
          let x = 0;
          x < sw;
          x += 2
        ) {
          const i =
            (y * sw + x) * 4

          if (
            data[i + 3] < 45
          ) continue

          candidates.push({
            x: x / sw,
            y: y / sh,
            r: data[i],
            g: data[i + 1],
            b: data[i + 2],
            a: data[i + 3] / 255,
          })
        }
      }


      /* Shuffle particles */

      for (
        let i = candidates.length - 1;
        i > 0;
        i--
      ) {
        const j =
          Math.floor(
            Math.random() *
              (i + 1)
          )

        ;[
          candidates[i],
          candidates[j],
        ] = [
          candidates[j],
          candidates[i],
        ]
      }


      const t = targetBox()

      const cx =
        t.x + t.w / 2

      const cy =
        t.y + t.h / 2


      const chosen =
        candidates.slice(
          0,
          Math.min(
            3200,
            candidates.length
          )
        )


      /* Create flying particles */

      particles =
        chosen.map((p) => {
          const angle =
            rand(
              0,
              Math.PI * 2
            )

          const dist =
            rand(
              Math.min(
                t.w,
                t.h
              ) * 0.65,
              Math.max(
                t.w,
                t.h
              ) * 1.25
            )

          return {
            x:
              cx +
              Math.cos(angle) *
                dist +
              rand(-100, 100),

            y:
              cy +
              Math.sin(angle) *
                dist +
              rand(-130, 130),

            tx:
              t.x +
              p.x * t.w,

            ty:
              t.y +
              p.y * t.h,

            r: p.r,
            g: p.g,
            b: p.b,
            a: p.a,

            size:
              rand(
                0.55,
                1.55
              ),

            delay:
              rand(
                0,
                900
              ),

            phase:
              rand(
                0,
                Math.PI * 2
              ),

            depth:
              rand(
                0.25,
                1
              ),
          }
        })


      /* Extra floating light */

      motes =
        Array.from(
          {
            length: 260,
          },
          () => ({
            x: rand(
              t.x - 100,
              t.x + t.w + 100
            ),

            y: rand(
              t.y - 120,
              t.y + t.h + 130
            ),

            vx: rand(
              -0.18,
              0.18
            ),

            vy: rand(
              -0.4,
              0.12
            ),

            size: rand(
              0.35,
              1.3
            ),

            alpha: rand(
              0.08,
              0.42
            ),

            phase: rand(
              0,
              6.28
            ),
          })
        )
    }


    /* =====================================================
       ANIMATION
    ===================================================== */

    const draw = (now) => {
      if (dead) return

      const r =
        box.getBoundingClientRect()

      ctx.clearRect(
        0,
        0,
        r.width,
        r.height
      )

      if (!start) {
        start = now
      }

      const elapsed =
        now - start

      const t =
        targetBox()

      const cx =
        t.x + t.w / 2

      const cy =
        t.y + t.h / 2


      /*
        Main reveal duration:
        around 5-6 seconds
      */

      const reveal =
        clamp(
          (elapsed - 550) / 5700
        )

      const e =
        ease(reveal)


      ctx.globalCompositeOperation =
        "lighter"


      /* Floating aerial lights */

      const moteLife =
        clamp(
          1 -
            Math.max(
              0,
              elapsed - 800
            ) / 6500
        )


      for (const m of motes) {
        m.x += m.vx
        m.y += m.vy

        const pulse =
          0.55 +
          Math.sin(
            now * 0.002 +
              m.phase
          ) *
            0.45

        ctx.beginPath()

        ctx.fillStyle =
          `rgba(155,255,236,${
            m.alpha *
            pulse *
            moteLife
          })`

        ctx.arc(
          m.x,
          m.y,
          m.size,
          0,
          Math.PI * 2
        )

        ctx.fill()
      }


      /* Portrait particles */

      for (const p of particles) {
        const local =
          clamp(
            (elapsed -
              550 -
              p.delay) /
              5200
          )

        const q =
          ease(local)


        /*
          Drone-style movement.
          Particles fly from outside
          and slowly form the portrait.
        */

        const zoom =
          (1 - q) *
          0.16 *
          p.depth


        const x =
          cx +
          (
            p.x +
            (p.tx - p.x) * q -
            cx
          ) *
            (1 + zoom)


        const y =
          cy +
          (
            p.y +
            (p.ty - p.y) * q -
            cy
          ) *
            (1 + zoom)


        const floatX =
          q *
          Math.sin(
            now * 0.0012 +
              p.phase
          ) *
          0.7


        const floatY =
          q *
          Math.cos(
            now * 0.001 +
              p.phase
          ) *
          0.45


        const twinkle =
          0.78 +
          Math.sin(
            now * 0.003 +
              p.phase
          ) *
            0.22


        const alpha =
          p.a *
          twinkle *
          (0.12 + q * 0.88)


        const radius =
          Math.max(
            0.4,
            p.size *
              (1.7 - q * 0.55)
          )


        if (
          alpha < 0.01
        ) continue


        ctx.beginPath()

        ctx.fillStyle =
          `rgba(${p.r},${p.g},${p.b},${alpha})`

        ctx.shadowBlur =
          q > 0.72
            ? 5
            : 9

        ctx.shadowColor =
          `rgba(${p.r},${p.g},${p.b},${alpha * 0.8})`

        ctx.arc(
          x + floatX,
          y + floatY,
          radius,
          0,
          Math.PI * 2
        )

        ctx.fill()
      }


      ctx.shadowBlur = 0

      ctx.globalCompositeOperation =
        "source-over"


      /* Final light sweep */

      if (reveal > 0.75) {
        const s =
          (
            (elapsed - 4500) %
            5200
          ) / 5200

        const sx =
          t.x -
          t.w * 0.25 +
          s * t.w * 1.5

        const g =
          ctx.createLinearGradient(
            sx - 55,
            t.y,
            sx + 55,
            t.y
          )

        g.addColorStop(
          0,
          "rgba(255,255,255,0)"
        )

        g.addColorStop(
          0.5,
          "rgba(210,255,246,.10)"
        )

        g.addColorStop(
          1,
          "rgba(255,255,255,0)"
        )

        ctx.fillStyle = g

        ctx.fillRect(
          t.x,
          t.y,
          t.w,
          t.h
        )
      }


      raf =
        requestAnimationFrame(
          draw
        )
    }


    /* Load portrait */

    const img =
      new Image()

    img.onload = () => {
      if (dead) return

      sizeCanvas()

      build(img)

      start =
        performance.now()

      raf =
        requestAnimationFrame(
          draw
        )
    }

    img.onerror = () => {
      console.warn(
        "Missing /public/portrait-particle-source.png"
      )
    }

    img.src =
      "/portrait-particle-source.png"


    sizeCanvas()

    window.addEventListener(
      "resize",
      sizeCanvas
    )


    return () => {
      dead = true

      cancelAnimationFrame(
        raf
      )

      window.removeEventListener(
        "resize",
        sizeCanvas
      )
    }

  }, [active])


  return (
    <div
      ref={boxRef}
      className="absolute inset-0 z-[35] pointer-events-none"
      style={{
        opacity: active ? 1 : 0,
      }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  )
}


/* =========================================================
   🌸 FLOWER
========================================================= */

function GardenFlower({
  size = 58,
  delay = 0,
}) {
  const petals = [
    [0, -19, 0],
    [18, -8, 72],
    [13, 12, 144],
    [-13, 12, 216],
    [-18, -8, 288],
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
      }}
    >

      <div
        className="absolute rounded-full"
        style={{
          inset: "-35%",
          background:
            "radial-gradient(circle,rgba(36,255,220,.32),transparent 65%)",
          filter: "blur(9px)",
        }}
      />

      {petals.map(
        ([x, y, rotate], i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width:
                size * 0.4,

              height:
                size * 0.58,

              left:
                `calc(50% + ${x}px - ${size * 0.2}px)`,

              top:
                `calc(50% + ${y}px - ${size * 0.29}px)`,

              borderRadius:
                "58% 42% 58% 42%",

              background:
                i % 2 === 0
                  ? "linear-gradient(145deg,#b8fff1,#35e6ce,#0aa99d)"
                  : "linear-gradient(145deg,#82f9e5,#24d9c4,#078d87)",

              boxShadow:
                "0 0 8px rgba(58,240,215,.75),0 0 18px rgba(26,210,190,.38)",

              transform:
                `rotate(${rotate}deg)`,

              transformOrigin:
                "50% 82%",
            }}

            animate={{
              scale: [
                1,
                1.025,
                1,
              ],
            }}

            transition={{
              duration: 2.8,
              delay:
                delay + i * 0.05,
              repeat: Infinity,
            }}
          />
        )
      )}

      <div
        className="absolute rounded-full"
        style={{
          width:
            size * 0.23,

          height:
            size * 0.23,

          left: "38.5%",
          top: "38.5%",

          background:
            "radial-gradient(circle at 35% 30%,#faffd8,#dfff6d 45%,#71b84b)",

          boxShadow:
            "0 0 7px rgba(226,255,120,.95),0 0 16px rgba(151,255,100,.55)",
        }}
      />

    </motion.div>
  )
}


/* =========================================================
   🍃 LEAF
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
      }}

      initial={{
        opacity: 0,
        scale: 0,
        rotate:
          side === "left"
            ? -15
            : 15,
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
        duration: 4,
        delay,
        repeat: Infinity,
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

    </motion.div>
  )
}


/* =========================================================
   🌿 PLANT
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
        transform:
          "translateX(-50%)",
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
      }}
    >

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
          repeat: Infinity,
        }}
      >

        <path
          d="
            M55 330
            C53 290 61 255 52 220
            C45 190 54 155 51 120
            C48 90 55 55 58 22
          "
          fill="none"
          stroke="#246c42"
          strokeWidth={5 * scale}
          strokeLinecap="round"
        />

        <path
          d="
            M55 330
            C53 290 61 255 52 220
            C45 190 54 155 51 120
            C48 90 55 55 58 22
          "
          fill="none"
          stroke="#55c96a"
          strokeOpacity=".75"
          strokeWidth={2.2 * scale}
          strokeLinecap="round"
        />

      </motion.svg>


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


      <div
        className="absolute left-1/2"
        style={{
          top: -8 * scale,
          transform:
            "translateX(-50%)",
        }}
      >

        <GardenFlower
          size={
            flowerSize * scale
          }
          delay={
            delay + 1.1
          }
        />

      </div>

    </motion.div>
  )
}


/* =========================================================
   🌱 GRASS
========================================================= */

function GardenGrass() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-[24%] pointer-events-none">

      {Array.from(
        { length: 21 },
        (_, i) => (
          <motion.div
            key={i}
            className="absolute bottom-0 origin-bottom"

            style={{
              left:
                `${3 + i * 4.75}%`,

              width: 3,

              height:
                `${18 + (i % 5) * 3}px`,

              background:
                "linear-gradient(to top,#123d28,#3ca85a)",

              borderRadius:
                "100% 100% 0 0",

              transform:
                `rotate(${i % 2 ? -7 : 7}deg)`,
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
              delay: i * 0.035,
            }}
          />
        )
      )}

    </div>
  )
}


/* =========================================================
   🌿 GROUND LEAVES
========================================================= */

function GroundLeaves() {
  return (
    <div className="absolute bottom-[3%] left-0 right-0 h-[25%] pointer-events-none">

      {Array.from(
        { length: 14 },
        (_, i) => (
          <div
            key={i}
            className="absolute"

            style={{
              left:
                `${5 + i * 7}%`,

              top:
                `${78 + (i % 3) * 4}%`,

              width:
                32 + (i % 4) * 3,

              height:
                (32 + (i % 4) * 3) * 0.45,

              transform:
                `rotate(${i % 2 ? -18 : 18}deg)`,
            }}
          >

            <div
              className="w-full h-full"
              style={{
                borderRadius:
                  i % 2
                    ? "100% 0 100% 0"
                    : "0 100% 0 100%",

                background:
                  i % 2
                    ? "linear-gradient(135deg,#46bd5b,#176c3b)"
                    : "linear-gradient(135deg,#63d96c,#238d4b)",
              }}
            />

          </div>
        )
      )}

    </div>
  )
}


/* =========================================================
   ✨ STARS
========================================================= */

function GardenStars() {
  return (
    <div className="absolute inset-0 pointer-events-none">

      {Array.from(
        { length: 28 },
        (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"

            style={{
              left:
                `${(i * 17) % 97}%`,

              top:
                `${5 + (i * 11) % 34}%`,

              width:
                i % 5 === 0
                  ? 3
                  : 2,

              height:
                i % 5 === 0
                  ? 3
                  : 2,

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
                2.3 +
                (i % 4) * 0.4,

              delay:
                (i % 6) * 0.35,

              repeat: Infinity,
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
  return (
    <>
      {Array.from(
        { length: 20 },
        (_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"

            style={{
              left:
                `${5 + (i * 13) % 92}%`,

              top:
                `${27 + (i * 17) % 43}%`,

              width:
                i % 3
                  ? 2
                  : 3,

              height:
                i % 3
                  ? 2
                  : 3,

              background:
                "#bffff0",

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

              y: [
                -5,
                6,
                -5,
              ],
            }}

            transition={{
              duration:
                2.6 +
                (i % 4) * 0.35,

              delay:
                (i % 6) * 0.4,

              repeat: Infinity,
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
  const [growth, setGrowth] =
    useState(0)

  const [showPortrait, setShowPortrait] =
    useState(false)


  const grow = () => {
    setGrowth((value) => {
      const next =
        Math.min(
          value + 1,
          5
        )

      if (next === 5) {
        setTimeout(
          () => setShowPortrait(true),
          1800
        )
      }

      return next
    })
  }


  return (
    <div
      onClick={grow}
      className="
        relative
        w-full
        h-[100dvh]
        overflow-hidden
        cursor-pointer
        select-none
      "

      style={{
        background:
          "radial-gradient(ellipse at 50% 70%,rgba(8,89,78,.22),transparent 45%),linear-gradient(to bottom,#010b12,#02151b 40%,#031b20 70%,#02090d)",
      }}
    >

      <GardenStars />

      <GardenFireflies />


      <div
        className="
          absolute
          inset-x-0
          bottom-0
          h-[55%]
          pointer-events-none
        "

        style={{
          background:
            "radial-gradient(ellipse at 50% 100%,rgba(8,120,105,.25),transparent 62%)",
        }}
      />


      {/* HEADER */}

      <motion.div
        className="
          absolute
          top-6
          md:top-9
          left-0
          right-0
          z-50
          text-center
          px-5
          pointer-events-none
        "

        initial={{
          opacity: 0,
          y: -20,
        }}

        animate={{
          opacity:
            showPortrait
              ? 0
              : 1,

          y: 0,
        }}

        transition={{
          duration: 1.2,
        }}
      >

        <motion.h1
          className="
            text-[23px]
            leading-tight
            md:text-4xl
            font-medium
          "

          style={{
            color:
              "#c8fff4",
          }}

          animate={{
            textShadow: [
              "0 0 8px rgba(60,240,210,.2)",
              "0 0 25px rgba(60,240,210,.65)",
              "0 0 8px rgba(60,240,210,.2)",
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


        <p
          className="
            mt-2
            text-xs
            md:text-base
          "

          style={{
            color:
              "rgba(170,255,238,.68)",
          }}
        >
          {growth < 5
            ? `${5 - growth} little touches left… 🌱`
            : "Your little magical garden is complete ✨🌸"}
        </p>

      </motion.div>


      {/* FLOWERS */}

      {growth >= 1 && (
        <>
          <FlowerPlant
            left={50}
            height={390}
            flowerSize={70}
            scale={1.05}
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


      {growth >= 2 && (
        <>
          <FlowerPlant
            left={73}
            height={305}
            flowerSize={55}
            scale={0.92}
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


      {growth >= 3 && (
        <FlowerPlant
          left={12}
          height={250}
          flowerSize={47}
          scale={0.78}
          bend={-1}
        />
      )}


      {growth >= 4 && (
        <FlowerPlant
          left={88}
          height={270}
          flowerSize={49}
          scale={0.82}
          bend={1}
        />
      )}


      {growth >= 5 && (
        <FlowerPlant
          left={61}
          height={350}
          flowerSize={61}
          scale={0.98}
          bend={1}
        />
      )}


      {/* GROUND */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          pointer-events-none
        "

        style={{
          height: "25%",

          background:
            "radial-gradient(ellipse at 50% 100%,rgba(16,93,54,.62),transparent 67%)",

          opacity:
            growth >= 1
              ? 1
              : 0.35,
        }}
      />


      {growth >= 2 &&
        <GardenGrass />
      }

      {growth >= 3 &&
        <GroundLeaves />
      }


      {/* FIRST MESSAGE */}

      <AnimatePresence>

        {growth === 0 && (
          <motion.div
            className="
              absolute
              bottom-8
              left-0
              right-0
              z-50
              text-center
              pointer-events-none
              px-5
            "

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

            <p
              className="
                text-lg
                md:text-xl
              "

              style={{
                color:
                  "#a9fff0",
              }}
            >
              Touch anywhere… 🌱
            </p>


            <p
              className="
                text-xs
                md:text-sm
                mt-2
              "

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


      {/* FINAL MESSAGE */}

      <AnimatePresence>

        {growth >= 5 &&
          !showPortrait && (
            <motion.div
              className="
                absolute
                bottom-7
                left-0
                right-0
                z-50
                text-center
                pointer-events-none
                px-5
              "

              initial={{
                opacity: 0,
                y: 25,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}
            >

              <p
                className="
                  text-base
                  md:text-xl
                "

                style={{
                  color:
                    "#c8fff4",
                }}
              >
                And just like that…
                your little garden bloomed 🌸✨
              </p>

            </motion.div>
          )}

      </AnimatePresence>


      {/* =====================================================
          🛸 DRONE / PARTICLE PORTRAIT
      ===================================================== */}

      {showPortrait && (
        <>
          <div
            className="
              absolute
              inset-0
              z-[30]
              pointer-events-none
            "

            style={{
              background:
                "radial-gradient(circle at 50% 50%,rgba(0,40,40,.28),transparent 60%)",
            }}
          />


          <ParticlePortrait
            active={
              showPortrait
            }
          />


          <motion.div
            className="
              absolute
              bottom-7
              left-0
              right-0
              z-[45]
              text-center
              pointer-events-none
              px-5
            "

            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              delay: 5.7,
              duration: 1,
            }}
          >

            <p
              className="
                text-sm
                md:text-lg
              "

              style={{
                color:
                  "#c8fff4",

                textShadow:
                  "0 0 14px rgba(60,240,210,.55)",
              }}
            >
              Some memories deserve to shine… ✨
            </p>

          </motion.div>
        </>
      )}

    </div>
  )
}


/* =========================================================
   🏠 HOME
   Existing pages remain connected
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


  const variants = {
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


  return (
    <div className="min-h-screen">

      {currentPage !== "garden" && (
        <StarryBackground />
      )}


      {showMusicPlayer && (
        <MusicPlayer
          musicPlaying={
            musicPlaying
          }

          setMusicPlaying={
            setMusicPlaying
          }
        />
      )}


      <AnimatePresence
        mode="wait"
      >

        <motion.div
          key={currentPage}

          initial="initial"

          animate="in"

          exit="out"

          variants={variants}

          transition={{
            type: "tween",
            ease: [
              0.25,
              0.46,
              0.45,
              0.94,
            ],
            duration: 0.6,
          }}

          className="
            relative
            z-10
          "
        >

          <CurrentComponent
            setCurrentPage={
              setCurrentPage
            }

            setMusicPlaying={
              setMusicPlaying
            }

            setShowMusicPlayer={
              setShowMusicPlayer
            }

            musicPlaying={
              musicPlaying
            }
          />

        </motion.div>

      </AnimatePresence>

    </div>
  )
}
