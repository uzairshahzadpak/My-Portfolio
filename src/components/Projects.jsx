
import {
  ArrowUpRight,
  ShoppingBag,
  Layers3,
  CakeSlice,
  GraduationCap,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Libas",
    type: "Clothing E-commerce",
    description:
      "A modern clothing e-commerce website featuring product management, product details, shopping cart, checkout, customer authentication, image uploads, and order tracking.",
    icon: ShoppingBag,
    number: "01",
    tech: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "Clerk",
      "Tailwind CSS",
    ],
    live: "https://libas-eta.vercel.app/",
    github: "https://github.com/uzairshahzadpak/libas",
    featured: true,
  },
  {
    name: "Admission Form",
    type: "Full-Stack Web Application",
    description:
      "An admission form project designed to collect student information, including profile image upload, with backend database integration.",
    icon: GraduationCap,
    number: "02",
    tech: [
      "Next.js",
      "MongoDB",
      "Mongoose",
      "Cloudinary",
      "JavaScript",
    ],
    live: "https://admission-form-phi-coral.vercel.app/",
    github: "https://github.com/uzairshahzadpak/admission-form",
    featured: false,
  },
  {
    name: "Sweet Cravings",
    type: "Dessert Website",
    description:
      "A dessert website showcasing sweet treats with an attractive product display and an interactive shopping cart experience.",
    icon: CakeSlice,
    number: "03",
    tech: ["React", "JavaScript", "CSS"],
    live: "https://sweet-cravings-eight.vercel.app/",
    github: "https://github.com/uzairshahzadpak/Sweet-Cravings-",
    featured: false,
  },
  {
    name: "Topic Manager",
    type: "CRUD Web Application",
    description:
      "A full-stack application that allows users to create, view, edit, and delete topics and descriptions stored in MongoDB.",
    icon: Layers3,
    number: "04",
    tech: ["Next.js", "MongoDB", "Mongoose", "Tailwind CSS"],
    live: "https://topic-manager.vercel.app/",
    github: "https://github.com/uzairshahzadpak/Topic-Manager",
    featured: false,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding relative overflow-hidden"
    >
      <div className="container-custom relative z-10">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <span className="section-label">Featured Projects</span>

            <h2 className="section-title">
              Things I&apos;ve{" "}
              <span className="gradient-text">built.</span>
            </h2>
          </div>

          <p className="max-w-sm leading-7 text-zinc-400">
            A selection of my web development projects, built using
            modern technologies while learning and practicing
            full-stack development.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.name}
                className={`glass-card group relative overflow-hidden rounded-2xl border border-white/[0.08] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-950/20 ${
                  project.featured ? "md:col-span-2" : ""
                }`}
              >
                {/* Project visual */}
                <div
                  className={`relative flex items-center justify-center overflow-hidden border-b border-white/[0.06] bg-gradient-to-br from-violet-950/60 via-[#13111e] to-[#0b0b12] ${
                    project.featured
                      ? "h-52 sm:h-60"
                      : "h-44"
                  }`}
                >
                  <div className="absolute h-36 w-36 rounded-full bg-violet-500/20 blur-3xl transition-transform duration-500 group-hover:scale-125" />

                  <span className="absolute left-5 top-5 font-mono text-sm text-violet-300/60">
                    PROJECT_{project.number}
                  </span>

                  <Icon
                    size={project.featured ? 82 : 65}
                    strokeWidth={1.2}
                    className="relative text-violet-300 transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="absolute bottom-5 right-5 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs text-zinc-300 backdrop-blur-md">
                    {project.type}
                  </span>

                  {project.featured && (
                    <span className="absolute bottom-5 left-5 rounded-lg border border-violet-400/20 bg-violet-500/10 px-3 py-2 text-xs text-violet-200">
                      Featured Project
                    </span>
                  )}
                </div>

                {/* Project information */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-violet-300">
                      {project.name}
                    </h3>

                    <span className="font-mono text-sm text-violet-300">
                      {project.number}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
                    {project.description}
                  </p>

                  {/* Technology badges */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-violet-400/10 bg-violet-500/[0.08] px-2.5 py-1.5 text-xs text-violet-200 transition-colors duration-200 hover:border-violet-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Live demo and GitHub buttons */}
                  <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm transition-transform duration-200 hover:scale-[1.03]"
                    >
                      Live Demo
                      <ArrowUpRight size={16} />
                    </a>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex min-h-10 items-center justify-center gap-2 rounded-lg px-4 text-sm transition-transform duration-200 hover:scale-[1.03]"
                    >
                      <FaGithub size={16} />
                      Source Code
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}



