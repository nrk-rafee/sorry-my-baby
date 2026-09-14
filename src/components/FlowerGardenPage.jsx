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

/* -------------------------------------------------------
   VIDEO STYLE FLOWER
------------------------------------------------------- */

function VideoFlower({ number }) {
  const lights = Array.from({ length: 8 })

  return (
    <div className={`vf-flower vf-flower--${number}`}>
      <div className={`vf-flower__leafs vf-flower__leafs--${number}`}>
        <div className="vf-flower__leaf vf-flower__leaf--1" />
        <div className="vf-flower__leaf vf-flower__leaf--2" />
        <div className="vf-flower__leaf vf-flower__leaf--3" />
        <div className="vf-flower__leaf vf-flower__leaf--4" />

        <div className="vf-flower__white-circle" />

        {lights.map((_, index) => (
          <div
            key={index}
            className={`vf-flower__light vf-flower__light--${index + 1}`}
          />
        ))}
      </div>

      <div className="vf-flower__line">
        <div className="vf-flower__line-leaf vf-flower__line-leaf--1" />
        <div className="vf-flower__line-leaf vf-flower__line-leaf--2" />
        <div className="vf-flower__line-leaf vf-flower__line-leaf--3" />
        <div className="vf-flower__line-leaf vf-flower__line-leaf--4" />
        <div className="vf-flower__line-leaf vf-flower__line-leaf--5" />
        <div className="vf-flower__line-leaf vf-flower__line-leaf--6" />
      </div>
    </div>
  )
}

function VideoGrass({ className = "" }) {
  return (
    <div className={`vf-growing-grass ${className}`}>
      <div className="vf-grass-top" />
      <div className="vf-grass-bottom" />

      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className={`vf-grass-leaf vf-grass-leaf--${index + 1}`}
        />
      ))}

      <div className="vf-grass-overlay" />
    </div>
  )
}

function VideoLongGrass({ index }) {
  return (
    <div className={`vf-long-g vf-long-g--${index}`}>
      <div className="vf-grow vf-grow--1">
        <div className="vf-leaf vf-leaf--0" />
      </div>

      <div className="vf-grow vf-grow--2">
        <div className="vf-leaf vf-leaf--1" />
      </div>

      <div className="vf-grow vf-grow--3">
        <div className="vf-leaf vf-leaf--2" />
      </div>

      <div className="vf-grow vf-grow--4">
        <div className="vf-leaf vf-leaf--3" />
      </div>
    </div>
  )
}

function VideoFlowerGarden() {
  return (
    <>
      <div className="vf-flowers">
        {/* Main flowers */}
        <VideoFlower number={1} />
        <VideoFlower number={2} />
        <VideoFlower number={3} />
        <VideoFlower number={4} />

        {/* Long center stem */}
        <div className="vf-grow vf-center-grow">
          <div className="vf-g-long">
            <div className="vf-g-long-top" />
            <div className="vf-g-long-bottom" />
          </div>
        </div>

        {/* Grass */}
        <div className="vf-grass-holder vf-grass-holder--1">
          <VideoGrass />
        </div>

        <div className="vf-grass-holder vf-grass-holder--2">
          <VideoGrass />
        </div>

        {/* Side leaves */}
        <div className="vf-grow vf-side-grow vf-side-grow--1">
          <div className="vf-g-right">
            <div className="vf-big-leaf" />
          </div>
        </div>

        <div className="vf-grow vf-side-grow vf-side-grow--2">
          <div className="vf-g-right">
            <div className="vf-big-leaf" />
          </div>
        </div>

        {/* Front leaves */}
        <div className="vf-grow vf-front-grow">
          <div className="vf-g-front">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`vf-front-leaf-wrapper vf-front-leaf-wrapper--${
                  index + 1
                }`}
              >
                <div className="vf-front-leaf" />
              </div>
            ))}
            <div className="vf-front-line" />
          </div>
        </div>

        {/* Back leaves */}
        <div className="vf-grow vf-back-grow">
          <div className="vf-g-fr">
            <div className="vf-big-leaf" />

            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`vf-back-leaf vf-back-leaf--${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Long grass around garden */}
        {Array.from({ length: 8 }).map((_, index) => (
          <VideoLongGrass key={index} index={index} />
        ))}
      </div>

      <style jsx global>{`
        /* =====================================================
           VIDEO FLOWER ANIMATION
        ===================================================== */

        .vf-flowers {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 68vh;
          min-height: 430px;
          transform: scale(0.9);
          transform-origin: bottom center;
          perspective: 1000px;
          pointer-events: none;
          overflow: visible;
        }

        .vf-flower {
          position: absolute;
          bottom: 8vmin;
          transform-origin: bottom center;
          z-index: 20;
          --fl-speed: 0.8s;
        }

        .vf-flower--1 {
          left: 30%;
          animation: vf-moving-flower-1 4s linear infinite;
        }

        .vf-flower--2 {
          left: 50%;
          transform: rotate(20deg);
          animation: vf-moving-flower-2 4s linear infinite;
        }

        .vf-flower--3 {
          left: 68%;
          transform: rotate(-15deg);
          animation: vf-moving-flower-3 4s linear infinite;
        }

        .vf-flower--4 {
          left: 83%;
          bottom: 5vmin;
          transform: scale(0.72) rotate(12deg);
          animation: vf-moving-flower-4 4s linear infinite;
        }

        /* ---------------- FLOWER HEAD ---------------- */

        .vf-flower__leafs {
          position: relative;
          width: 8vmin;
          height: 8vmin;
          animation: vf-blooming-flower 2s backwards;
        }

        .vf-flower__leafs--1 {
          animation-delay: 1.1s;
        }

        .vf-flower__leafs--2 {
          animation-delay: 1.4s;
        }

        .vf-flower__leafs--3 {
          animation-delay: 1.7s;
        }

        .vf-flower__leafs--4 {
          animation-delay: 2s;
        }

        .vf-flower__leafs::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          transform: translate(-50%, -100%);
          width: 8vmin;
          height: 8vmin;
          background: #6bf0ff;
          filter: blur(10vmin);
        }

        .vf-flower__leaf {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8vmin;
          height: 11vmin;
          border-radius: 51% 49% 47% 53% / 44% 45% 55% 69%;
          background-color: #a7ffee;
          background-image: linear-gradient(
            to top,
            #54b8aa,
            #a7ffee
          );
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
        }

        .vf-flower__leaf--1 {
          transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
        }

        .vf-flower__leaf--2 {
          transform: translate(-50%, -4%) rotateX(40deg);
        }

        .vf-flower__leaf--3 {
          transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
        }

        .vf-flower__leaf--4 {
          width: 8vmin;
          height: 8vmin;
          transform-origin: bottom left;
          border-radius: 4vmin 10vmin 4vmin 4vmin;
          transform: translate(0%, 18%) rotateX(70deg) rotate(-43deg);
          background-image: linear-gradient(
            to top,
            #39c6d6,
            #a7ffee
          );
          z-index: 1;
          opacity: 0.8;
        }

        .vf-flower__white-circle {
          position: absolute;
          left: -3.5vmin;
          top: -3vmin;
          width: 9vmin;
          height: 4vmin;
          border-radius: 50%;
          background: #fff;
        }

        .vf-flower__white-circle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          border-radius: inherit;
          background: #f6c945;
          box-shadow: 0 0 1.5vmin rgba(255, 220, 70, 0.9);
        }

        /* ---------------- FLOWER LIGHTS ---------------- */

        .vf-flower__light {
          position: absolute;
          bottom: 0;
          width: 1vmin;
          height: 1vmin;
          border-radius: 50%;
          background: #fff;
          filter: blur(0.2vmin);
          animation: vf-flower-light 4s linear infinite backwards;
        }

        .vf-flower__light--1 {
          left: -2vmin;
          animation-delay: 1s;
        }

        .vf-flower__light--2 {
          left: 3vmin;
          top: -1vmin;
          animation-delay: 1.5s;
        }

        .vf-flower__light--3 {
          left: 6vmin;
          top: 3vmin;
          animation-delay: 2s;
        }

        .vf-flower__light--4 {
          left: -1vmin;
          top: 5vmin;
          animation-delay: 2.5s;
        }

        .vf-flower__light--5 {
          left: 7vmin;
          top: 6vmin;
          animation-delay: 3s;
        }

        .vf-flower__light--6 {
          left: 2vmin;
          top: 8vmin;
          animation-delay: 3.5s;
        }

        .vf-flower__light--7 {
          left: -3vmin;
          top: 2vmin;
          animation-delay: 4s;
        }

        .vf-flower__light--8 {
          left: 5vmin;
          top: 10vmin;
          animation-delay: 4.5s;
        }

        /* ---------------- STEM ---------------- */

        .vf-flower__line {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 1.5vmin;
          height: 58vmin;
          transform-origin: bottom center;
          background-image: linear-gradient(
            to top,
            transparent 10%,
            #079097,
            #159faa
          );
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          clip-path: polygon(35% 0, 65% 1%, 100% 100%, 0% 100%);
          animation: vf-growing-stem 2s backwards;
        }

        .vf-flower--1 .vf-flower__line {
          height: 64vmin;
          animation-delay: 0.3s;
        }

        .vf-flower--2 .vf-flower__line {
          height: 57vmin;
          animation-delay: 0.6s;
        }

        .vf-flower--3 .vf-flower__line {
          height: 60vmin;
          animation-delay: 0.9s;
        }

        .vf-flower--4 .vf-flower__line {
          height: 47vmin;
          animation-delay: 1.1s;
        }

        /* ---------------- STEM LEAVES ---------------- */

        .vf-flower__line-leaf {
          position: absolute;
          width: 8vmin;
          height: 8vmin;
          border-radius: 100% 0% 0% 100% / 100% 100% 0% 0%;
          background-image: linear-gradient(
            to bottom left,
            transparent,
            #079097
          );
          transform-origin: bottom left;
        }

        .vf-flower__line-leaf--1 {
          left: 0;
          top: 20%;
          transform: rotate(70deg) rotateY(30deg);
          animation: vf-leaf-right 0.8s 1.6s backwards;
        }

        .vf-flower__line-leaf--2 {
          left: -1vmin;
          top: 35%;
          transform: rotate(70deg) rotateY(30deg);
          animation: vf-leaf-right 0.8s 1.4s backwards;
        }

        .vf-flower__line-leaf--3 {
          left: -1vmin;
          top: 50%;
          transform: rotate(-70deg) rotateY(30deg);
          animation: vf-leaf-left 0.8s 1.2s backwards;
        }

        .vf-flower__line-leaf--4 {
          left: 0;
          top: 60%;
          transform: rotate(-70deg) rotateY(30deg);
          animation: vf-leaf-left 0.8s 1s backwards;
        }

        .vf-flower__line-leaf--5 {
          left: 0;
          top: 72%;
          transform: rotate(70deg) rotateY(30deg);
          animation: vf-leaf-right 0.8s 1.8s backwards;
        }

        .vf-flower__line-leaf--6 {
          left: -1vmin;
          top: 82%;
          transform: rotate(-70deg) rotateY(30deg);
          animation: vf-leaf-left 0.8s 2s backwards;
        }

        /* ---------------- CENTER LONG GRASS ---------------- */

        .vf-g-long {
          --w: 2vmin;
          --h: 6vmin;
          --c: #159faa;
          position: absolute;
          bottom: 8vmin;
          left: -3vmin;
          transform-origin: bottom center;
          transform: rotate(-30deg) rotateY(-20deg);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          animation: vf-g-long-sway 3s linear infinite;
        }

        .vf-g-long-top {
          top: calc(var(--h) * -1);
          width: calc(var(--w) + 1vmin);
          height: var(--h);
          border-top-right-radius: 100%;
          border-right: 0.7vmin solid var(--c);
          transform: translate(-0.7vmin, 1vmin);
        }

        .vf-g-long-bottom {
          width: var(--w);
          height: 50vmin;
          transform-origin: bottom center;
          background-image: linear-gradient(
            to top,
            transparent 30%,
            var(--c)
          );
          clip-path: polygon(
            35% 0,
            65% 1%,
            100% 100%,
            0% 100%
          );
        }

        /* ---------------- GRASS ---------------- */

        .vf-grass-holder {
          position: absolute;
          bottom: 0;
          z-index: 5;
        }

        .vf-grass-holder--1 {
          left: 25%;
          transform: scale(0.9);
        }

        .vf-grass-holder--2 {
          right: 24%;
          transform: scale(0.75);
        }

        .vf-growing-grass {
          position: relative;
          width: 16vmin;
          height: 20vmin;
          transform-origin: bottom center;
          animation: vf-grow-grass 2s 1.8s backwards;
        }

        .vf-grass-top {
          position: absolute;
          top: 0;
          left: 50%;
          width: 4vmin;
          height: 13vmin;
          border-radius: 100%;
          border-left: 1vmin solid #159faa;
          transform: rotate(15deg);
        }

        .vf-grass-bottom {
          position: absolute;
          bottom: 0;
          left: 30%;
          width: 8vmin;
          height: 13vmin;
          background: linear-gradient(
            to top,
            #079097,
            transparent
          );
          clip-path: polygon(50% 0, 100% 100%, 0 100%);
        }

        .vf-grass-leaf {
          position: absolute;
          width: 5vmin;
          height: 9vmin;
          border-radius: 100% 0 100% 0;
          background: linear-gradient(
            to top,
            #079097,
            #23c7c7
          );
          transform-origin: bottom;
        }

        .vf-grass-leaf--1 {
          left: 1vmin;
          bottom: 2vmin;
          transform: rotate(-35deg);
        }

        .vf-grass-leaf--2 {
          left: 5vmin;
          bottom: 1vmin;
          transform: rotate(20deg);
        }

        .vf-grass-leaf--3 {
          left: 9vmin;
          bottom: 3vmin;
          transform: rotate(55deg);
        }

        .vf-grass-leaf--4 {
          left: 2vmin;
          bottom: 7vmin;
          transform: rotate(-55deg);
        }

        .vf-grass-leaf--5 {
          left: 8vmin;
          bottom: 8vmin;
          transform: rotate(45deg);
        }

        .vf-grass-leaf--6 {
          left: 12vmin;
          bottom: 5vmin;
          transform: rotate(65deg);
        }

        .vf-grass-leaf--7 {
          left: 5vmin;
          bottom: 11vmin;
          transform: rotate(-25deg);
        }

        .vf-grass-leaf--8 {
          left: 10vmin;
          bottom: 12vmin;
          transform: rotate(35deg);
        }

        .vf-grass-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          filter: blur(1.5vmin);
          z-index: 100;
        }

        /* ---------------- SIDE / FRONT LEAVES ---------------- */

        .vf-side-grow {
          position: absolute;
          bottom: 4vmin;
        }

        .vf-side-grow--1 {
          left: 15%;
          transform: scale(0.8) rotate(-12deg);
        }

        .vf-side-grow--2 {
          right: 14%;
          transform: scale(0.8) rotate(18deg);
        }

        .vf-g-right {
          transform-origin: bottom left;
        }

        .vf-big-leaf {
          width: 30vmin;
          height: 38vmin;
          border-top-left-radius: 100%;
          border-left: 1.5vmin solid #079097;
          background: linear-gradient(
            to top,
            transparent,
            rgba(21, 159, 170, 0.35)
          );
          mask-image: linear-gradient(
            to top,
            transparent 20%,
            #079097 70%
          );
          -webkit-mask-image: linear-gradient(
            to top,
            transparent 20%,
            #079097 70%
          );
        }

        .vf-front-grow {
          position: absolute;
          bottom: -2vmin;
          left: 50%;
          transform: translateX(-50%) scale(0.9);
          z-index: 25;
        }

        .vf-g-front {
          position: relative;
          width: 25vmin;
          height: 25vmin;
        }

        .vf-front-leaf-wrapper {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform-origin: bottom center;
        }

        .vf-front-leaf {
          width: 9vmin;
          height: 12vmin;
          border-radius: 100% 0 0 100% / 100% 100% 0 0;
          background: linear-gradient(
            to bottom left,
            transparent,
            #159faa
          );
          box-shadow: inset 0 2px 1vmin rgba(44, 238, 252, 0.2);
        }

        .vf-front-leaf-wrapper--1 {
          transform: translateX(-50%) rotate(-55deg);
        }

        .vf-front-leaf-wrapper--2 {
          transform: translateX(-50%) rotate(-40deg);
        }

        .vf-front-leaf-wrapper--3 {
          transform: translateX(-50%) rotate(-25deg);
        }

        .vf-front-leaf-wrapper--4 {
          transform: translateX(-50%) rotate(-10deg);
        }

        .vf-front-leaf-wrapper--5 {
          transform: translateX(-50%) rotate(10deg);
        }

        .vf-front-leaf-wrapper--6 {
          transform: translateX(-50%) rotate(25deg);
        }

        .vf-front-leaf-wrapper--7 {
          transform: translateX(-50%) rotate(40deg);
        }

        .vf-front-leaf-wrapper--8 {
          transform: translateX(-50%) rotate(55deg);
        }

        .vf-front-line {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 1.5vmin;
          height: 25vmin;
          transform: translateX(-50%);
          background: linear-gradient(
            to top,
            transparent,
            #079097
          );
        }

        /* ---------------- BACK LEAVES ---------------- */

        .vf-back-grow {
          position: absolute;
          bottom: -4vmin;
          right: 30%;
          z-index: 12;
        }

        .vf-g-fr {
          position: relative;
          transform-origin: bottom left;
          animation: vf-back-sway 2s linear infinite;
        }

        .vf-back-leaf {
          position: absolute;
          width: 9vmin;
          height: 10vmin;
          border-radius: 100% 0 0 100% / 100% 100% 0 0;
          background: linear-gradient(
            to bottom left,
            transparent,
            #23f0ff
          );
          box-shadow: inset 0 2px 1vmin rgba(44, 238, 252, 0.2);
        }

        .vf-back-leaf--1 {
          left: 2vmin;
          top: 4vmin;
          transform: rotate(55deg);
        }

        .vf-back-leaf--2 {
          left: -1vmin;
          top: 7vmin;
          transform: rotate(-25deg);
        }

        .vf-back-leaf--3 {
          left: 5vmin;
          top: 11vmin;
          transform: rotate(45deg);
        }

        .vf-back-leaf--4 {
          left: -3vmin;
          top: 14vmin;
          transform: rotate(-15deg);
        }

        .vf-back-leaf--5 {
          left: 4vmin;
          top: 18vmin;
          transform: rotate(55deg);
        }

        .vf-back-leaf--6 {
          left: 0;
          top: 22vmin;
          transform: rotate(-25deg);
        }

        .vf-back-leaf--7 {
          left: 6vmin;
          top: 26vmin;
          transform: rotate(45deg);
        }

        .vf-back-leaf--8 {
          left: -4vmin;
          top: 19vmin;
          transform: rotate(-15deg);
        }

        /* ---------------- LONG GRASS ---------------- */

        .vf-long-g {
          position: absolute;
          bottom: 18vmin;
          left: -10vmin;
          transform-origin: bottom left;
        }

        .vf-long-g--0 {
          left: 8%;
          transform: scale(0.7) rotate(-5deg);
        }

        .vf-long-g--1 {
          left: 18%;
          transform: scale(0.8) rotate(4deg);
        }

        .vf-long-g--2 {
          left: 28%;
          transform: scale(0.65) rotate(-3deg);
        }

        .vf-long-g--3 {
          left: 38%;
          transform: scale(0.75) rotate(5deg);
        }

        .vf-long-g--4 {
          right: 38%;
          left: auto;
          transform: scale(0.75) rotate(-5deg);
        }

        .vf-long-g--5 {
          right: 28%;
          left: auto;
          transform: scale(0.65) rotate(3deg);
        }

        .vf-long-g--6 {
          right: 18%;
          left: auto;
          transform: scale(0.8) rotate(-4deg);
        }

        .vf-long-g--7 {
          right: 8%;
          left: auto;
          transform: scale(0.7) rotate(5deg);
        }

        .vf-grow {
          animation: vf-grow 2s backwards;
        }

        .vf-leaf {
          width: 8vmin;
          height: 12vmin;
          border-radius: 100% 0 100% 0;
          background: linear-gradient(
            to top,
            #079097,
            #159faa
          );
          transform-origin: bottom;
        }

        .vf-leaf--0 {
          transform: rotate(-25deg);
        }

        .vf-leaf--1 {
          transform: rotate(15deg);
        }

        .vf-leaf--2 {
          transform: rotate(35deg);
        }

        .vf-leaf--3 {
          transform: rotate(-15deg);
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes vf-blooming-flower {
          0% {
            transform: scale(0);
          }
        }

        @keyframes vf-growing-stem {
          0% {
            transform: scaleY(0);
            transform-origin: bottom center;
          }
        }

        @keyframes vf-grow {
          0% {
            transform: scale(0);
            transform-origin: bottom center;
          }
        }

        @keyframes vf-grow-grass {
          0% {
            transform: scale(0);
            transform-origin: bottom center;
          }
        }

        @keyframes vf-leaf-right {
          0% {
            transform: rotate(70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes vf-leaf-left {
          0% {
            transform: rotate(-70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes vf-flower-light {
          0% {
            opacity: 0;
            transform: translateY(0);
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: 0;
            transform: translateY(-4vmin);
          }
        }

        @keyframes vf-moving-flower-1 {
          0%,
          100% {
            transform: rotate(2deg);
          }

          50% {
            transform: rotate(-2deg);
          }
        }

        @keyframes vf-moving-flower-2 {
          0%,
          100% {
            transform: rotate(18deg);
          }

          50% {
            transform: rotate(22deg);
          }
        }

        @keyframes vf-moving-flower-3 {
          0%,
          100% {
            transform: rotate(-13deg);
          }

          50% {
            transform: rotate(-17deg);
          }
        }

        @keyframes vf-moving-flower-4 {
          0%,
          100% {
            transform: scale(0.72) rotate(10deg);
          }

          50% {
            transform: scale(0.72) rotate(14deg);
          }
        }

        @keyframes vf-g-long-sway {
          0%,
          100% {
            transform: rotate(-30deg) rotateY(-20deg);
          }

          50% {
            transform: rotate(-32deg) rotateY(-20deg);
          }
        }

        @keyframes vf-back-sway {
          0%,
          100% {
            transform: rotate(2deg);
          }

          50% {
            transform: rotate(4deg);
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .vf-flowers {
            height: 62vh;
            min-height: 390px;
            transform: scale(0.78);
          }

          .vf-flower--1 {
            left: 18%;
          }

          .vf-flower--2 {
            left: 43%;
          }

          .vf-flower--3 {
            left: 67%;
          }

          .vf-flower--4 {
            left: 88%;
          }

          .vf-grass-holder--1 {
            left: 12%;
          }

          .vf
