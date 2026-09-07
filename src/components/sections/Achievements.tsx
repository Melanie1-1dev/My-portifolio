"use client";

import { motion } from "framer-motion";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">
            Achievements
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Journey so far
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-700 p-10 text-center"
        >
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md mx-auto">
            Hackathons, competitions, certifications, leadership roles, and open-source
            contributions will be listed here as they happen.
          </p>
          <p className="mt-4 text-sm text-zinc-400">
            Currently focused on building strong projects and continuous learning.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
