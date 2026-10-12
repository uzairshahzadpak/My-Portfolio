import Link from "next/link";
import { ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#09090f] py-12  pb-12">
      <div className="container-custom flex flex-col items-center justify-between gap-5 sm:flex-row">
        <Link
          href="#home"
          className="text-xl font-bold transition duration-300 hover:text-violet-300"
        >
          Uzair<span className="text-violet-400">.</span>
        </Link>

        <p className="text-center text-xs text-zinc-500 sm:text-sm">
          © 2026 Uzair Shahzad. Built with Next.js.
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/uzairshahzadpak"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="rounded-xl border border-white/10 p-3 text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="rounded-xl border border-white/10 p-3 text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
          >
            <FaLinkedin size={18} />
          </a>

          <Link
            href="#home"
            aria-label="Back to top"
            className="rounded-xl border border-white/10 p-3 text-zinc-400 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:text-violet-300"
          >
            <ArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}




