"use client";

import { ChevronDown, Globe, CheckCircle } from "lucide-react";

const experience = [
  {
    period: "2023-Present",
    company: "TechCorp Inc.",
    role: "Senior Frontend Developer (React, Next.js, Tailwind)",
    progress: "3/4",
    start: "Jan",
    end: "Present",
    active: true,
  },
  {
    period: "2021-2023",
    company: "StartupStudio",
    role: "Full Stack Engineer (MERN Stack, AWS)",
    progress: "full",
    start: "Mar",
    end: "Dec",
    active: true,
  },
  {
    period: "2019-2021",
    company: "WebSolutions",
    role: "Junior Web Developer",
    active: false,
  },
];

const softskills = ["#Problem_Solving", "#Teamwork", "#Agile", "#Communication", "#Adaptability"];

const education = [
  { year: "2018", school: "Stanford University", degree: "B.S. Computer Science", detail: "GPA 3.9/4.0" },
  { year: "2019-2020", school: "Udacity Nanodegree", degree: "Full Stack Web Developer" },
  { year: "2015-2018", school: "San Francisco High", degree: "Science & Math", detail: "Honors Program" },
];

export default function Resume() {
  return (
    <section id="resume" className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-4">
      {/* Experience Column */}
      <div className="md:col-span-4 bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm flex flex-col">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[#18181b]">Experience</h3>
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-white cursor-pointer transition-colors">
            <ChevronDown size={14} />
          </div>
        </div>

        <div className="space-y-4 flex-1">
          {experience.map((job) => (
            <div
              key={job.period}
              className={`p-5 rounded-xl border shadow-sm relative group transition-shadow ${
                job.active
                  ? "bg-white border-gray-100 hover:shadow-md"
                  : "bg-white/40 border-gray-200 shadow-none opacity-70 hover:opacity-100"
              }`}
            >
              <div className="absolute top-4 right-4 text-gray-300 group-hover:text-[#1a56db] transition-colors">
                {job.active ? <Globe size={16} /> : <CheckCircle size={16} />}
              </div>
              <span
                className={`text-white text-[10px] font-bold px-2 py-1 rounded-md mb-2 inline-block ${
                  job.active ? "bg-[#1a56db]" : "bg-zinc-500"
                }`}
              >
                {job.period}
              </span>
              <div className="mt-1">
                <p className="text-xs text-[#71717a] font-semibold uppercase tracking-wider">
                  {job.company}
                </p>
                <h4 className="font-bold text-sm mt-1 leading-tight text-[#18181b]">{job.role}</h4>
              </div>
              {job.progress && (
                <>
                  <div className="mt-4 h-1.5 w-full bg-[#f3f4f6] rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-[#18181b] rounded-full ${
                        job.progress === "full" ? "w-full" : "w-3/4"
                      }`}
                    />
                  </div>
                  <div className="flex justify-between mt-2 text-[10px] text-gray-400 font-medium">
                    <span>{job.start}</span>
                    <span>{job.end}</span>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Expertise & Skills Column */}
      <div className="md:col-span-4 flex flex-col gap-4">
        {/* Expertise Text */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#18181b]">Expertise</h3>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <ChevronDown size={14} />
            </div>
          </div>
          <p className="text-sm font-medium text-[#71717a] leading-relaxed">
            Full Stack Development, Cloud Architecture, Database Design, API Development, UI/UX
            Implementation, CI/CD Pipelines.
          </p>
        </div>

        {/* Hard Skills */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm flex-1">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#18181b]">Hardskill</h3>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <ChevronDown size={14} />
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden h-40 mb-4 group shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              alt="Desk setup"
            />
            <div className="absolute bottom-2 left-2 right-2 flex justify-center gap-2 bg-black/60 backdrop-blur-md p-2 rounded-lg border border-white/10 animation-float">
              <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-blue-400 font-bold text-xs border border-white/20 shadow-lg">Ra</div>
              <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xs border border-white/20 shadow-lg">Js</div>
              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xs border border-white/20 shadow-lg">No</div>
              <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-xs border border-white/20 shadow-lg">Gi</div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-white shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-[#18181b]">Softskill</h3>
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <ChevronDown size={14} />
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {softskills.map((skill, i) => (
              <span
                key={skill}
                className={`text-xs px-3 py-1.5 rounded-full font-medium shadow-sm ${
                  i === 0
                    ? "bg-[#1a56db] text-white"
                    : "bg-white border border-zinc-200 text-[#71717a]"
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Education Column */}
      <div className="md:col-span-4 flex flex-col gap-4">
        <div className="flex justify-between items-center mb-2 px-2">
          <h3 className="text-xl font-bold text-[#18181b]">Education</h3>
          <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
            <ChevronDown size={14} />
          </div>
        </div>

        {education.map((edu) => (
          <div
            key={edu.year}
            className="bg-[#18181b] text-white p-6 rounded-xl relative overflow-hidden group hover:scale-[1.02] transition-transform shadow-lg cursor-default"
          >
            <div className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-2 py-1 rounded-md shadow-sm">
              {edu.year}
            </div>
            <div className="absolute top-4 right-4 text-white/50 group-hover:text-white transition-colors">
              <CheckCircle size={16} />
            </div>
            <div className="mt-10">
              <p className="text-zinc-400 text-xs mb-1 font-medium tracking-wide uppercase">
                {edu.school}
              </p>
              <h4 className="font-bold text-lg">{edu.degree}</h4>
              {edu.detail && (
                <p className="text-zinc-500 text-[10px] mt-1">{edu.detail}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}