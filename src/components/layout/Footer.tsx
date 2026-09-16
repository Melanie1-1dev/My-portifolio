"use client";

import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  Home,
  User,
  Code2,
  Briefcase,
  Sparkles,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { socials, navLinks } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden">
      {/* Top wave / curved edge */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-zinc-900 dark:to-zinc-950 pointer-events-none" />

      <div className="relative bg-zinc-900 dark:bg-zinc-950 text-zinc-300 pt-20 pb-32">
        {/* Large faded background name */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <span className="text-[12vw] font-bold text-white/[0.03] tracking-tighter whitespace-nowrap">
            MELANIE
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {/* Left – Brand + short bio + socials */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                Melanie<span className="text-accent">.</span>
              </h2>
              <p className="text-sm leading-relaxed text-zinc-400 max-w-xs">
                Building technology solutions that are reliable, useful, and
                meaningful. Focused on software, embedded systems, and real-world
                impact from Rwanda.
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                {socials.linkedin ? (
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                ) : null}
                <a
                  href={`mailto:${socials.email}`}
                  className="w-10 h-10 rounded-xl border border-zinc-700 flex items-center justify-center text-zinc-400 hover:text-white hover:border-accent/50 hover:bg-accent/10 transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Middle – Navigation */}
            <div>
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-5">
                Navigation
              </p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-zinc-300 hover:text-white transition-colors text-[15px]"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right – Status */}
            <div>
              <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-5">
                Status
              </p>
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                </span>
                <span className="text-white font-medium">Open to opportunities</span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed mb-6 max-w-xs">
                I am currently looking for internships, collaborations, and
                interesting projects to build and learn from.
              </p>
              <a
                href={`mailto:${socials.email}`}
                className="inline-flex items-center gap-2 text-accent font-medium text-sm hover:underline underline-offset-4"
              >
                START A CONVERSATION
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
            <p>© {new Date().getFullYear()} Ndikubwimana Melanie. All rights reserved.</p>

            {/* Floating pill navigation (inspired by the screenshot) */}
            <div className="relative">
              <div className="flex items-center gap-1 bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 rounded-full px-2 py-1.5 shadow-xl">
                <a
                  href="#home"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                  aria-label="Home"
                >
                  <Home className="w-4 h-4" />
                </a>
                <a
                  href="#about"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                  aria-label="About"
                >
                  <User className="w-4 h-4" />
                </a>
                <a
                  href="#skills"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                  aria-label="Skills"
                >
                  <Code2 className="w-4 h-4" />
                </a>
                <Link
                  href="/projects"
                  className="w-9 h-9 rounded-full flex items-center justify-center bg-accent text-white shadow-md"
                  aria-label="Projects"
                >
                  <Briefcase className="w-4 h-4" />
                </Link>
                <a
                  href="#education"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                  aria-label="Education"
                >
                  <GraduationCap className="w-4 h-4" />
                </a>
                <a
                  href="#contact"
                  className="w-9 h-9 rounded-full flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                  aria-label="Contact"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>

            <p className="flex items-center gap-1.5">
              MADE WITH <span className="text-red-400">♥</span> IN RWANDA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
