"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Building technology that matters
          </h2>

          <div className="space-y-5 text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
            <p>
              I&apos;m <strong className="text-zinc-900 dark:text-zinc-100">Ndikubwimana Melanie</strong>, a software development student at{" "}
              <strong className="text-zinc-900 dark:text-zinc-100">Rwanda Coding Academy</strong> (S5). I specialize in software development, web technologies, embedded systems, and artificial intelligence.
            </p>
            <p>
              My curiosity drives me to explore how code and hardware can solve real problems around me — from environmental monitoring to tools that help people build and validate ideas.
            </p>
            <p>
              I approach every project as a problem-solver: understand the challenge, design a practical solution, and ship something that works. I am continuously learning and already focused on building impactful products.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
