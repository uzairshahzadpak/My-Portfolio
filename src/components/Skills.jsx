

"use client";

import {
  Code2,
  Palette,
  Database,
  Wrench,
  ShieldCheck,
} from "lucide-react";

const groups = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Next.js",
    ],
  },
  {
    title: "Styling & Design",
    icon: Palette,
    skills: [
      "Tailwind CSS",
      "Responsive Design",
      "CSS Animations",
    ],
  },
  {
    title: "Backend & Database",
    icon: Database,
    skills: [
      "REST APIs",
      "MongoDB",
      "Mongoose",
    ],
  },
  {
    title: "Authentication & Media",
    icon: ShieldCheck,
    skills: [
      "Clerk Authentication",
      "Cloudinary",
      "User Management",
      "Image Upload",
    ],
  },
  {
    title: "Tools & Deployment",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="section-padding relative overflow-hidden bg-white/[0.015]"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-violet-600/[0.07] blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-fuchsia-600/[0.06] blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">
            MY SKILLS
          </span>

          <h2 className="section-title mt-4">
            Technologies I{" "}
            <span className="gradient-text">
              work with.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-zinc-400 sm:text-base sm:leading-8">
            Technologies and tools I use to build
            responsive websites, interactive user
            interfaces, and full-stack web applications.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {groups.map((group, index) => {
            const Icon = group.icon;

            return (
              <div
                key={group.title}
                className="glass-card group min-w-0 rounded-2xl border border-white/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-xl hover:shadow-violet-950/10 sm:p-7"
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >
                {/* Card Heading */}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-400/20 bg-violet-500/10 text-violet-300 transition-all duration-300 group-hover:scale-105 group-hover:bg-violet-500/15">
                    <Icon size={22} />
                  </div>

                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {group.title}
                  </h3>
                </div>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-white/10 bg-white/[0.025] px-3 py-2 text-xs leading-5 text-zinc-300 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-violet-200 sm:text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Message */}
        <div className="mt-10 text-center sm:mt-12">
          <p className="text-sm leading-7 text-zinc-400">
            Always learning, building, and improving my skills.
          </p>
        </div>
      </div>
    </section>
  );
}


