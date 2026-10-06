import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { socials, navLinks } from "@/data/socials";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-zinc-950 text-zinc-300">
      <div className="pointer-events-none absolute -top-32 right-[-8rem] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex select-none items-center overflow-hidden"
      >
        <span className="footer-name-animation whitespace-nowrap text-[22vw] font-black leading-none tracking-[-0.08em] text-accent/[0.24]">
          MELANIE
        </span>
      </div>
      <div className="relative mx-auto max-w-6xl px-4 pb-8 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.4fr_0.7fr_1fr] md:gap-16">
          <div>
            <a href="/#home" className="inline-flex text-2xl font-bold tracking-tight text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
              Melanie<span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
              Software developer and embedded systems enthusiast in Rwanda, building thoughtful technology for real-world needs.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a href={socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-accent/50 hover:bg-accent/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <Github className="h-4 w-4" />
              </a>
              {socials.linkedin && (
                <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-accent/50 hover:bg-accent/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  <Linkedin className="h-4 w-4" />
                </a>
              )}
              <a href={`mailto:${socials.email}`} aria-label="Send Melanie an email" className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition hover:border-accent/50 hover:bg-accent/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Explore</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={`/${link.href}`} className="text-sm text-zinc-400 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">{link.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">Have something in mind?</h2>
            <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-400">I’m open to internships, collaborations, and interesting projects.</p>
            <a href={`mailto:${socials.email}`} className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
              Get in touch <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Ndikubwimana Melanie. All rights reserved.</p>
          <p>Designed and built with care in Rwanda.</p>
        </div>
      </div>
    </footer>
  );
}
