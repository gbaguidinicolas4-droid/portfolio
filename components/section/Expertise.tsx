"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Code2,
  GitBranch,
  Globe,
  Laptop,
  Network,
  Radio,
  Server,
  Terminal,
  Wifi,
  Zap,
} from "lucide-react";

const expertiseGroups = [
  {
    number: "01",
    title: "Frontend",
    subtitle: "Modern web development",
    icon: Code2,
    description:
      "Technologies used to build modern, responsive and interactive web applications.",
    technologies: [
      {
        name: "React",
        level: "Frontend library",
      },
      {
        name: "Next.js",
        level: "React framework",
      },
      {
        name: "TypeScript",
        level: "Typed JavaScript",
      },
      {
        name: "JavaScript",
        level: "Programming language",
      },
      {
        name: "Tailwind CSS",
        level: "Utility-first CSS",
      },
      {
        name: "Framer Motion",
        level: "UI animation",
      },
    ],
  },

  {
    number: "02",
    title: "Networking",
    subtitle: "Network infrastructure",
    icon: Network,
    description:
      "Core networking technologies and concepts used to understand and configure connected systems.",
    technologies: [
      {
        name: "TCP/IP",
        level: "Network protocols",
      },
      {
        name: "Cisco",
        level: "Network infrastructure",
      },
      {
        name: "Networking",
        level: "Network technologies",
      },
      {
        name: "LAN / WAN",
        level: "Network environments",
      },
      {
        name: "Routing",
        level: "Network traffic",
      },
      {
        name: "Switching",
        level: "Network connectivity",
      },
    ],
  },

  {
    number: "03",
    title: "Telecommunications",
    subtitle: "Communication technologies",
    icon: Radio,
    description:
      "Technologies and concepts related to telecommunications, transmission and digital connectivity.",
    technologies: [
      {
        name: "Telecommunications",
        level: "Communication systems",
      },
      {
        name: "Transmission",
        level: "Data transmission",
      },
      {
        name: "Network infrastructure",
        level: "Connectivity",
      },
      {
        name: "Communication systems",
        level: "Digital communication",
      },
    ],
  },

  {
    number: "04",
    title: "Systems & Tools",
    subtitle: "Development environment",
    icon: Terminal,
    description:
      "Tools and environments used to develop, manage and deploy technical projects.",
    technologies: [
      {
        name: "Linux",
        level: "Operating system",
      },
      {
        name: "Git",
        level: "Version control",
      },
      {
        name: "GitHub",
        level: "Code collaboration",
      },
      {
        name: "REST API",
        level: "API integration",
      },
    ],
  },
];

const stack = [
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

const networkNodes = [
  { x: "18%", y: "30%" },
  { x: "50%", y: "18%" },
  { x: "80%", y: "35%" },
  { x: "35%", y: "68%" },
  { x: "68%", y: "72%" },
];

export default function Expertise() {
  return (
    <section
      id="expertise"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F7F4]
        px-5
        py-24
        text-black
        sm:px-8
        sm:py-32
        lg:px-12
        lg:py-40
        xl:px-16
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-20
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#CBFB45]/20
          blur-[150px]
        "
      />

      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-[45%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-[#CBFB45]/10
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <motion.div
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          {/* LABEL */}

          <div className="mb-7 flex items-center gap-3">
            <motion.span
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
                type: "spring",
                stiffness: 300,
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
                tracking-[0.28em]
                text-black/40
                sm:text-xs
              "
            >
              Expertise
            </span>
          </div>

          {/* TITLE */}

          <div className="overflow-hidden">
            <motion.h2
              initial={{
                y: "100%",
              }}
              whileInView={{
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[1050px]
                text-[clamp(3.2rem,8vw,7.5rem)]
                font-semibold
                leading-[0.88]
                tracking-[-0.075em]
              "
            >
              Technology
              <br />
              <span className="text-black/25">
                in practice.
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: 0.25,
            }}
            className="
              mt-8
              flex
              flex-col
              gap-5
              sm:flex-row
              sm:items-end
              sm:justify-between
            "
          >
            <p
              className="
                max-w-[600px]
                text-sm
                leading-7
                text-black/50
                sm:text-base
              "
            >
              A technical stack covering frontend development,
              networking, telecommunications and system tools.
            </p>

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.22em]
                text-black/30
              "
            >
              04 domains · 14 technologies
            </span>
          </motion.div>
        </motion.div>

        {/* =====================================================
            FEATURED TECHNICAL VISUAL
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mb-6
            min-h-[430px]
            overflow-hidden
            rounded-[32px]
            bg-black
            p-7
            text-white
            sm:p-10
            lg:p-14
          "
        >
          {/* GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.15, 0.28, 0.15],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[500px]
              w-[500px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#CBFB45]
              blur-[160px]
            "
          />

          {/* HEADER */}

          <div className="relative z-20 flex items-start justify-between">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/35">
                Technical ecosystem
              </span>

              <h3
                className="
                  mt-4
                  max-w-[500px]
                  text-3xl
                  font-semibold
                  tracking-[-0.05em]
                  sm:text-4xl
                "
              >
                From infrastructure
                <br />
                to interface.
              </h3>
            </div>

            <div
              className="
                hidden
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                text-[#CBFB45]
                sm:flex
              "
            >
              <Zap size={18} />
            </div>
          </div>

          {/* NETWORK VISUAL */}

          <div className="absolute inset-0">

            {/* connections */}

            <svg
              className="absolute inset-0 h-full w-full opacity-30"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <motion.path
                d="M18 30 L50 18 L80 35 L68 72 L35 68 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.12"
                className="text-[#CBFB45]"
                strokeDasharray="3 2"
                animate={{
                  strokeDashoffset: [0, -20],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              <motion.path
                d="M18 30 L35 68 M50 18 L68 72 M80 35 L35 68"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.08"
                className="text-white"
              />
            </svg>

            {/* nodes */}

            {networkNodes.map((node, index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: index * 0.4,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-3
                  w-3
                  rounded-full
                  bg-[#CBFB45]
                  shadow-[0_0_20px_rgba(203,251,69,0.9)]
                "
                style={{
                  left: node.x,
                  top: node.y,
                }}
              />
            ))}
          </div>

          {/* TECH LABELS */}

          <div
            className="
              absolute
              bottom-7
              left-7
              right-7
              z-20
              flex
              flex-wrap
              gap-2
              sm:bottom-10
              sm:left-10
              sm:right-10
            "
          >
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Cisco",
              "TCP/IP",
              "Linux",
            ].map((item, index) => (
              <motion.span
                key={item}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.5 + index * 0.08,
                }}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-[10px]
                  text-white/60
                  backdrop-blur-md
                "
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* =====================================================
            EXPERTISE CARDS
        ====================================================== */}

        <div className="grid gap-5 lg:grid-cols-2">

          {expertiseGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                key={group.number}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -7,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-black/10
                  bg-white
                  p-7
                  shadow-[0_10px_40px_rgba(0,0,0,0.025)]
                  transition-shadow
                  duration-500
                  hover:shadow-[0_25px_70px_rgba(0,0,0,0.09)]
                  sm:p-9
                "
              >
                {/* BIG NUMBER */}

                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-8
                    text-[130px]
                    font-semibold
                    leading-none
                    tracking-[-0.08em]
                    text-black/[0.035]
                  "
                >
                  {group.number}
                </span>

                {/* TOP */}

                <div className="relative z-10 flex items-start justify-between">
                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.08,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                    }}
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-black
                      text-[#CBFB45]
                    "
                  >
                    <Icon size={21} />
                  </motion.div>

                  <motion.div
                    whileHover={{
                      rotate: 45,
                    }}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-black/10
                      transition-colors
                      duration-300
                      group-hover:bg-[#CBFB45]
                      group-hover:border-[#CBFB45]
                    "
                  >
                    <ArrowUpRight size={15} />
                  </motion.div>
                </div>

                {/* TITLE */}

                <div className="relative z-10 mt-8">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                    {group.subtitle}
                  </p>

                  <h3
                    className="
                      mt-2
                      text-2xl
                      font-semibold
                      tracking-[-0.045em]
                      sm:text-3xl
                    "
                  >
                    {group.title}
                  </h3>

                  <p className="mt-3 max-w-[520px] text-sm leading-6 text-black/45">
                    {group.description}
                  </p>
                </div>

                {/* TECHNOLOGIES */}

                <div className="relative z-10 mt-8 grid gap-2 sm:grid-cols-2">
                  {group.technologies.map((technology, techIndex) => (
                    <motion.div
                      key={technology.name}
                      initial={{
                        opacity: 0,
                        x: -10,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.3 + techIndex * 0.06,
                      }}
                      className="
                        flex
                        items-center
                        justify-between
                        rounded-2xl
                        border
                        border-black/[0.07]
                        bg-[#F7F7F4]
                        px-4
                        py-3
                        transition-all
                        duration-300
                        hover:border-black/20
                        hover:bg-[#EFFFBD]
                      "
                    >
                      <span className="text-xs font-semibold">
                        {technology.name}
                      </span>

                      <span className="text-[9px] text-black/30">
                        {technology.level}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            COMPLETE STACK
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
            relative
            mt-6
            overflow-hidden
            rounded-[30px]
            border
            border-black/10
            bg-[#EFFFBD]
            p-7
            sm:p-9
          "
        >
          <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="shrink-0">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-black" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50">
                  Complete stack
                </span>
              </div>

              <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">
                Technologies I work with
              </h3>
            </div>

            <div className="flex flex-wrap gap-2 lg:max-w-[760px] lg:justify-end">
              {stack.map((technology, index) => (
                <motion.span
                  key={technology}
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
                    delay: index * 0.04,
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.03,
                  }}
                  className="
                    cursor-default
                    rounded-full
                    border
                    border-black/10
                    bg-white/60
                    px-4
                    py-2
                    text-xs
                    font-medium
                    transition-colors
                    duration-300
                    hover:bg-black
                    hover:text-white
                  "
                >
                  {technology}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            TECHNICAL FLOW
        ====================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-24 sm:mt-32"
        >
          <div className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#CBFB45]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                Technical flow
              </span>
            </div>

            <h3
              className="
                max-w-[650px]
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.05em]
                sm:text-5xl
              "
            >
              From network
              <br />
              <span className="text-black/30">
                to application.
              </span>
            </h3>
          </div>

          <div className="relative">

            {/* LINE */}

            <div className="absolute left-[23px] top-6 hidden h-[calc(100%-48px)] w-px bg-black/10 md:block" />

            <div className="grid gap-4 md:grid-cols-4">
              {[
                {
                  icon: Wifi,
                  title: "Connectivity",
                  text: "TCP/IP · Networking",
                },
                {
                  icon: Server,
                  title: "Infrastructure",
                  text: "Cisco · Linux",
                },
                {
                  icon: Braces,
                  title: "Application",
                  text: "React · Next.js",
                },
                {
                  icon: Laptop,
                  title: "Experience",
                  text: "TypeScript · Tailwind",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                    className="
                      relative
                      rounded-[24px]
                      border
                      border-black/10
                      bg-white
                      p-6
                    "
                  >
                    <div
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-xl
                        bg-black
                        text-[#CBFB45]
                      "
                    >
                      <Icon size={18} />
                    </div>

                    <h4 className="mt-6 text-lg font-semibold">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-black/40">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM MARQUEE
        ====================================================== */}

        <div className="relative mt-24 overflow-hidden border-y border-black/10 py-5 sm:mt-32">
          <motion.div
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex w-max"
          >
            {[...stack, ...stack].map((technology, index) => (
              <div
                key={`${technology}-${index}`}
                className="flex items-center"
              >
                <span className="px-6 text-sm font-medium text-black/35 sm:px-8">
                  {technology}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#CBFB45]" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}