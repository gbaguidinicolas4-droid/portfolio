
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#expertise" },
  { name: "Projects", href: "#projects" },
  { name: "Certifications", href: "#certifications" },
  { name: "Journey", href: "#journey" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  /* =====================================================
     SCROLL
  ====================================================== */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =====================================================
     ACTIVE SECTION
  ====================================================== */

  useEffect(() => {
    const handleActiveSection = () => {
      const scrollPosition = window.scrollY + 140;

      let currentSection = "about";

      navLinks.forEach((link) => {
        const sectionId = link.href.replace("#", "");
        const section = document.getElementById(sectionId);

        if (!section) return;

        const sectionTop =
          section.getBoundingClientRect().top +
          window.scrollY;

        if (scrollPosition >= sectionTop) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    handleActiveSection();

    window.addEventListener(
      "scroll",
      handleActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      handleActiveSection
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleActiveSection
      );

      window.removeEventListener(
        "resize",
        handleActiveSection
      );
    };
  }, []);

  /* =====================================================
     MOBILE MENU
  ====================================================== */

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      {/* =================================================
          HEADER
          
          Le header prend toute la largeur.
          Le vrai centrage est fait par le conteneur
          max-w-[1440px], exactement comme le Hero.
      ================================================== */}

      <motion.header
        initial={{
          y: -30,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          fixed
          inset-x-0
          top-0
          z-50
          w-full
          pt-5
        "
      >
        {/* =================================================
            HERO / NAVBAR ALIGNMENT CONTAINER

            EXACTEMENT LE MÊME CONTENEUR QUE TON HERO :

            max-w-[1440px]
            px-6
            sm:px-8
            lg:px-12
            xl:px-16
        ================================================== */}

        <div
          className="
            mx-auto
            w-full
            max-w-[1440px]
            px-6
            sm:px-8
            lg:px-12
            xl:px-16
            box-border
          "
        >
          {/* =================================================
              NAVBAR

              AVANT SCROLL
              → largeur 100% du conteneur Hero
              → parfaitement centrée

              APRÈS SCROLL
              → maximum 1100px
              → parfaitement centrée
          ================================================== */}

          <motion.nav
            animate={{
              width: scrolled
                ? "min(1100px, 100%)"
                : "100%",

              borderRadius: scrolled
                ? 999
                : 0,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`
              mx-auto
              flex
              h-[68px]
              items-center
              justify-between
              box-border
              px-5
              sm:px-7

              ${
                scrolled
                  ? `
                    border
                    border-black/10
                    bg-white/80
                    shadow-2xl
                    shadow-black/10
                    backdrop-blur-xl
                  `
                  : `
                    border-transparent
                    bg-transparent
                  `
              }
            `}
          >
            {/* =================================================
                LOGO
            ================================================== */}

            <a
              href="#home"
              className="
                group
                flex
                shrink-0
                items-center
                gap-3
              "
              aria-label="Nicolas Gbaguidi - Home"
            >
              {/* LOGO */}

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
                  bg-black/[0.04]
                  text-sm
                  font-semibold
                  tracking-tight
                  text-black
                  transition-all
                  duration-300

                  group-hover:border-[#CBFB45]/50
                  group-hover:bg-[#CBFB45]
                  group-hover:text-black
                "
              >
                NG
              </div>

              {/* NAME */}

              <div className="hidden sm:block">
                <p
                  className="
                    text-[13px]
                    font-medium
                    tracking-tight
                    text-black
                  "
                >
                  Nicolas Gbaguidi
                </p>

                <p
                  className="
                    text-[10px]
                    uppercase
                    tracking-[0.18em]
                    text-black/40
                  "
                >
                  Portfolio
                </p>
              </div>
            </a>

            {/* =================================================
                DESKTOP LINKS
            ================================================== */}

            <div
              className="
                hidden
                items-center
                gap-1
                lg:flex
              "
            >
              {navLinks.map((link, index) => {
                const sectionId = link.href.replace("#", "");
                const isActive =
                  activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    initial={{
                      opacity: 0,
                      y: -10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      delay: 0.1 + index * 0.06,
                      duration: 0.4,
                    }}
                    className="
                      group
                      relative
                      rounded-full
                      px-4
                      py-2.5
                      text-[13px]
                      font-medium
                      text-black/60
                      transition-colors
                      duration-300
                      hover:text-black
                    "
                  >
                    {link.name}

                    {/* ACTIVE / HOVER LINE */}

                    {isActive ? (
                      <motion.span
                        layoutId="active-nav-indicator"
                        className="
                          absolute
                          bottom-1.5
                          left-1/2
                          h-[1px]
                          w-5
                          -translate-x-1/2
                          bg-[#CBFB45]
                        "
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                          mass: 0.7,
                        }}
                      />
                    ) : (
                      <span
                        className="
                          absolute
                          bottom-1.5
                          left-1/2
                          h-[1px]
                          w-0
                          -translate-x-1/2
                          bg-[#CBFB45]
                          transition-all
                          duration-300
                          group-hover:w-5
                        "
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* =================================================
                DESKTOP CONTACT
            ================================================== */}

            <div
              className="
                hidden
                shrink-0
                lg:block
              "
            >
              <motion.a
                href="/lets-talk"
                whileHover={{
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className="
                  group
                  flex
                  items-center
                  gap-2
                  rounded-full
                  bg-black
                  px-5
                  py-3
                  text-[13px]
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#CBFB45]
                  hover:text-black
                "
              >
                Let's talk

                <ArrowUpRight
                  size={15}
                  strokeWidth={2.2}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </motion.a>
            </div>

            {/* =================================================
                MOBILE MENU BUTTON
            ================================================== */}

            <button
              type="button"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
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
                bg-black/[0.04]
                text-black
                transition-all
                duration-300
                hover:bg-black/[0.08]
                lg:hidden
              "
              aria-label={
                menuOpen
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
              }
            >
              {menuOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </motion.nav>
        </div>
      </motion.header>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -15,
            }}
            transition={{
              duration: 0.3,
            }}
            className="
              fixed
              left-1/2
              top-[96px]
              z-40
              w-[calc(100%-2rem)]
              max-w-[1440px]
              -translate-x-1/2
              overflow-hidden
              rounded-[24px]
              border
              border-black/10
              bg-white/95
              p-3
              shadow-2xl
              backdrop-blur-2xl
              lg:hidden
            "
          >
            <div className="flex flex-col">
              {/* =================================================
                  MOBILE LINKS
              ================================================== */}

              {navLinks.map((link, index) => {
                const sectionId = link.href.replace("#", "");
                const isActive =
                  activeSection === sectionId;

                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={handleLinkClick}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className={`
                      rounded-2xl
                      px-5
                      py-4
                      text-sm
                      font-medium
                      transition-colors
                      ${
                        isActive
                          ? "bg-black/[0.04] text-black"
                          : "text-black/65 hover:bg-black/[0.04] hover:text-black"
                      }
                    `}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              {/* =================================================
                  MOBILE CONTACT
              ================================================== */}

              <a
                href="/lets-talk"
                onClick={handleLinkClick}
                className="
                  mt-2
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-2xl
                  bg-[#CBFB45]
                  px-5
                  py-4
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:bg-[#b8e83b]
                "
              >
                Let's talk

                <ArrowUpRight
                  size={16}
                />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
