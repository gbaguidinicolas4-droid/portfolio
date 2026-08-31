"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Network,
  Radio,
  Server,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react";

const expertise = [
  {
    number: "01",
    icon: Network,
    title: "Networking",
    description:
      "Designing and understanding reliable network infrastructures, from connectivity and routing to protocols and system communication.",
    skills: ["TCP/IP", "Cisco", "Routing", "Switching"],
    className: "bg-[#F7F7F4]",
  },
  {
    number: "02",
    icon: Code2,
    title: "Front-end Development",
    description:
      "Building modern, responsive and interactive web interfaces focused on performance, usability and clean architecture.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind"],
    className: "bg-[#EFFFBD]",
  },
  {
    number: "03",
    icon: Radio,
    title: "Telecommunications",
    description:
      "Exploring communication technologies and the systems that connect people, devices and digital services.",
    skills: ["Networks", "Transmission", "Communication"],
    className: "bg-[#F7F7F4]",
  },
  {
    number: "04",
    icon: Terminal,
    title: "Systems & Tools",
    description:
      "Working with development environments, Linux systems, version control and APIs to build and maintain reliable solutions.",
    skills: ["Linux", "Git", "GitHub", "REST API"],
    className: "bg-black text-white",
  },
];

const principles = [
  {
    icon: Zap,
    title: "Problem solving",
    text: "I enjoy breaking complex problems into simple and practical solutions.",
  },
  {
    icon: Sparkles,
    title: "Continuous learning",
    text: "Technology evolves constantly, and so do I. Every project is an opportunity to learn.",
  },
  {
    icon: Server,
    title: "Technical mindset",
    text: "My networking background helps me understand what happens behind the interface.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
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
          BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          -right-40
          top-40
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#CBFB45]
          blur-[140px]
        "
      />

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.15, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="
          pointer-events-none
          absolute
          -left-40
          top-[55%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#CBFB45]
          blur-[130px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">

        {/* =====================================================
            SECTION HEADER
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-16 sm:mb-20 lg:mb-24"
        >
          {/* DOT + ABOUT ME */}

          <div className="mb-7 flex items-center gap-3">
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.1,
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
              About me
            </span>
          </div>

          {/* TITLE */}

          <div className="max-w-[1050px] overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                text-[clamp(3rem,8vw,7.5rem)]
                font-semibold
                leading-[0.9]
                tracking-[-0.07em]
              "
            >
              Building with
              <br />
              <span className="text-[#CBFB45]">curiosity.</span>
            </motion.h2>
          </div>

          {/* INTRO */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.25,
            }}
            className="
              mt-8
              grid
              gap-6
              lg:grid-cols-[1fr_1.3fr]
              lg:items-end
            "
          >
            <p
              className="
                max-w-[460px]
                text-sm
                font-medium
                leading-7
                text-black/50
                sm:text-base
                sm:leading-8
              "
            >
              A technology enthusiast combining infrastructure,
              telecommunications and creativity to build useful digital
              experiences.
            </p>

            <p
              className="
                max-w-[700px]
                text-[15px]
                leading-7
                text-black/65
                sm:text-lg
                sm:leading-8
              "
            >
              I'm Nicolas Gbaguidi, a Network & Telecommunications
              professional and Front-end Developer. My background allows me
              to look at technology from both sides — the infrastructure
              that powers a system and the experience people have when
              interacting with it.
            </p>
          </motion.div>
        </motion.div>

        {/* =====================================================
            BIG STATEMENT CARD
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mb-24
            overflow-hidden
            rounded-[32px]
            bg-black
            p-7
            text-white
            sm:p-10
            lg:p-14
          "
        >
          {/* animated glow */}

          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              y: ["0%", "10%", "0%"],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-20
              -top-40
              h-[450px]
              w-[450px]
              rounded-full
              bg-[#CBFB45]/20
              blur-[120px]
            "
          />

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-end">
            <div>
              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.25em]
                  text-white/40
                "
              >
                My approach
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-[#CBFB45]" />

                <span className="text-sm text-white/50">
                  Always curious. Always building.
                </span>
              </div>
            </div>

            <h3
              className="
                text-3xl
                font-medium
                leading-[1.15]
                tracking-[-0.04em]
                sm:text-4xl
                lg:text-5xl
              "
            >
              I don't just want to use technology.
              <span className="text-[#CBFB45]">
                {" "}
                I want to understand it, improve it and build with it.
              </span>
            </h3>
          </div>
        </motion.div>

       {/* =====================================================
    EXPERTISE — FAQ
====================================================== */}

<div className="mb-24">
  <motion.div
    initial={{ opacity: 0, y: 25 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="mb-10 flex items-end justify-between"
  >
    <div>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-2 w-2 rounded-full bg-[#CBFB45]" />

        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
          What I do
        </span>
      </div>

      <h3
        className="
          text-3xl
          font-semibold
          tracking-[-0.05em]
          sm:text-5xl
        "
      >
        Areas of expertise
      </h3>
    </div>

    <span className="hidden text-xs text-black/30 sm:block">
      04 — Expertise
    </span>
  </motion.div>

  {/* FAQ */}
  <div className="border-t border-black/10">
    {expertise.map((item, index) => {
      const Icon = item.icon;

      return (
        <motion.div
          key={item.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: index * 0.08,
          }}
          className="group border-b border-black/10"
        >
          <details className="group/details">
            <summary
              className="
                flex
                cursor-pointer
                list-none
                items-center
                gap-5
                py-6
                sm:py-7
              "
            >
              {/* NUMBER */}
              <span className="w-8 shrink-0 text-[10px] font-semibold tracking-[0.2em] text-black/25">
                {item.number}
              </span>

              {/* ICON */}
              <div
                className="
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-xl
                  bg-black
                  text-[#CBFB45]
                  transition-transform
                  duration-300
                  group-hover/details:scale-105
                "
              >
                <Icon size={17} />
              </div>

              {/* QUESTION */}
              <h4
                className="
                  flex-1
                  text-lg
                  font-semibold
                  tracking-[-0.03em]
                  sm:text-2xl
                "
              >
                {item.title}
              </h4>

              {/* PLUS */}
              <motion.div
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
                  text-black/60
                  transition-colors
                  duration-300
                  group-hover/details:border-black
                  group-hover/details:text-black
                "
              >
                <span className="text-xl font-light transition-transform duration-300 group-open/details:rotate-45">
                  +
                </span>
              </motion.div>
            </summary>

            {/* ANSWER */}
            <div className="overflow-hidden pb-7 pl-[77px] pr-10 sm:pl-[93px] sm:pr-20">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-2xl"
              >
                <p className="text-sm leading-7 text-black/50 sm:text-base">
                  {item.description}
                </p>

                {/* SKILLS */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-full
                        border
                        border-black/10
                        bg-black/[0.02]
                        px-3
                        py-1.5
                        text-[10px]
                        font-medium
                        text-black/50
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </details>
        </motion.div>
      );
    })}
  </div>
</div>

        {/* =====================================================
            PRINCIPLES
        ====================================================== */}

        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#CBFB45]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                How I work
              </span>
            </div>

            <h3
              className="
                max-w-[700px]
                text-3xl
                font-semibold
                leading-tight
                tracking-[-0.05em]
                sm:text-5xl
              "
            >
              Technology is about more than code.
            </h3>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{
                    opacity: 0,
                    y: 30,
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
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  whileHover={{
                    y: -6,
                  }}
                  className="
                    rounded-[26px]
                    border
                    border-black/10
                    bg-[#F7F7F4]
                    p-7
                    sm:p-8
                  "
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-[#CBFB45]">
                    <Icon size={19} />
                  </div>

                  <h4 className="mt-7 text-xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-black/50">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-black/10
            bg-[#EFFFBD]
            px-7
            py-14
            text-center
            sm:px-12
            sm:py-20
          "
        >
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-[300px]
              w-[300px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-black/5
            "
          />

          <div className="relative z-10">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
              Beyond the screen
            </p>

            <h3
              className="
                mx-auto
                mt-6
                max-w-[850px]
                text-3xl
                font-semibold
                leading-[1.05]
                tracking-[-0.06em]
                sm:text-5xl
                lg:text-6xl
              "
            >
              Building systems.
              <br />
              Creating experiences.
              <br />
              <span className="text-black/40">Always learning.</span>
            </h3>

            <a
              href="#projects"
              className="
                group
                mx-auto
                mt-9
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-black
                px-6
                py-3.5
                text-sm
                font-medium
                text-white
                transition-all
                duration-300
                hover:bg-white
                hover:text-black
              "
            >
              Explore my work

              <ArrowUpRight
                size={16}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}