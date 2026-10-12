"use client";

import {
  ArrowUpRight,
  Mail,
  MapPin,
  Code2,
  BriefcaseBusiness,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const emailLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=uzairshahzad.pak%40gmail.com&su=Junior%20Web%20Developer%20or%20Internship%20Opportunity";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-violet-600/10 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-fuchsia-600/[0.07] blur-3xl sm:h-80 sm:w-80" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <span className="section-label">CONTACT ME</span>
            <h2 className="section-title mt-4 text-balance">
              Looking for an <span className="gradient-text">Opportunity?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[14.5px] leading-[1.85] text-zinc-400 sm:text-[16px]">
              I&apos;m currently looking for internship opportunities and
              Junior Web Developer positions. I&apos;m eager to learn from
              experienced developers and contribute to real-world projects.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2.5 text-xs font-medium tracking-wide text-violet-200">
                Web Development Intern
              </span>
              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2.5 text-xs font-medium tracking-wide text-violet-200">
                Junior Web Developer
              </span>
            </div>
          </div>

          {/* Contact Cards - Spacing Fix */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7">
            {/* Email Card */}
            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group flex min-w-0 flex-col rounded-[20px] border border-white/[0.08] p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-violet-400/30 hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-violet-400/15 bg-violet-500/10 text-violet-300 transition-transform duration-300 group-hover:scale-105">
                  <Mail size={22} strokeWidth={1.8} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                />
              </div>
              <h3 className="mt-8 text-[19px] font-semibold tracking-tight text-white">
                Email Me
              </h3>
              <p className="mt-4 text-[14px] leading-[1.75] text-zinc-400">
                Have an internship opportunity or hiring for a Junior Web
                Developer position? I&apos;d love to connect and discuss how I
                can contribute.
              </p>
              <p className="mt-5 break-all text-[14px] font-medium leading-7 text-violet-300">
                uzairshahzad.pak@gmail.com
              </p>
              <span className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-[13.5px] font-medium tracking-wide text-zinc-300">
                Send an email
                <ArrowUpRight size={15} />
              </span>
            </a>

            {/* Location Card */}
            <div className="glass-card group flex min-w-0 flex-col rounded-[20px] border border-white/[0.08] p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-violet-400/20 sm:p-8">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-violet-400/15 bg-violet-500/10 text-violet-300">
                <MapPin size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mt-8 text-[19px] font-semibold tracking-tight text-white">
                Location
              </h3>
              <p className="mt-4 text-[14px] leading-[1.75] text-zinc-400">
                I&apos;m based in Islamabad, Pakistan, and looking for
                opportunities to grow professionally and work with a
                development team.
              </p>
              <p className="mt-5 text-[14px] font-medium leading-7 text-violet-300">
                Islamabad, Pakistan
              </p>
              <div className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-[13.5px] text-zinc-300">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
                Open to opportunities
              </div>
            </div>

            {/* Skills Card */}
            <div className="glass-card group flex min-w-0 flex-col rounded-[20px] border border-white/[0.08] p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-violet-400/20 sm:p-8">
              <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-violet-400/15 bg-violet-500/10 text-violet-300">
                <Code2 size={22} strokeWidth={1.8} />
              </div>
              <h3 className="mt-8 text-[19px] font-semibold tracking-tight text-white">
                My Skills
              </h3>
              <p className="mt-4 text-[14px] leading-[1.75] text-zinc-400">
                I build responsive websites and web applications using modern
                frontend and backend technologies.
              </p>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {[
                  "React",
                  "Next.js",
                  "JavaScript",
                  "Tailwind CSS",
                  "MongoDB",
                  "Mongoose",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-[8px] border border-violet-400/10 bg-violet-500/[0.06] px-3 py-2 text-[11.5px] font-medium tracking-wide text-violet-200/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="mt-8 border-t border-white/[0.06] pt-5 text-[13px] tracking-wide text-zinc-400">
                Always learning and improving
              </p>
            </div>

            {/* GitHub Card */}
            <a
              href="https://github.com/uzairshahzadpak"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
              className="glass-card group flex min-w-0 flex-col rounded-[20px] border border-white/[0.08] p-7 transition-all duration-400 hover:-translate-y-1.5 hover:border-violet-400/30 hover:shadow-[0_16px_40px_rgba(124,58,237,0.12)] sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-[52px] w-[52px] items-center justify-center rounded-[14px] border border-violet-400/15 bg-violet-500/10 text-violet-300 transition-transform duration-300 group-hover:scale-105">
                  <FaGithub size={22} />
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
                />
              </div>
              <h3 className="mt-8 text-[19px] font-semibold tracking-tight text-white">
                GitHub Profile
              </h3>
              <p className="mt-4 text-[14px] leading-[1.75] text-zinc-400">
                Explore my web development projects, repositories, and source
                code to see what I&apos;ve been building.
              </p>
              <p className="mt-5 break-all text-[14px] font-medium leading-7 text-violet-300">
                github.com/uzairshahzadpak
              </p>
              <span className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5 text-[13.5px] font-medium tracking-wide text-zinc-300">
                Explore my projects
                <ArrowUpRight size={15} />
              </span>
            </a>
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 rounded-[20px] border border-violet-400/10 bg-gradient-to-br from-violet-500/[0.08] to-transparent px-7 py-10 text-center sm:mt-14 sm:px-10 sm:py-12">
            <BriefcaseBusiness size={28} className="mx-auto text-violet-300" />
            <h3 className="mt-5 text-[20px] font-bold tracking-tight text-white sm:text-[22px]">
              Let&apos;s Work Together
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[14px] leading-[1.8] text-zinc-400 sm:text-[15px]">
              If you&apos;re hiring a Junior Web Developer or offering an
              internship, I&apos;d love to hear from you and contribute to your
              team.
            </p>
            <a
              href={emailLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-8 inline-flex min-h-[46px] max-w-full items-center justify-center gap-2 rounded-xl px-8 py-3.5 text-[14px] font-semibold"
            >
              <Mail size={16} />
              Get in Touch
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}