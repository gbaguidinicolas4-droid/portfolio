"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Granger",
    category: "Digital Experience",
    description:
      "A modern digital experience built around a strong visual identity, fluid interactions and a polished responsive interface.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/granger.png",
   href: "/projects/granger" ,
  },
  {
    number: "02",
    title: "Twingate",
    category: "Technology & Network",
    description:
      "A technology-focused interface combining modern layouts, interactive elements and a clean visual system inspired by network infrastructure.",
    technologies: ["Next.js", "React", "TypeScript", "Framer Motion"],
    image: "/twingate.png", 
   href: "/projects/twingate" ,
  },
  {
    number: "03",
    title: "Hope Rise",
    category: "Digital Platform",
    description:
      "A modern digital platform designed to deliver an accessible, engaging and responsive experience across different devices.",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    image: "/Hope.png",
    href: "/projects/hope-rise" ,
  },
  {
    number: "04",
    title: "Skpikeur",
    category: "Creative Web Experience",
    description:
      "A creative web experience built around an expressive visual identity, dynamic layouts and an energetic interface.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    image: "/spikeur.png",
    href: "/projects/spikeur" ,
  },

{
  number: "05",
  title: "CV Builder",
  category: "Resume Builder Application",
  description:
    "A modern CV builder application that allows users to create, customize, and generate professional resumes through an intuitive and structured interface.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "REST API"],
  image: "/cv-builder.png",
  href: "/projects/cv-builder" ,
},


  {
    number: "06",
    title: "Professors & Students",
    category: "Education Platform",
    description:
      "A platform designed to connect students and professors while making learning opportunities easier to discover and organize.",
    technologies: ["Next.js", "React", "TypeScript", "REST API"],
    image: "/student.png",
    href: "/projects/professors-students" ,
  },
];
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="
        relative
        w-full
        overflow-hidden
        bg-white
        px-5
        py-28
        text-black
        sm:px-8
        sm:py-36
        lg:px-12
        xl:px-16
      "
    >
      {/* =====================================================
          BACKGROUND GLOW
      ====================================================== */}

      <motion.div
        animate={{
          opacity: [0.25, 0.4, 0.25],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[10%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#CBFB45]/10
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          opacity: [0.2, 0.35, 0.2],
          scale: [1.05, 1, 1.05],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-200px]
          top-[55%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#CBFB45]/10
          blur-[150px]
        "
      />

      <div className="relative mx-auto max-w-[1440px]">

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-16
            max-w-[850px]
            sm:mb-20
            lg:mb-24
          "
        >
          {/* LABEL */}

          <div className="mb-6 flex items-center gap-3">
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#CBFB45]
                shadow-[0_0_14px_rgba(203,251,69,0.8)]
              "
            />

            <span
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                text-black/45
                sm:text-[11px]
              "
            >
              Selected Projects
            </span>
          </div>

          {/* TITLE */}

          <h2
            className="
              text-[clamp(3.5rem,9vw,8rem)]
              font-semibold
              leading-[0.85]
              tracking-[-0.075em]
            "
          >
            Things I’ve
            <br />
            <span className="text-[#CBFB45]">
              built.
            </span>
          </h2>

          {/* DESCRIPTION */}

          <p
            className="
              mt-8
              max-w-[680px]
              text-[14px]
              leading-7
              text-black/55
              sm:mt-10
              sm:text-[16px]
              sm:leading-8
            "
          >
            A selection of digital experiences, interfaces and applications
            I’ve designed and developed through real-world projects,
            experimentation and continuous learning.
          </p>
        </motion.div>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.05,
          }}
          className="
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            md:gap-8
            xl:gap-10
          "
        >
          {projects.map((project) => (
            <motion.article
              key={project.number}
              variants={itemVariants}
              className="
                group
                relative
                flex
                min-w-0
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-black/[0.08]
                bg-[#F7F7F4]
                shadow-[0_15px_50px_rgba(0,0,0,0.04)]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-black/15
                hover:shadow-[0_25px_70px_rgba(0,0,0,0.09)]
                sm:rounded-[32px]
              "
            >
              {/* =================================================
                  IMAGE
              ================================================== */}

              <div
                className="
                  relative
                  aspect-[16/10]
                  w-full
                  overflow-hidden
                  bg-[#EDEDE8]
                "
              >
                {/* IMAGE */}

                <motion.img
                  src={project.image}
                  alt={`${project.title} project`}
                  loading="lazy"
                  whileHover={{
                    scale: 1.035,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-all
                    duration-700
                    group-hover:brightness-[1.03]
                  "
                />

                {/* IMAGE OVERLAY */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/20
                    via-transparent
                    to-transparent
                    opacity-60
                    transition-opacity
                    duration-500
                    group-hover:opacity-30
                  "
                />

                {/* NUMBER */}

                <div
                  className="
                    absolute
                    right-5
                    top-5
                    z-10
                    flex
                    h-10
                    min-w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/30
                    bg-black/35
                    px-3
                    text-[10px]
                    font-semibold
                    tracking-wider
                    text-white
                    shadow-lg
                    backdrop-blur-md
                    sm:right-6
                    sm:top-6
                  "
                >
                  {project.number}
                </div>

                {/* CATEGORY */}

                <div
                  className="
                    absolute
                    bottom-5
                    left-5
                    z-10
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-white/20
                    bg-black/35
                    px-3
                    py-2
                    backdrop-blur-md
                    sm:bottom-6
                    sm:left-6
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
                      shrink-0
                      rounded-full
                      bg-[#CBFB45]
                      shadow-[0_0_8px_rgba(203,251,69,0.9)]
                    "
                  />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.16em]
                      text-white/80
                    "
                  >
                    {project.category}
                  </span>
                </div>
              </div>

              {/* =================================================
                  CONTENT
              ================================================== */}

              <div
                className="
                  flex
                  flex-1
                  flex-col
                  p-6
                  sm:p-8
                  lg:p-9
                "
              >
                {/* TITLE */}

                <div className="flex items-start justify-between gap-5">
                  <h3
                    className="
                      max-w-[500px]
                      text-[clamp(2rem,4vw,3.5rem)]
                      font-semibold
                      leading-[0.92]
                      tracking-[-0.065em]
                    "
                  >
                    {project.title}
                    <span className="text-[#CBFB45]">
                      .
                    </span>
                  </h3>

                  {/* ARROW */}

                  <div
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
                      bg-white
                      transition-all
                      duration-500
                      group-hover:rotate-45
                      group-hover:border-[#CBFB45]
                      group-hover:bg-[#CBFB45]
                    "
                  >
                    <ArrowUpRight
                      size={17}
                    />
                  </div>
                </div>

                {/* DESCRIPTION */}

                <p
                  className="
                    mt-5
                    max-w-[560px]
                    text-[13px]
                    leading-6
                    text-black/55
                    sm:text-[14px]
                    sm:leading-7
                  "
                >
                  {project.description}
                </p>

                {/* TECHNOLOGIES */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  "
                >
                  {project.technologies.map(
                    (technology) => (
                      <span
                        key={technology}
                        className="
                          rounded-full
                          border
                          border-black/10
                          bg-white
                          px-3
                          py-1.5
                          text-[10px]
                          font-medium
                          text-black/55
                          transition-all
                          duration-300
                          group-hover:border-black/15
                          sm:text-[11px]
                        "
                      >
                        {technology}
                      </span>
                    )
                  )}
                </div>

                {/* BUTTON */}

                <div
                  className="
                    mt-7
                    border-t
                    border-black/10
                    pt-6
                  "
                >
                  <a
                    href={project.href}
                    className="
                      group/button
                      flex
                      w-fit
                      items-center
                      gap-3
                      rounded-full
                      bg-black
                      px-5
                      py-3
                      text-[12px]
                      font-medium
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#CBFB45]
                      hover:text-black
                      sm:px-6
                      sm:py-3.5
                      sm:text-[13px]
                    "
                  >
                    View project

                    <span
                      className="
                        flex
                        h-6
                        w-6
                        items-center
                        justify-center
                        rounded-full
                        bg-white
                        text-black
                        transition-all
                        duration-300
                        group-hover/button:bg-black
                        group-hover/button:text-white
                        group-hover/button:rotate-45
                      "
                    >
                      <ArrowUpRight
                        size={13}
                      />
                    </span>
                  </a>
                </div>
              </div>

              {/* =================================================
                  LIME HOVER LINE
              ================================================== */}

              <motion.div
                initial={{
                  scaleX: 0,
                }}
                whileHover={{
                  scaleX: 1,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-full
                  origin-left
                  bg-[#CBFB45]
                "
              />
            </motion.article>
          ))}
        </motion.div>

        {/* =====================================================
            CTA
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-20
            overflow-hidden
            rounded-[30px]
            border
            border-black/10
            bg-black
            p-7
            sm:mt-28
            sm:rounded-[40px]
            sm:p-12
            lg:p-16
          "
        >
          {/* GLOW */}

          <motion.div
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.18, 0.3, 0.18],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              right-[-100px]
              top-[-150px]
              h-[400px]
              w-[400px]
              rounded-full
              bg-[#CBFB45]
              blur-[150px]
            "
          />

          <div
            className="
              relative
              z-10
              flex
              flex-col
              gap-8
              lg:flex-row
              lg:items-end
              lg:justify-between
            "
          >
            {/* TEXT */}

            <div>
              <div className="mb-5 flex items-center gap-2">
                <span
                  className="
                    h-1.5
                    w-1.5
                    rounded-full
                    bg-[#CBFB45]
                    shadow-[0_0_12px_rgba(203,251,69,0.9)]
                  "
                />

                <span
                  className="
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-white/40
                  "
                >
                  Have an idea?
                </span>
              </div>

              <h3
                className="
                  max-w-[750px]
                  text-[clamp(2.5rem,6vw,5.5rem)]
                  font-semibold
                  leading-[0.9]
                  tracking-[-0.065em]
                  text-white
                "
              >
                Let’s build
                <br />
                <span className="text-[#CBFB45]">
                  something useful.
                </span>
              </h3>
            </div>

            {/* CTA BUTTON */}

            <a
              href="#contact"
              className="
                group
                flex
                w-fit
                items-center
                gap-4
                rounded-full
                bg-[#CBFB45]
                px-6
                py-4
                text-sm
                font-semibold
                text-black
                transition-all
                duration-300
                hover:bg-white
              "
            >
              Start a conversation

              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-black
                  text-white
                  transition-transform
                  duration-300
                  group-hover:rotate-45
                "
              >
                <ExternalLink size={13} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}