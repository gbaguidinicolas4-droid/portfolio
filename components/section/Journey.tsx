
"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Award,
  BriefcaseBusiness,
  GraduationCap,
  Radio,
  Sparkles,
} from "lucide-react";

type JourneyItemData = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  icon: typeof GraduationCap;
  side: "left" | "right";
};

const journey: JourneyItemData[] = [
  {
    year: "2023-2024",
    title: "Baccalauréat",
    subtitle: "The beginning.",
    description:
      "The beginning of my academic journey and the first step toward a future shaped by technology, curiosity, and continuous learning. I obtained my Baccalauréat Série C, laying the foundation for my studies in technology, computer science, and networks.",
    icon: GraduationCap,
    side: "left",
  },

  {
    year: "2024-2025",
    title: "Première année — GT-TIC",
    subtitle: "Discovering technology.",
    description:
      "I began my studies in Génie Télécom — Technologies de l’Information et de la Communication, discovering the fundamentals of networking, telecommunications and information technologies.",
    icon: Radio,
    side: "right",
  },

  {
    year: "Juillet — mi-septembre 2024",
    title: "Stage — Cour constitutionnelle",
    subtitle: "First professional experience.",
    description:
      "My first professional experience took place at the Cour constitutionnelle du Bénin. This internship allowed me to discover a professional environment, apply my technical knowledge and gain valuable experience in the field of information technology.",
    icon: BriefcaseBusiness,
    side: "right",
  },

  {
    year: "2025-2026",
    title: "Deuxième année — GT-TIC",
    subtitle: "Going deeper.",
    description:
      "My understanding of networks, telecommunications and technical systems became deeper through practical work, experimentation and academic projects.",
    icon: Radio,
    side: "left",
  },

  {
    year: "2026 — Aujourd'hui",
    title: "Stage — Soft Vodooz",
    subtitle: "Front-end development.",
    description:
      "I am currently continuing my professional journey at Soft Vodooz as a Front-end Developer intern. I work on modern, responsive and interactive interfaces while strengthening my skills in web development and software engineering.",
    icon: BriefcaseBusiness,
    side: "right",
  },

  {
    year: "En cours",
    title: "Licence professionnelle",
    subtitle: "Networks & Telecommunications.",
    description:
      "An important milestone in my academic journey. I am currently pursuing a Licence professionnelle in Réseaux Informatiques et Télécommunications, strengthening my knowledge of networks, telecommunications, systems, and information technologies.",
    icon: Award,
    side: "left",
  },
];



export default function Journey() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 75%"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.3,
  });

  const lineHeight = useTransform(
    smoothProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-5
        py-32
        text-black
        sm:px-8
        sm:py-40
        lg:px-12
        xl:px-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-220px]
          top-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#CBFB45]/10
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-250px]
          top-[55%]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[#CBFB45]/10
          blur-[160px]
        "
      />

      {/* =====================================================
          CONTAINER
      ====================================================== */}

      <div className="relative mx-auto max-w-[1400px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.header
          initial={{
            opacity: 0,
            y: 35,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-[900px]"
        >
          {/* LABEL */}

          <div className="mb-7 flex items-center gap-3">
            <motion.span
              animate={{
                scale: [1, 1.4, 1],
                opacity: [0.65, 1, 0.65],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#CBFB45]
                shadow-[0_0_14px_rgba(203,251,69,0.9)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-black/40
                sm:text-[11px]
              "
            >
              My Journey
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              text-[clamp(3.6rem,9vw,8.5rem)]
              font-semibold
              leading-[0.84]
              tracking-[-0.075em]
            "
          >
            The path that
            <br />
            <span className="text-[#CBFB45]">
              shaped me.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              max-w-[680px]
              text-[14px]
              leading-7
              text-black/50
              sm:mt-10
              sm:text-[16px]
              sm:leading-8
            "
          >
            From my first academic steps to my first professional experiences
            and my current work in front-end development, every stage has
            shaped the way I understand technology, solve problems and build
            digital experiences.
          </p>
        </motion.header>

        {/* =====================================================
            JOURNEY TIMELINE
        ====================================================== */}

        <div className="relative mt-32 sm:mt-40">

          {/* =================================================
              CENTRAL LINE — DESKTOP
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-black/10
              lg:block
            "
          />

          {/* ANIMATED LINE */}

          <motion.div
            style={{
              height: lineHeight,
            }}
            className="
              absolute
              left-1/2
              top-0
              hidden
              w-[2px]
              -translate-x-1/2
              bg-[#CBFB45]
              shadow-[0_0_15px_rgba(203,251,69,0.5)]
              lg:block
            "
          />

          {/* =================================================
              MOBILE LINE
          ================================================== */}

          <div
            className="
              absolute
              bottom-0
              left-[9px]
              top-0
              w-px
              bg-black/10
              lg:hidden
            "
          />

          <motion.div
            style={{
              height: lineHeight,
            }}
            className="
              absolute
              left-[9px]
              top-0
              w-[2px]
              bg-[#CBFB45]
              shadow-[0_0_12px_rgba(203,251,69,0.5)]
              lg:hidden
            "
          />

          {/* =================================================
              JOURNEY ITEMS
          ================================================== */}

          <div className="space-y-32 sm:space-y-40 lg:space-y-48">

            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <JourneyItem
                  key={`${item.year}-${item.title}`}
                  item={item}
                  index={index}
                  Icon={Icon}
                />
              );
            })}

            {/* =================================================
                NOW
            ================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.35,
              }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                min-h-[520px]
                lg:min-h-[620px]
              "
            >
              {/* BIG YEAR */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 1,
                }}
                className="
                  pointer-events-none
                  absolute
                  -top-12
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  text-[9rem]
                  font-semibold
                  leading-none
                  tracking-[-0.09em]
                  text-black/[0.035]
                  sm:text-[15rem]
                  lg:text-[19rem]
                "
              >
                NOW
              </motion.div>

              {/* CENTER POINT */}

              <div
                className="
                  absolute
                  left-[9px]
                  top-2
                  z-20
                  lg:left-1/2
                  lg:-translate-x-1/2
                "
              >
                <motion.div
                  initial={{
                    scale: 0,
                  }}
                  whileInView={{
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15,
                  }}
                  className="
                    relative
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-[#CBFB45]
                    shadow-[0_0_25px_rgba(203,251,69,0.8)]
                  "
                >
                  <span className="h-2 w-2 rounded-full bg-black" />
                </motion.div>
              </div>

              {/* CONTENT */}

              <div
                className="
                  pl-12
                  lg:ml-auto
                  lg:w-[46%]
                  lg:pl-0
                  lg:pt-2
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    text-[#CBFB45]
                  "
                >
                  <Sparkles size={18} />

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      text-black/40
                    "
                  >
                    2026 · Right now
                  </span>
                </div>

                <h3
                  className="
                    mt-6
                    text-[clamp(3rem,7vw,7rem)]
                    font-semibold
                    leading-[0.85]
                    tracking-[-0.075em]
                  "
                >
                  Still
                  <br />
                  <span className="text-[#CBFB45]">
                    building.
                  </span>
                </h3>

                <p
                  className="
                    mt-7
                    max-w-[560px]
                    text-[14px]
                    leading-7
                    text-black/50
                    sm:text-[15px]
                    sm:leading-8
                  "
                >
                  Today, I continue to grow at the intersection of networking,
                  telecommunications and software development. I am currently
                  gaining professional experience in front-end development at
                  Soft Vodooz while continuing to build, experiment and learn.
                </p>

                {/* CURRENT FOCUS */}

                <div className="mt-10 flex flex-wrap gap-2">
                  {[
                    "Networking",
                    "Telecommunications",
                    "Front-end Development",
                    "Web Development",
                    "Continuous Learning",
                  ].map((item) => (
                    <span
                      key={item}
                      className="
                        rounded-full
                        border
                        border-black/10
                        bg-[#F7F7F4]
                        px-4
                        py-2
                        text-[10px]
                        font-medium
                        text-black/55
                        transition-all
                        duration-300
                        hover:border-[#CBFB45]
                        hover:bg-[#CBFB45]/10
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-32
            border-t
            border-black/10
            pt-8
            sm:mt-40
            sm:flex
            sm:items-center
            sm:justify-between
          "
        >
          <p
            className="
              text-[11px]
              font-medium
              uppercase
              tracking-[0.2em]
              text-black/35
            "
          >
            The journey continues.
          </p>

          <motion.div
            animate={{
              x: [0, 8, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              mt-4
              flex
              items-center
              gap-3
              text-sm
              font-medium
              sm:mt-0
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#CBFB45]" />

            Keep moving forward
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* =========================================================
   JOURNEY ITEM
========================================================= */

function JourneyItem({
  item,
  index,
  Icon,
}: {
  item: {
    year: string;
    title: string;
    subtitle: string;
    description: string;
    icon: typeof GraduationCap;
    side: "left" | "right";
  };
  index: number;
  Icon: typeof GraduationCap;
}) {
  const isLeft = item.side === "left";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 70,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.9,
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        min-h-[400px]
        lg:min-h-[430px]
      "
    >
      {/* =====================================================
          BIG YEAR
      ====================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -40 : 40,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
        }}
        className={`
          pointer-events-none
          absolute
          top-[-50px]
          hidden
          text-[10rem]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-black/[0.035]
          sm:text-[14rem]
          lg:block
          ${
            isLeft
              ? "right-[53%]"
              : "left-[53%]"
          }
        `}
      >
        {item.year}
      </motion.div>

      {/* =====================================================
          CENTER POINT
      ====================================================== */}

      <div
        className="
          absolute
          left-[9px]
          top-2
          z-20
          lg:left-1/2
          lg:-translate-x-1/2
        "
      >
        <motion.div
          initial={{
            scale: 0,
          }}
          whileInView={{
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            border
            border-[#CBFB45]
            bg-white
            shadow-[0_0_20px_rgba(203,251,69,0.45)]
          "
        >
          <span
            className="
              h-2
              w-2
              rounded-full
              bg-[#CBFB45]
            "
          />
        </motion.div>
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className={`
          pl-12
          lg:absolute
          lg:top-0
          lg:w-[43%]
          lg:pl-0
          ${
            isLeft
              ? "lg:right-[57%] lg:text-right"
              : "lg:left-[57%] lg:text-left"
          }
        `}
      >
        {/* YEAR */}

        <div
          className={`
            flex
            items-center
            gap-3
            lg:gap-4
            ${
              isLeft
                ? "lg:justify-end"
                : "lg:justify-start"
            }
          `}
        >
          <span
            className="
              text-[11px]
              font-semibold
              tracking-[0.2em]
              text-black/30
            "
          >
            {item.year}
          </span>

          <span className="h-px w-8 bg-[#CBFB45]" />

          <Icon
            size={16}
            className="text-black/35"
            strokeWidth={1.7}
          />
        </div>

        {/* TITLE */}

        <h3
          className="
            mt-5
            text-[clamp(2.2rem,5vw,4.8rem)]
            font-semibold
            leading-[0.88]
            tracking-[-0.065em]
          "
        >
          {item.title}
          <span className="text-[#CBFB45]">.</span>
        </h3>

        {/* SUBTITLE */}

        <p
          className="
            mt-4
            text-sm
            font-medium
            text-black/60
            sm:text-base
          "
        >
          {item.subtitle}
        </p>

        {/* DESCRIPTION */}

        <p
          className={`
            mt-5
            max-w-[560px]
            text-[13px]
            leading-7
            text-black/45
            sm:text-[14px]
            sm:leading-8
            ${
              isLeft
                ? "lg:ml-auto"
                : ""
            }
          `}
        >
          {item.description}
        </p>

        {/* SMALL PROGRESS LINE */}

        <motion.div
          initial={{
            scaleX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`
            mt-7
            h-px
            w-20
            origin-left
            bg-[#CBFB45]
            ${
              isLeft
                ? "lg:ml-auto lg:origin-right"
                : ""
            }
          `}
        />
      </div>
    </motion.div>
  );
}