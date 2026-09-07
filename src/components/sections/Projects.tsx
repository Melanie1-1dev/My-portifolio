"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Things I&apos;ve built
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Real projects focused on solving problems with technology.
          </p>
        </motion.div>

        <div className="space-y-12">
          {featured.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 overflow-hidden hover:border-accent/40 transition-colors"
            >
              <div className="p-6 sm:p-8 lg:p-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="flex-1 space-y-4">
                    <h3 className="text-2xl font-bold tracking-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 pt-2">
                      <div>
                        <p className="text-xs font-mono text-accent mb-1">
                          Problem
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-mono text-accent mb-1">
                          Solution
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 lg:flex-col">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 dark:border-zinc-700 text-sm font-medium hover:border-accent hover:text-accent transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-hover transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
