"use client"

export default function VideoFlowerGarden() {
  const lights = Array.from({ length: 8 })

  const Flower = ({ number }) => (
    <div className={`video-flower video-flower--${number}`}>
      <div className={`flower__leafs flower__leafs--${number}`}>
        <div className="flower__leaf flower__leaf--1" />
        <div className="flower__leaf flower__leaf--2" />
        <div className="flower__leaf flower__leaf--3" />
        <div className="flower__leaf flower__leaf--4" />

        <div className="flower__white-circle" />

        {lights.map((_, index) => (
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

  const Grass = ({ number }) => (
    <div className="growing-grass">
      <div className={`flower__grass flower__grass--${number}`}>
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
  )

  const LongGrass = ({ number }) => {
    const delays = [
      ["3s", "2.2s", "3.4s", "3.6s"],
      ["3.6s", "3.8s", "4s", "4.2s"],
      ["4s", "4.2s", "4.4s", "4.6s"],
      ["4s", "4.2s", "3s", "3.6s"],
      ["4s", "4.2s", "3s", "3.6s"],
      ["4s", "4.2s", "3s", "3.6s"],
      ["4.2s", "4.4s", "4.6s", "4.8s"],
      ["3s", "3.2s", "3.5s", "3.6s"],
    ]

    return (
      <div className={`long-g long-g--${number}`}>
        {delays[number].map((delay, index) => (
          <div
            className="grow-ans"
            style={{ "--d": delay }}
            key={index}
          >
            <div className={`leaf leaf--${index}`} />
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div className="video-flower-stage">
        {/* FLOWERS */}

        <Flower number={1} />
        <Flower number={2} />
        <Flower number={3} />
        <Flower number={4} />

        {/* LONG STEM */}

        <div className="grow-ans" style={{ "--d": "1.2s" }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top" />
            <div className="flower__g-long__bottom" />
          </div>
        </div>

        {/* GRASS */}

        <Grass number={1} />
        <Grass number={2} />

        {/* RIGHT LEAVES */}

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

        {/* FRONT LEAVES */}

        <div className="grow-ans" style={{ "--d": "2.8s" }}>
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

            <div className="flower__g-front__line" />
          </div>
        </div>

        {/* BACK / FRONT RIGHT LEAVES */}

        <div className="grow-ans" style={{ "--d": "3.2s" }}>
          <div className="flower__g-fr">
            <div className="leaf" />

            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className={`flower__g-fr__leaf flower__g-fr__leaf--${
                  index + 1
                }`}
              />
            ))}
          </div>
        </div>

        {/* LONG GRASS */}

        {Array.from({ length: 8 }).map((_, index) => (
          <LongGrass key={index} number={index} />
        ))}
      </div>

      <style jsx global>{`
        /* =========================================================
           VIDEO STYLE FLOWER GARDEN
           Scoped visually inside .video-flower-stage
        ========================================================= */

        .video-flower-stage {
          position: absolute;
          inset: 0;
          bottom: 0;
          overflow: visible;
          pointer-events: none;
          perspective: 1000px;
          transform: scale(0.78);
          transform-origin: bottom center;
          z-index: 15;
        }

        .video-flower-stage *,
        .video-flower-stage *::before,
        .video-flower-stage *::after {
          box-sizing: border-box;
        }

        /* =========================================================
           FLOWERS
        ========================================================= */

        .video-flower {
          position: absolute;
          bottom: 9vmin;
          transform-origin: bottom center;
          z-index: 10;
          --fl-speed: 0.8s;
        }

        .video-flower--1 {
          left: 31%;
          animation: moving-flower-1 4s linear infinite;
        }

        .video-flower--2 {
          left: 50%;
          transform: rotate(20deg);
          animation: moving-flower-2 4s linear infinite;
        }

        .video-flower--3 {
          left: 67%;
          transform: rotate(-15deg);
          animation: moving-flower-3 4s linear infinite;
        }

        .video-flower--4 {
          left: 82%;
          transform: scale(0.7) rotate(12deg);
          animation: moving-flower-4 4s linear infinite;
        }

        /* =========================================================
           FLOWER HEAD
        ========================================================= */

        .video-flower .flower__leafs {
          position: relative;
          width: 8vmin;
          height: 8vmin;
          animation: blooming-flower 2s backwards;
        }

        .video-flower .flower__leafs--1 {
          animation-delay: 1.1s;
        }

        .video-flower .flower__leafs--2 {
          animation-delay: 1.4s;
        }

        .video-flower .flower__leafs--3 {
          animation-delay: 1.7s;
        }

        .video-flower .flower__leafs--4 {
          animation-delay: 2s;
        }

        .video-flower .flower__leafs::after {
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

        .video-flower .flower__leaf {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 8vmin;
          height: 11vmin;
          border-radius: 51% 49% 47% 53% / 44% 45% 55% 69%;
          background-color: #65e6cc;
          background-image: linear-gradient(
            to top,
            #40bbab,
            #a7ffee
          );
          transform-origin: bottom center;
          opacity: 0.9;
          box-shadow: inset 0 0 2vmin rgba(255, 255, 255, 0.5);
        }

        .video-flower .flower__leaf--1 {
          transform: translate(-10%, 1%) rotateY(40deg) rotateX(-50deg);
        }

        .video-flower .flower__leaf--2 {
          transform: translate(-50%, -4%) rotateX(40deg);
        }

        .video-flower .flower__leaf--3 {
          transform: translate(-90%, 0%) rotateY(45deg) rotateX(50deg);
        }

        .video-flower .flower__leaf--4 {
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

        /* =========================================================
           FLOWER CENTER
        ========================================================= */

        .video-flower .flower__white-circle {
          position: absolute;
          left: -3.5vmin;
          top: -3vmin;
          width: 9vmin;
          height: 4vmin;
          border-radius: 50%;
          background: #fff;
        }

        .video-flower .flower__white-circle::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 45%;
          transform: translate(-50%, -50%);
          width: 60%;
          height: 60%;
          border-radius: inherit;
          background: #fce700;
          box-shadow: 0 0 1.5vmin rgba(255, 220, 0, 0.8);
        }

        /* =========================================================
           FLOWER LIGHTS
        ========================================================= */

        .video-flower .flower__light {
          position: absolute;
          bottom: 0;
          width: 1vmin;
          height: 1vmin;
          border-radius: 50%;
          background: #fff;
          filter: blur(0.2vmin);
          animation: flower-light 4s linear infinite backwards;
        }

        .video-flower .flower__light--1 {
          left: -2vmin;
          animation-delay: 1s;
        }

        .video-flower .flower__light--2 {
          left: 3vmin;
          top: -1vmin;
          animation-delay: 1.5s;
        }

        .video-flower .flower__light--3 {
          left: 6vmin;
          top: 3vmin;
          animation-delay: 2s;
        }

        .video-flower .flower__light--4 {
          left: -1vmin;
          top: 5vmin;
          animation-delay: 2.5s;
        }

        .video-flower .flower__light--5 {
          left: 7vmin;
          top: 6vmin;
          animation-delay: 3s;
        }

        .video-flower .flower__light--6 {
          left: 2vmin;
          top: 8vmin;
          animation-delay: 3.5s;
        }

        .video-flower .flower__light--7 {
          left: -3vmin;
          top: 2vmin;
          animation-delay: 4s;
        }

        .video-flower .flower__light--8 {
          left: 5vmin;
          top: 10vmin;
          animation-delay: 4.5s;
        }

        /* =========================================================
           STEM
        ========================================================= */

        .video-flower .flower__line {
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 1.5vmin;
          height: 60vmin;
          transform-origin: bottom center;
          background-image:
            linear-gradient(
              to left,
              rgba(0, 0, 0, 0.2),
              transparent,
              rgba(255, 255, 255, 0.2)
            ),
            linear-gradient(
              to top,
              transparent 10%,
              #14757a,
              #39c6d6
            );
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          animation: grow-flower-tree 4s backwards;
        }

        .video-flower--1 .flower__line {
          height: 70vmin;
          animation-delay: 0.3s;
        }

        .video-flower--2 .flower__line {
          height: 60vmin;
          animation-delay: 0.6s;
        }

        .video-flower--3 .flower__line {
          height: 63vmin;
          animation-delay: 0.9s;
        }

        .video-flower--4 .flower__line {
          height: 50vmin;
          animation-delay: 1.1s;
        }

        /* =========================================================
           STEM LEAVES
        ========================================================= */

        .video-flower .flower__line__leaf {
          --w: 7vmin;
          --h: calc(var(--w) + 2vmin);
          position: absolute;
          top: 20%;
          left: 90%;
          width: var(--w);
          height: var(--h);
          border-top-right-radius: var(--h);
          border-bottom-left-radius: var(--h);
          background-image: linear-gradient(
            to top,
            rgba(20, 117, 122, 0.4),
            #39c6d6
          );
          transform-origin: bottom left;
        }

        .video-flower .flower__line__leaf--1 {
          transform: rotate(70deg) rotateY(30deg);
          animation: blooming-leaf-right var(--fl-speed) 1.6s backwards;
        }

        .video-flower .flower__line__leaf--2 {
          top: 35%;
          transform: rotate(70deg) rotateY(30deg);
          animation: blooming-leaf-right var(--fl-speed) 1.4s backwards;
        }

        .video-flower .flower__line__leaf--3 {
          top: 50%;
          transform: rotate(-70deg) rotateY(30deg);
          animation: blooming-leaf-left var(--fl-speed) 1.2s backwards;
        }

        .video-flower .flower__line__leaf--4 {
          top: 60%;
          transform: rotate(-70deg) rotateY(30deg);
          animation: blooming-leaf-left var(--fl-speed) 1s backwards;
        }

        .video-flower .flower__line__leaf--5 {
          top: 72%;
          transform: rotate(70deg) rotateY(30deg);
          animation: blooming-leaf-right var(--fl-speed) 1.8s backwards;
        }

        .video-flower .flower__line__leaf--6 {
          top: 82%;
          transform: rotate(-70deg) rotateY(30deg);
          animation: blooming-leaf-left var(--fl-speed) 2s backwards;
        }

        /* =========================================================
           LONG CENTRAL GRASS
        ========================================================= */

        .flower__g-long {
          --w: 2vmin;
          --h: 6vmin;
          --c: #159faa;
          position: absolute;
          bottom: 10vmin;
          left: -3vmin;
          transform-origin: bottom center;
          transform: rotate(-30deg) rotateY(-20deg);
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          animation: flower-g-long-ans 3s linear infinite;
        }

        .flower__g-long__top {
          top: calc(var(--h) * -1);
          width: calc(var(--w) + 1vmin);
          height: var(--h);
          border-top-right-radius: 100%;
          border-right: 0.7vmin solid var(--c);
          transform: translate(-0.7vmin, 1vmin);
        }

        .flower__g-long__bottom {
          width: var(--w);
          height: 50vmin;
          transform-origin: bottom center;
          background-image: linear-gradient(
            to top,
            transparent 30%,
            var(--c)
          );
          box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.5);
          clip-path: polygon(
            35% 0,
            65% 1%,
            100% 100%,
            0% 100%
          );
        }

        /* =========================================================
           GROWING GRASS
        ========================================================= */

        .growing-grass {
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 3;
          animation: growing-grass-ans 1s 2s backwards;
        }

        .flower__grass {
          --c: #159faa;
          --line-w: 1.5vmin;
          position: relative;
          width: 20vmin;
          height: 25vmin;
          transform-origin: bottom center;
        }

        .flower__grass--1 {
          transform: rotate(-30deg) rotateY(-20deg);
          animation: moving-grass 2s linear infinite;
        }

        .flower__grass--2 {
          left: 2vmin;
          bottom: 10vmin;
          transform: scale(0.5)
            rotate(75deg)
            rotateX(10deg)
            rotateY(-200deg);
          opacity: 0.8;
          z-index: 0;
          animation: moving-grass--2 1.5s linear infinite;
        }

        .flower__grass--top {
          width: 7vmin;
          height: 10vmin;
          border-top-right-radius: 100%;
          border-right: var(--line-w) solid var(--c);
          transform: translate(-0.7vmin, 1vmin);
        }

        .flower__grass--bottom {
          margin-top: -2px;
          width: var(--line-w);
          height: 25vmin;
          background-image: linear-gradient(
            to top,
            transparent,
            var(--c)
          );
        }

        .flower__grass__leaf {
          --size: 10vmin;
          position: absolute;
          width: calc(var(--size) * 2.1);
          height: var(--size);
          border-top-left-radius: var(--size);
          border-top-right-radius: var(--size);
          background-image: linear-gradient(
            to top,
            transparent,
            transparent 30%,
            var(--c)
          );
          z-index: 100;
        }

        .flower__grass__leaf--1 {
          top: -6%;
          left: 30%;
          --size: 6vmin;
          transform: rotate(-20deg);
          animation: growing-grass-ans--1 2s 2.6s backwards;
        }

        .flower__grass__leaf--2 {
          top: -5%;
          left: -110%;
          --size: 6vmin;
          transform: rotate(10deg);
          animation: growing-grass-ans--2 2s 2.4s backwards;
        }

        .flower__grass__leaf--3 {
          top: 5%;
          left: 60%;
          --size: 8vmin;
          transform: rotate(-18deg) rotateX(-20deg);
          animation: growing-grass-ans--3 2s 2.2s backwards;
        }

        .flower__grass__leaf--4 {
          top: 6%;
          left: -135%;
          --size: 8vmin;
          transform: rotate(2deg);
          animation: growing-grass-ans--4 2s 2s backwards;
        }

        .flower__grass__leaf--5 {
          top: 20%;
          left: 60%;
          --size: 10vmin;
          transform: rotate(-24deg) rotateX(-20deg);
          animation: growing-grass-ans--5 2s 1.8s backwards;
        }

        .flower__grass__leaf--6 {
          top: 22%;
          left: -180%;
          --size: 10vmin;
          transform: rotate(10deg);
          animation: growing-grass-ans--6 2s 1.6s backwards;
        }

        .flower__grass__leaf--7 {
          top: 39%;
          left: 70%;
          --size: 10vmin;
          transform: rotate(-10deg);
          animation: growing-grass-ans--7 2s 1.4s backwards;
        }

        .flower__grass__leaf--8 {
          top: 40%;
          left: -215%;
          --size: 11vmin;
          transform: rotate(10deg);
          animation: growing-grass-ans--8 2s 1.2s backwards;
        }

        .flower__grass__overlay {
          position: absolute;
          top: -10%;
          right: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.55);
          filter: blur(1.5vmin);
          z-index: 100;
        }

        /* =========================================================
           SIDE LEAVES
        ========================================================= */

        .flower__g-right {
          position: absolute;
          bottom: 6vmin;
          left: -2vmin;
          transform-origin: bottom left;
          transform: rotate(20deg);
        }

        .flower__g-right .leaf {
          width: 30vmin;
          height: 50vmin;
          border-top-left-radius: 100%;
          border-left: 2vmin solid #35df5999;
          background-image: linear-gradient(
            to bottom,
            transparent,
            #079097 60%
          );
          -webkit-mask-image: linear-gradient(
            to top,
            transparent 30%,
            #079097 60%
          );
          mask-image: linear-gradient(
            to top,
            transparent 30%,
            #079097 60%
          );
          opacity: 0.7;
        }

        .flower__g-right--1 {
          animation: flower-g-right-ans 2.5s linear infinite;
        }

        .flower__g-right--2 {
          left: 5vmin;
          transform: rotateY(-180deg);
          animation: flower-g-right-ans--2 3s linear infinite;
        }

        .flower__g-right--2 .leaf {
          height: 75vmin;
          filter: blur(0.3vmin);
          opacity: 0.45;
        }

        /* =========================================================
           FRONT LEAVES
        ========================================================= */

        .flower__g-front {
          position: absolute;
          bottom: 6vmin;
          left: 50%;
          transform: translateX(-50%);
          z-index: 100;
        }

        .flower__g-front__leaf-wrapper {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform-origin: bottom center;
        }

        .flower__g-front__leaf {
          width: 9vmin;
          height: 12vmin;
          border-radius: 100% 0 0 100% / 100% 100% 0 0;
          background-image: linear-gradient(
            to bottom left,
            transparent,
            #159faa
          );
        }

        .flower__g-front__leaf-wrapper--1 {
          transform: rotate(20deg) scale(0.6);
          animation: front-leaf-1 2s 2.5s backwards;
        }

        .flower__g-front__leaf-wrapper--2 {
          transform: rotate(45deg) scale(0.7);
          animation: front-leaf-2 2s 2.4s backwards;
        }

        .flower__g-front__leaf-wrapper--3 {
          transform: rotate(70deg) scale(0.8);
          animation: front-leaf-3 2s 2.3s backwards;
        }

        .flower__g-front__leaf-wrapper--4 {
          transform: rotate(95deg) scale(0.9);
          animation: front-leaf-4 2s 2.2s backwards;
        }

        .flower__g-front__leaf-wrapper--5 {
          transform: rotate(-20deg) scale(0.6);
          animation: front-leaf-5 2s 2.5s backwards;
        }

        .flower__g-front__leaf-wrapper--6 {
          transform: rotate(-45deg) scale(0.7);
          animation: front-leaf-6 2s 2.4s backwards;
        }

        .flower__g-front__leaf-wrapper--7 {
          transform: rotate(-70deg) scale(0.8);
          animation: front-leaf-7 2s 2.3s backwards;
        }

        .flower__g-front__leaf-wrapper--8 {
          transform: rotate(-95deg) scale(0.9);
          animation: front-leaf-8 2s 2.2s backwards;
        }

        .flower__g-front__line {
          position: absolute;
          left: 50%;
          bottom: 0;
          width: 1.5vmin;
          height: 30vmin;
          background-image: linear-gradient(
            to top,
            transparent,
            #079097
          );
          transform: translateX(-50%);
        }

        /* =========================================================
           BACK LEAVES
        ========================================================= */

        .flower__g-fr {
          position: absolute;
          bottom: 6vmin;
          left: 0;
          transform-origin: bottom left;
          animation: flower-g-fr-ans 2s linear infinite;
        }

        .flower__g-fr .leaf {
          width: 30vmin;
          height: 50vmin;
          border-top-left-radius: 100%;
          border-left: 2vmin solid #35df5999;
          background-image: linear-gradient(
            to bottom,
            transparent,
            #079097 60%
          );
          -webkit-mask-image: linear-gradient(
            to top,
            transparent 30%,
            #079097 60%
          );
          mask-image: linear-gradient(
            to top,
            transparent 30%,
            #079097 60%
          );
        }

        .flower__g-fr__leaf {
          position: absolute;
          width: 9vmin;
          height: 10vmin;
          border-radius: 100% 0 0 100% / 100% 100% 0 0;
          background-image: linear-gradient(
            to bottom left,
            transparent,
            #23f0ff
          );
        }

        .flower__g-fr__leaf--1 {
          left: 2vmin;
          top: 4vmin;
          transform: rotate(55deg);
          animation: fr-leaf-1 0.5s 4.8s backwards;
        }

        .flower__g-fr__leaf--2 {
          left: -1vmin;
          top: 7vmin;
          transform: rotate(-25deg);
          animation: fr-leaf-2 0.5s 4.6s backwards;
        }

        .flower__g-fr__leaf--3 {
          left: 5vmin;
          top: 11vmin;
          transform: rotate(45deg);
          animation: fr-leaf-3 0.5s 4.4s backwards;
        }

        .flower__g-fr__leaf--4 {
          left: -3vmin;
          top: 14vmin;
          transform: rotate(-15deg);
          animation: fr-leaf-4 0.5s 4.2s backwards;
        }

        .flower__g-fr__leaf--5 {
          left: 4vmin;
          top: 18vmin;
          transform: rotate(55deg);
          animation: fr-leaf-5 0.5s 4s backwards;
        }

        .flower__g-fr__leaf--6 {
          left: 0;
          top: 22vmin;
          transform: rotate(-25deg);
          animation: fr-leaf-6 0.5s 4.2s backwards;
        }

        .flower__g-fr__leaf--7 {
          left: 6vmin;
          top: 26vmin;
          transform: rotate(45deg);
          animation: fr-leaf-7 0.5s 4s backwards;
        }

        .flower__g-fr__leaf--8 {
          left: -4vmin;
          top: 19vmin;
          transform: rotate(-15deg);
          animation: fr-leaf-8 0.5s 3.8s backwards;
        }

        /* =========================================================
           LONG GRASS
        ========================================================= */

        .long-g {
          position: absolute;
          bottom: 25vmin;
          left: -42vmin;
          transform-origin: bottom left;
        }

        .long-g .leaf {
          width: 8vmin;
          height: 12vmin;
          border-radius: 100% 0 100% 0;
          background-image: linear-gradient(
            to top,
            #079097,
            #159faa
          );
          transform-origin: bottom;
        }

        .long-g--0 {
          transform: rotate(-5deg) scale(0.8);
        }

        .long-g--1 {
          bottom: 0;
          transform: scale(0.8) rotate(-5deg);
        }

        .long-g--2 {
          transform: scale(0.75) rotate(2deg);
        }

        .long-g--3 {
          transform: scale(0.7) rotate(-3deg);
        }

        .long-g--4 {
          transform: scale(0.65) rotate(4deg);
        }

        .long-g--5 {
          transform: scale(0.75) rotate(-4deg);
        }

        .long-g--6 {
          transform: scale(0.7) rotate(3deg);
        }

        .long-g--7 {
          transform: scale(0.8) rotate(-2deg);
        }

        .long-g--1 .leaf,
        .long-g--3 .leaf,
        .long-g--5 .leaf,
        .long-g--7 .leaf {
          -webkit-mask-image: linear-gradient(
            to top,
            transparent 40%,
            #079097 80%
          );
          mask-image: linear-gradient(
            to top,
            transparent 40%,
            #079097 80%
          );
        }

        /* =========================================================
           GROW WRAPPER
        ========================================================= */

        .video-flower-stage .grow-ans {
          animation-delay: var(--d);
        }

        /* =========================================================
           KEYFRAMES
        ========================================================= */

        @keyframes blooming-flower {
          0% {
            transform: scale(0);
          }
        }

        @keyframes grow-flower-tree {
          0% {
            height: 0;
            border-radius: 1vmin;
          }
        }

        @keyframes blooming-leaf-right {
          0% {
            transform-origin: bottom left;
            transform: rotate(70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes blooming-leaf-left {
          0% {
            transform-origin: bottom right;
            transform: rotate(-70deg) rotateY(30deg) scale(0);
          }
        }

        @keyframes flower-light {
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

        @keyframes moving-flower-1 {
          0%,
          100% {
            transform: rotate(2deg);
          }

          50% {
            transform: rotate(-2deg);
          }
        }

        @keyframes moving-flower-2 {
          0%,
          100% {
            transform: rotate(18deg);
          }

          50% {
            transform: rotate(22deg);
          }
        }

        @keyframes moving-flower-3 {
          0%,
          100% {
            transform: rotate(-13deg);
          }

          50% {
            transform: rotate(-17deg);
          }
        }

        @keyframes moving-flower-4 {
          0%,
          100% {
            transform: scale(0.7) rotate(10deg);
          }

          50% {
            transform: scale(0.7) rotate(14deg);
          }
        }

        @keyframes flower-g-long-ans {
          0%,
          100% {
            transform: rotate(-30deg) rotateY(-20deg);
          }

          50% {
            transform: rotate(-32deg) rotateY(-20deg);
          }
        }

        @keyframes moving-grass {
          0%,
          100% {
            transform: rotate(-48deg) rotateY(40deg);
          }

          50% {
            transform: rotate(-50deg) rotateY(40deg);
          }
        }

        @keyframes moving-grass--2 {
          0%,
          100% {
            transform: scale(0.5)
              rotate(75deg)
              rotateX(10deg)
              rotateY(-200deg);
          }

          50% {
            transform: scale(0.5)
              rotate(79deg)
              rotateX(10deg)
              rotateY(-200deg);
          }
        }

        @keyframes growing-grass-ans {
          0% {
            transform: scale(0);
          }
        }

        @keyframes growing-grass-ans--1 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-20deg) scale(0);
          }
        }

        @keyframes growing-grass-ans--2 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }

        @keyframes growing-grass-ans--3 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-18deg)
              rotateX(-20deg)
              scale(0);
          }
        }

        @keyframes growing-grass-ans--4 {
          0% {
            transform-origin: bottom right;
            transform: rotate(2deg) scale(0);
          }
        }

        @keyframes growing-grass-ans--5 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-24deg)
              rotateX(-20deg)
              scale(0);
          }
        }

        @keyframes growing-grass-ans--6 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }

        @keyframes growing-grass-ans--7 {
          0% {
            transform-origin: bottom left;
            transform: rotate(-10deg) scale(0);
          }
        }

        @keyframes growing-grass-ans--8 {
          0% {
            transform-origin: bottom right;
            transform: rotate(10deg) scale(0);
          }
        }

        @keyframes flower-g-right-ans {
          0%,
          100% {
            transform: rotate(20deg);
          }

          50% {
            transform: rotate(22deg);
          }
        }

        @keyframes flower-g-right-ans--2 {
          0%,
          100% {
            transform: rotateY(-180deg) rotate(20deg);
          }

          50% {
            transform: rotateY(-180deg) rotate(23deg);
          }
        }

        @keyframes flower-g-fr-ans {
          0%,
          100% {
            transform: rotate(0deg);
          }

          50% {
            transform: rotate(3deg);
          }
        }

        @keyframes front-leaf-1 {
          0% {
            transform-origin: bottom left;
            transform: rotate(20deg) scale(0);
          }
        }

        @keyframes front-leaf-2 {
          0% {
            transform-origin: bottom left;
            transform: rotate(45deg) scale(0);
          }
        }

        @keyframes front-leaf-3 {
          0% {
            transform-origin: bottom left;
            transform: rotate(70deg) scale(0);
          }
        }

        @keyframes front-leaf-4 {
          0% {
            transform-origin: bottom left;
            transform: rotate(95deg) scale(0);
          }
        }

        @keyframes front-leaf-5 {
          0% {
            transform-origin: bottom right;
            transform: rotate(-20deg) scale(0);
          }
        }

        @keyframes front-leaf-6 {
          0% {
            transform-origin: bottom right;
            transform: rotate(-45deg) scale(0);
          }
        }

        @keyframes front-leaf-7 {
          0% {
            transform-origin: bottom right;
            transform: rotate(-70deg) scale(0);
          }
        }

        @keyframes front-leaf-8 {
          0% {
            transform-origin: bottom right;
            transform: rotate(-95deg) scale(0);
          }
        }

        @keyframes fr-leaf-1 {
          0% {
            transform-origin: left;
            transform: rotate(55deg) scale(0);
          }
        }

        @keyframes fr-leaf-2 {
          0% {
            transform-origin: right;
            transform: rotate(-25deg) scale(0);
          }
        }

        @keyframes fr-leaf-3 {
          0% {
            transform-origin: left;
            transform: rotate(45deg) scale(0);
          }
        }

        @keyframes fr-leaf-4 {
          0% {
            transform-origin: right;
            transform: rotate(-15deg) scale(0);
          }
        }

        @keyframes fr-leaf-5 {
          0% {
            transform-origin: left;
            transform: rotate(55deg) scale(0);
          }
        }

        @keyframes fr-leaf-6 {
          0% {
            transform-origin: right;
            transform: rotate(-25deg) scale(0);
          }
        }

        @keyframes fr-leaf-7 {
          0% {
            transform-origin: left;
            transform: rotate(45deg) scale(0);
          }
        }

        @keyframes fr-leaf-8 {
          0% {
            transform-origin: right;
            transform: rotate(-15deg) scale(0);
          }
        }

        /* =========================================================
           MOBILE
        ========================================================= */

        @media (max-width: 640px) {
          .video-flower-stage {
            transform: scale(0.68);
            transform-origin: bottom center;
          }

          .video-flower--1 {
            left: 23%;
          }

          .video-flower--2 {
            left: 48%;
          }

          .video-flower--3 {
            left: 70%;
          }

          .video-flower--4 {
            left: 88%;
          }
        }
      `}</style>
    </>
  )
}
