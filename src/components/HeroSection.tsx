"use client";

import RevealMotion from "./RevealMotion";

export default function HeroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Left: Tags & Arrow */}
        <RevealMotion className="md:col-span-3">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl border border-white p-6 flex flex-col justify-between min-h-[300px] relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
            {/* Big Arrow Icon */}
            <div className="mb-8">
              <svg
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transform group-hover:rotate-45 transition-transform duration-500 text-brand-dark"
              >
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Tags */}
            <div className="space-y-2 text-sm font-medium text-text-secondary">
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                  #Frontend
                </span>
                <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                  #Backend
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                  #React_Native
                </span>
                <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                  #NodeJS
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                  #UI/UX_Engineering
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full border border-gray-200">
                  #Cloud_Architecture
                </span>
              </div>
            </div>
          </div>
        </RevealMotion>

        {/* Right: Blue Portfolio Box */}
        <RevealMotion className="md:col-span-9">
          <div className="bg-brand-primary rounded-xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[400px] shadow-sm">
            {/* Decorative spinning SVG */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <svg
                className="absolute right-[-10%] bottom-[-10%] w-[80%] h-[80%] text-white animate-spin-slow"
                viewBox="0 0 200 200"
                fill="currentColor"
              >
                <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 160c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z"></path>
              </svg>
            </div>

            <h1 className="relative z-10 text-white font-black text-6xl md:text-8xl leading-none tracking-tighter">
              PORT
              <br />
              FOLIO
            </h1>
            <div className="relative z-10 mt-2 text-white font-bold text-4xl tracking-tighter flex items-center gap-2">
              <span>2024</span>
              <div className="h-1 w-20 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </RevealMotion>
      </div>
    </section>
  );
}
