"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import OpeningPage from "@/components/OpeningPage"
import DiaryPage from "@/components/DiaryPage"
import ApologyPage from "@/components/ApologyPage"
import LetterPage from "@/components/LetterPage"
import HugPage from "@/components/HugPage"
import GiftPage from "@/components/GiftPage"
import MusicPlayer from "@/components/MusicPlayer"
import StarryBackground from "@/components/StarryBackground"


/* =========================================================
   VIDEO STYLE FLOWER
   ========================================================= */

function GardenFlower({
  size = 52,
  color = "#ff79c8",
  delay = 0,
}) {
  const petals = [
    { x: 0, y: -25, r: 0 },
    { x: 21, y: -12, r: 60 },
    { x: 21, y: 12, r: 120 },
    { x: 0, y: 25, r: 180 },
    { x: -21, y: 12, r: 240 },
    { x: -21, y: -12, r: 300 },
  ]

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: 0,
        transform: "translate(-50%, -50%)",
        filter: `drop-shadow(0 0 9px ${color})`,
      }}
      initial={{
        scale: 0,
        opacity: 0,
        rotate: -15,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        rotate: [-2, 2, -2],
      }}
      transition={{
        scale: {
          duration: 0.75,
          delay,
          type: "spring",
          stiffness: 150,
          damping: 12,
        },
        opacity: {
          duration: 0.35,
          delay,
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay + 0.8,
        },
      }}
    >
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            width: size * 0.43,
            height: size * 0.58,
            left: "50%",
            top: "50%",
            marginLeft: -(size * 0.215),
            marginTop: -(size * 0.29),
            borderRadius: "55% 55% 48% 48%",
            background: `linear-gradient(
              145deg,
              rgba(255,255,255,0.72),
              ${color} 42%,
              rgba(190,50,150,0.92)
            )`,
            transform: `
              translate(
                ${petal.x * (size / 52)}px,
                ${petal.y * (size / 52)}px
              )
              rotate(${petal.r}deg)
            `,
            transformOrigin: "50% 75%",
          }}
        />
      ))}

      {/* flower center */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: size * 0.25,
          height: size * 0.25,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, #fff7b0 0%, #ffd83d 48%, #f6a700 100%)",
          boxShadow:
            "0 0 5px rgba(255,235,120,.9), 0 0 12px rgba(255,210,60,.65)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: delay + 0.25,
          duration: 0.35,
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   SMALL CURVED LEAF
   ========================================================= */

function GardenLeaf({
  side = "left",
  top = "55%",
  size = 1,
  delay = 0,
}) {
  const leftSide = side === "left"

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        top,
        [leftSide ? "left" : "right"]: "-5px",
        width: 25 * size,
        height: 13 * size,
        borderRadius: "100% 0 100% 0",
        background:
          "linear-gradient(135deg, #91d46d 0%, #438b55 55%, #275d42 100%)",
        transform: `rotate(${leftSide ? -32 : 212}deg)`,
        transformOrigin: leftSide ? "100% 50%" : "0% 50%",
        filter: "drop-shadow(0 0 3px rgba(94,190,105,.35))",
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
        delay: delay + 0.2,
        duration: 0.45,
        type: "spring",
      }}
    />
  )
}


/* =========================================================
   CURVED STEM + FLOWER
   ========================================================= */

function GardenPlant({
  left,
  height,
  curve = 0,
  flowerSize = 48,
  flowerColor = "#ff78c8",
  delay = 0,
  leafScale = 1,
}) {
  const pathId = `stem-${left}-${height}-${curve}`

  const startX = 50
  const endX = 50 + curve

  return (
    <motion.div
      className="absolute bottom-0"
      style={{
        left: `${left}%`,
        height: `${height}vh`,
        width: 90,
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
        duration: 1.05,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* curved stem */}
      <svg
        className="absolute inset-0 w-full h-full overflow-visible"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={pathId} x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#245f43" />
            <stop offset="55%" stopColor="#4e9b56" />
            <stop offset="100%" stopColor="#79c86a" />
          </linearGradient>
        </defs>

        <motion.path
          d={`
            M ${startX} 100
            C ${42 + curve / 2} 78,
              ${58 + curve / 2} 52,
              ${endX} 5
          `}
          fill="none"
          stroke={`url(#${pathId})`}
          strokeWidth="2.1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 1.15,
            delay,
            ease: "easeOut",
          }}
        />
      </svg>

      {/* left leaf */}
      <GardenLeaf
        side="left"
        top="61%"
        size={leafScale}
        delay={delay + 0.45}
      />

      {/* right leaf */}
      <GardenLeaf
        side="right"
        top="45%"
        size={leafScale * 0.85}
        delay={delay + 0.58}
      />

      {/* small lower leaf */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          bottom: "25%",
          left: "50%",
          width: 20 * leafScale,
          height: 10 * leafScale,
          borderRadius: "100% 0 100% 0",
          background:
            "linear-gradient(135deg,#7ecb6a,#397a4c)",
          transform: "translateX(-5px) rotate(-18deg)",
          transformOrigin: "100% 50%",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: delay + 0.7,
          duration: 0.4,
        }}
      />

      {/* flower */}
      <div
        className="absolute"
        style={{
          left: `${50 + curve}%`,
          top: "-1px",
        }}
      >
        <GardenFlower
          size={flowerSize}
          color={flowerColor}
          delay={delay + 0.95}
        />
      </div>
    </motion.div>
  )
}


/* =========================================================
   LITTLE GRASS
   ========================================================= */

function GardenGrass({ left, height, rotate, delay }) {
  return (
    <motion.div
      className="absolute bottom-0 origin-bottom pointer-events-none"
      style={{
        left: `${left}%`,
        width: 2,
        height,
        background:
          "linear-gradient(to top, #244f3a, #6eaf61)",
        borderRadius: "100% 100% 0 0",
        transform: `rotate(${rotate}deg)`,
      }}
      initial={{
        scaleY: 0,
      }}
      animate={{
        scaleY: 1,
      }}
      transition={{
        duration: 0.65,
        delay,
      }}
    />
  )
}


/* =========================================================
   FLOATING HEART
   ========================================================= */

function FloatingHeart({
  left,
  top,
  size,
  delay,
  duration,
}) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
      }}
      initial={{
        opacity: 0,
        scale: 0,
      }}
      animate={{
        opacity: [0, 0.8, 0.55, 0],
        scale: [0.5, 1, 0.9, 0.7],
        y: [10, -8, -20, -35],
        rotate: [-8, 8, -4, 5],
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div
        className="relative w-full h-full"
        style={{
          transform: "rotate(-45deg)",
          background:
            "linear-gradient(135deg,#f68abf,#bd4d91)",
          borderRadius: "50% 50% 10% 50%",
          filter: "drop-shadow(0 0 6px rgba(240,105,180,.45))",
        }}
      />
    </motion.div>
  )
}


/* =========================================================
   GREEN RINGS
   ========================================================= */

function FloatingRing({
  left,
  top,
  size,
  delay,
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${left}%`,
        top: `${top}%`,
        width: size,
        height: size,
        border: "1.5px solid rgba(105,190,120,.5)",
        boxShadow: "0 0 8px rgba(85,180,110,.18)",
      }}
      initial={{
        opacity: 0,
        scale: 0.4,
      }}
      animate={{
        opacity: [0, 0.65, 0.2, 0],
        scale: [0.5, 1, 1.15, 1.3],
        y: [0, -8, -15, -25],
      }}
      transition={{
        delay,
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}


/* =========================================================
   STARS
   ========================================================= */

function GardenStars() {
  const stars = [
    [7, 12, 2],
    [16, 25, 1],
    [26, 9, 1.5],
    [35, 19, 1],
    [45, 7, 2],
    [57, 17, 1],
    [68, 10, 1.5],
    [77, 26, 1],
    [87, 14, 2],
    [94, 34, 1],
    [10, 43, 1],
    [22, 37, 1.5],
    [72, 41, 1],
    [83, 48, 1.5],
    [92, 57, 1],
  ]

  return (
    <>
      {stars.map(([left, top, size], index) => (
        <motion.span
          key={index}
          className="absolute rounded-full bg-white pointer-events-none"
          style={{
            left: `${left}%`,
            top: `${top}%`,
            width: size,
            height: size,
            boxShadow: "0 0 5px rgba(255,255,255,.8)",
          }}
          animate={{
            opacity: [0.25, 0.9, 0.25],
            scale: [0.8, 1.25, 0.8],
          }}
          transition={{
            duration: 2 + (index % 3),
            repeat: Infinity,
            delay: index * 0.17,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  )
}


/* =========================================================
   MOON
   ========================================================= */

function GardenMoon() {
  return (
    <motion.div
      className="absolute right-[8%] top-[8%] pointer-events-none"
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 1.2,
      }}
    >
      <div
        className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 32%, #fffef0, #eee7d3 58%, #c8bfd1)",
          boxShadow:
            "0 0 18px rgba(240,235,220,.35), 0 0 45px rgba(170,135,220,.12)",
        }}
      >
        <div
          className="absolute rounded-full bg-[#171126]"
          style={{
            width: 54,
            height: 54,
            left: 13,
            top: -5,
          }}
        />
      </div>
    </motion.div>
  )
}


/* =========================================================
   THE GARDEN PAGE
   ONE TOUCH = FULL BLOOM
   ========================================================= */

function GardenPage() {
  const [bloomed, setBloomed] = useState(false)

  const bloomGarden = () => {
    if (!bloomed) {
      setBloomed(true)
    }
  }

  return (
    <main
      onPointerDown={bloomGarden}
      className="relative h-[100dvh] w-full overflow-hidden select-none cursor-pointer"
      style={{
        background:
          "radial-gradient(circle at 50% 78%, rgba(126,53,151,.32) 0%, rgba(56,27,83,.22) 28%, rgba(10,7,22,1) 72%)",
      }}
    >
      {/* =================================================
          NIGHT SKY
          ================================================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#10091d] via-[#17102c] to-[#090711]" />

      <GardenStars />

      <GardenMoon />

      {/* subtle purple glow behind garden */}
      <motion.div
        className="absolute left-1/2 bottom-[13%] -translate-x-1/2 pointer-events-none"
        style={{
          width: "75vw",
          height: "45vh",
          background:
            "radial-gradient(ellipse, rgba(170,74,190,.18), rgba(94,40,125,.08) 42%, transparent 72%)",
          filter: "blur(10px)",
        }}
        animate={{
          opacity: bloomed ? 1 : 0.35,
          scale: bloomed ? 1.08 : 0.9,
        }}
        transition={{
          duration: 1.5,
        }}
      />

      {/* =================================================
          HEADER
          ================================================= */}

      <div className="absolute top-7 left-0 right-0 z-30 text-center pointer-events-none px-4">
        <motion.p
          className="text-[10px] sm:text-xs tracking-[0.45em] text-white/45 uppercase"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A LITTLE GARDEN
        </motion.p>

        <motion.h1
          className="mt-3 text-base sm:text-lg text-white/85 font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          Tap anywhere and let the garden bloom 🌱✨
        </motion.h1>
      </div>


      {/* =================================================
          INITIAL TOUCH MESSAGE
          ================================================= */}

      <AnimatePresence>
        {!bloomed && (
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.15,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="mt-24 text-center">
              <motion.div
                className="text-4xl mb-4"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🌱
              </motion.div>

              <p className="text-white/40 text-xs tracking-[0.2em]">
                ONE LITTLE TOUCH
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =================================================
          DECORATIVE HEARTS + RINGS
          ================================================= */}

      <AnimatePresence>
        {bloomed && (
          <>
            <FloatingHeart
              left={17}
              top={53}
              size={10}
              delay={0.5}
              duration={4.5}
            />

            <FloatingHeart
              left={80}
              top={48}
              size={12}
              delay={1.1}
              duration={5}
            />

            <FloatingHeart
              left={28}
              top={68}
              size={8}
              delay={1.8}
              duration={4}
            />

            <FloatingHeart
              left={72}
              top={63}
              size={9}
              delay={2.2}
              duration={4.7}
            />

            <FloatingRing
              left={13}
              top={61}
              size={27}
              delay={0.4}
            />

            <FloatingRing
              left={76}
              top={57}
              size={21}
              delay={1.3}
            />

            <FloatingRing
              left={24}
              top={48}
              size={15}
              delay={2}
            />

            <FloatingRing
              left={67}
              top={45}
              size={18}
              delay={2.5}
            />
          </>
        )}
      </AnimatePresence>


      {/* =================================================
          FLOWER GARDEN
          ================================================= */}

      <div className="absolute inset-x-0 bottom-0 h-[62vh] pointer-events-none">

        <AnimatePresence>
          {bloomed && (
            <>
              {/* OUTER SMALL FLOWERS */}

              <GardenPlant
                left={23}
                height={24}
                curve={-6}
                flowerSize={35}
                flowerColor="#e96fb8"
                delay={0.15}
                leafScale={0.72}
              />

              <GardenPlant
                left={77}
                height={25}
                curve={5}
                flowerSize={36}
                flowerColor="#8f9ce9"
                delay={0.28}
                leafScale={0.72}
              />


              {/* SECOND LAYER */}

              <GardenPlant
                left={34}
                height={34}
                curve={-5}
                flowerSize={44}
                flowerColor="#ff7fc9"
                delay={0.4}
                leafScale={0.88}
              />

              <GardenPlant
                left={66}
                height={35}
                curve={5}
                flowerSize={45}
                flowerColor="#f47abf"
                delay={0.52}
                leafScale={0.88}
              />


              {/* MAIN CENTRAL FLOWERS */}

              <GardenPlant
                left={43}
                height={43}
                curve={-3}
                flowerSize={51}
                flowerColor="#ff81ca"
                delay={0.62}
                leafScale={1}
              />

              <GardenPlant
                left={57}
                height={45}
                curve={3}
                flowerSize={52}
                flowerColor="#ff73c4"
                delay={0.72}
                leafScale={1}
              />


              {/* CENTER / HERO FLOWER */}

              <GardenPlant
                left={50}
                height={51}
                curve={0}
                flowerSize={57}
                flowerColor="#ff86cf"
                delay={0.82}
                leafScale={1.05}
              />


              {/* =================================================
                  SMALL GRASS — ONLY A LITTLE, NOT HUGE
                  ================================================= */}

              <GardenGrass
                left={19}
                height="18px"
                rotate={-15}
                delay={0.7}
              />

              <GardenGrass
                left={27}
                height="24px"
                rotate={-7}
                delay={0.8}
              />

              <GardenGrass
                left={73}
                height="23px"
                rotate={8}
                delay={0.85}
              />

              <GardenGrass
                left={81}
                height="17px"
                rotate={15}
                delay={0.95}
              />

              <GardenGrass
                left={38}
                height="16px"
                rotate={-5}
                delay={1}
              />

              <GardenGrass
                left={62}
                height="18px"
                rotate={6}
                delay={1.05}
              />


              {/* =================================================
                  GROUND GLOW
                  ================================================= */}

              <motion.div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  width: "85vw",
                  height: 90,
                  background:
                    "radial-gradient(ellipse, rgba(101,173,105,.20), rgba(82,49,104,.08), transparent 70%)",
                  filter: "blur(8px)",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.2,
                  duration: 1,
                }}
              />
            </>
          )}
        </AnimatePresence>
      </div>


      {/* =================================================
          CENTER QUOTE
          ================================================= */}

      <AnimatePresence>
        {bloomed && (
          <motion.div
            className="absolute z-20 left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 w-[82%] text-center pointer-events-none"
            initial={{
              opacity: 0,
              y: 15,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              delay: 1.65,
              duration: 1,
              ease: "easeOut",
            }}
          >
            <p
              className="text-white/75 text-[17px] sm:text-xl leading-relaxed"
              style={{
                fontFamily:
                  '"Brush Script MT", "Segoe Print", cursive',
                textShadow:
                  "0 0 12px rgba(255,255,255,.15)",
              }}
            >
              Every flower here
              <br />
              is a memory worth cherishing.
            </p>
          </motion.div>
        )}
      </AnimatePresence>


      {/* =================================================
          LITTLE FIREFLIES
          ================================================= */}

      <AnimatePresence>
        {bloomed && (
          <>
            {[
              [31, 56],
              [69, 53],
              [20, 72],
              [79, 69],
              [42, 63],
              [61, 59],
              [34, 75],
              [67, 73],
            ].map(([left, top], index) => (
              <motion.span
                key={index}
                className="absolute z-10 rounded-full bg-yellow-100 pointer-events-none"
                style={{
                  left: `${left}%`,
                  top: `${top}%`,
                  width: 3,
                  height: 3,
                  boxShadow:
                    "0 0 7px rgba(255,230,125,.9)",
                }}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: [0, 0.9, 0.2, 0.8, 0],
                  y: [5, -7, -15, -22],
                  x: [0, 3, -3, 2],
                }}
                transition={{
                  delay: 1.3 + index * 0.2,
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>


      {/* =================================================
          FOOTER
          ================================================= */}

      <AnimatePresence>
        {bloomed && (
          <motion.p
            className="absolute bottom-5 left-0 right-0 z-30 text-center text-[10px] tracking-[0.12em] text-white/30 pointer-events-none"
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 2.1,
              duration: 0.8,
            }}
          >
            A little garden, made with a little touch. 🌸
          </motion.p>
        )}
      </AnimatePresence>
    </main>
  )
}


/* =========================================================
   MAIN WEBSITE
   ========================================================= */

export default function Home() {
  const [currentPage, setCurrentPage] = useState("opening")
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  const pages = {
    opening: OpeningPage,
    diary: DiaryPage,
    apology: ApologyPage,
    letter: LetterPage,
    hug: HugPage,
    gift: GiftPage,
    garden: GardenPage,
  }

  const CurrentPage = pages[currentPage]

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      {currentPage !== "garden" && <StarryBackground />}

      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
          className="min-h-screen"
        >
          <CurrentPage
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </motion.div>
      </AnimatePresence>

      {/* Music stays available on all normal pages */}
      {currentPage !== "garden" && (
        <MusicPlayer
          isPlaying={isMusicPlaying}
          setIsPlaying={setIsMusicPlaying}
        />
      )}
    </main>
  )
}
