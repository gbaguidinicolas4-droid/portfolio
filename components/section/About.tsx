
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Braces,
  Code2,
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
    image: "/images/about/frontend.png",
    description:
      "I build modern, responsive and interactive web experiences with a focus on clarity, performance and usability.",
    technologies: [
      ["React", "Frontend library"],
      ["Next.js", "React framework"],
      ["TypeScript", "Typed JavaScript"],
      ["JavaScript", "Programming language"],
      ["Tailwind CSS", "Interface styling"],
      ["Framer Motion", "UI animation"],
    ],
  },
  {
    number: "02",
    title: "Networking",
    subtitle: "Network infrastructure",
    icon: Network,
    image: "/images/about/networking.jpeg",
    description:
      "My networking background helps me understand how systems communicate, from connectivity and protocols to infrastructure.",
    technologies: [
      ["TCP/IP", "Network protocols"],
      ["Cisco", "Network infrastructure"],
      ["LAN / WAN", "Network environments"],
      ["Routing", "Network traffic"],
      ["Switching", "Network connectivity"],
    ],
  },
  {
    number: "03",
    title: "Telecommunications",
    subtitle: "Communication technologies",
    icon: Radio,
    image: "/images/about/telecommunications.png",
    description:
      "I am interested in telecommunications, transmission and the technologies that make digital communication possible.",
    technologies: [
      ["Telecommunications", "Communication systems"],
      ["Transmission", "Data transmission"],
      ["Network infrastructure", "Connectivity"],
      ["Communication systems", "Digital communication"],
    ],
  },
  {
    number: "04",
    title: "Systems & Tools",
    subtitle: "Development environment",
    icon: Terminal,
    image: "/images/about/systems-tools.png",
    description:
      "I work with the tools and environments required to develop, manage and maintain technical projects.",
    technologies: [
      ["Linux", "Operating system"],
      ["Git", "Version control"],
      ["GitHub", "Code collaboration"],
      ["REST API", "API integration"],
    ],
  },
];

const principles = [
  {
    icon: Zap,
    title: "Problem solving",
    text: "I enjoy breaking complex problems into simple and practical solutions.",
  },
  {
    icon: Globe,
    title: "Continuous learning",
    text: "Technology evolves constantly, and every project is an opportunity to learn something new.",
  },
  {
    icon: Server,
    title: "Technical mindset",
    text: "My networking background helps me understand what happens behind the interface.",
  },
];

const personalFaq = [
  {
    question: "Are you currently available?",
    answer:
      "I am open to professional opportunities, collaborations and interesting technical projects. Availability can depend on the nature and scope of the project.",
  },
  {
    question: "What are your availability hours?",
    answer:
      "My availability can be organized according to the project and its requirements. For a collaboration, the schedule can be discussed in advance to establish convenient working times.",
  },
  {
    question: "Do you work remotely?",
    answer:
      "Yes. I can work on projects remotely using collaborative tools, version control and online communication platforms.",
  },
  {
    question: "What kind of projects do you work on?",
    answer:
      "I am particularly interested in frontend applications, web platforms, networking, telecommunications and projects that combine technology with practical solutions.",
  },
  {
    question: "Can we work together on a project?",
    answer:
      "Yes. If you have an idea, a technical challenge or a project that matches my areas of interest, feel free to get in touch and we can discuss it.",
  },
  {
    question: "How can we work together?",
    answer:
      "The best approach is to first discuss the objective, requirements and expected result. From there, we can define the technical approach, timeline and collaboration format.",
  },
];
export default function About() {
  // Les animations coûteuses sont désactivées uniquement sur les petits écrans.
  // Le rendu et les animations d'origine sont conservés sur ordinateur.
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", updateIsMobile);
      return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }

    // Compatibilité avec les anciens navigateurs mobiles.
    mediaQuery.addListener(updateIsMobile);
    return () => mediaQuery.removeListener(updateIsMobile);
  }, []);

  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        py-24
        text-black
        sm:py-32
        lg:py-40
      "
    >
      {/* =====================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <motion.div
        animate={isMobile ? undefined : ({
          scale: [1, 1.12, 1],
          opacity: [0.12, 0.2, 0.12],
        }) }
        transition={isMobile ? { duration: 0 } : ({
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }) }
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
        animate={isMobile ? undefined : ({
          scale: [1, 1.08, 1],
          opacity: [0.08, 0.15, 0.08],
        }) }
        transition={isMobile ? { duration: 0 } : ({
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }) }
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

      {/* CONTENEUR ALIGNÉ AVEC LE HERO */}
      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1440px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
        "
      >


        {/* =====================================================
            ABOUT INTRODUCTION
        ====================================================== */}

        <motion.div
          initial={isMobile ? false : ({ opacity: 0, y: 30 }) }
          whileInView={isMobile ? undefined : ({ opacity: 1, y: 0 }) }
          viewport={{ once: true, amount: 0.3 }}
          transition={isMobile ? { duration: 0 } : ({
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }) }
          className="mb-20 sm:mb-24 lg:mb-28"
        >
          <div className="mb-7 flex items-center gap-3">
            <motion.span
              initial={isMobile ? false : ({ scale: 0 }) }
              whileInView={isMobile ? undefined : ({ scale: 1 }) }
              viewport={{ once: true }}
              transition={isMobile ? { duration: 0 } : ({
                duration: 0.5,
                delay: 0.1,
                type: "spring",
                stiffness: 300,
              }) }
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

          <div className="max-w-[1050px] overflow-hidden">
            <motion.h2
              initial={isMobile ? false : ({ y: "100%" }) }
              whileInView={isMobile ? undefined : ({ y: 0 }) }
              viewport={{ once: true }}
              transition={isMobile ? { duration: 0 } : ({
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }) }
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

          <motion.div
            initial={isMobile ? false : ({ opacity: 0, y: 25 }) }
            whileInView={isMobile ? undefined : ({ opacity: 1, y: 0 }) }
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : ({
              duration: 0.8,
              delay: 0.25,
            }) }
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
            BIG STATEMENT
        ====================================================== */}

        <motion.div
          initial={isMobile ? false : ({ opacity: 0, y: 50 }) }
          whileInView={isMobile ? undefined : ({ opacity: 1, y: 0 }) }
          viewport={{ once: true, amount: 0.2 }}
          transition={isMobile ? { duration: 0 } : ({
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }) }
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
          <motion.div
            animate={isMobile ? undefined : ({
              x: ["-20%", "20%", "-20%"],
              y: ["0%", "10%", "0%"],
            }) }
            transition={isMobile ? { duration: 0 } : ({
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }) }
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
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
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
            WHAT I WORK WITH
        ====================================================== */}

        <div className="mb-24 sm:mb-28">
          <motion.div
            initial={isMobile ? false : ({ opacity: 0, y: 25 }) }
            whileInView={isMobile ? undefined : ({ opacity: 1, y: 0 }) }
            viewport={{ once: true, amount: 0.25 }}
            transition={isMobile ? { duration: 0 } : ({ duration: 0.7 }) }
            className="mb-12"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#CBFB45]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                What I work with
              </span>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h3
                className="
                  max-w-[800px]
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.05em]
                  sm:text-5xl
                "
              >
                From infrastructure
                <br />
                <span className="text-black/25">
                  to digital experience.
                </span>
              </h3>

              <p className="max-w-[420px] text-sm leading-7 text-black/45 sm:text-base">
                A technical foundation combining frontend development,
                networking, telecommunications and system tools.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-2">
           {expertiseGroups.map((group, index) => {
  const Icon = group.icon;

  return (
   <motion.article
  key={group.number}
  initial={isMobile ? false : ({
    opacity: 0,
    y: 45,
  }) }
  whileInView={isMobile ? undefined : ({
    opacity: 1,
    y: 0,
  }) }
  viewport={{
    once: true,
    amount: 0.15,
  }}
  transition={isMobile ? { duration: 0 } : ({
    duration: 0.7,
    delay: index * 0.1,
    ease: [0.22, 1, 0.36, 1],
  }) }
  whileHover={isMobile ? undefined : ({
    y: -7,
  }) }
  className="
    group
    relative
    overflow-hidden
    rounded-[30px]
    border
    border-black/10
    bg-[#F7F7F4]
    shadow-[0_10px_40px_rgba(0,0,0,0.025)]
    transition-shadow
    duration-500
    hover:shadow-[0_25px_70px_rgba(0,0,0,0.09)]
  "
>
  {/* =================================================
      NUMÉRO EN ARRIÈRE-PLAN
  ================================================== */}

  <span
    className="
      pointer-events-none
      absolute
      right-3
      top-3
      z-30
      text-[130px]
      font-semibold
      leading-none
      tracking-[-0.08em]
      text-black/[0.035]
    "
  >
    {group.number}
  </span>

  {/* =================================================
      IMAGE — TOUT EN HAUT DE LA CARTE
  ================================================== */}

  <motion.div
    initial={isMobile ? false : ({
      opacity: 0,
      scale: 0.97,
    }) }
    whileInView={isMobile ? undefined : ({
      opacity: 1,
      scale: 1,
    }) }
    viewport={{
      once: true,
    }}
    transition={isMobile ? { duration: 0 } : ({
      duration: 0.8,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    }) }
    className="
      relative
      h-[300px]
      w-full
      overflow-hidden
      sm:h-[360px]
      lg:h-[400px]
    "
  >
    {/* Halo */}

    <div
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        z-0
        h-[300px]
        w-[300px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-[#CBFB45]/20
        blur-[100px]
        transition-all
        duration-700
        group-hover:h-[380px]
        group-hover:w-[380px]
        group-hover:bg-[#CBFB45]/30
      "
    />

    {/* IMAGE */}

    <motion.img
      src={group.image}
      alt={`${group.title} illustration`}
      className="
        relative
        z-10
        block
        h-full
        w-full
        object-cover
        object-center
        drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)]
      "
      whileHover={isMobile ? undefined : ({
        scale: 1.04,
      }) }
      transition={isMobile ? { duration: 0 } : ({
        duration: 0.45,
        ease: "easeOut",
      }) }
    />
  </motion.div>

  {/* =================================================
      CONTENU — SOUS L'IMAGE
  ================================================== */}

  <div className="relative z-10 p-7 sm:p-9">

    {/* =================================================
        HEADER
    ================================================== */}

    <div className="flex items-start justify-between">
      <motion.div
        whileHover={isMobile ? undefined : ({
          rotate: 8,
          scale: 1.08,
        }) }
        transition={isMobile ? { duration: 0 } : ({
          type: "spring",
          stiffness: 300,
        }) }
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
        whileHover={isMobile ? undefined : ({
          rotate: 45,
        }) }
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
          group-hover:border-[#CBFB45]
          group-hover:bg-[#CBFB45]
        "
      >
        <ArrowUpRight size={15} />
      </motion.div>
    </div>

    {/* =================================================
        DESCRIPTION
    ================================================== */}

    <div className="mt-5">
      <p
        className="
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-black/35
        "
      >
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

      <p
        className="
          mt-3
          max-w-[520px]
          text-sm
          leading-6
          text-black/45
        "
      >
        {group.description}
      </p>
    </div>

    {/* =================================================
        TECHNOLOGIES
    ================================================== */}

    <div className="mt-8 grid gap-2 sm:grid-cols-2">
      {group.technologies.map(([name, level]) => (
        <div
          key={name}
          className="
            flex
            items-center
            justify-between
            rounded-2xl
            border
            border-black/[0.07]
            bg-white
            px-4
            py-3
            transition-all
            duration-300
            hover:border-black/20
            hover:bg-[#EFFFBD]
          "
        >
          <span className="text-xs font-semibold">
            {name}
          </span>

          <span className="text-[9px] text-black/30">
            {level}
          </span>
        </div>
      ))}
    </div>

  </div>
</motion.article>
  );
})}
          </div>
        </div>

        {/* =====================================================
            COMPLETE STACK
        ====================================================== */}

        <motion.div
          initial={isMobile ? false : ({ opacity: 0, y: 40 }) }
          whileInView={isMobile ? undefined : ({ opacity: 1, y: 0 }) }
          viewport={{ once: true, amount: 0.2 }}
          transition={isMobile ? { duration: 0 } : ({ duration: 0.8 }) }
          className="
            relative
            mb-24
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
              {[
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
              ].map((technology, index) => (
                <motion.span
                  key={technology}
                  initial={isMobile ? false : ({
                    opacity: 0,
                    scale: 0.9,
                  }) }
                  whileInView={isMobile ? undefined : ({
                    opacity: 1,
                    scale: 1,
                  }) }
                  viewport={{
                    once: true,
                  }}
                  transition={isMobile ? { duration: 0 } : ({
                    delay: index * 0.04,
                  }) }
                  whileHover={isMobile ? undefined : ({
                    y: -3,
                    scale: 1.03,
                  }) }
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
            PRINCIPLES
        ====================================================== */}

        <div className="mb-24">
          <motion.div
            initial={isMobile ? false : ({ opacity: 0, y: 25 }) }
            whileInView={isMobile ? undefined : ({ opacity: 1, y: 0 }) }
            viewport={{ once: true }}
            transition={isMobile ? { duration: 0 } : ({ duration: 0.7 }) }
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
                  initial={isMobile ? false : ({
                    opacity: 0,
                    y: 30,
                  }) }
                  whileInView={isMobile ? undefined : ({
                    opacity: 1,
                    y: 0,
                  }) }
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={isMobile ? { duration: 0 } : ({
                    duration: 0.6,
                    delay: index * 0.12,
                  }) }
                  whileHover={isMobile ? undefined : ({
                    y: -6,
                  }) }
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
            TECHNICAL FLOW
        ====================================================== */}

        <motion.div
          initial={isMobile ? false : ({ opacity: 0 }) }
          whileInView={isMobile ? undefined : ({ opacity: 1 }) }
          viewport={{ once: true, amount: 0.2 }}
          transition={isMobile ? { duration: 0 } : ({ duration: 0.8 }) }
          className="mb-24"
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
                  initial={isMobile ? false : ({
                    opacity: 0,
                    y: 25,
                  }) }
                  whileInView={isMobile ? undefined : ({
                    opacity: 1,
                    y: 0,
                  }) }
                  viewport={{
                    once: true,
                  }}
                  transition={isMobile ? { duration: 0 } : ({
                    delay: index * 0.1,
                  }) }
                  className="
                    rounded-[24px]
                    border
                    border-black/10
                    bg-white
                    p-6
                  "
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-[#CBFB45]">
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
        </motion.div>

        {/* =====================================================
            PERSONAL FAQ / AVAILABILITY
        ====================================================== */}

        <div className="mb-24">
          <motion.div
            initial={isMobile ? false : ({ opacity: 0, y: 25 }) }
            whileInView={isMobile ? undefined : ({ opacity: 1, y: 0 }) }
            viewport={{ once: true, amount: 0.25 }}
            transition={isMobile ? { duration: 0 } : ({ duration: 0.7 }) }
            className="mb-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#CBFB45]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                A little more about me
              </span>
            </div>

            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <h3
                className="
                  max-w-[800px]
                  text-3xl
                  font-semibold
                  leading-tight
                  tracking-[-0.05em]
                  sm:text-5xl
                "
              >
                Before we build,
                <br />
                <span className="text-black/25">
                  here are a few answers.
                </span>
              </h3>

              <p className="max-w-[400px] text-sm leading-7 text-black/45">
                Some practical information about how I work, my availability
                and the kind of collaboration I am interested in.
              </p>
            </div>
          </motion.div>

          <div className="border-t border-black/10">
            {personalFaq.map((item, index) => (
              <motion.div
                key={item.question}
                initial={isMobile ? false : ({
                  opacity: 0,
                  y: 20,
                }) }
                whileInView={isMobile ? undefined : ({
                  opacity: 1,
                  y: 0,
                }) }
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={isMobile ? { duration: 0 } : ({
                  duration: 0.55,
                  delay: index * 0.06,
                }) }
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
                    <span className="w-8 shrink-0 text-[10px] font-semibold tracking-[0.2em] text-black/25">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h4
                      className="
                        flex-1
                        text-lg
                        font-semibold
                        tracking-[-0.03em]
                        sm:text-2xl
                      "
                    >
                      {item.question}
                    </h4>

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
                        transition-all
                        duration-300
                        group-hover/details:border-black
                      "
                    >
                      <span className="text-xl font-light transition-transform duration-300 group-open/details:rotate-45">
                        +
                      </span>
                    </motion.div>
                  </summary>

                  <div className="overflow-hidden pb-7 pl-[52px] pr-8 sm:pl-[77px] sm:pr-20">
                    <p className="max-w-2xl text-sm leading-7 text-black/50 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>

        {/* =====================================================
            FINAL STATEMENT
        ====================================================== */}

        <motion.div
          initial={isMobile ? false : ({ opacity: 0, scale: 0.96 }) }
          whileInView={isMobile ? undefined : ({
            opacity: 1,
            scale: 1,
          }) }
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={isMobile ? { duration: 0 } : ({
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }) }
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
            animate={isMobile ? undefined : ({
              rotate: [0, 360],
            }) }
            transition={isMobile ? { duration: 0 } : ({
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }) }
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
