
"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function HopeRiseProject() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-white px-5 py-8 text-black sm:px-8 lg:px-12 xl:px-16">
      <div className="mx-auto max-w-[1440px]">

        <button
          onClick={() => router.back()}
          className="group mb-12 flex items-center gap-2 text-sm text-black/55 transition-colors hover:text-black"
        >
          <ArrowLeft size={17} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </button>

        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.25em] text-black/40">
              03 · Digital Platform
            </p>

            <h1 className="text-[clamp(4rem,10vw,9rem)] font-semibold leading-[0.82] tracking-[-0.08em]">
              Hope Rise<span className="text-[#CBFB45]">.</span>
            </h1>
          </div>

          <p className="max-w-[520px] text-[15px] leading-8 text-black/55">
            A modern digital platform designed to deliver an accessible,
            engaging and responsive experience across different devices.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[32px] bg-[#F7F7F4]">
          <img
            src="/Hope.png"
            alt="Hope Rise project"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_0.7fr]">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
              About the project
            </p>

            <p className="max-w-[700px] text-[17px] leading-8 text-black/65">
              Hope Rise is a digital platform designed to provide a clear,
              accessible and engaging experience. The interface adapts to
              different screen sizes while maintaining a consistent visual
              identity.
            </p>
          </div>

          <div>
            <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
              Technologies
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "Tailwind CSS"].map(
                (technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-black/10 px-4 py-2 text-xs text-black/60"
                  >
                    {technology}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-black/10 pt-8">
          <a
            href="https://charity-org-taupe.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex w-fit items-center gap-3 rounded-full bg-black px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#CBFB45] hover:text-black"
          >
            Visit live project

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={14} />
            </span>
          </a>
        </div>

      </div>
    </main>
  );
}
