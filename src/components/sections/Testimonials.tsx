"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// Add a photo for each person in public/images/testimonials, then set `photo`
// to its path (for example: "/images/testimonials/jane-doe.jpg"). Leave it
// empty to show that person's initials until their photo is ready.
const testimonials = [
  {
    name: "Your first reference",
    role: "Manager, company or organisation",
    quote:
      "Add a short testimonial here about working with Melanie, her strengths, and the impact she made.",
    photo: "",
  },
  {
    name: "Your second reference",
    role: "Teammate, client, or mentor",
    quote:
      "Use this space for another person's experience collaborating with Melanie on a project or initiative.",
    photo: "",
  },
  {
    name: "Your third reference",
    role: "Lecturer, supervisor, or collaborator",
    quote:
      "Share a specific, genuine recommendation that helps visitors understand Melanie's work and character.",
    photo: "",
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .filter((word) => word !== "Your")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-2xl"
        >
          <p className="text-accent font-mono text-sm tracking-wider mb-3">Testimonials</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Kind words from people I&apos;ve worked with</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Recommendations from collaborators, mentors, clients, and teammates.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm dark:border-zinc-800 dark:bg-zinc-950"
            >
              <Quote className="h-8 w-8 text-accent/70" aria-hidden="true" />
              <blockquote className="mt-5 flex-1 text-zinc-700 dark:text-zinc-300 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <div className="mt-7 flex items-center gap-3 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                {testimonial.photo ? (
                  <img
                    src={testimonial.photo}
                    alt={`Photo of ${testimonial.name}`}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                ) : (
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent"
                    aria-label={`Photo placeholder for ${testimonial.name}`}
                  >
                    {initials(testimonial.name)}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-zinc-900 dark:text-white">{testimonial.name}</p>
                  <p className="mt-0.5 text-sm text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
