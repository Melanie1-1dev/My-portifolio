"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowUpRight, ExternalLink, Github, HeartPulse } from "lucide-react";
import { projects } from "@/data/projects";

const filters = ["All", "Frontend", "Full-Stack", "Embedded"] as const;
type Filter = (typeof filters)[number];

function ProjectVisual({ title, category }: { title: string; category?: string }) {
  const healthProject = title === "Health Management System";

  return (
    <div className="relative h-52 overflow-hidden bg-zinc-900 p-5 sm:h-56">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,rgba(16,185,129,0.34),transparent_34%),radial-gradient(circle_at_90%_100%,rgba(59,130,246,0.28),transparent_38%)]" />
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="relative h-full rounded-xl border border-white/15 bg-zinc-950/60 p-4 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-medium text-white/75">
            {healthProject ? <HeartPulse className="h-4 w-4 text-emerald-300" /> : <span className="h-2.5 w-2.5 rounded-full bg-accent" />}
            {healthProject ? "Health overview" : category || "Project"}
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,1)]" />
        </div>
        {healthProject ? (
          <div className="mt-5 grid grid-cols-3 gap-3">
            {["Patients", "Appointments", "Records"].map((label, index) => (
              <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] p-2.5">
                <div className="h-1.5 w-7 rounded-full bg-white/30" />
                <p className="mt-2 text-lg font-semibold text-white">{["128", "24", "86"][index]}</p>
                <p className="text-[9px] text-white/55">{label}</p>
              </div>
            ))}
            <div className="col-span-3 mt-1 flex h-11 items-end gap-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 pb-2">
              {[28, 50, 35, 74, 48, 90, 63, 82, 58, 96].map((height, index) => (
                <span key={index} className="flex-1 rounded-sm bg-emerald-400/80" style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>
        ) : (
          <div className="mt-7">
            <div className="h-2 w-2/3 rounded-full bg-white/25" />
            <div className="mt-3 h-2 w-1/2 rounded-full bg-white/10" />
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="h-16 rounded-lg border border-white/10 bg-white/[0.06]" />
              <div className="h-16 rounded-lg border border-white/10 bg-white/[0.06]" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  const visibleProjects = useMemo(
    () => projects.filter((project) => project.featured && (activeFilter === "All" || project.category === activeFilter)),
    [activeFilter]
  );

  return (
    <main className="min-h-screen bg-zinc-50 py-10 text-zinc-950 dark:bg-zinc-950 dark:text-zinc-50 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-accent dark:text-zinc-400">
          <ArrowLeft className="h-4 w-4" /> Back to portfolio
        </Link>

        <header className="mt-12 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-sm tracking-wider text-accent">Portfolio</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">All projects</h1>
            <p className="mt-5 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Explore the systems, applications, and digital experiences I&apos;ve designed and built.
            </p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${activeFilter === filter ? "border-zinc-900 bg-zinc-900 text-white dark:border-white dark:bg-white dark:text-zinc-950" : "border-zinc-200 bg-white text-zinc-700 hover:border-accent hover:text-accent dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300"}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </header>

        <section className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project) => (
            <article key={project.id} className="group overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">
              <ProjectVisual title={project.title} category={project.category} />
              <div className="p-6">
                <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-accent">{project.category}</span>
                <h2 className="mt-4 text-2xl font-bold tracking-tight group-hover:text-accent">{project.title}</h2>
                <p className="mt-3 min-h-20 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => <span key={tech} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tech}</span>)}
                </div>
                <div className="mt-6 flex gap-3">
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"><ExternalLink className="h-4 w-4" /> View live</a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-semibold transition-colors hover:border-accent hover:text-accent dark:border-zinc-700"><Github className="h-4 w-4" /> Code</a>}
                  {!project.live && !project.github && <span className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500">In progress <ArrowUpRight className="h-4 w-4" /></span>}
                </div>
              </div>
            </article>
          ))}
        </section>

        <p className="mt-12 rounded-2xl border border-dashed border-zinc-300 px-6 py-8 text-center text-sm text-zinc-600 dark:border-zinc-700 dark:text-zinc-400">More projects are on the way — check back soon.</p>
      </div>
    </main>
  );
}
