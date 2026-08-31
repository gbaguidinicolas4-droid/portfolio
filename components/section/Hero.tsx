"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Framer Motion",
  "REST API",
  "Git",
  "GitHub",
  "Linux",
  "Cisco",
  "TCP/IP",
  "Networking",
  "Telecommunications",
];

export default function Hero() {
  const controls = useAnimation();
  const animationRef = useRef<ReturnType<typeof controls.start> | null>(null);

  useEffect(() => {
    animationRef.current = controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 35,
        ease: "linear",
        repeat: Infinity,
      },
    });

    return () => {
      controls.stop();
    };
  }, [controls]);

  const moveLeft = async () => {
    controls.stop();

    await controls.start({
      x: "-20%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    });

    animationRef.current = controls.start({
      x: ["-20%", "-50%"],
      transition: {
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  const moveRight = async () => {
    controls.stop();

    await controls.start({
      x: "0%",
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    });

    animationRef.current = controls.start({
      x: ["0%", "-50%"],
      transition: {
        duration: 35,
        ease: "linear",
        repeat: Infinity,
      },
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
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
          min-h-screen
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
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-4
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
            {/* INTRO */}

           

            {/* =================================================
                MOBILE PROFILE IMAGE
                Visible uniquement sur mobile
                et placée juste sous les traits du menu.
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
                href="#projects"
                className="
                  group
                  flex
                  min-h-[48px]
                  w-full
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-black
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
                href="/cv.pdf"
                download
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
              RIGHT SIDE / PHOTO

              IMPORTANT :
              La photo reste visible sur desktop/tablette.
              Sur mobile elle est remplacée par le petit
              cercle placé au-dessus de Nicolas.
          ================================================== */}

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
              items-end
              justify-center
              sm:flex
              sm:min-h-[500px]
              lg:min-h-[720px]
              lg:-translate-x-4
              xl:-translate-x-8
            "
          >
            {/* =================================================
                MAIN LIME GLOW
            ================================================== */}

            <motion.div
              animate={{
                opacity: [0.55, 0.75, 0.55],
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
                top-[42%]
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#CBFB45]/20
                blur-[90px]
                sm:h-[430px]
                sm:w-[430px]
                sm:blur-[110px]
                lg:top-[38%]
                lg:h-[620px]
                lg:w-[620px]
                lg:bg-[#CBFB45]/25
                lg:blur-[145px]
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
                top-[42%]
                h-[190px]
                w-[190px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#CBFB45]/15
                blur-[60px]
                sm:h-[260px]
                sm:w-[260px]
                sm:blur-[75px]
                lg:top-[40%]
                lg:h-[400px]
                lg:w-[400px]
                lg:bg-[#CBFB45]/20
                lg:blur-[100px]
              "
            />

            {/* =================================================
                PHOTO
            ================================================== */}

            <div
              className="
                relative
                z-10
                flex
                h-full
                w-full
                items-end
                justify-center
                overflow-visible
                lg:-translate-y-20
                xl:-translate-y-28
              "
            >
              <img
                src="/profile3.png"
                alt="Nicolas Gbaguidi"
                className="
                  relative
                  z-10
                  h-auto
                  w-auto
                  max-w-[92%]
                  object-contain
                  object-bottom
                  grayscale-[20%]
                  drop-shadow-[0_18px_32px_rgba(203,251,69,0.22)]
                  transition-transform
                  duration-700

                  sm:max-h-[620px]
                  sm:max-w-[90%]

                  lg:max-h-[1000px]
                  lg:max-w-none
                "
              />
            </div>

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
                right-0
                top-[18%]
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
                lg:translate-y-6
                lg:-translate-x-2
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
                left-[8%]
                top-[24%]
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
          </motion.div>
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

      {/* =====================================================
          SKILLS MARQUEE
      ====================================================== */}

      <div
        className="
          relative
          flex
          min-h-[120px]
          items-end
          justify-center
        "
      >
        {/* LABEL */}

        <div
          className="
            absolute
            bottom-[86px]
            left-1/2
            flex
            -translate-x-1/2
            items-center
            gap-2
            whitespace-nowrap
          "
        >
          <span
            className="
              h-1.5
              w-1.5
              shrink-0
              rounded-full
              bg-[#CBFB45]
              shadow-[0_0_8px_rgba(203,251,69,0.8)]
            "
          />

          <span
            className="
              text-[9px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-black/40
            "
          >
            Technical Skills
          </span>
        </div>

        {/* =================================================
            SKILLS BAR
        ================================================== */}

        <div
          className="
            absolute
            bottom-6
            left-1/2
            z-30
            flex
            h-14
            w-[calc(100%-2rem)]
            max-w-[1200px]
            -translate-x-1/2
            overflow-hidden
            rounded-full
            border
            border-black/10
            bg-[#F7F7F4]/95
            shadow-[0_8px_30px_rgba(0,0,0,0.05)]
            backdrop-blur-md
            sm:w-[calc(100%-3rem)]
            lg:w-[calc(100%-5rem)]
          "
        >
          {/* SCROLLING SKILLS */}

          <div
            className="
              relative
              min-w-0
              flex-1
              overflow-hidden
            "
          >
            <motion.div
              animate={controls}
              className="
                flex
                h-full
                w-max
                items-center
              "
            >
              {[...skills, ...skills].map((skill, index) => (
                <div
                  key={`${skill}-${index}`}
                  className="
                    flex
                    shrink-0
                    items-center
                  "
                >
                  <span
                    className="
                      px-5
                      text-xs
                      font-medium
                      tracking-tight
                      text-black/65
                      transition-colors
                      duration-300
                      hover:text-black
                      sm:px-6
                      sm:text-sm
                    "
                  >
                    {skill}
                  </span>

                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#CBFB45]
                      shadow-[0_0_8px_rgba(203,251,69,0.7)]
                    "
                  />
                </div>
              ))}
            </motion.div>

            {/* FADE LEFT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-0
                z-10
                w-8
                bg-gradient-to-r
                from-[#F7F7F4]
                to-transparent
                sm:w-10
              "
            />

            {/* FADE RIGHT */}

            <div
              className="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                z-10
                w-8
                bg-gradient-to-l
                from-[#F7F7F4]
                to-transparent
                sm:w-10
              "
            />
          </div>

          {/* =================================================
              CONTROLS
          ================================================== */}

          <div
            className="
              relative
              z-20
              hidden
              h-full
              shrink-0
              items-center
              gap-2
              border-l
              border-black/10
              bg-[#F7F7F4]
              px-3
              md:flex
            "
          >
            <button
              type="button"
              onClick={moveRight}
              aria-label="Scroll skills left"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-white
                text-black
                transition-all
                duration-300
                hover:border-black
                hover:bg-black
                hover:text-white
              "
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={moveLeft}
              aria-label="Scroll skills right"
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-black/10
                bg-white
                text-black
                transition-all
                duration-300
                hover:border-black
                hover:bg-black
                hover:text-white
              "
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}