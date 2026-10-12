
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.07] bg-[#08080d]/80 backdrop-blur-xl">
      <nav className="container-custom flex h-[76px] items-center justify-between">
        <Link
          href="#home"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-purple-800 font-extrabold text-white shadow-lg shadow-purple-900/30">
            US
          </span>

          <span className="text-base font-bold tracking-tight sm:text-lg">
            Uzair<span className="text-violet-400">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-violet-300"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="btn-primary hidden min-h-10 rounded-lg px-4 text-sm sm:inline-flex"
        >
          Let&apos;s Talk <ArrowUpRight size={16} />
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-white md:hidden"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/[0.06] bg-[#0b0a12] transition-all duration-300 md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="container-custom flex flex-col gap-1 py-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm text-zinc-300 transition hover:bg-violet-500/10 hover:text-violet-300"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}



