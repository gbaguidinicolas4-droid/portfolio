"use client";

import { motion } from "framer-motion";
import {
  Award,
  Database,
  FileSpreadsheet,
  GitBranch,
  Search,
  Sparkles,
  ExternalLink,
  Brain,
   Presentation,
} from "lucide-react";

const certifications = [
  {
    number: "01",
    title: "Git & GitHub",
    organization: "Coursera",
    category: "Version Control",
    description:
      "Formation axée sur Git et GitHub, couvrant la gestion des versions, les dépôts, les branches, les commits et la collaboration sur des projets logiciels.",
    icon: GitBranch,
    certificateUrl: "/certifications/git-github",
  },

{
  number: "02",
  title: "Google Slides",
  organization: "Google",
  category: "Presentation & Productivity",
  description:
    "Certification portant sur la création, la mise en forme, l'organisation et la présentation de contenus avec Google Slides, ainsi que sur l'utilisation des fonctionnalités de collaboration, de transitions et d'animations.",

  icon: Presentation,

  certificateUrl: "/certifications/google-slides",
},


  {
    number: "03",
    title: "AI for All",
    organization: "Skills Academy",
    category: "Artificial Intelligence",
    description:
      "Introduction aux fondamentaux de l’intelligence artificielle, à ses concepts clés, ses applications et son impact dans les différents domaines technologiques.",
    icon: Sparkles,
    certificateUrl: "/certifications/ai-for-all",
  },
  {
    number: "04",
    title: "Internet Search and Beyond",
    organization: "Skills Academy",
    category: "Digital Skills",
    description:
      "Formation autour de la recherche efficace d’informations sur Internet, de l’utilisation des outils numériques et de l’exploitation pertinente des ressources en ligne.",
    icon: Search,
    certificateUrl: "/certifications/internet-search",
    
  },
  {
    number: "05",
    title: "Excel Fundamentals for Data Analysis",
    organization: "Macquarie University · Coursera",
    category: "Data Analysis",
    description:
      "Formation aux fondamentaux d’Excel appliqués à l’analyse de données, notamment l’organisation, la manipulation et l’interprétation des données.",
    icon: FileSpreadsheet,
certificateUrl: "/certifications/excel",
  },
 {
  number: "06",
  title: "Responsible AI",
  organization: "Skills Academy",
  category: "Artificial Intelligence",
  description:
    "Formation aux principes fondamentaux de l’intelligence artificielle responsable, avec un focus sur l’éthique, la transparence, la confidentialité, les biais et l’utilisation responsable des systèmes d’IA.",
  icon: Brain,
  certificateUrl: "/certifications/responsible-ai",
},
  
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.97,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#F7F7F4]
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
          BACKGROUND GLOWS
      ====================================================== */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          left-[-180px]
          top-[10%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#CBFB45]/10
          blur-[130px]
        "
      />

      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          pointer-events-none
          absolute
          right-[-220px]
          bottom-[15%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#CBFB45]/10
          blur-[150px]
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-16
            max-w-[850px]
            sm:mb-20
          "
        >
          {/* LABEL */}

          <div className="mb-6 flex items-center gap-3">
            <motion.span
              animate={{
                scale: [1, 1.35, 1],
                opacity: [0.7, 1, 0.7],
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
              Certifications
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
            Learning
            <br />
            <span className="text-[#CBFB45]">
              in progress.
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
            Certifications and training that complement my technical
            background, strengthen my digital skills and allow me to
            continuously expand my knowledge across software development,
            networking, data and emerging technologies.
          </p>
        </motion.div>

        {/* =====================================================
            CERTIFICATIONS GRID
        ====================================================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="
            grid
            gap-5
            md:grid-cols-2
            lg:gap-6
          "
        >
          {certifications.map((certification) => {
            const Icon = certification.icon;

            return (
              <motion.article
                key={certification.number}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  group
                  relative
                  min-h-[390px]
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-black/10
                  bg-white
                  p-6
                  shadow-[0_10px_40px_rgba(0,0,0,0.035)]
                  sm:rounded-[36px]
                  sm:p-8
                "
              >
                {/* =================================================
                    CARD GLOW
                ================================================== */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    right-[-100px]
                    top-[-100px]
                    h-[260px]
                    w-[260px]
                    rounded-full
                    bg-[#CBFB45]/10
                    blur-[80px]
                    transition-all
                    duration-700
                    group-hover:bg-[#CBFB45]/20
                  "
                />

                {/* =================================================
                    TOP
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  "
                >
                  {/* ICON */}

                  <motion.div
                    whileHover={{
                      rotate: 6,
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-black
                      text-[#CBFB45]
                      shadow-[0_12px_30px_rgba(0,0,0,0.12)]
                    "
                  >
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  {/* NUMBER */}

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      tracking-[0.15em]
                      text-black/25
                    "
                  >
                    {certification.number}
                  </span>
                </div>

                {/* =================================================
                    CATEGORY
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    mt-10
                    flex
                    items-center
                    gap-2
                  "
                >
                  <span
                    className="
                      h-1.5
                      w-1.5
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
                      tracking-[0.2em]
                      text-black/40
                    "
                  >
                    {certification.category}
                  </span>
                </div>

                {/* =================================================
                    TITLE
                ================================================== */}

                <h3
                  className="
                    relative
                    z-10
                    mt-4
                    max-w-[600px]
                    text-[clamp(1.8rem,4vw,3rem)]
                    font-semibold
                    leading-[0.95]
                    tracking-[-0.055em]
                  "
                >
                  {certification.title}
                  <span className="text-[#CBFB45]">
                    .
                  </span>
                </h3>

                {/* =================================================
                    ORGANIZATION
                ================================================== */}

                <div
                  className="
                    relative
                    z-10
                    mt-4
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Award
                    size={14}
                    className="text-black/35"
                  />

                  <span
                    className="
                      text-xs
                      font-medium
                      text-black/50
                    "
                  >
                    {certification.organization}
                  </span>
                </div>

                {/* =================================================
                    DESCRIPTION
                ================================================== */}

                <p
                  className="
                    relative
                    z-10
                    mt-5
                    max-w-[620px]
                    text-[13px]
                    leading-6
                    text-black/50
                    sm:text-[14px]
                    sm:leading-7
                  "
                >
                  {certification.description}
                </p>

                {/* =================================================
                    CERTIFICATE BUTTON
                ================================================== */}

                <div className="relative z-10 mt-7">
                  <a
                    href={certification.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2.5
                      rounded-full
                      border
                      border-black
                      bg-black
                      px-5
                      py-3
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#CBFB45]
                      hover:text-black
                      hover:shadow-[0_10px_30px_rgba(203,251,69,0.25)]
                    "
                  >
                    <span>
                      View the certificate
                    </span>

                    <ExternalLink
                      size={14}
                      strokeWidth={2}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>
                </div>

                {/* =================================================
                    BOTTOM LINE
                ================================================== */}

                <div
                  className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    h-[3px]
                    origin-left
                    scale-x-0
                    bg-[#CBFB45]
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />
              </motion.article>
            );
          })}
        </motion.div>

        {/* =====================================================
            BOTTOM STATEMENT
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
            mt-16
            flex
            flex-col
            gap-6
            border-t
            border-black/10
            pt-8
            sm:mt-20
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-2
                w-2
                rounded-full
                bg-[#CBFB45]
                shadow-[0_0_10px_rgba(203,251,69,0.8)]
              "
            />

            <span
              className="
                text-[11px]
                font-medium
                text-black/45
              "
            >
              Continuous learning
            </span>
          </div>

          <p
            className="
              max-w-[520px]
              text-[12px]
              leading-6
              text-black/40
              sm:text-right
            "
          >
            Technology evolves continuously. So does my knowledge,
            through projects, certifications, experimentation and
            hands-on learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}