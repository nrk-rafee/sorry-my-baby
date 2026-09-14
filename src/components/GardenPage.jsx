"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./flower-animation.css";

/* =====================================================
   STARS
===================================================== */

const stars = Array.from({ length: 75 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 72}%`,
  size: Math.random() > 0.9 ? 3 : Math.random() > 0.6 ? 2 : 1,
  delay: `${Math.random() * 4}s`,
}));

/* =====================================================
   FLOWERS
===================================================== */

const flowers = [
  {
    left: "37%",
    scale: "1.08",
    delay: "0.25s",
    className: "flower--1",
  },
  {
    left: "50%",
    scale: "1.2",
    delay: "0s",
    className: "flower--2",
  },
  {
    left: "63%",
    scale: "1.08",
    delay: "0.45s",
    className: "flower--3",
  },
  {
    left: "73%",
    scale: "0.9",
    delay: "0.7s",
    className: "flower--4",
  },
];

/* =====================================================
   FLOWER
===================================================== */

function Flower({ className }) {
  return (
    <div className={`flower ${className}`}>
      <div className="flower__leafs">
        <div className="flower__leaf flower__leaf--1" />
        <div className="flower__leaf flower__leaf--2" />
        <div className="flower__leaf flower__leaf--3" />
        <div className="flower__leaf flower__leaf--4" />

        <div className="flower__white-circle" />

        <div className="flower__light flower__light--1" />
        <div className="flower__light flower__light--2" />
        <div className="flower__light flower__light--3" />
        <div className="flower__light flower__light--4" />
        <div className="flower__light flower__light--5" />
        <div className="flower__light flower__light--6" />
        <div className="flower__light flower__light--7" />
        <div className="flower__light flower__light--8" />
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
  );
}

/* =====================================================
   LONG FLOWER
===================================================== */

function LongFlower() {
  return (
    <div className="grow-ans" style={{ "--d": "1.2s" }}>
      <div className="flower__g-long">
        <div className="flower__g-long__top" />
        <div className="flower__g-long__bottom" />
      </div>
    </div>
  );
}

/* =====================================================
   GRASS
===================================================== */

function GrowingGrass() {
  return (
    <>
      <div className="growing-grass">
        <div className="flower__grass flower__grass--1">
          <div className="flower__grass--top" />
          <div className="flower__grass--bottom" />

          <div className="flower__grass__leaf flower__grass__leaf--1" />
          <div className="flower__grass__leaf flower__grass__leaf--2" />
          <div className="flower__grass__leaf flower__grass__leaf--3" />
          <div className="flower__grass__leaf flower__grass__leaf--4" />
          <div className="flower__grass__leaf flower__grass__leaf--5" />
          <div className="flower__grass__leaf flower__grass__leaf--6" />
        </div>
      </div>

      <div className="growing-grass">
        <div className="flower__grass flower__grass--2">
          <div className="flower__grass--top" />
          <div className="flower__grass--bottom" />

          <div className="flower__grass__leaf flower__grass__leaf--1" />
          <div className="flower__grass__leaf flower__grass__leaf--2" />
          <div className="flower__grass__leaf flower__grass__leaf--3" />
          <div className="flower__grass__leaf flower__grass__leaf--4" />
          <div className="flower__grass__leaf flower__grass__leaf--5" />
          <div className="flower__grass__leaf flower__grass__leaf--6" />
        </div>
      </div>
    </>
  );
}

/* =====================================================
   RIGHT FOLIAGE
===================================================== */

function RightFoliage() {
  return (
    <>
      <div className="grow-ans" style={{ "--d": "2.4s" }}>
        <div className="flower__g-right flower__g-right--1">
          <div className="leaf" />
        </div>
      </div>

      <div className="grow-ans" style={{ "--d": "2.8s" }}>
        <div className="flower__g-right flower__g-right--2">
          <div className="leaf" />
        </div>
      </div>
    </>
  );
}

/* =====================================================
   FRONT FOLIAGE
===================================================== */

function FrontFoliage() {
  return (
    <div className="grow-ans" style={{ "--d": "2.8s" }}>
      <div className="flower__g-front">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            className="flower__g-front__leaf-wrapper"
            key={index}
            style={{
              left: `${index * 2.8}vmin`,
              top: `${(index % 3) * 4}vmin`,
            }}
          >
            <div className="flower__g-front__leaf" />
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   FRONT BRANCH
===================================================== */

function FrontBranch() {
  return (
    <div className="grow-ans" style={{ "--d": "3.2s" }}>
      <div className="flower__g-fr">
        <div className="leaf" />

        <div className="flower__g-fr__leaf flower__g-fr__leaf--1" />
        <div className="flower__g-fr__leaf flower__g-fr__leaf--2" />
        <div className="flower__g-fr__leaf flower__g-fr__leaf--3" />
        <div className="flower__g-fr__leaf flower__g-fr__leaf--4" />
        <div className="flower__g-fr__leaf flower__g-fr__leaf--5" />
      </div>
    </div>
  );
}

/* =====================================================
   LONG GRASS
===================================================== */

function LongGrass() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          className={`long-g long-g--${index}`}
          key={index}
        >
          <div className="leaf leaf--0" />
          <div className="leaf leaf--1" />
          <div className="leaf leaf--2" />
          <div className="leaf leaf--3" />
        </div>
      ))}
    </>
  );
}

/* =====================================================
   FLOWER SCENE
===================================================== */

function FlowerScene() {
  const grass = Array.from({ length: 38 });

  return (
    <div className="video-flower-stage">
      <div className="flowers">
        {flowers.map((flower) => (
          <div
            className="flower-wrap"
            key={flower.className}
            style={{
              "--flower-left": flower.left,
              "--flower-scale": flower.scale,
              "--flower-delay": flower.delay,
            }}
          >
            <Flower className={flower.className} />
          </div>
        ))}

        <LongFlower />
        <GrowingGrass />
        <RightFoliage />
        <FrontFoliage />
        <FrontBranch />
        <LongGrass />
      </div>

      <div className="video-grass">
        {grass.map((_, index) => (
          <div
            className="video-grass__blade"
            key={index}
            style={{
              left: `${index * 2.7 + Math.random() * 1.5}%`,
              height: `${6 + Math.random() * 10}vmin`,
              animationDelay: `${Math.random() * 2.5}s`,
              transform: `rotate(${
                -9 + Math.random() * 18
              }deg)`,
            }}
          />
        ))}
      </div>

      <div className="video-ground-glow" />
    </div>
  );
}

/* =====================================================
   BIRD SOUND
===================================================== */

function playBirdChirp(audioRef) {
  try {
    const ctx = audioRef.current;

    if (!ctx || ctx.state === "closed") return;

    if (ctx.state === "suspended") {
      ctx.resume().catch(() => {});
    }

    const now = ctx.currentTime;

    const notes = [
      {
        frequency: 1150,
        start: 0,
        duration: 0.13,
      },
      {
        frequency: 1580,
        start: 0.14,
        duration: 0.12,
      },
      {
        frequency: 1320,
        start: 0.28,
        duration: 0.16,
      },
    ];

    notes.forEach((note) => {
      const oscillator = ctx.createOscillator();
      const gain = ctx.createGain();

      oscillator.type = "sine";

      oscillator.frequency.setValueAtTime(
        note.frequency,
        now + note.start
      );

      oscillator.frequency.exponentialRampToValueAtTime(
        note.frequency * 1.12,
        now + note.start + note.duration
      );

      gain.gain.setValueAtTime(
        0.0001,
        now + note.start
      );

      gain.gain.exponentialRampToValueAtTime(
        0.055,
        now + note.start + 0.025
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + note.start + note.duration
      );

      oscillator.connect(gain);
      gain.connect(ctx.destination);

      oscillator.start(now + note.start);

      oscillator.stop(
        now +
          note.start +
          note.duration +
          0.03
      );
    });
  } catch {
    /* don't break page if audio fails */
  }
}

/* =====================================================
   REAL FLYING BIRD
===================================================== */

function FlyingBird({ top }) {
  return (
    <div
      className="garden-bird"
      style={{
        "--bird-top": `${top}%`,
      }}
      aria-hidden="true"
    >
      <svg
        className="bird-svg"
        viewBox="0 0 120 70"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* body */}
        <ellipse
          cx="59"
          cy="37"
          rx="19"
          ry="10"
          className="bird-body"
        />

        {/* head */}
        <circle
          cx="76"
          cy="29"
          r="8"
          className="bird-body"
        />

        {/* beak */}
        <path
          d="M83 29 L96 34 L83 36 Z"
          className="bird-beak"
        />

        {/* left wing */}
        <path
          className="bird-wing bird-wing-left"
          d="M54 34 C42 13 25 8 12 12 C28 22 34 34 51 41 Z"
        />

        {/* right wing */}
        <path
          className="bird-wing bird-wing-right"
          d="M59 34 C70 13 86 8 103 13 C89 22 81 34 62 42 Z"
        />

        {/* tail */}
        <path
          d="M43 38 L25 29 L34 43 L22 49 L47 48 Z"
          className="bird-body"
        />
      </svg>
    </div>
  );
}

/* =====================================================
   BIRDS + BUTTERFLIES
===================================================== */

function SkyCreatures({ active, audioRef }) {
  const [bird, setBird] = useState(0);

  useEffect(() => {
    if (!active) return;

    let mounted = true;

    const firstTimer = setTimeout(() => {
      if (!mounted) return;

      setBird((value) => value + 1);
      playBirdChirp(audioRef);
    }, 1600);

    /*
      Bird takes about 5.2 seconds to cross the sky.
      Next bird starts after it has almost finished.
    */
    const interval = setInterval(() => {
      if (!mounted) return;

      setBird((value) => value + 1);
      playBirdChirp(audioRef);
    }, 5800);

    return () => {
      mounted = false;
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, [active, audioRef]);

  return (
    <>
      {active && (
        <FlyingBird
          key={`bird-${bird}`}
          top={15 + (bird % 4) * 6}
        />
      )}

      <div
        className="garden-butterfly garden-butterfly--1"
        aria-hidden="true"
      >
        🦋
      </div>

      <div
        className="garden-butterfly garden-butterfly--2"
        aria-hidden="true"
      >
        🦋
      </div>
    </>
  );
}

/* =====================================================
   MAIN GARDEN PAGE
===================================================== */

export default function GardenPage() {
  const [bloomed, setBloomed] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    return () => {
      if (
        audioRef.current &&
        audioRef.current.state !== "closed"
      ) {
        audioRef.current.close().catch(() => {});
      }
    };
  }, []);

  const handleBloom = () => {
    if (bloomed) return;

    /*
      Unlock audio from user's tap.
    */
    try {
      const AudioContextClass =
        window.AudioContext ||
        window.webkitAudioContext;

      if (AudioContextClass) {
        const ctx = new AudioContextClass();

        audioRef.current = ctx;

        if (ctx.state === "suspended") {
          ctx.resume().catch(() => {});
        }
      }
    } catch {
      audioRef.current = null;
    }

    setBloomed(true);
  };

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[#020b18] text-white"
      onPointerDown={handleBloom}
    >
      {/* =========================
          BACKGROUND
      ========================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(12,112,130,.32),transparent_48%),linear-gradient(to_bottom,#020617,#031426_60%,#04252d)]" />

      {/* =========================
          STARS
      ========================= */}

      <div className="absolute inset-0 z-[2] pointer-events-none">
        {stars.map((star) => (
          <span
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: star.left,
              top: star.top,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity:
                0.35 + Math.random() * 0.55,
              boxShadow:
                star.size > 2
                  ? "0 0 8px rgba(255,255,255,.65)"
                  : "none",
              animation:
                `twinkle 3s ${star.delay} ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* =========================
          MOON
      ========================= */}

      <div
        className="absolute z-[4] right-[14%] top-[15%] h-[72px] w-[72px] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 35% 30%, #fff, #dffcff 48%, #b5e7ed)",
          boxShadow:
            "0 0 25px rgba(190,245,255,.65), 0 0 70px rgba(90,220,240,.18)",
        }}
      />

      {/* =========================
          TITLE
      ========================= */}

      <motion.h1
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        className="absolute z-[200] top-[4%] left-0 right-0 text-center text-3xl md:text-5xl italic tracking-wide text-cyan-200"
        style={{
          textShadow:
            "0 0 12px rgba(90,240,255,.65)",
        }}
      >
        A LITTLE GARDEN
      </motion.h1>

      {/* =========================
          FLOWERS
      ========================= */}

      {bloomed && <FlowerScene />}

      {/* =========================
          BIRDS
      ========================= */}

      <SkyCreatures
        active={bloomed}
        audioRef={audioRef}
      />

      {/* =========================
          FIREFLIES
      ========================= */}

      <div className="absolute inset-0 z-[8] pointer-events-none">
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className="absolute h-1.5 w-1.5 rounded-full bg-cyan-200"
            style={{
              left: `${5 + Math.random() * 90}%`,
              top: `${42 + Math.random() * 42}%`,
              boxShadow:
                "0 0 10px rgba(90,255,240,.9)",
              animation:
                `firefly 4s ${Math.random() * 3}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* =========================
          MEMORY
      ========================= */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: bloomed ? 1 : 0,
        }}
        transition={{
          delay: 2,
          duration: 1.5,
        }}
        className="absolute z-[210] bottom-[12%] left-0 right-0 px-6 text-center text-lg md:text-2xl italic text-white/85"
        style={{
          textShadow:
            "0 0 10px rgba(0,0,0,.9)",
        }}
      >
        Every flower here is a memory worth cherishing.
      </motion.p>

      {/* =========================
          FOOTER
      ========================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: bloomed ? 0.7 : 0,
        }}
        transition={{
          delay: 3,
          duration: 1.5,
        }}
        className="absolute z-[220] bottom-[3%] left-0 right-0 text-center text-xs md:text-sm italic text-white/60"
      >
        A little garden made with a little touch. 🌸
      </motion.div>

      {/* =========================
          TAP HINT
      ========================= */}

      {!bloomed && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="absolute z-[300] bottom-[10%] left-0 right-0 text-center text-sm text-cyan-100/70"
        >
          Tap anywhere to grow the garden
        </motion.div>
      )}

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.25;
            transform: scale(0.8);
          }

          50% {
            opacity: 1;
            transform: scale(1.3);
          }
        }

        @keyframes firefly {
          0%,
          100% {
            opacity: 0.15;
            transform: translate(0, 0) scale(0.7);
          }

          50% {
            opacity: 1;
            transform: translate(10px, -15px)
              scale(1.2);
          }
        }
      `}</style>
    </main>
  );
}
