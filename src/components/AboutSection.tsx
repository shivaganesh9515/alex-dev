"use client";

import RevealMotion from "./RevealMotion";

export default function AboutSection() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Photo Card */}
        <RevealMotion className="md:col-span-5">
          <div className="h-[500px] md:h-auto relative rounded-xl overflow-hidden group shadow-sm bg-gray-900 border border-white">
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

            <div className="absolute top-8 left-8">
              <p className="text-white/80 text-sm font-medium mb-1">Hello,</p>
              <h2 className="text-white text-5xl font-bold leading-tight">
                My name
                <br />
                is Alex
              </h2>
            </div>

            <div className="absolute bottom-8 left-8 right-8">
              <p className="text-gray-300 text-xs leading-relaxed max-w-xs backdrop-blur-md bg-black/40 p-4 rounded-xl border border-white/10">
                I consider myself as a hardworking developer who constantly
                seeks new technologies and explores diverse architectural
                patterns to deliver the best result in every project.
              </p>
            </div>
          </div>
        </RevealMotion>

        {/* Right Column */}
        <div className="md:col-span-7 flex flex-col gap-4">
          {/* Introduction Card */}
          <RevealMotion>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-white flex-1 relative overflow-hidden shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-text-primary">
                  Introduction
                </h3>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col items-center gap-6">
                <div className="flex-1">
                  <h4 className="text-lg font-bold mb-3 text-text-primary">
                    A Full Stack Developer based in San Francisco
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    While my academic background boasts a degree in Computer
                    Science, I've always had strong passion in building scalable
                    web applications. I love crafting code that is not only
                    clean and efficient but also solves real user problems
                    through innovation.
                  </p>
                </div>
                <div className="w-full flex-shrink-0 h-40 rounded-xl overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
                    className="w-full h-full object-cover"
                    alt="Coding illustration"
                  />
                </div>
              </div>
            </div>
          </RevealMotion>

          {/* Get In Touch */}
          <RevealMotion>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xl font-bold text-text-primary">
                  Get In Touch
                </h3>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {/* Email Card */}
                <a
                  href="mailto:alex@example.com"
                  className="bg-brand-dark rounded-xl p-4 h-32 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer group shadow-xl"
                >
                  <svg
                    className="text-white group-hover:text-brand-primary transition-colors"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="text-zinc-400 text-[10px] font-medium">
                    alex@dev.com
                  </span>
                </a>

                {/* LinkedIn Card */}
                <a
                  href="#"
                  className="bg-blue-600 rounded-xl p-4 h-32 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer group shadow-xl shadow-blue-200"
                >
                  <svg
                    className="text-white"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  <div className="w-full h-[1px] bg-white/30"></div>
                  <span className="text-blue-100 text-[10px] font-medium">
                    linkedin.com/in/alex
                  </span>
                </a>

                {/* GitHub Card */}
                <a
                  href="#"
                  className="bg-white border border-gray-200 rounded-xl p-4 h-32 flex flex-col justify-between hover:scale-[1.02] transition-transform cursor-pointer group"
                >
                  <svg
                    className="text-brand-dark"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  <div className="w-full h-[1px] bg-gray-200"></div>
                  <span className="text-text-secondary text-[10px] font-medium">
                    github.com/alexdev
                  </span>
                </a>
              </div>
            </div>
          </RevealMotion>
        </div>
      </div>
    </section>
  );
}
