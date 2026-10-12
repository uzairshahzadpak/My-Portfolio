
"use client";

import { ArrowDown, ArrowRight, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      
           
            className="section-padding relative overflow-hidden"

    >
      <div className="animated-bg glow-one pointer-events-none" />
      <div className="animated-bg glow-two pointer-events-none" />

      <div className="container-custom relative z-10 grid w-full grid-cols-1 items-center gap-10 sm:gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div className="relative z-10 min-w-0">
          <div className="fade-up mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-3 py-2 text-xs font-medium leading-relaxed text-violet-200 sm:mb-7 sm:gap-3 sm:px-5 sm:py-3 sm:text-sm">
            <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <span className="min-w-0">
              Open to Internships & Junior Web Developer Roles
            </span>
          </div>

          <p className="fade-up delay-1 mb-3 text-[15px] text-zinc-400 sm:mb-4 sm:text-lg">
            Hello, I&apos;m
          </p>

          <h1 className="fade-up delay-1 text-[40px] font-black leading-[0.95] tracking-tight sm:text-6xl xl:text-7xl">
            Uzair
             <br />
            <span className="gradient-text">Shahzad.</span>
          </h1>

          <h2 className="fade-up delay-2 mt-4 text-[19px] font-semibold leading-snug text-zinc-200 sm:mt-6 sm:text-2xl">
            Full-Stack Web Developer
          </h2>

          <p className="fade-up delay-2 mt-4 max-w-xl text-[14px] leading-[1.8] text-zinc-400 sm:mt-5 sm:text-lg sm:leading-8">
            I build modern, responsive web experiences using Next.js, React, and MongoDB — turning ideas into useful digital products.
          </p>

          <div className="fade-up delay-3 mt-6 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
            <Link href="#projects" className="btn-primary min-h-11 px-5 text-[14px] sm:px-6 sm:text-base">
              Explore My Work
              <ArrowRight size={18} />
            </Link>
            <Link href="#contact" className="btn-secondary min-h-11 px-5 text-[14px] sm:px-6 sm:text-base">
              Contact Me
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-9">
            <span className="mr-1 text-sm text-zinc-500">Find me on</span>
            <a href="https://github.com/uzairshahzadpak" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300">
              <FaGithub size={19} />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300">
              <FaLinkedin size={19} />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-[470px]">
          <div className="absolute inset-10 rounded-full bg-violet-600/20 blur-[90px]" />
          <div className="relative rounded-2xl border border-violet-400/20 bg-[#11101a]/90 p-4 shadow-2xl shadow-purple-950/30 sm:p-6 lg:animate-float">
            <div className="flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <div className="flex shrink-0 items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400" />
                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                <span className="h-3 w-3 rounded-full bg-green-400" />
              </div>
              <span className="text-xs text-zinc-500">developer.js</span>
              <Code2 size={17} className="shrink-0 text-violet-300" />
            </div>
            <div className="overflow-x-auto py-6 font-mono text-xs leading-7 sm:py-7 sm:text-sm sm:leading-8">
              <p className="text-zinc-500">{"// A little about me..."}</p>
              <p><span className="text-fuchsia-400">const</span> <span className="text-sky-300">developer</span> <span className="text-zinc-300">= {"{"}</span></p>
              <p className="pl-4"><span className="text-violet-300">name</span>: <span className="text-emerald-300">&quot;Uzair Shahzad&quot;</span>,</p>
              <p className="pl-4"><span className="text-violet-300">role</span>: <span className="text-emerald-300">&quot;Web Developer&quot;</span>,</p>
              <p className="pl-4"><span className="text-violet-300">stack</span>: [</p>
              <p className="pl-8 text-emerald-300">&quot;Next.js&quot;,</p>
              <p className="pl-8 text-emerald-300">&quot;React&quot;,</p>
              <p className="pl-8 text-emerald-300">&quot;MongoDB&quot;</p>
              <p className="pl-4">],</p>
              <p className="pl-4"><span className="text-violet-300">passion</span>: <span className="text-emerald-300">&quot;Building ideas&quot;</span></p>
              <p className="text-zinc-300">{"};"}</p>
              <p className="mt-3 text-violet-300"><span className="animate-pulse">▋</span></p>
            </div>
            <div className="flex flex-wrap gap-2 border-t border-white/10 pt-4">
              {["Next.js", "React", "Tailwind CSS", "MongoDB"].map((tech) => (
                <span key={tech} className="rounded-lg border border-violet-400/15 bg-violet-500/[0.07] px-3 py-2 text-xs text-violet-200">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute -right-3 top-10 hidden rounded-xl border border-white/10 bg-[#171421] px-4 py-3 shadow-xl sm:-right-5 sm:block">
            <p className="text-xs text-zinc-500">Building with</p>
            <p className="mt-1 text-sm font-bold text-violet-300">Creativity ✦</p>
          </div>
        </div>

        <Link href="#about" className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-zinc-500 transition hover:text-violet-300 md:flex">
          Scroll to explore
          <ArrowDown className="animate-bounce" size={17} />
        </Link>
      </div>
    </section>
  );
}


