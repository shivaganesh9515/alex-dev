"use client";

import RevealMotion from "./RevealMotion";

const experienceData = [
  {
    period: "2023-Present",
    company: "TechCorp Inc.",
    role: "Senior Frontend Developer (React, Next.js, Tailwind)",
    progress: "w-3/4",
    start: "Jan",
    end: "Present",
    icon: "globe",
  },
  {
    period: "2021-2023",
    company: "StartupStudio",
    role: "Full Stack Engineer (MERN Stack, AWS)",
    progress: "w-full",
    start: "Mar",
    end: "Dec",
    icon: "globe",
  },
  {
    period: "2019-2021",
    company: "WebSolutions",
    role: "Junior Web Developer",
    icon: "check",
  },
];

const educationData = [
  {
    year: "2018",
    school: "Stanford University",
    degree: "B.S. Computer Science",
    extra: "GPA 3.9/4.0",
  },
  {
    year: "2019-2020",
    school: "Udacity Nanodegree",
    degree: "Full Stack Web Developer",
  },
  {
    year: "2015-2018",
    school: "San Francisco High",
    degree: "Science & Math",
    extra: "Honors Program",
  },
];

export default function ResumeSection() {
  return (
    <section id="resume" className="max-w-6xl mx-auto px-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Experience Column */}
        <RevealMotion className="md:col-span-4">
          <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-text-primary">Experience</h3>
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white cursor-pointer transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>
            <div className="space-y-4 flex-1">
              {experienceData.map((job, i) => (
                <div key={job.period} className={`bg-white p-5 rounded-xl border border-gray-100 shadow-sm relative group hover:shadow-md transition-shadow ${i === 2 ? "opacity-70" : ""}`}>
                  <div className="absolute top-4 right-4 text-gray-300 group-hover:text-brand-primary transition-colors">
                    {job.icon === "globe" ? (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    )}
                  </div>
                  <span className="bg-brand-primary text-white text-[10px] font-bold px-2 py-1 rounded-md mb-2 inline-block">{job.period}</span>
                  <div className="mt-1">
                    <p className="text-xs text-text-secondary font-semibold uppercase tracking-wider">{job.company}</p>
                    <h4 className="font-bold text-sm mt-1 leading-tight text-text-primary">{job.role}</h4>
                  </div>
                  {job.progress && (
                    <>
                      <div className="mt-4 h-1.5 w-full bg-neutral-background rounded-full overflow-hidden">
                        <div className={`h-full ${job.progress} bg-brand-dark rounded-full`}></div>
                      </div>
                      <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-medium">
                        <span>{job.start}</span><span>{job.end}</span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </RevealMotion>

        {/* Expertise & Skills Middle Column */}
        <div className="md:col-span-4 flex flex-col gap-4">
          <RevealMotion>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-text-primary">Expertise</h3>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
              <p className="text-sm font-medium text-text-secondary leading-relaxed">Full Stack Development, Cloud Architecture, Database Design, API Development, UI/UX Implementation, CI/CD Pipelines.</p>
            </div>
          </RevealMotion>

          <RevealMotion>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm flex-1">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-text-primary">Hardskill</h3>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden h-40 mb-4 group shadow-inner">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Desk setup" />
                <div className="animation-float absolute bottom-2 left-2 right-2 flex justify-center gap-2 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10">
                  <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-blue-400 font-bold text-xs border border-white/20 shadow-lg">Ra</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xs border border-white/20 shadow-lg">Js</div>
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs border border-white/20 shadow-lg">No</div>
                  <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-xs border border-white/20 shadow-lg">Gi</div>
                </div>
              </div>
            </div>
          </RevealMotion>

          <RevealMotion>
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-text-primary">Softskill</h3>
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="bg-brand-primary text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">#Problem_Solving</span>
                <span className="bg-white border border-zinc-200 text-text-secondary text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">#Teamwork</span>
                <span className="bg-white border border-zinc-200 text-text-secondary text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">#Agile</span>
                <span className="bg-white border border-zinc-200 text-text-secondary text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">#Communication</span>
                <span className="bg-white border border-zinc-200 text-text-secondary text-xs px-3 py-1.5 rounded-full font-medium shadow-sm">#Adaptability</span>
              </div>
            </div>
          </RevealMotion>
        </div>

        {/* Education Column */}
        <RevealMotion className="md:col-span-4">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center mb-2 px-2">
              <h3 className="text-xl font-bold text-text-primary">Education</h3>
              <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
              </div>
            </div>
            {educationData.map((edu) => (
              <div key={edu.year} className="bg-brand-dark text-white p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-lg cursor-default">
                <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">{edu.year}</div>
                <div className="absolute top-4 right-4 text-white/50 group-hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                </div>
                <div className="mt-10">
                  <p className="text-zinc-400 text-xs mb-1 font-medium tracking-wide uppercase">{edu.school}</p>
                  <h4 className="font-bold text-lg">{edu.degree}</h4>
                  {edu.extra && <p className="text-zinc-500 text-[10px] mt-1">{edu.extra}</p>}
                </div>
              </div>
            ))}
          </div>
        </RevealMotion>
      </div>
    </section>
  );
}
