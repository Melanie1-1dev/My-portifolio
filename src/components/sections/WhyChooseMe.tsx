"use client";

import { motion } from "framer-motion";
import { Brain, Layers3, Lightbulb, Target } from "lucide-react";

const strengths = [
  {
    title: "Fast Learner",
    description:
      "Quickly mastering new technologies and adjusting to shifting requirements.",
    icon: Brain,
  },
  {
    title: "Domain Diversity",
    description:
      "Experience building systems for agriculture, mining, and edtech sectors.",
    icon: Layers3,
  },
  {
    title: "Problem Solver",
    description:
      "Focused on scalable architecture and efficient logic over quick hacks.",
    icon: Lightbulb,
  },
  {
    title: "Impact Driven",
    description:
      "Motivated by developing solutions that create real community difference.",
    icon: Target,
  },
];

export default function WhyChooseMe() {
  return (
    <section id="why-me" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 text-center text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl"
        >
          Why Choose Me?
        </motion.h2>

        <div className="grid gap-7 sm:grid-cols-2 xl:grid-cols-4">
          {strengths.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative min-h-[305px] rounded-[1.75rem] bg-white px-10 py-11 shadow-[0_5px_12px_rgba(24,24,27,0.12)] dark:bg-zinc-900 dark:shadow-[0_5px_12px_rgba(0,0,0,0.3)]"
            >
              <span className="absolute left-0 top-1/2 h-20 w-1.5 -translate-y-1/2 bg-accent" />
              <span className="absolute bottom-0 left-0 h-1.5 w-20 bg-accent" />
              <span className="absolute left-0 bottom-0 h-9 w-1.5 rounded-bl-[1.75rem] bg-accent" />
              <span className="absolute right-0 top-0 h-9 w-1.5 rounded-tr-[1.75rem] bg-accent" />
              <span className="absolute right-0 top-0 h-1.5 w-14 bg-accent" />

              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-md">
                <Icon className="h-8 w-8" strokeWidth={2.25} aria-hidden="true" />
              </div>
              <h3 className="mb-5 text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                {title}
              </h3>
              <p className="text-[15px] font-medium leading-7 text-zinc-600 dark:text-zinc-400">
                {description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
