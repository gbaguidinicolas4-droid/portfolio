"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-7 sm:px-10 lg:px-16 lg:py-9">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">

          {/* LEFT */}
          <div className="flex items-center gap-6">
            {/* PHOTO */}
            <div className="relative h-[155px] w-[115px] shrink-0 overflow-hidden rounded-2xl">
              <Image
                src="/profile.jpg"
                alt="Nicolas Gbaguidi"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            {/* IDENTITY */}
            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.25em] text-white/40">
                Portfolio
              </p>

              <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Nicolas Gbaguidi
              </h3>

              <p className="mt-1 text-sm text-white/60">
                Network & Front-end Developer
              </p>

              <p className="mt-4 max-w-md text-xs leading-relaxed text-white/40 sm:text-sm">
                Building reliable networks, modern interfaces and meaningful
                digital experiences through technology and continuous learning.
              </p>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-6 lg:pl-10">

            {/* NAVIGATION */}
            <div>
              <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/35">
                Explore
              </p>

              <nav className="grid grid-cols-2 gap-x-8 gap-y-1">
                <Link
                  href="#about"
                  className="group flex items-center justify-between border-b border-white/10 py-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  About
                  <ArrowUpRight
                    size={15}
                    className="opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  href="#expertise"
                  className="group flex items-center justify-between border-b border-white/10 py-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  Expertise
                  <ArrowUpRight
                    size={15}
                    className="opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  href="#projects"
                  className="group flex items-center justify-between border-b border-white/10 py-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  Projects
                  <ArrowUpRight
                    size={15}
                    className="opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>

                <Link
                  href="#journey"
                  className="group flex items-center justify-between border-b border-white/10 py-2 text-sm text-white/70 transition-colors hover:text-white"
                >
                  Journey
                  <ArrowUpRight
                    size={15}
                    className="opacity-40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </Link>
              </nav>
            </div>

            {/* SOCIALS */}
            <div className="flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.25em] text-white/35">
                Connect
              </p>

              <div className="flex gap-2">


                <a
  href="mailto:gbaguidinicolas4@gmail.com"
                  aria-label="Email"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black"
                >
                  <Mail size={15} />
                </a>

                <a 
                href="https://www.facebook.com/share/19MexvNU6f/?mibextid=wwXIfr" 
                aria-label="Facebook" 
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black" >
                   <FaFacebookF size={15} /> 
                   </a>
                   
                    <a 
                    href="https://www.instagram.com/gbaguidinicolas?igsi=M2E4aTljeHh1OWdw&utm_source=qr" 
                    aria-label="Instagram"
                     className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black" > 
                   <FaInstagram size={15} /> 
                    </a>

                    <a 
                    href="https://x.com/gbaguidini65131?s=11" 
                    aria-label="X" 
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/60 transition-all duration-300 hover:border-white/30 hover:bg-white hover:text-black" > 
                    <FaXTwitter size={15} /> 
                    </a>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-7 flex flex-col gap-2 border-t border-white/10 pt-4 text-[10px] text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Nicolas Gbaguidi</p>

          <p className="tracking-wide">
            Network · Telecommunications · Front-end
          </p>
        </div>
      </div>
    </footer>
  );
}