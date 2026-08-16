"use client";

import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="max-w-6xl mx-auto px-4 py-6 flex justify-between items-center text-sm font-medium tracking-tight">
      <div className="flex items-center gap-2">
        <div className="bg-[#18181b] text-white p-1 rounded-full w-8 h-8 flex items-center justify-center">
          <span className="font-bold text-xs">A</span>
        </div>
        <span>Alex Chen.</span>
      </div>
      <div className="flex items-center gap-2 text-[#71717a]">
        <span>Full Stack Developer Portfolio</span>
        <Search size={16} />
      </div>
    </header>
  );
}