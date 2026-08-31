"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  Mail,
  Github,
  Linkedin,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function LetsTalkPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F4] text-black">

      {/* HEADER */}
      <header className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <Link
          href="/"
          className="group flex items-center gap-2 text-sm font-medium"
        >
          <ArrowLeft
            size={17}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
          Back to home
        </Link>

        <span className="text-xs font-medium uppercase tracking-[0.2em] text-black/40">
          Let’s Talk
        </span>
      </header>

      {/* CONTENT */}
      <section className="mx-auto flex min-h-[calc(100vh-100px)] max-w-[1440px] items-center px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
        <div className="grid w-full gap-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-7 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#CBFB45]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/40">
                Get in touch
              </span>
            </div>

            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.06em] sm:text-7xl lg:text-[clamp(4rem,8vw,8rem)] lg:leading-[0.9]">
              Let’s
              <br />
              <span className="text-black/30">talk.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/50 sm:text-lg">
              Have a project in mind, an idea to discuss, or simply want to
              connect? I’m always open to new opportunities, collaborations,
              and conversations around technology, networks, and web
              development.
            </p>

            <a
              href="https://wa.me/2290156664877"
              className="
                group
                mt-8
                inline-flex
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
                hover:bg-[#CBFB45]
                hover:text-black
              "
            >
              <Mail size={17} />

              Start a conversation

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:pl-10"
          >
            <div className="rounded-[28px] bg-black p-7 text-white sm:p-9">

              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                Contact
              </p>

              <div className="mt-8 space-y-1">

               <a
  href="mailto:gbaguidinicolas4@gmail.com"

                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <div>
                    <p className="text-xs text-white/30">Email</p>
                    <p className="mt-1 text-base text-white/80">
                      gbaguidinicolas4@gmail.com
                    </p>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </a>

                <a
               href="https://www.linkedin.com/in/gbaguidinicolas4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <div className="flex items-center gap-4">
                    <FaLinkedinIn size={18} />

                    <div>
                      <p className="text-xs text-white/30">LinkedIn</p>
                      <p className="mt-1 text-base text-white/80">
                        Connect with me
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </a>

                <a
                href="https://github.com/gbaguidinicolas4-droid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5"
                >
                  <div className="flex items-center gap-4">
                    <FaGithub size={18} />

                    <div>
                      <p className="text-xs text-white/30">GitHub</p>
                      <p className="mt-1 text-base text-white/80">
                        Explore my projects
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-white/30 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                  />
                </a>

              </div>

              {/* STATUS */}
              <div className="mt-8 flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3">
                <span className="h-2 w-2 rounded-full bg-[#CBFB45]" />

                <span className="text-xs text-white/50">
                  Open to opportunities & collaborations
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}