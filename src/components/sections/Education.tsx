"use client";

import { motion } from "framer-motion";

export default function Education() {
  return (
    <section id="education" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">
            Education
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Where I&apos;m learning
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative pl-8 border-l-2 border-accent/30"
        >
          <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent" />
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Rwanda Coding Academy</h3>
            <p className="text-accent font-medium">
              Software Development / Embedded Systems
            </p>
            <p className="text-sm text-zinc-500">S5 · Nyabihu, Rwanda</p>
            <p className="text-zinc-600 dark:text-zinc-400 mt-3 max-w-2xl">
              Intensive three-year program focused on practical software engineering,
              embedded systems, web development, databases, and emerging technologies
              including AI and cybersecurity.
            </p>
          </div>
        </motion.div>

        {/* Placeholders for future certifications */}
        <div className="mt-12 text-sm text-zinc-500 dark:text-zinc-500">
          Certifications, workshops, and additional programs will appear here.
        </div>
      </div>
    </section>
  );
}
