"use client";

import { motion } from "framer-motion";
import { Mail, Github, Phone } from "lucide-react";
import { socials } from "@/data/socials";
import { Button } from "@/components/ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <p className="text-accent font-mono text-sm tracking-wider">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Have an idea worth building?
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Let&apos;s turn it into reality. I&apos;m open to collaborations,
            internships, hackathons, and meaningful projects.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href={`mailto:${socials.email}`}>
              <Button size="lg" className="gap-2">
                <Mail className="w-5 h-5" />
                Send me an email
              </Button>
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </a>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-zinc-500">
            <a
              href={`mailto:${socials.email}`}
              className="hover:text-accent transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              {socials.email}
            </a>
            <a
              href={`tel:${socials.phone}`}
              className="hover:text-accent transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              {socials.phone}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
