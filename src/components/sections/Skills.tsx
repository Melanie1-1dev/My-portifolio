"use client";

import { motion } from "framer-motion";
import { skillCategories, currentlyLearning } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Technologies I work with
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="space-y-4"
            >
              <h3 className="font-semibold text-lg">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800"
        >
          <h3 className="font-semibold text-lg mb-4">Currently Learning</h3>
          <div className="flex flex-wrap gap-3">
            {currentlyLearning.map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm rounded-lg bg-accent/10 text-accent border border-accent/20 font-medium"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
