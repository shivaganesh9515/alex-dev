"use client";

import RevealMotion from "./RevealMotion";

export default function Header() {
  return (
    <RevealMotion>
      <header className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center text-sm font-medium tracking-tight">
        <div className="flex items-center gap-2">
          <div className="bg-brand-dark text-white p-1 rounded-full w-8 h-8 flex items-center justify-center">
            <span className="font-bold text-xs">A</span>
          </div>
          <span>Alex Chen.</span>
        </div>
        <div className="flex items-center gap-2 text-text-secondary">
          <span>Full Stack Developer Portfolio</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
      </header>
    </RevealMotion>
  );
}
