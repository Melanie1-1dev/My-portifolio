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
            
  );
}