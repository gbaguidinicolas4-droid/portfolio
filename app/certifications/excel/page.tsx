
"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ExcelDataAnalysisCertificate() {
  return (
    <main className="min-h-screen bg-[#F7F7F4] px-4 py-6 text-black sm:px-8 sm:py-8 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        {/* BACK BUTTON */}

        <Link
          href="/#certifications"
          className="
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-black/10
            bg-white
            px-5
            py-3
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.12em]
            transition-all
            duration-300
            hover:border-black
            hover:bg-black
            hover:text-white
          "
        >
          <ArrowLeft size={15} />
          Back to certifications
        </Link>

        {/* TITLE */}

        <div className="mt-8 sm:mt-10">
          <p
            className="
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.25em]
              text-black/40
            "
          >
            Certificate
          </p>

          <h1
            className="
              mt-3
              text-4xl
              font-semibold
              leading-tight
              tracking-[-0.05em]
              sm:text-6xl
            "
          >
            Excel Fundamentals for Data Analysis
            <span className="text-[#CBFB45]">.</span>
          </h1>

          <p className="mt-3 text-sm text-black/50">
            Macquarie University · Coursera
          </p>
        </div>

        {/* PDF */}

        <div
          className="
            mt-8
            overflow-hidden
            rounded-[20px]
            border
            border-black/10
            bg-white
            shadow-[0_20px_60px_rgba(0,0,0,0.08)]
            sm:mt-10
            sm:rounded-[24px]
          "
        >
          <iframe
            src="/excel-data-analysis.pdf"
            title="Excel Fundamentals for Data Analysis Certificate"
            className="
              block
              h-[75vh]
              min-h-[650px]
              w-full
              sm:h-[82vh]
              sm:min-h-[750px]
              lg:h-[88vh]
              lg:min-h-[850px]
            "
          />
        </div>
      </div>
    </main>
  );
}
