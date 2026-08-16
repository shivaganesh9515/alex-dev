"use client";

import { ArrowUpRight } from "lucide-react";

const tags = [
  ["#Frontend", "#Backend"],
  ["#React_Native", "#NodeJS"],
  ["#UI/UX_Engineering"],
  ["#Cloud_Architecture"],
];

export default function Hero() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
      {/* Left: Tags & Arrow */}
      <div className="md:col-span-3 bg-white/50 backdrop-blur-sm rounded-xl border border-white p-6 flex flex-col justify-between min-h-[300px] relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-300">
        <div className="mb-8">
          <ArrowUpRight
            size={80}
            strokeWidth={2.5}
            className="transform group-hover:rotate-45 transition-transform duration-500 text-[#18181b]"
          />
        </div>

        <div className="space-y-2 text-sm font-medium text-[#71717a]">
          {tags.map((row, i) => (
            <div key={i} className="flex flex-wrap gap-2">
              {row.map((tag) => (
                <span key={tag} className="bg-white px-3 py-1 rounded-full border border-gray-200">
                  {tag}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Right: Blue Portfolio Box */}
      <div className="md:col-span-9 bg-[#1a56db] rounded-xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-end min-h-[300px] md:min-h-[400px] shadow-sm">
        {/* Decorative Typography Art */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <svg
            className="absolute right-[-10%] bottom-[-10%] w-[80%] h-[80%] text-white animate-spin-slow"
            viewBox="0 0 200 200"
            fill="currentColor"
          >
            <path d="M100 0C44.8 0 0 44.8 0 100s44.8 100 100 100 100-44.8 100-100S155.2 0 100 0zm0 160c-33.1 0-60-26.9-60-60s26.9-60 60-60 60 26.9 60 60-26.9 60-60 60z" />
          </svg>
        </div>

        <h1 className="relative z-10 text-white font-black text-6xl md:text-8xl leading-none tracking-tighter">
          PORT<br />FOLIO
        </h1>
        <div className="relative z-10 mt-2 text-white font-bold text-4xl tracking-tighter flex items-center gap-2">
          <span>2024</span>
          <div className="h-1 w-20 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}