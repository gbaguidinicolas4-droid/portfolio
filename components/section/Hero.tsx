"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Download,
} from "lucide-react";

export default function Hero() {
  // Détecte les petits écrans pour ne pas monter l'illustration animée
  // (réservée à sm et plus) sur les téléphones.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateIsMobile);
    };
  }, []);

  return (
    <section
      id="home"
      className="
        relative
        min-h-[100svh]
        sm:min-h-screen
        w-full
        overflow-hidden
        bg-white
        text-black
   
      "
    >
      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

      <div
        className="
          mx-auto
          flex
          min-h-[100svh]
          sm:min-h-screen
          w-full
          max-w-[1440px]
          flex-col
          justify-between
          px-5
          pb-0
          pt-28
          sm:px-8
          lg:px-12
          xl:px-16
               lg:-translate-y-20
        "
      >
        {/* =================================================
            MAIN HERO
        ================================================== */}

        <div
          className="
            grid
            flex-1
            items-center
            gap-8
            lg:grid-cols-[1.15fr_0.85fr]
            lg:gap-8
          "
        >
          {/* =================================================
              LEFT SIDE
          ================================================== */}

          <div
            className="
              relative
              z-10
              flex
              min-w-0
              flex-col
              justify-center
            "
          >
            {/* =================================================
                MOBILE PROFILE IMAGE
                Visible uniquement sur mobile
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mb-5
                flex
                items-center
                sm:hidden
              "
            >
              <div
                className="
                  relative
                  h-[82px]
                  w-[82px]
                  overflow-hidden
                  rounded-full
                  border-2
                  border-[#CBFB45]
                  bg-[#CBFB45]/10
                  shadow-[0_0_25px_rgba(203,251,69,0.22)]
                "
              >
                <img
                  src="/profile3.png"
                  alt="Nicolas Gbaguidi"
                  className="
                    h-full
                    w-full
                    object-cover
                    object-top
                    grayscale-[20%]
                  "
                />
              </div>
            </motion.div>

            {/* =================================================
                INTRO
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.1,
              }}
              className="
                mb-5
                flex
                items-center
                gap-3
                sm:mb-6
              "
            >
              <span
                className="
                  block
                  h-[2px]
                  w-8
                  shrink-0
                  rounded-full
                  bg-[#CBFB45]
                  sm:w-10
                "
              />

              <span
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-black/50
                  sm:text-[11px]
                  sm:tracking-[0.25em]
                "
              >
                Hello, I'm
              </span>
            </motion.div>

            {/* =================================================
                FIRST NAME
            ================================================== */}

            <div className="overflow-hidden">
              <motion.h1
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  max-w-full
                  break-words
                  text-[clamp(3.7rem,18vw,8.5rem)]
                  font-semibold
                  leading-[0.82]
                  tracking-[-0.075em]
                  text-gray-400
                  sm:whitespace-nowrap
                  sm:text-[clamp(4rem,8vw,8.5rem)]
                "
              >
                Nicolas
              </motion.h1>
            </div>

            {/* =================================================
                LAST NAME
            ================================================== */}

            <div
              className="
                overflow-visible
                pb-2
                sm:pb-3
              "
            >
              <motion.h1
                initial={{
                  y: "100%",
                }}
                animate={{
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  max-w-full
                  break-words
                  text-[clamp(3.25rem,16vw,8.5rem)]
                  font-semibold
                  leading-[0.95]
                  tracking-[-0.07em]
                  sm:whitespace-nowrap
                  sm:text-[clamp(4rem,8vw,8.5rem)]
                  sm:leading-[0.92]
                "
              >
                <span className="text-[#CBFB45]">Gbaguidi</span>
                <span className="text-black">.</span>
              </motion.h1>
            </div>

            {/* =================================================
                POSITION
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="
                mt-6
                sm:mt-8
              "
            >
              <h2
                className="
                  max-w-[620px]
                  text-[17px]
                  font-medium
                  leading-[1.35]
                  tracking-tight
                  sm:text-xl
                  sm:leading-tight
                  md:text-2xl
                "
              >
                Network & Telecommunications
                <span className="text-black/30"> · </span>

                <br className="sm:hidden" />

                <span>
                  Front-end Developer
                </span>
              </h2>
            </motion.div>

            {/* =================================================
                DESCRIPTION
            ================================================== */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.65,
              }}
              className="
                mt-4
                max-w-[590px]
                text-[13px]
                leading-6
                text-black/55
                sm:mt-5
                sm:text-[15px]
                sm:leading-7
              "
            >
              I’m a technology enthusiast focused on building reliable
              networks, modern web interfaces, and digital experiences.
              My background in networking and telecommunications allows me
              to approach development with both a technical and
              infrastructure-oriented mindset.
            </motion.p>

            {/* =================================================
                BUTTONS
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.75,
              }}
              className="
                mt-7
                flex
                w-full
                flex-col
                gap-3
                sm:mt-8
                sm:w-auto
                sm:flex-row
                sm:flex-wrap
                sm:items-center
              "
            >
              {/* PROJECTS */}

              <a
                href="/Projects"
                className="
                  group
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-gray-400
                  px-5
                  py-3
                  text-[13px]
                  font-medium
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#CBFB45]
                  hover:text-black
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Explore my work

                <ArrowUpRight
                  size={16}
                  className="
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>

              {/* CV */}

              <a
                href="/cv"
                className="
                  group
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-black/10
                  bg-black/[0.02]
                  px-5
                  py-3
                  text-[13px]
                  font-medium
                  text-black
                  transition-all
                  duration-300
                  hover:border-black
                  hover:bg-black
                  hover:text-white
                  sm:w-auto
                  sm:px-6
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Download CV

                <Download
                  size={15}
                  className="
                    shrink-0
                    transition-transform
                    duration-300
                    group-hover:translate-y-0.5
                  "
                />
              </a>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT SIDE / DESKTOP VISUAL AREA
          ================================================== */}

          {!isMobile && (
          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              hidden
              min-h-[390px]
              items-center
              justify-center
              sm:flex
              sm:min-h-[500px]
              lg:min-h-[600px]
              lg:translate-y-4
              xl:translate-y-6
            "
          >
            {/* =================================================
                MAIN LIME GLOW
            ================================================== */}

            <motion.div
              animate={{
                opacity: [0.45, 0.7, 0.45],
                scale: [0.96, 1.04, 0.96],
              }}
              transition={{
                duration: 5,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[280px]
                w-[280px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#CBFB45]/20
                blur-[90px]
                sm:h-[380px]
                sm:w-[380px]
                sm:blur-[105px]
                lg:h-[500px]
                lg:w-[500px]
                lg:bg-[#CBFB45]/25
                lg:blur-[130px]
              "
            />

            {/* =================================================
                INNER LIME LIGHT
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                left-1/2
                top-1/2
                h-[160px]
                w-[160px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#CBFB45]/15
                blur-[55px]
                sm:h-[220px]
                sm:w-[220px]
                sm:blur-[70px]
                lg:h-[320px]
                lg:w-[320px]
                lg:bg-[#CBFB45]/20
                lg:blur-[90px]
              "
            />

            {/* =================================================
                ANIMATED NETWORK / DATA FLOW
                Visualisation de la circulation des données
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                delay: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                h-[700px]
                w-[390px]
                sm:h-[790px]
                sm:w-[460px]
                lg:h-[860px]
                lg:w-[540px]
              "
            >
              <svg
                viewBox="0 0 540 460"
                className="
                  h-full
                  w-full
                  overflow-visible
                "
              >
                <defs>
                  <filter
                    id="networkGlow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur
                      stdDeviation="4"
                      result="blur"
                    />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter
                    id="softNetworkGlow"
                    x="-100%"
                    y="-100%"
                    width="300%"
                    height="300%"
                  >
                    <feGaussianBlur
                      stdDeviation="9"
                      result="blur"
                    />

                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* =================================================
                    NETWORK CONNECTIONS
                ================================================== */}

                <g
                  fill="none"
                  stroke="rgba(0,0,0,0.10)"
                  strokeWidth="1.5"
                >
                  <motion.path
                    d="M270 230 L105 95"
                    animate={{
                      opacity: [0.25, 0.65, 0.25],
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.path
                    d="M270 230 L435 95"
                    animate={{
                      opacity: [0.25, 0.65, 0.25],
                    }}
                    transition={{
                      duration: 3.1,
                      delay: 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.path
                    d="M270 230 L95 365"
                    animate={{
                      opacity: [0.25, 0.65, 0.25],
                    }}
                    transition={{
                      duration: 3.4,
                      delay: 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.path
                    d="M270 230 L445 365"
                    animate={{
                      opacity: [0.25, 0.65, 0.25],
                    }}
                    transition={{
                      duration: 3,
                      delay: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.path
                    d="M105 95 L435 95"
                    animate={{
                      opacity: [0.15, 0.45, 0.15],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.path
                    d="M95 365 L445 365"
                    animate={{
                      opacity: [0.15, 0.45, 0.15],
                    }}
                    transition={{
                      duration: 4.5,
                      delay: 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.path
                    d="M105 95 L95 365"
                    animate={{
                      opacity: [0.12, 0.4, 0.12],
                    }}
                    transition={{
                      duration: 4.2,
                      delay: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  <motion.path
                    d="M435 95 L445 365"
                    animate={{
                      opacity: [0.12, 0.4, 0.12],
                    }}
                    transition={{
                      duration: 4.2,
                      delay: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </g>

                {/* =================================================
                    SECONDARY NETWORK LINES
                ================================================== */}

                <g
                  fill="none"
                  stroke="#CBFB45"
                  strokeWidth="1"
                  strokeDasharray="4 7"
                  opacity="0.35"
                >
                  <path d="M270 230 L105 95" />
                  <path d="M270 230 L435 95" />
                  <path d="M270 230 L95 365" />
                  <path d="M270 230 L445 365" />
                </g>

                {/* =================================================
                    DATA PACKETS
                    Flux continu des données
                ================================================== */}

                <g
                  fill="#CBFB45"
                  filter="url(#networkGlow)"
                >
                  {/* Centre → top left */}

                  <motion.circle
                    r="4"
                    animate={{
                      cx: [270, 220, 165, 105],
                      cy: [230, 190, 145, 95],
                    }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Top left → centre */}

                  <motion.circle
                    r="3"
                    animate={{
                      cx: [105, 165, 220, 270],
                      cy: [95, 145, 190, 230],
                    }}
                    transition={{
                      duration: 2.7,
                      delay: 1.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Centre → top right */}

                  <motion.circle
                    r="4"
                    animate={{
                      cx: [270, 325, 380, 435],
                      cy: [230, 185, 140, 95],
                    }}
                    transition={{
                      duration: 2.8,
                      delay: 0.4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Top right → centre */}

                  <motion.circle
                    r="3"
                    animate={{
                      cx: [435, 380, 325, 270],
                      cy: [95, 140, 185, 230],
                    }}
                    transition={{
                      duration: 2.5,
                      delay: 1.6,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Centre → bottom left */}

                  <motion.circle
                    r="4"
                    animate={{
                      cx: [270, 215, 155, 95],
                      cy: [230, 275, 320, 365],
                    }}
                    transition={{
                      duration: 2.9,
                      delay: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Bottom left → centre */}

                  <motion.circle
                    r="3"
                    animate={{
                      cx: [95, 155, 215, 270],
                      cy: [365, 320, 275, 230],
                    }}
                    transition={{
                      duration: 3.1,
                      delay: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Centre → bottom right */}

                  <motion.circle
                    r="4"
                    animate={{
                      cx: [270, 330, 390, 445],
                      cy: [230, 275, 320, 365],
                    }}
                    transition={{
                      duration: 2.6,
                      delay: 1.1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Bottom right → centre */}

                  <motion.circle
                    r="3"
                    animate={{
                      cx: [445, 390, 330, 270],
                      cy: [365, 320, 275, 230],
                    }}
                    transition={{
                      duration: 3,
                      delay: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Top left → top right */}

                  <motion.circle
                    r="2.5"
                    animate={{
                      cx: [105, 190, 275, 355, 435],
                      cy: [95, 95, 95, 95, 95],
                    }}
                    transition={{
                      duration: 4,
                      delay: 0.7,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />

                  {/* Bottom left → bottom right */}

                  <motion.circle
                    r="2.5"
                    animate={{
                      cx: [95, 180, 270, 355, 445],
                      cy: [365, 365, 365, 365, 365],
                    }}
                    transition={{
                      duration: 4.5,
                      delay: 1.4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </g>

                {/* =================================================
                    CENTRAL ROUTER / SWITCH
                ================================================== */}

                <motion.g
                  animate={{
                    scale: [1, 1.04, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    transformOrigin: "270px 230px",
                  }}
                >
                  <circle
                    cx="270"
                    cy="230"
                    r="46"
                    fill="rgba(203,251,69,0.06)"
                    stroke="rgba(203,251,69,0.25)"
                    strokeWidth="1"
                  />

                  <circle
                    cx="270"
                    cy="230"
                    r="31"
                    fill="white"
                    stroke="rgba(0,0,0,0.10)"
                    strokeWidth="1.5"
                  />

                  <circle
                    cx="270"
                    cy="230"
                    r="17"
                    fill="#CBFB45"
                    opacity="0.9"
                    filter="url(#softNetworkGlow)"
                  />

                  <circle
                    cx="270"
                    cy="230"
                    r="8"
                    fill="#CBFB45"
                  />

                  <circle
                    cx="270"
                    cy="230"
                    r="4"
                    fill="white"
                  />
                </motion.g>

                {/* =================================================
                    NETWORK NODES
                ================================================== */}

                <g>
                  {/* Top left */}

                  <motion.g
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      transformOrigin: "105px 95px",
                    }}
                  >
                    <circle
                      cx="105"
                      cy="95"
                      r="17"
                      fill="white"
                      stroke="rgba(0,0,0,0.10)"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="105"
                      cy="95"
                      r="6"
                      fill="#CBFB45"
                    />
                  </motion.g>

                  {/* Top right */}

                  <motion.g
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.7,
                      delay: 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      transformOrigin: "435px 95px",
                    }}
                  >
                    <circle
                      cx="435"
                      cy="95"
                      r="17"
                      fill="white"
                      stroke="rgba(0,0,0,0.10)"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="435"
                      cy="95"
                      r="6"
                      fill="#CBFB45"
                    />
                  </motion.g>

                  {/* Bottom left */}

                  <motion.g
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.7,
                      delay: 0.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      transformOrigin: "95px 365px",
                    }}
                  >
                    <circle
                      cx="95"
                      cy="365"
                      r="17"
                      fill="white"
                      stroke="rgba(0,0,0,0.10)"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="95"
                      cy="365"
                      r="6"
                      fill="#CBFB45"
                    />
                  </motion.g>

                  {/* Bottom right */}

                  <motion.g
                    animate={{
                      scale: [1, 1.08, 1],
                    }}
                    transition={{
                      duration: 2.7,
                      delay: 1.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{
                      transformOrigin: "445px 365px",
                    }}
                  >
                    <circle
                      cx="445"
                      cy="365"
                      r="17"
                      fill="white"
                      stroke="rgba(0,0,0,0.10)"
                      strokeWidth="1.5"
                    />

                    <circle
                      cx="445"
                      cy="365"
                      r="6"
                      fill="#CBFB45"
                    />
                  </motion.g>
                </g>

                {/* =================================================
                    OUTER SIGNAL RINGS
                ================================================== */}

                <motion.circle
                  cx="270"
                  cy="230"
                  r="65"
                  fill="none"
                  stroke="#CBFB45"
                  strokeWidth="1"
                  opacity="0.25"
                  animate={{
                    r: [45, 75, 45],
                    opacity: [0.35, 0, 0.35],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />

                <motion.circle
                  cx="270"
                  cy="230"
                  r="85"
                  fill="none"
                  stroke="#CBFB45"
                  strokeWidth="1"
                  opacity="0.15"
                  animate={{
                    r: [55, 95, 55],
                    opacity: [0.25, 0, 0.25],
                  }}
                  transition={{
                    duration: 3,
                    delay: 1,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </svg>
            </motion.div>

            {/* =================================================
                CURRENTLY CARD
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="
                absolute
                right-[4%]
                top-[16%]
                z-20
                hidden
                w-[180px]
                rounded-[20px]
                border
                border-black/10
                bg-white/80
                p-4
                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                backdrop-blur-xl
                sm:block
                sm:w-[190px]
                lg:right-[2%]
                lg:top-[18%]
              "
            >
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-black/40
                "
              >
                Currently
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span
                  className="
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    bg-[#CBFB45]
                    shadow-[0_0_12px_rgba(203,251,69,0.9)]
                  "
                />

                <span className="text-sm font-medium">
                  Building & learning
                </span>
              </div>
            </motion.div>

            {/* =================================================
                SMALL LIME ACCENT
            ================================================== */}

            <motion.div
              animate={{
                y: [0, -6, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
              }}
              className="
                absolute
                left-[14%]
                top-[28%]
                z-20
                h-2.5
                w-2.5
                rounded-full
                bg-[#CBFB45]
                shadow-[0_0_25px_rgba(203,251,69,0.8)]
                sm:h-3
                sm:w-3
              "
            />

            {/* =================================================
                DECORATIVE LINES
            ================================================== */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[18%]
                left-[18%]
                h-px
                w-[120px]
                bg-black/10
                sm:w-[160px]
                lg:w-[190px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-[14%]
                bottom-[24%]
                h-[80px]
                w-px
                bg-black/10
                sm:h-[110px]
                lg:h-[140px]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                left-[18%]
                bottom-[18%]
                h-1.5
                w-1.5
                rounded-full
                bg-black/20
              "
            />
          </motion.div>
          )}
        </div>

        {/* =====================================================
            MORE ABOUT ME
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.9,
          }}
          className="
            relative
            z-20
            mb-10
            mt-8
            border-t
            border-black/10
            pt-6
            sm:mt-10
          "
        >
          <div
            className="
              grid
              gap-6
              md:grid-cols-[0.8fr_2fr_0.8fr]
              md:items-center
            "
          >
            {/* LABEL */}

            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.22em]
                  text-black/40
                "
              >
                More about me
              </p>

              <div className="mt-2 flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    shrink-0
                    rounded-full
                    bg-[#CBFB45]
                  "
                />

                <span className="text-xs font-medium text-black/60">
                  Always curious. Always building.
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}

            <p
              className="
                max-w-[650px]
                text-[13px]
                leading-6
                text-black/55
                sm:text-sm
              "
            >
              I enjoy combining infrastructure and creativity to turn ideas
              into useful digital products. From configuring networks and
              exploring systems to designing responsive interfaces and
              developing web applications, I’m constantly expanding my
              technical perspective through real-world projects.
            </p>

            {/* DISCOVER */}

            <a
              href="#about"
              className="
                group
                flex
                items-center
                gap-3
                justify-self-start
                md:justify-self-end
              "
            >
              <span className="text-xs font-medium text-black/60">
                Discover more
              </span>

              <span
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/10
                  transition-all
                  duration-300
                  group-hover:border-black
                  group-hover:bg-black
                  group-hover:text-white
                "
              >
                <ArrowDown size={15} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}