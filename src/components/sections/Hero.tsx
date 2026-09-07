"use client";

import { motion } from "framer-motion";
import { Github, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { socials } from "@/data/socials";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 overflow-hidden"
    >
      {/* Continuous animated grid background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />
        {/* Soft continuous floating orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-accent/10 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 40, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <p className="text-accent font-mono text-sm tracking-wider">
              Hi, I&apos;m Melanie 👋
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              Software Developer &{" "}
              <span className="text-accent">Embedded Systems</span> Enthusiast
            </h1>

            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed">
              I build software and technology solutions that solve real-world
              problems. Currently studying at Rwanda Coding Academy, focused on
              web development, embedded systems, and AI.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={() =>
                  document.getElementById("projects")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                View My Projects
              </Button>
              <Button
                variant="outline"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Let&apos;s Connect
              </Button>
            </div>

            <div className="flex items-center gap-5 pt-4">
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socials.email}`}
                className="text-zinc-500 hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Animated Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center order-1 lg:order-2"
          >
            {/* Continuous floating + glow container */}
            <motion.div
              className="relative"
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Soft rotating ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border border-accent/30"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
              <motion.div
                className="absolute -inset-8 rounded-full border border-accent/10"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Photo with continuous subtle pulse glow */}
              <motion.div
                className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-zinc-800 shadow-2xl"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(16, 185, 129, 0.2)",
                    "0 0 40px rgba(16, 185, 129, 0.35)",
                    "0 0 20px rgba(16, 185, 129, 0.2)",
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Image
                  src="/images/mela.png"
                  alt="Ndikubwimana Melanie"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 256px, 320px"
                />
                {/* Soft gradient overlay at bottom to reduce frame distraction */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>

              {/* Small continuous orbiting accent dots */}
              <motion.div
                className="absolute top-4 right-8 w-3 h-3 rounded-full bg-accent"
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute bottom-10 left-6 w-2 h-2 rounded-full bg-emerald-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-zinc-400"
        >
          <span className="text-xs font-mono">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}